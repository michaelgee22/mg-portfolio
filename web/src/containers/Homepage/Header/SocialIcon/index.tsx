import { IconButton } from '@chakra-ui/core'

type SocialIconProps = {
  icon: React.ElementType
  href: string
  ariaLabel: string
}

export const SocialIcon = (props: SocialIconProps) => {
  return (
    <IconButton
      icon={<props.icon />}
      as="a"
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      size="lg"
      isRound
      margin="0 8px"
      aria-label={props.ariaLabel}
    />
  )
}
