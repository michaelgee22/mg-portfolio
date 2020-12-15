import { useState, useEffect } from 'react'
import { DailyMemes } from '../../containers/DailyMemes'
import { Flex, Box } from '@chakra-ui/react'
import { FaRedditAlien } from 'react-icons/fa'

type Props = {
  memes: string[]
}

const DailyMemesPage = (props: Props) => {
  const [memes] = useState<string[]>(props.memes)
  const [memeIndex, setMemeIndex] = useState<number>(0)
  const [imageSrc, setImageSrc] = useState<string | undefined>()

  useEffect(() => {
    if (!memes || (memes && memes.length === 0)) setImageSrc('invalid')
    else if (memes && memes.length > 0) setImageSrc(memes[memeIndex])
  }, [props.memes])

  useEffect(() => {
    if (memes && memes.length > 0) setImageSrc(memes[memeIndex])
  }, [memeIndex])

  return (
    <DailyMemes>
      <Box as="header">
        <Flex align="center" p="16px 0" pl="16px" backgroundColor="reddit.300">
          <Box as={FaRedditAlien} w={6} h={6} color="white" mr="10px" />
          <Box as="span" fontSize="1.2em">
            Daily Memes
          </Box>
        </Flex>

        <DailyMemes.CategoryMenu />
      </Box>

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
  const res = await fetch(`https://www.reddit.com/r/ProgrammerHumor/.json?&limit=100`)
  const { data } = await res.json()
  let memes: string[] = []

  if (data.children) {
    memes = data.children
      .map((item: any) => {
        if (item.data && item.data.url) {
          const imageType = item.data.url.slice(-3)
          if (imageType === 'jpg' || imageType === 'png') {
            return item.data.url
          }
        }
      })
      .filter((meme: string) => typeof meme === 'string')
  }

  return { props: { memes } }
}

export default DailyMemesPage
