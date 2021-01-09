import Image from 'next/image'
import { Box, Flex, Heading } from '@chakra-ui/react'

type Props = {
  title: string
  author: string
  avatar: string
  description: Array<string>
  guest: string
  guestUrl: string
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
        pos="relative"
        borderRadius="50%"
        background="linear-gradient(to bottom right, #e94057, #f27121)"
        minW={displayConfig.width}
        maxH={displayConfig.height}
        p={displayConfig.avatarBorderSize}
        className="round-next-image"
      >
        <Image src={props.avatar} width={displayConfig.width} height={displayConfig.height} />
      </Flex>

      <Flex
        direction="column"
        p="0px 16px 8px 32px"
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
          <Box as="span">{props.title}</Box>{' '}
          <Box as="span" fontSize=".6em" fontStyle="italic">
            by {props.author}
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
          Recommended by {props.guest}
        </Heading>

        <Box
          h={displayConfig.titleBorderHeight}
          w="100%"
          background="linear-gradient(to right, #e94057, #f27121)"
          borderRadius="4px"
        />

        {props.description.map((paragraph, index) => (
          <Box as="p" p="6px 0 8px 0" fontSize={displayConfig.descFontSize} key={index}>
            {paragraph}
          </Box>
        ))}
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
