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
import { CheckCircleIcon } from "@chakra-ui/icons";
import { FaArrowRight } from "react-icons/fa";
const MotionBox = motion(Box);

export default function EtudesIngVIew() {
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
            backgroundImage="url('/images/bureaux.png')"
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
              Etude et Ingénierie
            </Heading>
            <Text fontSize="lg" color="gray.50">
            Des solutions d'ingénierie innovantes, <br/> une expertise approfondie, et une
passion pour l'excellence.
            </Text>
            
          </Box>
        </Flex>
      </Container>
      <Container maxW="6xl" my="20">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="16" alignItems="center">
          <VStack spacing="6" align="start" as={motion.div} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <Heading size="xl" >
            Dossiers d’intervention sur infrastructures Orange

            </Heading>
            <Text fontSize="lg" color="gray.700" lineHeight="1.8" textAlign="justify">
           <List spacing={3} ml={4}>
               <ListItem>
                   <ListIcon as={CheckCircleIcon } color="#45C4EB" />
                   Gestion de dossiers d’accès (FCI), Suivi et Clôture
               </ListItem>
               <ListItem>
                   <ListIcon as={CheckCircleIcon} color="#45C4EB" />
                   Relevé d’infrastructures existantes, taux occupation
               </ListItem>
               <ListItem>
                   <ListIcon as={CheckCircleIcon} color="#45C4EB" />
                   MàJ, TFX, Intégration SIG
               </ListItem> 
           </List>
            </Text>
          </VStack>
          <MotionBox whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Image src="/images/person.jpeg" w="100%" h="350px" alt="Audit Infrastructures" borderRadius="xl" boxShadow="lg" />
          </MotionBox>
        </SimpleGrid>

        <Divider my="12" borderColor="gray.300" />

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="16" alignItems="center">
  <MotionBox 
    whileHover={{ scale: 1.03 }} 
    transition={{ duration: 0.3 }} 
    order={{ base: 2, lg: 1 }} // L'image sera en deuxième position sur les petits écrans
  >
    <Image 
      src="/images/soudures.png" 
      w="100%" 
      h="350px" 
      objectFit="cover" 
      alt="Génie Civil" 
      borderRadius="xl" 
      boxShadow="xl" 
    />
  </MotionBox>

  <VStack 
    spacing="6" 
    align="start" 
    as={motion.div} 
    initial={{ opacity: 0, x: 50 }} 
    animate={{ opacity: 1, x: 0 }} 
    order={{ base: 1, lg: 2 }} // Le texte sera en première position sur les petits écrans
  >
    <Heading size="lg">
      Ingénierie d’architecture et de route optique
    </Heading>
    <List spacing={3} ml={4}>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="#45C4EB" />
        Dimensionnement, Étude de potentiel commercial
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="#45C4EB" />
        Création de shapes dans Qgis et Intégration SIG
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="#45C4EB" />
        Création de synoptiques et routes Optiques
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="#45C4EB" />
        Intégration NetGeo, GeoFibre, Networks
      </ListItem>
    </List>
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
              "Implémentez la qualité en englobant vos fournisseurs et vos clients dans le système."
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
              "Un problème sans solution est un problème mal posé"
            </Text>
            <Text mt={4} textAlign="right" fontWeight="bold" color="#2fa3d1" pr={10}>
              – Albert Einstein
            </Text>
            <Icon as={FaQuoteRight} color="orange.400" fontSize="2xl" position="absolute" bottom={4} right={4} />
          </Box>
          </Flex>
      </Container>
    </Layout>
  );
}