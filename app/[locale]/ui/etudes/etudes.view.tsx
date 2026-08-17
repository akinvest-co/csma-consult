import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  FaCheckCircle,
  FaClipboardList,
  FaDrawPolygon,
  FaFileContract,
  FaTruckLoading,
  FaArrowRight
} from 'react-icons/fa';

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
  details: string[];
}

const methodologySteps: Step[] = [
  {
    number: 1,
    title: 'Analyse des besoins et étude technique',
    description: 'Audit du site, définition des exigences du système de communication et des contraintes techniques[citation:1][citation:7].',
    icon: FaClipboardList,
    details: [
      'Évaluation des besoins en bande passante et des distances',
      'Analyse du trafic (données, voix, vidéo)',
      'Choix entre fibre monomode (longues distances) et multimode (réseaux locaux)[citation:1][citation:7]',
      'Identification des interfaces avec d\'autres réseaux (cuivre, sans-fil)[citation:1]'
    ]
  },
  {
    number: 2,
    title: 'Conception du réseau et planification',
    description: 'Modélisation SIG du tracé, choix des composants et établissement du budget de perte optique[citation:1].',
    icon: FaDrawPolygon,
    details: [
      'Conception détaillée de l\'architecture réseau (FTTH, FTTx, LAN)[citation:4]',
      'Sélection des câbles, épissures et connecteurs (ex: LC, SC)[citation:3]',
      'Planification des servitudes et obtention des autorisations[citation:1]',
      'Dimensionnement pour la croissance future et la 5G[citation:4][citation:9]'
    ]
  },
  {
    number: 3,
    title: 'Conformité et préparation',
    description: 'Finalisation des aspects réglementaires et logistiques pour l\'installation[citation:1].',
    icon: FaFileContract,
    details: [
      'Validation du plan avec les autorités locales',
      'Estimation précise des coûts du projet[citation:1]',
      'Préparation de la documentation technique et des procédures d\'installation',
      'Choix entre épissure traditionnelle et solutions pré-connectorisées pour gagner du temps[citation:4]'
    ]
  },
  {
    number: 4,
    title: 'Installation, validation et livraison',
    description: 'Déploiement physique, tests rigoureux et remise des livrables finaux[citation:1].',
    icon: FaTruckLoading,
    details: [
      'Installation des câbles et équipements selon les normes',
      'Tests de perte, réflectométrie et validation des performances',
      'Documentation "as-built" et formation du client',
      'Planification de la maintenance et de la réparation future[citation:1][citation:4]'
    ]
  },
];

