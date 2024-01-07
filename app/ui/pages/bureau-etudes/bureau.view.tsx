import Layout from "@app/app/layout/layout.page"
import { bureauData } from "@app/app/lib/static-data/pages/bureau-etudes"
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react"
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
