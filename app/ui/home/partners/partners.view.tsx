import { partnersData } from '@app/app/lib/static-data/home/partners'
import {
  Container,
  SimpleGrid,
  Box,
  VStack,
  Heading,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'

const PartnersView = () => {
  return (
    <Container maxW="container.xl" mb="28">
      {partnersData.map(({ id, title, intro, brandLogo }) => (
        <SimpleGrid
          columns={{ base: 1, md: 1, lg: 5 }}
          spacing="10"
          justifyContent="space-between"
          alignItems="center"
          key={id}
        >
          <VStack align="start">
            <Heading
              size={{ base: '2xl', md: '2xl', lg: 'xl' }}
              letterSpacing="1px"
              lineHeight="short"
            >
              {title}
            </Heading>
            <Text color="rgba(107,114,128,1)">{intro}</Text>
          </VStack>

          {brandLogo.map(({ id, image }) => (
            <VStack key={id}>
              <Image src={image} alt="brand logo" placeholder="blur" priority />
            </VStack>
          ))}
        </SimpleGrid>
      ))}
    </Container>
  )
}

export default PartnersView
