"use client"

import Layout from "@app/app/layout/layout.page"
import { productsData } from "@app/app/lib/static-data/home/produits"
import {
  Container,
  Heading,
  Box,
  Select,
  SimpleGrid,
  HStack,
  Link,
  VStack,
  Text,
} from "@chakra-ui/react"
import Image from "next/image"

export default function ProduitsView() {
  return (
    <Layout>
      <Container maxW="container.xl" mt="10">
        <Box>
          <Heading size="2xl">Solutions Matérielles</Heading>
        </Box>
      </Container>
      <Box bgColor="#1799cf" py="10" mt="10">
        <Container maxW="container.xl">
          <Heading fontSize="2xl" mb="7" color="white">
            Par Catégories
          </Heading>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing="10">
            <Select placeholder="CDE & Convertisseur" bg="white">
              <option value="option1">Produits 1</option>
              <option value="option2">Produits 2</option>
              <option value="option3">Produits 3</option>
            </Select>
            <Select placeholder="Modules Optiques" bg="white">
              <option value="option1">Produits 1</option>
              <option value="option2">Produits 2</option>
              <option value="option3">Produits 3</option>
            </Select>
            <Select placeholder="Jarretiers & DAAC/AOC" bg="white">
              <option value="option1">Produits 1</option>
              <option value="option2">Produits 2</option>
              <option value="option3">Produits 3</option>
            </Select>
            <Select placeholder="XMUX & DEMUX" bg="white">
              <option value="option1">Produits 1</option>
              <option value="option2">Produits 2</option>
              <option value="option3">Produits 3</option>
            </Select>
          </SimpleGrid>
        </Container>
      </Box>
      <Container maxW="container.xl" my="20">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }}>
          {productsData.map(
            ({ id, imageProduct, categorie, nomMateriel, state, icon }) => (
              <VStack
                key={id}
                align="start"
                p="2rem"
                spacing="5"
                borderRight={{
                  base: "none",
                  md:
                    id === 4 || id === 8
                      ? "none"
                      : "1px solid rgb(229, 231, 235)",
                }}
                borderBottom={{
                  base: id < 8 ? "1px solid rgb(229, 231, 235)" : "none",
                  md: id < 5 ? "1px solid rgb(229, 231, 235)" : "none",
                }}
              >
                <Box
                  borderRadius="xl"
                  overflow="hidden"
                  bgColor="#f5f6f6"
                  position="relative"
                  padding="5"
                  h="230px"
                  w="100%"
                >
                  <Image
                    src={imageProduct}
                    fill
                    alt={nomMateriel}
                    placeholder="blur"
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.2s",
                    }}
                    priority
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)"
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "scale(1)"
                    }}
                  />
                </Box>
                <HStack
                  justify="space-between"
                  align="center"
                  w="full"
                  fontSize="0.7rem"
                >
                  <Text color="#0b6999">{categorie}</Text>
                  <Text>{state}</Text>
                </HStack>
                <HStack justify="space-between" align="center" w="full">
                  <Text fontWeight="900" letterSpacing="1px" fontSize="15px">
                    {nomMateriel}
                  </Text>
                  <Link href="/devis">
                    <Image src={icon} alt="" style={{ width: "25px" }} />
                  </Link>
                </HStack>
              </VStack>
            ),
          )}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
