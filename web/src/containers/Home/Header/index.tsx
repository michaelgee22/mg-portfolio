import { Heading, Flex } from '@chakra-ui/react'
import { SocialIcon } from './SocialIcon'
import { icons } from './static'

export const Header = () => {
  return (
    <Flex as="header" h="64px" bgColor="#000" p="0 24px" justify="space-between" align="center">
      <Heading as="h1" color="whitesmoke" fontSize="2em">
        michaelgee.dev
      </Heading>

      <Flex>
        {icons.map(item => {
          return (
            <SocialIcon
              icon={item.icon}
              href={item.href}
              ariaLabel={item.ariaLabel}
              key={item.key}
            />
          )
        })}
      </Flex>
    </Flex>
  )
}
