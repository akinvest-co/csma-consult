import Layout from "@app/app/layout/layout.page"
import { Container } from "@chakra-ui/react"
import { Heading } from "tabler-icons-react"

export default function AuditView() {
  return (
    <Layout>
      <Container maxW="container.xl">
        <Heading>Page Audit InfrastructureS</Heading>
      </Container>
    </Layout>
  )
}
