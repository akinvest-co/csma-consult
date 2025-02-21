"use client";

import Layout from "@app/app/layout/layout.page";
import {
  Container,
  SimpleGrid,
  VStack,
  Text,
  Image,
  Box,
  Heading,
  Divider,
  Button,
  Flex,Icon,List, ListItem, ListIcon 
 
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const MotionBox = motion(Box);
import { CheckCircleIcon } from "@chakra-ui/icons";
export default function AuditView() {
  return (
    <Layout>
      <Container maxW="container.xl" my="10">
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          p={8}
          borderRadius="lg"
          mb={10}
          position="relative"
          overflow="hidden"
          minHeight="330px"
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="linear-gradient(90deg, rgba(69, 196, 238, 0.8) 0%, rgba(245, 136, 25, 0.8) 100%)"
            zIndex="1"
          />
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            backgroundImage="url('/images/auditBan.png')"
            backgroundSize="cover"
            backgroundPosition="center"
            zIndex="0"
          />
          <Box
            textAlign={{ base: "center", md: "left" }}
            position="relative"
            zIndex="2"
          >
            <Heading as="h1" size="2xl" fontWeight="bold" lineHeight="short" color="white">
              Audit d’infrastructures
            </Heading>
            <Text fontSize="lg" color="gray.50">
              Découvrez une gamme complète de produits pour l'installation, <br />
              la maintenance et l'optimisation des réseaux de fibre optique.
            </Text>
           
          </Box>
        </Flex>
      </Container>

      <Container maxW="6xl" my="20">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="16" alignItems="center">
          <VStack spacing="6" align="start" as={motion.div} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <Heading size="xl" >
            Infrastructures optiques

            </Heading>
            <Text fontSize="lg" color="gray.700" lineHeight="1.8" textAlign="justify">
           <List spacing={3} ml={4}>
               <ListItem>
                   <ListIcon as={CheckCircleIcon } color="#45C4EB" />
                   Audit détaillé des câbles : Analyse approfondie de l’état et de la performance des câbles optiques.
               </ListItem>
               <ListItem>
                   <ListIcon as={CheckCircleIcon} color="#45C4EB" />
                   Examen des boîtes de protection d’épissures : Inspection minutieuse pour garantir leur conformité et leur bon fonctionnement.
               </ListItem>
               <ListItem>
                   <ListIcon as={CheckCircleIcon} color="#45C4EB" />
                   Remontées d’informations précises : Collecte et transmission de données fiables sur l’état des infrastructures.
               </ListItem>


               <ListItem>
                   <ListIcon as={CheckCircleIcon} color="#45C4EB" />
                   Élaboration de plans de boîtes : Conception de plans conformes aux normes en vigueur.
               </ListItem>
               <ListItem>
                   <ListIcon as={CheckCircleIcon} color="#45C4EB" />
                   Mise à jour des SIG : Actualisation régulière des systèmes d’information géographique en fonction des données terrain.
               </ListItem>
              
               
           </List>
            </Text>
          </VStack>
          <MotionBox whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Image src="/images/serv.png" w="100%" h="350px" alt="Audit Infrastructures" borderRadius="xl" boxShadow="lg" height="400px" width="100%" objectFit="cover"/>
          </MotionBox>
        </SimpleGrid>

        <Divider my="12" borderColor="gray.300" />

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="16" alignItems="center">
          <MotionBox whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
            <Image src="/images/ch.jpg" w="100%" h="350px" objectFit="cover" alt="Génie Civil" borderRadius="xl" boxShadow="xl" height="400px" width="100%" />
          </MotionBox>
          <VStack spacing="6" align="start" as={motion.div} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
            <Heading size="lg" >
            Infrastructures Génie Civil
            </Heading>
            <Text fontSize="lg" color="gray.700" lineHeight="1.8" textAlign="justify">
           <List spacing={3} ml={4}>
               <ListItem>
                   <ListIcon as={CheckCircleIcon } color="#45C4EB" />
                   Détection et relevé de fourreaux et chambres : Identification et cartographie précise des infrastructures souterraines.
               </ListItem>
               <ListItem>
                   <ListIcon as={CheckCircleIcon} color="#45C4EB" />
                   Tests de continuité et d'exploitabilité : Vérification approfondie pour assurer la robustesse et la fiabilité des installations.
               </ListItem>
               <ListItem>
                   <ListIcon as={CheckCircleIcon} color="#45C4EB" />
                   Émission et levée de réserves : Gestion efficace des observations et corrections pour optimiser les interventions.
               </ListItem>
               <ListItem>
                   <ListIcon as={CheckCircleIcon} color="#45C4EB" />
                   Interventions sur projets variés : Expertise en construction, rénovation et entretien des infrastructures.
               </ListItem>
              
              
               
           </List>
            </Text>
          </VStack>
        </SimpleGrid>
        <Divider my="12" borderColor="gray.300" />
        <VStack>
          <Heading>
            Paroles inspirantes
          </Heading>
        </VStack>
        <Flex justify="center" align="center" gap={6} flexWrap="wrap" mt={10}>
          <Box
            maxW="600px"
            minH="150px" 
            flex="1"
            p={6}
            borderLeft="4px solid"
            borderColor="orange.400"
            bg="gray.50"
            borderRadius="md"
            boxShadow="md"
            position="relative"
          >
            <Icon as={FaQuoteLeft} color="orange.400" fontSize="2xl" position="absolute" top={4} left={4} />
            <Text fontSize="lg" fontStyle="italic" color="gray.700" pl={10} pr={10}>
            "Implémentez la qualité en englobant vos fournisseurs et vos clients dans le système. "
            </Text>
            <Text mt={4} textAlign="right" fontWeight="bold" color="#2fa3d1" pr={10}>
              – Armand V. Feigenbaum
            </Text>
            <Icon as={FaQuoteRight} color="orange.400" fontSize="2xl" position="absolute" bottom={4} right={4} />
          </Box>

          <Box
             maxW="600px"
             minH="150px" 
            flex="1"
            p={6}
            borderLeft="4px solid"
            borderColor="orange.400"
            bg="gray.50"
            borderRadius="md"
            boxShadow="md"
            position="relative"
          >
            <Icon as={FaQuoteLeft} color="orange.400" fontSize="2xl" position="absolute" top={4} left={4} />
            <Text fontSize="lg" fontStyle="italic" color="gray.700" pl={10} pr={10}>
              "La qualité c’est la perception qu’à le client de ce qu’est la qualité, pas ce que l’entreprise pense."
            </Text>
            <Text mt={4} textAlign="right" fontWeight="bold" color="#2fa3d1" pr={10}>
              – Armand V. Feigenbaumcd
            </Text>
            <Icon as={FaQuoteRight} color="orange.400" fontSize="2xl" position="absolute" bottom={4} right={4} />
          </Box>
          </Flex>
      </Container>
    </Layout>
  );
}