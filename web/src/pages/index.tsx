import Link from 'next/link'
import { Home } from '../containers/Home'
import { Flex, Link as ChakraLink } from '@chakra-ui/react'

const HomePage = () => {
  return (
    <Home>
      <Home.Header />

      <Flex direction="column" justify="center" align="center">
        <Link href="/books">
          <ChakraLink color="#000" p="16px 0 8px 0">
            Dev Books
          </ChakraLink>
        </Link>

        <Link href="/dailymemes">
          <ChakraLink color="#000" p="8px 0">
            Daily Dev Memes
          </ChakraLink>
        </Link>
      </Flex>
    </Home>
  )
}

export default HomePage
