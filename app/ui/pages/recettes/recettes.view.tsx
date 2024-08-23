import Layout from "@app/app/layout/layout.page"
import {
  Container,
  SimpleGrid,
  VStack,
  Text,
  Image,
  Box,
  Heading,
} from "@chakra-ui/react"

export default function RecettesView() {
  return (
    <Layout>
      <Container maxW="container.xl" my="20">
        <SimpleGrid
          columns={{ base: 1, md: 1, lg: 2 }}
          spacing="20"
          alignItems="center"
        >
          <VStack spacing="5" align="start">
            <Heading>Réception et Mise en Service</Heading>
            <Text lineHeight="1.7" fontSize="16px">
              Lors de la phase de réception, nous nous engageons à assurer la
              conformité de vos installations aux règles en vigueur. Notre
              équipe réalise une vérification méticuleuse pour garantir que
              chaque composant respecte les normes établies. Des tests
              approfondis sont ensuite effectués pour valider le bon
              fonctionnement de l'ensemble. La prise en main des équipements est
              réalisée avec soin, comprenant une validation complète et une mise
              en service en mode isolé. Cette approche minutieuse vise à assurer
              une transition fluide vers la phase opérationnelle.
            </Text>
          </VStack>

          <Box>
            <Image
              src="/images/recette.jpeg"
              alt="Études et Ingénierie"
              borderRadius="xl"
            />
          </Box>
        </SimpleGrid>

        <Text mt="20" lineHeight="1.7" fontSize="16px">
          Pour la mise en service, nous suivons des processus prédéfinis pour
          garantir une exécution cohérente et efficace. L'intégration dans
          l'architecture existante est réalisée avec précision pour une prise de
          rôle optimale de vos installations. Notre équipe assure la gestion et
          le suivi attentif de la bascule de trafic, veillant à une transition
          fluide. La validation finale est effectuée avec rigueur, et le
          procès-verbal de constat est signé pour officialiser la réussite de la
          mise en service. Faites confiance à notre approche méthodique pour
          assurer la fiabilité et la performance de vos installations tout au
          long du processus de réception et de mise en service.
        </Text>
        <Box boxSize="100%" mt="10">
          <Image
            src="/images/recet.png"
            w="100%"
            h="500px"
            objectFit="cover"
            alt="Études et Ingénierie"
            borderRadius="xl"
          />
        </Box>
      </Container>
    </Layout>
  )
}
