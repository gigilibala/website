import { Navbar, Topbar } from '@/components/Navigation'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [showSideBar, setShowSideBar] = useState<boolean>(true)

  return (
    <div className='flex'>
      <Navbar
        show={showSideBar}
        toggle={() => setShowSideBar((prev) => !prev)}
      />
      <div className='flex-1 flex flex-col'>
        <Topbar
          show={showSideBar}
          toggle={() => setShowSideBar((prev) => !prev)}
        />
        <Component {...pageProps} />
      </div>
    </div>
  )
}
