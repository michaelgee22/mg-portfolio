import Image from 'next/image'
import { Box, Flex, Link, Spinner } from '@chakra-ui/react'

import { useState, useEffect } from 'react'
import { LoadStates } from '@/constants/async'
import { Meme } from './Meme'

interface Props {
	meme: Meme | null
	status: string
}

export const ImageRenderer = (props: Props) => {
	const [height, setHeight] = useState('calc(100vh - 116px)')

	useEffect(() => {
		calculatePageHeight()
		window.addEventListener('resize', calculatePageHeight)
		return () => window.removeEventListener('resize', calculatePageHeight)

		function calculatePageHeight() {
			const viewHeight = window.innerHeight
			setHeight(`calc(${viewHeight}px - 116px)`)
		}
	}, [])

	const isLoading = props.status === LoadStates.IDLE || props.status === LoadStates.LOADING

	return (
		<Flex
			as="main"
			w="100%"
			h={height}
			direction="column"
			justify="center"
			align="center"
			bgColor="reddit.300"
		>
			<Flex pos="relative" w="100%" h="100%" maxW="500px" maxH="500px" justify="center">
				{isLoading && <Spinner color="reddit.100" size="lg" data-testid="loading-spinner" />}

				{props.status === LoadStates.SUCCESS && props.meme && (
					<Image src={props.meme.src} layout="fill" data-testid="meme-img" />
				)}

				{props.status === LoadStates.ERROR && (
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
				)}
			</Flex>

			{props.status === LoadStates.SUCCESS && props.meme && (
				<Box as="span" color="whitesmoke" fontSize="1.2em" p="16px">
					{props.meme.title}
				</Box>
			)}
		</Flex>
	)
}
