import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, MenuButton, MenuList, MenuGroup, MenuItem, IconButton } from '@chakra-ui/core'
import { FiMenu } from 'react-icons/fi'
import { FaHome } from 'react-icons/fa'

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
      <MenuButton pos="absolute" top="8px" right="8px" zIndex={50}>
        <IconButton
          as="span"
          icon={<FiMenu />}
          bgColor="reddit.orange"
          _hover={{ opacity: 0.8 }}
          fontSize="1.2em"
          p="20px 8px"
          color="white"
          isRound
          aria-label="Category Selection Menu Button"
        />
      </MenuButton>

      <MenuList>
        <MenuGroup title="Categories Coming Soon...">
          {/* <MenuItem
            onClick={() => setCurrentCategory(CATEGORIES.dev)}
            disabled={currentCategory === CATEGORIES.dev}
          >
            Dev
          </MenuItem>
          <MenuItem
            onClick={() => setCurrentCategory(CATEGORIES.dank)}
            disabled={currentCategory === CATEGORIES.dank}
          >
            Dank
          </MenuItem>
          <MenuItem
            onClick={() => setCurrentCategory(CATEGORIES.general)}
            disabled={currentCategory === CATEGORIES.general}
          >
            General
          </MenuItem> */}
        </MenuGroup>

        {/* <MenuDivider /> */}
        <Link href="/">
          <MenuItem as="a" icon={<FaHome />}>
            Go To Homepage
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  )
}
