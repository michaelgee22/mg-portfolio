import Head from 'next/head'

type Props = {
  title: string
  description: string
  url?: string
  type?: string
}

export const PageHead = (props: Props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      {props.type && <meta property="og:type" content={props.type} />}
      {props.url && <meta property="og:url" content={props.url} />}
    </Head>
  )
}
