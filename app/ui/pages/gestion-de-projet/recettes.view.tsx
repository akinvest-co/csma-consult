"use client"
import Layout from "@app/app/layout/layout.page"
import {
  Container,
  SimpleGrid,
  VStack,
  Text,
  Image,
  Box,
  Heading,Flex,Icon,Divider,List, ListItem, ListIcon
} from "@chakra-ui/react"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@chakra-ui/icons";
const MotionBox = motion(Box);
export default function RecettesView() {
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
            backgroundImage="url('/images/city.jpg')"
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
            Gestion de projet
            </Heading>
            <Text fontSize="lg" color="gray.50">
            De la vision à la réalisation : organiser et piloter des projets avec précision
            </Text>
            
          </Box>
        </Flex>
      </Container>
      <Container maxW="6xl" my="20">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="16" alignItems="center">
          <VStack spacing="6" align="start" as={motion.div} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <Heading size="xl" >
            Clés en main
            </Heading>
            <List spacing={3} ml={4}>
            <ListItem>
                   <ListIcon as={CheckCircleIcon } color="#45C4EB" />
                   Des consultants expérimentés et autonomes en gestion de projets télécoms.
               </ListItem>

               <ListItem>
                   <ListIcon as={CheckCircleIcon } color="#45C4EB" />
                   Définition des livrables et quantification des ressources, délais et coûts.
               </ListItem>
               <ListItem>
                   <ListIcon as={CheckCircleIcon } color="#45C4EB" />
                   Identification des risques potentiels et suivi du planning.
               </ListItem>
               <ListItem>
                   <ListIcon as={CheckCircleIcon } color="#45C4EB" />
                   Réception de travaux et validations selon les règles le cahier des charges.
               </ListItem>
               </List>
          </VStack>
          <MotionBox whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Image src="/images/btn1.png" w="100%" h="350px" alt="Audit Infrastructures" borderRadius="xl" boxShadow="lg" />
          </MotionBox>
        </SimpleGrid>

        <Divider my="12" borderColor="gray.300" />

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="16" alignItems="center">
          <MotionBox whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
            <Image src="/images/csma1.png" w="100%" h="350px" objectFit="cover" alt="Génie Civil" borderRadius="xl" boxShadow="xl" />
          </MotionBox>
          <VStack spacing="6" align="start" as={motion.div} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
            <Heading size="lg" >
            Support projet
            </Heading>
            <List spacing={3} ml={4}>
            <ListItem>
                   <ListIcon as={CheckCircleIcon } color="#45C4EB" />
                   Suivi de la mise en production et configuration des composants des réseaux.
               </ListItem>

               <ListItem>
                   <ListIcon as={CheckCircleIcon } color="#45C4EB" />
                   Surveillance de l'avancement des travaux, du respect du calendrier et du budget.
               </ListItem>
               <ListItem>
                   <ListIcon as={CheckCircleIcon } color="#45C4EB" />
                   Configuration et intégration des systèmes ou composants réseaux.
               </ListItem>
               <ListItem>
                   <ListIcon as={CheckCircleIcon } color="#45C4EB" />
                   Traitement les demandes de changement et ajuster le plan de projet si nécessaire.
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
              "La qualité est obtenue par la prévention, pas par le contrôle. "
            </Text>
            <Text mt={4} textAlign="right" fontWeight="bold" color="#2fa3d1" pr={10}>
              – Philip Crosby
            </Text>
            <Icon as={FaQuoteRight} color="orange.400" fontSize="2xl" position="absolute" bottom={4} right={4} />
          </Box>
          </Flex>
      </Container>
    </Layout>
  )
}
