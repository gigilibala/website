// Builds SVG map paths at build time, so the page ships plain SVG and no JS.
import { geoEqualEarth, geoPath, type GeoProjection } from 'd3-geo'
import { feature } from 'topojson-client'
import { presimplify, simplify } from 'topojson-simplify'
import type {
  GeometryCollection,
  Objects,
  Topology,
} from 'topojson-specification'
import usAtlas from 'us-atlas/states-albers-10m.json'
import worldAtlas from 'world-atlas/countries-110m.json'

// Every region in both atlases has a `name` property.
type Atlas = Topology<Objects<{ name: string }>>

export type Region = {
  name: string
  d: string
  visited: boolean
  home: boolean
  // Set for visited regions too small to see; draws a marker there.
  marker?: [number, number]
}

export type MapData = { width: number; height: number; regions: Region[] }

// Visited regions smaller than this many square px also get a dot marker.
const SMALL_AREA = 40

function build(
  topology: Atlas,
  object: string,
  width: number,
  height: number,
  visited: string[],
  home: string,
  projection: GeoProjection | null,
  minWeight: number,
  skip: string[] = [],
): MapData {
  // Drop detail too fine to see; shared borders stay aligned.
  topology = simplify(presimplify(topology), minWeight)
  const { features } = feature(
    topology,
    topology.objects[object] as GeometryCollection<{ name: string }>,
  )
  const names = new Set(features.map((f) => f.properties.name))
  const unknown = visited.filter((n) => !names.has(n))
  if (unknown.length) {
    throw new Error(`Unknown map region(s): ${unknown.join(', ')}`)
  }

  if (projection) {
    const shown = features.filter((f) => !skip.includes(f.properties.name))
    projection.fitSize([width, height], {
      type: 'FeatureCollection',
      features: shown,
    })
  }
  const path = geoPath(projection).digits(1)

  const regions = features
    .filter((f) => !skip.includes(f.properties.name))
    .map((f) => {
      const name = f.properties.name
      const isVisited = visited.includes(name)
      const region: Region = {
        name,
        d: path(f) ?? '',
        visited: isVisited,
        home: name === home,
      }
      if (isVisited && path.area(f) < SMALL_AREA) {
        const [x, y] = path.centroid(f)
        region.marker = [Math.round(x), Math.round(y)]
      }
      return region
    })
  return { width, height, regions }
}

export function worldMap(visited: string[], home: string): MapData {
  return build(
    worldAtlas as unknown as Atlas,
    'countries',
    960,
    470,
    visited,
    home,
    geoEqualEarth(),
    // Triangle area in degrees², since this atlas is unprojected.
    0.05,
    ['Antarctica'],
  )
}

export function usMap(visited: string[], home: string): MapData {
  // us-atlas ships this file pre-projected (Albers USA) into a 975×610 frame.
  return build(
    usAtlas as unknown as Atlas,
    'states',
    975,
    610,
    visited,
    home,
    null,
    // Triangle area in px² of the 975×610 frame.
    1,
  )
}
