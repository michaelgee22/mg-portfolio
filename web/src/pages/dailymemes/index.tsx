import { DailyMemes } from '../../containers/DailyMemes'
import { Flex, Box } from '@chakra-ui/react'

import { useMemes, NavTypes } from '../../hooks/useMemes'
import { FaRedditAlien } from 'react-icons/fa'

const DailyMemesPage = () => {
	const { status, current, total, onUpdateMeme } = useMemes()

	return (
		<DailyMemes>
			<Box as="header">
				<Flex align="center" p="16px 0" pl="8px" backgroundColor="reddit.300">
					<Box as={FaRedditAlien} w={6} h={6} color="whitesmoke" mr="10px" />
					<Box as="span" color="whitesmoke" fontSize="1.2em">
						Daily Dev Memes
					</Box>
				</Flex>

				<DailyMemes.CategoryMenu />
			</Box>

			<DailyMemes.ImageRenderer meme={current} status={status} />

			<DailyMemes.Nav
				next={() => onUpdateMeme(NavTypes.NEXT)}
				prev={() => onUpdateMeme(NavTypes.PREV)}
				memeIndex={current && current.index ? current.index : 0}
				memeTotal={total}
				status={status}
			/>
		</DailyMemes>
	)
}

export default DailyMemesPage
