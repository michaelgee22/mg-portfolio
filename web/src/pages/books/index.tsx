import Image from 'next/image'
import { Box, Flex, Heading } from '@chakra-ui/react'
import { AwesomeBooks } from '../../containers/Books'

// import { RecommendationTypes } from '../../containers/Books/Recommendation'
import { recommendations } from '../../constants/awesome-books'

const AwesomeBooksPage = () => {
  return (
    <AwesomeBooks>
      <Box as="header" p="0 16px" pt="16px">
        <Heading
          bgGradient="linear-gradient(to bottom right, #e94057, #f27121)"
          bgClip="text"
          fill="transparent"
          textAlign="center"
        >
          awesome-books
        </Heading>
        <Box as="p" maxWidth="800px" m="0 auto" fontSize="1.2em" textAlign="center">
          All-time favorite book recommendations from awesome software developers. Join the
          newsletter! Stay up to date for when new book recommendations are published!
        </Box>
      </Box>

      <AwesomeBooks.SubscriptionForm />

      <Box as="h2" textAlign="center" fontSize="24px" mt="16px" fontStyle="italic">
        First Book
      </Box>

      <Box as="h2" textAlign="center" fontSize="24px" mb="16px" fontStyle="italic">
        🚀{' '}
        <Box as="span" p="0 8px">
          Thursday February 4th, 2021 12:00 EST
        </Box>{' '}
        🚀
      </Box>

      <Flex justify="center" className="round-next-image">
        <Image src="/images/awesome-books/michaelchan/avatar.jpg" width="250px" height="250px" />
      </Flex>

      <Box
        as="h3"
        textAlign="center"
        color="#78757f"
        fontWeight="normal"
        fontStyle="italic"
        pt="16px"
      >
        Recommended By
      </Box>

      <Box as="h3" textAlign="center" color="#78757f" fontWeight="normal" fontStyle="italic">
        Michael Chan • Host of React Podcast
      </Box>

      <Flex justify="center" m="8px 0">
        {recommendations[0].guestLinks.map(item => {
          return (
            <Box
              as="a"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              color="#78757f"
              m="0 16px"
              key={item.id}
            >
              <item.icon />
            </Box>
          )
        })}
      </Flex>

      {/* {recommendations.map((item, index) => {
        return (
          <AwesomeBooks.Recommendation
            type={index === 0 ? RecommendationTypes.featured : RecommendationTypes.listItem}
            {...item}
            key={index}
          />
        )
      })} */}

      <AwesomeBooks.Footer />
    </AwesomeBooks>
  )
}

export default AwesomeBooksPage
