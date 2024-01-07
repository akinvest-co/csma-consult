import Layout from "@app/app/layout/layout.page"
import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import Image from "next/image"

export default function BureauView() {
  return (
    <Layout>
      <Container maxW="container.xl" my="20">
        <Heading>Page Bureau d'etudes</Heading>
      </Container>
    </Layout>
  )
}
