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

export default function AuditView() {
  return (
    <Layout>
      <Container maxW="container.xl" my="20">
        <SimpleGrid
          columns={{ base: 1, md: 1, lg: 2 }}
          spacing="20"
          alignItems="center"
        >
          <VStack spacing="5" align="start">
            <Heading>Audit d’Infrastructures Optiques</Heading>
            <Text lineHeight="1.7" fontSize="16px">
              Dans le domaine des infrastructures optiques, nous offrons des
              services spécialisés allant de l'audit détaillé de câbles à
              l'examen minutieux des boîtes de protection d'épissures. Notre
              équipe réalise des remontées d'informations précises et élabore
              des plans de boîtes conformes aux normes établies. La mise à jour
              régulière des systèmes d'information géographique (SIG) en
              fonction des remontées terrain garantit une cartographie précise
              et à jour de vos infrastructures optiques. En outre, nous
              effectuons des opérations de remise en conformité rigoureuses,
              suivant les règles prédéfinies, pour assurer la fiabilité et la
              conformité de vos installations optiques. Faites confiance à notre
              expertise pour des interventions ciblées et des solutions
              optimales dans le domaine des infrastructures optiques.
            </Text>
          </VStack>

          <Box>
            <Image
              src="/images/audit.jpeg"
              alt="Études et Ingénierie"
              borderRadius="xl"
            />
          </Box>
        </SimpleGrid>

        <Text mt="20" lineHeight="1.7" fontSize="16px">
          Notre expertise s'étend également au domaine du génie civil, avec des
          services spécialisés tels que la détection et le relevé précis de
          fourreaux et chambres. Nous mettons en œuvre des tests approfondis de
          continuité et d'exploitabilité pour garantir la robustesse des
          infrastructures. En outre, notre équipe assure l'émission et la levée
          efficace de réserves, optimisant ainsi le processus d'intervention.
          Que ce soit pour des projets de construction, de rénovation ou
          d'entretien, notre engagement envers l'excellence garantit des
          résultats fiables et durables.
        </Text>
        <Box boxSize="100%" mt="10">
          <Image
            src="/images/reseau.jpeg"
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
