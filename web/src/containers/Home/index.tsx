import { PageHead } from '../../components/PageHead'
import { Box } from '@chakra-ui/react'
import { Header } from './Header'

type Props = {
  children?: React.ReactNode
}

export const Home = (props: Props) => {
  return (
    <>
      <PageHead
        title="Michael Gee's Sandbox"
        description="Michael Gee's sandbox project where I learn and build new things with various web technologies."
        url="https://michaelgee.dev"
      />

      <Box as="main" w="100%" h="100%">
        {props.children}
      </Box>
    </>
  )
}

Home.Header = Header
