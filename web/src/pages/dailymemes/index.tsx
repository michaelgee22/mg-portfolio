import { DailyMemes } from '../../containers/DailyMemes'
import { useMemes, NavTypes } from '../../containers/DailyMemes/useMemes'
import { Flex, Box } from '@chakra-ui/react'
import { FaRedditAlien } from 'react-icons/fa'

const DailyMemesPage = () => {
  const { status, current, total, onUpdateMeme } = useMemes()

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

      <DailyMemes.ImageRenderer src={current?.src} status={status} key={`meme-${current?.index}`} />

      <DailyMemes.Nav
        next={() => onUpdateMeme(NavTypes.NEXT)}
        prev={() => onUpdateMeme(NavTypes.PREV)}
        memeIndex={current && current.index ? current.index : 0}
        memeTotal={total}
        status={status}
      />
    </DailyMemes>
  )
}

export default DailyMemesPage
