"use client"
import React from 'react'
import Layout from "@app/app/layout/layout.page";
import { useRef, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Text,
  Heading,
  Button,
  Image,
  HStack,
  useStyleConfig,
  Stack,
  List,
  ListItem,
  ListIcon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  SimpleGrid,
  IconButton,
  useBreakpointValue,
  Link,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  VStack,
  Badge,
} from "@chakra-ui/react";
import { CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import KPISection from './kpisection';
import LivrablesSection from './LivrablesSection';
import { motion } from "framer-motion";
import FAQSection from './faq';

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionImage = motion(Image);

export default function ConformiteTechniques() {
  const eyebrowStyles = useStyleConfig("Text", {
    variant: "eyebrow",
  });

  return (
    <Layout>
      <Container maxW="container.xl" my="6">
        {/* Hero Section */}
        <Box
          as="section"
          py={[12, 16, 20]}
          position="relative"
          overflow="hidden"
          bg="linear-gradient(135deg, #f0f9ff 0%, #fef7ed 50%, #f0f9ff 100%)"
          mb={[8, 12, 16]}
        >
          {/* 🌈 Background animé avec vos couleurs */}
          <MotionBox
            position="absolute"
            inset={0}
            bgGradient="linear(45deg, #45C5EB10, #F7871910, #45C5EB10)"
            zIndex={0}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          {/* Effets décoratifs */}
          <MotionBox
            position="absolute"
            top="-20%"
            right="-10%"
            w="400px"
            h="400px"
            borderRadius="full"
            bg="radial-gradient(circle, #45C5EB20 0%, transparent 70%)"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <MotionBox
            position="absolute"
            bottom="-10%"
            left="-10%"
            w="300px"
            h="300px"
            borderRadius="full"
            bg="radial-gradient(circle, #F7871920 0%, transparent 70%)"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Contenu */}
          <Container maxW="container.xl" position="relative" zIndex={2}>
            <Grid
              templateColumns={["1fr", "1fr", "1.2fr 1fr"]}
              gap={[8, 10, 16]}
              alignItems="center"
            >
              {/* Partie Texte */}
              <MotionBox
                order={[2, 2, 1]}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <MotionBox
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Badge
                    colorScheme="blue"
                    bg="linear-gradient(135deg, #45C5EB 0%, #2B6CB0 100%)"
                    color="white"
                    px={4}
                    py={2}
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight="bold"
                    textTransform="uppercase"
                    letterSpacing="wider"
                    mb={6}
                  >
                    Conformité technique
                  </Badge>
                </MotionBox>

                <MotionHeading
                  as="h1"
                  size={useBreakpointValue({ base: "2xl", md: "3xl", lg: "4xl" })}
                  mb={6}
                  color="gray.900"
                  lineHeight="1.1"
                  fontWeight="black"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.9 }}
                  viewport={{ once: true }}
                >
                  Des projets alignés sur les{' '}
                  <Text as="span" bg="linear-gradient(135deg, #F78719 0%, #45C5EB 100%)" backgroundClip="text" css={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    normes
                  </Text>
                </MotionHeading>

                <MotionText
                  fontSize={useBreakpointValue({ base: "lg", md: "xl" })}
                  color="gray.700"
                  mb={8}
                  lineHeight="1.7"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Audits de conception, checklists ARCEP/opérateurs, accompagnement
                  aux autorisations, PV de recette et DOE. On sécurise votre
                  déploiement du premier coup.
                </MotionText>

                {/* CTA Buttons */}
                <HStack spacing={6} mb={10} flexWrap="wrap">
                  <MotionBox 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      as="a"
                      href="#contact"
                      size="lg"
                      borderRadius="xl"
                      bg="linear-gradient(135deg, #F78719 0%, #FF9E40 100%)"
                      color="white"
                      fontWeight="bold"
                      px={8}
                      py={6}
                      _hover={{
                        bg: "linear-gradient(135deg, #E5760B 0%, #F78719 100%)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 10px 25px rgba(247, 135, 25, 0.3)"
                      }}
                      _active={{
                        transform: "translateY(0)"
                      }}
                      boxShadow="0 4px 15px rgba(247, 135, 25, 0.2)"
                    >
                      Planifier un audit
                    </Button>
                  </MotionBox>
                  
                  <MotionBox 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      as="a"
                      href="#livrables"
                      variant="outline"
                      size="lg"
                      borderRadius="xl"
                      border="2px solid"
                      borderColor="#45C5EB"
                      color="#45C5EB"
                      fontWeight="bold"
                      px={8}
                      py={6}
                      _hover={{
                        bg: "#45C5EB10",
                        transform: "translateY(-2px)",
                        boxShadow: "0 10px 25px rgba(69, 197, 235, 0.2)"
                      }}
                      _active={{
                        transform: "translateY(0)"
                      }}
                    >
                      Voir nos livrables
                    </Button>
                  </MotionBox>
                </HStack>

                {/* Tags modernisés */}
                <SimpleGrid columns={[2, 4]} spacing={4}>
                  {["ARCEP", "DOE", "DICT", "PV de recette"].map((tag, i) => (
                    <MotionBox
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + i * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <Box
                        bg="white"
                        color="gray.700"
                        px={4}
                        py={3}
                        borderRadius="xl"
                        fontSize="sm"
                        fontWeight="semibold"
                        textAlign="center"
                        border="1px solid"
                        borderColor="gray.200"
                        boxShadow="0 2px 10px rgba(0,0,0,0.05)"
                        transition="all 0.3s ease"
                        _hover={{
                          borderColor: "#45C5EB",
                          boxShadow: "0 4px 15px rgba(69, 197, 235, 0.15)",
                          transform: "translateY(-2px)"
                        }}
                      >
                        {tag}
                      </Box>
                    </MotionBox>
                  ))}
                </SimpleGrid>
              </MotionBox>

              {/* Partie Image modernisée */}
              <MotionBox
                order={[1, 1, 2]}
                textAlign="center"
                initial={{ opacity: 0, scale: 0.8, rotateY: 10 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                position="relative"
              >
                {/* Cadre décoratif */}
                <MotionBox
                  position="absolute"
                  top={-4}
                  right={-4}
                  bottom={-4}
                  left={-4}
                  bg="linear-gradient(135deg, #F78719 0%, #45C5EB 100%)"
                  borderRadius="2xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  zIndex={0}
                />
                
                <Box
                  position="relative"
                  zIndex={1}
                  borderRadius="xl"
                  overflow="hidden"
                  boxShadow="0 25px 50px rgba(0,0,0,0.15)"
                >
                  <MotionImage
                    src="/images/epissurag.jpg"
                    alt="Contrôle de conformité sur armoire PM – réseau fibre"
                    fallbackSrc="./Images/FTTx/epissurage%20optic%20fiber.jpg"
                    loading="eager"
                    width="100%"
                    height="500px"
                    objectFit="cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                  />
                </Box>

                {/* Badge flottant */}
                <MotionBox
                  position="absolute"
                  bottom={8}
                  left={-8}
                  bg="linear-gradient(135deg, #F78719 0%, #FF9E40 100%)"
                  color="white"
                  px={6}
                  py={3}
                  borderRadius="xl"
                  fontWeight="bold"
                  boxShadow="0 10px 25px rgba(247, 135, 25, 0.3)"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.7 }}
                  viewport={{ once: true }}
                  zIndex={2}
                >
                  🔍 Contrôle qualité
                </MotionBox>
              </MotionBox>
            </Grid>
          </Container>
        </Box>

        {/* Services Section */}
        <Box as="section" id="services" py={16} >
          <Container maxW="container.xl">
            <Grid
              templateColumns={["1fr", "1fr", "1fr 1fr"]}
              gap={8}
              className="reveal"
            >
              {/* Carte 1 - Modernisée */}
              <Box
                bg="white"
                p={8}
                borderRadius="xl"
                boxShadow="xl"
                border="1px solid"
                borderColor="gray.100"
                transition="all 0.3s ease-in-out"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "2xl",
                }}
                position="relative"
                overflow="hidden"
              >
                {/* Élément décoratif */}
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  w="full"
                  h="1"
                  bg="linear-gradient(90deg, #45c5eb 0%, #F78719 100%)"
                />
                
                <Heading as="h3" size="lg" mb={6} color="gray.800" fontWeight="700">
                  Ce que nous couvrons
                </Heading>
                
                <List spacing={4}>
                  {[
                    "Respect des normes ARCEP & référentiels opérateurs.",
                    "Conformité aux arrêtés/DTU/règlements locaux (voirie, urbanisme).",
                    "Certification d'installations : recettes, PV, DOE.",
                    "Dossiers administratifs complets : DICT, permissions, arrêtés."
                  ].map((item, index) => (
                    <ListItem key={index} display="flex" alignItems="flex-start">
                      <ListIcon 
                        as={CheckCircleIcon} 
                        color="#45c5eb" 
                        mt={1} 
                        w={5}
                        h={5}
                      />
                      <Text color="gray.700" fontSize="lg" lineHeight="1.6">
                        {item}
                      </Text>
                    </ListItem>
                  ))}
                </List>
              </Box>

              {/* Carte 2 - Modernisée */}
              <Box
                bg="white"
                p={8}
                borderRadius="xl"
                boxShadow="xl"
                border="1px solid"
                borderColor="gray.100"
                transition="all 0.3s ease-in-out"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "2xl",
                }}
                position="relative"
                overflow="hidden"
              >
                {/* Élément décoratif */}
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  w="full"
                  h="1"
                   bg="linear-gradient(90deg, #45c5eb 0%, #F78719 100%)"
                />
                
                <Heading as="h3" size="lg" mb={6} color="gray.800" fontWeight="700">
                  Processus
                </Heading>
                
                <VStack spacing={6} align="stretch">
                  {[
                    { title: "Revue de conception", desc: "checklist, écarts, risques." },
                    { title: "Plan d'actions", desc: "priorisation, coûts/délais, responsabilités." },
                    { title: "Autorisations", desc: "mairies, DDT, gestionnaires de voirie." },
                    { title: "Recette & DOE", desc: "PV signés, as-built, traçabilité." }
                  ].map((step, index) => (
                    <Box key={index} display="flex" alignItems="flex-start">
                      <Box
                        w={8}
                        h={8}
                        borderRadius="full"
                        bg="linear-gradient(135deg, #F78719 0%, #F78719 100%)"
                        color="white"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontSize="sm"
                        fontWeight="bold"
                        mt={1}
                        mr={4}
                        flexShrink={0}
                      >
                        {index + 1}
                      </Box>
                      <Box>
                        <Text fontWeight="700" color="gray.800" fontSize="lg" mb={1}>
                          {step.title}
                        </Text>
                        <Text color="gray.600" fontSize="md" lineHeight="1.5">
                          {step.desc}
                        </Text>
                      </Box>
                    </Box>
                  ))}
                </VStack>
              </Box>
            </Grid>
          </Container>
        </Box>

        {/* KPI Section */}
        
          <KPISection />
        

        {/* Livrables Section */}
        <Box>
          <LivrablesSection />
        </Box>
        <Box>
          <FAQSection/>
        </Box>
      </Container>
    </Layout>
  )
}