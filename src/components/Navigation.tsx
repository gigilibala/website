import Image from 'next/image'
import Link from 'next/link'
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
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
      <div className='static md:hidden top-0 inset-x-0 h-20 shadow-md z-30'>
        <div className='flex justify-between items-center w-full h-full px-2'>
          <Image
            src='/spongebob.png'
            alt='Amin Hassani'
            width={50}
            height={50}
          />
          <div className='px-4 cursor-pointer hover:scale-125'>
            <FiMenu size={30} onClick={() => props.toggle()} />
          </div>
        </div>
      </div>
    </div>
  )
}

export function Navbar(props: NavigationProps) {
  const navClassName =
    'block p-2 rounded transition duration-100 hover:text-orange-100 hover:scale-105'
  const socialMediaClassName = 'hover:fill-blue-500 hover:scale-150'
  return (
    <div>
      <aside
        className={`fixed md:relative left-0 h-screen w-80 z-40 bg-gray-600 transform transition ease-in duration-300 md:translate-x-0 ${
          props.show ? '-translate-x-full' : ''
        }`}
      >
        <div className='flex flex-col justify-between items-center w-full p-10 text-white'>
          <div className='p-5 text-3xl font-bold arial'>Amin Hassani</div>
          <div className='p3'>
            <Link href='/'>
              <Image
                src='/spongebob.png'
                alt='Amin Hassani'
                width={200}
                height={200}
              />
            </Link>
          </div>
          <nav className='uppercase py-10'>
            <Link href='/' className={navClassName}>
              Home
            </Link>
            <Link href='/about' className={navClassName}>
              About
            </Link>
            <Link href='/impossible_list' className={navClassName}>
              Impossible List
            </Link>
            <Link href='/learning' className={navClassName}>
              Learning
            </Link>
            <Link href='/projects' className={navClassName}>
              Projects
            </Link>
            <Link href='/resume' className={navClassName}>
              Resume
            </Link>
          </nav>
          <div className='flex top-20 justify-between items-center w-[80%]'>
            <Link href={'https://github.com/gigilibala'} target='_blank'>
              <AiOutlineGithub size={40} className={socialMediaClassName} />
            </Link>
            <Link href={'https://www.linkedin.com/in/aminhassani'}>
              <AiFillLinkedin size={40} className={socialMediaClassName} />
            </Link>
            <Link href={'https://twitter.com/gigilibala'}>
              <AiFillTwitterCircle size={40} className={socialMediaClassName} />
            </Link>
            <Link href={'https://www.instagram.com/gigilibala4/'}>
              <AiFillInstagram size={40} className={socialMediaClassName} />
            </Link>
          </div>
        </div>
      </aside>
    </div>
  )
}
