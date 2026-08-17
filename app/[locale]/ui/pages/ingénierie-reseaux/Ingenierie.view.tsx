"use client";

import { useTranslations } from "next-intl";
import {
  Box, Container, Flex, Grid, Heading, HStack, Icon, Text, VStack, SimpleGrid, Link,
} from "@chakra-ui/react";
import {
  FiWifi, FiCheckCircle, FiArrowRight, FiShield, FiLayers, FiZap, FiClock,
  FiMap, FiTrendingUp, FiFileText, FiChevronRight, FiServer, FiRadio,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import Image from "next/image";
import React from "react";
import Layout from "@app/app/layout/layout.page";
import Head from "next/head";

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
const gradientBlue = "linear-gradient(135deg, #0047CC 0%, #003399 100%)";

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

// ─── Composant PrestationGroup ───
function PrestationGroup({
  keys, t, accent,
}: { keys: string[]; t: any; accent: string }) {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
      {keys.map((key, idx) => {
        const title = t(key);
        const items = t.raw(`${key}_items`) || [];
        return (
          <MotionBox
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            viewport={{ once: true }}
            as="article"
            itemScope
            itemType="https://schema.org/Service"
          >
            <Flex align="center" gap={3} mb={3}>
              <Box
                w="36px"
                h="36px"
                borderRadius="full"
                bg={accent}
                color="white"
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
              <Heading as="h3" className={display.className} fontSize="md" fontWeight="700" color={ink} itemProp="name">
                {title}
              </Heading>
            </Flex>
            <VStack align="start" spacing={2} pl={{ base: 0, md: 12 }}>
              {items.map((item: string, i: number) => (
                <HStack key={i} spacing={2.5} align="flex-start">
                  <Icon as={FiCheckCircle} color={brandOrange} boxSize={4} mt={0.5} flexShrink={0} />
                  <Text fontSize="sm" color={slate} itemProp="description">
                    {item}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </MotionBox>
        );
      })}
    </SimpleGrid>
  );
}

export default function ReseauxTelecomsPage() {
  const t = useTranslations("reseaux");

  // Clés pour la section RÉSEAUX
  const reseauxKeys = ["p1", "p2", "p3", "p4", "p5", "p6"];
  
  // Clés pour la section TÉLÉCOMS (optique & SIG)
  const telecomsKeys = ["p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15"];

  const livrables = [t("l1"), t("l2"), t("l3")];
  const livrableDesc = [
    "Audit et architecture réseau sur mesure",
    "Déploiement et configuration complète",
    "Supervision, maintenance et SLA",
  ];

  // Données pour la section "Pourquoi choisir CSMA CONSULT"
  const whyItems = [
    { icon: FiShield, title: "Expertise multicouche", desc: "Réseaux fixes, mobiles, optiques et SIG." },
    { icon: FiTrendingUp, title: "Méthodologie éprouvée", desc: "Processus standardisés pour des livrables de qualité." },
    { icon: FiClock, title: "Accompagnement de bout en bout", desc: "De l'audit à la maintenance, nous restons à vos côtés." },
    { icon: FiZap, title: "Innovation continue", desc: "Veille technologique et meilleures pratiques du marché." }
  ];

  // Données FAQ
  const faqItems = [
    { q: "Qu'est-ce qu'un audit réseau ?", a: "Un audit réseau permet d'évaluer la performance, la sécurité et la capacité de votre infrastructure existante afin de proposer des optimisations adaptées à vos besoins." },
    { q: "Quels types de réseaux gérez-vous ?", a: "Nous intervenons sur les réseaux fixes (FTTH, FTTx), mobiles (4G, 5G), optiques longue distance (DWDM) et les systèmes d'information géographique (SIG)." },
    { q: "Proposez-vous des contrats de maintenance ?", a: "Oui, nous proposons des contrats de supervision, maintenance préventive et corrective avec des niveaux de service (SLA) adaptés à vos enjeux critiques." }
  ];

  return (
    <>
      <Head>
        <title>Infrastructures Réseaux & Télécoms Très Haut Débit | CSMA CONSULT</title>
        <meta name="description" content="CSMA CONSULT conçoit, déploie et optimise vos réseaux fixes et mobiles : FTTH, 4G, 5G, DWDM, SIG. Audit, déploiement, supervision et maintenance." />
        <meta name="keywords" content="réseaux télécoms, FTTH, fibre optique, 5G, DWDM, SIG, audit réseau, déploiement fibre, supervision réseau, CSMA CONSULT" />
        <link rel="canonical" href="https://www.csmaconsult.com/reseaux-telecoms" />
        <meta property="og:title" content="Infrastructures Réseaux & Télécoms Très Haut Débit" />
        <meta property="og:description" content="Expert en réseaux fixes, mobiles et optiques : FTTH, 4G, 5G, DWDM, SIG. Audit, déploiement, supervision." />
        <meta property="og:image" content="https://www.csmaconsult.com/images/csma11.jpeg" />
        <meta property="og:url" content="https://www.csmaconsult.com/reseaux-telecoms" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Infrastructures Réseaux & Télécoms Très Haut Débit",
              "provider": {
                "@type": "Organization",
                "name": "CSMA CONSULT",
                "url": "https://www.csmaconsult.com"
              },
              "description": "Conception, déploiement et optimisation des réseaux fixes et mobiles : FTTH, 4G, 5G, DWDM, SIG.",
              "serviceType": "Télécommunications",
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "EUR"
                }
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.csmaconsult.com" },
                { "@type": "ListItem", "position": 2, "name": "Réseaux & Télécoms", "item": "https://www.csmaconsult.com/reseaux-telecoms" }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqItems.map((item) => ({
                "@type": "Question",
                "name": item.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.a
                }
              }))
            })
          }}
        />
      </Head>

      <Layout>
        <Box bg="white" minH="100vh" overflowX="hidden" className={body.className} role="main" aria-label="Page Réseaux et Télécoms">

          {/* ─── HERO ─── */}
          <Box position="relative" overflow="hidden" pt={{ base: 12, md: 16 }} pb={{ base: 6, md: 10 }}>
            <Box
              position="absolute"
              inset={0}
              zIndex={0}
              opacity={0.6}
              sx={{
                backgroundImage: `radial-gradient(${line} 1.5px, transparent 1.5px)`,
                backgroundSize: "26px 26px",
                WebkitMaskImage: "radial-gradient(ellipse 70% 55% at 50% 0%, black 30%, transparent 100%)",
                maskImage: "radial-gradient(ellipse 70% 55% at 50% 0%, black 30%, transparent 100%)",
              }}
            />

            <Container maxW="container.xl" px={{ base: 4, md: 8 }} position="relative" zIndex={2}>
              {/* Breadcrumb 
              <Box as="nav" aria-label="Fil d'Ariane" fontSize="sm" color={slate} mb={6}>
                <HStack spacing={2}>
                  <Link href="/" color={brandCyan} _hover={{ textDecoration: "underline" }}>Accueil</Link>
                  <Icon as={FiChevronRight} boxSize={3} />
                  <Text as="span" fontWeight="600" color={ink}>Réseaux & Télécoms</Text>
                </HStack>
              </Box>
*/}
              <Grid templateColumns={{ base: "1fr", lg: "1fr 0.9fr" }} gap={{ base: 10, lg: 16 }} alignItems="center">
                <MotionBox initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                  <HStack spacing={2} mb={3}>
                    <Box w="30px" h="2px" bg={brandCyan} />
                    <Text fontSize="xs" fontWeight="700" color={brandCyan} letterSpacing="0.2em" textTransform="uppercase">
                      {t("eyebrow")}
                    </Text>
                  </HStack>

                  <Heading
                    as="h1"
                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                    fontWeight="700"
                    lineHeight="1.1"
                    color="gray.800"
                    mb={4}
                  >
                    {t("heading1")}{" "}
                    <Text as="span" bgGradient={gradientOrange} bgClip="text">
                      {t("heading2")}
                    </Text>
                  </Heading>

                  <Text fontSize="lg" color={slate} lineHeight="1.7" maxW="540px" mb={4}>
                    {renderWithBrand(t("hero_desc"))}
                  </Text>

                  <Text fontSize="md" color={slate} maxW="540px" mb={8}>
                    CSMA CONSULT vous accompagne dans la modernisation de vos infrastructures critiques, avec des solutions sur mesure et une approche orientée performance et résilience.
                  </Text>
                </MotionBox>

                <MotionBox
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  position="relative"
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="2xl"
                  height={{ base: "280px", md: "360px", lg: "420px" }}
                >
                  <Box position="absolute" inset={0} bgGradient="linear(to-r, rgba(0,71,204,0.15), rgba(255,106,0,0.15))" zIndex={1} />
                  <Image
                    src="/images/csma11.jpeg"
                    alt="Architecture réseau FTTH et fibre optique – CSMA CONSULT"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </MotionBox>
              </Grid>
            </Container>
          </Box>

          {/* ─── PRESTATIONS ─── */}
          <Box py={{ base: 12, md: 18 }} bg={mist}>
            <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                textAlign="center"
                mb={16}
              >
                <Text className={mono.className} fontSize="xs" fontWeight="500" color={brandOrange} letterSpacing="0.22em" textTransform="uppercase">
                  {t("prestations")}
                </Text>
                <Heading as="h2" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} fontWeight="700" lineHeight="1.2" color="gray.800">
                  Nos solutions réseau & télécom
                </Heading>
                <Box w="60px" h="3px" bgGradient={gradientOrange} mx="auto" mt={3} borderRadius="full" />
              </MotionBox>

              {/* ─── SECTION RÉSEAUX ─── */}
              <Box mb={16}>
                <Flex align="center" gap={4} mb={10}>
                  <Icon as={FiServer} boxSize={8} color={brandCyan} />
                  <Heading as="h3" fontSize="2xl" fontWeight="700" color={ink}>
                    Réseaux
                  </Heading>
                  <Box flex="1" h="2px" bgGradient={`linear(to-r, ${brandCyan}, transparent)`} ml={4} />
                </Flex>
                <PrestationGroup keys={reseauxKeys} t={t} accent={brandCyan} />
              </Box>

              {/* ─── SÉPARATEUR ─── 
              <Flex align="center" justify="center" my={16} gap={4}>
                <Box flex="1" h="1px" bgGradient={`linear(to-r, transparent, ${brandOrange})`} />
                <Icon as={FiRadio} boxSize={7} color={brandOrange} />
                <Box flex="1" h="1px" bgGradient={`linear(to-l, transparent, ${brandOrange})`} />
              </Flex>
                */}
              {/* ─── SECTION TÉLÉCOMS ─── */}
              <Box>
                <Flex align="center" gap={4} mb={10}>
                  <Icon as={FiWifi} boxSize={8} color={brandOrange} />
                  <Heading as="h3" fontSize="2xl" fontWeight="700" color={ink}>
                    Télécoms
                  </Heading>
                  <Box flex="1" h="2px" bgGradient={`linear(to-r, ${brandOrange}, transparent)`} ml={4} />
                </Flex>
                <PrestationGroup keys={telecomsKeys} t={t} accent={brandOrange} />
              </Box>
            </Container>
          </Box>

         

          {/* ─── LIVRABLES ─── 
          <Box py={{ base: 12, md: 16 }} bg="white">
            <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
              <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={10} alignItems="center">
                <MotionBox
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Text fontSize="xs" fontWeight="700" color={brandCyan} letterSpacing="0.2em" textTransform="uppercase" mb={2}>
                    {t("livrables_title")}
                  </Text>

                  <VStack spacing={4} align="stretch">
                    {livrables.map((l, idx) => (
                      <HStack key={idx} spacing={4} align="flex-start">
                        <Flex direction="column" align="center">
                          <Box
                            w="36px"
                            h="36px"
                            borderRadius="full"
                            bg={idx === 0 ? brandCyan : idx === 1 ? brandOrange : "gray.400"}
                            color="white"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            fontSize="sm"
                            fontWeight="700"
                            boxShadow="sm"
                          >
                            {idx + 1}
                          </Box>
                          {idx < livrables.length - 1 && (
                            <Box w="2px" h="24px" bg="gray.200" my={0.5} />
                          )}
                        </Flex>
                        <Box flex="1">
                          <Text fontWeight="700" fontSize="md" color="gray.800">
                            {l}
                          </Text>
                          <Text fontSize="xs" color="gray.500" mt={0.5}>
                            {livrableDesc[idx]}
                          </Text>
                        </Box>
                      </HStack>
                    ))}
                  </VStack>
                </MotionBox>

                <MotionBox
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  bg="gray.50"
                  borderRadius="3xl"
                  p={8}
                  textAlign="center"
                  border="1px solid"
                  borderColor={`${brandCyan}20`}
                  boxShadow="sm"
                  _hover={{ boxShadow: "md" }}
                >
                  <Box
                    w="64px"
                    h="64px"
                    borderRadius="full"
                    bg={`${brandOrange}10`}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mx="auto"
                    mb={4}
                  >
                    <Icon as={FiArrowRight} boxSize={8} color={brandOrange} />
                  </Box>
                  <Heading as="h3" size="md" fontWeight="700" mb={2}>
                    {t("cta_title")}
                  </Heading>
                  <Text fontSize="sm" color="gray.500" mb={6}>
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
                    px={5}
                    py={2.5}
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight="700"
                    transition="all 0.3s"
                    _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
                  >
                    {t("cta_btn")}
                    <Icon as={FiArrowRight} boxSize={4} />
                  </Box>
                </MotionBox>
              </Grid>
            </Container>
          </Box>
*/}
         
        </Box>
      </Layout>
    </>
  );
}