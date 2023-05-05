import Image from 'next/image'
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
  return (
    <div>
      <aside
        className={`fixed md:relative left-0 h-screen w-80 z-40 bg-gray-100 transform transition ease-in duration-300 md:translate-x-0 ${
          props.show ? '-translate-x-full' : ''
        }`}
      >
        <div className='flex justify-between items-center w-full p-3'>
          <p>Amin Hassani</p>
        </div>
      </aside>
    </div>
  )
}
