"use client";

import { useTranslations } from "next-intl"; // ✅
import {
  Box, Container, Flex, Grid, Heading,
  HStack, Icon, Text, VStack, Button,
} from "@chakra-ui/react";
import {
  TbTopologyStarRing, TbBolt, TbChartBar, TbUsers,
  TbServerCog, TbArrowUpRight, TbMail,
} from "react-icons/tb";
import Layout from "@app/app/layout/layout.page";
import { keyframes } from "@emotion/react";

const brandCyan = "#0047CC";
const brandOrange = "#FF6A00";
const gradientCyan = "linear-gradient(135deg, #0047CC 0%, #0047CC 100%)";
const gradientOrange = "linear-gradient(135deg, #FF6A00 0%, #E06D0A 100%)";

type ColorKey = "cyan" | "orange";

const iconStyles: Record<ColorKey, { bg: string; color: string; border: string }> = {
  cyan:   { bg: "rgba(69,196,238,0.1)",   color: brandCyan,   border: "1px solid rgba(69,196,238,0.25)" },
  orange: { bg: "rgba(247,135,25,0.1)",   color: brandOrange, border: "1px solid rgba(247,135,25,0.25)" },
};

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;
const shimmer = keyframes`
  0%   { background-position: -200% 0; }
  100% { background-position:  200% 0; }
`;

