import { NAME } from '@/misc/constants'
import Link from 'next/link'

export default function Footer() {
  const copyright = String.fromCodePoint(0x00a9)
  const year = new Date().getFullYear()
  return (
    <div className='flex flex-col justify-center items-center'>
      <hr className='w-[80%] my-7' />
      <p>
        Powered by{' '}
        <Link
          href={'https://github.com/gigilibala/personal-website'}
          target='blank'
          className='link'
        >
          GitHub
        </Link>
        ,{' '}
        <Link
          href={'https://firebase.google.com/'}
          target='blank'
          className='link'
        >
          Firebase
        </Link>
        , and{' '}
        <Link href={'https://nextjs.org/'} target='blank' className='link'>
          Next.js
        </Link>
      </p>
      <p className='capitalize'>
        {`${copyright} ${year} ${NAME}`}. All rights reserved.
      </p>
    </div>
  )
}
