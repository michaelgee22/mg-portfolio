import { Heading, Flex } from '@chakra-ui/react'
import { SocialIcon } from './SocialIcon'
import { icons } from '../../constants/homepage'

export const Header = () => {
	return (
		<Flex as="header" h="88px" bgColor="#000" flexDir="column" justify="center" align="center">
			<Heading as="h1" color="whitesmoke" fontSize="1.6em">
				Michael Gee's Sandbox
			</Heading>

			<Flex p="8px 0">
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
