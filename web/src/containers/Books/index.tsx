import { PageHead } from '../../components/PageHead'
import { SubscriptionForm } from './SubscriptionForm'
import { Recommendation } from './Recommendation'
import { Footer } from './Footer'
import { Box } from '@chakra-ui/react'

type Props = {
  children?: React.ReactNode
}

export const AwesomeBooks = (props: Props) => {
  return (
    <>
      <PageHead
        title="awesome-books"
        description="All-time favorite book recommendations from developers for developers."
        url="https://michaelgee.dev/books"
      />

      <Box as="main">{props.children}</Box>
    </>
  )
}

AwesomeBooks.SubscriptionForm = SubscriptionForm
AwesomeBooks.Recommendation = Recommendation
AwesomeBooks.Footer = Footer
