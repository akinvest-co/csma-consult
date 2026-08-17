"use client";

import { useTranslations } from "next-intl"; // ✅
import {
  Box, Container, Flex, Heading, Text,
  VStack, HStack, Icon, Badge,
  
} from "@chakra-ui/react";
import {
  FiFolder, FiTrendingUp, FiDollarSign, FiShield,
  FiArrowRight, FiCheckCircle,
} from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link"; 
const MotionBox = motion(Box);
const brandCyan = "#0047CC";
const brandOrange = "#FF6A00";

const EspaceClientView = () => {
  const t = useTranslations("espace"); // ✅

  const features = [
    { icon: FiFolder,      title: t("feature1_title"), description: t("feature1_desc") },
    { icon: FiTrendingUp,  title: t("feature2_title"), description: t("feature2_desc") },
    { icon: FiDollarSign,  title: t("feature3_title"), description: t("feature3_desc") },
    { icon: FiShield,      title: t("feature4_title"), description: t("feature4_desc") },
  ];

  const phases = [
    { label: t("phase1"), done: true },
    { label: t("phase2"), done: true },
    { label: t("phase3"), done: false, active: true },
    { label: t("phase4"), done: false },
  ];

  return (
    <Box py={{ base: 6, md: 8, lg: 10 }} position="relative"
      overflow="hidden" bg="#0E2939">

      <Box position="absolute" top="-80px" right="-80px" w="300px" h="300px"
        borderRadius="full"
        bg={`radial-gradient(circle, ${brandCyan} 0%, ${brandCyan}00 70%)`}
        opacity={0.12} pointerEvents="none" />
      <Box position="absolute" bottom="-60px" left="-60px" w="250px" h="250px"
        borderRadius="full"
        bg={`radial-gradient(circle, ${brandOrange} 0%, ${brandOrange}00 70%)`}
        opacity={0.1} pointerEvents="none" />

      <Container maxW="container.xl" px={{ base: 4, md: 6, lg: 8 }}
        position="relative" zIndex={1}>
        <Flex direction={{ base: "column", lg: "row" }}
          gap={{ base: 6, lg: 10 }}
          align={{ base: "flex-start", lg: "center" }}>

          {/* Colonne gauche */}
          <MotionBox initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }} flex="1" minW={0}>

            <Text fontSize="xs" fontWeight="700" color={brandCyan}
              letterSpacing="widest" textTransform="uppercase" mb={2}>
              {t("eyebrow")} {/* ✅ */}
            </Text>

            <Heading fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
              fontWeight="700"
              bgGradient={`linear(to-r, ${brandCyan}, ${brandOrange})`}
              bgClip="text" lineHeight="1.2"
              letterSpacing="-0.01em" mb={3}>
              {t("heading")} {/* ✅ */}
            </Heading>

            <Box w="40px" h="2px"
              bgGradient={`linear(to-r, ${brandCyan}, ${brandOrange})`}
              borderRadius="full" mb={4} />

            <Text fontSize="sm" color="gray.300" lineHeight="1.6" mb={4} maxW="480px">
              {t("description")} {/* ✅ */}
            </Text>

            <VStack spacing={3} align="flex-start" mb={5}>
              {features.map((f, i) => (
                <MotionBox key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  viewport={{ once: true }} width="100%">
                  <HStack spacing={3} align="flex-start">
                    <Box w="32px" h="32px" borderRadius="lg"
                      bg={`${brandCyan}10`} border={`1px solid ${brandCyan}40`}
                      display="flex" alignItems="center"
                      justifyContent="center" flexShrink={0}>
                      <Icon as={f.icon} boxSize={3.5} color="#ffff" />
                    </Box>
                    <Box>
                      <Text fontSize="xs" fontWeight="600" color="white" mb={0.5}>
                        {f.title}
                      </Text>
                      <Text fontSize="xs" color="gray.400" lineHeight="1.4">
                        {f.description}
                      </Text>
                    </Box>
                  </HStack>
                </MotionBox>
              ))}
            </VStack>
           <Box
  as={Link}
  href={t("cta_link")}
  display="inline-flex"
  alignItems="center"
  gap={2}
  bg={brandCyan}
  color="#ffff"
  px={4}
  py={2}
  borderRadius="full"
  fontSize="xs"
  fontWeight="700"
  transition="all 0.2s"
  _hover={{
    bgGradient: `linear(to-r, ${brandCyan}, ${brandOrange})`,
    gap: 2.5,
    color: "white",
  }}
>
  {t("cta")}
  <Icon as={FiArrowRight} boxSize={3} />
</Box>
          </MotionBox>

          {/* Colonne droite : carte projet */}
          <MotionBox initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            flex="0 0 auto" w={{ base: "100%", lg: "320px" }}>

            <Box bg="#1A3A4A" border="1px solid"
              borderColor={`${brandCyan}40`} borderRadius="xl"
              p={4} width="100%" boxShadow="lg"
              transition="transform 0.2s, box-shadow 0.2s"
              _hover={{ boxShadow: "xl", transform: "translateY(-2px)" }}>

              <HStack justify="space-between" mb={2}>
                <Text fontSize="2xs" fontWeight="700" color="gray.300"
                  textTransform="uppercase" letterSpacing="wider">
                  {t("active_project")} {/* ✅ */}
                </Text>
                <Badge bg={`${brandCyan}20`} color={brandCyan}
                  borderRadius="full" px={2} py={0.5}
                  fontSize="2xs" fontWeight="600">
                  {t("in_progress")} {/* ✅ */}
                </Badge>
              </HStack>

              <Text fontSize="xs" fontWeight="600" color="white" mb={0.5}>
                {t("project_name")} {/* ✅ */}
              </Text>
              <Text fontSize="2xs" color="gray.400" mb={3}>
                {t("updated")} {/* ✅ */}
              </Text>

              <Box mb={2}>
                <Flex justify="space-between" mb={1}>
                  <Text fontSize="2xs" color="gray.400">
                    {t("global_progress")} {/* ✅ */}
                  </Text>
                  <Text fontSize="2xs" fontWeight="700" color={brandCyan}>68%</Text>
                </Flex>
                <Box bg="#2D4A5A" borderRadius="full" h="3px" overflow="hidden">
                  <Box w="68%" h="100%"
                    bgGradient={`linear(to-r, ${brandCyan}, ${brandOrange})`}
                    borderRadius="full" />
                </Box>
              </Box>

              <VStack spacing={1} mt={3} align="stretch">
                {phases.map((phase, i) => (
                  <HStack key={i} spacing={2}>
                    <Icon as={FiCheckCircle} boxSize={3}
                      color={phase.done ? brandCyan : phase.active ? brandOrange : "#4A6A7A"} />
                    <Text fontSize="2xs"
                      color={phase.done ? "gray.200" : phase.active ? "white" : "gray.500"}
                      fontWeight={phase.active ? "600" : "400"}>
                      {phase.label}
                    </Text>
                    {phase.active && (
                      <Badge bg={`${brandOrange}20`} color={brandOrange}
                        borderRadius="full" px={1.5} fontSize="2xs" ml="auto">
                        {t("active")} {/* ✅ */}
                      </Badge>
                    )}
                  </HStack>
                ))}
              </VStack>
            </Box>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
};

export default EspaceClientView;