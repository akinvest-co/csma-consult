import Layout from '@app/app/layout/layout.page'
import { Container, SimpleGrid } from '@chakra-ui/react'
import ContactInfo from './contact-info'
import ContactForm from './contact-form'

const ContactView = () => {
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
          <ContactInfo />
          <ContactForm />
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default ContactView
