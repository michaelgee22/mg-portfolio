import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
	sm: '320px',
	md: '768px',
	lg: '960px',
	xl: '1200px'
})

const theme = extendTheme({
	breakpoints,
	colors: {
		reddit: {
			100: '#FF4602', // orange
			200: '#1B1B1C', // gray
			300: '#030303' // black
		}
	}
})

export default theme
