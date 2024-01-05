import Layout from '@app/app/layout/layout.page'
import { bureauData } from '@app/app/lib/static-data/pages/bureau-etudes'
import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'

export default function BureauView() {
  return (
    <Layout>
      <Container maxW="container.xl" my="20">
        <VStack spacing="5">
          <Heading textTransform="uppercase">Bureau d’etudes</Heading>
          <Text
            textAlign="center"
            w={{ base: 'normal', md: 'inherit', lg: '600px' }}
            lineHeight="1.5"
            color="rgba(107,114,128,1)"
          >
            Notre expertise en intégration SIG et en audit d’Infrastructures
            assure la robustesse des référentiels d’infrastructures optiques.
          </Text>
        </VStack>

        <Container maxW="container.lg" mt="20">
          {bureauData.map(
            ({ id, img, title, firstDescr, secondDescr, linkText }) => (
              <SimpleGrid
                key={id}
                spacing="10"
                columns={{ base: 1, md: 1, lg: 2 }}
                alignItems="center"
              >
                <Box borderRadius="xl" overflow="hidden">
                  <Image src={img} alt={title} />
                </Box>
                <VStack align="start" spacing="5">
                  <Heading>{title}</Heading>
                  <Text fontSize="15px">{firstDescr}</Text>
                </VStack>
              </SimpleGrid>
            ),
          )}

          {bureauData.map(
            ({ id, img, title, firstDescr, secondDescr, linkText }) => (
              <SimpleGrid
                key={id}
                spacing="10"
                columns={{ base: 1, md: 1, lg: 2 }}
                alignItems="center"
                mt="20"
              >
                <VStack align="start" spacing="5">
                  <Heading>{title}</Heading>
                  <Text fontSize="15px">{firstDescr}</Text>
                </VStack>
                <Box borderRadius="xl" overflow="hidden">
                  <Image src={img} alt={title} />
                </Box>
              </SimpleGrid>
            ),
          )}
        </Container>
      </Container>
    </Layout>
  )
}
