import React from 'react';
import {
  Box,
  Container,
  Text,
  Heading,
  Button,
  Image,
  useBreakpointValue,
  useColorModeValue,
  VStack,
  Badge,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { FaFileAlt, FaCheckCircle, FaDownload, FaArrowRight } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionImage = motion(Image);

export default function LivrablesSection() {
  const slides = [
    {
      title: "Rapport d'audit détaillé",
      desc: "Matrice d'écarts, photos annotées, recommandations techniques avec priorités.",
      img: "/images/controle.jpg",
      icon: FaFileAlt,
      features: ["Écarts documentés", "Photos annotées", "Recommandations prioritaires"],
      badge: "Complet"
    },
    {
      title: "Checklists de conformité",
      desc: "ARCEP et référentiels opérateurs – validés et prêts à signer par lot.",
      img: "/images/cheklist.jpg",
      icon: FaCheckCircle,
      features: ["Normes ARCEP", "Référentiels opérateurs", "Validation lot par lot"],
      badge: "Standardisé"
    },
    {
      title: "PV de recette & DOE",
      desc: "As-built digital, pièces jointes organisées, traçabilité complète du projet.",
      img: "/images/fiber.jpg",
      icon: FaDownload,
      features: ["As-built digital", "Pièces jointes", "Traçabilité complète"],
      badge: "Digital"
    },
  ];

  const bgGradient = useColorModeValue(
    'linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%)',
    'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)'
  );

  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const descColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box 
      as="section" 
      id="livrables" 
      py={16} 
      bg={bgGradient}
      position="relative"
      overflow="hidden"
    >
      {/* Éléments décoratifs */}
      <Box
        position="absolute"
        top="-10%"
        right="-10%"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="radial-gradient(circle, #45C5EB10 0%, transparent 70%)"
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="-10%"
        left="-10%"
        w="200px"
        h="200px"
        borderRadius="full"
        bg="radial-gradient(circle, #F7871910 0%, transparent 70%)"
        zIndex={0}
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        {/* En-tête */}
        <VStack textAlign="center" mb={12} spacing={4}>
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
          >
            Nos Livrables
          </Badge>
          
          <Heading 
            as="h2" 
            color={textColor}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl", lg: "5xl" })}
            fontWeight="black"
            lineHeight="1.2"
          >
            Des documents{' '}
            <Text as="span" bg="linear-gradient(135deg, #F78719 0%, #45C5EB 100%)" backgroundClip="text" css={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              professionnels
            </Text>
          </Heading>
          
          <Text 
            fontSize="xl" 
            color={descColor}
            maxW="2xl"
            fontWeight="medium"
          >
            Des livrables clairs, complets et immédiatement exploitables pour garantir votre conformité
          </Text>
        </VStack>

        {/* Grille des 3 cartes */}
        <SimpleGrid 
          columns={[1, 1, 3]} 
          spacing={8}
          mb={12}
        >
          {slides.map((slide, index) => (
            <MotionBox
              key={index}
              bg={cardBg}
              borderRadius="2xl"
              boxShadow="0 10px 40px rgba(0, 0, 0, 0.1)"
              overflow="hidden"
              position="relative"
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              h="100%"
              display="flex"
              flexDirection="column"
            >
              {/* Badge */}
              <Badge
                position="absolute"
                top={4}
                right={4}
                bg="linear-gradient(135deg, #45C5EB 0%, #2B6CB0 100%)"
                color="white"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="xs"
                fontWeight="bold"
                zIndex={2}
              >
                {slide.badge}
              </Badge>

              {/* Image */}
              <Box position="relative" overflow="hidden" flexShrink={0}>
                <MotionImage
                  src={slide.img}
                  alt={slide.title}
                  h={220}
                  w="100%"
                  objectFit="cover"
                  fallbackSrc="https://via.placeholder.com/400x220/3182CE/FFFFFF?text=Livrable+Professionnel"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Overlay gradient */}
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  w="100%"
                  h="50%"
                  bg="linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)"
                />
              </Box>

              {/* Contenu */}
              <Box p={6} flex="1" display="flex" flexDirection="column">
                {/* Icône */}
                <Flex
                  align="center"
                  justify="center"
                  w={12}
                  h={12}
                  borderRadius="xl"
                  bg="linear-gradient(135deg, #F78719 0%, #FF9E40 100%)"
                  color="white"
                  fontSize="xl"
                  mb={4}
                >
                  <slide.icon />
                </Flex>

                <Heading as="h3" size="md" mb={3} color={textColor} fontWeight="bold">
                  {slide.title}
                </Heading>
                
                <Text color={descColor} mb={4} lineHeight="1.6" flex="1">
                  {slide.desc}
                </Text>

                {/* Features */}
                <VStack align="start" spacing={2} mb={4}>
                  {slide.features.map((feature, i) => (
                    <Flex key={i} align="center" color="green.500">
                      <StarIcon boxSize={3} mr={2} />
                      <Text fontSize="sm" color={descColor}>{feature}</Text>
                    </Flex>
                  ))}
                </VStack>

                {/* CTA */}
                <Button
                  rightIcon={<FaArrowRight />}
                  variant="ghost"
                  color="#45C5EB"
                  size="sm"
                  p={0}
                  alignSelf="flex-start"
                  _hover={{ 
                    color: "#F78719",
                    transform: "translateX(4px)"
                  }}
                  transition="all 0.3s"
                >
                  Voir un exemple
                </Button>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>

        {/* CTA principal 
        <Flex justify="center">
          <Button
            size="lg"
            bg="linear-gradient(135deg, #45C5EB 0%, #2B6CB0 100%)"
            color="white"
            fontWeight="bold"
            px={8}
            py={6}
            borderRadius="xl"
            _hover={{
              bg: "linear-gradient(135deg, #3AB0D9 0%, #265E8C 100%)",
              transform: "translateY(-2px)",
              boxShadow: "0 10px 25px rgba(69, 197, 235, 0.3)"
            }}
            _active={{
              transform: "translateY(0)"
            }}
            rightIcon={<FaDownload />}
            boxShadow="0 4px 15px rgba(69, 197, 235, 0.2)"
          >
            Télécharger la brochure complète
          </Button>
        </Flex>
        */}
      </Container>
    </Box>
  );
}