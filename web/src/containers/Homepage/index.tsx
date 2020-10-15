import Head from 'next/head'

import { Header } from './Header'

export const Homepage = () => {
  return (
    <>
      <Head>
        <title>MG Sandbox</title>
        <meta
          name="description"
          content="Michael Gee's sandbox project where I learn and build new things with various web technologies."
        />
      </Head>

      <main>
        <Header />
      </main>
    </>
  )
}
