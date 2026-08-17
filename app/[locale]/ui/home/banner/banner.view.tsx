import { bannerData } from "@app/app/lib/static-data/home/banner";
import {
  VStack,
  Heading,
  Text,
  Box,
  Flex,
  Container,
  useBreakpointValue,
  Button,
  HStack,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import { FiFileText, FiGrid, FiShield, FiTrendingUp, FiUsers, FiZap, FiCompass } from "react-icons/fi";
import { motion } from "framer-motion";
import { keyframes } from "@emotion/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionSimpleGrid = motion(SimpleGrid);

// Couleurs du logo
const brandCyan = "#0047CC";
const brandOrange = "#FF6A00";

// Animations modernes
const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(3deg); }
`;

// Effet "Ken Burns" : zoom lent et continu sur l'image de fond
const kenBurns = keyframes`
  0% { transform: scale(1) translate(0, 0); }
  50% { transform: scale(1.08) translate(-1%, -1%); }
  100% { transform: scale(1) translate(0, 0); }
`;

// Variants pour l'entrée en cascade des cartes de stats
const statsContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const statsItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const slowFloat = keyframes`
  0%, 100% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(-15px) translateX(10px); }
`;

const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const glowAnimation = keyframes`
  0%, 100% { box-shadow: 0 0 15px rgba(69, 196, 238, 0.2); }
  50% { box-shadow: 0 0 30px rgba(69, 196, 238, 0.4); }
