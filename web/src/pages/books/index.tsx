import { Box, Heading } from '@chakra-ui/react'
import { DevBooks } from '../../containers/Books'

// import { RecommendationTypes } from '../../containers/Books/Recommendation'
// import { recommendations } from '../../constants/books4devs'

const DevBooksPage = () => {
  return (
    <DevBooks>
      <Box as="header" p="0 16px" pt="16px">
        <Heading
          bgGradient="linear-gradient(to bottom right, #e94057, #f27121)"
          bgClip="text"
          fill="transparent"
          maxWidth="180px"
          m="0 auto"
        >
          Dev Books
        </Heading>
        <Box as="p" maxWidth="800px" m="0 auto" fontSize="1.2em" textAlign="center">
          All-time favorite book recommendations from developers for developers. Join the
          newsletter! Stay up to date for when new book recommendations are published!
        </Box>
      </Box>

      <DevBooks.SubscriptionForm />

      <Box as="h2" textAlign="center" fontSize="32px" m="40px">
        🚀 First Book Coming Soon 🚀
      </Box>

      {/* {recommendations.map((item, index) => {
        return (
          <DevBooks.Recommendation
            type={index === 0 ? RecommendationTypes.featured : RecommendationTypes.listItem}
            {...item}
            key={index}
          />
        )
      })} */}

      <DevBooks.Footer />
    </DevBooks>
  )
}

export default DevBooksPage
