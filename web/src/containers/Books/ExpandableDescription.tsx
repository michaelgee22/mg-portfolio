import { Box, IconButton } from '@chakra-ui/react'
import { useState } from 'react'
import { FiChevronsUp, FiChevronsDown } from 'react-icons/fi'

interface Props {
	fontSize: string
	descPreview: string[]
	description: string[]
}

export const ExpandableDescription = (props: Props) => {
	const [expanded, setExpanded] = useState<boolean>(false)
	const desc = expanded ? props.description : props.descPreview

	return (
		<>
			{desc.map((paragraph: string, index: number) => {
				let className = ''
				if (paragraph.startsWith('<quote>')) {
					paragraph = paragraph.split('<quote>')[1]
					className = 'books-quote'
				}

				return (
					<Box
						as="p"
						p="6px 0 8px 0"
						fontSize={props.fontSize}
						textAlign={['center', 'center', 'start', 'start']}
						className={className}
						key={index}
					>
						{paragraph}
					</Box>
				)
			})}

			<IconButton
				icon={expanded ? <FiChevronsUp /> : <FiChevronsDown />}
				onClick={_toggleDescriptionExpand}
				backgroundColor="transparent"
				_focus={{ outline: 'none' }}
				aria-label="Expandable Description Toggle Button"
			/>
		</>
	)

	function _toggleDescriptionExpand() {
		setExpanded(!expanded)
		return
	}
}
