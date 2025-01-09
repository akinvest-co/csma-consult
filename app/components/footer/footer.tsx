"use client"

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
    <Box as="footer" bg="#F7871A" w="full" color="#ffffff" >
      <Container maxW="container.xl" py="10" >
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          pb="5"
        
          flexDirection={{ md: "column", lg: "row" }}
        >
          <Stack>
            <Heading as="h1" fontSize="2xl"   color="#1d1d1f">
              CSMA CONSULT
            </Heading>
            <Text >Expertise et Solutions Télécom</Text>
          </Stack>

          <Flex
            alignItems={{ base: "flex-start", md: "center" }}
            justifyContent="center"
            flexDirection={{ base: "column", md: "row" }}
            mt={{ base: "5", md: 0 }}
            wrap="wrap"
          >
            {menuItems.map(({ id, label, path }) => (
              <Link
                key={id}
                as={NextLink}
                href={path}
                marginRight={id === 6 ? 0 : "30px"}
                marginBottom={id === 6 ? 0 : "1"}
                fontWeight={{ base: "none", md: "bold" }}
              >
                {label}
              </Link>
            ))}
          </Flex>
        </SimpleGrid>

        <Flex
          borderTop="2px solid #1d1d1f"
          pt="5"
          justify="space-between"
          flexDirection={{ base: "column", md: "column", lg: "row" }}
        >
          <Stack>
            <Heading fontSize="lg" color="#1d1d1f">Adresse</Heading>
            <Text color="#FFFFF">
              66 avenue des Champs Elysées 
            </Text>
            <Text color="#FFFFF">75008 PARIS</Text>
          </Stack>
          <Stack mt={{ base: "5", md: "5", lg: 0 }}>
            <Heading fontSize="lg" color="#F78719">Contact</Heading>
            <Text color="#FFFFF">
              <a href="mailto:contact@csmaconsult.com">
                contact@csmaconsult.com
              </a>
            </Text>
            <Text color="#FFFFF">+33 1 88 61 10 87</Text>
          </Stack>

          <HStack spacing="3" mt={{ base: "5", md: "5", lg: 0 }}>
            {socialLogo.map(({ id, logo, social }) => (
              <Link key={id} as={NextLink} href={social} 
              borderRadius="full" 
              p="2" 
              _hover={{ bg: "#F78719" }} 
              bg="#F78719">
                <NextImage src={logo} alt="" width={30} />
              </Link>
            ))}
          </HStack>
        </Flex>

        <HStack justifyContent="center" mt="10" spacing="5" flexWrap="wrap">
          {footerMenu.map(({ id, label, path }) => (
            <Box key={id}>
              {id < 2 ? (
                <Text fontWeight="bold">
                  © {new Date().getFullYear()} {label}
                </Text>
              ) : (
                <Link href={path} fontWeight="bold" textTransform="uppercase">
                  {label}
                </Link>
              )}
            </Box>
          ))}
        </HStack>
      </Container>
    </Box>
  )
}
