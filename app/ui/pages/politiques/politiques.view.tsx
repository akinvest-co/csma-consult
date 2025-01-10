import Layout from "@app/app/layout/layout.page"
import { Container, Heading,Stack,Text, Box} from "@chakra-ui/react"

export default function PolitiquesView() {
  return (
    <Layout>
      <Container maxW="container.xl">
        <Box bg="gray.50" py={10}>
      <Container maxW="container.md" bg="white" boxShadow="md" p={8} borderRadius="md">
        <Heading as="h1" size="md" mb={6} textAlign="center" color="orange.500">
         Politique de confidentialité de CSMA CONSULT
        </Heading>

        <Stack spacing={6}>
          <Box>
            <Heading as="h2" size="md" color="orange.500" mb={2}>
              Adresse
            </Heading>
            <Text>66 avenue des Champs Elysées</Text>
            <Text>75008 PARIS</Text>
            <Text>France</Text>
          </Box>

          <Box>
            <Heading as="h2" size="md" color="orange.500" mb={2}>
              Contact
            </Heading>
            <Text>+33 1 88 61 10 87</Text>
            <Text>
              <a href="mailto:contact@csmaconsult.com" style={{ textDecoration: "underline" }}>
              contact@csmaconsult.com
              </a>
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="md" color="orange.500" mb={2}>
              Hébergeur du site
            </Heading>
            <p>les insformations de l'hebergeur</p>
            <p>les insformations de l'hebergeur</p>
            <p>les insformations de l'hebergeur</p>
            <Text>
              Le site est accessible en tout endroit 24h/24, 7J/7 sauf en cas de force majeure,
              interruption programmée ou non et pouvant découler d&apos;une maintenance.
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="md" color="orange.500" mb={2}>
              Propriété intellectuelle
            </Heading>
            <Text>
              Le site CSMA CONSULT et l&apos;ensemble de son contenu  sont des
              droits de propriété intellectuelle garantis par les lois de la France. Il est interdit de
              reproduire, représenter, modifier, publier, transmettre ou dénaturer, entièrement ou
              partiellement, le site ou son contenu, par toute méthode et sur tout support.
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="md" color="orange.500" mb={2}>
              Données personnelles
            </Heading>
            <Text>
              La confidentialité des informations personnelles fournies par les utilisateurs de la
              plate-forme est un engagement de CSMA CONSULT. Les informations recueillies ne seront
              utilisées que pour nos services et ne seront en aucun cas divulguées à des tiers sans
              le consentement préalable de l&apos;utilisateur.
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="md" color="orange.500" mb={2}>
              Responsabilités
            </Heading>
            <Text>
              La plateforme de CSMA CONSULT s&apos;efforce de fournir des informations fiables et à jour,
              mais ne peut être tenue pour responsable d&apos;éventuelles erreurs, omissions ou
              indisponibilités. L&apos;utilisateur est seul responsable de l&apos;utilisation du site.
            </Text>
          </Box>
        </Stack>
      </Container>
    </Box>
      </Container>
    </Layout>
  )
}
