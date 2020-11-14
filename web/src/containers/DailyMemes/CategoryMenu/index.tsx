import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuDivider,
  MenuItem,
  IconButton
} from '@chakra-ui/core'
import { FiMenu } from 'react-icons/fi'
import { FaHome } from 'react-icons/fa'

type Props = {
  children?: React.ReactChild | React.ReactChild[]
}

const CATEGORIES = {
  dev: 'dev',
  dank: 'dank',
  general: 'general'
}

export const CategoryMenu = (props: Props) => {
  const [currentCategory, setCurrentCategory] = useState(CATEGORIES.dev)

  useEffect(() => {
    console.log(currentCategory)
  }, [currentCategory])

  return (
    <Menu>
      <MenuButton pos="absolute" right="20px" bottom="24px">
        <IconButton
          as="span"
          icon={<FiMenu />}
          bgColor="reddit.orange"
          _hover={{ opacity: 0.8 }}
          fontSize="2em"
          p="28px 12px"
          color="white"
          isRound
          aria-label="Category Selection Menu Button"
        />
      </MenuButton>

      <MenuList>
        <MenuGroup title="Categories">
          <MenuItem
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
          </MenuItem>
        </MenuGroup>

        <MenuDivider />
        <Link href="/">
          <MenuItem as="a" icon={<FaHome />}>
            Go To Homepage
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  )
}