const ServicesView = () => {
  const t = useTranslations("services"); // ✅

  const stats = [
    { num: t("stat1_num"), label: t("stat1_label"), icon: TbTopologyStarRing },
    { num: t("stat2_num"), label: t("stat2_label"), icon: TbBolt },
    { num: t("stat3_num"), label: t("stat3_label"), icon: TbChartBar },
  ];

  const services = [
    {
      num: "01", icon: TbTopologyStarRing, color: "cyan" as ColorKey,
      titre: t("s1_titre"), tag: t("s1_tag"), description: t("s1_desc"),
      details:   [t("s1_d1"), t("s1_d2"), t("s1_d3"), t("s1_d4"), t("s1_d5"), t("s1_d6")],
      livrables: [t("s1_l1"), t("s1_l2"), t("s1_l3")],
    },
    {
      num: "02", icon: TbBolt, color: "orange" as ColorKey,
      titre: t("s2_titre"), tag: t("s2_tag"), description: t("s2_desc"),
      details:   [t("s2_d1"), t("s2_d2"), t("s2_d3"), t("s2_d4"), t("s2_d5"), t("s2_d6")],
      livrables: [t("s2_l1"), t("s2_l2"), t("s2_l3")],
    },
   
    {
      num: "04", icon: TbUsers, color: "orange" as ColorKey,
      titre: t("s4_titre"), tag: t("s4_tag"), description: t("s4_desc"),
      details:   [t("s4_d1"), t("s4_d2"), t("s4_d3"), t("s4_d4"), t("s4_d5"), t("s4_d6")],
      livrables: [t("s4_l1"), t("s4_l2"), t("s4_l3")],
    },
    {
      num: "05", icon: TbServerCog, color: "cyan" as ColorKey,
      titre: t("s5_titre"), tag: t("s5_tag"), description: t("s5_desc"),
      details:   [t("s5_d1"), t("s5_d2"), t("s5_d3"), t("s5_d4"), t("s5_d5"), t("s5_d6")],
      livrables: [t("s5_l1"), t("s5_l2"), t("s5_l3")],
    },
  ];

  return (
    <Layout>
      <Box bg="white" minH="100vh">

        {/* HERO */}
        <Container maxW="container.xl" px={{ base: 6, md: 8, lg: 12 }}
          py={{ base: 10, md: 16 }} position="relative"
          overflow="hidden" borderRadius="3xl"
          minH={{ base: "420px", md: "520px" }}>

          <Box position="absolute" inset={0}
            bg="linear-gradient(135deg, #0A1927 0%, #112236 50%, #0A1927 100%)"
            _before={{
              content: '""', position: "absolute", inset: 0,
              bgImage: "url('/images/banner.jpeg')", bgSize: "cover",
              bgPosition: "center", opacity: 0.15,
              filter: "blur(2px)", transform: "scale(1.05)",
            }} />
          <Box position="absolute" inset={0}
            bg="linear-gradient(110deg, transparent 30%, rgba(69,196,238,0.08) 50%, transparent 70%)"
            bgSize="200% 100%" animation={`${shimmer} 8s linear infinite`} />
          <Box position="absolute" top="-120px" right="-120px" w="600px" h="600px"
            borderRadius="full" border="0.5px solid rgba(69,196,238,0.12)"
            pointerEvents="none" />
          <Box position="absolute" top="-60px" right="-60px" w="380px" h="380px"
            borderRadius="full" border="0.5px solid rgba(247,135,25,0.08)"
            pointerEvents="none" />

          <Grid templateColumns={{ base: "1fr", lg: "1fr 320px" }}
            gap={10} alignItems="center" position="relative" zIndex={1}>

            <Box animation={`${fadeInUp} 0.8s ease-out`}>
              <HStack spacing={3} mb={6}>
                <Box w="40px" h="2px" bgGradient={gradientCyan}
                  borderRadius="full" boxShadow="0 0 10px rgba(69,196,238,0.5)" />
                <Text fontSize="xs" fontWeight="700" color={brandCyan}
                  letterSpacing="0.2em" textTransform="uppercase">
                  {t("eyebrow")} {/* ✅ */}
                </Text>
              </HStack>

              <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight="600" lineHeight="1.2" letterSpacing="-0.02em"
                mb={5} color="white" textShadow="0 2px 10px rgba(0,0,0,0.3)">
                <Text as="span" bgGradient={gradientOrange} bgClip="text">
                  {t("heading1")} {/* ✅ */}
                </Text>{" "}
                <Text as="span" bgGradient={gradientCyan} bgClip="text">
                  {t("heading2")} {/* ✅ */}
                </Text>
              </Heading>

              <Text fontSize="md" color="whiteAlpha.800" lineHeight="1.8"
                maxW="520px" mb={10} fontWeight="400">
                {t("hero_desc")} {/* ✅ */}
              </Text>

              <HStack spacing={4} flexWrap="wrap">
                {stats.map((s) => (
                  <Box key={s.label} role="group"
                    bg="rgba(255,255,255,0.04)"
                    border="0.5px solid rgba(255,255,255,0.1)"
                    backdropFilter="blur(12px)" borderRadius="xl"
                    px={6} py={4} transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    _hover={{ bg: "rgba(69,196,238,0.12)", borderColor: brandCyan,
                      transform: "translateY(-4px)", boxShadow: "0 8px 25px rgba(0,0,0,0.4)" }}
                    cursor="default" minW="150px">
                    <HStack spacing={3} mb={1}>
                      <Icon as={s.icon} boxSize={5} color={brandCyan}
                        transition="transform 0.3s"
                        _groupHover={{ transform: "rotate(5deg) scale(1.15)" }} />
                      <Text fontSize="2xl" fontWeight="700"
                        bgGradient={gradientCyan} bgClip="text"
                        lineHeight={1} letterSpacing="-0.03em">{s.num}</Text>
                    </HStack>
                    <Text fontSize="xs" color="whiteAlpha.700"
                      textTransform="uppercase" letterSpacing="0.08em"
                      fontWeight="500" pl={8}>{s.label}</Text>
                  </Box>
                ))}
              </HStack>
            </Box>

            {/* CTA card */}
            <Box bg="rgba(255,255,255,0.04)"
              border="0.5px solid rgba(255,255,255,0.15)"
              backdropFilter="blur(20px)" borderRadius="2xl" p={6}
              boxShadow="0 20px 40px rgba(0,0,0,0.3)"
              transition="all 0.3s"
              _hover={{ bg: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.25)" }}>
              <Text fontSize="sm" fontWeight="600" color="white" mb={1}>
                {t("cta_title")} {/* ✅ */}
              </Text>
              <Text fontSize="xs" color="whiteAlpha.700" lineHeight="1.6" mb={6}>
                {t("cta_desc")} {/* ✅ */}
              </Text>
              <VStack spacing={3} align="stretch">
                <Button size="sm" bg={brandCyan} color="white" borderRadius="xl"
                  _hover={{ bg: "#2A9FD8", transform: "translateY(-1px)", boxShadow: "lg" }}
                  leftIcon={<Icon as={TbMail} boxSize={4} />}
                  fontWeight="600" transition="all 0.3s">
                  {t("cta_write")} {/* ✅ */}
                </Button>
              </VStack>
              <Box h="0.5px" bg="whiteAlpha.200" my={5} />
              <HStack spacing={2}>
                <Box w="8px" h="8px" borderRadius="full" bg="green.400"
                  boxShadow="0 0 8px rgba(72,187,120,0.6)" />
                <Text fontSize="xs" color="whiteAlpha.700">{t("available")}</Text> {/* ✅ */}
              </HStack>
            </Box>
          </Grid>
        </Container>

        {/* SERVICES LIST */}
        <Container maxW="container.xl" px={{ base: 6, md: 8, lg: 12 }} py={{ base: 12, md: 20 }}>
          <VStack spacing={6} align="stretch">
            {services.map((service, index) => {
              const style = iconStyles[service.color];
              const isOrange = service.color === "orange";
              return (
                <Box key={index} border="0.5px solid" borderColor="gray.100"
                  borderRadius="2xl" overflow="hidden" bg="white"
                  boxShadow="0 2px 10px rgba(0,0,0,0.02)"
                  transition="all 0.35s cubic-bezier(0.4, 0, 0.2, 1)"
                  _hover={{
                    borderColor: isOrange ? "orange.300" : "cyan.300",
                    boxShadow: isOrange ? "0 15px 35px rgba(247,135,25,0.08)" : "0 15px 35px rgba(69,196,238,0.08)",
                    transform: "translateY(-3px)",
                  }}
                  sx={{ animation: `${fadeInUp} 0.6s ease-out both`, animationDelay: `${index * 0.1}s` }}>

                  <Grid templateColumns={{ base: "1fr", lg: "320px 1fr" }} minH="280px">
                    {/* Left panel */}
                    <Box bg="gray.50" p={{ base: 6, md: 8 }}
                      borderRight={{ base: "none", lg: "0.5px solid" }}
                      borderBottom={{ base: "0.5px solid", lg: "none" }}
                      borderColor="gray.100" position="relative"
                      _before={{
                        content: '""', position: "absolute",
                        top: 0, left: 0, bottom: 0, width: "3px",
                        bg: isOrange ? brandOrange : brandCyan, opacity: 0.7,
                      }}>
                      <Flex justify="space-between" align="flex-start" mb={6}>
                        <Flex w="56px" h="56px" borderRadius="16px"
                          bg={style.bg} border={style.border} color={style.color}
                          align="center" justify="center" transition="all 0.3s">
                          <Icon as={service.icon} boxSize={6} />
                        </Flex>
                        <Text fontSize="xs" fontWeight="700"
                          bgGradient={isOrange ? gradientOrange : gradientCyan}
                          bgClip="text" opacity={0.5} letterSpacing="0.05em">
                          {service.num}
                        </Text>
                      </Flex>
                      <Text fontSize="xs" fontWeight="600"
                        color={isOrange ? brandOrange : brandCyan}
                        bg={style.bg} borderRadius="full" px={3} py="3px"
                        display="inline-block" mb={3} letterSpacing="0.02em">
                        {service.tag}
                      </Text>
                      <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="600"
                        color="gray.800" lineHeight="1.3" mb={4}>{service.titre}</Text>
                      <Text fontSize="sm" color="gray.500" lineHeight="1.7">
                        {service.description}
                      </Text>
                    </Box>

                    {/* Right panel */}
                    <Box p={{ base: 6, md: 8 }}>
                      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8} h="100%">
                        <Box>
                          <Text fontSize="11px" fontWeight="700" color="gray.400"
                            textTransform="uppercase" letterSpacing="0.12em" mb={4}>
                            {t("prestations")} {/* ✅ */}
                          </Text>
                          <VStack align="stretch" spacing={2}>
                            {service.details.map((d, i) => (
                              <HStack key={i} align="flex-start" spacing={3}>
                                <Box w="5px" h="5px" borderRadius="full"
                                  bg={isOrange ? brandOrange : brandCyan}
                                  mt="7px" flexShrink={0} opacity={0.8}
                                  boxShadow={`0 0 4px ${isOrange ? brandOrange : brandCyan}`} />
                                <Text fontSize="sm" color="gray.600" lineHeight="1.6">{d}</Text>
                              </HStack>
                            ))}
                          </VStack>
                        </Box>

                        <Flex direction="column" justify="space-between">
                          <Box>
                            <Text fontSize="11px" fontWeight="700" color="gray.400"
                              textTransform="uppercase" letterSpacing="0.12em" mb={4}>
                              {t("livrables")} {/* ✅ */}
                            </Text>
                            <VStack align="stretch" spacing={2}>
                              {service.livrables.map((l, i) => (
                                <HStack key={i} spacing={3} bg="gray.50"
                                  borderRadius="lg" px={3} py={2}
                                  transition="all 0.2s" _hover={{ bg: "gray.100" }}>
                                  <Box w="6px" h="6px" borderRadius="sm"
                                    bg={isOrange ? brandOrange : brandCyan}
                                    flexShrink={0} opacity={0.8}
                                    boxShadow={`0 0 4px ${isOrange ? brandOrange : brandCyan}`} />
                                  <Text fontSize="sm" color="gray.700" fontWeight="500">{l}</Text>
                                </HStack>
                              ))}
                            </VStack>
                          </Box>
                          <HStack mt={6} spacing={1} cursor="pointer"
                            display="inline-flex" w="fit-content" role="button"
                            transition="all 0.2s" _hover={{ transform: "translateX(3px)" }}>
                            <Text fontSize="sm" fontWeight="700"
                              color={isOrange ? brandOrange : brandCyan}>
                              {t("contact_us")} {/* ✅ */}
                            </Text>
                            <Icon as={TbArrowUpRight} boxSize="14px"
                              color={isOrange ? brandOrange : brandCyan} />
                          </HStack>
                        </Flex>
                      </Grid>
                    </Box>
                  </Grid>
                </Box>
              );
            })}
          </VStack>
        </Container>
      </Box>
    </Layout>
  );
};

export default ServicesView;