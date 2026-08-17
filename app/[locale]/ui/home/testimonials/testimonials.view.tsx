import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  Flex,
  SimpleGrid,
  Icon,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Grid,
  Badge,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaNetworkWired,
  FaMapMarkedAlt,
  FaExchangeAlt,
  FaPlug,
  FaSitemap,
} from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

// Fonction pour créer un objet de couleurs avec les nuances
const createColorTheme = (baseColor: string, isOrange: boolean = false) => {
  return {
    base: baseColor,
    light: isOrange ? '#FEEBC8' : '#BEE3F8',
    dark: isOrange ? '#DD6B20' : '#4299E1',
  };
};

const EtudesIngenierieSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'engineering' | 'sig'>('engineering');
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  // Couleurs principales
  const engineeringColor = '#F78719'; // Orange
  const sigColor = '#45C5EC'; // Bleu clair
  
  // Variables de couleurs avec useColorModeValue
  const bg = useColorModeValue('white', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const titleColor = useColorModeValue('#1a365d', 'blue.300');
  const accentColor = useColorModeValue('#F78719', '#F78719');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const subtleBg = useColorModeValue('gray.50', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const badgeBg = useColorModeValue('gray.100', 'gray.600');
  const badgeColor = useColorModeValue('gray.700', 'gray.200');
  
  // Création des thèmes de couleurs pour chaque centre
  const engineeringTheme = createColorTheme(engineeringColor, true);
  const sigTheme = createColorTheme(sigColor, false);
  
  // Gradient combiné
  const combinedGradient = useColorModeValue(
    `linear(to-r, ${engineeringColor}, ${sigColor})`,
    `linear(to-r, #DD6B20, #4299E1)`
  );

  // Données spécifiques à la fibre optique avec couleurs adaptées
  const engineeringCenter = {
    title: 'Ingénierie Fibre Optique',
    subtitle: 'Conception & Déploiement de réseaux',
    icon: FaNetworkWired,
    color: engineeringColor,
    colorTheme: engineeringTheme,
    description: 'Expertise technique avancée pour la conception, le dimensionnement et le déploiement de réseaux fibre optique FTTH, FTTO et backbone.',
    stats: [
      { label: 'Km de fibre déployés', value: '2,500+' },
      { label: 'Projets FTTH', value: '150+' },
      { label: 'Ingénieurs certifiés', value: '35+' },
      { label: 'Taux de réussite', value: '99.7%' },
    ],
    services: [
      'Études techniques de déploiement',
      'Dimensionnement des réseaux',
      'Calculs optiques (dB, PMD, CD)',
      'Conception de plans d\'exécution',
      'Dossier de raccordement (ROP)',
      'Optimisation des tracés',
    ],
    technologies: ['OTDR', 'OLTS', 'VFL', 'Fusion splicing', 'PON', 'GPON/XGS-PON'],
    certifications: ['Certifié ARCEP', 'QualiPASS', 'OPC', 'Sauveteur Secouriste']
  };

  const sigCenter = {
    title: 'SIG Fibre Optique',
    subtitle: 'Cartographie & Gestion des réseaux',
    icon: FaMapMarkedAlt,
    color: sigColor,
    colorTheme: sigTheme,
    description: 'Solutions géospatiales avancées pour la cartographie, l\'analyse et la gestion des infrastructures fibre optique.',
    stats: [
      { label: 'Noeuds géoréférencés', value: '50,000+' },
      { label: 'Couches cartographiques', value: '300+' },
      { label: 'Précision spatiale', value: '< 50cm' },
      { label: 'Temps de traitement', value: '-60%' },
    ],
    services: [
      'Cartographie numérique des réseaux',
      'Analyse spatiale des tracés',
      'Modélisation 3D des infrastructures',
      'Développement d\'applications web',
      'Collecte de données terrain',
      'Gestion patrimoniale (NRO/NRA)',
    ],
    technologies: ['ArcGIS', 'QGIS', 'PostGIS', 'AutoCAD Map 3D'],
    certifications: ['Esri Certified', 'QGis Expert', 'FME Professional']
  };

  const integratedServices = [
    {
      title: 'Déploiement FTTH',
      description: 'Déploiement de réseaux fibre jusqu\'à l\'abonné',
      engineering: 'Dimensionnement optique et routage',
      sig: 'Cartographie des zones et implantation',
      collaboration: 'Optimisation des tracés et coûts',
      icon: FaPlug,
      metrics: ['-30% de coûts', '+40% de couverture'],
    },
    {
      title: 'Conception de backbone',
      description: 'Réseaux principaux et interconnexions',
      engineering: 'Calculs de capacité et résilience',
      sig: 'Analyse des corridors existants',
      collaboration: 'Détection des contraintes terrain',
      icon: FaSitemap,
      metrics: ['99.99% disponibilité', 'Capacité 400G+'],
    },
  ];

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg={bg} py={20} position="relative" overflow="hidden">
      {/* Éléments de fond avec motifs fibre optique */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity={0.03}
        backgroundImage={`radial-gradient(circle at 2px 2px, ${engineeringColor} 1px, transparent 1px)`}
        backgroundSize="40px 40px"
      />
      <Box
        position="absolute"
        top="20px"
        right="20px"
        w="300px"
        h="300px"
        bg={`radial-gradient(circle, ${engineeringColor}20 0%, transparent 70%)`}
        opacity={0.1}
        borderRadius="full"
      />

      <Container maxW="container.xl" position="relative" zIndex={2}>
        <VStack spacing={16} align="stretch">
          {/* En-tête avec badge */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <VStack spacing={6} textAlign="center" mb={12}>
              <Heading
                size="2xl"
                color={titleColor}
                lineHeight="1.2"
              >
                Solutions 
                <Box
                  as="span"
                  bgGradient={combinedGradient}
                  bgClip="text"
                  ml={3}
                >
                  Fibre Optique
                </Box>
              </Heading>
              
              <Text fontSize="xl" color={textColor} maxW="800px">
                Une synergie unique entre expertise technique et intelligence géospatiale 
                pour des déploiements fibre optique optimisés et performants
              </Text>
            </VStack>
          </MotionBox>

          {/* Section des deux centres avec onglets */}
          <Box>
            <Tabs 
              variant="unstyled" 
              isFitted 
              onChange={(index) => setActiveTab(index === 0 ? 'engineering' : 'sig')}
            >
              <TabList 
                bg={useColorModeValue('gray.100', 'gray.700')}
                borderRadius="xl"
                p={1}
                mb={8}
                maxW="700px"
                mx="auto"
              >
                <Tab
                  borderRadius="lg"
                  py={4}
                  _selected={{
                    bg: 'white',
                    shadow: 'lg',
                    color: engineeringColor,
                    fontWeight: 'bold',
                  }}
                  fontSize="lg"
                  transition="all 0.3s"
                >
                  <HStack spacing={3}>
                    <Icon as={FaNetworkWired} />
                    <Text>Ingénierie Fibre</Text>
                  </HStack>
                </Tab>
                <Tab
                  borderRadius="lg"
                  py={4}
                  _selected={{
                    bg: 'white',
                    shadow: 'lg',
                    color: sigColor,
                    fontWeight: 'bold',
                  }}
                  fontSize="lg"
                  transition="all 0.3s"
                >
                  <HStack spacing={3}>
                    <Icon as={FaMapMarkedAlt} />
                    <Text>SIG Fibre</Text>
                  </HStack>
                </Tab>
              </TabList>

              <AnimatePresence mode="wait">
                <TabPanels>
                  <TabPanel px={0}>
                    <ServiceCenterPanel 
                      data={engineeringCenter} 
                      isActive={activeTab === 'engineering'} 
                    />
                  </TabPanel>
                  <TabPanel px={0}>
                    <ServiceCenterPanel 
                      data={sigCenter} 
                      isActive={activeTab === 'sig'} 
                    />
                  </TabPanel>
                </TabPanels>
              </AnimatePresence>
            </Tabs>
          </Box>

          {/* Section des services intégrés */}
          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <VStack spacing={10}>
              <VStack spacing={4} textAlign="center">
                <Heading size="xl" color={titleColor}>
                  Services Intégrés Fibre Optique
                </Heading>
                <Text fontSize="lg" color={textColor} maxW="800px">
                  La combinaison parfaite de nos expertises pour des solutions complètes
                </Text>
              </VStack>

              <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={6} width="100%">
                {integratedServices.map((service, index) => (
                  <MotionBox
                    key={service.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredService(index)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <Box
                      p={6}
                      bg={cardBg}
                      borderRadius="2xl"
                      shadow="lg"
                      border="1px solid"
                      borderColor={borderColor}
                      position="relative"
                      overflow="hidden"
                      _hover={{
                        transform: 'translateY(-8px)',
                        shadow: '2xl',
                        borderColor: accentColor,
                        transition: 'all 0.3s',
                      }}
                    >
                      {/* Élément de connexion au survol */}
                      {hoveredService === index && (
                        <MotionBox
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          position="absolute"
                          top={0}
                          left={0}
                          right={0}
                          height="3px"
                          bgGradient={combinedGradient}
                        />
                      )}

                      <VStack spacing={5} align="start">
                        <HStack spacing={4} width="100%">
                          <Flex
                            w="60px"
                            h="60px"
                            borderRadius="xl"
                            bgGradient={combinedGradient}
                            align="center"
                            justify="center"
                          >
                            <Icon as={service.icon} color="white" boxSize={8} />
                          </Flex>
                          <VStack spacing={1} align="start" flex={1}>
                            <Heading size="md" color={titleColor}>
                              {service.title}
                            </Heading>
                            <Text fontSize="sm" color={textColor}>
                              {service.description}
                            </Text>
                          </VStack>
                        </HStack>

                        <Grid templateColumns="1fr 1fr" gap={4} width="100%">
                          <VStack
                            spacing={2}
                            p={3}
                            bg={subtleBg}
                            borderRadius="lg"
                            border="1px solid"
                            borderColor={borderColor}
                            align="start"
                          >
                            <HStack spacing={2}>
                              <Icon as={FaNetworkWired} color={engineeringColor} />
                              <Text fontSize="sm" fontWeight="bold" color={engineeringColor}>
                                Ingénierie
                              </Text>
                            </HStack>
                            <Text fontSize="sm" color={textColor}>
                              {service.engineering}
                            </Text>
                          </VStack>

                          <VStack
                            spacing={2}
                            p={3}
                            bg={subtleBg}
                            borderRadius="lg"
                            border="1px solid"
                            borderColor={borderColor}
                            align="start"
                          >
                            <HStack spacing={2}>
                              <Icon as={FaMapMarkedAlt} color={sigColor} />
                              <Text fontSize="sm" fontWeight="bold" color={sigColor}>
                                SIG
                              </Text>
                            </HStack>
                            <Text fontSize="sm" color={textColor}>
                              {service.sig}
                            </Text>
                          </VStack>
                        </Grid>

                        <Box width="100%" p={3} bg={subtleBg} borderRadius="lg" border="1px solid" borderColor={borderColor}>
                          <HStack spacing={2} mb={2}>
                            <Icon as={FaExchangeAlt} color={accentColor} />
                            <Text fontSize="sm" fontWeight="bold" color={accentColor}>
                              Synergie des expertises
                            </Text>
                          </HStack>
                          <Text fontSize="sm" color={textColor}>
                            {service.collaboration}
                          </Text>
                        </Box>

                        <Flex wrap="wrap" gap={2} width="100%">
                          {service.metrics.map((metric, idx) => (
                            <Badge
                              key={idx}
                              bg={badgeBg}
                              color={badgeColor}
                              variant="subtle"
                              px={3}
                              py={1}
                              borderRadius="full"
                              border="1px solid"
                              // eslint-disable-next-line react-hooks/rules-of-hooks
                              borderColor={useColorModeValue('gray.300', 'gray.500')}
                            >
                              {metric}
                            </Badge>
                          ))}
                        </Flex>
                      </VStack>
                    </Box>
                  </MotionBox>
                ))}
              </SimpleGrid>
            </VStack>
          </MotionBox>

          {/* CTA Final */}
          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Flex
              bgGradient={combinedGradient}
              borderRadius="2xl"
              p={10}
              position="relative"
              overflow="hidden"
              align="center"
              justify="center"
              shadow="2xl"
              border="1px solid"
              borderColor="rgba(255,255,255,0.1)"
            >
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bgImage="radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)"
              />

              <VStack spacing={6} textAlign="center" color="white" maxW="800px" position="relative" zIndex={2}>
                <Heading size="xl">
                  Un projet fibre optique à déployer ?
                </Heading>
                <Text fontSize="lg" opacity={0.9}>
                  Nos équipes Ingénierie et SIG travaillent en synergie pour vos déploiements 
                  FTTH, FTTO, backbone et réseaux d'opérateurs.
                </Text>
                
                <HStack spacing={6} pt={4} flexWrap="wrap" justify="center">
                  <Button
                    size="lg"
                    bg="white"
                    color={engineeringColor}
                    rightIcon={<FaNetworkWired />}
                    _hover={{
                      transform: 'translateY(-2px)',
                      shadow: 'xl',
                      bg: engineeringColor,
                      color: 'white',
                    }}
                    transition="all 0.3s"
                    fontWeight="600"
                    border="1px solid"
                    borderColor="rgba(255,255,255,0.2)"
                  >
                    Demander un devis
                  </Button>
                  <Button
                    size="lg"
                    bg="white"
                    color={sigColor}
                    rightIcon={<FaMapMarkedAlt />}
                    _hover={{
                      transform: 'translateY(-2px)',
                      shadow: 'xl',
                      bg: sigColor,
                      color: 'white',
                    }}
                    transition="all 0.3s"
                    fontWeight="600"
                    border="1px solid"
                    borderColor="rgba(255,255,255,0.2)"
                  >
                    Nous contacter
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    color="white"
                    borderColor="rgba(255,255,255,0.3)"
                    _hover={{
                      bg: 'rgba(255,255,255,0.1)',
                      borderColor: 'white',
                    }}
                    transition="all 0.3s"
                  >
                    Voir nos références fibre
                  </Button>
                </HStack>
                
                <Text fontSize="sm" opacity={0.8} pt={4}>
                  Certifications : ARCEP • QualiPASS • Esri • OPC
                </Text>
              </VStack>
            </Flex>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

// Composant pour le panneau de chaque centre de service
const ServiceCenterPanel: React.FC<{ data: any; isActive: boolean }> = ({ data, isActive }) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const titleColor = useColorModeValue('#1a365d', 'blue.300');
  const subtleBg = useColorModeValue('gray.50', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  // Couleurs spécifiques pour chaque centre
  const theme = data.colorTheme || {
    base: data.color,
    // eslint-disable-next-line react-hooks/rules-of-hooks
    light: useColorModeValue('#FEEBC8', '#553C2A'),
    dark: data.color,
  };

  return (
    <MotionBox
      key={data.title}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        bg={cardBg}
        borderRadius="2xl"
        p={8}
        shadow="xl"
        border="1px solid"
        borderColor={borderColor}
      >
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
          {/* Colonne de gauche */}
          <VStack spacing={8} align="start">
            <VStack spacing={4} align="start">
              <HStack spacing={4}>
                <Box
                  w="80px"
                  h="80px"
                  borderRadius="xl"
                  bg={subtleBg}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="1px solid"
                  borderColor={borderColor}
                >
                  <Icon as={data.icon} color={theme.base} boxSize={10} />
                </Box>
                <VStack align="start" spacing={2}>
                  <Heading size="xl" color={titleColor}>
                    {data.title}
                  </Heading>
                  <Text fontSize="lg" color={theme.base} fontWeight="medium">
                    {data.subtitle}
                  </Text>
                </VStack>
              </HStack>

              <Text fontSize="md" color={textColor} lineHeight="1.8">
                {data.description}
              </Text>
            </VStack>

            {/* Services */}
            <VStack spacing={4} align="start" width="100%">
              <Heading size="md" color={titleColor}>
                Services principaux
              </Heading>
              <SimpleGrid columns={2} spacing={3} width="100%">
                {data.services.map((service: string, idx: number) => (
                  <Flex
                    key={idx}
                    align="center"
                    gap={2}
                    px={3}
                    py={2}
                    bg={subtleBg}
                    borderRadius="md"
                    border="1px solid"
                    borderColor={borderColor}
                  >
                    <Box
                      w="8px"
                      h="8px"
                      borderRadius="full"
                      bg={theme.base}
                      flexShrink={0}
                    />
                    <Text fontSize="sm" color={textColor}>
                      {service}
                    </Text>
                  </Flex>
                ))}
              </SimpleGrid>
            </VStack>
          </VStack>

          {/* Colonne de droite */}
          <VStack spacing={8}>
            {/* Statistiques */}
            <SimpleGrid columns={2} spacing={4} width="100%">
              {data.stats.map((stat: any, idx: number) => (
                <VStack
                  key={stat.label}
                  spacing={2}
                  p={4}
                  bg={subtleBg}
                  borderRadius="xl"
                  textAlign="center"
                  border="1px solid"
                  borderColor={borderColor}
                >
                  <Text fontSize="3xl" fontWeight="bold" color={theme.base}>
                    {stat.value}
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    {stat.label}
                  </Text>
                </VStack>
              ))}
            </SimpleGrid>

            {/* Technologies */}
            <VStack spacing={4} align="start" width="100%">
              <Heading size="md" color={titleColor}>
                Équipements & Logiciels
              </Heading>
              <Flex flexWrap="wrap" gap={2}>
                {data.technologies.map((tech: string, idx: number) => (
                  <Badge
                    key={idx}
                    bg={subtleBg}
                    color={textColor}
                    variant="subtle"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="sm"
                    border="1px solid"
                    borderColor={borderColor}
                  >
                    {tech}
                  </Badge>
                ))}
              </Flex>
            </VStack>
          </VStack>
        </SimpleGrid>
      </Box>
    </MotionBox>
  );
};

export default EtudesIngenierieSection;