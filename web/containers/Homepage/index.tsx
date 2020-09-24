import { Button } from '@chakra-ui/core'

export const Homepage = () => {
  return (
    <div>
      <h1>Homepage</h1>

      <Button color="white" bg="red.600" _hover={{ bg: 'red.400' }}>
        Hello World
      </Button>
    </div>
  )
}
