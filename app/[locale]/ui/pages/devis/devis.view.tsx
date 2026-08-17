import Layout from "@app/app/layout/layout.page"
import { Container, SimpleGrid } from "@chakra-ui/react"
import DevisForm from "./devis-form"
import DevisInfos from "./Devis-info"


const DevisView = () => {
  return (
    <Layout>
      <Container maxW="container.xl">
        <SimpleGrid
          columns={{ base: 1, md: 1, lg: 2 }}
          spacing="20"
          pt="24"
          pb="28"
          alignItems="center"
        >
          <DevisInfos />
          <DevisForm />
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default DevisView
