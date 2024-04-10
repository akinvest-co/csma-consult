import Layout from "@app/app/layout/layout.page"
import { Container, Heading } from "@chakra-ui/react"

export default function CartView() {
  return (
    <Layout>
      <Container maxW="container.xl">
        <Heading>cart Items</Heading>
      </Container>
    </Layout>
  )
}
