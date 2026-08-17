"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import {
  Container, Button, Flex, Box, HStack,
  Link, Text, Icon, Divider,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Routes } from "@config/routes/routes";
import HumbergerMenu from "./hamburger-menu";
import { FiPhone, FiUser } from "react-icons/fi";
import { AppLogo } from "../logo/logo";
import { menuItems } from "../menu-items/menu-items";
import { useActive } from "@hooks/use-active";

const brandCyan = "#0047CC";
const brandOrange = "#FF6A00";

export default function Header() {
  const ref = useRef<HTMLHeadingElement>(null);
  const [y, setY] = useState(0);
  const [mounted, setMounted] = useState(false); // ✅
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {};
  const { scrollY } = useScroll();
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  const t = useTranslations("menu");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true); // ✅ monté uniquement côté client
  }, []);

  useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  const { isActive } = useActive();

  const switchLocale = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  // ✅ évite le mismatch SSR/client
  if (!mounted) return null;

  return (
    <Box
      ref={ref}
      shadow={y > height ? "md" : undefined}
      pos="sticky"
      top="0"
      zIndex="overlay"
      w="full"
      bg="white"
      transition="box-shadow 0.2s, background-color 0.2s"
    >
      <Container maxW="container.xl">
        <Flex py="2" align="center" justify="space-between">
          <AppLogo />

          <HStack align="center" spacing={4} display={{ base: "none", md: "flex" }}>
            {menuItems
              .filter((item) => item)
              .map(({ id, labelKey, path, subItems }) => (
                <Box key={id} position="relative" role="group">
                  <Button
                    letterSpacing="1px"
                    href={path}
                    as={NextLink}
                    fontSize="0.95rem"
                    variant="ghost"
                    _hover={{
                      bg: isActive(path as keyof typeof Routes) ? `${brandCyan}20` : "gray.100",
                      color: brandCyan,
                      transform: "translateY(-2px)",
                    }}
                    fontWeight={isActive(path as keyof typeof Routes) ? "600" : "500"}
                    bg={isActive(path as keyof typeof Routes) ? `${brandCyan}10` : "transparent"}
                    color="gray.800"
                    onMouseEnter={() => setOpenSubMenu(id)}
                    onMouseLeave={() => setOpenSubMenu(null)}
                    transition="all 0.2s ease-in-out"
                    h="8"
                  >
                    {t(labelKey)}
                  </Button>

                  {subItems && openSubMenu === id && (
                    <Box
                      position="absolute"
                      top="100%"
                      left="0"
                      bg="white"
                      boxShadow="lg"
                      borderRadius="xl"
                      border="0.5px solid"
                      borderColor="gray.100"
                      py={2}
                      minW="200px"
                      zIndex="dropdown"
                      onMouseEnter={() => setOpenSubMenu(id)}
                      onMouseLeave={() => setOpenSubMenu(null)}
                    >
                      {subItems.map((subItem) => (
                        <Box
                          key={subItem.id}
                          as={NextLink}
                          href={subItem.path}
                          display="block"
                          px={4}
                          py={2}
                          fontSize="sm"
                          color="gray.700"
                          fontWeight="500"
                          _hover={{ bg: "gray.50", color: brandCyan }}
                          transition="all 0.15s"
                        >
                          {t(subItem.labelKey)}
                        </Box>
                      ))}
                    </Box>
                  )}
                </Box>
              ))}
          </HStack>

          <HStack spacing={{ base: 2, md: 3 }} display={{ base: "none", md: "flex" }} whiteSpace="nowrap">
            <Link
              href={`tel:${t("phone")}`}
              display="flex"
              alignItems="center"
              gap={2}
              color="gray.700"
              fontWeight="500"
              fontSize="sm"
              _hover={{ color: brandCyan, textDecoration: "none" }}
              transition="color 0.2s"
            >
              <Icon as={FiPhone} boxSize={3.5} />
              <Text as="span" display={{ base: "none", lg: "inline" }} fontSize="xs">
                {t("phone")}
              </Text>
            </Link>

            <Divider orientation="vertical" h="20px" bg="gray.300" />

            <Button
              as={NextLink}
              href="https://www.dashboard.csmaconsult.com/login"
              size="sm"
              bg="transparent"
              border={`1px solid ${brandOrange}`}
              color={brandOrange}
              borderRadius="full"
              px={3}
              fontWeight="600"
              leftIcon={<Icon as={FiUser} boxSize={3.5} />}
              _hover={{
                bg: `${brandOrange}10`,
                transform: "translateY(-1px)",
                boxShadow: "sm",
              }}
              transition="all 0.2s"
            >
              {t("client_area")}
            </Button>
              {/*
            <HStack spacing={1} borderRadius="full" border="1px solid" borderColor="gray.200" p={1}>
              {["fr", "en"].map((lng) => (
                <Button
                  key={lng}
                  size="xs"
                  borderRadius="full"
                  fontWeight="600"
                  fontSize="xs"
                  onClick={() => switchLocale(lng)}
                  bg={locale === lng ? brandCyan : "transparent"}
                  color={locale === lng ? "white" : "gray.500"}
                  _hover={{ bg: locale === lng ? brandCyan : "gray.100" }}
                  transition="all 0.2s"
                  px={2}
                >
                  {lng.toUpperCase()}
                </Button>
              ))}
            </HStack>
            */}
          </HStack>

          <HumbergerMenu />
        </Flex>
      </Container>
    </Box>
  );
}