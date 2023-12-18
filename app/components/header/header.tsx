import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import { Container, Text, Button, Flex, Box, HStack } from "@chakra-ui/react";

import NextLink from "next/link";

// import { AppLogo } from "./logo";

import HamburgerMenu from "./hamburger-menu";
import { Routes } from "@app/app/config/routes/routes";
import { useActive } from "@app/app/hooks/use-active";

export const data = [
  { id: 1, label: "Produits", path: "/products" },
  { id: 2, label: "Services", path: "/services" },
  { id: 3, label: "Support", path: "/support" },
  { id: 4, label: "Equipe", path: "/about" },
  { id: 5, label: "Nous rejoindre", path: "/contact" },
];

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
          {/* <AppLogo /> */}
          <h2>Logo</h2>
          <HStack
            align="center"
            display={{ base: "none", md: "none", lg: "block" }}
          >
            {data.map(({ id, label, path }) => (
              <Button
                key={id}
                letterSpacing="1px"
                textTransform="uppercase"
                href={path}
                as={NextLink}
                fontSize="1rem"
                _hover={{
                  bg: isActive(path as keyof typeof Routes)
                    ? "#e1f2fd"
                    : "#f1f9fe",
                  color: "#0b6999",
                }}
                fontWeight={
                  isActive(path as keyof typeof Routes) ? "600" : "normal"
                }
                bg={
                  isActive(path as keyof typeof Routes) ? "#e1f2fd" : "initial"
                }
                color={
                  isActive(path as keyof typeof Routes) ? "#0b6999" : "initial"
                }
              >
                {label}
              </Button>
            ))}
          </HStack>

          <HamburgerMenu />
        </Flex>
      </Container>
    </Box>
  );
}
