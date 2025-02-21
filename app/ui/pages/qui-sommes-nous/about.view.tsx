"use client";
import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon, Center, Flex } from '@chakra-ui/react';
import Layout from "@app/app/layout/layout.page";
import { FaNetworkWired, FaHandshake, FaBullseye,FaChartLine,FaCogs } from "react-icons/fa";
import { FaFileAlt, FaSearch, FaProjectDiagram, FaHeadset } from 'react-icons/fa';
export default function AboutView() {
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
            backgroundImage="url('/images/banner.jpeg')"
            backgroundSize="cover"
            backgroundPosition="center"
            zIndex="0"
          />
          <Box textAlign={{ base: "center", md: "left" }} position="relative" zIndex="2">
            <Heading as="h1" size="2xl" fontWeight="bold" lineHeight="short" color="white">
              CSMA CONSULT
            </Heading>
        
          </Box>
        </Flex>
      </Container>
      <Container maxW="container.lg" mb={20}>
  <VStack spacing={8} align="stretch">
    <Heading as="h1" size="2xl" textAlign="center"  mb={6}>
      À propos de notre entreprise
    </Heading>

    <Box bg="white" p={6} borderRadius="lg" boxShadow="lg">
      <Heading as="h2" size="lg" mb={4} >
        Qui sommes-nous ?
      </Heading>
      <Text fontSize="lg" color="gray.700">
      CSMA CONSULT est une entreprise à taille humaine qui a su s’imposer sur le marché des télécommunications grâce à une palette complète de prestations.
      </Text>
    </Box>

<Box mb={10}>
 
  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
    <Box p={6} borderWidth={2} borderRadius="lg" borderColor="orange.400" bg="white" boxShadow="md" transition="transform 0.2s" _hover={{ transform: "scale(1.05)" }}>
      <Icon as={FaFileAlt} boxSize={12} mb={4} color="orange.400" /> 
      <Heading as="h3" size="md" mb={2} >Bureau d'études télécoms</Heading>
      <Text fontSize="md" color="gray.700">
        Conception et planification détaillée des infrastructures télécoms pour répondre à vos besoins techniques et opérationnels.
      </Text>
    </Box>
    <Box p={6} borderWidth={2} borderRadius="lg" borderColor="orange.400" bg="white" boxShadow="md" transition="transform 0.2s" _hover={{ transform: "scale(1.05)" }}>
      <Icon as={FaSearch} boxSize={12} mb={4} color="orange.400" /> 
      <Heading as="h3" size="md" mb={2} >Audit d'infrastructures</Heading>
      <Text fontSize="md" color="gray.700">
        Évaluation complète de vos infrastructures existantes pour identifier les points d'amélioration et garantir leur performance.
      </Text>
    </Box>
   
    <Box p={6} borderWidth={2} borderRadius="lg" borderColor="orange.400" bg="white" boxShadow="md" transition="transform 0.2s" _hover={{ transform: "scale(1.05)" }}>
      <Icon as={FaProjectDiagram} boxSize={12} mb={4} color="orange.400" /> 
      <Heading as="h3" size="md" mb={2} >Gestion de projet télécoms</Heading>
      <Text fontSize="md" color="gray.700">
        Pilotage de projets télécoms de A à Z, de la planification à la mise en œuvre, en respectant les délais et les budgets.
      </Text>
    </Box>
    <Box p={6} borderWidth={2} borderRadius="lg" borderColor="orange.400" bg="white" boxShadow="md" transition="transform 0.2s" _hover={{ transform: "scale(1.05)" }}>
      <Icon as={FaHeadset} boxSize={12} mb={4} color="orange.400" /> 
      <Heading as="h3" size="md" mb={2} >Centre de service opérationnel</Heading>
      <Text fontSize="md" color="gray.700">
        Support technique et opérationnel 24/7 pour assurer la continuité et la performance de vos services télécoms.
      </Text>
    </Box>
  </SimpleGrid>
</Box>
    <Box bg="white" p={6} borderRadius="lg" boxShadow="lg" mb={10}>
      <Heading as="h2" size="lg" mb={4} >
        Notre Mission
      </Heading>
      <Text fontSize="lg" color="gray.700">
      Nous nous démarquons de par notre réactivité, proximité, adaptabilité et surtout par les  expériences et compétences de nos équipes.
      </Text>
    </Box>

    <Box mb={10}>
      <Heading as="h2" size="lg" mb={4} >
        Nos Valeurs
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        <Box p={6} borderWidth={2} borderRadius="lg" borderColor="orange.400" bg="white" boxShadow="md" transition="transform 0.2s" _hover={{ transform: "scale(1.05)" }}>
          <Icon as={FaBullseye} boxSize={12} mb={4} color="orange.400" />
          <Heading as="h3" size="md" mb={2} >Excellence</Heading>
          <Text fontSize="md" color="gray.700">Nous nous engageons à fournir des services de haute qualité.</Text>
        </Box>
        <Box p={6} borderWidth={2} borderRadius="lg" borderColor="orange.400" bg="white" boxShadow="md" transition="transform 0.2s" _hover={{ transform: "scale(1.05)" }}>
          <Icon as={FaHandshake} boxSize={12} mb={4} color="orange.400" />
          <Heading as="h3" size="md" mb={2} >Engagement</Heading>
          <Text fontSize="md" color="gray.700">Nous plaçons nos clients au cœur de notre activité.</Text>
        </Box>
        <Box p={6} borderWidth={2} borderRadius="lg" borderColor="orange.400" bg="white" boxShadow="md" transition="transform 0.2s" _hover={{ transform: "scale(1.05)" }}>
          <Icon as={FaNetworkWired} boxSize={12} mb={4} color="orange.400" />
          <Heading as="h3" size="md" mb={2} >Innovation</Heading>
          <Text fontSize="md" color="gray.700">Nous innovons pour un avenir connecté et durable.</Text>
        </Box>
      </SimpleGrid>
    </Box>
  </VStack>
</Container>
    </Layout>
  );
}
