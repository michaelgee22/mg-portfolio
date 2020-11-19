import { extendTheme } from '@chakra-ui/react'

const breakpoints = ['40em', '52em', '64em']
const theme = {
  breakpoints,
  colors: {
    reddit: { orange: '#FF4602', gray: '#1B1B1C', black: '#030303' }
  }
}

export default extendTheme(theme)
