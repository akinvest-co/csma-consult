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

export default function SupervisionView() {
  return (
    <Layout>
      <Container maxW="container.xl" my="20">
        <SimpleGrid
          columns={{ base: 1, md: 1, lg: 2 }}
          spacing="20"
          alignItems="center"
        >
          <VStack spacing="5" align="start">
            <Heading>Centre de Supervision </Heading>
            <Text lineHeight="1.7" fontSize="16px">
              Dans le cadre de nos services, nous assurons une surveillance
              continue de vos activités, englobant le monitoring attentif de vos
              services actifs et passifs. En cas d'incidents ou d'interventions
              nécessaires, notre équipe réagit promptement, garantissant ainsi
              la stabilité de vos opérations. La prise en main experte de vos
              équipements, tels que CPE/PE, s'accompagne d'une capacité de
              dépannage à distance, permettant une gestion agile et efficace.
              Nous sommes également prêts à déclencher des équipes
              d'intervention au besoin, assurant ainsi une réponse rapide à
              toute situation.
            </Text>
          </VStack>

          <Box>
            <Image
              src="/images/centre.jpg"
              alt="Études et Ingénierie"
              borderRadius="xl"
            />
          </Box>
        </SimpleGrid>

        <Text mt="20" lineHeight="1.7" fontSize="16px">
          Découvrez la flexibilité de notre approche clientèle, avec la mise en
          place de processus de traitement simples et une formation continue
          pour nos équipes. Que ce soit pour faciliter la migration, gérer les
          aspects récurrents, ou absorber les pics de charge, nous offrons une
          solution complète et adaptée. Engagés dans une démarche d'amélioration
          continue, nous cherchons constamment à optimiser nos services pour
          vous offrir une expérience client toujours plus performante.
        </Text>
        <Box boxSize="100%" mt="10">
          <Image
            src="/images/centre1.jpg"
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
