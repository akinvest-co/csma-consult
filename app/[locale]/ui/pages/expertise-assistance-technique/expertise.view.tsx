"use client";

import { useTranslations } from "next-intl";
import {
  Box, Container, Flex, Grid, Heading, HStack, Icon, Text, VStack, SimpleGrid,
} from "@chakra-ui/react";
import {
  FiArrowRight, FiCheckCircle, FiUsers, FiShield, FiTarget, FiTrendingUp,
  FiMap, FiGlobe, FiZap,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import Image from "next/image";
import React from "react";
import Layout from "@app/app/layout/layout.page";

const MotionBox = motion(Box);

const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"] });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"] });

// ─── Tokens ───
const brandCyan = "#0047CC";
const brandOrange = "#FF6A00";
const ink = "#0B1220";
const mist = "#FFFF";
const slate = "#55627A";
const line = "#DDE4EE";
const gradientOrange = "linear-gradient(135deg, #FF6A00 0%, #E06D0A 100%)";

// ─── Fonction corrigée pour afficher CSMA CONSULT en deux couleurs ───
function renderWithBrand(text: string) {
  const parts = text.split(/(CSMA\s+CONSULT)/);

  if (parts.length === 1) {
    return text;
  }

  return parts.map((part, index) => {
    if (part === "CSMA CONSULT") {
      return (
        <Text as="span" key={index}>
          <Text as="span" color={brandCyan} fontWeight="700">CSMA</Text>
          <Text as="span" color={slate} fontWeight="400"> </Text>
          <Text as="span" color={brandOrange} fontWeight="700">CONSULT</Text>
        </Text>
      );
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

// ─── Composant CornerMarks ───
function CornerMarks({ color }: { color: string }) {
  const arm = "14px";
  return (
    <>
      <Box position="absolute" top="-1px" left="-1px" w={arm} h={arm} borderTop="2px solid" borderLeft="2px solid" borderColor={color} borderTopLeftRadius="4px" pointerEvents="none" />
      <Box position="absolute" top="-1px" right="-1px" w={arm} h={arm} borderTop="2px solid" borderRight="2px solid" borderColor={color} borderTopRightRadius="4px" pointerEvents="none" />
      <Box position="absolute" bottom="-1px" left="-1px" w={arm} h={arm} borderBottom="2px solid" borderLeft="2px solid" borderColor={color} borderBottomLeftRadius="4px" pointerEvents="none" />
      <Box position="absolute" bottom="-1px" right="-1px" w={arm} h={arm} borderBottom="2px solid" borderRight="2px solid" borderColor={color} borderBottomRightRadius="4px" pointerEvents="none" />
    </>
  );
}

export default function AssistancePage() {
  const t = useTranslations("assistance");

  const promesses = [
    { titre: t("promesse1_titre"), desc: t("promesse1_desc"), icon: FiUsers },
    { titre: t("promesse2_titre"), desc: t("promesse2_desc"), icon: FiShield },
    { titre: t("promesse3_titre"), desc: t("promesse3_desc"), icon: FiTrendingUp },
  ];

  const profils = [
    { titre: t("profil1_titre"), desc: t("profil1_desc"), items: t.raw("profil1_items"), icon: FiMap },
    { titre: t("profil2_titre"), desc: t("profil2_desc"), items: t.raw("profil2_items"), icon: FiGlobe },
    { titre: t("profil3_titre"), desc: t("profil3_desc"), items: t.raw("profil3_items"), icon: FiZap },
  ];

  return (
    <Layout>
      <Box bg="white" minH="100vh" overflowX="hidden" className={body.className}>

        {/* ─── HERO ─── */}
        <Box position="relative" overflow="hidden" pt={{ base: 4, md: 6 }} pb={{ base: 4, md: 6 }}>
          <Box
            position="absolute"
            inset={0}
            zIndex={0}
            opacity={0.6}
            sx={{
              backgroundImage: `radial-gradient(${line} 1.5px, transparent 1.5px)`,
              backgroundSize: "26px 26px",
              WebkitMaskImage: "radial-gradient(ellipse 75% 60% at 50% 0%, black 30%, transparent 100%)",
              maskImage: "radial-gradient(ellipse 75% 60% at 50% 0%, black 30%, transparent 100%)",
            }}
          />

          <Container maxW="container.xl" px={{ base: 4, md: 8 }} position="relative" zIndex={2}>
            <Grid templateColumns={{ base: "1fr", lg: "1fr 0.9fr" }} gap={{ base: 6, lg: 10 }} alignItems="center">
              <MotionBox initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <HStack spacing={3} mb={4}>
                  <Box position="relative" w="8px" h="8px" flexShrink={0}>
                    <Box position="absolute" inset={0} borderRadius="full" bg={brandOrange} />
                    <MotionBox
                      position="absolute"
                      inset={0}
                      borderRadius="full"
                      bg={brandOrange}
                      animate={{ scale: [1, 2.4, 1], opacity: [0.55, 0, 0.55] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </Box>
                  <Text className={mono.className} fontSize="xs" fontWeight="500" color={brandCyan} letterSpacing="0.22em" textTransform="uppercase">
                    {t("eyebrow")}
                  </Text>
                </HStack>

                <Heading
                  className={display.className}
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                  fontWeight="700"
                  lineHeight="1.08"
                  letterSpacing="-0.01em"
                  color={ink}
                  mb={4}
                >
                  {t("hero_title")}
                </Heading>

                <Text fontSize="md" color={slate} lineHeight="1.7" maxW="580px" mb={5}>
                  {renderWithBrand(t("hero_text"))}
                </Text>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                position="relative"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="xl"
                height={{ base: "200px", md: "300px", lg: "360px" }}
              >
                <Box position="absolute" inset={0} bgGradient={`linear(to-r, ${brandCyan}15, ${brandOrange}10)`} zIndex={1} />
                <Image src="/images/banner.jpeg" alt="Assistance technique" fill style={{ objectFit: "cover" }} priority />
              </MotionBox>
            </Grid>
          </Container>
        </Box>

        {/* ─── PROMESSES ─── */}
        <Box py={{ base: 12, md: 16 }} bg={mist}>
          <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              textAlign="center"
              mb={10}
            >
              <Text className={mono.className} fontSize="xs" fontWeight="500" color={brandOrange} letterSpacing="0.22em" textTransform="uppercase">
                {t("promesse_titre")}
              </Text>
              <Heading className={display.className} fontSize={{ base: "2xl", md: "3xl" }} fontWeight="700" color={ink} mt={1}>
                Notre promesse
              </Heading>
            </MotionBox>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {promesses.map((item, idx) => (
                <MotionBox
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  position="relative"
                  bg="white"
                  borderRadius="6px"
                  p={6}
                  border="1px solid"
                  borderColor={line}
                  _hover={{ boxShadow: `0 12px 28px -16px ${brandCyan}55`, transform: "translateY(-4px)" }}
                  sx={{ transition: "all 0.3s" }}
                  textAlign="center"
                >
                  <CornerMarks color={brandCyan} />
                  <Flex justify="center" mb={4}>
                    <Box position="relative" w="50px" h="50px" flexShrink={0}>
                      <Box position="absolute" inset={0} bg={`${brandCyan}12`} transform="rotate(45deg)" borderRadius="8px" />
                      <Flex position="absolute" inset={0} align="center" justify="center">
                        <Icon as={item.icon} boxSize={6} color={brandCyan} />
                      </Flex>
                    </Box>
                  </Flex>
                  <Heading as="h3" className={display.className} fontSize="lg" fontWeight="700" color={ink} mb={2}>
                    {item.titre}
                  </Heading>
                  <Text fontSize="sm" color={slate}>
                    {item.desc}
                  </Text>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        {/* ─── PROFILS ─── */}
        <Box py={{ base: 12, md: 16 }} bg="white">
          <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              textAlign="center"
              mb={10}
            >
              <Text className={mono.className} fontSize="xs" fontWeight="500" color={brandCyan} letterSpacing="0.22em" textTransform="uppercase">
                {t("profils_titre")}
              </Text>
              <Heading className={display.className} fontSize={{ base: "2xl", md: "3xl" }} fontWeight="700" color={ink} mt={1}>
                Des profils experts pour vos projets
              </Heading>
            </MotionBox>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {profils.map((profil, idx) => (
                <MotionBox
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  position="relative"
                  bg={mist}
                  borderRadius="6px"
                  p={6}
                  border="1px solid"
                  borderColor={line}
                  _hover={{ boxShadow: `0 12px 28px -16px ${brandOrange}55`, transform: "translateY(-4px)" }}
                  sx={{ transition: "all 0.3s" }}
                >
                  <CornerMarks color={brandOrange} />
                  <Flex align="center" gap={4} mb={4}>
                    <Box position="relative" w="44px" h="44px" flexShrink={0}>
                      <Box position="absolute" inset={0} bg={`${brandOrange}12`} transform="rotate(45deg)" borderRadius="7px" />
                      <Flex position="absolute" inset={0} align="center" justify="center">
                        <Icon as={profil.icon} boxSize={5} color={brandOrange} />
                      </Flex>
                    </Box>
                    <Heading as="h3" className={display.className} fontSize="md" fontWeight="700" color={ink}>
                      {profil.titre}
                    </Heading>
                  </Flex>
                  <Text fontSize="sm" color={slate} mb={4}>
                    {profil.desc}
                  </Text>
                  <VStack align="start" spacing={2.5} borderTop="1px solid" borderColor={line} pt={4}>
                    {profil.items.map((item: string, i: number) => (
                      <HStack key={i} spacing={2} align="flex-start">
                        <Icon as={FiCheckCircle} color={brandOrange} boxSize={3.5} mt={0.5} flexShrink={0} />
                        <Text fontSize="xs" color={ink}>
                          {item}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        {/* ─── CTA ─── */}
        <Box py={{ base: 10, md: 14 }} bg={mist}>
          <Container maxW="container.xl" px={{ base: 4, md: 8 }} textAlign="center">
            <MotionBox initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              <Heading as="h3" className={display.className} fontSize="2xl" fontWeight="700" color={ink} mb={4}>
                {t("cta_title")}
              </Heading>
              <Text fontSize="md" color={slate} mb={6}>
                {t("cta_desc")}
              </Text>
              <Box
                as="a"
                href="/contact"
                display="inline-flex"
                alignItems="center"
                gap={2}
                bgGradient={gradientOrange}
                color="white"
                px={6}
                py={3}
                borderRadius="full"
                fontWeight="700"
                fontSize="sm"
                transition="all 0.3s"
                _hover={{ transform: "translateY(-3px)", boxShadow: "lg" }}
              >
                {t("cta_btn")}
                <Icon as={FiArrowRight} boxSize={4} />
              </Box>
            </MotionBox>
          </Container>
        </Box>

      </Box>
    </Layout>
  );
}