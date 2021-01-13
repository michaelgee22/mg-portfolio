import Image from 'next/image'
import { Box, Flex, Heading } from '@chakra-ui/react'
import { ExpandableDescription } from './ExpandableDescription'

type Props = {
  title: string
  author: string
  bookImg: string
  avatar: string
  descPreview: string
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
    <Flex
      as="article"
      flexDir={['column', 'column', 'row', 'row']}
      maxW="1000px"
      m={['16px 0', '16px 0', displayConfig.margin, displayConfig.margin]}
      p="0 16px"
    >
      <Flex
        pos="relative"
        borderRadius="50%"
        background="linear-gradient(to bottom right, #e94057, #f27121)"
        w={displayConfig.bookImgWidth}
        h={displayConfig.bookImgHeight}
        minW={displayConfig.bookImgWidth}
        minH={displayConfig.bookImgHeight}
        p={displayConfig.bookBorderSize}
        m={['0 auto 8px auto', '0 auto 16px auto', '0', '0']}
        className="round-next-image"
      >
        <Image
          src={props.bookImg}
          width={displayConfig.bookImgWidth}
          height={displayConfig.bookImgHeight}
        />

        <Box
          pos="absolute"
          bottom="0"
          right={displayConfig.avatarRight}
          w={displayConfig.avatarWidth}
          h={displayConfig.avatarHeight}
          mb={displayConfig.avatarBottom}
        >
          <Image src={props.avatar} width="80px" height="80px" />
        </Box>
      </Flex>

      <Flex
        direction="column"
        pl={[
          '0',
          '0',
          props.type === RecommendationTypes.featured ? '40px' : '32px',
          props.type === RecommendationTypes.featured ? '40px' : '32px'
        ]}
      >
        <Heading
          as="h3"
          fontWeight="normal"
          fontSize={displayConfig.bookTitleFontSize}
          textAlign={['center', 'center', 'start', 'start']}
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
          textAlign={['center', 'center', 'start', 'start']}
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

        <ExpandableDescription
          descPreview={props.descPreview}
          description={props.description}
          fontSize={displayConfig.descFontSize}
        />
      </Flex>
    </Flex>
  )

  function _returnDisplayConfig() {
    if (props.type === RecommendationTypes.featured) {
      return {
        margin: '40px auto 64px auto',

        bookImgWidth: '250px',
        bookImgHeight: '250px',
        bookBorderSize: '6px',

        avatarWidth: '80px',
        avatarHeight: '80px',
        avatarBottom: '24px',
        avatarRight: '-4',

        bookTitleFontSize: '1.6em',
        recommendedByFontSize: 'sm',
        titleBorderHeight: '4px',
        descFontSize: '1em'
      }
    }

    return {
      margin: '16px auto',

      bookImgWidth: '150px',
      bookImgHeight: '150px',
      bookBorderSize: '4px',

      avatarWidth: '48px',
      avatarHeight: '48px',
      avatarBottom: '12px',
      avatarRight: '-3',

      bookTitleFontSize: '1.2em',
      recommendedByFontSize: 'xs',
      titleBorderHeight: '2px',
      descFontSize: '.8em'
    }
  }
}
