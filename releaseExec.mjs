import { execSync } from 'child_process'
import { writeFileSync } from 'fs'
import packageJson from './package.json' with { type: 'json' }

async function prepare(_, context) {
  const next = context.nextRelease.version
  packageJson.version = next
  writeFileSync('./package.json', JSON.stringify(packageJson, null, 2) + '\n', {
    flush: true,
  })

  const output = execSync('yarn build')
  console.log(output.toString())
}

export default {
  prepare,
}
