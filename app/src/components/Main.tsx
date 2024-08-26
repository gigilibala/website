'use client'

import { PropsWithChildren, useState } from 'react'
import Footer from './Footer'
import { DummyNavBar, Navbar, Topbar } from './Navigation'

export default function Main({ children }: PropsWithChildren) {
  const [showSideBar, setShowSideBar] = useState<boolean>(false)
  function toggle() {
    setShowSideBar((prev) => !prev)
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Topbar show={showSideBar} toggle={toggle} />
      <div className='flex py-20'>
        <DummyNavBar />
        <div className='flex-1 flex flex-col items-center'>
          {children}
          <Footer />
        </div>
      </div>
      <Navbar show={showSideBar} toggle={toggle} />
    </main>
  )
}
