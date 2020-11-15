import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Flex } from '@chakra-ui/core'

type Props = {
  src: string
  key: string
}

export const ImageRenderer = (props: Props) => {
  const [height, setHeight] = useState('calc(100vh - 90px)')

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
        <Image src={props.src} layout="fill" />
      </Flex>
    </Flex>
  )
}
