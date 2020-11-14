import { Flex, Box, IconButton, Tag, TagLabel } from '@chakra-ui/core'
import { FaRedditAlien } from 'react-icons/fa'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

export const Header = () => {
  return (
    <Box as="header" bgColor="reddit.black" color="white">
      <Flex as="nav" justify="center" p="8px 16px" bgColor="reddit.gray">
        <IconButton
          icon={<BiChevronLeft />}
          size="sm"
          fontSize="1.4em"
          p="0 16px"
          bgColor="reddit.orange"
          _hover={{ opacity: 0.8 }}
          color="white"
          aria-label=""
        />

        <Tag p="0 16px" m="0 16px" bgColor="reddit.orange" color="white">
          <TagLabel>Dev - 1 / 100</TagLabel>
        </Tag>

        <IconButton
          icon={<BiChevronRight />}
          size="sm"
          fontSize="1.4em"
          p="0 16px"
          bgColor="reddit.orange"
          _hover={{ opacity: 0.8 }}
          color="white"
          aria-label=""
        />
      </Flex>

      <Flex justify="center" align="center" py="8px">
        <Box as={FaRedditAlien} w={5} h={5} color="white" mr="10px" />
        <span>Daily Memes</span>
      </Flex>
    </Box>
  )
}
