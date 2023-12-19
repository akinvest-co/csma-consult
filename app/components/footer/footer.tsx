import {
  Box,
  Container,
  Heading,
  HStack,
  Flex,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import iconFacebook from "public/images/fb-icon.png";
import iconTwitter from "public/images/twitter-icon.png";
import iconLinkedin from "public/images/linkedinIcon.png";

import NextLink from "next/link";
import NextImage from "next/image";

import { menuItems } from "@app/app/components/menu-items/menu-items";

export default function Footer() {
  return (
    <Box as="footer" bg="#1d1d1f" w="full" color="#c8cbce">
      <Container maxW="container.xl" py="10">
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          pb="5"
          flexDirection={{ md: "column", lg: "row" }}
        >
          <Stack>
            <Heading as="h1" fontSize="2xl">
              CSMA OPTIQUE
            </Heading>
            <Text>Materiels informatiques des fibres optiques</Text>
          </Stack>

          <Flex
            align={{ base: "flex-start", md: "center" }}
            flexDirection={{ base: "column", md: "row" }}
            mt={{ base: "5", md: 0 }}
          >
            <Heading
              fontSize="2xl"
              mb="3"
              display={{ base: "block", md: "none" }}
            >
              Menu
            </Heading>
            {menuItems.map(({ id, label, path }) => (
              <Link
                key={id}
                as={NextLink}
                href={path}
                marginRight={id === 4 ? 0 : "30px"}
                marginBottom={id === 4 ? 0 : "1"}
                fontWeight={{ base: "none", md: "bold" }}
              >
                {label}
              </Link>
            ))}
          </Flex>
        </SimpleGrid>

        <Flex
          borderTop="1px solid rgb(128, 128, 128)"
          pt="5"
          justify="space-between"
          flexDirection={{ base: "column", md: "column", lg: "row" }}
        >
          <Stack>
            <Heading fontSize="lg">Adresse</Heading>
            <Text color="rgba(107,114,128,1)">2 Rue des Frères Lumière</Text>
            <Text color="rgba(107,114,128,1)">95280 JOUY-LE-MOUTIER</Text>
          </Stack>
          <Stack mt={{ base: "5", md: "5", lg: 0 }}>
            <Heading fontSize="lg">Contact</Heading>
            <Text color="rgba(107,114,128,1)">
              <a href="mailto:contact@csma.fr">contact@csma.fr</a>
            </Text>
            <Text color="rgba(107,114,128,1)">+33 1 34 30 02 28</Text>
          </Stack>

          <HStack spacing="3" mt={{ base: "5", md: "5", lg: 0 }}>
            <Link as={NextLink} href="https://facebook.com/csma">
              <NextImage src={iconFacebook} alt="" />
            </Link>
            <Link as={NextLink} href="https://twitter.com/csma">
              <NextImage src={iconTwitter} alt="" />
            </Link>
            <Link as={NextLink} href="https://linkedin.com/csma">
              <NextImage src={iconLinkedin} alt="" />
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
