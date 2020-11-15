import { Flex, Image } from '@chakra-ui/core'

type Props = {
  src: string
  key: string
}

export const ImageRenderer = (props: Props) => {
  console.log(props.src)

  return (
    <Flex w="100%" h="calc(100vh - 90px)" justify="center" align="center" bgColor="reddit.black">
      <Flex w="100%" h="100%" maxH="512px" justify="center">
        <Image src={props.src} maxW="100%" maxH="100%" />
      </Flex>
    </Flex>
  )
}
