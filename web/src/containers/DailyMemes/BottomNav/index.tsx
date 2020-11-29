import { Flex, Box, IconButton, Tag, TagLabel } from '@chakra-ui/react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

type Props = {
  next: () => void
  prev: () => void
  memeIndex: number
  memeTotal: number
}

export const BottomNav = (props: Props) => {
  return (
    <Box as="footer">
      <IconButton
        icon={<BiChevronLeft />}
        onClick={props.prev}
        size="med"
        pos="absolute"
        bottom="24px"
        left="24px"
        fontSize="1.4em"
        p="8px"
        bgColor="reddit.orange"
        _hover={{ opacity: 0.8 }}
        color="white"
        disabled={props.memeIndex === 0}
        isRound
        aria-label=""
      />

      {/* <Tag p="0 16px" m="0 16px" bgColor="reddit.orange" color="white">
          <TagLabel>
            Dank - {props.memeIndex + 1} / {props.memeTotal}
          </TagLabel>
        </Tag> */}

      <IconButton
        icon={<BiChevronRight />}
        onClick={props.next}
        size="med"
        pos="absolute"
        bottom="24px"
        right="24px"
        fontSize="1.4em"
        p="8px"
        bgColor="reddit.orange"
        _hover={{ opacity: 0.8 }}
        color="white"
        disabled={props.memeIndex + 1 === props.memeTotal}
        isRound
        aria-label=""
      />
    </Box>
  )
}
