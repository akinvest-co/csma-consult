"use client"
import Layout from "@app/app/layout/layout.page"
import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    HStack,
    Icon,
    Button,
    UnorderedList,
    ListItem,
    Image,
    Divider,
    Stack,
    SimpleGrid,
  } from "@chakra-ui/react";
export default function Conseils() {
  return (
    <Layout>
       <Box bg="gray.50" py={10}>
    
      <Container maxW="container.xl" textAlign="center" mb={10}>
        <Heading size="2xl" color="blue.600" mb={4}>
          Conseils pour une installation de fibre optique réussie
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Découvrez nos meilleures pratiques pour garantir une installation optimale de la fibre optique, 
          que ce soit pour votre domicile ou votre entreprise.
        </Text>
        <Divider mt={6} borderColor="blue.400" />
      </Container>

      
      <Container maxW="container.xl">
        <SimpleGrid columns={[1, null, 3]} spacing={8}>
         
          <Box
            bg="white"
            p={6}
            borderRadius="md"
            boxShadow="md"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.05)" }}
            textAlign="center"
          >
            <Icon  boxSize={10} color="orange.400" mb={4} />
            <Heading size="md" color="blue.600" mb={2}>
              Choisissez un équipement de qualité
            </Heading>
            <Text color="gray.600">
              Investissez dans des câbles, connecteurs, et outils de haute qualité pour garantir la durabilité et la fiabilité de votre installation.
            </Text>
          </Box>

         
          <Box
            bg="white"
            p={6}
            borderRadius="md"
            boxShadow="md"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.05)" }}
            textAlign="center"
          >
            <Icon  boxSize={10} color="green.400" mb={4} />
            <Heading size="md" color="blue.600" mb={2}>
              Planifiez votre installation
            </Heading>
            <Text color="gray.600">
              Avant de commencer, identifiez les emplacements des terminaux et des points de raccordement pour éviter les erreurs.
            </Text>
          </Box>

         
          <Box
            bg="white"
            p={6}
            borderRadius="md"
            boxShadow="md"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.05)" }}
            textAlign="center"
          >
            <Icon boxSize={10} color="purple.400" mb={4} />
            <Heading size="md" color="blue.600" mb={2}>
              Vérifiez la performance
            </Heading>
            <Text color="gray.600">
              Utilisez des équipements de mesure pour vérifier les performances du signal avant de finaliser l'installation.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>

    
      <Box bg="blue.600" py={10} mt={10} textAlign="center" color="white">
        <Heading size="lg" mb={4}>
          Besoin d'aide supplémentaire ?
        </Heading>
        <Text fontSize="lg" mb={6}>
          Contactez nos experts pour un accompagnement personnalisé.
        </Text>
        <Button size="lg" bg="#F78817" as="a" href="/contact">
          Contactez-nous
        </Button>
      </Box>
    </Box>
  </Layout>
  )
}
