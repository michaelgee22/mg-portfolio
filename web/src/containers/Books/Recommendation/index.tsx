import Image from 'next/image'
import { Box, Flex, Heading } from '@chakra-ui/react'

import styles from './Recommendation.module.css'

type Props = {
  type: RecommendationTypes
}

export enum RecommendationTypes {
  featured = 'featured',
  listItem = 'listItem'
}

export const Recommendation = (props: Props) => {
  const displayConfig = _returnDisplayConfig()

  return (
    <Flex as="article" maxW="1000px" m={displayConfig.margin} p="0 16px">
      <Flex
        className={styles.avatarImg}
        minW={displayConfig.width}
        maxH={displayConfig.height}
        p={displayConfig.avatarBorderSize}
      >
        <Image
          src="/images/books4dev/twitterAvatar.jpg"
          width={displayConfig.width}
          height={displayConfig.height}
        />
      </Flex>

      <Flex
        direction="column"
        p="8px 16px 8px 32px"
        pl={props.type === RecommendationTypes.featured ? '40px' : '32px'}
      >
        <Heading
          as="h3"
          fontWeight="normal"
          fontSize={displayConfig.bookTitleFontSize}
          bgGradient="linear-gradient(to bottom right, #e94057, #f27121)"
          bgClip="text"
          fill="transparent"
        >
          <Box as="span">This Will Be The Title Of The Book</Box>{' '}
          <Box as="span" fontSize=".6em" fontStyle="italic">
            by Author Name
          </Box>
        </Heading>

        <Heading
          as="h4"
          size={displayConfig.recommendedByFontSize}
          color="#78757f"
          fontWeight="normal"
          fontStyle="italic"
          p="6px 0"
        >
          Recommended by Michael Gee
        </Heading>

        <Box
          h={displayConfig.titleBorderHeight}
          w="100%"
          background="linear-gradient(to right, #e94057, #f27121)"
          borderRadius="4px"
        />

        <Box as="p" p="8px 0" fontSize={displayConfig.descFontSize}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab pariatur quibusdam ipsa
            dolorum atque temporibus hic soluta voluptatibus consectetur, quo aspernatur. Veniam
            atque doloribus saepe molestiae ducimus a at quia. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Eius perspiciatis nihil labore pariatur, inventore neque
            illo, nobis quod nulla autem quaerat? Totam illo expedita repudiandae, vero quibusdam
            perspiciatis adipisci aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio ipsam libero dolores fugit impedit laudantium odit autem facilis ducimus
            delectus iure provident dicta nam voluptatum voluptates expedita, veniam corrupti
            nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab pariatur quibusdam
            ipsa dolorum atque temporibus hic soluta voluptatibus consectetur, quo aspernatur.
            Veniam atque doloribus saepe molestiae ducimus a at quia. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Eius perspiciatis nihil labore pariatur, inventore neque
            illo, nobis quod nulla autem quaerat? Totam illo expedita repudiandae, vero quibusdam
            perspiciatis adipisci aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio ipsam libero dolores fugit impedit laudantium odit autem facilis ducimus
            delectus iure provident dicta nam voluptatum voluptates expedita, veniam corrupti
            nesciunt.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab pariatur quibusdam ipsa
            dolorum atque temporibus hic soluta voluptatibus consectetur, quo aspernatur. Veniam
            atque doloribus saepe molestiae ducimus a at quia. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Eius perspiciatis nihil labore pariatur, inventore neque
            illo, nobis quod nulla autem quaerat? Totam illo expedita repudiandae, vero quibusdam
            perspiciatis adipisci aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio ipsam libero dolores fugit impedit laudantium odit autem facilis ducimus
            delectus iure provident dicta nam voluptatum voluptates expedita, veniam corrupti
            nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab pariatur quibusdam
            ipsa dolorum atque temporibus hic soluta voluptatibus consectetur, quo aspernatur.
            Veniam atque doloribus saepe molestiae ducimus a at quia. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Eius perspiciatis nihil labore pariatur, inventore neque
            illo, nobis quod nulla autem quaerat? Totam illo expedita repudiandae, vero quibusdam
            perspiciatis adipisci aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio ipsam libero dolores fugit impedit laudantium odit autem facilis ducimus
            delectus iure provident dicta nam voluptatum voluptates expedita, veniam corrupti
            nesciunt.
          </p>
        </Box>
      </Flex>
    </Flex>
  )

  function _returnDisplayConfig() {
    if (props.type === RecommendationTypes.featured) {
      return {
        margin: '40px auto',
        height: '250px',
        width: '250px',
        avatarBorderSize: '6px',
        bookTitleFontSize: '1.6em',
        recommendedByFontSize: 'sm',
        titleBorderHeight: '4px',
        descFontSize: '1em'
      }
    }

    return {
      margin: '16px auto',
      height: '150px',
      width: '150px',
      avatarBorderSize: '4px',
      bookTitleFontSize: '1.2em',
      recommendedByFontSize: 'xs',
      titleBorderHeight: '2px',
      descFontSize: '.8em'
    }
  }
}
