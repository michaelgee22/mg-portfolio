import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Box, Flex, Link } from '@chakra-ui/react'

type Props = {
  src: string
  key: string
}

export const ImageRenderer = (props: Props) => {
  const [height, setHeight] = useState('calc(100vh - 90px)')
  const isValidSrc = props.src !== 'invalid'

  useEffect(() => {
    window.addEventListener('resize', calculatePageHeight)
    return () => window.removeEventListener('resize', calculatePageHeight)

    function calculatePageHeight() {
      const viewHeight = window.innerHeight * 0.01
      setHeight(`calc(calc(${viewHeight}px * 100) - 90px)`)
    }
  }, [])

  return (
    <Flex w="100%" h={height} justify="center" align="center" bgColor="reddit.black">
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
