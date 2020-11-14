import { Flex, Box, Heading, IconButton, Tag, TagLabel } from '@chakra-ui/core'
import { FaRedditAlien } from 'react-icons/fa'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

export const Header = () => {
  return (
    <>
      <Flex
        as="header"
        h="64px"
        justify="center"
        align="center"
        bgColor="reddit.black"
        color="#fff"
      >
        <Box
          as={FaRedditAlien}
          bgColor="reddit.orange"
          color="white"
          p="8px"
          mr="12px"
          borderRadius="50%"
          fontSize="2.5em"
        />

        <Heading as="h1" size="xl">
          Daily Memes
        </Heading>
      </Flex>

      <Flex as="nav" justifyContent="space-between" padding="16px" backgroundColor="reddit.gray">
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

        <Tag rounded="full" p="0 16px" bgColor="reddit.orange" color="white">
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
    </>
  )
}
