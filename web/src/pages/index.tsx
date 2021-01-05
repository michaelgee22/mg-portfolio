import Link from 'next/link'
import { Flex, Link as ChakraLink } from '@chakra-ui/react'
import { Home } from '../containers/Home'

const HomePage = () => {
  return (
    <Home>
      <Home.Header />

      <Flex direction="column" justify="center" align="center">
        <Link href="/books">
          <ChakraLink color="#000" p="16px 0 8px 0">
            Books 4 Devs
          </ChakraLink>
        </Link>

        <Link href="/dailymemes">
          <ChakraLink color="#000" p="8px 0">
            Daily DEV Memes
          </ChakraLink>
        </Link>
      </Flex>
    </Home>
  )
}

export default HomePage
