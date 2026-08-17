"use client";

import { useTranslations } from "next-intl";
import {
  Box, Container, Flex, Grid, Heading, HStack, Icon, Text, VStack, SimpleGrid,
} from "@chakra-ui/react";
import {
  FiWind, FiSun, FiZap, FiMap, FiTrendingUp, FiCheckCircle, FiArrowRight,
  FiShield, FiLayers, FiClock, FiGlobe, FiBattery, FiRadio, FiCpu,
} from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";
import Layout from "@app/app/layout/layout.page";

const MotionBox = motion(Box);

// ── Couleurs de la marque ──
const brandCyan = "#0047CC";
const brandOrange = "#FF6A00";
const gradientCyan = "linear-gradient(135deg, #0047CC 0%, #2A9FD8 100%)";
const gradientOrange = "linear-gradient(135deg, #FF6A00 0%, #E06D0A 100%)";

export default function EnergiesPage() {
  const t = useTranslations("energie");

  // Liste des clés pour itérer (8 prestations)
  const prestationKeys = ["p1", "p2", "p3", "p4",  "p6",  "p8"];

  const livrables = [t("l1"), t("l2"), t("l3")];
  
  const whys = [
    { icon: FiGlobe,   title: t("w1_title"), desc: t("w1_desc") },
    { icon: FiLayers,  title: t("w2_title"), desc: t("w2_desc") },
    { icon: FiRadio,   title: t("w3_title"), desc: t("w3_desc") },
    { icon: FiShield,  title: t("w4_title"), desc: t("w4_desc") },
  ];

  // Icônes pour les prestations
  const serviceIcons = [FiBattery, FiCpu, FiZap, FiSun, FiTrendingUp, FiCheckCircle, FiGlobe, FiClock];

  return (
    <Layout>
      <Box bg="white" minH="100vh" overflowX="hidden">

        {/* ─── HERO ─── */}
        <Box
          position="relative"
          overflow="hidden"
          pt={{ base: 4, md: 6 }}
          pb={{ base: 4, md: 6 }}
        >
          <Container maxW="container.xl" px={{ base: 4, md: 8 }} position="relative" zIndex={2}>
            <Grid templateColumns={{ base: "1fr", lg: "1fr 0.9fr" }} gap={{ base: 6, lg: 10 }} alignItems="center">
              <MotionBox initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <HStack spacing={2} mb={3}>
                  <Box w="30px" h="2px" bg={brandCyan} />
                  <Text fontSize="xs" fontWeight="700" color={brandCyan} letterSpacing="0.2em" textTransform="uppercase">
                    {t("eyebrow")}
                  </Text>
                </HStack>

                <Heading
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

                <Text fontSize="md" color="gray.600" lineHeight="1.6" maxW="540px" mb={5}>
                  {t("hero_desc")}
                </Text>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                position="relative"
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="xl"
                height={{ base: "200px", md: "300px", lg: "360px" }}
              >
                <Box
                  position="absolute"
                  inset={0}
                  bgGradient={`linear(to-r, ${brandCyan}15, ${brandOrange}10)`}
                  zIndex={1}
                />
                <Image
                  src="/images/energie.jpeg"
                  alt="Énergies renouvelables et transition énergétique"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </MotionBox>
            </Grid>
          </Container>
        </Box>

        {/* ─── PRESTATIONS : STEPPER + CHECKLIST ─── */}
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
              <Text fontSize="xs" fontWeight="700" color={brandOrange} letterSpacing="0.2em" textTransform="uppercase">
                {t("prestations")}
              </Text>
              <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} fontWeight="700" lineHeight="1.2" color="gray.800">
                Nos solutions pour la transition énergétique des télécoms
              </Heading>
              <Box w="60px" h="3px" bgGradient={gradientOrange} mx="auto" mt={3} borderRadius="full" />
            </MotionBox>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              {prestationKeys.map((key, idx) => {
                const title = t(key);
                const items = t.raw(`${key}_items`) || [];
                return (
                  <MotionBox
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    viewport={{ once: true }}
                  >
                    <Flex align="center" gap={3} mb={2}>
                      <Box
                        w="36px"
                        h="36px"
                        borderRadius="full"
                        bg={brandCyan}
                        color="white"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontWeight="700"
                        fontSize="sm"
                        flexShrink={0}
                      >
                        {idx + 1}
                      </Box>
                      <Heading as="h3" fontSize="md" fontWeight="700" color="gray.800">
                        {title}
                      </Heading>
                    </Flex>
                    <VStack align="start" spacing={1.5} pl={{ base: 0, md: 10 }}>
                      {items.map((item: string, i: number) => (
                        <HStack key={i} spacing={2} align="flex-start">
                          <Icon as={FiCheckCircle} color={brandOrange} boxSize={3.5} mt={0.5} flexShrink={0} />
                          <Text fontSize="sm" color="gray.600">
                            {item}
                          </Text>
                        </HStack>
                      ))}
                    </VStack>
                  </MotionBox>
                );
              })}
            </SimpleGrid>
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
                          {idx === 0 && t("l1_desc")}
                          {idx === 1 && t("l2_desc")}
                          {idx === 2 && t("l3_desc")}
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
                <Heading size="md" fontWeight="700" mb={2}>
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
  );
}