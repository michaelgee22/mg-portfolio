import { Heading, Flex } from '@chakra-ui/core'
import Particles from 'react-tsparticles'
import { SocialIcon } from './SocialIcon'

import { particles, icons } from './static'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <Flex as="header" h={400} flexDirection="column" justifyContent="center" alignItems="center">
      <Particles id={styles.tsParticles} style={{ height: 400 }} options={particles} />

      <Heading color="whitesmoke" fontSize="6em" lineHeight="1em" paddingBottom="8px">
        MG Sandbox
      </Heading>

      <Flex>
        {icons.map(item => {
          return <SocialIcon icon={item.icon} href={item.href} ariaLabel={item.ariaLabel} />
        })}
      </Flex>
    </Flex>
  )
}
