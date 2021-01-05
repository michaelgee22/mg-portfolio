import { IconButton } from '@chakra-ui/react'

type Props = {
  icon: React.ElementType
  href: string
  ariaLabel: string
}

export const SocialIcon = (props: Props) => {
  return (
    <IconButton
      icon={<props.icon />}
      as="a"
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      size="md"
      m="0 8px"
      isRound
      aria-label={props.ariaLabel}
    />
  )
}
