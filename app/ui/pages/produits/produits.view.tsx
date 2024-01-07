import Layout from "@app/app/layout/layout.page"
import { blogData } from "@app/app/lib/static-data/pages/blog"
import { BlogItem } from "@app/app/lib/static-data/pages/blog/definitions"
import { Container, Heading, Box, Select, SimpleGrid } from "@chakra-ui/react"
import Image from "next/image"

export default function ProduitsView() {
  return (
    <Layout>
      <Container maxW="container.xl" mt="10">
        <Box>
          <Heading size="2xl">Solutions Matérielles</Heading>
        </Box>
      </Container>

      <Box bgColor="#1799cf" py="10" my="10">
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

      <Container maxW="container.xl" mb="20">
        <SimpleGrid columns={{ sm: 2, md: 2, lg: 3 }} spacing="40px">
          {blogData.map((blog: BlogItem, index: number) => (
            <Box
              key={index}
              padding="20px"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="rgb(145 158 171 / 24%) 0px 0px 2px 0px,rgb(145 158 171 / 24%) 0px 16px 32px -4px"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                objectFit="cover"
                style={{
                  borderRadius: "5px",
                  overflow: "hidden",
                }}
              />
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
