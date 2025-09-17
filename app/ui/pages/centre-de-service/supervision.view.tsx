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
  Flex,
  Icon,List, ListItem, ListIcon 
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight, FaEye, FaBolt, FaCogs, FaHeadset } from "react-icons/fa";
const MotionBox = motion(Box);
import { CheckCircleIcon } from "@chakra-ui/icons";
export default function SupervisionVIew() {
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
            backgroundImage="url('/images/CENTREE.png')"
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
            Centre de Services & Supervision
            </Heading>
            <Text fontSize="lg" color="gray.50">
             Nos équipes font preuves d'une forte capacité d'adaptation et prise en main des process client, <br />
              nous accompagnons nos clients dans tout type d'opérations d'activations, de supervision et diagnostic réseaux.
            </Text>
            
          </Box>
        </Flex>
      </Container>

      <Container maxW="6xl" my="20">

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="16" alignItems="center">
          <VStack spacing="6" align="start" as={motion.div} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <Heading size="xl" >
            Supervision
            de trafic
            </Heading>
            <Text fontSize="lg" color="gray.700" lineHeight="1.8" textAlign="justify">
           <List spacing={3} ml={4}>
               <ListItem>
                   <ListIcon as={CheckCircleIcon } color="#45C4EB" />
                   Monitoring des services actifs et passifs
               </ListItem>
               <ListItem>
                   <ListIcon as={CheckCircleIcon} color="#45C4EB" />
                   Traitement des tickets d’interventions et d’incidents
               </ListItem>
               <ListItem>
                   <ListIcon as={CheckCircleIcon} color="#45C4EB" />
                   Prise en Main des CPE / PE
               </ListItem>


               <ListItem>
                   <ListIcon as={CheckCircleIcon} color="#45C4EB" />
                   Remote Troubleshooting et/ou Déclenchement d’équipe intervention
               </ListItem>
               
           </List>
            </Text>
            
          </VStack>
          <MotionBox whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Image src="/images/miseenservice.png" w="100%" h="350px" alt="Audit Infrastructures" borderRadius="xl" boxShadow="lg" height="400px" width="100%" objectFit="cover"/>
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
      src="/images/centre.png" 
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
    <Heading size="xl">
      Notre Centre de Service
    </Heading>
    <Text fontSize="lg" color="gray.700" lineHeight="1.8" textAlign="justify">
      <List spacing={3} ml={4}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="#45C4EB" />
          Flexibilité clientèle : Mise en place Process de traitement et Formation des équipes
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="#45C4EB" />
          Migration, Gestion du récurrent, Absorption des pics de charge
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="#45C4EB" />
          Mise en place d’actions d’amélioration continues
        </ListItem>
      </List>
    </Text>
  </VStack>
</SimpleGrid>

        <Divider my="12" borderColor="gray.300" />
        <VStack spacing={8} textAlign="center" mb={12}>
    <Heading size="xl" >
      Notre engagement opérationnel
    </Heading>
    <Text fontSize="xl" color="gray.600" maxW="3xl">
      Des principes directeurs qui assurent excellence et réactivité dans chaque intervention
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
          <Icon as={FaEye} color="orange.400" boxSize={6} />
        </Box>
        <Heading size="md" color="blue.800">
          Vigilance Continue
        </Heading>
        <Text textAlign="center" color="gray.600">
          Surveillance proactive 24/7 pour anticiper les incidents 
          avant qu'ils n'affectent vos services
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
          <Icon as={FaBolt} color="blue.400" boxSize={6} />
        </Box>
        <Heading size="md" color="blue.800">
          Réactivité Immédiate
        </Heading>
        <Text textAlign="center" color="gray.600">
          Intervention rapide et résolution efficace des incidents 
          pour minimiser tout impact sur vos opérations
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
          <Icon as={FaCogs} color="orange.400" boxSize={6} />
        </Box>
        <Heading size="md" color="blue.800">
          Adaptation Sur Mesure
        </Heading>
        <Text textAlign="center" color="gray.600">
          Processus flexibles adaptés spécifiquement à vos besoins 
          et évoluant avec votre environnement
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
      <Icon as={FaHeadset} color="orange.400" boxSize={8} mb={4} />
      <Heading size="lg" mb={4} color="blue.800">
        Notre promesse de service
      </Heading>
      <Text fontSize="lg" fontStyle="italic" color="gray.700">
        Des solutions  fiables et performantes, livrées avec innovation, collaboration et excellence
      </Text>
    </Box>
  </Flex>
        
      </Container>
    </Layout>
  );
}