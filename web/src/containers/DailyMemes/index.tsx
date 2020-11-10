import Head from 'next/head'
import { Header } from './Header'
import { Footer } from './Footer'

export const DailyMemes = () => {
  return (
    <>
      <Head>
        <title>Daily Memes | MG Sandbox</title>
        <meta
          name="description"
          content="Michael Gee's sandbox project where I learn and build new things with various web technologies."
        />
      </Head>

      <main>
        <Header />

        <div>Body</div>

        <Footer />
      </main>
    </>
  )
}
