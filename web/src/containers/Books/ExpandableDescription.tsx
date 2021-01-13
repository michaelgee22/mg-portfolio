import { Box, IconButton } from '@chakra-ui/react'
import { useState } from 'react'
import { FiChevronsUp, FiChevronsDown } from 'react-icons/fi'

type Props = {
  fontSize: string
  descPreview: string
  description: Array<string>
}

export const ExpandableDescription = (props: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false)

  return (
    <>
      {expanded ? (
        <>
          {props.description.map((paragraph, index) => {
            return (
              <Box
                as="p"
                p="6px 0 8px 0"
                fontSize={props.fontSize}
                textAlign={['center', 'center', 'start', 'start']}
                key={index}
              >
                {paragraph}
              </Box>
            )
          })}
        </>
      ) : (
        <Box
          as="p"
          p="6px 0 8px 0"
          fontSize={props.fontSize}
          textAlign={['center', 'center', 'start', 'start']}
        >
          {props.descPreview}
        </Box>
      )}

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
