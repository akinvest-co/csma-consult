"use client"
import Layout from "@app/app/layout/layout.page"
import {
    Box,
    Container,
    Heading,
    Text,
    Icon,
    Button,
    Divider,
    Image,
    SimpleGrid,
    Flex,
   
  } from "@chakra-ui/react";

import { data } from "./data";
import CommentMarche from "./commentmarche.view";
import WhyChooseUs from "./avantages.view";
import path from "path";
export default function Conseils() {
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
      backgroundImage="url('/images/serv.png')"
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
      Nos services télécoms
      </Heading>
      <Text fontSize="lg" color="gray.50">
        Découvrez une gamme complète de produits pour l'installation, <br />
        la maintenance et l'optimisation des réseaux de fibre optique.
      </Text>
      
    </Box>
  </Flex>
    </Container>
       <Box bg="gray.10" py={10}>
    
       <Container maxW="container.lg" textAlign="center" mb={10}>
  <Heading size="2xl" mb={4} >
    Nos services
  </Heading>
  <Box width="70px" height="5px" bg="#F8861A" mx="auto" mt="2"   />
  <Text fontSize="lg" color="gray.600" mb={6}>
  Solutions sur mesure pour les professionnels et collectivités
  </Text>
  <Divider borderColor="orange.400" mb={10} />
</Container>

<Container maxW="container.xl">
  <SimpleGrid columns={[1, null, 4]} spacing={8}>
    {data.map((item, index) => (
      <Box
        key={index}
        position="relative"
        borderRadius="xl"
        overflow="hidden"
        boxShadow="xl"
        transition="transform 0.3s ease-in-out"
        _hover={{ transform: "scale(1.05)" }}
        textAlign="center"
        h="300px"
      >
        
        <Image
          src={item.image}
          alt={item.title}
          objectFit="cover"
          w="100%"
          h="100%"
          position="absolute"
          top="0"
          left="0"
          zIndex="1"
           borderRadius="xl"
        />

        <Box
       
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4));"
          zIndex="2"
        />

        <Heading
          size="md"
          color="white"
          position="absolute"
          bottom="4"
          left="0"
          right="0"
          zIndex="3"
          px={4}
        >
          {item.title}
        </Heading>
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(247, 135, 25, 0.9)" 
          opacity="0"
          transition="opacity 0.3s ease-in-out"
          _hover={{ opacity: 1 }}
          zIndex="4"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={4}
        >
          <Text color="white" mb={4} fontSize="md">
            {item.description}
          </Text>
          <Button
            colorScheme="blue"
            size="sm"
            as="a"
            href={item.path}
            _hover={{ bg: "blue.600" }}
          >
            En savoir plus
          </Button>
        </Box>
      </Box>
    ))}
  </SimpleGrid>
</Container>
   
    </Box>
      <Container maxW="container.xl">
      <CommentMarche/>
      <WhyChooseUs/>
      </Container>
    
  
  </Layout>
  )
}
