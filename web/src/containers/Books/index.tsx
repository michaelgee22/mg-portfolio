import { SubscriptionForm } from './SubscriptionForm'
import { FeaturedBook } from './Featured'
import { BooksList } from './List'
import { BookItem } from './List/BookItem'

import { Box } from '@chakra-ui/react'

type Props = {
  children?: React.ReactNode
}

export const Books4Devs = (props: Props) => {
  return (
    <Box as="main" w="100%" textAlign="center">
      {props.children}
    </Box>
  )
}

Books4Devs.SubscriptionForm = SubscriptionForm
Books4Devs.FeaturedBook = FeaturedBook
Books4Devs.BooksList = BooksList
Books4Devs.BookItem = BookItem
