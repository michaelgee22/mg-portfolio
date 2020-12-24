import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { FaHome, FaCode } from 'react-icons/fa'

const CATEGORIES = {
  dev: 'dev',
  dank: 'dank',
  general: 'general'
}

export const CategoryMenu = () => {
  const [currentCategory] = useState(CATEGORIES.dev)

  useEffect(() => {}, [currentCategory])

  return (
    <Menu>
      <MenuButton pos="absolute" top="8px" right="8px" zIndex={10}>
        <IconButton
          as="span"
          icon={<FiMenu />}
          bgColor="reddit.100"
          _hover={{ opacity: 0.8 }}
          fontSize="1.2em"
          p="20px 8px"
          color="white"
          isRound
          aria-label="Category Selection Menu Button"
        />
      </MenuButton>

      <MenuList>
        <MenuItem
          as="a"
          href="https://github.com/michaelgee22/michaelgee.dev/blob/master/web/src/pages/dailymemes/index.tsx"
          target="_blank"
          rel="noopener noreferrer"
          icon={<FaCode />}
        >
          Source Code
        </MenuItem>

        <Link href="/">
          <MenuItem as="a" icon={<FaHome />} cursor="pointer">
            Go To Homepage
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  )
}