`;

// Chemin de l'image de fond (remplace la vidéo)
const BACKGROUND_IMAGE = "/images/test1.jpeg";

const BannerView = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const t = useTranslations("common");
  const router = useRouter();

  const statsCards = [
    { icon: FiZap,       value: "5+",     label: t("years_existence"),  color: brandCyan },
    { icon: FiUsers,     value: "10+",    label: t("clients_operators"), color: brandOrange },
    { icon: FiShield,    value: "24/7",   label: t("support_tech"),     color: brandCyan },
    { icon: FiTrendingUp,value: "+10000", label: t("projects_done"),    color: brandOrange },
  ];

  return (
    <Box position="relative" width="100%" overflow="hidden">
      {bannerData.map(({ id, titleKey, introKey }) => (
        <MotionBox
          key={id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          width="100%"
        >
          {/* Section principale avec image de fond */}
          <Box
            position="relative"
            overflow="hidden"
            minH={{ base: "350px", md: "400px", lg: "450px" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100vw"
            left="50%"
            right="50%"
            marginLeft="-50vw"
            marginRight="-50vw"
            px={{ base: 4, md: 6, lg: 8 }}
            py={{ base: 6, md: 8, lg: 10 }}
          >
            {/* Image de fond animée (effet Ken Burns) */}
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              backgroundImage={`url(${BACKGROUND_IMAGE})`}
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              animation={`${kenBurns} 20s ease-in-out infinite`}
              zIndex={0}
            />

            {/* Overlay sombre avec dégradé aux couleurs du logo */}
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              background={`linear-gradient(135deg, rgba(14, 41, 57, 0.85) 0%, rgba(14, 41, 57, 0.7) 50%, ${brandCyan}20 100%)`}
              zIndex={1}
            />

            {/* Effet gradient animé */}
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              background={`linear-gradient(45deg, transparent 65%, ${brandCyan}15 75%, transparent 85%)`}
              backgroundSize="400% 400%"
              animation={`${gradientFlow} 15s ease infinite`}
              opacity={0.4}
              zIndex={2}
            />

            {/* Éléments décoratifs flottants */}
            <Box
              position="absolute"
              top="10%"
              left="5%"
              w="120px"
              h="120px"
              borderRadius="full"
              bg={`radial-gradient(circle, ${brandCyan}25 0%, ${brandOrange}15 70%, transparent 100%)`}
              filter="blur(20px)"
              animation={`${floatAnimation} 8s ease-in-out infinite`}
              zIndex={2}
            />
            <Box
              position="absolute"
              bottom="15%"
              right="8%"
              w="100px"
              h="100px"
              borderRadius="full"
              bg={`radial-gradient(circle, ${brandOrange}20 0%, ${brandCyan}10 70%, transparent 100%)`}
              filter="blur(18px)"
              animation={`${slowFloat} 10s ease-in-out infinite`}
              zIndex={2}
            />
            <Box
              position="absolute"
              top="30%"
              right="20%"
              w="60px"
              h="60px"
              borderRadius="full"
              bg={brandCyan}
              filter="blur(40px)"
              opacity={0.15}
              animation={`${glowAnimation} 4s ease-in-out infinite`}
              zIndex={2}
            />

            {/* Contenu principal */}
            <Container 
              maxW="container.xl" 
              position="relative" 
              zIndex={3}
              px={{ base: 2, md: 4, lg: 6 }}
            >
              <Flex
                align="center"
                width="100%"
                direction={{ base: "column", lg: "row" }}
                gap={{ base: 4, md: 6, lg: 8 }}
                pt={{ base: 8, md: 12 }}
              >
                <VStack
                  spacing={{ base: 4, md: 6 }}
                  align="flex-start"
                  color="white"
                  maxW={{ base: "100%", lg: "650px" }}
                  textAlign={{ base: "center", lg: "left" }}
                  flex={1}
                >
                  <MotionBox
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    width="100%"
                  >
                    <MotionBox
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
                    >
                      <Heading
                        size={{ base: "lg", sm: "xl", md: "2xl", lg: "3xl" }}
                        lineHeight={{ base: "1.2", md: "1.1" }}
                        fontWeight="700"
                        textShadow="0 2px 8px rgba(0,0,0,0.8)"
                        mb={{ base: 3, md: 4 }}
                      >
                        <Box as="span" color="white">
                          {t("banner_title")}
                        </Box>
                      </Heading>
                    </MotionBox>

                    <MotionBox
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                    >
                      <Text
                        fontSize={{ base: "md", sm: "lg", md: "xl" }}
                        lineHeight={{ base: "1.5", md: "1.6" }}
                        opacity="0.95"
                        fontWeight="400"
                        mb={{ base: 4, md: 6 }}
                        color="white"
                        textShadow="0 1px 4px rgba(0,0,0,0.6)"
                      >
                        {t("banner_intro")}
                      </Text>
                    </MotionBox>

                    {/* Boutons CTA aux couleurs du logo */}
                    <MotionBox
                      as={HStack}
                      spacing={{ base: 2, md: 3 }}
                      flexWrap="wrap"
                      justify={{ base: "center", lg: "flex-start" }}
                      mt={{ base: 2, md: 3 }}
                      pb={{ base: 4, md: 6 }}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }}
                    >
                      <MotionButton
                        size={{ base: "sm", md: "md" }}
                        bg={brandCyan}
                        color="#ffff"
                        borderRadius="full"
                        px={{ base: 4, md: 6 }}
                        fontWeight="600"
                        fontSize={{ base: "xs", md: "sm" }}
                        leftIcon={<Icon as={FiFileText} boxSize={4} />}
                        _hover={{ bg: brandOrange, color: "white" }}
                        boxShadow={`0 4px 12px ${brandCyan}80`}
                        onClick={() => router.push("/infrastructure/ingenierie-reseaux")}
                        whileHover={{ y: -3, scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        {t("request_study")}
                      </MotionButton>

                      <MotionButton
                        size={{ base: "sm", md: "md" }}
                        bg="whiteAlpha.200"
                        color="white"
                        borderRadius="full"
                        px={{ base: 4, md: 6 }}
                        fontWeight="500"
                        fontSize={{ base: "xs", md: "sm" }}
                        leftIcon={<Icon as={FiGrid} boxSize={4} />}
                        border="1px solid"
                        borderColor="whiteAlpha.400"
                        backdropFilter="blur(4px)"
                        _hover={{ bg: "whiteAlpha.300" }}
                        onClick={() => router.push("/infrastructure/energies")}
                        whileHover={{ y: -3, scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        {t("discover_services")}
                      </MotionButton>

                      <MotionButton
                        size={{ base: "sm", md: "md" }}
                        bg="whiteAlpha.200"
                        color="white"
                        borderRadius="full"
                        px={{ base: 4, md: 6 }}
                        fontWeight="500"
                        fontSize={{ base: "xs", md: "sm" }}
                        leftIcon={<Icon as={FiCompass} boxSize={4} />}
                        border="1px solid"
                        borderColor="whiteAlpha.400"
                        backdropFilter="blur(4px)"
                        _hover={{ bg: "whiteAlpha.300" }}
                        onClick={() => router.push("/conseil")}
                        whileHover={{ y: -3, scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        {t("conseil")}
                      </MotionButton>
                    </MotionBox>
                  </MotionBox>
                </VStack>
              </Flex>
            </Container>
          </Box>

          {/* Carte des statistiques (inchangée) */}
          <Box
            position="relative"
            zIndex={5}
            mt={{ base: -4, md: -6, lg: -8 }}
            width="100%"
            px={{ base: 3, md: 4, lg: 6 }}
          >
            <Container maxW="container.xl" px={0}>
              <Box
                bg="white"
                borderRadius="2xl"
                boxShadow="0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)"
                border="1px solid"
                borderColor="gray.100"
                overflow="hidden"
              >
                <MotionSimpleGrid
                  columns={{ base: 2, sm: 3, md: 4 }}
                  variants={statsContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                >
                  {statsCards.map((stat, index) => (
                    <MotionBox
                      key={index}
                      variants={statsItemVariants}
                      px={{ base: 4, md: 6 }}
                      py={{ base: 5, md: 6 }}
                      textAlign="center"
                      position="relative"
                      _notLast={{
                        _after: {
                          content: '""',
                          position: "absolute",
                          right: 0,
                          top: "15%",
                          height: "70%",
                          width: "1px",
                          bg: "gray.100",
                          display: { base: "none", md: "block" },
                        },
                      }}
                      transition="background 0.2s"
                      _hover={{ bg: "gray.50" }}
                      whileHover={{ y: -4 }}
                    >
                      <VStack spacing={2} align="center">
                        <Icon
                          as={stat.icon}
                          boxSize={5}
                          color={stat.color}
                        />
                        <Text
                          fontSize={{ base: "sm", md: "md" }}
                          fontWeight="semibold"
                          color={stat.color}
                          noOfLines={1}
                          lineHeight="short"
                        >
                          {stat.label}
                        </Text>
                        <Text
                          fontSize={{ base: "xl", md: "2xl" }}
                          fontWeight="bold"
                          color="gray.800"
                          lineHeight="1"
                        >
                          {stat.value}
                        </Text>
                      </VStack>
                    </MotionBox>
                  ))}
                </MotionSimpleGrid>
              </Box>
            </Container>
          </Box>
        </MotionBox>
      ))}
    </Box>
  );
};

export default BannerView;