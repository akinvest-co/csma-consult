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
import { FaHandshake, FaLightbulb, FaMedal, FaQuoteLeft, FaQuoteRight, FaRocket } from "react-icons/fa"
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
  <MotionBox 
    whileHover={{ scale: 1.03 }} 
    transition={{ duration: 0.3 }} 
    order={{ base: 2, lg: 1 }} // L'image sera en deuxième position sur les petits écrans
  >
    <Image 
      src="/images/csma1.png" 
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
      Support projet
    </Heading>
    <List spacing={3} ml={4}>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="#45C4EB" />
        Suivi de la mise en production et configuration des composants des réseaux.
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="#45C4EB" />
        Surveillance de l'avancement des travaux, du respect du calendrier et du budget.
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="#45C4EB" />
        Configuration et intégration des systèmes ou composants réseaux.
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="#45C4EB" />
        Traitement les demandes de changement et ajuster le plan de projet si nécessaire.
      </ListItem>
    </List>
  </VStack>
</SimpleGrid>
        <Divider my="12" borderColor="gray.300" />
       <VStack spacing={8} textAlign="center" mb={12}>
    <Heading size="2xl" color="blue.800">
      Notre philosophie d'action
    </Heading>
    <Text fontSize="xl" color="gray.600" maxW="3xl">
      Des principes fondamentaux qui guident chaque projet vers l'excellence
    </Text>
  </VStack>

  <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={8}>
    <MotionBox
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      p={6}
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
      borderTop="4px solid"
      borderColor="orange.400"
    >
      <VStack spacing={4} align="center">
        <Box p={3} bg="blue.50" borderRadius="full">
          <Icon as={FaRocket} color="orange.400" boxSize={6} />
        </Box>
        <Heading size="md" color="blue.800">
          Innovation Continue
        </Heading>
        <Text textAlign="center" color="gray.600">
          Au cœur de notre bureau d’études télécom, l’innovation continue est plus qu’un principe : c’est une culture.
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
      borderTop="4px solid"
      borderColor="blue.400"
    >
      <VStack spacing={4} align="center">
        <Box p={3} bg="orange.50" borderRadius="full">
          <Icon as={FaHandshake} color="blue.400" boxSize={6} />
        </Box>
        <Heading size="md" color="blue.800">
          Collaboration Authentique
        </Heading>
        <Text textAlign="center" color="gray.600">
          Chez nous, la réussite d’un projet ne se mesure pas seulement en livrables techniques, mais aussi dans la qualité des relations que nous construisons.
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
      borderTop="4px solid"
      borderColor="orange.400"
    >
      <VStack spacing={4} align="center">
        <Box p={3} bg="blue.50" borderRadius="full">
          <Icon as={FaMedal} color="orange.400" boxSize={6} />
        </Box>
        <Heading size="md" color="blue.800">
          Excellence Opérationnelle
        </Heading>
        <Text textAlign="center" color="gray.600">
          L’excellence opérationnelle, c’est allier rigueur, efficacité et maîtrise pour garantir qualité, respect des délais et performance durable.
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
      <Icon as={FaLightbulb} color="orange.400" boxSize={8} mb={4} />
      <Heading size="lg" mb={4} color="blue.800">
        Notre vision
      </Heading>
      <Text fontSize="lg" fontStyle="italic" color="gray.700">
        Notre vision : offrir des solutions télécoms durables en alliant innovation, collaboration et excellence, pour être un partenaire de confiance et créateur de valeur
      </Text>
    </Box>
  </Flex>
      </Container>
    </Layout>
  )
}
