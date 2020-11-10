import { Flex, Box, Heading, IconButton } from '@chakra-ui/core'
import { FaRedditAlien } from 'react-icons/fa'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

export const Header = () => {
  return (
    <>
      <Flex
        as="header"
        h="64px"
        justifyContent="center"
        alignItems="center"
        bgColor="#000"
        color="#fff"
      >
        <Box
          as={FaRedditAlien}
          backgroundColor="#FF4602"
          color="white"
          padding="8px"
          borderRadius="50%"
          fontSize="2.5em"
          marginRight="12px"
        />

        <Heading as="h1" size="xl">
          Daily Memes
        </Heading>
      </Flex>

      <Flex as="nav" justifyContent="space-between" margin="4px 16px">
        <IconButton
          icon={<BiChevronLeft />}
          size="sm"
          fontSize="1.4em"
          backgroundColor="#FF4602"
          _hover={{ opacity: 0.8 }}
          color="white"
          aria-label=""
        />
        <IconButton
          icon={<BiChevronRight />}
          size="sm"
          fontSize="1.4em"
          backgroundColor="#FF4602"
          _hover={{ opacity: 0.8 }}
          color="white"
          aria-label=""
        />
      </Flex>
    </>
  )
}
