import { useState, useEffect } from 'react'
import { DailyMemes } from '../../containers/DailyMemes'

type Props = {
  memes: string[]
}

const DailyMemesPage = (props: Props) => {
  const [memes, setMemes] = useState(props.memes)
  const [memeIndex, setMemeIndex] = useState(0)
  const [imageSrc, setImageSrc] = useState(memes[memeIndex])

  useEffect(() => {
    setImageSrc(memes[memeIndex])
  }, [memeIndex])

  return (
    <DailyMemes>
      <DailyMemes.CategoryMenu />
      <DailyMemes.ImageRenderer src={imageSrc} key={`image-${memeIndex}`} />
      <DailyMemes.Nav
        next={() => setMemeIndex(memeIndex + 1)}
        prev={() => setMemeIndex(memeIndex - 1)}
        memeIndex={memeIndex}
        memeTotal={memes.length}
      />
    </DailyMemes>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://www.reddit.com/r/programmerhumor/.json?&limit=100`)
  const { data } = await res.json()

  const memes = data.children
    .map((item: any) => {
      if (item.data && item.data.url) {
        const imageType = item.data.url.slice(-3)
        if (imageType === 'jpg' || imageType === 'png' || imageType === 'gif') {
          return item.data.url
        }
      }
    })
    .filter((meme: string) => typeof meme === 'string')

  return { props: { memes } }
}

export default DailyMemesPage
