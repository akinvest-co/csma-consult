"use client";

import { useTranslations } from "next-intl";
import {
  Box, Container, Flex, Grid, Heading, HStack, Icon, Text, VStack, SimpleGrid,
} from "@chakra-ui/react";
import {
  FiArrowRight, FiCheckCircle, FiTarget, FiLayers, FiUsers, FiBriefcase,
  FiGlobe, FiMapPin, FiTrendingUp, FiShield, FiZap,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { Space_Grotesk, Inter, IBM_Plex_Mono,Montserrat } from "next/font/google";
import React from "react";
import Image from "next/image";
import Layout from "@app/app/layout/layout.page";

const MotionBox = motion(Box);

const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"] });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"] });
const montserrat =Montserrat({ subsets: ["latin"], weight: ["400", "500"] });

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

export default function StrategiePage() {
  const t = useTranslations("strategie");

  const etapes = [
    { titre: t("etape1_titre"), items: t.raw("etape1_items"), icon: FiTarget },
    { titre: t("etape2_titre"), items: t.raw("etape2_items"), icon: FiLayers },
    { titre: t("etape3_titre"), items: t.raw("etape3_items"), icon: FiUsers },
    { titre: t("etape4_titre"), items: t.raw("etape4_items"), icon: FiBriefcase },
    { titre: t("etape5_titre"), items: t.raw("etape5_items"), icon: FiShield },
  ];

  const cibles = t.raw("cibles_list") || [];
  const accompagnementItems = t.raw("accompagnement_items") || [];
  const financementItems = t.raw("financement_items") || [];

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
                  fontWeight="600"
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
                <Image src="/images/banner.jpeg" alt="Stratégie et partenariats en Afrique" fill style={{ objectFit: "cover" }} priority />
              </MotionBox>
            </Grid>
          </Container>
        </Box>

     
        {/* ─── POSITIONNEMENT ─── */}
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
        {t("positionnement_title")}
      </Text>
    </MotionBox>

    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
      {[
        { title: t("pos1_title"), desc: t("pos1_desc"), icon: FiTrendingUp, color: brandCyan },
        { title: t("pos2_title"), desc: renderWithBrand(t("pos2_desc")), icon: FiGlobe, color: brandOrange },
      ].map((pos, idx) => (
        <MotionBox
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
          viewport={{ once: true }}
          position="relative"
          bg="white"
          borderRadius="6px"
          p={6}
          border="1px solid"
          borderColor={line}
          _hover={{ boxShadow: `0 12px 28px -16px ${pos.color}55`, transform: "translateY(-2px)" }}
          sx={{ transition: "all 0.3s" }}
        >
          <CornerMarks color={pos.color} />
          <Flex align="center" gap={3} mb={3}>
            <Box position="relative" w="40px" h="40px" flexShrink={0}>
              <Box position="absolute" inset={0} bg={`${pos.color}12`} transform="rotate(45deg)" borderRadius="7px" />
              <Flex position="absolute" inset={0} align="center" justify="center">
                <Icon as={pos.icon} boxSize={5} color={pos.color} />
              </Flex>
            </Box>
            <Heading as="h3" className={display.className} fontSize="lg" fontWeight="700" color={ink}>
              {pos.title}
            </Heading>
          </Flex>
          <Text fontSize="sm" color={slate} pl={{ base: 0, md: 12 }}>
            {pos.desc}
          </Text>
        </MotionBox>
      ))}
    </SimpleGrid>
  </Container>
</Box>

        {/* ─── PROGRESSION LOGIQUE ─── */}
        <Box py={{ base: 12, md: 16 }} bg="white">
          <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              textAlign="center"
              mb={12}
            >
              <Text className={mono.className} fontSize="xs" fontWeight="500" color={brandOrange} letterSpacing="0.22em" textTransform="uppercase">
                {t("progression_title")}
              </Text>
              <Heading className={display.className} fontSize={{ base: "2xl", md: "3xl" }} fontWeight="700" color={ink} mt={1}>
                Une progression logique en 5 étapes
              </Heading>
            </MotionBox>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacingX={10} spacingY={10}>
              {etapes.map((etape, idx) => (
                <MotionBox
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  position="relative"
                  pl={{ base: 0, md: 2 }}
                >
                  <Flex align="center" gap={3} mb={3}>
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
                    <Heading as="h3" className={display.className} fontSize="md" fontWeight="700" color={ink}>
                      {etape.titre}
                    </Heading>
                  </Flex>
                  <VStack align="start" spacing={1.5} pl={{ base: 0, md: 10 }} borderLeft={{ base: "none", md: "1px solid" }} borderColor={line} ml={{ base: 0, md: "18px" }} pt={{ base: 0, md: 1 }} pb={{ base: 0, md: 1 }}>
                    {etape.items.map((item: string, i: number) => (
                      <HStack key={i} spacing={2} align="flex-start" pl={{ base: 0, md: 4 }}>
                        <Icon as={FiCheckCircle} color={brandOrange} boxSize={3.5} mt={0.5} flexShrink={0} />
                        <Text fontSize="sm" color={slate}>
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

             
                {/* ─── CIBLES PRIORITAIRES ─── */}
        <Box py={{ base: 10, md: 14 }} bg={mist}>
          <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              textAlign="center"
              mb={8}
            >
              <Text
                className={montserrat.className}
                fontSize="xs"
                fontWeight="500"
                color={brandCyan}
                letterSpacing="0.22em"
                textTransform="uppercase"
              >
                {t("cibles_title")}
              </Text>
             
            </MotionBox>

            <Flex wrap="wrap" justify="center" gap={3}>
              {cibles.map((cible: string, idx: number) => {
                const icons = [
                  FiTarget, FiUsers, FiBriefcase, FiGlobe, FiMapPin, FiTrendingUp
                ];
                const IconTag = icons[idx % icons.length];
                const color = idx % 2 === 0 ? brandCyan : brandOrange;

                return (
                  <MotionBox
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                    viewport={{ once: true }}
                    display="inline-flex"
                    alignItems="center"
                    gap={2}
                    px={4}
                    py={2}
                    bg={`${color}8`}
                    borderRadius="full"
                    border="1px solid"
                    borderColor={`${color}20`}
                    _hover={{
                      bg: `${color}15`,
                      borderColor: color,
                    }}
                    sx={{ transition: "all 0.25s" }}
                  >
                    <Icon as={IconTag} boxSize={3.5} color={color} flexShrink={0} />
                    <Text
                      className={montserrat.className}
                      fontSize="xs"
                      fontWeight="500"
                      color={ink}
                      lineHeight="1.3"
                    >
                      {cible}
                    </Text>
                  </MotionBox>
                );
              })}
            </Flex>
          </Container>
        </Box>

        {/* ─── ACCOMPAGNEMENT & FINANCEMENT ─── */}
        <Box py={{ base: 12, md: 16 }} bg="white">
          <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              {[
                { title: t("accompagnement_title"), items: accompagnementItems, icon: FiMapPin, color: brandCyan },
                { title: t("financement_title"), items: financementItems, icon: FiZap, color: brandOrange },
              ].map((block, idx) => (
                <MotionBox
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  position="relative"
                  bg={mist}
                  borderRadius="6px"
                  p={6}
                  border="1px solid"
                  borderColor={line}
                >
                  <CornerMarks color={block.color} />
                  <Flex align="center" gap={3} mb={4}>
                    <Box position="relative" w="44px" h="44px" flexShrink={0}>
                      <Box position="absolute" inset={0} bg={`${block.color}12`} transform="rotate(45deg)" borderRadius="8px" />
                      <Flex position="absolute" inset={0} align="center" justify="center">
                        <Icon as={block.icon} boxSize={5} color={block.color} />
                      </Flex>
                    </Box>
                    <Heading as="h3" className={display.className} fontSize="lg" fontWeight="700" color={ink}>
                      {block.title}
                    </Heading>
                  </Flex>
                  <VStack align="start" spacing={2}>
                    {block.items.map((item: string, i: number) => (
                      <HStack key={i} spacing={2} align="flex-start">
                        <Icon as={FiCheckCircle} color={brandOrange} boxSize={3.5} mt={0.5} flexShrink={0} />
                        <Text fontSize="sm" color={slate}>
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

        {/* ─── CTA FINAL ─── */}
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