import { Box } from '@chakra-ui/react'

type Props = {
  children?: React.ReactNode
}

export const BooksList = (props: Props) => {
  return (
    <Box as="ul" border="2px solid blue" m="16px 0" p="16px 40px">
      {props.children}
    </Box>
  )
}
