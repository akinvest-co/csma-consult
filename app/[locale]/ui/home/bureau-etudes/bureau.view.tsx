"use client"; // ✅

import { useTranslations } from "next-intl"; // ✅
import {
  Box, Container, Flex, Grid, Heading,
  HStack, Icon, Text,
} from "@chakra-ui/react";
import {
  FiWifi, FiZap, FiSettings, FiUsers,
  FiPackage, FiArrowUpRight, FiArrowRight,
} from "react-icons/fi";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const brandCyan = "#0047CC";
const brandOrange = "#FF6A00";
const gradientCyan = "linear-gradient(135deg, #0047CC 0%, #2A9FD8 100%)";
const gradientOrange = "linear-gradient(135deg, #FF6A00 0%, #E06D0A 100%)";
const BureauView = () => {
  const t = useTranslations("bureau"); // ✅

  const featured = {
    icon: FiWifi,
    badge: t("featured_badge"),
    title: t("featured_title"),
    description: t("featured_description"),
  };

  const items = [
    {
      icon: FiPackage,
      title: t("outsourcing_title"),
      subtitle: t("outsourcing_subtitle"),
      description: t("outsourcing_desc"),
    },
    
    {
      icon: FiSettings,
      title: t("project_title"),
      subtitle: t("project_subtitle"),
      description: t("project_desc"),
    },
    {
      icon: FiUsers,
      title: t("resources_title"),
      subtitle: t("resources_subtitle"),
      description: t("resources_desc"),
    },
    {
      icon: FiZap,
      title: t("energy_title"),
      subtitle: t("energy_subtitle"),
      description: t("energy_desc"),
    },
  ];

  const tags = [t("tag_telecom"), t("tag_energy"), t("tag_networks")];

  return (
    <Box py={{ base: 8, md: 12, lg: 16 }} bg="white" overflow="hidden">
      <Container maxW="container.xl" px={{ base: 4, md: 6, lg: 8 }}>

        <MotionBox
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <HStack spacing={3} mb={6}>
            <Box w="28px" h="1px" bg={brandCyan} />
            <Text fontSize="11px" fontWeight="700" color={brandCyan}
              letterSpacing="0.18em" textTransform="uppercase">
              {t("eyebrow")} {/* ✅ */}
            </Text>
          </HStack>

          <Flex
            align={{ base: "flex-start", md: "flex-end" }}
            justify="space-between"
            direction={{ base: "column", md: "row" }}
            gap={4} mb={8}
          >
            

            <Heading fontSize={{ base: "3xl", md: "4xl" }} fontWeight="600" lineHeight="1.2" mb={5}>
                          <Text as="span" bgGradient={gradientOrange} bgClip="text">CSMA</Text>{" "}
                          <Text as="span" bgGradient={gradientCyan} bgClip="text">Consult</Text>
                          <br />
                          <Text as="span" fontSize={{ base: "xl", md: "2xl" }} fontWeight="400" color="gray.700">
                             {t("heading_what")} {/* ✅ */}
                          </Text>
                        </Heading>

            <HStack spacing={2} flexWrap="wrap">
              {tags.map((tag) => (
                <Text key={tag} fontSize="11px" px={3} py="3px"
                  border="0.5px solid" borderColor="gray.200"
                  borderRadius="full" color="gray.500" whiteSpace="nowrap">
                  {tag}
                </Text>
              ))}
            </HStack>
          </Flex>
        </MotionBox>

        <Grid templateColumns={{ base: "1fr", lg: "2fr 3fr" }} gap={4}>
          {/* Featured card */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
          >
            <Box
              bg="#0E2939" borderRadius="2xl"
              p={{ base: 7, md: 8 }} height="100%"
              display="flex" flexDirection="column"
              justifyContent="space-between" minH="320px"
              position="relative" overflow="hidden"
              cursor="pointer" role="group"
            >
              <Box position="absolute" inset={0}
                backgroundImage={`radial-gradient(circle, rgba(69,196,238,0.15) 1px, transparent 1px)`}
                backgroundSize="22px 22px" pointerEvents="none" />

              <Box position="relative">
                <Box w="44px" h="44px" borderRadius="10px"
                  bg="rgba(69,196,238,0.15)"
                  border="0.5px solid rgba(69,196,238,0.3)"
                  display="flex" alignItems="center"
                  justifyContent="center" mb={5}>
                  <Icon as={featured.icon} boxSize={5} color={brandCyan} />
                </Box>

                <Text fontSize="10px" fontWeight="500" letterSpacing="0.12em"
                  textTransform="uppercase" color={brandCyan} mb={3}>
                  {featured.badge}
                </Text>

                <Heading fontSize={{ base: "lg", md: "xl" }} fontWeight="500"
                  color="white" lineHeight="1.3" mb={4}>
                  {featured.title}
                </Heading>

                <Text fontSize="sm" color="whiteAlpha.500" lineHeight="1.7">
                  {featured.description}
                </Text>
              </Box>

              <HStack spacing={2} mt={8} position="relative" cursor="pointer"
                _groupHover={{ "& > *": { color: "white" } }}>
                <Text fontSize="12px" fontWeight="500" color={brandCyan} transition="color 0.2s">
                  {t("featured_cta")} {/* ✅ */}
                </Text>
                <Icon as={FiArrowUpRight} boxSize="14px" color={brandCyan} transition="color 0.2s" />
              </HStack>

              <Box position="absolute" bottom={0} left={0} right={0} h="3px"
                bgGradient={`linear(to-r, ${brandCyan}, ${brandOrange})`} />
            </Box>
          </MotionBox>

          {/* Items list */}
          <Flex direction="column" gap={3}>
            {items.map((item, index) => (
              <MotionBox key={index}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                viewport={{ once: true }}
                role="group"
              >
                <Flex align="flex-start" gap={4} bg="white"
                  border="0.5px solid" borderColor="gray.100"
                  borderRadius="2xl" p={{ base: 4, md: 5 }}
                  cursor="pointer" transition="border-color 0.2s"
                  _hover={{ borderColor: brandCyan }}>
                  <Box w="36px" h="36px" flexShrink={0} borderRadius="8px"
                    bg="gray.50" display="flex" alignItems="center"
                    justifyContent="center" transition="color 0.2s"
                    _groupHover={{ bg: `${brandCyan}15` }}>
                    <Icon as={item.icon} boxSize={4} color="gray.400"
                      transition="color 0.2s"
                      _groupHover={{ color: brandCyan }} />
                  </Box>

                  <Box flex={1} minW={0}>
                    <Text fontSize="sm" fontWeight="700" color="gray.800"
                      lineHeight="1.3" mb="2px">{item.title}</Text>
                    <Text fontSize="xs" fontWeight="600" color={brandOrange} mb={1}>
                      {item.subtitle}</Text>
                    <Text fontSize="sm" color="gray.700" lineHeight="1.6">
                      {item.description}</Text>
                  </Box>

                  <Icon as={FiArrowRight} boxSize="14px" color="gray.300"
                    flexShrink={0} mt="2px"
                    transition="color 0.2s, transform 0.2s"
                    _groupHover={{ color: brandCyan, transform: "translateX(2px)" }} />
                </Flex>
              </MotionBox>
            ))}
          </Flex>
        </Grid>
      </Container>
    </Box>
  );
};

export default BureauView;