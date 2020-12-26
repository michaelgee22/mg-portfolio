import { Header } from './Header'

import { Box } from '@chakra-ui/react'

type Props = {
  children?: React.ReactNode
}

export const Books4Devs = (props: Props) => {
  return (
    <Box as="main" w="100%" textAlign="center">
      {props.children}

      <Box as="section" border="2px solid red" m="16px 0" p="16px">
        <h2>Latest Book (Book 1 Item)</h2>
        <p>This one will be bigger (but not too big) and the primary focus of the page.</p>
      </Box>

      <Box as="section" border="2px solid blue" m="16px 0" p="16px 40px">
        <ul>
          <li>Book 2 Item</li>
          <li>Book 3 Item</li>
          <li>Book 4 Item</li>
        </ul>
      </Box>
    </Box>
  )
}

Books4Devs.Header = Header
