import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineCloseCircle, AiOutlineGithub } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'
import { NAME } from '../misc/constants'

export type NavigationProps = {
  show: boolean
  toggle: () => void
}

export function Topbar(props: NavigationProps) {
  return (
    <div>
      <div className='fixed md:hidden w-full top-0 inset-x-0 h-20 shadow-lg z-30 bg-slate-200'>
        <div className='flex justify-between items-center w-full h-full px-2'>
          <h2 className='px-5'>
            <Link href={'/'}>{NAME}</Link>
          </h2>
          <div className='px-4 cursor-pointer hover:scale-125'>
            <FiMenu size={30} onClick={props.toggle} />
          </div>
        </div>
      </div>
    </div>
  )
}

export function Navbar(props: NavigationProps) {
  const navClassName =
    'block p-2 rounded transition duration-100 hover:text-orange-400 hover:scale-105 text-white visited:text-white'
  const socialMediaClassName = 'hover:scale-125'
  return (
    <div>
      <aside
        className={`fixed md:visible inset-y-0 left-0 z-40 w-80 bg-green-950 ${
          props.show ? '' : 'invisible'
        }`}
      >
        <div className='flex flex-col justify-between items-center w-full p-10 text-white'>
          <div className='md:hidden px-4 cursor-pointer hover:scale-125 self-end'>
            <AiOutlineCloseCircle size={30} onClick={props.toggle} />
          </div>
          <div className='p-5 text-3xl font-bold'>{NAME}</div>
          <div className='p3'>
            <Link href='/' onClick={props.toggle}>
              <Image
                src='/me.jpeg'
                alt='Amin Hassani'
                width={200}
                height={200}
                className='rounded-full'
              />
            </Link>
          </div>
          <nav className='uppercase py-10'>
            <Link href='/' className={navClassName} onClick={props.toggle}>
              Home
            </Link>
            <Link href='/about' className={navClassName} onClick={props.toggle}>
              About
            </Link>
            <Link
              href='/impossible_list'
              className={navClassName}
              onClick={props.toggle}
            >
              Impossible List
            </Link>
            <Link
              href='/projects'
              className={navClassName}
              onClick={props.toggle}
            >
              Projects
            </Link>
            <Link
              href='/travels'
              className={navClassName}
              onClick={props.toggle}
            >
              Travels
            </Link>
          </nav>
          <div className='flex top-20 justify-between items-center w-[90%]'>
            <Link href={'https://github.com/gigilibala'} target='_blank'>
              <AiOutlineGithub
                size={40}
                className={socialMediaClassName}
                onClick={props.toggle}
              />
            </Link>
            <Link
              href={'https://www.linkedin.com/in/aminhassani'}
              target='_blank'
            >
              <Image
                src={'linkedin.svg'}
                alt={'linkedin'}
                width={40}
                height={40}
                className={socialMediaClassName}
                onClick={props.toggle}
              />
            </Link>
            <Link href={'https://twitter.com/gigilibala'} target='_blank'>
              <Image
                src={'twitter.svg'}
                alt={'twitter'}
                width={40}
                height={40}
                className={socialMediaClassName}
                onClick={props.toggle}
              />
            </Link>
            <Link
              href={'https://www.instagram.com/gigilibala4/'}
              target='_blank'
            >
              <Image
                src={'instagram.svg'}
                alt={'instagram'}
                width={40}
                height={40}
                className={socialMediaClassName}
                onClick={props.toggle}
              />
            </Link>
          </div>
        </div>
      </aside>
    </div>
  )
}

export function DummyNavBar() {
  return (
    <div
      className={`md:invisible inset-y-0 left-0 z-40 md:w-80 flex-shrink-0`}
    ></div>
  )
}
