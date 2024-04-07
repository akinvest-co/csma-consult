import Layout from "@app/app/layout/layout.page"
import { getProduct } from "@app/app/lib/api/products"
import { BlocksRenderer } from "@strapi/blocks-react-renderer"

import {
  Box,
  Container,
  Text,
  SimpleGrid,
  Heading,
  VStack,
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react"
import Image from "next/image"

export default async function product({
  params,
}: {
  params: { productId: number }
}) {
  const { data: product } = await getProduct(params.productId)

  return (
    <Layout>
      <Container maxW="container.lg" py="20">
        <SimpleGrid columns={2} spacing={20} alignItems="center">
          <Box
            borderRadius="xl"
            overflow="hidden"
            height="450px"
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
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </Layout>
  )
}
