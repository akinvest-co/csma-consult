import { partnersData } from "@app/app/lib/static-data/home/partners"
import {
  Container,
  VStack,
  Heading,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react"
import Image from "next/image"

const PartnersView = () => {
  return (
    <Container maxW="container.xl" mb="28">
      <VStack>
        <Heading
          textTransform="uppercase"
          size="xl"
          textAlign="center"
          letterSpacing="1px"
        >
          Services Partenaires
        </Heading>
        <Text
          textAlign="center"
          w={{ base: "normal", md: "inherit", lg: "600px" }}
          lineHeight="1.5"
          color="rgba(107,114,128,1)"
        >
          Succès et Safisfaction garantie
        </Text>
      </VStack>

      <Container mt="20" maxW="container.md">
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(4, 1fr)" }}
          alignItems="center"
          gap={5}
        >
          {partnersData.map((partner) => (
            <GridItem
              key={partner.id}
              rowSpan={{
                base: 1,
                md: partner.id === 1 || partner.id === 4 ? 2 : 1,
              }}
              colSpan={1}
              w={{ base: "50px", md: "90px" }}
              borderRadius="xl"
              overflow="hidden"
            >
              <Image src={partner.image} alt={partner.alt} placeholder="blur" />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Container>
  )
}

export default PartnersView
