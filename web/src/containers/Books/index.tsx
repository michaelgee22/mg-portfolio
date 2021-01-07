import { SubscriptionForm } from './SubscriptionForm'
import { BooksList } from './List'
import { Recommendation } from './Recommendation'

import { Box } from '@chakra-ui/react'

type Props = {
  children?: React.ReactNode
}

export const Books4Devs = (props: Props) => {
  return <Box as="main">{props.children}</Box>
}

Books4Devs.SubscriptionForm = SubscriptionForm
Books4Devs.BooksList = BooksList
Books4Devs.Recommendation = Recommendation
