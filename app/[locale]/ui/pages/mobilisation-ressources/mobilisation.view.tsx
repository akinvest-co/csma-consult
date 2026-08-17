"use client";

import { useTranslations } from "next-intl";
import {
  Box, Container, Flex, Grid, Heading,
  HStack, Icon, Text, VStack, SimpleGrid,
  Link as ChakraLink,
  Tabs, TabList, TabPanels, Tab, TabPanel,
} from "@chakra-ui/react";
import {
  FiUsers, FiCheckCircle, FiArrowRight,
  FiUserCheck, FiZap, FiSettings, FiTrendingUp,
  FiAward, FiTarget, FiBookOpen, FiRefreshCw,
  FiWifi, FiBatteryCharging, FiMonitor,
} from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";
import Layout from "@app/app/layout/layout.page";

const MotionBox = motion(Box);
const brandCyan = "#0047CC";
const brandOrange = "#FF6A00";
const gradientCyan = "linear-gradient(135deg, #0047CC 0%, #2A9FD8 100%)";
const gradientOrange = "linear-gradient(135deg, #FF6A00 0%, #E06D0A 100%)";

export default function MobilisationRessourcesPage() {
  const t = useTranslations("mobilisation");

  // Données existantes
  const prestations = [
    t("p1"), t("p2"), t("p3"), t("p4"), t("p5"), t("p6"),
  ];

  const livrables = [
    {
      label: t("l1"),
      desc: "Un état des lieux de votre projet et des axes d'amélioration concrets",
    },
    {
      label: t("l2"),
      desc: "Les bonnes pratiques propres à votre secteur, prêtes à appliquer",
    },
    {
      label: t("l3"),
      desc: "Les points de vigilance à surveiller à chaque étape du projet",
    },
  ];

  const stats = [
    { num: t("stat1_num"), label: t("stat1_label") },
    { num: t("stat2_num"), label: t("stat2_label") },
    { num: t("stat3_num"), label: t("stat3_label") },
  ];

  const whys = [
    { icon: FiUserCheck,   title: t("w1_title"), desc: t("w1_desc") },
    { icon: FiZap,         title: t("w2_title"), desc: t("w2_desc") },
    { icon: FiSettings,    title: t("w3_title"), desc: t("w3_desc") },
    { icon: FiTrendingUp,  title: t("w4_title"), desc: t("w4_desc") },
  ];

  const advices = [
    { icon: FiTarget,     title: t("a1_title"), desc: t("a1_desc") },
    { icon: FiAward,      title: t("a2_title"), desc: t("a2_desc") },
    { icon: FiBookOpen,   title: t("a3_title"), desc: t("a3_desc") },
    { icon: FiRefreshCw,  title: t("a4_title"), desc: t("a4_desc") },
  ];

  // Domaines spécifiques
  const domains = [
    {
      id: "telecom",
      label: "Télécoms",
      icon: FiWifi,
      prestation: prestations[0], // p1
      advice: advices[0],          // a1
      color: brandCyan,
    },
    {
      id: "energie",
      label: "Énergie",
      icon: FiBatteryCharging,
      prestation: prestations[1], // p2
      advice: advices[1],          // a2
      color: brandOrange,
    },
    {
      id: "it",
      label: "IT",
      icon: FiMonitor,
      prestation: prestations[2], // p3
      advice: advices[2],          // a3
      color: brandCyan,
    },
  ];

  // Prestations génériques (p4, p5, p6)
  const genericPrestations = prestations.slice(3);
  // Conseil générique (a4)
  const genericAdvice = advices[3];

  return (
    <Layout>
      <Box bg="white" minH="100vh">

        {/* ── HERO ── */}
        <Box
          position="relative"
          overflow="hidden"
          minH={{ base: "auto", md: "60vh" }}
          bg="#ffff"
          pt={{ base: 8, md: 10 }}
          pb={{ base: 8, md: 10 }}
        >
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            h="3px"
            zIndex={1}
            bgGradient={`linear(to-r, ${brandCyan}, ${brandOrange})`}
          />
          <Container maxW="container.xl" px={{ base: 4, md: 8 }} position="relative" zIndex={2}>
            <Grid
              templateColumns={{ base: "1fr", lg: "1fr 0.8fr" }}
              gap={{ base: 8, lg: 12 }}
              alignItems="center"
            >
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <HStack spacing={2} mb={3}>
                  <Box w="30px" h="2px" bg={brandCyan} />
                  <Text
                    fontSize="xs"
                    fontWeight="700"
                    color={brandCyan}
                    letterSpacing="0.2em"
                    textTransform="uppercase"
                  >
                    {t("eyebrow")}
                  </Text>
                </HStack>
                <Heading
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                  fontWeight="500"
                  lineHeight="1.1"
                  color="gray.900"
                  mb={5}
                >
                  {t("heading1")}{" "}
                  <Text as="span" bgGradient={gradientOrange} bgClip="text">
                    {t("heading2")}
                  </Text>
                </Heading>
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  color="#1A202C"
                  lineHeight="1.5"
                  maxW="500px"
                  mb={5}
                >
                  {t("hero_desc")}
                </Text>
                <Flex wrap="wrap" gap={3} mb={5}>
                  {stats.map((s, idx) => (
                    <MotionBox
                      key={s.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      bg="#1A202C"
                      backdropFilter="blur(8px)"
                      borderRadius="xl"
                      p={2.5}
                      minW="100px"
                      border="1px solid"
                      borderColor="rgba(255,255,255,0.15)"
                    >
                      <Text fontSize="sm" fontWeight="800" color="white" lineHeight={1} mb={0.5}>
                        {s.num}
                      </Text>
                      <Text fontSize="2xs" color="gray.300" fontWeight="500">
                        {s.label}
                      </Text>
                    </MotionBox>
                  ))}
                </Flex>
                <Box
                  as="a"
                  href="/contact"
                  display="inline-flex"
                  alignItems="center"
                  gap={2}
                  bgGradient={gradientCyan}
                  color="white"
                  px={5}
                  py={2}
                  borderRadius="full"
                  fontWeight="600"
                  fontSize="xs"
                  transition="all 0.2s"
                  _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
                >
                  {t("cta_btn")}
                  <Icon as={FiArrowRight} boxSize={3.5} />
                </Box>
              </MotionBox>
              <Box
                position="relative"
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="xl"
                height={{ base: "250px", md: "350px", lg: "100%" }}
                minH={{ lg: "300px" }}
              >
                <Image
                  src="/images/auditBan.png"
                  alt="Pilotage de projets Télécoms, Énergie & IT"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </Box>
            </Grid>
          </Container>
        </Box>

        {/* ── TABS PAR DOMAINE ── */}
        <Box py={{ base: 12, md: 16 }} bg="white">
          <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
            <Tabs variant="unstyled" isFitted={false} align="center">
              <TabList
                gap={3}
                flexWrap="wrap"
                borderBottom="1px solid"
                borderColor="gray.200"
                pb={4}
                mb={10}
              >
                {domains.map((d) => (
                  <Tab
                    key={d.id}
                    px={5}
                    py={2.5}
                    borderRadius="full"
                    fontWeight="600"
                    fontSize="sm"
                    color="gray.600"
                    _hover={{ bg: "gray.50" }}
                    _selected={{
                      bg: d.color,
                      color: "white",
                      boxShadow: "sm",
                    }}
                    transition="all 0.2s"
                  >
                    <HStack spacing={2}>
                      <Icon as={d.icon} boxSize={4} />
                      <Text>{d.label}</Text>
                    </HStack>
                  </Tab>
                ))}
              </TabList>

              <TabPanels>
                {domains.map((d) => (
                  <TabPanel key={d.id} px={0}>
                    <MotionBox
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <HStack spacing={4} mb={4}>
                        <Box w="40px" h="4px" bg={d.color} borderRadius="full" />
                        <Heading as="h2" fontSize="2xl" fontWeight="600" color="gray.800">
                          {d.label}
                        </Heading>
                      </HStack>
                      <Grid
                        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                        gap={6}
                        alignItems="stretch"
                      >
                        {/* Prestation spécifique */}
                        <Box
                          bg="gray.50"
                          p={6}
                          borderRadius="2xl"
                          borderLeft={`4px solid ${d.color}`}
                        >
                          <Flex align="center" gap={4}>
                            <Box
                              w="44px"
                              h="44px"
                              borderRadius="xl"
                              bg={d.color}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                            >
                              <Icon as={FiCheckCircle} color="white" boxSize={5} />
                            </Box>
                            <Text fontWeight="600" color="gray.800">
                              {d.prestation}
                            </Text>
                          </Flex>
                        </Box>

                        {/* Conseil spécifique */}
                        <Box
                          bg="white"
                          p={6}
                          borderRadius="2xl"
                          border="1px solid"
                          borderColor="gray.200"
                          shadow="sm"
                        >
                          <Flex gap={5} align="flex-start">
                            <Box
                              bg={`${d.color}10`}
                              p={3}
                              borderRadius="xl"
                            >
                              <Icon as={d.advice.icon} boxSize={6} color={d.color} />
                            </Box>
                            <Box>
                              <Text fontWeight="700" fontSize="lg" mb={1} color="gray.800">
                                {d.advice.title}
                              </Text>
                              <Text color="gray.500" lineHeight="1.6">
                                {d.advice.desc}
                              </Text>
                            </Box>
                          </Flex>
                        </Box>
                      </Grid>
                      {/* CTA spécifique au domaine */}
                      <Box mt={6} textAlign="right">
                        <ChakraLink
                          href="/contact"
                          display="inline-flex"
                          alignItems="center"
                          gap={2}
                          color={d.color}
                          fontWeight="600"
                          fontSize="sm"
                          _hover={{ textDecor: "underline" }}
                        >
                          {t("cta_btn")} <Icon as={FiArrowRight} boxSize={4} />
                        </ChakraLink>
                      </Box>
                    </MotionBox>
                  </TabPanel>
                ))}
              </TabPanels>
            </Tabs>
          </Container>
        </Box>

        {/* ── PRESTATIONS GÉNÉRIQUES ── */}
        <Box py={{ base: 16, md: 24 }} bg="gray.50">
          <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              textAlign="center"
              mb={12}
            >
              <Text
                fontSize="xs"
                fontWeight="700"
                color={brandOrange}
                letterSpacing="0.2em"
                textTransform="uppercase"
              >
                {t("advice_badge")}
              </Text>
              <Heading fontSize={{ base: "3xl", md: "4xl" }} fontWeight="500" lineHeight="1.2" mb={5}>
                {t("prestations")}
              </Heading>
            </MotionBox>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {genericPrestations.map((p, i) => (
                <MotionBox
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  bg="white"
                  borderRadius="2xl"
                  p={6}
                  border="1px solid"
                  borderColor="gray.200"
                  shadow="sm"
                  _hover={{ shadow: "md", borderColor: brandCyan, transform: "translateY(-4px)" }}
                >
                  <Flex align="center" gap={4}>
                    <Box
                      w="44px"
                      h="44px"
                      borderRadius="xl"
                      bg={brandCyan}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon as={FiCheckCircle} color="white" boxSize={5} />
                    </Box>
                    <Text fontWeight="600" color="gray.800">{p}</Text>
                  </Flex>
                </MotionBox>
              ))}
            </SimpleGrid>

            {/* Conseil générique */}
            <Box mt={12}>
              <MotionBox
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                bg="white"
                borderRadius="2xl"
                p={6}
                shadow="sm"
                border="1px solid"
                borderColor="gray.100"
                maxW="3xl"
                mx="auto"
              >
                <Flex gap={5} align="flex-start">
                  <Box bg={`${brandCyan}10`} p={3} borderRadius="xl">
                    <Icon as={genericAdvice.icon} boxSize={6} color={brandCyan} />
                  </Box>
                  <Box>
                    <Text fontWeight="700" fontSize="lg" mb={1} color="gray.800">
                      {genericAdvice.title}
                    </Text>
                    <Text color="gray.500" lineHeight="1.6">
                      {genericAdvice.desc}
                    </Text>
                  </Box>
                </Flex>
              </MotionBox>
            </Box>
          </Container>
        </Box>

        {/* ── LIVRABLES ── */}
        <Box py={{ base: 16, md: 24 }} bg="white">
          <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
            <Grid
              templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
              gap={12}
              alignItems="center"
            >
              <MotionBox
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Text
                  fontSize="xs"
                  fontWeight="700"
                  color={brandCyan}
                  letterSpacing="0.2em"
                  textTransform="uppercase"
                  mb={2}
                >
                  {t("livrables_title")}
                </Text>
                <Heading
                  fontSize={{ base: "3xl", md: "4xl" }}
                  fontWeight="500"
                  lineHeight="1.2"
                  mb={5}
                >
                  {t("livrables_title")}
                </Heading>
                <Text color="gray.500" mb={8}>
                  Une méthodologie transparente et des résultats tangibles à chaque étape.
                </Text>
                <VStack spacing={6} align="stretch">
                  {livrables.map((l, idx) => (
                    <HStack key={idx} spacing={5}>
                      <Flex direction="column" align="center">
                        <Box
                          w="40px"
                          h="40px"
                          borderRadius="full"
                          bg={idx === 0 ? brandCyan : idx === 1 ? brandOrange : "gray.200"}
                          color="white"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          fontWeight="bold"
                        >
                          {idx + 1}
                        </Box>
                        {idx < livrables.length - 1 && (
                          <Box w="2px" h="30px" bg="gray.200" my={1} />
                        )}
                      </Flex>
                      <Box flex="1">
                        <Text fontWeight="700" color="gray.800">{l.label}</Text>
                        <Text fontSize="sm" color="gray.500">{l.desc}</Text>
                      </Box>
                    </HStack>
                  ))}
                </VStack>
              </MotionBox>
              <MotionBox
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                bg="white"
                borderRadius="3xl"
                p={8}
                textAlign="center"
                border="1px solid"
                borderColor={`${brandCyan}20`}
                shadow="lg"
              >
                <Icon as={FiArrowRight} boxSize={10} color={brandOrange} mb={4} />
                <Text fontWeight="700" fontSize="lg" mb={2}>
                  {t("cta_title")}
                </Text>
                <Text fontSize="sm" color="gray.500" mb={6}>{t("cta_desc")}</Text>
                <Box
                  as="a"
                  href="/contact"
                  display="inline-flex"
                  alignItems="center"
                  gap={2}
                  bg={brandOrange}
                  color="white"
                  px={5}
                  py={2.5}
                  borderRadius="full"
                  fontSize="sm"
                  fontWeight="600"
                  _hover={{ bg: brandCyan }}
                >
                  {t("cta_btn")}
                  <Icon as={FiArrowRight} boxSize={4} />
                </Box>
              </MotionBox>
            </Grid>
          </Container>
        </Box>

        {/* ── POURQUOI NOUS ── */}
        <Box py={{ base: 16, md: 20 }} bg="gray.50">
          <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
            <MotionBox
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              mb={10}
              textAlign="center"
            >
              <Heading
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="500"
                lineHeight="1.2"
                mb={5}
              >
                {t("why_title")}
              </Heading>
              <Text color="gray.500" mt={2}>La confiance de nos partenaires</Text>
            </MotionBox>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              {whys.map((w, i) => (
                <MotionBox
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  viewport={{ once: true }}
                  bg="white"
                  borderRadius="2xl"
                  p={6}
                  borderLeft={`4px solid ${i % 2 === 0 ? brandCyan : brandOrange}`}
                  shadow="sm"
                  _hover={{ shadow: "md", transform: "translateX(4px)" }}
                >
                  <Flex gap={5} align="flex-start">
                    <Box bg={`${brandCyan}10`} p={3} borderRadius="xl">
                      <Icon as={w.icon} boxSize={6} color={brandCyan} />
                    </Box>
                    <Box>
                      <Text fontWeight="700" fontSize="lg" mb={1} color="gray.800">
                        {w.title}
                      </Text>
                      <Text color="gray.500" lineHeight="1.6">{w.desc}</Text>
                    </Box>
                  </Flex>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Container>
        </Box>

      </Box>
    </Layout>
  );
}
