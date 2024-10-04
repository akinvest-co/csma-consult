import { Metadata, ResolvingMetadata } from "next"
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
import AddToCartButton from "@app/app/components/addToCartButton/cartButton"

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { data: product } = await getProduct(params.slug)
  return {
    title: product.attributes.name,
  }
}

export default async function Product({
  params,
}: {
  params: { slug: string }
}) {
  const { data: product } = await getProduct(params.slug)

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
              src={product.attributes.image.data[0].attributes.url}
              alt=""
              fill
              priority
            />
          </Box>
          <VStack align="start" spacing="5">
            <NextLink
              href={`/produits/category/${product.attributes.product_categories.data[0].attributes.slug}`}
            >
              <Text color="#0b6999" fontSize="sm">
                {product.attributes.product_categories.data[0].attributes.name}
              </Text>
            </NextLink>
            <Heading>{product.attributes.name}</Heading>
            <BlocksRenderer content={product.attributes.details} />
            <AddToCartButton product={product} size="xl" />
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

                  {product.attributes.sheet?.data?.attributes.url ? (
                    <Link
                      href={product.attributes.sheet?.data?.attributes.url}
                      download={product.attributes.name}
                      textDecor="underline"
                    >
                      Télécharger le fichier PDF
                    </Link>
                  ) : (
                    <Text>Fiche produit indisponible</Text>
                  )}
                </HStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </Layout>
  )
}
