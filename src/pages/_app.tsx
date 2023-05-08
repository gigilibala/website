import { DummyNavBar, Navbar, Topbar } from '@/components/Navigation'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [showSideBar, setShowSideBar] = useState<boolean>(true)
  function toggle() {
    setShowSideBar((prev) => !prev)
  }

  return (
    <div className='flex flex-col'>
      <Topbar show={showSideBar} toggle={toggle} />
      <div className='flex-1 flex py-20'>
        <DummyNavBar />
        <Component {...pageProps} />
      </div>
      <Navbar show={showSideBar} toggle={toggle} />
    </div>
  )
}
