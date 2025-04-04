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
  menuItemsFooter,
  socialLogo,
} from "@app/app/components/menu-items/menu-items"

export default function Footer() {
  return (
    <Box as="footer" bg="#07677a" w="full" color="#c8cbce">
    <Container maxW="container.xl" py="10">
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        pb="5"
        flexDirection={{ md: "column", lg: "row" }}
      >
        <Stack>
          <Heading as="h1" fontSize="2xl" color="#F78719">
            CSMA CONSULT
          </Heading>
          <Text color="white" >Expertise et Solutions Télécom</Text>
        </Stack>

        <Flex
  alignItems={{ base: "flex-start", md: "center" }}
  justifyContent="center"
  flexDirection={{ base: "column", md: "row" }}
  mt={{ base: "5", md: 0 }}
  wrap="wrap"
>
  {menuItemsFooter.map(({ id, label, path }, index) => (
    <Box key={id} display="flex" alignItems="center">
      <Link
        as={NextLink}
        color="#F78719"
        href={path}
        marginLeft={id === 6 ? 0 : "10px"}
        marginBottom={id === 6 ? 0 : "1"}
        fontWeight={{ base: "none", md: "bold" }}
      >
        {label}
      </Link>

      
      {index < menuItemsFooter.length - 1 && (
        <Box
          borderRight="2px solid"
          borderColor="gray.300" 
          height="20px" 
          mx={3} 
          display={{ base: "none", md: "block" }} 
        />
      )}
    </Box>
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
          <Heading fontSize="lg" color="#F78719">Adresse</Heading>
          <Text color="white" >
            66 avenue des Champs Elysées 
          </Text>
          <Text  color="white">75008 PARIS</Text>
        </Stack>
        <Stack mt={{ base: "5", md: "5", lg: 0 }}>
          <Heading fontSize="lg" color="#F78719">Contact</Heading>
          <Text color="white">
            <a href="mailto:contact@csmaconsult.com">
              contact@csmaconsult.com
            </a>
          </Text>
          <Text color="white" >+33 1 88 61 10 87</Text>
        </Stack>
      {/*
        <HStack spacing="3" mt={{ base: "5", md: "5", lg: 0 }} >
          {socialLogo.map(({ id, logo, social }) => (
            <Link key={id} as={NextLink} href={social} bg="#F78719">
              <NextImage src={logo} alt="" width={30}  />
            </Link>
          ))}
        </HStack>
        */}
      </Flex>

      <HStack justifyContent="center" mt="10" spacing="5" flexWrap="wrap">
  {footerMenu.map(({ id, label, path }, index) => (
    <Box key={id} display="flex" alignItems="center">
      {id < 2 ? (
        <Text fontWeight="bold" color="#F78719">
          © {new Date().getFullYear()} {label}
        </Text>
      ) : (
        <Link href={path} fontWeight="bold" color="#F78719" textTransform="uppercase">
          {label}
        </Link>
      )}

   
      {index < footerMenu.length - 1 && (
        <Box
          borderRight="2px solid"
          borderColor="gray.300" 
          height="20px" 
          mx={3} 
        />
      )}
    </Box>
  ))}
</HStack>
    </Container>
  </Box>
  )
}
