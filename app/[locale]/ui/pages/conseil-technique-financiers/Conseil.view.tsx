"use client";

import {
  Box, Container, Flex, Grid, Heading, HStack, Icon, Text, VStack, SimpleGrid,
} from "@chakra-ui/react";
import {
  FiDollarSign, FiTrendingUp, FiUsers, FiCheckCircle,
  FiArrowRight, FiShield, FiFileText, FiMap, FiBarChart2,
} from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";
import Layout from "@app/app/layout/layout.page";
import React from "react";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const brandCyan = "#0047CC";
const brandOrange = "#FF6A00";
const gradientCyan = "linear-gradient(135deg, #0047CC 0%, #2A9FD8 100%)";
const gradientOrange = "linear-gradient(135deg, #FF6A00 0%, #E06D0A 100%)";

export default function ConseilInfrastructuresPage() {
  const stats = [
    { num: "50+", label: "Projets accompagnés" },
    { num: "5", label: "Années d’expérience" },
    { num: "95%", label: "Satisfaction client" },
  ];

  const services = [
    {
      icon: FiDollarSign,
      title: "Financement de projets d'infrastructures",
      desc: "Montage de dossiers de financement, recherche de subventions, structuration de prêts et ingénierie financière.",
      color: brandCyan,
    },
    {
      icon: FiUsers,
      title: "Délégation de service public (DSP)",
      desc: "Accompagnement dans la mise en place de contrats de DSP, analyse des offres et suivi de l’exécution.",
      color: brandCyan,
    },
    {
      icon: FiTrendingUp,
      title: "Partenariats public-privé (PPP)",
      desc: "Conseil en montage de PPP, évaluation des risques, rédaction des cahiers des charges et négociation.",
      color: brandOrange,
    },
    {
      icon: FiCheckCircle,
      title: "Études de faisabilité",
      desc: "Analyses techniques, économiques et juridiques pour valider la viabilité de vos projets d’infrastructure.",
      color: brandOrange,
    },
  ];

  const etapes = [
    {
      numero: 1,
      title: "Diagnostic & analyse",
      desc: "Identification des enjeux, contraintes et opportunités.",
    },
    {
      numero: 2,
      title: "Étude & montage",
      desc: "Analyses techniques, économiques et juridiques.",
    },
    {
      numero: 3,
      title: "Accompagnement",
      desc: "Déploiement opérationnel et recherche de financements.",
    },
    {
      numero: 4,
      title: "Évaluation continue",
      desc: "Indicateurs de performance et pérennité du projet.",
    },
  ];

  return (
    <Layout>
      <Box bg="white" minH="100vh" overflowX="hidden">
        {/* ─── HERO (espaces réduits) ─── */}
        <Box position="relative" overflow="hidden" pt={{ base: 6, md: 10 }} pb={{ base: 8, md: 12 }}>
          <Container maxW="container.xl" px={{ base: 4, md: 8 }} position="relative" zIndex={2}>
            <Grid templateColumns={{ base: "1fr", lg: "1fr 0.9fr" }} gap={{ base: 10, lg: 16 }} alignItems="center">
              <MotionBox initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <HStack spacing={3} mb={3}>
                  <Box w="40px" h="3px" bg={brandCyan} />
                  <Text fontSize="xs" fontWeight="700" color={brandCyan} letterSpacing="0.2em" textTransform="uppercase">
                    Notre expertise
                  </Text>
                </HStack>
                <Heading
                  fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                  fontWeight="700"
                  lineHeight="1.1"
                  color="gray.800"
                  mb={4}
                >
                  Conseil{" "}
                  <Text as="span" bgGradient={gradientCyan} bgClip="text">
                    technique et financiers
                  </Text>{" "}
                  d’infrastructures
                </Heading>
                <Text fontSize="lg" color="gray.600" lineHeight="1.7" maxW="540px" mb={6}>
                  Accompagnement sur mesure pour vos projets d’infrastructure, DSP et PPP, de l’étude à la mise en œuvre.
                </Text>
                {/*
                <Flex wrap="wrap" gap={4} mb={6}>
                  {stats.map((s, idx) => (
                    <MotionBox
                      key={s.label}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      bg="rgba(255,255,255,0.6)"
                      backdropFilter="blur(12px)"
                      borderRadius="2xl"
                      p={3}
                      minW="100px"
                      border="1px solid rgba(255,255,255,0.8)"
                      boxShadow="md"
                    >
                      <Text fontSize="2xl" fontWeight="800" color={brandCyan} lineHeight={1}>
                        {s.num}
                      </Text>
                      <Text fontSize="xs" color="gray.600" fontWeight="500">
                        {s.label}
                      </Text>
                    </MotionBox>
                  ))}
                </Flex>
                */}
                
              </MotionBox>
              <MotionBox
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                position="relative"
                borderRadius="3xl"
                overflow="hidden"
                boxShadow="2xl"
                height={{ base: "240px", md: "320px", lg: "380px" }}
              >
                <Box
                  position="absolute"
                  inset={0}
                  bgGradient="linear(to-r, rgba(0,71,204,0.15), rgba(255,106,0,0.15))"
                  zIndex={1}
                />
                <Image
                  src="/images/banner.jpeg"
                  alt="Conseil infrastructures"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </MotionBox>
            </Grid>
          </Container>
        </Box>

        {/* ─── NOS PRESTATIONS (espaces réduits) ─── */}
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
              <Text fontSize="xs" fontWeight="700" color={brandOrange} letterSpacing="0.2em" textTransform="uppercase">
                Nos prestations
              </Text>
              <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="700" lineHeight="1.2" color="gray.800">
                Des solutions sur mesure
              </Heading>
              <Box w="80px" h="4px" bgGradient={gradientOrange} mx="auto" mt={4} borderRadius="full" />
            </MotionBox>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} maxW="5xl" mx="auto">
              {services.map((s, i) => {
                const isCyan = s.color === brandCyan;
                return (
                  <MotionBox
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    bg="gray.50"
                    borderRadius="2xl"
                    p={5}
                    border="1px solid"
                    borderColor="gray.100"
                    _hover={{
                      transform: "translateY(-6px)",
                      borderColor: isCyan ? brandCyan : brandOrange,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                    }}
                  >
                    <Flex align="flex-start" gap={4}>
                      <Box
                        w="48px"
                        h="48px"
                        borderRadius="full"
                        bg={isCyan ? `${brandCyan}15` : `${brandOrange}15`}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexShrink={0}
                        border="2px solid"
                        borderColor={isCyan ? brandCyan : brandOrange}
                      >
                        <Icon as={s.icon} boxSize={5} color={s.color} />
                      </Box>
                      <Box flex="1">
                        <Text fontWeight="700" fontSize="md" color="gray.800" mb={1}>
                          {s.title}
                        </Text>
                        <Text fontSize="sm" color="gray.500" lineHeight="1.6">
                          {s.desc}
                        </Text>
                      </Box>
                    </Flex>
                  </MotionBox>
                );
              })}
            </SimpleGrid>
          </Container>
        </Box>

        {/* ─── NOTRE APPROCHE : STEPPER HORIZONTAL (espaces réduits) ─── */}
        <Box py={{ base: 12, md: 16 }} bg="gray.30">
          <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              textAlign="center"
              mb={10}
            >
              <Text fontSize="xs" fontWeight="700" color={brandCyan} letterSpacing="0.2em" textTransform="uppercase">
                Notre approche
              </Text>
              <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="700" lineHeight="1.2" color="gray.800">
                Notre méthodologie 
              </Heading>
              <Box w="80px" h="4px" bgGradient={gradientCyan} mx="auto" mt={4} borderRadius="full" />
            </MotionBox>

            <Flex
              direction={{ base: "column", md: "row" }}
              align="center"
              justify="center"
              gap={{ base: 6, md: 0 }}
              maxW="5xl"
              mx="auto"
              position="relative"
            >
              {etapes.map((etape, idx) => (
                <React.Fragment key={etape.numero}>
                  <Flex
                    direction="column"
                    align="center"
                    flex="1"
                    minW={{ base: "100%", md: "150px" }}
                    px={{ base: 0, md: 2 }}
                    textAlign="center"
                  >
                    <Box
                      w="52px"
                      h="52px"
                      borderRadius="full"
                      bgGradient={gradientCyan}
                      color="white"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontWeight="700"
                      fontSize="lg"
                      boxShadow="0 4px 12px rgba(0,71,204,0.25)"
                      mb={2}
                    >
                      {etape.numero}
                    </Box>
                    <Text fontWeight="700" fontSize="md" color="gray.800" mb={1}>
                      {etape.title}
                    </Text>
                    <Text fontSize="sm" color="gray.500" lineHeight="1.6">
                      {etape.desc}
                    </Text>
                  </Flex>
                  {idx < etapes.length - 1 && (
                    <Box
                      flex="1"
                      height="2px"
                      bg={brandCyan}
                      minW="20px"
                      display={{ base: "none", md: "block" }}
                      opacity={0.4}
                    />
                  )}
                </React.Fragment>
              ))}
            </Flex>
          </Container>
        </Box>

        {/* ─── LIVRABLES (espaces réduits) ─── */}
        <Box py={{ base: 10, md: 14 }} bg="white">
          <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap={6}>
              {[
                { icon: FiFileText, label: "Études sur mesure", desc: "Analyses adaptées à chaque contexte" },
                { icon: FiMap, label: "Feuilles de route", desc: "Planification stratégique et opérationnelle" },
                { icon: FiBarChart2, label: "Suivi de performance", desc: "Indicateurs et tableaux de bord" },
              ].map((item, idx) => (
                <MotionBox
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  textAlign="center"
                >
                  <Box
                    w="56px"
                    h="56px"
                    mx="auto"
                    mb={3}
                    borderRadius="full"
                    bg={`${brandCyan}10`}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={item.icon} boxSize={5} color={brandCyan} />
                  </Box>
                  <Text fontWeight="600" fontSize="md" color="gray.800">
                    {item.label}
                  </Text>
                  <Text fontSize="sm" color="gray.500" mt={1}>
                    {item.desc}
                  </Text>
                </MotionBox>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    </Layout>
  );
}