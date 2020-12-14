import { Flex, Box, IconButton, Tag, TagLabel } from '@chakra-ui/react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

type Props = {
  next: () => void
  prev: () => void
  memeIndex: number
  memeTotal: number
}

export const Nav = (props: Props) => {
  return (
    <Box as="footer" bgColor="reddit.black" color="white">
      <Flex as="nav" justify="center" p="12px" bgColor="reddit.gray">
        <IconButton
          icon={<BiChevronLeft />}
          onClick={props.prev}
          size="sm"
          fontSize="1.4em"
          p="0 16px"
          bgColor="reddit.orange"
          _hover={{ opacity: 0.8 }}
          color="white"
          disabled={props.memeIndex === 0}
          aria-label=""
        />

        <Tag p="0 16px" m="0 16px" bgColor="reddit.orange" color="white">
          <TagLabel>
            Dev - {props.memeIndex + 1} / {props.memeTotal}
          </TagLabel>
        </Tag>

        <IconButton
          icon={<BiChevronRight />}
          onClick={props.next}
          size="sm"
          fontSize="1.4em"
          p="0 16px"
          bgColor="reddit.orange"
          _hover={{ opacity: 0.8 }}
          color="white"
          disabled={props.memeIndex + 1 === props.memeTotal || props.memeTotal === 0}
          aria-label=""
        />
      </Flex>
    </Box>
  )
}
