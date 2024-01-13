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

import NextLink from "next/link"
import NextImage from "next/image"

import {
  footerMenu,
  menuItems,
  socialLogo,
} from "@app/app/components/menu-items/menu-items"

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
              CSMA CONSULT
            </Heading>
            <Text>Expertise et Solutions Télécom</Text>
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
            <Text color="rgba(107,114,128,1)">+01 88 61 10 56</Text>
          </Stack>

          <HStack spacing="3" mt={{ base: "5", md: "5", lg: 0 }}>
            {socialLogo.map(({ id, logo, social }) => (
              <Link key={id} as={NextLink} href={social}>
                <NextImage src={logo} alt="" width={30} />
              </Link>
            ))}
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
