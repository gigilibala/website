export const NAME = 'Amin Hassani'
export const EMAIL = 'ahassani4@gmail.com'

export type NavLink = { href: string; label: string }

export const NAV_LINKS: NavLink[] = [
  { href: '/experience', label: 'Experience' },
  { href: '/impossible_list', label: 'Impossible list' },
  { href: '/travels', label: 'Travels' },
]

export type Social = { href: string; label: string; icon: string }

export const SOCIALS: Social[] = [
  { href: 'https://github.com/gigilibala', label: 'GitHub', icon: 'github' },
  {
    href: 'https://www.linkedin.com/in/aminhassani',
    label: 'LinkedIn',
    icon: 'linkedin',
  },
  { href: 'https://twitter.com/gigilibala', label: 'X (Twitter)', icon: 'x' },
  {
    href: 'https://www.instagram.com/gigilibala4/',
    label: 'Instagram',
    icon: 'instagram',
  },
]
