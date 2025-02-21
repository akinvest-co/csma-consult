import React from 'react'
import { Box, Flex, Text, Button, VStack, HStack, Image, Circle } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionButton = motion(Button);
export default function CommentMarche() {
    return (
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" p={10}>
          <Box position="relative" w={{ base: "100%", md: "50%" }} textAlign="center">
            <Box 
              position="absolute" 
              top="-20px" left="-20px" 
              w="250px" h="250px" 
              bg="orange.400"
              zIndex={-1} 
              borderRadius="md"
            />
            <Image 
              src="/images/btn.png" 
              alt="BUREAU"
              borderRadius="md"
              w="90%"
              h="90%"
            />
          </Box>
          <Box w={{ base: "100%", md: "50%" }} p={5}>
            <Text fontSize="3xl" fontWeight="bold" mb={6}>Notre crédo</Text>
            
            <VStack align="start" spacing={6}>
              {[
                { number: "1", title: "Excellence", description:"Nous nous engageons à fournir des services conformes et de haute qualité." },
                { number: "2", title: "Délais" , description:"Le respect des délais est primordial pour nos clients et essentiel pour nous." },
                { number: "3", title: "Agilité" , description:"Nous accompagnons nos partenaires avec une capacité d'adaptation notable."},
                { number: "4", title: "Suivi et support" , description:"A chaque projet, son suivi, nous apportons de la visibilité via nos outils dédiés."}
              ].map((step) => (
                <HStack key={step.number} align="start">
                  <Circle size="40px" bg="orange.400"  color="white" fontWeight="bold">{step.number}</Circle>
                  <Box>
                    <Text fontWeight="bold" fontSize="lg">{step.title}</Text>
                    <Text color="gray.600">{step.description}</Text>
                  </Box>
                </HStack>
              ))}
            </VStack>
            <Button mt={8} bg="orange.400" color="white" _hover={{ bg: "blue.600" }}  href="/qui-sommes-nous" as="a">
              À propos de nous
            </Button>
          </Box>
        </Flex>
      );
}
