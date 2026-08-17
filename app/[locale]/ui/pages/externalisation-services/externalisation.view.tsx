"use client";

import { useTranslations } from "next-intl";
import {
  Box, Container, Flex, Grid, Heading,
  HStack, Icon, Text, VStack, SimpleGrid,
} from "@chakra-ui/react";
import {
  FiServer, FiCheckCircle, FiArrowRight,
  FiShield, FiAward, FiBarChart2, FiRefreshCw,
  FiTrendingUp, FiUsers,
} from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";
import Layout from "@app/app/layout/layout.page";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const brandCyan = "#0047CC";
const brandOrange = "#FF6A00";
const gradientCyan = "linear-gradient(135deg, #0047CC 0%, #2A9FD8 100%)";
const gradientOrange = "linear-gradient(135deg, #FF6A00 0%, #E06D0A 100%)";

export default function ExternalisationServicesPage() {
  const t = useTranslations("externalisation");

  // Liste des clés pour itérer
  const prestationKeys = ["p1", "p2", "p3", "p4", "p5", "p6"];

  const livrables = [t("l1"), t("l2"), t("l3")];

  const stats = [
    { num: t("stat1_num"), label: t("stat1_label"), icon: FiTrendingUp },
    { num: t("stat2_num"), label: t("stat2_label"), icon: FiUsers },
    { num: t("stat3_num"), label: t("stat3_label"), icon: FiCheckCircle },
  ];

  const whys = [
    { icon: FiShield,     title: t("w1_title"), desc: t("w1_desc") },
    { icon: FiAward,      title: t("w2_title"), desc: t("w2_desc") },
    { icon: FiBarChart2,  title: t("w3_title"), desc: t("w3_desc") },
    { icon: FiRefreshCw,  title: t("w4_title"), desc: t("w4_desc") },
  ];

  return (
    <Layout>
      <Box bg="#ffff" minH="100vh">

        {/* ── HERO ── */}
        <Box
          position="relative"
          overflow="hidden"
          minH={{ base: "auto", md: "50vh" }}
          bg="#ffff"
          pt={{ base: 4, md: 6 }}
          pb={{ base: 4, md: 6 }}
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
              gap={{ base: 6, lg: 10 }}
              alignItems="center"
            >
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <HStack spacing={2} mb={2}>
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
                 fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                  fontWeight="700"
                  lineHeight="1.1"
                  color="gray.800"
                  mb={6}
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
                  mb={4}
                >
                  {t("hero_desc")}
                </Text>


              </MotionBox>

              <Box
                position="relative"
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="xl"
                height={{ base: "200px", md: "300px", lg: "100%" }}
                minH={{ lg: "280px" }}
              >
                <Image
                  src="/images/auditBan.png"
                  alt="Background"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </Box>
            </Grid>
          </Container>
        </Box>

        {/* ── PRESTATIONS : STEPPER + CHECKLIST ── */}
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
              <Text
                fontSize="xs"
                fontWeight="700"
                color={brandOrange}
                letterSpacing="0.2em"
                textTransform="uppercase"
              >
                {t("prestations")}
              </Text>
              <Heading
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="700"
                lineHeight="1.2"
                color="gray.800"
              >
                Ce que nous externalisons pour vous
              </Heading>
              <Box
                w="60px"
                h="3px"
                bgGradient={gradientOrange}
                mx="auto"
                mt={3}
                borderRadius="full"
              />
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
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
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
                          <Icon
                            as={FiCheckCircle}
                            color={brandOrange}
                            boxSize={3.5}
                            mt={0.5}
                            flexShrink={0}
                          />
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

        {/* ── LIVRABLES ── */}
        <Box py={{ base: 12, md: 16 }} bg="white">
          <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
            <Grid
              templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
              gap={10}
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
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="500"
                  lineHeight="1.2"
                  mb={3}
                >
                  Livrables clé en main
                </Heading>
                <Text color="gray.500" mb={6} fontSize="sm">
                  À chaque étape, vous recevez un ensemble complet et opérationnel.
                </Text>

                <VStack spacing={4} align="stretch">
                  {livrables.map((l, idx) => (
                    <HStack key={idx} spacing={4}>
                      <Flex direction="column" align="center">
                        <Box
                          w="36px"
                          h="36px"
                          borderRadius="full"
                          bg={idx === 0 ? brandCyan : idx === 1 ? brandOrange : "gray.200"}
                          color="white"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          fontWeight="bold"
                          fontSize="sm"
                        >
                          {idx + 1}
                        </Box>
                        {idx < livrables.length - 1 && (
                          <Box w="2px" h="24px" bg="gray.200" my={0.5} />
                        )}
                      </Flex>
                      <Box flex="1">
                        <Text fontWeight="700" color="gray.800" fontSize="sm">
                          {l}
                        </Text>
                        <Text fontSize="xs" color="gray.500">
                          {idx === 0 && "Documentation technique + architecture"}
                          {idx === 1 && "Code source, tests, déploiement CI/CD"}
                          {idx === 2 && "Formation équipe + support 30 jours"}
                        </Text>
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
                bgGradient="linear(to-br, #F8FAFE, white)"
                borderRadius="3xl"
                p={8}
                textAlign="center"
                border="1px solid"
                borderColor={`${brandCyan}20`}
              >
                <Icon as={FiArrowRight} boxSize={8} color={brandOrange} mb={3} />
                <Text fontWeight="700" fontSize="md" mb={2}>
                  {t("cta_title")}
                </Text>
                <Text fontSize="sm" color="gray.500" mb={5}>
                  {t("cta_desc")}
                </Text>
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

       
      </Box>
    </Layout>
  );
}