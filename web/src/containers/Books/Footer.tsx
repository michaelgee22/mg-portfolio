import Link from 'next/link'
import { Box, Flex, Icon, Link as ChakraLink } from '@chakra-ui/react'
import { FaBook } from 'react-icons/fa'

export const Footer = () => {
  return (
    <Flex as="footer" direction="column" align="center" pt="16px">
      <Flex align="center">
        <Link href="/">
          <ChakraLink>Homepage</ChakraLink>
        </Link>

        <Box w="8px" h="8px" backgroundColor="#f37f65" borderRadius="50%" m="0 8px" />

        <ChakraLink
          href="https://github.com/michaelgee22/michaelgee.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </ChakraLink>

        <Box w="8px" h="8px" backgroundColor="#f37f65" borderRadius="50%" m="0 8px" />

        <ChakraLink href="https://dev.to/michaelgee" target="_blank" rel="noopener noreferrer">
          DEV Blog
        </ChakraLink>
      </Flex>

      <Icon as={FaBook} fontSize="32px" m="16px 0 32px 0" color="#f37f65" />
    </Flex>
  )
}
