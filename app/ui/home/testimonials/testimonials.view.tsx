import { 
  Container, 
  VStack, 
  Text, 
  Heading, 
  Avatar, 
  Box, 
  Icon, 
  HStack, 
  Grid, 
  GridItem, 
  Badge, 
  Button,
  Progress,
  useColorModeValue,useBreakpointValue 
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import NextImage from 'next/image';

// Import des styles Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import { FaMapMarkedAlt, FaNetworkWired, FaQuoteLeft, FaQuoteRight, FaRulerCombined } from "react-icons/fa";
import { 
  FiWifi, 
  FiSmartphone, 
  FiHome, 
  FiCloud, 
  FiServer, 
  FiShield 
} from 'react-icons/fi';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { partnersImages } from "@app/app/lib/static-data/home/testimonials/data";

const TestimonialsView = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const primaryColor = useColorModeValue('blue.500', 'blue.300');
 const slidesPerView = useBreakpointValue({ base: 2, sm: 3, md: 4, lg: 4 });
  const spaceBetween = useBreakpointValue({ base: 16, md: 24 });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, 
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, 
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };

 const expertiseData = [
  {
    id: 1,
    icon: FaNetworkWired,
    title: "Études techniques FTTx",
    description: "Conception et dimensionnement de réseaux fibre optique jusqu'à l'abonné",
    features: [
      "Dimensionnement des infrastructures",
      "Calcul des chemins optimaux",
      "Plans techniques détaillés",
      "Estimation des coûts techniques"
    ],
    experience: "Plus de 200 projets réalisés"
  },
  {
    id: 2,
    icon: FaMapMarkedAlt,
    title: "Cartographie SIG",
    description: "Modélisation précise des réseaux grâce à nos outils cartographiques avancés",
    features: [
      "Intégration des contraintes terrain",
      "Géoréférencement précis",
      "Documentation technique interactive",
      "Analyse des obstacles et contraintes"
    ],
    experience: "Professionnalisme confirmé"
  },
  {
    id: 3,
    icon: FaRulerCombined,
    title: "Conformité technique",
    description: "Vérification de la conformité de vos projets aux normes en vigueur",
    features: [
      "Respect des normes ARCEP",
      "Conformité aux réglementations locales",
      "Certification des installations",
      "Dossiers administratifs complets"
    ],
    experience: "Conformité garantie à 100%"
  }
];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Déploiement en cours': return 'green';
      case 'En test': return 'blue';
      case 'En développement': return 'orange';
      case 'En conception': return 'purple';
      default: return 'gray';
    }
  };

  return (
    <Box
      bgGradient="linear(-90deg, rgba(255, 254, 252, 0.2) 50%, #F7FAFC 100%)"
      my="2"
      py="2"
    >
      <Container maxW="container.xl">
        {/* Section Services à Venir */}
        {/* Section Notre Expertise Fibre Optique */}
<VStack spacing={6} textAlign="center" mb={12}>
  <Heading size="xl" letterSpacing="1px" lineHeight="short">
    Notre expertise 
  </Heading>
  <Box width="70px" height="5px" bg="#F8861A" mx="auto" mt="2" />
  <Text fontSize="xl" color="gray.600" maxW="800px">
    Forts de notre expérience dans les études fibre optique, nous mettons à votre service 
    un savoir-faire technique éprouvé pour tous vos projets d'infrastructure
  </Text>
</VStack>

<Grid
  templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
  gap={8}
  mb={20}
>
  {expertiseData.map((service) => (
    <GridItem key={service.id}>
      <Box
        bg={cardBg}
        borderRadius="lg"
        border="1px solid"
        borderColor={borderColor}
        p={6}
        height="100%"
        display="flex"
        flexDirection="column"
        boxShadow="md"
        transition="all 0.3s"
        _hover={{ 
          transform: 'translateY(-5px)', 
          boxShadow: 'xl',
          borderColor: '#F8861A'
        }}
      >
        <Icon 
          as={service.icon} 
          w={10} 
          h={10} 
          color="#F8861A" 
          mb={4} 
          p={2}
          bg="orange.50"
          borderRadius="md"
        />
        
        <Heading as="h3" size="lg" mb={3}>
          {service.title}
        </Heading>
        
        <Text mb={4} color="gray.600" flexGrow={1}>
          {service.description}
        </Text>
        
        <VStack spacing={2} align="start" mb={5}>
          {service.features.map((feature, index) => (
            <Text key={index} fontSize="sm" display="flex" alignItems="center">
              <Box as="span" color="#F8861A" mr={2}>•</Box>
              {feature}
            </Text>
          ))}
        </VStack>
        
        <Box mt="auto" pt={4} display="flex" justifyContent="space-between" alignItems="center">
          <Text fontSize="sm" color="gray.500" fontStyle="italic">
            {service.experience}
          </Text>
          <Button 
            size="sm" 
            colorScheme="orange" 
            variant="outline"
            _hover={{ bg: "#F8861A", color: 'white' }}
          >
            En savoir plus
          </Button>
        </Box>
      </Box>
    </GridItem>
  ))}
</Grid>
        {/* Section Outils d'intervention (inchangée) */}
        
        <Box mt={20} mb={10}>
  <Heading size="xl" letterSpacing="1px" lineHeight="short" textAlign="center" mb={6}>
    Outils et Compétences
  </Heading>
  <Box width="70px" height="5px" bg="#F8861A" mx="auto" mt={2} mb={10} />
<Box maxW="1000px" mx="auto" px={{ base: 4, md: 0 }} py={8}>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop={true}
      >
        {partnersImages.map((partner) => (
          <SwiperSlide key={partner.id}>
            <Box
              w="full"
              h={{ base: "100px", md: "120px" }}
              borderRadius="lg"
              overflow="hidden"
              bg="#EDF2F7"
              p={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
              border="1px solid"
              borderColor="gray.200"
              boxShadow="md"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-5px)",
                boxShadow: "xl",
                borderColor: "#F8861A"
              }}
            >
              <NextImage 
                src={partner.image} 
                alt={partner.alt} 
                placeholder="blur"
                style={{ 
                  objectFit: "contain",
                  maxWidth: "80%",
                  maxHeight: "80%"
                }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
</Box>
      </Container>
    </Box>
  );
};

export default TestimonialsView;