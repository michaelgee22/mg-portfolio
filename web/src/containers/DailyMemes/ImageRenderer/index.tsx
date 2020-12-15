import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Box, Flex, Link } from '@chakra-ui/react'

type Props = {
  src?: string
  key: string
}

export const ImageRenderer = (props: Props) => {
  const [height, setHeight] = useState('calc(100vh - 112px)')

  useEffect(() => {
    calculatePageHeight()
    window.addEventListener('resize', calculatePageHeight)
    return () => window.removeEventListener('resize', calculatePageHeight)

    function calculatePageHeight() {
      const viewHeight = window.innerHeight
      setHeight(`calc(${viewHeight}px - 112px)`)
    }
  }, [])

  return (
    <Flex as="main" w="100%" h={height} justify="center" align="center" bgColor="reddit.300">
      <Flex pos="relative" w="100%" h="100%" maxW="500px" maxH="500px" justify="center">
        {props.src && props.src !== 'invalid' ? (
          <Image src={props.src} layout="fill" data-testid="meme-img" />
        ) : (
          <></>
        )}

        {props.src && props.src === 'invalid' ? (
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
              color="reddit.100"
            >
              Contact Me
            </Link>{' '}
            to let me know there is an issue.
          </Box>
        ) : (
          <></>
        )}
      </Flex>
    </Flex>
  )
}
