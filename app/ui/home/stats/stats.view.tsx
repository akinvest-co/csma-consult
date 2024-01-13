import { statsData } from "@app/app/lib/static-data/home/stats"
import { Box, Container, SimpleGrid, VStack, Text } from "@chakra-ui/react"

const StatsView = () => {
  return (
    <Box bg="#44C4EE" color="white">
      <Container maxW="container.lg">
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          spacing={{ base: "0", md: "10", lg: "10" }}
          justifyContent="center"
        >
          {statsData.map(({ id, description, stats }) => (
            <VStack
              my="10"
              align={{ base: "center", lg: "center" }}
              spacing="2"
              key={id}
            >
              <Text fontSize="3xl" fontWeight="bold" textTransform="uppercase">
                {stats}
              </Text>
              <Text>{description}</Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default StatsView
