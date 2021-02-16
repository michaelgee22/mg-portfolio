import { PageHead } from '@/components/PageHead'
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
				description="All-time favorite book recommendations from awesome software developers."
				url="https://michaelgee.dev/books"
				image="https://res.cloudinary.com/practicaldev/image/fetch/s--9rj6p71K--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ib34btd3n5ywi5ieoyze.jpg"
			/>

			<Box as="main">{props.children}</Box>
		</>
	)
}

AwesomeBooks.SubscriptionForm = SubscriptionForm
AwesomeBooks.Recommendation = Recommendation
AwesomeBooks.Footer = Footer
