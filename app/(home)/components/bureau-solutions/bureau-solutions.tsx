import { Link } from "@chakra-ui/next-js";
import {
  Box,
  HStack,
  Text,
  Divider,
  Container,
  VStack,
  Heading,
} from "@chakra-ui/react";

const BureauSolutions = () => {
  return (
    <Container maxW="container.lg" my="28">
      <HStack justify="center" align="start">
        <VStack align="start" spacing="8">
          <Heading
            // letterSpacing={1}
            size={{ base: "md", md: "lg" }}
            fontWeight="bold"
            textTransform="uppercase"
          >
            Bureau d’études
          </Heading>
          <Text>
            Des solutions d'ingénierie innovantes, une expertise approfondie, et
            une passion pour l'excellence. Découvrez nos services d'étude et
            d'ingénierie maintenant.
          </Text>
          <Link href="" color="#1799cf">
            Découvrir Nos Services
          </Link>
        </VStack>

        <Divider
          orientation="vertical"
          borderColor="green.300"
          display={{ base: "none", md: "none", lg: "block" }}
          borderWidth={1}
          height="100%"
          mx={5}
        />

        <VStack align="start" spacing="8">
          <Heading
            // letterSpacing={1}
            size={{ base: "md", md: "lg" }}
            fontWeight="bold"
            textTransform="uppercase"
          >
            Solutions Matériels
          </Heading>
          <Text>
            Équipez-vous pour l'avenir avec notre sélection exclusive de
            matériel réseau. Performant, fiable, et à la pointe de la
            technologie pour vos futurs projets.
          </Text>
          <Link href="" color="#1799cf">
            Explorer le Catalogue
          </Link>
        </VStack>
      </HStack>
    </Container>
  );
};

export default BureauSolutions;
