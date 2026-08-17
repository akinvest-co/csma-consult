"use client";

import { useTranslations } from "next-intl";
import {
  Box, Container, Flex, Grid, Heading, HStack, Icon, Text, VStack, SimpleGrid,
} from "@chakra-ui/react";
import {
  FiArrowRight, FiCheckCircle, FiUsers, FiBriefcase, FiTarget, FiLayers,
  FiMapPin, FiGlobe, FiZap,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import React from "react";
import Image from "next/image";
import Layout from "@app/app/layout/layout.page";

const MotionBox = motion(Box);

const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"] });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"] });

// ─── Tokens ───
const brandCyan = "#0047CC";
const brandOrange = "#FF6A00";
const ink = "#0B1220";
const mist = "#ffff";
const slate = "#55627A";
const line = "#DDE4EE";
const gradientOrange = "linear-gradient(135deg, #FF6A00 0%, #E06D0A 100%)";

// ─── Fonction pour afficher "CSMA CONSULT" en deux couleurs ───
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

// ─── CornerMarks ───
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

export default function ConseilPage() {
  const t = useTranslations("conseil");

  const etapes = [
    { titre: t("etape1_titre"), desc: t("etape1_desc"), icon: FiTarget },
    { titre: t("etape2_titre"), desc: t("etape2_desc"), icon: FiLayers },
    { titre: t("etape3_titre"), desc: t("etape3_desc"), icon: FiUsers },
    { titre: t("etape4_titre"), desc: t("etape4_desc"), icon: FiBriefcase },
  ];

  const offreIcons = [FiCheckCircle, FiGlobe];

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
                <Image src="/images/banner.jpeg" alt="Conseil en réseaux et télécoms" fill style={{ objectFit: "cover" }} priority />
              </MotionBox>
            </Grid>
          </Container>
        </Box>

        {/* ─── DEUX OFFRES ─── */}
        <Box py={{ base: 12, md: 16 }} bg={mist}>
          <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              {[
                { title: t("offre1_title"), desc: t("offre1_desc"), cta: t("offre1_cta"), href: "/conseil/expertise-assistance-technique", color: brandCyan, icon: offreIcons[0] },
                { title: t("offre2_title"), desc: t("offre2_desc"), cta: t("offre2_cta"), href: "/conseil/strategie-partenariats-financement", color: brandOrange, icon: offreIcons[1] },
              ].map((offre, idx) => (
                <MotionBox
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  position="relative"
                  bg="white"
                  borderRadius="6px"
                  p={8}
                  border="1px solid"
                  borderColor={line}
                  _hover={{ boxShadow: `0 12px 28px -16px ${offre.color}55`, transform: "translateY(-4px)" }}
                  sx={{ transition: "all 0.3s" }}
                >
                  <CornerMarks color={offre.color} />
                  <Flex align="center" gap={4} mb={4}>
                    <Box position="relative" w="50px" h="50px" flexShrink={0}>
                      <Box position="absolute" inset={0} bg={`${offre.color}12`} transform="rotate(45deg)" borderRadius="8px" />
                      <Flex position="absolute" inset={0} align="center" justify="center">
                        <Icon as={offre.icon} boxSize={6} color={offre.color} />
                      </Flex>
                    </Box>
                    <Heading as="h3" className={display.className} fontSize="xl" fontWeight="700" color={ink}>
                      {offre.title}
                    </Heading>
                  </Flex>
                  <Text fontSize="sm" color={slate} mb={6}>
                    {offre.desc}
                  </Text>
                  <Box
                    as="a"
                    href={offre.href}
                    display="inline-flex"
                    alignItems="center"
                    gap={2}
                    color={offre.color}
                    fontWeight="600"
                    fontSize="sm"
                    _hover={{ gap: 3 }}
                    sx={{ transition: "gap 0.2s" }}
                  >
                    {offre.cta}
                    <Icon as={FiArrowRight} boxSize={4} />
                  </Box>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        {/* ─── MÉTHODE D'ACCOMPAGNEMENT ─── */}
        <Box py={{ base: 12, md: 16 }} bg="white">
          <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              textAlign="center"
              mb={14}
            >
              <Text className={mono.className} fontSize="xs" fontWeight="500" color={brandOrange} letterSpacing="0.22em" textTransform="uppercase">
                {t("method_title")}
              </Text>
              <Heading className={display.className} fontSize={{ base: "2xl", md: "3xl" }} fontWeight="700" color={ink} mt={1}>
                Notre Périmètre d'actions
              </Heading>
            </MotionBox>

            <Box position="relative">
              <Box position="absolute" top="18px" left="12.5%" right="12.5%" height="2px" zIndex={0} display={{ base: "none", lg: "block" }} bg={line}>
                <MotionBox
                  h="100%"
                  bgGradient={`linear(to-r, ${brandCyan}, ${brandOrange})`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
                  style={{ transformOrigin: "left" }}
                />
              </Box>

              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} position="relative" zIndex={1}>
                {etapes.map((etape, idx) => (
                  <MotionBox
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Flex direction={{ base: "row", lg: "column" }} align="center" justify={{ base: "flex-start", lg: "center" }} gap={3} mb={2}>
                      <Box
                        w="36px"
                        h="36px"
                        borderRadius="full"
                        bg="white"
                        border="2px solid"
                        borderColor={brandCyan}
                        color={brandCyan}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontWeight="500"
                        fontSize="sm"
                        className={mono.className}
                        flexShrink={0}
                      >
                        {idx + 1}
                      </Box>
                      <Heading as="h3" className={display.className} fontSize="md" fontWeight="700" color={ink} textAlign={{ base: "left", lg: "center" }}>
                        {etape.titre}
                      </Heading>
                    </Flex>
                    <Text fontSize="sm" color={slate} pl={{ base: 0, md: 10, lg: 0 }} textAlign={{ base: "left", lg: "center" }}>
                      {etape.desc}
                    </Text>
                  </MotionBox>
                ))}
              </SimpleGrid>
            </Box>
          </Container>
        </Box>

        {/* ─── BLOCS DE RÉASSURANCE ─── */}
        <Box py={{ base: 10, md: 14 }} bg={mist}>
          <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
              {[
                { text: t("reassurance_secteurs"), icon: FiZap, color: brandOrange },
                { text: t("reassurance_geographies"), icon: FiMapPin, color: brandCyan },
                { text: t("reassurance_modeles"), icon: FiUsers, color: brandOrange },
              ].map((item, idx) => (
                <MotionBox
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  bg="white"
                  borderRadius="6px"
                  p={5}
                  border="1px solid"
                  borderColor={line}
                  textAlign="center"
                  _hover={{ borderColor: item.color }}
                  sx={{ transition: "all 0.3s" }}
                >
                  <Icon as={item.icon} boxSize={6} color={item.color} mb={2} />
                  <Text fontSize="sm" fontWeight="600" color={ink}>
                    {item.text}
                  </Text>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        {/* ─── CTA FINAL ─── */}
        <Box py={{ base: 8, md: 12 }} bg="white">
          <Container maxW="container.xl" px={{ base: 4, md: 8 }} textAlign="center">
            <MotionBox initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              <Heading as="h3" className={display.className} fontSize="2xl" fontWeight="700" color={ink} mb={4}>
                Prêt à concrétiser vos projets ?
              </Heading>
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
                Nous contacter
                <Icon as={FiArrowRight} boxSize={4} />
              </Box>
            </MotionBox>
          </Container>
        </Box>

      </Box>
    </Layout>
  );
}