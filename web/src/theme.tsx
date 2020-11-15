import { theme as chakraTheme } from '@chakra-ui/core'

const breakpoints = ['40em', '52em', '64em']
const theme = {
  ...chakraTheme,
  breakpoints,
  colors: {
    ...chakraTheme.colors,
    reddit: { orange: '#FF4602', gray: '#1B1B1C', black: '#030303' }
  }
}

export default theme
