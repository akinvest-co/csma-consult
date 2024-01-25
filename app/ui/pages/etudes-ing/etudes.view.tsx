import Layout from "@app/app/layout/layout.page"
import {
  Box,
  Container,
  Image,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react"
// import Image from "next/image"

export default function EtudesIngVIew() {
  return (
    <Layout>
      <Container maxW="container.lg" my="20">
        <SimpleGrid
          columns={{ base: 1, md: 1, lg: 2 }}
          spacing="20"
          alignItems="center"
        >
          <VStack spacing="5" align="start">
            <Heading>Études et Ingénierie</Heading>
            <Text lineHeight="1.7" fontSize="16px">
              Notre entreprise se spécialise dans la gestion complète des
              dossiers d'intervention sur les infrastructures Orange. Cela
              englobe la gestion des dossiers d'accès (FCI) avec un suivi
              méticuleux et une clôture efficace. Nous sommes également
              compétents dans la mise à jour (MàJ), la TFX, et l'intégration en
              "live" pour assurer des opérations fluides. Le relevé précis des
              infrastructures existantes et de leur occupation est une de nos
              spécialités, garantissant une approche professionnelle à chaque
              étape.
            </Text>
          </VStack>

          <Box w="100%">
            <Image
              src="/images/banner.jpeg"
              alt="Études et Ingénierie"
              borderRadius="xl"
            />
          </Box>
        </SimpleGrid>

        <Text mt="20" lineHeight="1.7" fontSize="16px">
          Notre expertise s'étend à l'ingénierie d'architecture et de production
          de routes optiques. Nous réalisons des études Géomarketing (potentiel
          commercial) et des dimensionnements de capacités précis. La création
          de shapes dans Qgis et l'intégration SIG font partie de nos
          compétences, tout comme la conception de synoptiques et de routes
          optiques. Nous sommes également spécialisés dans l'intégration de
          solutions telles que NetGeo, GeoFibre et Networks, répondant ainsi aux
          exigences spécifiques de nos clients dans le domaine des réseaux de
          télécommunications sur support fibre optique. Faites confiance à notre
          expertise pour des interventions précises et des solutions
          d'ingénierie de pointe.
        </Text>
      </Container>
    </Layout>
  )
}
