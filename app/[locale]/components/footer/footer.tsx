"use client";

import {
  Box, Container, Heading, HStack, Flex,
  Link, SimpleGrid, Stack, Text, Icon,
} from "@chakra-ui/react";
import { FiMapPin, FiPhone, FiMail, FiLinkedin, FiTwitter } from "react-icons/fi";
import NextLink from "next/link";
import { footerMenu, menuItemsFooter } from "../menu-items/menu-items";
import { useTranslations } from "next-intl";

const brandCyan = "#0047CC";
const brandOrange = "#FF6A00";

export default function Footer() {
  const t = useTranslations("menu"); // ✅ à l'intérieur du composant

  return (
    <Box as="footer" bg="#0E2939" w="full" color="gray.300">
      <Container maxW="container.xl" py={{ base: 8, md: 10, lg: 12 }}>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={8}
          pb={{ base: 6, md: 8 }}
          borderBottom="1px solid"
          borderColor="whiteAlpha.200"
        >
          <Stack spacing={2}>
            <Heading as="h2" fontSize="2xl" fontWeight="700" display="flex" flexWrap="wrap" gap={1}>
              <Text as="span" color={brandOrange}>CSMA</Text>
              <Text as="span" color={brandCyan}>CONSULT</Text>
            </Heading>
            <Text color="#ffff" fontWeight="500" fontSize="sm">
              {t("tagline")} {/* ✅ à traduire */}
            </Text>
          </Stack>

          <Flex
            alignItems="center"
            justifyContent={{ base: "flex-start", md: "flex-end" }}
            direction="row"
            wrap="wrap"
            gap={{ base: 2, md: 3 }}
          >
            {menuItemsFooter.map(({ id, labelKey, path }, index) => (
              <Box key={id} display="flex" alignItems="center">
                <Link
                  as={NextLink}
                  href={path}
                  color="white"
                  fontWeight="500"
                  fontSize="sm"
                  _hover={{ color: brandOrange, textDecoration: "none" }}
                  transition="color 0.2s"
                  whiteSpace="nowrap"
                >
                  {t(labelKey)} {/* ✅ traduit */}
                </Link>
                {index < menuItemsFooter.length - 1 && (
                  <Box as="span" mx={2} color="whiteAlpha.400" fontSize="xs">|</Box>
                )}
              </Box>
            ))}
          </Flex>
        </SimpleGrid>

        <Flex
          pt={{ base: 6, md: 8 }}
          pb={{ base: 6, md: 8 }}
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          gap={{ base: 6, lg: 8 }}
          borderBottom="1px solid"
          borderColor="whiteAlpha.200"
        >
          <Stack spacing={2}>
            <Heading fontSize="md" fontWeight="600" color={brandOrange}>
              {t("address")} {/* ✅ */}
            </Heading>
            <HStack spacing={2} align="flex-start">
              <Icon as={FiMapPin} boxSize={4} mt={0.5} color={brandCyan} />
              <Text fontSize="sm" color="gray.400">
                Tour d'Asnières, 4 Avenue Laurent Cely
                <br />92600 ASNIERES SUR SEINE
              </Text>
            </HStack>
          </Stack>

          <Stack spacing={2}>
            <Heading fontSize="md" fontWeight="600" color={brandOrange}>
              {t("contact")} {/* ✅ déjà dans menu.json */}
            </Heading>
            <HStack spacing={2}>
              <Icon as={FiMail} boxSize={4} color={brandCyan} />
              <Link
                href="mailto:contact@csmaconsult.com"
                fontSize="sm"
                color="gray.400"
                _hover={{ color: brandOrange, textDecoration: "none" }}
              >
                contact@csmaconsult.com
              </Link>
            </HStack>
            <HStack spacing={2}>
              <Icon as={FiPhone} boxSize={4} color={brandCyan} />
              <Text fontSize="sm" color="gray.400">{t("phone")}</Text> {/* ✅ */}
            </HStack>
          </Stack>

          <Stack spacing={2}>
            <Heading fontSize="md" fontWeight="600" color={brandOrange}>
              {t("follow_us")} {/* ✅ */}
            </Heading>
            <HStack spacing={4}>
              <Link href="#" _hover={{ color: brandCyan }}>
                <Icon as={FiLinkedin} boxSize={5} color="gray.400" />
              </Link>
              <Link href="#" _hover={{ color: brandCyan }}>
                <Icon as={FiTwitter} boxSize={5} color="gray.400" />
              </Link>
            </HStack>
          </Stack>
        </Flex>

        <HStack
          justifyContent="center"
          mt={{ base: 6, md: 8 }}
          spacing={{ base: 3, md: 5 }}
          wrap="wrap"
          fontSize="xs"
        >
          {footerMenu.map(({ id, labelKey, path }, index) => (
            <Box key={id} display="flex" alignItems="center">
              {id < 2 ? (
                <Text fontWeight="500" color="gray.500">
                  © {new Date().getFullYear()} {t(labelKey)} {/* ✅ */}
                </Text>
              ) : (
                <Link
                  href={path}
                  fontWeight="500"
                  color="gray.400"
                  _hover={{ color: brandCyan, textDecoration: "none" }}
                >
                  {t(labelKey)} {/* ✅ */}
                </Link>
              )}
              {index < footerMenu.length - 1 && (
                <Box as="span" mx={{ base: 2, md: 3 }} color="whiteAlpha.400">•</Box>
              )}
            </Box>
          ))}
        </HStack>
      </Container>
    </Box>
  );
}