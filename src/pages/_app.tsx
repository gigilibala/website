import Footer from '@/components/Footer'
import { DummyNavBar, Navbar, Topbar } from '@/components/Navigation'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [showSideBar, setShowSideBar] = useState<boolean>(false)
  function toggle() {
    setShowSideBar((prev) => !prev)
  }

  return (
    <div>
      <Topbar show={showSideBar} toggle={toggle} />
      <div className='flex py-20'>
        <DummyNavBar />
        <div className='flex-1 flex flex-col items-center'>
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
      <Navbar show={showSideBar} toggle={toggle} />
    </div>
  )
}
