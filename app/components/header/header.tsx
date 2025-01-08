"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import {
  Container,
  Button,
  Flex,
  Box,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

import { Routes } from "@app/app/config/routes/routes";
import { useActive } from "@app/app/hooks/use-active";
import { AppLogo } from "@app/app/components/logo/logo";
import { menuItems } from "@app/app/components/menu-items/menu-items";
import HumbergerMenu from "./hamburger-menu";

export default function Header() {
  const ref = useRef<HTMLHeadingElement>(null);
  const [y, setY] = useState(0);
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {};
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  const { isActive } = useActive();

  return (
    <Box
      ref={ref}
      shadow={y > height ? "sm" : undefined}
      pos="sticky"
      top="0"
      zIndex="overlay"
      w="full"
      bg="white"
      transition="box-shadow 0.2s, background-color 0.2s"
    >
      <Container maxW="container.xl">
        <Flex py="4" align="center" justify="space-between">
          <AppLogo />
          <HStack align="center" spacing={8} display={{ base: "none", md: "none", lg: "flex" }}>
            {menuItems.map(({ id, label, path, submenu }) => (
              <Box key={id}>
                {submenu ? (
                  <Menu>
                    <MenuButton
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                      letterSpacing="1px"
                      variant="link"
                      color={isActive(path as keyof typeof Routes) ? "#000000" : "initial"}
                      _hover={{
                        bg: "#f1f9fe",
                        color: "#0b6999",
                      }}
                      fontWeight="normal"
                      height="40px" 
                      px="4" 
                    >
                      {label}
                    </MenuButton>
                    <MenuList boxShadow="lg" bg="white" borderRadius="md">
                      {submenu.map((subItem) => (
                        <MenuItem
                          key={subItem.id}
                          _hover={{
                            bg: "#f1f9fe",
                            color: "#0b6999",
                          }}
                          fontWeight="normal"
                        >
                          <Link as={NextLink} href={subItem.path}>
                            {subItem.label}
                          </Link>
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                ) : (
                  <Button
                    as={NextLink}
                    href={path}
                    fontSize="1rem"
                    letterSpacing="1px"
                    variant="link"
                    fontWeight="normal"
                    _hover={{
                      bg: "#f1f9fe",
                      color: "#0b6999",
                    }}
                    height="40px" 
                    px="4" 
                    bg={isActive(path as keyof typeof Routes) ? "#e1f2fd" : "initial"}
                    color={isActive(path as keyof typeof Routes) ? "#0b6999" : "initial"}
                  >
                    {label}
                  </Button>
                )}
              </Box>
            ))}
          </HStack>
          <HumbergerMenu />
        </Flex>
      </Container>
    </Box>
  );
}
