import { featuresData } from "@app/app/lib/static-data/home/features"
import {
  Container,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  HStack,
  Box,
} from "@chakra-ui/react"
import Image from "next/image"

const FeaturesView = () => {
  return (
    <Container maxW="container.xl" my="10">
      <VStack align="center">
        <Heading
          size="xl"
          letterSpacing={{ base: "0", md: "1px" }}
          textAlign="center"
        >
          Nos atouts
        </Heading>
        <Box width="70px" height="5px" bg="#F8861A" mx="auto" mt="2"   />
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} mt="20">
        {featuresData.map(({ id, title, icon, description }) => (
          <VStack
            align="start"
            key={id}
            p="2rem"
            spacing={5}
            borderRight={{
              base: "none",
              md: id % 2 !== 0 ? "1.8px dashed rgb(229, 231, 235)" : "none",
              lg:
                id === 1 || id === 2 || id === 4 || id === 5
                  ? "1.8px dashed #F7871A"
                  : "none",
            }}
            borderBottom={{
              base:
                id === 1 || id === 2 || id === 3 || id === 4 || id === 5
                  ? "1.8px dashed #F7871A"
                  : "none",
              md:
                id === 1 || id === 2 || id === 3 || id === 4
                  ? "1.8px dashed #F7871A"
                  : "none",
              lg:
                id === 1 || id === 2 || id === 3
                  ? "1.8px dashed #F7871A"
                  : "none",
            }}
          >
            <HStack spacing={4}>
              <Box
                border="2px dashed #F7871A"
                bg="#e1f2fd"
                padding={2}
                borderRadius="full"
                w="48px"
                h="48px"
                textAlign="center"
              >
                <Image src={icon} alt="" />
              </Box>
              <Heading fontSize="2xl" fontWeight="bold">
                {title}
              </Heading>
            </HStack>
            <Text lineHeight="2" color="rgba(107,114,128,1)">
              {description}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default FeaturesView
