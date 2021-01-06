import { Box } from '@chakra-ui/react'

export const FeaturedBook = () => {
  return (
    <Box as="section" border="2px solid red" m="16px 0" p="16px">
      <h2>Latest Book (Book 1 Item)</h2>
      <p>This one will be bigger (but not too big) and the primary focus of the page.</p>
    </Box>
  )
}
