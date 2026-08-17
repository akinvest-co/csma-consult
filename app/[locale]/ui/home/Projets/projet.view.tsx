import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  HStack,
  Icon,
  Badge,
  VStack,
} from "@chakra-ui/react";
import { FiArrowRight, FiMapPin, FiCalendar, FiBriefcase } from "react-icons/fi";
import { motion } from "framer-motion";
import { keyframes } from "@emotion/react";

const MotionBox = motion(Box);

const brandCyan = "#0047CC";
const brandOrange = "#FF6A00";

const scrollLeft = keyframes`
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const projets = [
  {
    categorie: "Ingénierie Réseaux",
    titre: "Conception et déploiement de couverture THD",
    lieu: "Dunkerque, France",
    annee: "2025",
    tag: "Telecom",
    accent: brandCyan,
  },
  {
    categorie: "Énergies",
    titre: "Alimentation solaire site télécom",
    lieu: "Dakar, Sénégal",
    annee: "2026",
    tag: "Énergie",
    accent: brandOrange,
  },
  {
    categorie: "Externalisation",
    titre: "Centre de services d'opérateurs télécoms",
    lieu: "Paris, France",
    annee: "2025",
    tag: "Fibre",
    accent: brandCyan,
  },
  
  
  {
    categorie: "Ingénierie Réseaux",
    titre: "Centre de production ingénierie fibre",
    lieu: "Paris, France",
    annee: "2025",
    tag: "Telecom",
    accent: brandCyan,
  },

  
];

const allProjets = [...projets, ...projets];

const ProjetsView = () => {
  return (
    <Box py={{ base: 12, md: 16, lg: 20 }} bg="gray.50" overflow="hidden">
      <Container maxW="container.xl" px={{ base: 4, md: 6, lg: 8 }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          mb={{ base: 8, md: 10 }}
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align={{ base: "flex-start", md: "flex-end" }}
            gap={4}
          >
            <Box>
              <Text
                fontSize="xs"
                fontWeight="700"
                color={brandCyan}
                letterSpacing="widest"
                textTransform="uppercase"
                mb={3}
              >
                Nos Réalisations
              </Text>
              <Heading
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="700"
                lineHeight="1.15"
                letterSpacing="-0.01em"
                color="gray.900"
              >
                Quelques projets réalisés 
              </Heading>
              
            </Box>

            
          </Flex>
        </MotionBox>
      </Container>

      {/* Bande défilante - cartes réduites et améliorées */}
      <Box
        position="relative"
        width="100%"
        _before={{
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          w: "60px",
          background: "linear-gradient(to right, #f9fafb, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
        _after={{
          content: '""',
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          w: "60px",
          background: "linear-gradient(to left, #f9fafb, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <Box
          display="flex"
          animation={`${scrollLeft} 30s linear infinite`}
          width="max-content"
          _hover={{ animationPlayState: "paused" }}
          gap={4}
          px={4}
        >
          {allProjets.map((projet, index) => (
            <Box
              key={index}
              flexShrink={0}
              w={{ base: "260px", md: "280px" }}
              bg="white"
              borderRadius="xl"
              boxShadow="0 2px 8px rgba(0,0,0,0.04)"
              border="1px solid"
              borderColor="gray.100"
              p={4}
              cursor="pointer"
              role="group"
              transition="all 0.25s ease"
              _hover={{
                boxShadow: "0 12px 24px -12px rgba(0,0,0,0.15)",
                borderColor: brandCyan,
                transform: "translateY(-4px)",
              }}
            >
              {/* En-tête : icône + badge */}
              <Flex justify="space-between" align="center" mb={3}>
                <Box
                  w="36px"
                  h="36px"
                  borderRadius="lg"
                  bg={`${projet.accent}10`}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon
                    as={FiBriefcase}
                    boxSize={4}
                    color={projet.accent}
                  />
                </Box>
                <Badge
                  bg={`${projet.accent}15`}
                  color={projet.accent}
                  borderRadius="full"
                  px={2.5}
                  py={1}
                  fontSize="2xs"
                  fontWeight="600"
                  textTransform="uppercase"
                >
                  {projet.tag}
                </Badge>
              </Flex>

              {/* Catégorie */}
              <Text
                fontSize="2xs"
                fontWeight="600"
                color="gray.400"
                textTransform="uppercase"
                letterSpacing="wider"
                mb={1.5}
              >
                {projet.categorie}
              </Text>

              {/* Titre */}
              <Text
                fontSize="sm"
                fontWeight="700"
                color="gray.800"
                lineHeight="1.4"
                mb={3}
                noOfLines={2}
              >
                {projet.titre}
              </Text>

              {/* Infos : lieu et année */}
              <Flex justify="space-between" align="center" pt={2} borderTop="1px solid" borderColor="gray.100">
                <HStack spacing={1} color="gray.500">
                  <Icon as={FiMapPin} boxSize={3} />
                  <Text fontSize="2xs">{projet.lieu}</Text>
                </HStack>
                <HStack spacing={1} color="gray.500">
                  <Icon as={FiCalendar} boxSize={3} />
                  <Text fontSize="2xs">{projet.annee}</Text>
                </HStack>
              </Flex>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjetsView;