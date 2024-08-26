import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Main from '@src/components/Main'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amin Hassani',
  description: 'Personal website of Amin Hassani',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Main>{children}</Main>
      </body>
    </html>
  )
}
