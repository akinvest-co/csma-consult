"use client";

import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  Button,
  Image,
  Tag,
  SimpleGrid,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const MotionBox = motion(Box);

export default function FttxPage() {
  // Compteurs animés
  const counters = [
    { value: 200, label: "projets FTTx réalisés" },
    { value: 8, label: "écart budget prévisionnel / réalisé", suffix: "%" },
    { value: 65, label: "réutilisation GC (moyenne)", suffix: "%" },
  ];

  return (
    <Box bg="gray.50">
      {/* HEADER */}
      <Box as="header" position="sticky" top="0" bg="white" zIndex={10} borderBottom="1px solid" borderColor="gray.200">
        <Container maxW="6xl" py={3}>
          <Flex justify="space-between" align="center">
            <HStack spacing={3}>
              <Image src="/assets/LOGO_csma_-removebg-preview.png" alt="CSMA CONSULT" h="36px" />
              <Heading size="md">CSMA CONSULT</Heading>
            </HStack>
            <HStack spacing={3} display={{ base: "none", md: "flex" }}>
              <Button variant="outline">Nos services</Button>
              <Button colorScheme="orange">Demander un devis</Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* HERO */}
      <Box bg="gray.900" color="white" py={16}>
        <Container maxW="6xl">
          <Grid
            templateColumns={{ base: "1fr", md: "1.1fr 1fr" }}
            gap={10}
            alignItems="center"
          >
            <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Text fontWeight="bold" color="blue.300" textTransform="uppercase" letterSpacing="wide">
                Études techniques FTTx
              </Text>
              <Heading as="h1" size="2xl" my={3}>
                Du dimensionnement au plan d’exécution
              </Heading>
              <Text fontSize="lg" color="gray.300" mb={6}>
                Concevez des réseaux fibre robustes, optimisés et prêts à déployer.
                APS/APD, plans techniques détaillés, quantitatifs et conformité ARCEP.
              </Text>
              <HStack spacing={3} mb={4}>
                <Button colorScheme="orange">Demander un devis</Button>
                <Button variant="outline">Voir nos livrables</Button>
              </HStack>
              <HStack spacing={2} wrap="wrap">
                {["APS/APD", "DOE", "ARCEP", "PostGIS"].map((tag) => (
                  <Tag key={tag} size="md" variant="subtle" colorScheme="whiteAlpha">
                    {tag}
                  </Tag>
                ))}
              </HStack>
            </MotionBox>

            <MotionBox
              borderRadius="lg"
              overflow="hidden"
              boxShadow="2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Image
                src="/Images/FTTx/pose-fibre-chambre.jpg"
                alt="Pose de fibre optique en chambre"
              />
            </MotionBox>
          </Grid>
        </Container>
      </Box>

      {/* KPI */}
      <Container maxW="6xl" py={12}>
        <Heading size="lg" mb={6}>
          Chiffres clés
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {counters.map((kpi, i) => (
            <MotionBox
              key={i}
              bg="white"
              p={6}
              rounded="xl"
              shadow="md"
              textAlign="center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <Text fontSize="3xl" fontWeight="bold" color="gray.800">
                {kpi.value}
                {kpi.suffix || ""}
              </Text>
              <Text color="gray.500">{kpi.label}</Text>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>

      {/* CONTACT */}
      <Container maxW="6xl" py={12}>
        <Heading size="lg" mb={4}>
          Parlons de votre projet
        </Heading>
        <Text color="gray.600" mb={4}>
          Expliquez-nous brièvement votre besoin (zone, volumétrie, délais). Nous revenons vers vous sous 24–48h.
        </Text>
        <HStack spacing={3}>
          <Button as="a" href="mailto:contact@csma-consult.fr" colorScheme="orange">
            Demander un devis
          </Button>
          <Button variant="outline">Télécharger notre méthodologie</Button>
        </HStack>
      </Container>

      {/* FOOTER */}
      
    </Box>
  );
}
