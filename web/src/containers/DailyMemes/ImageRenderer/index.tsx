import Image from 'next/image'
import { Box, Flex, Link } from '@chakra-ui/react'

type Props = {
  src: string
  key: string
}

export const ImageRenderer = (props: Props) => {
  const isValidSrc = props.src !== 'invalid'

  return (
    <Flex w="100%" h="100%" justify="center" align="center" bgColor="reddit.black">
      <Flex pos="relative" w="100%" h="100%" maxW="500px" maxH="500px" justify="center">
        {isValidSrc ? (
          <Image src={props.src} layout="fill" data-testid="meme-img" />
        ) : (
          <Box>
            Whoops!
            <br />
            <br />
            Today's memes were not loaded properly.
            <br />
            Please retry later or{' '}
            <Link
              href="https://michaelgee.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              color="reddit.orange"
            >
              Contact Me
            </Link>{' '}
            to let me know there is an issue.
          </Box>
        )}
      </Flex>
    </Flex>
  )
}
