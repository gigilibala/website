import Link, { LinkProps } from 'next/link'
import { PropsWithChildren } from 'react'

export default function ExLink({
  children,
  ...props
}: PropsWithChildren<LinkProps>) {
  return (
    <Link target='blank' {...props}>
      {children}
    </Link>
  )
}
