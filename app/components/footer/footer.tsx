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
} from "@chakra-ui/react"

import iconFacebook from "public/images/fb-icon.png"
import iconTwitter from "public/images/twitter-icon.png"
import iconLinkedin from "public/images/linkedinIcon.png"

import NextLink from "next/link"
import NextImage from "next/image"

import {
  footerMenu,
  menuItems,
} from "@app/app/components/menu-items/menu-items"

export default function Footer() {
  return (
    <Box as="footer" bg="black" w="full" color="#c8cbce">
      <Container maxW="container.xl" py="10">
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          pb="5"
          flexDirection={{ md: "column", lg: "row" }}
        >
          <Stack>
            <Heading as="h1" fontSize="2xl">
              CSMA CONSULT
            </Heading>
            <Text>Expertise et matériels télécom</Text>
          </Stack>

          <Flex
            alignItems={{ base: "flex-start", md: "center" }}
            justifyContent="center"
            flexDirection={{ base: "column", md: "row" }}
            mt={{ base: "5", md: 0 }}
          >
            {menuItems.map(({ id, label, path }) => (
              <Link
                key={id}
                as={NextLink}
                href={path}
                marginRight={id === 5 ? 0 : "30px"}
                marginBottom={id === 5 ? 0 : "1"}
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
            <Text color="rgba(107,114,128,1)">324 Rue de Dublin</Text>
            <Text color="rgba(107,114,128,1)">77550 MOISSY-CRAMAYEL</Text>
          </Stack>
          <Stack mt={{ base: "5", md: "5", lg: 0 }}>
            <Heading fontSize="lg">Contact</Heading>
            <Text color="rgba(107,114,128,1)">
              <a href="mailto:contact@csmaconsult.com">
                contact@csmaconsult.com
              </a>
            </Text>
            <Text color="rgba(107,114,128,1)">+33 1 88 61 10 87</Text>
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

        <HStack justifyContent="center" mt="10" spacing="5" flexWrap="wrap">
          {footerMenu.map(({ id, label, path }) => (
            <>
              {id < 2 ? (
                <Text fontWeight="bold">
                  © {new Date().getFullYear()} {label}
                </Text>
              ) : (
                <Link href={path} fontWeight="bold" textTransform="uppercase">
                  {label}
                </Link>
              )}
            </>
          ))}
        </HStack>
      </Container>
    </Box>
  )
}
