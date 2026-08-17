"use client";

import {
  Box, Container, Flex, Grid, Heading,
  Text, HStack, VStack, Icon, Image,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FiDollarSign, FiTrendingUp, FiUsers, FiBriefcase, FiCheckCircle
} from "react-icons/fi";

const MotionBox = motion(Box);
const brandCyan = "#0047CC";
const brandOrange = "#FF6A00";
const gradientCyan = "linear-gradient(135deg, #0047CC 0%, #2A9FD8 100%)";
const gradientOrange = "linear-gradient(135deg, #FF6A00 0%, #E06D0A 100%)";

type ColorKey = "cyan" | "orange";

const dotStyles: Record<ColorKey, { border: string; icon: string; bg: string }> = {
  cyan:   { border: brandCyan,   icon: brandCyan,   bg: `rgba(69,196,238,0.08)` },
  orange: { border: brandOrange, icon: brandOrange, bg: `rgba(247,135,25,0.08)` },
};

const MethodeView = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const services = [
    {
      id: 1,
      title: "Financement de projets d'infrastructures",
      description: "Accompagnement financier de projets dédiés au développement et à la modernisation des infrastructures numériques et télécoms. ",
      icon: FiDollarSign,
      color: "cyan" as ColorKey,
    },
    {
      id: 2,
      title: "Délégation de service public (DSP)",
      description: "Gestion et exploitation d’infrastructures télécoms dans le cadre de partenariats avec les acteurs publics, pour garantir un service performant et durable.",
      icon: FiUsers,
      color: "cyan" as ColorKey,
    },
    {
      id: 3,
      title: "Partenariats public-privé (PPP)",
      description: "Mise en place de partenariats entre acteurs publics et privés pour financer, développer et exploiter des infrastructures télécoms performantes et durables.",
      icon: FiTrendingUp,
      color: "orange" as ColorKey,
    }, 
    {
      id: 6,
      title: "Études de faisabilité",
      description: "Analyse technique et économique des projets d’infrastructures fibre optique afin d’évaluer leur faisabilité, leur viabilité et les conditions de leur mise en œuvre. ",
      icon: FiCheckCircle,
      color: "orange" as ColorKey,
    },
  ];

  return (
    <Box py={{ base: 16, md: 24 }} bg="white" overflow="hidden">
      <Container maxW="container.xl" px={{ base: 6, md: 8, lg: 12 }}>

        {/* En-tête */}
        <Box textAlign="center" mb={{ base: 12, md: 16 }}>
          <HStack justify="center" spacing={3} mb={4}>
            <Box w="30px" h="1px" bg={brandCyan} />
            <Text fontSize="xs" fontWeight="700" color={brandCyan}
              letterSpacing="0.2em" textTransform="uppercase">
              Notre expertise
            </Text>
            <Box w="30px" h="1px" bg={brandCyan} />
          </HStack>
          <Heading
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="600"
            letterSpacing="-0.01em"
          >
            Conseil{" "}
            <Text as="span" bgGradient={gradientCyan} bgClip="text">
              technique et financiers
            </Text>{" "}
            d'infrastructures
          </Heading>
          <Text fontSize="sm" color="gray.500" mt={2}>
            Accompagnement sur mesure pour vos projets d’infrastructure, DSP et PPP
          </Text>
        </Box>

        <Grid templateColumns={{ base: "1fr", lg: "1fr 1.4fr" }}
          gap={{ base: 12, lg: 16 }} alignItems="start">

          {/* Colonne gauche : image et indicateurs (sans le bloc "Notre approche") */}
          <Box position={{ lg: "sticky" }} top={{ lg: "6rem" }}>
            <Box borderRadius="2xl" overflow="hidden" position="relative"
              h={{ base: "260px", md: "380px", lg: "480px" }}>
              <Image src="/images/csma17.jpeg" alt="Conseil technique"
                objectFit="cover" w="100%" h="100%" />
              <Box position="absolute" inset={0}
                bg="linear-gradient(135deg, rgba(69,196,238,0.45) 0%, rgba(10,25,39,0.6) 50%, rgba(247,135,25,0.35) 100%)" />
              <Box position="absolute" bottom={0} left={0} right={0} h="50%"
                bg="linear-gradient(to top, rgba(10,25,39,0.75) 0%, transparent 100%)" />
            </Box>
        
          </Box>

          {/* Colonne droite : grille de services */}
          <VStack spacing={0} align="stretch" ref={containerRef} position="relative">
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
              {services.map((service, index) => {
                const delay = index * 0.1;
                const style = dotStyles[service.color];
                const isOrange = service.color === "orange";

                return (
                  <MotionBox
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    bg="white"
                    borderRadius="2xl"
                    border="0.5px solid"
                    borderColor="gray.100"
                    p={5}
                    boxShadow="0 4px 16px rgba(0,0,0,0.04)"
                    _hover={{
                      borderColor: isOrange ? `${brandOrange}50` : `${brandCyan}50`,
                      boxShadow: "0 12px 24px rgba(0,0,0,0.07)",
                    }}
                  >
                    <HStack spacing={3} mb={3}>
                      <Box
                        bg={style.bg}
                        borderRadius="full"
                        p={2}
                        border="2px solid"
                        borderColor={style.border}
                      >
                        <Icon as={service.icon} boxSize={4} color={style.icon} />
                      </Box>
                      <Heading as="h3" fontSize="md" fontWeight="600" color="gray.800">
                        {service.title}
                      </Heading>
                    </HStack>
                    <Text fontSize="sm" color="gray.500" lineHeight="1.65">
                      {service.description}
                    </Text>
                  </MotionBox>
                );
              })}
            </Grid>
          </VStack>
        </Grid>

        {/* ====== Bloc "Notre approche" en pleine largeur ====== */}
        <Box mt={12} w="full">
          <HStack spacing={3} mb={3}>
            <Box w="28px" h="2px" bg={gradientCyan} borderRadius="full" />
            <Text fontSize="xs" fontWeight="700" color={brandCyan}
              letterSpacing="0.15em" textTransform="uppercase">
              Notre approche
            </Text>
          </HStack>
          <Text fontSize="sm" color="gray.500" lineHeight="1.75">
            Nous combinons une expertise technique pointue et une connaissance approfondie des mécanismes de financement pour vous proposer des solutions clés en main, de l’étude de faisabilité à la mise en œuvre opérationnelle.
          </Text>
        </Box>
   

      </Container>
    </Box>
  );
};

export default MethodeView;