import { bannerData } from "@app/app/lib/static-data/home/banner";
import {
  VStack,
  Heading,
  Text,
  Box,
  Flex,
  Container,
  List,
  ListItem,
  ListIcon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { FiCheck } from "react-icons/fi";

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const BannerView = () => {
  const contentAnimation = useBreakpointValue({
    base: `${fadeIn} 1s ease-out`,
    md: `${fadeIn} 1.2s ease-out, ${float} 6s ease-in-out infinite 1.2s`,
  });

  return (
    <Container maxW="1300px" py={10}>
      <Box
        position="relative"
        overflow="hidden"
        minH="500px"
        borderRadius="xl"
        bgImage="url('/images/test1.jpeg')" 
        bgSize="cover"
        bgPosition="center"
        display="flex"
        alignItems="center"
        px={{ base: 6, md: 10 }}
      >
        {/* Overlay animé */}
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="linear-gradient(90deg, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.4) 100%)"
          borderRadius="xl"
          zIndex={0}
          
          backgroundSize="400% 400%"
        />

        {/* Effet particules */}
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          zIndex={0}
          opacity="0.3"
          sx={{
            "&:after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `radial-gradient(white 1px, transparent 2px)`,
              backgroundSize: "50px 50px",
              animation: `${pulse} 10s infinite ease-in-out`,
              borderRadius: "xl",
            },
          }}
        />

        {/* Contenu */}
        {bannerData.map(({ id, title, intro }) => (
          <Flex key={id} align="center" position="relative" zIndex={1}>
            <VStack
              spacing={6}
              align="flex-start"
              color="white"
              maxW="600px"
              textAlign="left"
              animation={contentAnimation}
            >
              <Heading
                size="2xl"
                lineHeight="shorter"
                fontWeight="bold"
                
              >
                {title}
              </Heading>

              <Text
                fontSize="xl"
                lineHeight="1.6"
                opacity="0.9"
                fontWeight="500"
                textShadow="0 1px 3px rgba(0,0,0,0.5)"
              >
                {intro}
              </Text>

              {/* Liste de fonctionnalités */}
              <List spacing={3}>
                <ListItem display="flex" alignItems="center">
                  <ListIcon as={FiCheck} color="white" fontSize="xl" />
                  Solution complète et intégrée
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <ListIcon as={FiCheck} color="white" fontSize="xl" />
                  Support technique 24/7
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <ListIcon as={FiCheck} color="white" fontSize="xl" />
                  Interface intuitive et facile à utiliser
                </ListItem>
              </List>
            </VStack>
          </Flex>
        ))}
      </Box>
    </Container>
  );
};

export default BannerView;
