"use client";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Flex,
  Icon,
  Grid,
  GridItem,
  List,
  ListItem,
  ListIcon,
  Badge,
  Card,
  CardBody,
  SimpleGrid,
  Image,
  Divider,
  useColorModeValue,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Code,
  Progress,
  Tag,
  TagLabel,
  TagLeftIcon
} from '@chakra-ui/react';
import {
  FaMap,
  FaRoute,
  FaCheckCircle,
  FaCalculator,
  FaCogs,
  FaNetworkWired,
  FaRoad,
  FaBuilding,
  FaProjectDiagram,
  FaExclamationTriangle,
  FaRulerCombined,
  FaChartLine,
  FaTools,
  FaDatabase,
  FaLightbulb,
  FaArrowRight,
  FaRegCheckCircle,
  FaRegTimesCircle,
  FaInfoCircle,
  FaCodeBranch,
  FaWrench,
  FaEye,
  FaFileAlt,
  FaGlobe,
  FaHome,
  FaSearch,
  FaMapMarkerAlt,
  FaFlagCheckered,
  FaBoxOpen,
  FaChevronRight,
  FaChevronDown,
  FaExclamationCircle,
  FaSearchLocation,
  FaLayerGroup,
  FaHammer,
  FaRocket,
  FaCrosshairs
} from 'react-icons/fa';
import { MdLocationOn, MdCable, MdStorage, MdWarning, MdTimeline } from 'react-icons/md';
import { GiPathDistance, GiNetworkBars } from 'react-icons/gi';
import { TbTopologyStar } from 'react-icons/tb';
import Layout from "@app/app/layout/layout.page";
export default function NetGeoProcessPage() {
  const colors = useColorModeValue(
    {
      bg: 'white',
      text: 'gray.800',
      muted: 'gray.600',
      accent: '#F58818',
      secondary: '#2D3748',
      gradientStart: '#F58818',
      gradientEnd: '#FFB74D',
      cardBg: 'gray.50',
      border: '#E2E8F0'
    },
    {
      bg: 'gray.900',
      text: 'white',
      muted: 'gray.300',
      accent: '#F58818',
      secondary: '#CBD5E0',
      gradientStart: '#F58818',
      gradientEnd: '#FFB74D',
      cardBg: 'gray.800',
      border: 'rgba(255, 255, 255, 0.16)'
    }
  );

  const baseData = [
    { icon: FaBuilding, label: "Chambres télécom", color: "blue.500", description: "Points d'accès et de connexion (NRO, Sites) " },
    { icon: MdCable, label: "Fourreaux / conduites", color: "orange.500", description: "Chemins souterrains pour câbles" },
    { icon: FaNetworkWired, label: "Câbles fibre", color: "purple.500", description: "Fibres optiques installées" },
    { icon: MdLocationOn, label: "Points techniques", color: "green.500", description: "PM, PBO " },
    { icon: FaRoad, label: "Voirie", color: "red.500", description: "Routes, trottoirs, espaces publics" }
  ];

  const verificationPoints = [
    { 
      icon: FaCheckCircle, 
      label: "Continuité du chemin", 
      status: "success",
      description: "Vérification de la continuité du tracé"
    },
    { 
      icon: MdStorage, 
      label: "Disponibilité des fourreaux", 
      status: "warning",
      description: "Capacité disponible dans les conduites"
    },
    { 
      icon: GiPathDistance, 
      label: "Longueur totale", 
      status: "info",
      description: "Calcul précis de la distance"
    },
    { 
      icon: GiNetworkBars, 
      label: "Occupation infrastructures", 
      status: "info",
      description: "Taux d'occupation des équipements"
    },
    { 
      icon: FaExclamationTriangle, 
      label: "Points bloquants", 
      status: "error",
      description: "Fourreaux saturés, chambres manquantes"
    }
  ];

  const technicalCalculations = [
    {
      title: "Calcul de distance",
      icon: FaRulerCombined,
      description: "Distance exacte de la route optique",
      formula: "∑ (segments)",
      unit: "mètres"
    },
    {
      title: "Association fibres",
      icon: FaCodeBranch,
      description: "Liaison des câbles fibre existants",
      formula: "Matching",
      unit: "fibres"
    },
    {
      title: "Pertes optiques",
      icon: FaChartLine,
      description: "Estimation des pertes par connexion",
      formula: "α × L + β × N",
      unit: "dB"
    },
    {
      title: "Génération documents",
      icon: FaFileAlt,
      description: "Plans, rapports, fiches techniques",
      formula: "Auto-generation",
      unit: "PDF/DWG"
    }
  ];

  const useCases = [
    { 
      title: "Études FTTH", 
      icon: FaHome, 
      color: "blue",
      description: "Déploiement fibre vers les habitations"
    },
    { 
      title: "Raccordement entreprise", 
      icon: FaBuilding, 
      color: "green",
      description: "Connexion fibre pour entreprises"
    },
    { 
      title: "Audit réseau fibre", 
      icon: FaSearch, 
      color: "orange",
      description: "Inventaire et analyse du réseau"
    }
  ];

  const maintenanceActions = [
    { action: "Déploiement", icon: FaProjectDiagram, status: "planned" },
    { action: "Dépannage", icon: FaWrench, status: "incident" },
    { action: "Documentation", icon: FaDatabase, status: "ongoing" },
    { action: "Suivi incidents", icon: FaEye, status: "monitoring" }
  ];

  return (
<Layout>
    <Box bg={colors.bg} minH="100vh" py={8}>
      <Container maxW="1200px">
        {/* Hero Section */}
        <Box
        as="section"
        position="relative"
        py={{ base: 16, md: 20, lg: 24 }}
        px={{ base: 4, md: 6 }}
        borderRadius="2xl"
        mb={12}
        overflow="hidden"
        boxShadow="0 4px 20px rgba(0,0,0,0.1)"
        minH="380px"
        display="flex"
        alignItems="center"
        // Fond de secours en attendant l'image
        bg="gray.800"
      >
        {/* Image d'arrière-plan - Version corrigée */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={0}
          bgImage={{
            base: "url('/images/test1.jpeg')",
            // Fallback pour différents formats
            md: "url('/images/test1.jpeg')",
            lg: "url('/images/test1.jpeg')"
          }}
          bgPosition="center"
          bgSize="cover"
          bgRepeat="no-repeat"
        >
          {/* Overlay sombre pour améliorer la lisibilité */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bgGradient="linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.4) 100%)"
          />
          
          {/* Overlay avec dégradé de couleur */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bgGradient={`linear-gradient(135deg, ${colors.gradientStart}40, ${colors.gradientEnd}30)`}
            opacity="0.7"
          />
        </Box>
        
        {/* Éléments décoratifs */}
        <Box
          position="absolute"
          top="-100px"
          right="-100px"
          w="300px"
          h="300px"
          borderRadius="full"
          bg={`${colors.gradientStart}20`}
          opacity="0.4"
          zIndex={1}
        />
        <Box
          position="absolute"
          bottom="-80px"
          left="-80px"
          w="250px"
          h="250px"
          borderRadius="full"
          bg={`${colors.gradientEnd}20`}
          opacity="0.3"
          zIndex={1}
        />
        
        {/* Contenu */}
        <VStack 
          spacing={6} 
          textAlign="center" 
          position="relative" 
          zIndex={2}
          maxW="900px" 
          mx="auto"
          width="100%"
        >
          <Badge
            px={5}
            py={2.5}
            borderRadius="full"
            fontSize="sm"
            letterSpacing="wider"
            bg="white"
            color={colors.accent}
            textTransform="uppercase"
            fontWeight="700"
            border="2px solid"
            borderColor={`${colors.accent}30`}
            display="flex"
            alignItems="center"
            gap={2}
            boxShadow="0 4px 15px rgba(0,0,0,0.15)"
            backdropFilter="blur(4px)"
          >
            <Icon as={FaMap} />
            PROCESSUS SIG TÉLÉCOM
          </Badge>
          
          <Box width="100%">
            <Heading
              as="h1"
              size={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="800"
              letterSpacing="tight"
              lineHeight="1.1"
              mb={4}
              color="white"
              textShadow="0 2px 10px rgba(0,0,0,0.3)"
            >
              Création de route optique avec{' '}
              <Box
                as="span"
                bgGradient={`linear-gradient(135deg, ${colors.gradientStart}, ${colors.gradientEnd})`}
                bgClip="text"
                textShadow="none"
              >
                NetGeo
              </Box>
            </Heading>
            
            <Text 
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }} 
              color="gray.200"
              maxW="800px"
              mx="auto"
              lineHeight="1.4"
              textShadow="0 1px 5px rgba(0,0,0,0.4)"
              fontWeight="400"
            >
              Guide complet du processus de création et validation de routes optiques 
              dans notre Système d'Information Géographique télécom.
            </Text>
          </Box>
          
          {/* Indicateur visuel */}
          <Flex 
            align="center" 
            gap={4} 
            mt={2}
            fontSize="sm"
            color="gray.300"
            flexWrap="wrap"
            justify="center"
            backdropFilter="blur(4px)"
            bg="rgba(255,255,255,0.1)"
            p={3}
            borderRadius="lg"
            border="1px solid rgba(255,255,255,0.1)"
          >
            <Flex align="center" gap={2}>
              <Box w="10px" h="10px" borderRadius="full" bg={colors.accent} />
              <Text fontWeight="500">Sélection du tracé</Text>
            </Flex>
            <Icon as={FaChevronRight} opacity={0.7} />
            <Flex align="center" gap={2}>
              <Box w="10px" h="10px" borderRadius="full" bg={colors.accent} opacity={0.8} />
              <Text fontWeight="500">Validation des contraintes</Text>
            </Flex>
            <Icon as={FaChevronRight} opacity={0.7} />
            <Flex align="center" gap={2}>
              <Box w="10px" h="10px" borderRadius="full" bg={colors.accent} opacity={0.6} />
              <Text fontWeight="500">Documentation technique</Text>
            </Flex>
          </Flex>
        </VStack>
        
        {/* Indicatif de scroll optionnel */}
        <Box
          position="absolute"
          bottom={6}
          left="50%"
          transform="translateX(-50%)"
          zIndex={2}
          color="white"
          opacity="0.7"
          _hover={{ opacity: 1 }}
          transition="opacity 0.3s"
        >
          
        </Box>
        </Box>

        {/* 1️⃣ Les données de base */}
        <Box mb={16}>
  <Flex align="center" gap={4} mb={8}>
    <Box
      px={4}
      py={2}
      borderRadius="md"
      fontSize="lg"
      bg={`${colors.accent}10`}
      color={colors.accent}
      fontWeight="700"
      borderLeft="4px solid"
      borderColor={colors.accent}
      display="flex"
      alignItems="center"
      gap={2}
    >
      <Icon as={FaDatabase} />
      <Box as="span">1</Box>
    </Box>
    <Heading as="h2" size="xl">
      Les données de base dans NetGeo
    </Heading>
  </Flex>

  <Text fontSize="lg" color={colors.muted} mb={8} lineHeight="tall">
    NetGeo est un SIG télécom (Système d'Information Géographique). 
    On y retrouve toutes les infrastructures géolocalisées sur une carte.
  </Text>

  <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mb={10}>
    {baseData.map((item, index) => (
      <Box
        key={index}
        position="relative"
        borderRadius="xl"
        overflow="hidden"
        bg="white"
        boxShadow="0 4px 20px rgba(0,0,0,0.08)"
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        _hover={{
          transform: 'translateY(-8px)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
          '& .icon-container': {
            transform: 'scale(1.1) rotate(5deg)'
          }
        }}
        border="1px solid"
        borderColor="gray.100"
      >
        {/* Image en arrière-plan avec overlay */}
        <Box 
          position="relative" 
          h="140px" 
          overflow="hidden"
          bgGradient={`linear-gradient(135deg, ${item.color}40, ${item.color}20)`}
        >
          {/* Image illustrative */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bgImage={`url('/images/data-types/${item.label.toLowerCase().replace(/ /g, '-')}.jpg')`}
            bgSize="cover"
            bgPosition="center"
            opacity="0.3"
            transition="all 0.5s"
            _hover={{
              transform: 'scale(1.05)',
              opacity: '0.4'
            }}
          />
          
          {/* Overlay coloré */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg={`${item.color}30`}
          />
          
          {/* Icône au centre de l'image */}
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            className="icon-container"
            w={20}
            h={20}
            borderRadius="2xl"
            bg="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color={item.color}
            transition="transform 0.3s"
            boxShadow="0 8px 24px rgba(0,0,0,0.15)"
            border="4px solid"
            borderColor="white"
          >
            <Icon as={item.icon} boxSize={10} />
          </Box>
        </Box>
        
        <Box p={6}>
          <Flex align="center" mb={4}>
            <Box>
              <Heading as="h4" size="md" color="gray.800" mb={1}>
                {item.label}
              </Heading>
              <Text fontSize="sm" color="gray.500" fontWeight="500">
                Type de donnée SIG
              </Text>
            </Box>
          </Flex>
          
          <Text color="gray.600" fontSize="md" lineHeight="tall" mb={6}>
            {item.description}
          </Text>
          
          {/* Indicateur avec image miniature */}
          <Flex align="center" justify="space-between" mt={6} pt={4} borderTop="1px solid" borderColor="gray.100">
            <Flex align="center" gap={3}>
              <Box
                w={8}
                h={8}
                borderRadius="md"
                overflow="hidden"
                bg={`${item.color}20`}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={item.icon} boxSize={4} color={item.color} />
              </Box>
              <Text fontSize="sm" color="gray.500" fontWeight="500">
                Infrastructure
              </Text>
            </Flex>
            <Flex align="center" gap={2}>
              <Box
                w={2}
                h={2}
                borderRadius="full"
                bg={item.color}
                boxShadow={`0 0 8px ${item.color}80`}
              />
              <Text fontSize="xs" color="gray.400" fontWeight="500">
                Actif
              </Text>
            </Flex>
          </Flex>
        </Box>
        
        {/* Effet de brillance */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgGradient="linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)"
          pointerEvents="none"
          opacity="0"
          _hover={{ opacity: 1 }}
          transition="opacity 0.3s"
        />
      </Box>
    ))}
  </SimpleGrid>

  <Box
    borderRadius="xl"
    overflow="hidden"
    bgGradient={`linear-gradient(135deg, ${colors.gradientStart}10, ${colors.gradientEnd}10)`}
    border="1px solid"
    borderColor={`${colors.accent}20`}
    boxShadow="0 8px 32px rgba(0,0,0,0.08)"
    mb={8}
    position="relative"
    minH="400px"
  >
    {/* Image de carte en arrière-plan */}
    <Box
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bgImage="url('/images/route.jpeg')"
      bgSize="cover"
      bgPosition="center"
      opacity="0.15"
    />
    
    {/* Élément décoratif */}
    <Box
      position="absolute"
      top={0}
      right={0}
      w="120px"
      h="120px"
      bg={`${colors.accent}10`}
      borderBottomLeftRadius="full"
      zIndex={0}
    />
    
    <Box p={8} position="relative" zIndex={1}>
      <Flex align="center" mb={6}>
        <Box
          w={14}
          h={14}
          borderRadius="lg"
          bg="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color={colors.accent}
          mr={4}
          boxShadow="0 4px 12px rgba(0,0,0,0.1)"
          border="2px solid"
          borderColor={`${colors.accent}20`}
        >
          <Icon as={FaGlobe} boxSize={7} />
        </Box>
        <Box>
          <Heading as="h4" size="lg" color="gray.800" mb={1}>
            Géolocalisation
          </Heading>
          <Text fontSize="sm" color="gray.500" fontWeight="500">
            Tout est positionné avec précision sur la carte
          </Text>
        </Box>
      </Flex>
      
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
        <Box>
          <Text fontSize="lg" color="gray.700" lineHeight="tall" mb={4}>
            Tous les éléments sont géolocalisés sur une carte interactive permettant une visualisation 
            précise des infrastructures et leur relation spatiale.
          </Text>
          
          <Box
            p={4}
            borderRadius="lg"
            bg="white"
            border="1px solid"
            borderColor="gray.200"
            boxShadow="0 4px 12px rgba(0,0,0,0.05)"
          >
            <Flex align="center" gap={3} mb={2}>
              <Icon as={FaMapMarkerAlt} color={colors.accent} />
              <Text fontWeight="600" color="gray.700">Visualisation cartographique</Text>
            </Flex>
            <Text fontSize="sm" color="gray.600">
              Interface interactive avec zoom, déplacement et sélection des éléments
            </Text>
          </Box>
        </Box>
        
        <Box>
          <SimpleGrid columns={2} spacing={4}>
            <Flex align="center" gap={3} p={3} bg="white" borderRadius="lg" border="1px solid" borderColor="gray.100">
              <Box
                w={8}
                h={8}
                borderRadius="md"
                bg={`${colors.accent}10`}
                display="flex"
                alignItems="center"
                justifyContent="center"
                color={colors.accent}
              >
                <Icon as={FaLayerGroup} boxSize={4} />
              </Box>
              <Text color="gray.600" fontSize="sm">Superposition des couches</Text>
            </Flex>
            <Flex align="center" gap={3} p={3} bg="white" borderRadius="lg" border="1px solid" borderColor="gray.100">
              <Box
                w={8}
                h={8}
                borderRadius="md"
                bg={`${colors.accent}10`}
                display="flex"
                alignItems="center"
                justifyContent="center"
                color={colors.accent}
              >
                <Icon as={FaRulerCombined} boxSize={4} />
              </Box>
              <Text color="gray.600" fontSize="sm">Mesures exactes</Text>
            </Flex>
            <Flex align="center" gap={3} p={3} bg="white" borderRadius="lg" border="1px solid" borderColor="gray.100">
              <Box
                w={8}
                h={8}
                borderRadius="md"
                bg={`${colors.accent}10`}
                display="flex"
                alignItems="center"
                justifyContent="center"
                color={colors.accent}
              >
                <Icon as={FaSearchLocation} boxSize={4} />
              </Box>
              <Text color="gray.600" fontSize="sm">Recherche géographique</Text>
            </Flex>
            <Flex align="center" gap={3} p={3} bg="white" borderRadius="lg" border="1px solid" borderColor="gray.100">
              <Box
                w={8}
                h={8}
                borderRadius="md"
                bg={`${colors.accent}10`}
                display="flex"
                alignItems="center"
                justifyContent="center"
                color={colors.accent}
              >
                <Icon as={FaCrosshairs} boxSize={4} />
              </Box>
              <Text color="gray.600" fontSize="sm">Coordonnées précises</Text>
            </Flex>
          </SimpleGrid>
        </Box>
      </Grid>
      
      {/* Point d'accent avec image */}
      <Box mt={8} pt={6} borderTop="1px solid" borderColor={`${colors.accent}20`}>
        <Flex align="start" gap={4}>
          <Box
            w={12}
            h={12}
            borderRadius="lg"
            overflow="hidden"
            flexShrink={0}
            bg={`${colors.accent}10`}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Icon as={FaExclamationCircle} color={colors.accent} boxSize={6} />
          </Box>
          <Box>
            <Text fontWeight="600" color="gray.800" mb={2}>
              Précision géographique essentielle
            </Text>
            <Text fontSize="sm" color="gray.600" lineHeight="tall">
              La précision des coordonnées est fondamentale pour les calculs de routes, 
              les analyses de réseau et la planification des interventions terrain.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  </Box>
</Box>

        {/* 2️⃣ Création de la route optique */}
       <Box mb={16}>
  <Flex align="center" gap={4} mb={8}>
    <Box
      px={4}
      py={2}
      borderRadius="lg"
      fontSize="lg"
      fontWeight="800"
      bg={`${colors.accent}10`}
      color={colors.accent}
      border="2px solid"
      borderColor={`${colors.accent}20`}
      display="flex"
      alignItems="center"
      justifyContent="center"
      minW="48px"
      minH="48px"
      boxShadow="0 4px 12px rgba(0,0,0,0.05)"
    >
      2
    </Box>
    <Box>
      <Heading as="h2" size="xl" mb={1}>
        Tracé de la route optique
      </Heading>
      <Text fontSize="md" color="gray.500" fontWeight="500">
        Du point de départ au point d'arrivée en suivant l'infrastructure existante
      </Text>
    </Box>
  </Flex>

  {/* Visualisation du tracé optique */}
  <Box
    position="relative"
    borderRadius="xl"
    overflow="hidden"
    bg="white"
    boxShadow="0 8px 32px rgba(0,0,0,0.1)"
    border="1px solid"
    borderColor="gray.200"
    mb={8}
  >
    {/* Image du tracé optique */}
    <Box
      position="relative"
      h="300px"
      bgGradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      overflow="hidden"
    >
      {/* Image de fond - à remplacer par votre image */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgImage="url('/images/route.jpeg')"
        bgSize="cover"
        bgPosition="center"
        opacity="0.9"
      />
      
      {/* Overlay pour améliorer la lisibilité */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(0,0,0,0.4)"
      />
      
      {/* Éléments de visualisation du tracé */}
      <Box position="relative" zIndex={2} p={8} h="100%">
        <Flex direction="column" h="100%" justify="space-between">
          {/* Ligne de tracé avec points */}
          <Box position="relative" h="100%">
            {/* Ligne de tracé courbée */}
            <Box
              position="absolute"
              top="50%"
              left="10%"
              right="10%"
              h="4px"
              bg="linear-gradient(90deg, transparent, #4ADE80, #60A5FA, #8B5CF6, transparent)"
              borderRadius="full"
              transform="translateY(-50%)"
              boxShadow="0 0 20px rgba(74, 222, 128, 0.5)"
            />
            
            {/* Point de départ */}
            <Box
              position="absolute"
              left="10%"
              top="50%"
              transform="translate(-50%, -50%)"
              w="60px"
              h="60px"
              borderRadius="full"
              bg="white"
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxShadow="0 8px 32px rgba(0,0,0,0.3)"
              border="3px solid"
              borderColor="green.400"
            >
              <Icon as={FaMapMarkerAlt} color="green.600" boxSize={6} />
            </Box>
            
            {/* Point d'arrivée */}
            <Box
              position="absolute"
              right="10%"
              top="50%"
              transform="translate(50%, -50%)"
              w="60px"
              h="60px"
              borderRadius="full"
              bg="white"
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxShadow="0 8px 32px rgba(0,0,0,0.3)"
              border="3px solid"
              borderColor="blue.400"
            >
              <Icon as={FaFlagCheckered} color="blue.600" boxSize={6} />
            </Box>
            
            {/* Points intermédiaires (chambres) */}
            <Box
              position="absolute"
              left="30%"
              top="50%"
              transform="translate(-50%, -50%)"
              w="40px"
              h="40px"
              borderRadius="full"
              bg="white"
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxShadow="0 4px 16px rgba(0,0,0,0.2)"
              border="2px solid"
              borderColor="purple.300"
            >
              <Icon as={FaBoxOpen} color="purple.500" boxSize={4} />
            </Box>
            
            <Box
              position="absolute"
              left="50%"
              top="50%"
              transform="translate(-50%, -50%)"
              w="40px"
              h="40px"
              borderRadius="full"
              bg="white"
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxShadow="0 4px 16px rgba(0,0,0,0.2)"
              border="2px solid"
              borderColor="purple.300"
            >
              <Icon as={FaBoxOpen} color="purple.500" boxSize={4} />
            </Box>
            
            <Box
              position="absolute"
              left="70%"
              top="50%"
              transform="translate(-50%, -50%)"
              w="40px"
              h="40px"
              borderRadius="full"
              bg="white"
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxShadow="0 4px 16px rgba(0,0,0,0.2)"
              border="2px solid"
              borderColor="purple.300"
            >
              <Icon as={FaBoxOpen} color="purple.500" boxSize={4} />
            </Box>
          </Box>
          
          {/* Légende */}
          <Flex justify="space-between" color="white" fontSize="sm">
            <Flex align="center" gap={2}>
              <Box w="3" h="3" borderRadius="full" bg="green.400" />
              <Text>Départ (NRO)</Text>
            </Flex>
            <Flex align="center" gap={2}>
              <Box w="3" h="3" borderRadius="full" bg="purple.400" />
              <Text>Chambres intermédiaires</Text>
            </Flex>
            <Flex align="center" gap={2}>
              <Box w="3" h="3" borderRadius="full" bg="blue.400" />
              <Text>Arrivée (Client)</Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
    
    {/* Description de l'image */}
    <Box p={6} bg="gray.50" borderTop="1px solid" borderColor="gray.200">
      <Flex align="center" gap={4}>
        <Icon as={FaLightbulb} color={colors.accent} boxSize={5} />
        <Box flex="1">
          <Text fontWeight="600" color="gray.800" mb={1}>
            Visualisation du tracé optique
          </Text>
          <Text fontSize="sm" color="gray.600">
            Illustration d'une route optique suivant l'infrastructure existante - 
            Pas une ligne droite, mais un chemin qui passe par les chambres disponibles
          </Text>
        </Box>
      </Flex>
    </Box>
  </Box>

  <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
    {/* Processus en 3 étapes */}
    <Box
      position="relative"
      borderRadius="xl"
      overflow="hidden"
      bg="white"
      boxShadow="0 8px 32px rgba(0,0,0,0.08)"
      border="1px solid"
      borderColor="gray.100"
      p={8}
      _hover={{
        boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
      }}
      transition="all 0.3s"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="4px"
        bgGradient="linear-gradient(90deg, #10B981 0%, #3B82F6 50%, #8B5CF6 100%)"
      />
      
      <Flex align="center" gap={3} mb={8}>
        <Box
          w={12}
          h={12}
          borderRadius="lg"
          bg={`${colors.accent}15`}
          display="flex"
          alignItems="center"
          justifyContent="center"
          color={colors.accent}
        >
          <Icon as={FaRoute} boxSize={6} />
        </Box>
        <Box>
          <Heading as="h3" size="lg" color="gray.800" mb={1}>
            Processus en 3 étapes
          </Heading>
          <Text fontSize="sm" color="gray.500" fontWeight="500">
            De la sélection au calcul du chemin
          </Text>
        </Box>
      </Flex>

      <Box position="relative">
        <Box
          position="absolute"
          left="20px"
          top="0"
          bottom="0"
          w="2px"
          bg="gray.200"
          zIndex={0}
        />
        
        <VStack spacing={8} align="stretch">
          {[
            {
              step: 1,
              icon: FaMapMarkerAlt,
              color: "green.500",
              title: "Point de départ",
              description: "Sélectionnez le point de départ (ex: NRO ou PM)"
            },
            {
              step: 2,
              icon: FaFlagCheckered,
              color: "blue.500",
              title: "Point d'arrivée",
              description: "Sélectionnez le point d'arrivée (ex: site client, autre PM)"
            },
            {
              step: 3,
              icon: TbTopologyStar,
              color: "purple.500",
              title: "Calcul du chemin",
              description: "NetGeo calcule ou permet de tracer le chemin optimal"
            }
          ].map((item) => (
            <Flex key={item.step} position="relative" zIndex={1}>
              <Box
                w="40px"
                h="40px"
                borderRadius="full"
                bg="white"
                border="4px solid"
                borderColor="white"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
                mr={4}
                position="relative"
                zIndex={2}
                boxShadow="0 4px 12px rgba(0,0,0,0.1)"
              >
                <Box
                  w="24px"
                  h="24px"
                  borderRadius="full"
                  bg={item.color}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                  fontWeight="700"
                >
                  {item.step}
                </Box>
              </Box>
              
              <Box flex="1">
                <Flex align="center" gap={3} mb={2}>
                  <Icon as={item.icon} color={item.color} boxSize={5} />
                  <Heading as="h4" size="md" color="gray.800">
                    {item.title}
                  </Heading>
                </Flex>
                <Text color="gray.600">
                  {item.description}
                </Text>
              </Box>
            </Flex>
          ))}
        </VStack>
      </Box>
    </Box>

    {/* Infrastructure prise en compte */}
    <Box
      position="relative"
      borderRadius="xl"
      overflow="hidden"
      bg="white"
      boxShadow="0 8px 32px rgba(0,0,0,0.08)"
      border="1px solid"
      borderColor="gray.100"
      p={8}
      _hover={{
        boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
      }}
      transition="all 0.3s"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="4px"
        bg={colors.accent}
      />
      
      <Flex align="center" gap={3} mb={8}>
        <Box
          w={12}
          h={12}
          borderRadius="lg"
          bg={`${colors.accent}15`}
          display="flex"
          alignItems="center"
          justifyContent="center"
          color={colors.accent}
        >
          <Icon as={FaLayerGroup} boxSize={6} />
        </Box>
        <Box>
          <Heading as="h3" size="lg" color="gray.800" mb={1}>
            Infrastructure prise en compte
          </Heading>
          <Text fontSize="sm" color="gray.500" fontWeight="500">
            Le tracé suit les contraintes physiques
          </Text>
        </Box>
      </Flex>

      <VStack spacing={6} align="stretch">
        {[
          {
            icon: FaBoxOpen,
            color: "green.500",
            title: "Chambres existantes",
            description: "Passage obligé par les points de raccordement disponibles",
            detail: "Optimisation du tracé via les chambres de visite"
          },
          {
            icon: FaBoxOpen,
            color: "blue.500",
            title: "Fourreaux disponibles",
            description: "Utilisation des conduits existants pour le passage des fibres",
            detail: "Gestion de la capacité disponible"
          },
          {
            icon: FaRoad,
            color: "purple.500",
            title: "Segments de voirie",
            description: "Suivi du réseau routier et des droits de passage",
            detail: "Respect des contraintes urbaines"
          }
        ].map((item, index) => (
          <Box
            key={index}
            p={4}
            borderRadius="lg"
            bg="gray.50"
            border="1px solid"
            borderColor="gray.200"
            transition="all 0.2s"
            _hover={{
              bg: "white",
              borderColor: item.color,
              transform: "translateY(-2px)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
            }}
          >
            <Flex align="center" gap={4} mb={3}>
              <Box
                w={10}
                h={10}
                borderRadius="lg"
                bg={`${item.color}15`}
                display="flex"
                alignItems="center"
                justifyContent="center"
                color={item.color}
                flexShrink={0}
              >
                <Icon as={item.icon} boxSize={5} />
              </Box>
              <Box flex="1">
                <Heading as="h5" size="sm" color="gray.800" mb={1}>
                  {item.title}
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  {item.description}
                </Text>
              </Box>
            </Flex>
            <Text fontSize="xs" color="gray.500" pl={14}>
              {item.detail}
            </Text>
          </Box>
        ))}
      </VStack>

      <Box
        mt={8}
        p={5}
        borderRadius="lg"
        bg="blue.50"
        border="1px solid"
        borderColor="blue.200"
      >
        <Flex align="start" gap={3}>
          <Icon as={FaExclamationTriangle} color="blue.500" boxSize={5} mt={0.5} />
          <Box>
            <Text color="blue.800" fontWeight="600" mb={1}>
              Principe fondamental
            </Text>
            <Text fontSize="sm" color="blue.700">
              La route suit l'infrastructure existante, pas une ligne droite sur la carte.
              Le tracé est contraint par la réalité terrain et les équipements disponibles.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  </Grid>
</Box>

        {/* 3️⃣ Vérification de la faisabilité */}
        <Box mb={16}>
          <Flex align="center" gap={4} mb={8}>
            <Box
              px={4}
              py={2}
              borderRadius="lg"
              fontSize="lg"
              fontWeight="800"
              bg={`${colors.accent}10`}
              color={colors.accent}
              border="2px solid"
              borderColor={`${colors.accent}20`}
              display="flex"
              alignItems="center"
              justifyContent="center"
              minW="48px"
              minH="48px"
              boxShadow="0 4px 12px rgba(0,0,0,0.05)"
            >
              3
            </Box>
            <Box>
              <Heading as="h2" size="xl" mb={1}>
                Vérification de la faisabilité
              </Heading>
              <Text fontSize="md" color="gray.500" fontWeight="500">
                Contrôles automatiques pour valider la route
              </Text>
            </Box>
          </Flex>

          <Box
            bg={`${colors.accent}5`}
            p={6}
            borderRadius="xl"
            border="1px solid"
            borderColor={`${colors.accent}15`}
            mb={10}
          >
            <Flex align="start" gap={4}>
              <Icon as={FaInfoCircle} color={colors.accent} boxSize={6} mt={1} />
              <Box>
                <Text fontSize="lg" color="gray.800" fontWeight="600" mb={2}>
                  Analyse automatique de la route
                </Text>
                <Text fontSize="md" color="gray.600" lineHeight="tall">
                  Sur la route optique créée, NetGeo effectue des contrôles automatiques 
                  pour valider la faisabilité technique et identifier les contraintes.
                </Text>
              </Box>
            </Flex>
          </Box>

            {/* Points de vérification sous forme de timeline/processus */}
            <Box position="relative" mb={12}>
              {/* Ligne de connexion verticale */}
              <Box
                position="absolute"
                left={{ base: 8, md: "50%" }}
                top={0}
                bottom={0}
                w="2px"
                bg="gray.200"
                transform={{ md: "translateX(-50%)" }}
                display={{ base: "none", md: "block" }}
              />
              
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
                {verificationPoints.map((point, index) => {
                  const statusColor = point.status === "success" ? "green.500" :
                                    point.status === "warning" ? "orange.500" :
                                    point.status === "error" ? "red.500" : "blue.500";
                  
                  return (
                    <Box
                      key={index}
                      position="relative"
                      p={6}
                      _hover={{
                        bg: "white",
                        transform: "translateY(-2px)",
                        boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
                        '& .status-indicator': {
                          transform: 'scale(1.2)',
                          boxShadow: `0 0 0 8px ${statusColor}20`
                        }
                      }}
                      transition="all 0.3s ease"
                      borderRadius={{ base: "lg", md: index % 2 === 0 ? "lg 0 0 lg" : "0 lg lg 0" }}
                      border="1px solid"
                      borderColor="gray.100"
                      bg={index % 2 === 0 ? "white" : "gray.50"}
                    >
                      {/* Connecteur pour desktop */}
                      <Box
                        position="absolute"
                        left={{ md: index % 2 === 0 ? "auto" : "-16px" }}
                        right={{ md: index % 2 === 0 ? "-16px" : "auto" }}
                        top="50%"
                        transform="translateY(-50%)"
                        w="32px"
                        h="32px"
                        borderRadius="full"
                        bg="white"
                        border="2px solid"
                        borderColor="gray.200"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        zIndex={1}
                        className="status-indicator"
                        transition="all 0.3s"
                      >
                        <Box
                          w="12px"
                          h="12px"
                          borderRadius="full"
                          bg={statusColor}
                          boxShadow={`0 0 12px ${statusColor}80`}
                        />
                      </Box>

                      <Flex gap={4} align="start">
                        <Box
                          w="16px"
                          h="16px"
                          borderRadius="full"
                          bg={statusColor}
                          mt={2}
                          display={{ md: "none" }}
                        />
                        
                        <Box flex="1">
                          <Flex align="center" gap={3} mb={3}>
                            <Box
                              w={10}
                              h={10}
                              borderRadius="lg"
                              bg={`${statusColor}15`}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              color={statusColor}
                              flexShrink={0}
                            >
                              <Icon as={point.icon} boxSize={5} />
                            </Box>
                            <Heading as="h4" size="md" color="gray.800">
                              {point.label}
                            </Heading>
                          </Flex>
                          
                          <Text color="gray.600" mb={4} lineHeight="tall">
                            {point.description}
                          </Text>
                          
                          {/* Badge de statut */}
                          <Box
                            display="inline-flex"
                            alignItems="center"
                            gap={2}
                            px={3}
                            py={1}
                            borderRadius="full"
                            bg={`${statusColor}10`}
                            fontSize="sm"
                            fontWeight="600"
                            color={statusColor}
                          >
                            <Box
                              w="6px"
                              h="6px"
                              borderRadius="full"
                              bg={statusColor}
                              animation={point.status === "success" ? "pulse 2s infinite" : "none"}
                            />
                            {point.status === "success" ? "Vérifié" : 
                            point.status === "warning" ? "Avertissement" : 
                            point.status === "error" ? "Problème" : "Info"}
                          </Box>
                        </Box>
                      </Flex>
                    </Box>
                  );
                })}
              </SimpleGrid>
            </Box>

            {/* Décision après vérification */}
            <Box>
              <Heading as="h3" size="lg" mb={6} textAlign="center" color="gray.700">
                Résultat de l'analyse
              </Heading>
              
              <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={6}>
                {/* Route validée */}
                <Box
                  position="relative"
                  borderRadius="xl"
                  overflow="hidden"
                  bg="white"
                  border="2px solid"
                  borderColor="green.200"
                  boxShadow="0 8px 32px rgba(34, 197, 94, 0.12)"
                  p={8}
                  transition="all 0.3s"
                  _hover={{
                    transform: "translateY(-4px)",
                    boxShadow: "0 16px 48px rgba(34, 197, 94, 0.18)"
                  }}
                >
                  {/* Élément décoratif */}
                  <Box
                    position="absolute"
                    top={0}
                    right={0}
                    w="80px"
                    h="80px"
                    bg="green.50"
                    borderBottomLeftRadius="full"
                  />
                  
                  <Flex align="center" gap={4} mb={6}>
                    <Box
                      w={14}
                      h={14}
                      borderRadius="xl"
                      bg="green.100"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      color="green.600"
                      flexShrink={0}
                      boxShadow="0 4px 12px rgba(34, 197, 94, 0.2)"
                    >
                      <Icon as={FaCheckCircle} boxSize={7} />
                    </Box>
                    <Box>
                      <Heading as="h3" size="xl" color="green.800" mb={1}>
                        Route validée
                      </Heading>
                      <Text fontSize="sm" color="green.600" fontWeight="500">
                        Prête pour le déploiement
                      </Text>
                    </Box>
                  </Flex>
                  
                  <Text color="green.900" fontSize="lg" lineHeight="tall" mb={6}>
                    Tous les critères sont respectés, la route peut être utilisée pour le déploiement.
                  </Text>
                  
                  <Box
                    p={4}
                    borderRadius="lg"
                    bg="green.50"
                    border="1px solid"
                    borderColor="green.100"
                  >
                    <Flex align="center" gap={3}>
                      <Icon as={FaRocket} color="green.600" />
                      <Text color="green.800" fontWeight="500">
                        Peut passer directement à la phase d'exécution
                      </Text>
                    </Flex>
                  </Box>
                </Box>

                {/* Travaux nécessaires */}
                <Box
                  position="relative"
                  borderRadius="xl"
                  overflow="hidden"
                  bg="white"
                  border="2px solid"
                  borderColor="orange.200"
                  boxShadow="0 8px 32px rgba(237, 137, 54, 0.12)"
                  p={8}
                  transition="all 0.3s"
                  _hover={{
                    transform: "translateY(-4px)",
                    boxShadow: "0 16px 48px rgba(237, 137, 54, 0.18)"
                  }}
                >
                  {/* Élément décoratif */}
                  <Box
                    position="absolute"
                    top={0}
                    right={0}
                    w="80px"
                    h="80px"
                    bg="orange.50"
                    borderBottomLeftRadius="full"
                  />
                  
                  <Flex align="center" gap={4} mb={6}>
                    <Box
                      w={14}
                      h={14}
                      borderRadius="xl"
                      bg="orange.100"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      color="orange.600"
                      flexShrink={0}
                      boxShadow="0 4px 12px rgba(237, 137, 54, 0.2)"
                    >
                      <Icon as={FaTools} boxSize={7} />
                    </Box>
                    <Box>
                      <Heading as="h3" size="xl" color="orange.800" mb={1}>
                        Travaux nécessaires
                      </Heading>
                      <Text fontSize="sm" color="orange.600" fontWeight="500">
                        Intervention requise
                      </Text>
                    </Box>
                  </Flex>
                  
                  <Text color="orange.900" fontSize="lg" lineHeight="tall" mb={6}>
                    Des interventions sont nécessaires pour rendre la route praticable.
                  </Text>
                  
                  <Box>
                    <Text fontWeight="600" color="orange.800" mb={3}>
                      Actions potentielles :
                    </Text>
                    <VStack align="stretch" spacing={3}>
                      <Flex align="center" gap={3}>
                        <Icon as={FaHammer} color="orange.600" />
                        <Text color="orange.900">GC (Génie Civil)</Text>
                      </Flex>
                      <Flex align="center" gap={3}>
                        <Icon as={FaBoxOpen} color="orange.600" />
                        <Text color="orange.900">Pose de chambre</Text>
                      </Flex>
                      <Flex align="center" gap={3}>
                        <Icon as={FaHammer} color="orange.600" />
                        <Text color="orange.900">Nouveau fourreau</Text>
                      </Flex>
                    </VStack>
                  </Box>
                </Box>
              </Grid>
              
              
              
            </Box>
        </Box>
      </Container> 
       
        </Box>

    </Layout>  
      
  );
}

