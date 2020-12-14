import Link from 'next/link'
import { Flex, Link as ChakraLink } from '@chakra-ui/react'
import { Home } from '../containers/Home'

const HomePage = () => {
  return (
    <Home>
      <Home.Header />

      <Flex justify="center" align="center" h="80px">
        <Link href="/dailymemes">
          <ChakraLink color="#000">Daily DEV Memes</ChakraLink>
        </Link>
      </Flex>
    </Home>
  )
}

export default HomePage
