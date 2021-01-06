import { Box } from '@chakra-ui/react'
import { Books4Devs } from '../../containers/Books'

const Books4DevsPage = () => {
  return (
    <Books4Devs>
      <Box as="header">
        <h1>Books 4 Devs</h1>
        <p>All-time favorite book recommendations from developers for developers.</p>
      </Box>

      <Books4Devs.SubscriptionForm />

      <Books4Devs.FeaturedBook />

      <Books4Devs.BooksList>
        <Books4Devs.BookItem />
        <Books4Devs.BookItem />
        <Books4Devs.BookItem />
      </Books4Devs.BooksList>
    </Books4Devs>
  )
}

export default Books4DevsPage
