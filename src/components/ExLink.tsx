import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link, { LinkProps } from 'next/link'
import { PropsWithChildren } from 'react'

export default function ExLink({
  children,
  ...props
}: PropsWithChildren<LinkProps>) {
  return (
    <Link target='blank' {...props}>
      {children}{' '}
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-sm' />
    </Link>
  )
}
