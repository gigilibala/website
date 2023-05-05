import Head from 'next/head'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Amin Hassani</title>
      </Head>
      <div>Content is mine and everything that comes with it is mine also</div>
      {/* <Layout>
        <div className="h-screen-full w-full text-center">
          <div className="w-full h-full mx-auto flex flex-col justify-center items-center">
            <p>
              My name is Amin Hassani! I am a software engineer based on San
              Francisco bay area.
            </p>
            <p>{loremIpsum({ count: 10, units: 'paragraphs' })}</p>
          </div>
        </div>
      </Layout> */}
    </main>
  )
}
