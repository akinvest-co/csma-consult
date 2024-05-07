import Layout from "@app/app/layout/layout.page"
import { BlocksRenderer } from "@strapi/blocks-react-renderer"

import {
  Box,
  Container,
  Text,
  SimpleGrid,
  Heading,
  VStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Link,
  Tabs,
  HStack,
  Button,
} from "@chakra-ui/react"
import Image from "next/image"
import NextLink from "next/link"
import { getProduct } from "@app/app/lib/api/products/products"

export default async function product({
  params,
}: {
  params: { productId: number }
}) {
  const { data: product } = await getProduct(params.productId)

  return (
    <Layout>
      <Container maxW="container.lg" py="20">
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={20} alignItems="center">
          <Box
            borderRadius="xl"
            overflow="hidden"
            height={{ base: "300px", md: "450px" }}
            position="relative"
          >
            <Image
              src={product.attributes.image.data.attributes.url}
              alt=""
              fill
              priority
            />
          </Box>
          <VStack align="start" spacing="5">
            <Text color="#0b6999" fontSize="sm">
              {product.attributes.category.data.attributes.name}
            </Text>
            <Heading>{product.attributes.name}</Heading>
            <BlocksRenderer content={product.attributes.intro} />
            <Button
              size="xl"
              as={NextLink}
              href="/panier"
              letterSpacing="1px"
              w="100%"
              bg="#1799cf"
              _hover={{ bg: "#0c84bd" }}
              color="#fff"
              fontSize="1rem"
              p="1rem"
            >
              Ajouter au panier
            </Button>
          </VStack>
        </SimpleGrid>

        <Box mt="20">
          <Tabs>
            <TabList>
              <Tab>Description</Tab>
              <Tab>Fiche</Tab>
            </TabList>
            <TabPanels>
              <TabPanel mt="5">
                <BlocksRenderer content={product.attributes.details} />
              </TabPanel>
              <TabPanel mt="5">
                <HStack justify="space-between" width="100%">
                  <Heading as="h4" size={{ base: "sm", md: "md" }}>
                    Fiche du produit {product.attributes.name}
                  </Heading>

                  <Link
                    href={product.attributes.sheet.data.attributes.url}
                    download={product.attributes.name}
                    textDecor="underline"
                  >
                    Télécharger le fichier PDF
                  </Link>
                </HStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </Layout>
  )
}
