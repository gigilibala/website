import ExLink from '@/components/ExLink'
import { NAME } from '@/misc/constants'

export default function Footer() {
  const copyright = String.fromCodePoint(0x00a9)
  const year = new Date().getFullYear()
  return (
    <div className='flex flex-col justify-center items-center'>
      <hr className='w-[80%] my-7' />
      <p>
        Powered by{' '}
        <ExLink href={'https://github.com/gigilibala/personal-website'}>
          GitHub
        </ExLink>{' '}
        and <ExLink href={'https://firebase.google.com/'}>Firebase</ExLink>
      </p>
      <p className='capitalize'>
        {`${copyright} ${year} ${NAME}`}. All rights reserved.
      </p>
    </div>
  )
}
