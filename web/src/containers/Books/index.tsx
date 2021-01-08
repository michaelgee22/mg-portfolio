import { PageHead } from '../../components/PageHead'
import { SubscriptionForm } from './SubscriptionForm'
import { Recommendation } from './Recommendation'
import { Box } from '@chakra-ui/react'

type Props = {
  children?: React.ReactNode
}

export const Books4Devs = (props: Props) => {
  return (
    <>
      <PageHead
        title="Books 4 Devs"
        description="All-time favorite book recommendations from developers for developers."
        url="https://michaelgee.dev/books"
      />

      <Box as="main">{props.children}</Box>
    </>
  )
}

Books4Devs.SubscriptionForm = SubscriptionForm
Books4Devs.Recommendation = Recommendation
