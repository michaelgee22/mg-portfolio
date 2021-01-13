import { PageHead } from '../../components/PageHead'
import { SubscriptionForm } from './SubscriptionForm'
import { Recommendation } from './Recommendation'
import { Footer } from './Footer'
import { Box } from '@chakra-ui/react'

type Props = {
  children?: React.ReactNode
}

export const DevBooks = (props: Props) => {
  return (
    <>
      <PageHead
        title="Dev Books"
        description="All-time favorite book recommendations from developers for developers."
        url="https://michaelgee.dev/books"
      />

      <Box as="main">{props.children}</Box>
    </>
  )
}

DevBooks.SubscriptionForm = SubscriptionForm
DevBooks.Recommendation = Recommendation
DevBooks.Footer = Footer
