"use client";
import NextLink from "next/link";
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
       <VStack spacing={8} textAlign="center" mb={12}>
    <Heading size="xl" >
      Notre excellence technique
    </Heading>
    <Text fontSize="xl" color="gray.600" maxW="3xl">
      Une approche méthodique alliant innovation et précision pour des solutions sur mesure
    </Text>
  </VStack>

  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={8}>
    <MotionBox
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      p={6}
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
      borderLeft="4px solid"
      borderColor="orange.400"
    >
      <VStack spacing={4} align="start">
        <Heading size="md" color="blue.800">
          Expertise Technique
        </Heading>
        <Text color="gray.600">
          Maîtrise des technologies fibre optique et des outils SIG pour des 
          conceptions précises et conformes aux standards industriels
        </Text>
      </VStack>
    </MotionBox>

    <MotionBox
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      p={6}
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
      borderLeft="4px solid"
      borderColor="blue.400"
    >
      <VStack spacing={4} align="start">
        <Heading size="md" color="blue.800">
          Innovation Méthodologique
        </Heading>
        <Text color="gray.600">
          Développement de processus optimisés pour la gestion de dossiers 
          d'intervention et l'intégration de données techniques
        </Text>
      </VStack>
    </MotionBox>

    <MotionBox
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      p={6}
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
      borderLeft="4px solid"
      borderColor="orange.400"
    >
      <VStack spacing={4} align="start">
        <Heading size="md" color="blue.800">
          Précision Dimensionnelle
        </Heading>
        <Text color="gray.600">
          Analyses précises et dimensionnements optimaux pour garantir 
          la performance et la pérennité des infrastructures déployées
        </Text>
      </VStack>
    </MotionBox>

    <MotionBox
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      p={6}
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
      borderLeft="4px solid"
      borderColor="blue.400"
    >
      <VStack spacing={4} align="start">
        <Heading size="md" color="blue.800">
          Intégration Système
        </Heading>
        <Text color="gray.600">
          Expertise dans l'interfaçage des différents outils (Qgis, NetGeo, 
          GeoFibre, Networks) pour une gestion unifiée des données
        </Text>
      </VStack>
    </MotionBox>
  </SimpleGrid>

  <Flex justify="center" mt={16}>
    <Box 
      bg="blue.50" 
      p={8} 
      borderRadius="xl" 
      textAlign="center"
      borderLeft="4px solid"
      borderColor="orange.400"
      maxW="2xl"
    >
      <Heading size="lg" mb={4} color="blue.800">
        Notre engagement qualité
      </Heading>
      <Text fontSize="lg" fontStyle="italic" color="gray.700">
        "Chaque étude technique est menée avec rigueur et précision, 
        transformant les défis complexes en solutions opérationnelles efficaces"
      </Text>
      <Button 
        rightIcon={<FaArrowRight />} 
        colorScheme="orange" 
        mt={6}
        as={NextLink}
        href="/contact"
      >
        Discutons de votre projet
      </Button>
    </Box>
  </Flex>
      </Container>
    </Layout>
  );
}