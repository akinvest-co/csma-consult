"use client"; // Ajouté si vous utilisez Next.js avec un composant côté client

import {
  Box,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  IconButton,
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import { AppLogo } from './logo/logo';
import { useActive } from '../hooks/use-active';

// Les données du menu
export const menuItems = [
  {
    id: 1,
    label: "Ingénierie Télécoms",
    path: "/bureau-etudes",
    submenu: [
      { id: 1.1, label: "Études de faisabilité", path: "/bureau-etudes/faisabilite" },
      { id: 1.2, label: "Installation", path: "/bureau-etudes/installation" },
    ],
  },
  { id: 2, label: "Produits", path: "/produits" },
  { id: 3, label: "Contact", path: "/contact" },
  { id: 4, label: "Support", path: "/support" },
  { id: 5, label: "Blog", path: "/blog" },
  { id: 6, label: "Panier", path: "/cart" },
];

const Header = () => {
      const { isActive } = useActive()
  return (
    <Box bg="white" color="red" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Logo */}
        <Box fontWeight="bold" fontSize="lg">
         <AppLogo />
        </Box>

        {/* Navigation Links */}
        <Flex py="4" align="center" justify="space-between">

          <Flex display={{ base: "none", md: "flex" }} alignItems="center">
            {menuItems.map(item => (
              <Box key={item.id}>
                {item.submenu ? (
                  <Menu>
                    <MenuButton
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                      variant="ghost"
                      color="red"
                      _hover={{ bg: "blue.700" }}
                    >
                      {item.label}
                    </MenuButton>
                    <MenuList bg="green.600" color="blue">
                      {item.submenu.map(subItem => (
                        <MenuItem
                          key={subItem.id}
                          _hover={{ bg: "blue.500", color: "black" }}
                        >
                          <Link href={subItem.path}>{subItem.label}</Link>
                        </MenuItem>
                      ))}
                      
                    </MenuList>
                  </Menu>
                ) : (
                  <Link
                    href={item.path}
                    px={4}
                    _hover={{ textDecoration: "none", color: "gray.400" }}
                  >
                    {item.label}
                  </Link>
                )}
              </Box>
            ))}
          </Flex>

          {/* Mobile Menu */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            variant="ghost"
            color="white"
            _hover={{ bg: "gray.700" }}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
