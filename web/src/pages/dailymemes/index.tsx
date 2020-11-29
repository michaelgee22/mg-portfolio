import { useState, useEffect } from 'react'
import { DailyMemes } from '../../containers/DailyMemes'
import { Flex, Box } from '@chakra-ui/react'
import { FaRedditAlien } from 'react-icons/fa'

type Props = {
  memes: string[]
}

const DailyMemesPage = (props: Props) => {
  const [memes] = useState(props.memes)
  const [memeIndex, setMemeIndex] = useState(0)
  const [imageSrc, setImageSrc] = useState(memes && memes.length > 0 ? memes[memeIndex] : 'invalid')

  useEffect(() => {
    setImageSrc(memes[memeIndex])
  }, [memeIndex])

  return (
    <DailyMemes>
      <DailyMemes.CategoryMenu />

      <Flex justify="center" align="center" p="16px 0" bgColor="reddit.black">
        <Box as={FaRedditAlien} w={5} h={5} color="white" mr="8px" />
        <Box as="span">Daily Memes</Box>
      </Flex>

      <DailyMemes.ImageRenderer src={imageSrc} key={`image-${memeIndex}`} />

      <DailyMemes.BottomNav
        next={() => setMemeIndex(memeIndex + 1)}
        prev={() => setMemeIndex(memeIndex - 1)}
        memeIndex={memeIndex}
        memeTotal={memes.length}
      />
    </DailyMemes>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://www.reddit.com/r/dankmemes/.json?&limit=100`)
  const { data } = await res.json()
  let memes = []

  if (data.children) {
    memes = data.children
      .map((item: any) => {
        if (item.data && item.data.url) {
          const imageType = item.data.url.slice(-3)
          if (imageType === 'jpg' || imageType === 'png' || imageType === 'gif') {
            return item.data.url
          }
        }
      })
      .filter((meme: string) => typeof meme === 'string')
  }

  return { props: { memes } }
}

export default DailyMemesPage
