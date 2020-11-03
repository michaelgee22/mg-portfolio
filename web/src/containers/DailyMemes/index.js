import Head from 'next/head'

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
        <h1>Daily Memes</h1>

        <div>Welcome Page - Category Selection</div>

        <h3>Categories</h3>
        <ul>
          <li>Dev</li>
          <li>Dank</li>
          <li>Normal</li>
        </ul>
      </main>
    </>
  )
}
