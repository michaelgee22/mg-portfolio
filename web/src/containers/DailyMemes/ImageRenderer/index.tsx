import Image from 'next/image'
import { Flex } from '@chakra-ui/core'

type Props = {
  children?: React.ReactChild | React.ReactChild[]
}

export const ImageRenderer = (props: Props) => {
  return <Flex w="100%" h="calc(100vh - 88px)" bgColor="reddit.black"></Flex>
}