const ServicesSection: React.FC = () => {
  const bg = useColorModeValue('white', 'gray.900');
  const titleColor = useColorModeValue('blue.700', 'blue.300');
  const stepBg = useColorModeValue('white', 'gray.800');
  const cardBg = useColorModeValue('gray.50', 'gray.800');
  const gradientStart = useColorModeValue('blue.500', 'blue.400');
  const gradientEnd = useColorModeValue('teal.300', 'teal.400');
  const lineColor = useColorModeValue('blue.200', 'blue.700');
  const completedColor = useColorModeValue('green.500', 'green.400');
  const upcomingColor = useColorModeValue('blue.400', 'blue.300');

  const MotionBox = motion(Box);
  const MotionFlex = motion(Flex);

  return (
    <Box
      bg={bg}
      py={16}
      px={4}
      position="relative"
      overflow="hidden"
    >
      {/* Background decorative elements */}
      <Box
        position="absolute"
        top="-50%"
        right="-20%"
        width="600px"
        height="600px"
        borderRadius="full"
        bgGradient={`radial(${useColorModeValue('blue.50', 'blue.900')} 30%, transparent 70%)`}
        opacity={0.6}
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <VStack spacing={20} align="center">
          {/* Header Section */}
          <VStack spacing={6} maxW="3xl" textAlign="center">
            <MotionBox
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Text
                color={gradientStart}
                fontWeight="bold"
                fontSize="sm"
                letterSpacing="wide"
                textTransform="uppercase"
              >
                Processus de Conception de Réseaux Fibre
              </Text>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Heading
                size="2xl"
                mb={4}
                bgGradient={`linear(to-r, ${gradientStart}, ${gradientEnd})`}
                bgClip="text"
                lineHeight="1.2"
              >
                Méthodologie en 4 étapes pour vos projets fibre optique
              </Heading>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Text
                fontSize="lg"
                color={useColorModeValue('gray.600', 'gray.300')}
                maxW="2xl"
                lineHeight="1.7"
              >
                De l'étude initiale à la livraison, notre processus garantit des réseaux fibre optique performants,
                pérennes et adaptés aux évolutions technologiques comme la 5G et les villes intelligentes[citation:9].
              </Text>
            </MotionBox>
          </VStack>

          {/* Desktop Stepper */}
          <Box display={{ base: 'none', lg: 'block' }} width="100%">
            <Flex
              position="relative"
              justify="space-between"
              align="flex-start"
              px={8}
              gap={8}
            >
              {/* Connecting Line with gradient */}
              <Box
                position="absolute"
                top="60px"
                left="10%"
                right="10%"
                height="3px"
                bgGradient={`linear(to-r, transparent 0%, ${lineColor} 20%, ${lineColor} 80%, transparent 100%)`}
                transform="translateY(-50%)"
                zIndex={0}
                borderRadius="full"
              />

              {methodologySteps.map((step, index) => (
                <MotionBox
                  key={step.number}
                  position="relative"
                  zIndex={1}
                  flex="1"
                  textAlign="center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ y: -10 }}
                >
                  {/* Step Circle with gradient border */}
                  <Box
                    position="relative"
                    mb={10}
                  >
                    {/* Outer glow effect for completed steps */}
                    {index < 2 && (
                      <Box
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        width="110px"
                        height="110px"
                        borderRadius="full"
                        bg={completedColor}
                        opacity={0.1}
                        filter="blur(8px)"
                      />
                    )}

                    <MotionFlex
                      w="100px"
                      h="100px"
                      borderRadius="full"
                      bg={stepBg}
                      border="4px solid"
                      borderColor={index < 2 ? completedColor : upcomingColor}
                      alignItems="center"
                      justifyContent="center"
                      mx="auto"
                      position="relative"
                      boxShadow="xl"
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
                      }}
                      transition="all 0.3s ease"
                    >
                      {index < 2 ? (
                        <MotionBox
                          animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3
                          }}
                        >
                          <Icon
                            as={FaCheckCircle}
                            w={12}
                            h={12}
                            color={completedColor}
                          />
                        </MotionBox>
                      ) : (
                        <VStack spacing={0}>
                          <Icon
                            as={step.icon}
                            w={8}
                            h={8}
                            color={upcomingColor}
                            mb={2}
                          />
                          <Text
                            fontSize="3xl"
                            fontWeight="bold"
                            color={upcomingColor}
                            lineHeight="1"
                          >
                            {step.number}
                          </Text>
                        </VStack>
                      )}
                    </MotionFlex>

                    {/* Step Number Label */}
                    <MotionBox
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      <Text
                        position="absolute"
                        top="-20px"
                        left="50%"
                        transform="translateX(-50%)"
                        fontSize="xs"
                        fontWeight="bold"
                        color="white"
                        bgGradient={`linear(to-r, ${gradientStart}, ${gradientEnd})`}
                        px={4}
                        py={1}
                        borderRadius="full"
                        letterSpacing="wide"
                        boxShadow="md"
                        whiteSpace="nowrap"
                      >
                        Étape {step.number}
                      </Text>
                    </MotionBox>
                  </Box>

                  {/* Step Content */}
                  <VStack spacing={4} maxW="320px" mx="auto">
                    <Text
                      fontSize="xl"
                      fontWeight="bold"
                      color={titleColor}
                      minH="3rem"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      {step.title}
                    </Text>

                    <Box
                      bg={cardBg}
                      p={5}
                      borderRadius="xl"
                      boxShadow="sm"
                      borderWidth="1px"
                      minH="180px"
                    >
                      <Text
                        fontSize="sm"
                        
                        lineHeight="1.7"
                        mb={3}
                      >
                        {step.description}
                      </Text>
                      <VStack align="start" spacing={1}>
                        {step.details.map((detail, idx) => (
                          <HStack key={idx} spacing={2} align="flex-start">
                            <Box
                              w="6px"
                              h="6px"
                              borderRadius="full"
                              bg={upcomingColor}
                              mt={1}
                              flexShrink={0}
                            />
                            <Text
                              fontSize="xs"
                             
                              lineHeight="1.5"
                            >
                              {detail}
                            </Text>
                          </HStack>
                        ))}
                      </VStack>
                    </Box>
                  </VStack>

                  {/* Arrow between steps (except last) */}
                  {index < methodologySteps.length - 1 && (
                    <Box
                      position="absolute"
                      top="50px"
                      right="-60px"
                      transform="translateX(-50%)"
                      zIndex={2}
                    >
                      <Icon
                        as={FaArrowRight}
                        w={6}
                        h={6}
                       
                        opacity={0.7}
                      />
                    </Box>
                  )}
                </MotionBox>
              ))}
            </Flex>
          </Box>

          {/* Mobile Stepper - Updated with details */}
          <Box display={{ base: 'block', lg: 'none' }} width="100%">
            <VStack spacing={0} align="stretch">
              {methodologySteps.map((step, index) => (
                <MotionBox
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <HStack
                    spacing={6}
                    align="flex-start"
                    position="relative"
                    py={8}
                    px={4}
                    _hover={{
                     
                      borderRadius: 'xl',
                      transform: 'translateX(8px)',
                    }}
                    transition="all 0.3s ease"
                  >
                    {/* Vertical Line with gradient */}
                    {index < methodologySteps.length - 1 && (
                      <Box
                        position="absolute"
                        left="45px"
                        top="90px"
                        bottom="-20px"
                        width="3px"
                        bgGradient={`linear(to-b, ${lineColor} 0%, transparent 100%)`}
                        zIndex={0}
                        borderRadius="full"
                      />
                    )}

                    {/* Step Circle */}
                    <Box position="relative" zIndex={1}>
                      <Flex
                        w="90px"
                        h="90px"
                        borderRadius="full"
                        bg={stepBg}
                        border="3px solid"
                        borderColor={index < 2 ? completedColor : upcomingColor}
                        alignItems="center"
                        justifyContent="center"
                        boxShadow="lg"
                        position="relative"
                      >
                        {index < 2 ? (
                          <Icon
                            as={FaCheckCircle}
                            w={10}
                            h={10}
                            color={completedColor}
                          />
                        ) : (
                          <VStack spacing={0}>
                            <Icon
                              as={step.icon}
                              w={6}
                              h={6}
                              color={upcomingColor}
                              mb={1}
                            />
                            <Text
                              fontSize="2xl"
                              fontWeight="bold"
                              color={upcomingColor}
                              lineHeight="1"
                            >
                              {step.number}
                            </Text>
                          </VStack>
                        )}

                        {/* Step number badge */}
                        <Text
                          position="absolute"
                          top="-10px"
                          left="50%"
                          transform="translateX(-50%)"
                          fontSize="xs"
                          fontWeight="bold"
                          color="white"
                          bgGradient={`linear(to-r, ${gradientStart}, ${gradientEnd})`}
                          px={3}
                          py={1}
                          borderRadius="full"
                          minW="60px"
                          textAlign="center"
                          boxShadow="sm"
                        >
                          Étape {step.number}
                        </Text>
                      </Flex>
                    </Box>

                    {/* Step Content */}
                    <VStack
                      align="start"
                      spacing={3}
                      flex={1}
                      pt={2}
                    >
                      <Text
                        fontSize="xl"
                        fontWeight="bold"
                        color={titleColor}
                      >
                        {step.title}
                      </Text>
                      <Text
                        fontSize="md"
                        
                        lineHeight="1.6"
                      >
                        {step.description}
                      </Text>
                      <Box pl={3}>
                        {step.details.slice(0, 2).map((detail, idx) => (
                          <Text
                            key={idx}
                            fontSize="sm"
                            
                            lineHeight="1.5"
                          >
                            • {detail}
                          </Text>
                        ))}
                      </Box>
                    </VStack>
                  </HStack>
                </MotionBox>
              ))}
            </VStack>
          </Box>

          {/* Progress Indicator */}
          <MotionBox
            mt={12}
            p={6}
            bg={useColorModeValue('white', 'gray.800')}
            borderRadius="2xl"
            width={{ base: '100%', lg: '70%' }}
            textAlign="center"
            boxShadow="lg"
            borderWidth="1px"
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <VStack spacing={4}>
              <HStack justify="space-between" width="full" px={2}>
                <Text fontSize="md" fontWeight="semibold" color={titleColor}>
                  Progression du projet fibre
                </Text>
                <Text fontSize="md" fontWeight="bold" color={gradientStart}>
                  2/4 étapes complétées
                </Text>
              </HStack>

              <Box
                h="12px"
                bg={useColorModeValue('gray.100', 'gray.700')}
                borderRadius="full"
                overflow="hidden"
                position="relative"
                width="full"
              >
                <MotionBox
                  initial={{ width: 0 }}
                  animate={{ width: '50%' }}
                  transition={{ duration: 1, delay: 1 }}
                  style={{
                    height: '100%',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    background: `linear-gradient(90deg, ${gradientStart} 0%, ${gradientEnd} 100%)`,
                  }}
                />

                {/* Progress markers */}
                <HStack spacing="30%" position="absolute" top="0" left="0" width="full" height="full" px="2%">
                  {[0, 1, 2, 3].map((marker) => (
                    <Box
                      key={marker}
                      width="16px"
                      height="16px"
                      borderRadius="full"
                      bg={marker < 2 ? completedColor : 'white'}
                      border="3px solid"
                     
                      transform="translateY(-2px)"
                      boxShadow="sm"
                    />
                  ))}
                </HStack>
              </Box>

              <HStack justify="space-between" width="full" fontSize="sm" color="gray.500" px={2}>
                <Text>Étude</Text>
                <Text fontWeight="medium">Conception en cours</Text>
                <Text>Livraison</Text>
              </HStack>
            </VStack>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default ServicesSection;