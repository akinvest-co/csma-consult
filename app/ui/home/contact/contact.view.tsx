import {
  Container,
  Text,
  Heading,
  Box,
  Button,
  SimpleGrid,
} from "@chakra-ui/react"

const ContactView = () => {
  return (
    <Container maxW="container.lg" mb="28">
      <SimpleGrid columns={2} spacing="20">
        <Box>
          <Heading>Besoin de solutions haute performance</Heading>
        </Box>

        <Box>
          <Text lineHeight="1.7" mb="5">
            Découvrez comment nos produits peuvent optimiser votre
            infrastructure informatique. Nous sommes là pour répondre à toutes
            vos questions.
          </Text>

          <Button
            textTransform="uppercase"
            display={{ base: "none", md: "inherit" }}
            fontWeight="600"
            bg="#1799cf"
            _hover={{ bg: "#0c84bd" }}
            color="#fff"
            fontSize="1rem"
          >
            Contactez-nous
          </Button>
        </Box>
      </SimpleGrid>
    </Container>
  )
}

export default ContactView
