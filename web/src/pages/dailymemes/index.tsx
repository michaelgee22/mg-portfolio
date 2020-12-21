import { DailyMemes } from '../../containers/DailyMemes'
import { useMemes } from '../../containers/DailyMemes/useMemes'
import { Flex, Box } from '@chakra-ui/react'
import { FaRedditAlien } from 'react-icons/fa'

const DailyMemesPage = () => {
  const { src, index, total, onUpdateMeme, isLoading } = useMemes()

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

      <DailyMemes.ImageRenderer src={src} isLoading={isLoading} key={`meme-${index}`} />

      <DailyMemes.Nav
        next={() => onUpdateMeme(index + 1)}
        prev={() => onUpdateMeme(index - 1)}
        memeIndex={index}
        memeTotal={total}
        isLoading={isLoading}
      />
    </DailyMemes>
  )
}

export default DailyMemesPage
