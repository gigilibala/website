import { loremIpsum } from 'lorem-ipsum'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
  const [content, setContent] = useState('')
  useEffect(() => {
    setContent(loremIpsum({ count: 10, units: 'paragraphs' }))
  }, [])

  return (
    <main>
      <Head>
        <title>Amin Hassani</title>
      </Head>
      <div className='max-w-xl text-center'>
        <div className='w-full h-full mx-auto flex flex-col justify-center items-center'>
          <p>
            My name is Amin Hassani! I am a software engineer based on San
            Francisco bay area. I love building and learning new things. Hit me
            up if you have anything in mind.
          </p>
          {/* <p>{content}</p> */}
        </div>
      </div>
    </main>
  )
}
