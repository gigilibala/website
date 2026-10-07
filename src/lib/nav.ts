/**
 * Decides whether a top-bar link should be highlighted as the current page.
 *
 * `pathname` comes from Astro.url.pathname, e.g. '/', '/travels', '/travels/'
 * (a trailing slash may or may not be present depending on how the page was
 * reached and Firebase's cleanUrls setting). `href` is a NAV_LINKS entry,
 * e.g. '/travels'.
 */
export function isActive(pathname: string, href: string): boolean {
  // TODO(you): implement — see the notes in the chat.
  return pathname === href
}
