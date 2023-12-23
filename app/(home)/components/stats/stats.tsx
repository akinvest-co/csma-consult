import { dataStats } from "@app/app/lib/static-data/home/stats";
import { Box, Container, SimpleGrid, VStack, Text } from "@chakra-ui/react";

const Stats = () => {
  return (
    <Box bg="#1799cf" color="white">
      <Container maxW="container.lg">
        <SimpleGrid
          w="full"
          columns={{ base: 1, md: 2, lg: 4 }}
          spacing={{ base: "0", md: "10", lg: "10" }}
        >
          {dataStats.map(({ id, description, stats }) => (
            <VStack
              my="10"
              align={{ base: "center", lg: "start" }}
              spacing="2"
              key={id}
              borderRight={{
                base: "none",
                md: "none",
                lg:
                  id === 1 || id === 2 || id === 3 ? "2px solid white" : "none",
              }}
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
  );
};

export default Stats;
