import React, { useRef } from 'react'
import {
  Container,
  Box,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
  Stack,
  Button,
  VStack,
  useColorModeValue,
  Image
} from "@chakra-ui/react";
import { motion, useScroll, useTransform } from 'framer-motion';

// Créer des composants motion pour Chakra UI
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionImage = motion(Image);

import {
  FaCogs,
  FaHandshake,
  FaLightbulb,
  FaEye,
  FaStar,
  FaRocket,
  FaChartLine,
  FaUsers,
  FaLeaf,
  FaGraduationCap,
  FaHeart,
  FaCheckCircle
} from "react-icons/fa";

export default function ValeursView() {
  // Références pour le parallaxe
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const philosophyRef = useRef(null);
  const ctaRef = useRef(null);

  // Hook useScroll de framer-motion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const { scrollYProgress: headerProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"]
  });

  const { scrollYProgress: gridProgress } = useScroll({
    target: gridRef,
    offset: ["start start", "end start"]
  });

  const { scrollYProgress: philosophyProgress } = useScroll({
    target: philosophyRef,
    offset: ["start start", "end start"]
  });

  const { scrollYProgress: ctaProgress } = useScroll({
    target: ctaRef,
    offset: ["start start", "end start"]
  });

  // Transformations pour le parallaxe
  const headerY = useTransform(headerProgress, [0, 1], [0, -50]);
  const headerOpacity = useTransform(headerProgress, [0, 0.5, 1], [1, 1, 0.8]);
  
  const gridY = useTransform(gridProgress, [0, 1], [0, -30]);
  const gridOpacity = useTransform(gridProgress, [0, 0.8, 1], [1, 1, 0.9]);

  const philosophyY = useTransform(philosophyProgress, [0, 1], [0, -20]);
  const philosophyOpacity = useTransform(philosophyProgress, [0, 0.8, 1], [1, 1, 0.95]);

  const ctaY = useTransform(ctaProgress, [0, 1], [0, -40]);
  const ctaScale = useTransform(ctaProgress, [0, 1], [1, 1.02]);

  // Transformations pour les images en parallaxe
  const imageParallax1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const imageParallax2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const imageParallax3 = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const imageParallax4 = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Couleurs pour le mode sombre/clair
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const headingColor = useColorModeValue('gray.800', 'white');
  const borderColor = useColorModeValue('gray.100', 'gray.700');
  const cardBg = useColorModeValue('white', 'gray.900');
  const gradientBg = useColorModeValue('linear(135deg, #F8FAFC 0%, #F0F4F8 100%)', 'linear(135deg, #1A202C 0%, #2D3748 100%)');

  // URLs d'images de fibres optiques et d'ingénierie
  const images = {
  engineering: "/para/2.png",   // Fibres optiques
  quality: "/para/3.png",           // Ingénierie fibre
  innovation: "/para/4.png",     // Fibres lumineuses
  team: "/para/5.png",                 // Technicien fibres
  philosophy: "/para/6.png",     // Installation fibres
  background: "/para/7.png",

  // Images supplémentaires pour le parallaxe
  parallax1: "/para/8.png",
  parallax2: "/para/9.png",
  cta: "/para/10.png",
};


  return (
    <Container 
      ref={containerRef} 
      maxW="container.xl" 
      
      px={{ base: 4, md: 6 }}
      overflow="hidden"
      position="relative"
    >
      {/* Image de fond avec fibres optiques */}
      <MotionBox
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={-1}
        opacity={0.03}
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
      >
        <Image
          src={images.background}
          alt="Background fibres optiques"
          objectFit="cover"
          w="100%"
          h="100%"
          filter="grayscale(100%) blur(1px)"
        />
      </MotionBox>

      {/* Section Nos Valeurs */}
      <Box py={{ base: 10, md: 16 }} position="relative">
        
        {/* Image décorative flottante 1 - Installation fibres */}
        <MotionBox
          position="absolute"
          top="5%"
          right="3%"
          width={{ base: "100px", md: "180px" }}
          height={{ base: "100px", md: "180px" }}
          borderRadius="lg"
          overflow="hidden"
          boxShadow="lg"
          border="2px solid"
          borderColor="rgba(69, 196, 238, 0.3)"
          style={{ y: imageParallax1, rotate: useTransform(scrollYProgress, [0, 1], [0, 5]) }}
          display={{ base: 'none', md: 'block' }}
          zIndex={1}
        >
          <Image
            src={images.parallax1}
            alt="Installation fibres optiques"
            objectFit="cover"
            w="100%"
            h="100%"
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bgGradient="linear(to-b, transparent, rgba(69, 196, 238, 0.3))"
          />
        </MotionBox>

        {/* Image décorative flottante 2 - Fibres lumineuses */}
        <MotionBox
          position="absolute"
          bottom="15%"
          left="3%"
          width={{ base: "80px", md: "140px" }}
          height={{ base: "80px", md: "140px" }}
          borderRadius="full"
          overflow="hidden"
          boxShadow="lg"
          border="4px solid"
          borderColor="rgba(255, 255, 255, 0.8)"
          style={{ 
            y: imageParallax2,
            rotate: useTransform(scrollYProgress, [0, 1], [0, -8])
          }}
          display={{ base: 'none', md: 'block' }}
          zIndex={1}
        >
          <Image
            src={images.parallax2}
            alt="Fibres optiques lumineuses"
            objectFit="cover"
            w="100%"
            h="100%"
          />
        </MotionBox>

        {/* En-tête avec parallaxe */}
        <MotionBox
          ref={headerRef}
          position="relative"
          textAlign="center"
          mb={{ base: 10, md: 16 }}
          style={{
            y: headerY,
            opacity: headerOpacity,
          }}
        >
          <MotionHeading
            as="h2"
            size={{ base: "xl", md: "2xl" }}
            mb={4}
            color={headingColor}
            position="relative"
            display="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nos Valeurs 
            <MotionBox
              position="absolute"
              bottom="-10px"
              left="50%"
              transform="translateX(-50%)"
              width="60px"
              height="4px"
              bgGradient="linear(to-r, #45C4EE, #F78719)"
              borderRadius="full"
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </MotionHeading>
          
          <MotionText
            fontSize={{ base: "md", md: "lg" }}
            color={textColor}
            maxW="2xl"
            mx="auto"
            mt={6}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Ces principes guident chacune de nos actions et définissent notre identité dans notre domaine.
          </MotionText>
        </MotionBox>

        {/* Grille des valeurs avec parallaxe */}
        <MotionBox
          ref={gridRef}
          style={{
            y: gridY,
            opacity: gridOpacity,
          }}
          mb={{ base: 12, md: 20 }}
          position="relative"
        >
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            spacing={{ base: 8, md: 10 }}
          >
            {/* Valeur 1 - Excellence Technique */}
            <MotionBox
              position="relative"
              p={8}
              bg={cardBg}
              borderRadius="2xl"
              boxShadow="0 10px 40px rgba(0, 0, 0, 0.08)"
              border="1px solid"
              borderColor={borderColor}
              transition="all 0.4s ease"
              _hover={{
                transform: "translateY(-10px)",
                boxShadow: "0 20px 60px rgba(69, 196, 238, 0.15)",
                borderColor: "#45C4EE33"
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
             
            >
              {/* Image miniature fibres optiques */}
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                height="120px"
                overflow="hidden"
                borderTopRadius="2xl"
              >
                <Image
                  src={images.engineering}
                  alt="Ingénierie fibres optiques"
                  objectFit="cover"
                  w="100%"
                  h="100%"
                  opacity={0.3}
                />
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bgGradient="linear(to-b, rgba(69, 196, 238, 0.2), transparent)"
                />
              </Box>

              <Box
                position="absolute"
                top="-20px"
                left="50%"
                transform="translateX(-50%)"
                bgGradient="linear(to-br, #45C4EE, #2D9CDB)"
                borderRadius="xl"
                p={4}
                boxShadow="0 10px 25px rgba(69, 196, 238, 0.3)"
                zIndex={2}
              >
                <Icon as={FaCogs} boxSize={6} color="white" />
              </Box>

              <Box textAlign="center" pt={20}>
                <Heading as="h3" size="lg" mb={4} color={headingColor}>
                  Ingénierie 
                </Heading>
                <Text color={textColor} lineHeight="1.7">
                  De la conception à l'installation, pour offrir des solutions polyvalentes, prêtes à transformer votre vision en réalité.
                </Text>
              </Box>
            </MotionBox>

            {/* Valeur 2 - Engagement Client */}
            <MotionBox
              position="relative"
              p={8}
              bg={cardBg}
              borderRadius="2xl"
              boxShadow="0 10px 40px rgba(0, 0, 0, 0.08)"
              border="1px solid"
              borderColor={borderColor}
              transition="all 0.4s ease"
              _hover={{
                transform: "translateY(-10px)",
                boxShadow: "0 20px 60px rgba(247, 135, 25, 0.15)",
                borderColor: "#F7871933"
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
             
            >
              {/* Image miniature qualité */}
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                height="120px"
                overflow="hidden"
                borderTopRadius="2xl"
              >
                <Image
                  src={images.quality}
                  alt="Qualité ingénierie fibre"
                  objectFit="cover"
                  w="100%"
                  h="100%"
                  opacity={0.3}
                />
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bgGradient="linear(to-b, rgba(247, 135, 25, 0.2), transparent)"
                />
              </Box>

              <Box
                position="absolute"
                top="-20px"
                left="50%"
                transform="translateX(-50%)"
                bgGradient="linear(to-br, #F78719, #FF6000)"
                borderRadius="xl"
                p={4}
                boxShadow="0 10px 25px rgba(247, 135, 25, 0.3)"
                zIndex={2}
              >
                <Icon as={FaHandshake} boxSize={6} color="white" />
              </Box>

              <Box textAlign="center" pt={20}>
                <Heading as="h3" size="lg" mb={4} color={headingColor}>
                  Qualité
                </Heading>
                <Text color={textColor} lineHeight="1.7">
                  Chaque service et produit que nous fournissons est imprégné d'un engagement inébranlable envers l'excellence technique.
                </Text>
              </Box>
            </MotionBox>

            {/* Valeur 3 - Innovation Continue */}
            <MotionBox
              position="relative"
              p={8}
              bg={cardBg}
              borderRadius="2xl"
              boxShadow="0 10px 40px rgba(0, 0, 0, 0.08)"
              border="1px solid"
              borderColor={borderColor}
              transition="all 0.4s ease"
              _hover={{
                transform: "translateY(-10px)",
                boxShadow: "0 20px 60px rgba(69, 196, 238, 0.15)",
                borderColor: "#45C4EE33"
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            
            >
              {/* Image miniature innovation */}
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                height="120px"
                overflow="hidden"
                borderTopRadius="2xl"
              >
                <Image
                  src={images.innovation}
                  alt="Innovation fibres optiques"
                  objectFit="cover"
                  w="100%"
                  h="100%"
                  opacity={0.3}
                />
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bgGradient="linear(to-b, rgba(69, 196, 238, 0.2), transparent)"
                />
              </Box>

              <Box
                position="absolute"
                top="-20px"
                left="50%"
                transform="translateX(-50%)"
                bgGradient="linear(to-br, #45C4EE, #2D9CDB)"
                borderRadius="xl"
                p={4}
                boxShadow="0 10px 25px rgba(69, 196, 238, 0.3)"
                zIndex={2}
              >
                <Icon as={FaLightbulb} boxSize={6} color="white" />
              </Box>

              <Box textAlign="center" pt={20}>
                <Heading as="h3" size="lg" mb={4} color={headingColor}>
                  Rapidité
                </Heading>
                <Text color={textColor} lineHeight="1.7">
                  Le temps est votre allié, et le nôtre aussi. Des solutions promptes, des délais tenus. Votre projet avance à la vitesse de vos aspirations.
                </Text>
              </Box>
            </MotionBox>

            {/* Valeur 4 - Transparence */}
            <MotionBox
              position="relative"
              p={8}
              bg={cardBg}
              borderRadius="2xl"
              boxShadow="0 10px 40px rgba(0, 0, 0, 0.08)"
              border="1px solid"
              borderColor={borderColor}
              transition="all 0.4s ease"
              _hover={{
                transform: "translateY(-10px)",
                boxShadow: "0 20px 60px rgba(247, 135, 25, 0.15)",
                borderColor: "#F7871933"
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
             
            >
              {/* Image miniature équipe */}
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                height="120px"
                overflow="hidden"
                borderTopRadius="2xl"
              >
                <Image
                  src={images.team}
                  alt="Équipe technique fibres"
                  objectFit="cover"
                  w="100%"
                  h="100%"
                  opacity={0.3}
                />
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bgGradient="linear(to-b, rgba(247, 135, 25, 0.2), transparent)"
                />
              </Box>

              <Box
                position="absolute"
                top="-20px"
                left="50%"
                transform="translateX(-50%)"
                bgGradient="linear(to-br, #F78719, #FF6000)"
                borderRadius="xl"
                p={4}
                boxShadow="0 10px 25px rgba(247, 135, 25, 0.3)"
                zIndex={2}
              >
                <Icon as={FaEye} boxSize={6} color="white" />
              </Box>

              <Box textAlign="center" pt={20}>
                <Heading as="h3" size="lg" mb={4} color={headingColor}>
                  Transparence
                </Heading>
                <Text color={textColor} lineHeight="1.7">
                  Communication claire, reporting détaillé et suivi précis. 
                  Vous savez exactement où en est votre projet à chaque étape.
                </Text>
              </Box>
            </MotionBox>
          </SimpleGrid>
        </MotionBox>

        {/* Section complémentaire - Notre Philosophie avec parallaxe */}
        <MotionBox
          ref={philosophyRef}
          style={{
            y: philosophyY,
            opacity: philosophyOpacity,
          }}
        >
          <Box
            bgGradient={gradientBg}
            borderRadius="2xl"
            p={{ base: 8, md: 12 }}
            position="relative"
            overflow="hidden"
          >
            {/* Image de fond avec parallaxe */}
            <MotionBox
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              style={{
                y: useTransform(scrollYProgress, [0, 1], [0, 30]),
              }}
            >
              <Image
                src={images.philosophy}
                alt="Philosophie ingénierie fibres"
                objectFit="cover"
                w="100%"
                h="100%"
                opacity={0.08}
                filter="grayscale(100%)"
              />
            </MotionBox>

           
          </Box>
        </MotionBox>

        {/* Section CTA avec parallaxe */}
        <MotionBox
          ref={ctaRef}
          mt={12}
          style={{
            y: ctaY,
            scale: ctaScale,
          }}
        >
          <Box
            position="relative"
            overflow="hidden"
            borderRadius="2xl"
          >
            {/* Image de fond CTA - Réseau fibres optiques */}
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
            >
              <Image
                src={images.cta}
                alt="Réseau fibres optiques moderne"
                objectFit="cover"
                w="100%"
                h="100%"
              />
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bgGradient="linear(135deg, rgba(69, 196, 238, 0.9) 0%, rgba(45, 156, 219, 0.9) 100%)"
              />
            </Box>

            <Box
              position="relative"
              zIndex="1"
              p={{ base: 8, md: 12 }}
              color="white"
              textAlign="center"
            >
              <MotionHeading
                as="h3"
                size="lg"
                mb={4}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Vous partagez nos valeurs ?
              </MotionHeading>
              
              <MotionText
                fontSize="lg"
                mb={8}
                opacity={0.95}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.95, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Rejoignez-nous pour des projets qui ont du sens dans le domaine des télécommunications
              </MotionText>
              
              <Stack
                direction={{ base: "column", sm: "row" }}
                spacing={4}
                justify="center"
              >
                <MotionButton
                  as="a"
                  href="/contact"
                  size="lg"
                  bg="white"
                  color="#45C4EE"
                  _hover={{
                    bg: "#F8FAFC",
                    transform: "translateY(-3px)",
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
                  }}
                  transition="all 0.3s ease"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Nous contacter
                </MotionButton>
                
                <MotionButton
                  as="a"
                  href="/carrieres"
                  size="lg"
                  variant="outline"
                  borderColor="white"
                  color="white"
                  _hover={{
                    bg: "rgba(255, 255, 255, 0.1)",
                    transform: "translateY(-3px)"
                  }}
                  transition="all 0.3s ease"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Voir nos offres
                </MotionButton>
              </Stack>
            </Box>
          </Box>
        </MotionBox>
      </Box>
    </Container>
  )
}

// Composants motion supplémentaires
const MotionFlex = motion(Flex);
const MotionButton = motion(Button);