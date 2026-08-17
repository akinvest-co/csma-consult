"use client"; 

import { useTranslations } from "next-intl"; 
import {
  Box, Container, Flex, Grid, Heading, HStack,
  Icon, Image, Text, Wrap, WrapItem,
} from "@chakra-ui/react";
import { TbShieldCheck, TbBolt, TbChartLine, TbLeaf } from "react-icons/tb";

const brandCyan = "#0047CC";
const brandOrange = "#FF6A00";
const gradientCyan = "linear-gradient(135deg, #0047CC 0%, #2A9FD8 100%)";
const gradientOrange = "linear-gradient(135deg, #FF6A00 0%, #E06D0A 100%)";

type ColorKey = "cyan" | "orange";

const iconStyles: Record<ColorKey, { bg: string; color: string }> = {
  cyan: { bg: "rgba(69,196,238,0.12)", color: brandCyan },
  orange: { bg: "rgba(247,135,25,0.12)", color: brandOrange },
};

const PresentationView = () => {
  const t = useTranslations("presentation"); 

 
  const stats = [
    { num: "5+",     label: t("years_experience"),   color: gradientCyan },
    { num: "10000+", label: t("projects_delivered"),  color: gradientOrange },
    { num: "2",      label: t("countries"),           color: gradientCyan },
    { num: "360°",   label: t("coverage"),            color: gradientOrange },
  ];

  const secteurs = [
    t("sector_networks"),
    t("sector_telecom"),
    t("sector_energy"),
    t("sector_project"),
    t("sector_resources"),
    t("sector_outsourcing"),
  ];

  const engagements = [
    { icon: TbShieldCheck, color: "cyan" as ColorKey,   titre: t("reliability"),  desc: t("reliability_desc") },
    { icon: TbBolt,        color: "orange" as ColorKey, titre: t("reactivity"),   desc: t("reactivity_desc") },
    { icon: TbChartLine,   color: "cyan" as ColorKey,   titre: t("performance"),  desc: t("performance_desc") },
    //{ icon: TbLeaf,        color: "orange" as ColorKey, titre: t("sustainability"),desc: t("sustainability_desc") },
  ];

  return (
    <Box py={{ base: 8, md: 10 }} bg="white">
      <Container maxW="container.xl" px={{ base: 6, md: 8, lg: 12 }}>

        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={{ base: 10, md: 16 }}
          alignItems="center"
          mb={{ base: 12, md: 16 }}
        >
          <Box>
            <HStack spacing={3} mb={6}>
              <Box w="32px" h="2px" bg={gradientCyan} borderRadius="full" />
              <Text
                fontSize="xs" fontWeight="700"
                bgGradient={gradientCyan} bgClip="text"
                letterSpacing="0.18em" textTransform="uppercase"
              >
                {t("about")} 
              </Text>
            </HStack>

            <Heading fontSize={{ base: "3xl", md: "4xl" }} fontWeight="600" lineHeight="1.2" mb={5}>
              
              
                              {t("hero_heading1")}{" "}
                              <Text as="span" color={brandCyan}>{t("hero_heading2")}</Text>{" "}
                              {t("hero_heading3")}{" "}
                              <Text as="span" color={brandOrange}>{t("hero_heading4")}</Text>
                           
            </Heading>

            <Text fontSize="md" color="gray.500" lineHeight="1.75" maxW="420px">
              {t("description")} 
            </Text>
          </Box>

          <Box borderRadius="2xl" overflow="hidden" position="relative" h={{ base: "290px", md: "390px" }}>
            <Image src="/images/csma18.jpeg" alt="CSMA Consult" objectFit="cover" w="100%" h="100%" />
            <Box
              position="absolute" bottom={4} left={4}
              bg="whiteAlpha.900" backdropFilter="blur(8px)"
              borderRadius="xl" px={4} py={3} boxShadow="sm"
            >
              <Text fontSize="xs" color="gray.500" mb="1px">
                {t("present_since")} 
              </Text>
              <Text fontSize="lg" fontWeight="600" bgGradient={gradientOrange} bgClip="text">
                {t("more_than_5_years")} 
              </Text>
            </Box>
          </Box>
        </Grid>

        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={10} alignItems="start">
          <Box>
            <Grid templateColumns="1fr 1fr" gap={3} mb={8}>
              {stats.map((s) => (
                <Box key={s.label} bg="gray.50" borderRadius="xl" px={5} py={4}>
                  <Text fontSize="2xl" fontWeight="500" bgGradient={s.color} bgClip="text" lineHeight={1} mb={1}>
                    {s.num}
                  </Text>
                  <Text fontSize="11px" color="gray.400" textTransform="uppercase" letterSpacing="0.06em">
                    {s.label}
                  </Text>
                </Box>
              ))}
            </Grid>

            <Box h="0.5px" bg="gray.100" mb={6} />

            <Text fontSize="11px" color="gray.400" textTransform="uppercase" letterSpacing="0.08em" mb={3}>
              {t("sectors")} {/*  */}
            </Text>
            <Wrap spacing={2}>
              {secteurs.map((s) => (
                <WrapItem key={s}>
                  <Text fontSize="sm" color="gray.600" border="0.5px solid" borderColor="gray.300"
                    borderRadius="full" px={4} py="5px" bg="white">
                    {s}
                  </Text>
                </WrapItem>
              ))}
            </Wrap>
          </Box>

          <Box>
            <Text fontSize="11px" color="gray.400" textTransform="uppercase" letterSpacing="0.08em" mb={4}>
              {t("commitments")} {/* */}
            </Text>
            <Flex direction="column" gap={4}>
              {engagements.map((e) => {
                const style = iconStyles[e.color];
                return (
                  <HStack key={e.titre} align="flex-start" spacing={3}>
                    <Flex w="36px" h="36px" borderRadius="10px" bg={style.bg} color={style.color}
                      align="center" justify="center" flexShrink={0}>
                      <Icon as={e.icon} boxSize={5} />
                    </Flex>
                    <Box>
                      <Text fontSize="sm" fontWeight="500" color="gray.800" mb="2px">{e.titre}</Text>
                      <Text fontSize="sm" color="gray.500" lineHeight="1.55">{e.desc}</Text>
                    </Box>
                  </HStack>
                );
              })}
            </Flex>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default PresentationView;