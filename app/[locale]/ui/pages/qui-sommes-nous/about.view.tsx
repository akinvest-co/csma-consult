"use client";

import { useTranslations } from "next-intl";
import {
  Box, Container, Flex, Grid, Heading,
  HStack, Icon, Text, Image,
  Link,
} from "@chakra-ui/react";
import {
  FiTarget, FiEye, FiShield, FiTrendingUp,
  FiHeart, FiUsers, FiLinkedin, FiArrowRight,
  FiWifi, FiBriefcase,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import React from "react";
import Layout from "@app/app/layout/layout.page";
import NextLink from "next/link";

const MotionBox = motion(Box);

const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"] });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"] });

// ─── Tokens ───
const brandCyan = "#0047CC";
const brandOrange = "#FF6A00";
const ink = "#0B1220";
const mist = "#fffff";
const slate = "#55627A";
const line = "#DDE4EE";

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

// ─── Eyebrow ───
const Eyebrow = ({ label }: { label: string }) => (
  <HStack spacing={3} mb={4}>
    <Box position="relative" w="7px" h="7px" flexShrink={0}>
      <Box position="absolute" inset={0} borderRadius="full" bg={brandOrange} />
      <MotionBox
        position="absolute"
        inset={0}
        borderRadius="full"
        bg={brandOrange}
        animate={{ scale: [1, 2.2, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />
    </Box>
    <Text className={mono.className} fontSize="11px" fontWeight="500" color={brandCyan}
      letterSpacing="0.2em" textTransform="uppercase">{label}</Text>
  </HStack>
);

// ─── SectionTitle ───
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <Heading className={display.className} fontSize={{ base: "2xl", md: "3xl" }} fontWeight="700"
    color={ink} lineHeight="1.2" mb={2} letterSpacing="-0.01em">{children}</Heading>
);

const AboutPage = () => {
  const t = useTranslations("about");

  const tags = [t("tag1"), t("tag2"), t("tag3"), t("tag4")];

  const historique = [
    { annee: t("h1_year"), titre: t("h1_title"), texte: t("h1_text"), couleur: brandCyan },
    { annee: t("h6_year"), titre: t("h6_title"), texte: t("h6_text"), couleur: brandOrange },
    { annee: t("h2_year"), titre: t("h2_title"), texte: t("h2_text"), couleur: brandOrange },
    { annee: t("h3_year"), titre: t("h3_title"), texte: t("h3_text"), couleur: brandCyan },
    { annee: t("h4_year"), titre: t("h4_title"), texte: t("h4_text"), couleur: brandOrange },
  ];

  const missions = [
    { icon: FiTarget, couleur: brandCyan,   label: t("m1_label"), titre: t("m1_title"), texte: t("m1_text") },
    { icon: FiEye,    couleur: brandOrange, label: t("m2_label"), titre: t("m2_title"), texte: t("m2_text") },
  ];

  const valeurs = [
    { icon: FiShield,     titre: t("v1_title"), texte: t("v1_text") },
    { icon: FiTrendingUp, titre: t("v2_title"), texte: t("v2_text") },
    { icon: FiHeart,      titre: t("v3_title"), texte: t("v3_text") },
    { icon: FiUsers,      titre: t("v4_title"), texte: t("v4_text") },
  ];

  const equipe = [
    { initiales: "AKT", nom: "AbdelKader Tall",  poste: t("e1_poste"), expertise: t("e1_expertise"), couleur: brandCyan },
    { initiales: "FT",  nom: "Fama Tall",         poste: t("e2_poste"), expertise: t("e2_expertise"), couleur: brandOrange },
    { initiales: "BN",  nom: "Bernard NAUROY",    poste: t("e3_poste"), expertise: t("e3_expertise"), couleur: brandCyan },
    { initiales: "NAS", nom: "Ndeye Amy Sagna",   poste: t("e4_poste"), expertise: t("e4_expertise"), couleur: brandOrange },
  ];

  return (
    <Layout>
    <Box bg="white" className={body.className}>

      {/* HERO */}
      <Box position="relative" pt={{ base: 16, md: 24 }} pb={{ base: 12, md: 16 }}
        borderBottom="0.5px solid" borderColor={line} overflow="hidden">
        <Box position="absolute" top={0} left={0} right={0} h="2px"
          bgGradient={`linear(to-r, ${brandCyan}, ${brandOrange})`} />
        <Box position="absolute" top="-80px" right="-60px" w="360px" h="360px"
          borderRadius="full"
          bg="radial-gradient(circle, rgba(69,196,238,0.07) 0%, transparent 70%)"
          pointerEvents="none" />

        <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap={{ base: 12, lg: 16 }} alignItems="center">

            <MotionBox initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}>
              <Text className={mono.className} fontSize="11px" fontWeight="500" color={brandCyan}
                letterSpacing="0.2em" textTransform="uppercase" mb={5}>
                {t("hero_eyebrow")}
              </Text>
              <Heading className={display.className} fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight="700" lineHeight="1.1" color={ink} mb={5} letterSpacing="-0.01em">
                {t("hero_heading1")}{" "}
                <Text as="span" color={brandCyan}>{t("hero_heading2")}</Text>{" "}
                {t("hero_heading3")}{" "}
                <Text as="span" color={brandOrange}>{t("hero_heading4")}</Text>
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color={slate}
                lineHeight="1.75" mb={6}>
                {renderWithBrand(t("hero_desc"))}
              </Text>
              <HStack spacing={2} flexWrap="wrap" mb={10}>
                {tags.map((tag) => (
                  <Text key={tag} className={mono.className} fontSize="11px" px={3} py="3px"
                    border="0.5px solid" borderColor={line}
                    borderRadius="full" color={slate}>{tag}</Text>
                ))}
              </HStack>
            </MotionBox>

            <MotionBox display={{ base: "none", lg: "block" }}
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              <Box position="relative">
                <Box position="absolute" top="16px" right="-16px"
                  bottom="-16px" left="16px" borderRadius="20px"
                  border="0.5px solid" borderColor={line} zIndex={0} />
                <Box borderRadius="2xl" overflow="hidden" position="relative"
                  h={{ base: "240px", md: "340px" }}>
                  <Image src="/images/csma12.jpeg" alt="CSMA Consult"
                    objectFit="cover" w="100%" h="100%" />
                </Box>
                <Box position="absolute" bottom="-12px" left="-20px" zIndex={2}
                  bg="white" border="0.5px solid" borderColor={line}
                  borderRadius="12px" px={5} py={4}
                  boxShadow="0 4px 24px -4px rgba(0,0,0,0.08)">
                  <Text className={display.className} fontSize="22px" fontWeight="700" color={brandCyan} lineHeight={1} mb={1}>500+</Text>
                  <Text fontSize="11px" color={slate}>{t("badge_projects")}</Text>
                </Box>
                <Box position="absolute" top="-12px" right="24px" zIndex={2}
                  bg="white" border="0.5px solid" borderColor={line}
                  borderRadius="10px" px={4} py={3}
                  boxShadow="0 4px 24px -4px rgba(0,0,0,0.08)">
                  <HStack spacing={2}>
                    <Box w="8px" h="8px" borderRadius="full" bg={brandOrange} flexShrink={0} />
                    
                  </HStack>
                </Box>
              </Box>
            </MotionBox>
          </Grid>
        </Container>
      </Box>

      {/* NOS DOMAINES D'EXPERTISE */}
      <Box py={{ base: 16, md: 20 }} bg={mist}>
        <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
          <MotionBox initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }} viewport={{ once: true }} mb={10}>
            <Eyebrow label={t("expertise_title")} />
            <SectionTitle>
              {t("expertise_title")}
            </SectionTitle>
            <Text fontSize="sm" color={slate}>{t("expertise_subtitle")}</Text>
          </MotionBox>

          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
            {/* Infrastructures */}
            <MotionBox initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }} viewport={{ once: true }}>
              <Box bg="white" border="1px solid" borderColor={line}
                borderRadius="6px" p={8} height="100%"
                position="relative" overflow="hidden">
                <CornerMarks color={brandCyan} />
                <HStack spacing={4} mb={5}>
                  <Box position="relative" w="44px" h="44px" flexShrink={0}>
                    <Box position="absolute" inset={0} bg={`${brandCyan}12`} transform="rotate(45deg)" borderRadius="8px" />
                    <Flex position="absolute" inset={0} align="center" justify="center">
                      <Icon as={FiWifi} boxSize={5} color={brandCyan} />
                    </Flex>
                  </Box>
                  <Text className={display.className} fontSize="lg" fontWeight="700" color={ink}>{t("expertise_infra_title")}</Text>
                </HStack>
                <Text fontSize="sm" color={slate} lineHeight="1.7" mb={6}>
                  {t("expertise_infra_desc")}
                </Text>
                <Link as={NextLink} href="/telecommunications" display="inline-flex" alignItems="center" gap={2}
                  color={brandCyan} fontWeight="600" fontSize="sm" _hover={{ color: brandOrange }}>
                  {t("expertise_infra_link")} <Icon as={FiArrowRight} boxSize={4} />
                </Link>
              </Box>
            </MotionBox>

            {/* Conseil */}
            <MotionBox initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }} viewport={{ once: true }}>
              <Box bg="white" border="1px solid" borderColor={line}
                borderRadius="6px" p={8} height="100%"
                position="relative" overflow="hidden">
                <CornerMarks color={brandOrange} />
                <HStack spacing={4} mb={5}>
                  <Box position="relative" w="44px" h="44px" flexShrink={0}>
                    <Box position="absolute" inset={0} bg={`${brandOrange}12`} transform="rotate(45deg)" borderRadius="8px" />
                    <Flex position="absolute" inset={0} align="center" justify="center">
                      <Icon as={FiBriefcase} boxSize={5} color={brandOrange} />
                    </Flex>
                  </Box>
                  <Text className={display.className} fontSize="lg" fontWeight="700" color={ink}>{t("expertise_conseil_title")}</Text>
                </HStack>
                <Text fontSize="sm" color={slate} lineHeight="1.7" mb={6}>
                  {t("expertise_conseil_desc")}
                </Text>
                <Link as={NextLink} href="/conseil" display="inline-flex" alignItems="center" gap={2}
                  color={brandOrange} fontWeight="600" fontSize="sm" _hover={{ color: brandCyan }}>
                  {t("expertise_conseil_link")} <Icon as={FiArrowRight} boxSize={4} />
                </Link>
              </Box>
            </MotionBox>
          </Grid>
        </Container>
      </Box>

      {/* HISTORIQUE */}
      <Box py={{ base: 16, md: 20 }} bg="white">
        <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
          <MotionBox initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }} viewport={{ once: true }} mb={10}>
            <Eyebrow label={t("history_eyebrow")} />
            <SectionTitle>
              {t("history_heading1")}{" "}
              <Text as="span" color={brandCyan}>{t("history_heading2")}</Text>
            </SectionTitle>
            <Text fontSize="sm" color={slate}>
              {renderWithBrand(t("history_desc"))}
            </Text>
          </MotionBox>

          <Box overflowX="auto" pb={2}>
            <Box minW={{ base: "700px", lg: "100%" }} position="relative">
              <Box position="absolute" top="5px" left="6px" right="6px" h="1px" overflow="hidden">
                <MotionBox
                  h="100%"
                  bgGradient={`linear(to-r, ${brandCyan}, ${brandOrange})`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                />
              </Box>
              <Flex justify="space-between">
                {historique.map((h, i) => (
                  <MotionBox key={i} initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }} flex="1"
                    pr={i < historique.length - 1 ? 4 : 0}>
                    <Box w="12px" h="12px" borderRadius="full" bg={h.couleur}
                      border="2px solid white" boxShadow={`0 0 0 2px ${h.couleur}40`} mb={5} />
                    <Text className={mono.className} fontSize="12px" fontWeight="500" color={h.couleur} mb={1}>{h.annee}</Text>
                    <Text fontSize="13px" fontWeight="600" color={ink} mb={2} lineHeight="1.3">{h.titre}</Text>
                    <Text fontSize="12px" color={slate} lineHeight="1.65">{h.texte}</Text>
                  </MotionBox>
                ))}
              </Flex>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* MISSION & VISION */}
      <Box py={{ base: 16, md: 20 }} bg={mist}>
        <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
          <MotionBox initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }} viewport={{ once: true }} mb={10}>
            <Eyebrow label={t("mission_eyebrow")} />
            <SectionTitle>
              {t("mission_heading1")}{" "}
              <Text as="span" color={brandOrange}>{t("mission_heading2")}</Text>
            </SectionTitle>
          </MotionBox>

          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={5}>
            {missions.map((m, i) => (
              <MotionBox key={i} initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                viewport={{ once: true }}>
                <Box bg="white" border="1px solid" borderColor={line}
                  borderRadius="6px" p={8} height="100%"
                  position="relative" overflow="hidden">
                  <CornerMarks color={m.couleur} />
                  <Box position="relative" w="40px" h="40px" mb={5}>
                    <Box position="absolute" inset={0} bg={`${m.couleur}12`} transform="rotate(45deg)" borderRadius="7px" />
                    <Flex position="absolute" inset={0} align="center" justify="center">
                      <Icon as={m.icon} boxSize={5} color={m.couleur} />
                    </Flex>
                  </Box>
                  <Text className={mono.className} fontSize="sm" fontWeight="500" color={m.couleur}
                    letterSpacing="0.14em" textTransform="uppercase" mb={3}>{m.label}</Text>
                  <Text className={display.className} fontSize="md" fontWeight="700" color={ink} mb={3} lineHeight="1.3">{m.titre}</Text>
                  <Text fontSize="sm" color={slate} lineHeight="1.8">{m.texte}</Text>
                </Box>
              </MotionBox>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* VALEURS */}
      <Box py={{ base: 16, md: 20 }} bg="white">
        <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
          <MotionBox initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }} viewport={{ once: true }} mb={10}>
            <Eyebrow label={t("values_eyebrow")} />
            <SectionTitle>
              {t("values_heading1")}{" "}
              <Text as="span" color={brandCyan}>{t("values_heading2")}</Text>{" "}
              {t("values_heading3")}
            </SectionTitle>
          </MotionBox>

          <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }} gap={4}>
            {valeurs.map((v, i) => (
              <MotionBox key={i} initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.38, delay: i * 0.08 }}
                viewport={{ once: true }}>
                <Flex gap={4} align="flex-start" bg="white"
                  border="1px solid" borderColor={line}
                  borderRadius="6px" p={6} position="relative">
                  <CornerMarks color={brandCyan} />
                  <Box w="36px" h="36px" flexShrink={0} position="relative">
                    <Box position="absolute" inset={0} bg={`${brandCyan}12`} transform="rotate(45deg)" borderRadius="6px" />
                    <Flex position="absolute" inset={0} align="center" justify="center">
                      <Icon as={v.icon} boxSize={4} color={brandCyan} />
                    </Flex>
                  </Box>
                  <Box>
                    <Text fontSize="14px" fontWeight="600" color={ink} mb={2}>{v.titre}</Text>
                    <Text fontSize="13px" color={slate} lineHeight="1.65">
                       {renderWithBrand(v.texte)}
                      </Text>
                  </Box>
                </Flex>
              </MotionBox>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ÉQUIPE 
      <Box py={{ base: 16, md: 20 }} bg={mist}>
        <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
          <MotionBox initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }} viewport={{ once: true }} mb={10}>
            <Eyebrow label={t("team_eyebrow")} />
            <SectionTitle>
              {t("team_heading1")}{" "}
              <Text as="span" color={brandOrange}>{t("team_heading2")}</Text>
            </SectionTitle>
          </MotionBox>

          <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }} gap={4}>
            {equipe.map((e, i) => (
              <MotionBox key={i} initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.38, delay: i * 0.08 }}
                viewport={{ once: true }} role="group">
                <Box bg="white" border="1px solid" borderColor={line}
                  borderRadius="6px" p={6} textAlign="center" cursor="pointer"
                  position="relative" overflow="hidden"
                  transition="all 0.2s"
                  _hover={{ borderColor: brandCyan, boxShadow: "sm" }}>
                  <CornerMarks color={e.couleur} />
                  <Box w="52px" h="52px" borderRadius="full"
                    bg={`${e.couleur}15`} border={`0.5px solid ${e.couleur}30`}
                    display="flex" alignItems="center" justifyContent="center"
                    mx="auto" mb={4}>
                    <Text className={mono.className} fontSize="14px" fontWeight="500" color={e.couleur}>{e.initiales}</Text>
                  </Box>
                  <Text fontSize="14px" fontWeight="600" color={ink} mb={1} lineHeight="1.3">{e.nom}</Text>
                  <Text fontSize="12px" fontWeight="600" color={e.couleur} mb={2}>{e.poste}</Text>
                  <Text fontSize="11px" color={slate} lineHeight="1.5">{e.expertise}</Text>
                  <Box mt={4} pt={4} borderTop="0.5px solid" borderColor={line}
                    display="flex" justifyContent="center">
                    <Icon as={FiLinkedin} boxSize={4} color={line}
                      transition="color 0.2s" _groupHover={{ color: brandCyan }} />
                  </Box>
                </Box>
              </MotionBox>
            ))}
          </Grid>
        </Container>
      </Box>
