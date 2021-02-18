import { Heading, Flex } from '@chakra-ui/react'
import { SocialIcon } from './SocialIcon'
import { FaTwitter, FaGithub, FaLinkedin, FaDev } from 'react-icons/fa'
import { IconType } from 'react-icons/lib'

interface Icon {
	icon: IconType
	href: string
	key: string
}

const icons: Icon[] = [
	{
		icon: FaGithub,
		href: 'https://www.github.com/michaelgee22',
		key: 'Github'
	},
	{
		icon: FaTwitter,
		href: 'https://twitter.com/michaelgee7',
		key: 'Twitter'
	},
	{
		icon: FaDev,
		href: 'https://dev.to/michaelgee',
		key: 'Dev.to'
	},
	{
		icon: FaLinkedin,
		href: 'https://www.linkedin.com/in/michael-gee',
		key: 'LinkedIn'
	}
]

export const Header = () => {
	return (
		<Flex as="header" h="88px" bgColor="#000" flexDir="column" justify="center" align="center">
			<Heading as="h1" color="whitesmoke" fontSize="1.6em">
				Michael Gee's Sandbox
			</Heading>

			<Flex p="8px 0">
				{icons.map((item: Icon) => {
					return (
						<SocialIcon
							icon={item.icon}
							href={item.href}
							ariaLabel={`${item.key} Profile Button Link`}
							key={item.key}
						/>
					)
				})}
			</Flex>
		</Flex>
	)
}
