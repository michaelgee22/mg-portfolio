import { Heading, Flex } from '@chakra-ui/core'
import Particles from 'react-tsparticles'
import { SocialIcon } from './SocialIcon'
import { FaTwitter, FaGithub, FaLinkedin, FaDev } from 'react-icons/fa'

import { options } from './particles'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <Flex as="header" h={400} flexDirection="column" justifyContent="center" alignItems="center">
      <Particles id={styles.tsParticles} style={{ height: 500 }} options={options} />

      <Heading color="whitesmoke" fontSize="6em" paddingBottom="8px">
        MG Sandbox
      </Heading>

      <Flex>
        <SocialIcon
          icon={FaGithub}
          href="https://www.github.com/michaelgee22"
          ariaLabel="Github Profile Button Link"
        />
        <SocialIcon
          icon={FaDev}
          href="https://dev.to/michaelgee"
          ariaLabel="Dev.to Profile Button Link"
        />
        <SocialIcon
          icon={FaTwitter}
          href="https://twitter.com/michaelgee7"
          ariaLabel="Twitter Profile Button Link"
        />
        <SocialIcon
          icon={FaLinkedin}
          href="https://www.linkedin.com/in/michael-gee"
          ariaLabel="LinkedIn Profile Button Link"
        />
      </Flex>
    </Flex>
  )
}