*/}
      {/* CTA FINAL 
      <Box py={{ base: 12, md: 16 }} bg="white">
        <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
          <MotionBox initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }} viewport={{ once: true }}>
            <Box bg={ink} borderRadius="20px" p={{ base: 10, md: 14 }}
              position="relative" overflow="hidden" textAlign="center">
              <Box position="absolute" inset={0}
                backgroundImage="radial-gradient(circle, rgba(69,196,238,0.09) 1px, transparent 1px)"
                backgroundSize="22px 22px" pointerEvents="none" />
              <Box position="absolute" bottom={0} left={0} right={0} h="2px"
                bgGradient={`linear(to-r, ${brandCyan}, ${brandOrange})`} />

              <Text className={mono.className} fontSize="11px" fontWeight="500" color={brandCyan}
                letterSpacing="0.2em" textTransform="uppercase" mb={4} position="relative">
                {t("cta_eyebrow")}
              </Text>
              <Heading className={display.className} fontSize={{ base: "2xl", md: "3xl" }} fontWeight="700"
                color="#E8F4FB" lineHeight="1.2" mb={4} position="relative" letterSpacing="-0.01em">
                {t("cta_heading1")}{" "}
                <Text as="span" color={brandCyan}>{t("cta_heading2")}</Text>
              </Heading>
              <Text fontSize="sm" color="whiteAlpha.600" mb={8} position="relative">
                {t("cta_desc")}
              </Text>
              <HStack justify="center" gap={4} position="relative">
                <Box as="a" href="/contact" bg={brandCyan} color="white" fontSize="13px"
                  fontWeight="600" px={7} py={3} borderRadius="8px"
                  border="none" cursor="pointer" transition="opacity 0.2s"
                  _hover={{ opacity: 0.88 }}>
                  {t("cta_contact")}
                </Box>
                <Box as="a" href="/services" bg="transparent" color="whiteAlpha.700"
                  fontSize="13px" fontWeight="500" px={7} py={3}
                  borderRadius="8px" border="0.5px solid rgba(255,255,255,0.18)"
                  cursor="pointer" transition="all 0.2s"
                  _hover={{ borderColor: brandCyan, color: "white" }}
                  fontFamily="inherit">
                  {t("cta_services")}
                </Box>
              </HStack>
            </Box>
          </MotionBox>
        </Container>
      </Box>
*/}
    </Box>
    </Layout>
  );
};

export default AboutPage;