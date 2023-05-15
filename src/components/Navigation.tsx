import Image from 'next/image'
import Link from 'next/link'
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineCloseCircle,
  AiOutlineGithub,
} from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'

export type NavigationProps = {
  show: boolean
  toggle: () => void
}

export function Topbar(props: NavigationProps) {
  return (
    <div>
      <div className='fixed md:hidden w-full top-0 inset-x-0 h-20 shadow-md z-30 bg-slate-300'>
        <div className='flex justify-between items-center w-full h-full px-2'>
          <h2>Amin Hassani</h2>
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
  const socialMediaClassName =
    'hover:fill-orange-400 hover:scale-150 fill-white'
  return (
    <div>
      <aside
        className={`fixed md:visible inset-y-0 left-0 z-40 w-80 bg-gray-600 ${
          props.show ? '' : 'invisible'
        }`}
      >
        <div className='flex flex-col justify-between items-center w-full p-10 text-white'>
          <div className='md:hidden px-4 cursor-pointer hover:scale-125 self-end'>
            <AiOutlineCloseCircle size={30} onClick={props.toggle} />
          </div>
          <div className='p-5 text-3xl font-bold arial'>Amin Hassani</div>
          <div className='p3'>
            <Link href='/' onClick={props.toggle}>
              <Image
                src='/spongebob.png'
                alt='Amin Hassani'
                width={200}
                height={200}
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
              href='/learning'
              className={navClassName}
              onClick={props.toggle}
            >
              Learning
            </Link>
            <Link
              href='/projects'
              className={navClassName}
              onClick={props.toggle}
            >
              Projects
            </Link>
            <Link
              href='/resume'
              className={navClassName}
              onClick={props.toggle}
            >
              Resume
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
              <AiFillLinkedin
                size={40}
                className={socialMediaClassName}
                onClick={props.toggle}
              />
            </Link>
            <Link href={'https://twitter.com/gigilibala'} target='_blank'>
              <AiFillTwitterCircle
                size={40}
                className={socialMediaClassName}
                onClick={props.toggle}
              />
            </Link>
            <Link
              href={'https://www.instagram.com/gigilibala4/'}
              target='_blank'
            >
              <AiFillInstagram
                size={40}
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
