import { featuresData } from "@app/app/lib/static-data/home/features";
import {
  Container,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  HStack,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";

const Features = () => {
  return (
    <Container maxW="container.xl" my="28">
      <VStack align="center">
        <Heading
          textTransform="uppercase"
          size="xl"
          letterSpacing={{ base: "0", md: "1px" }}
          textAlign="center"
        >
          Nos atouts
        </Heading>
        <Text color="#0b6999">Nos points forts</Text>
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
              md: id % 2 !== 0 ? "1px solid rgb(229, 231, 235)" : "none",
              lg:
                id === 1 || id === 2 || id === 4 || id === 5
                  ? "1px solid rgb(229, 231, 235)"
                  : "none",
            }}
            borderBottom={{
              base:
                id === 1 || id === 2 || id === 3 || id === 4 || id === 5
                  ? "1px solid rgb(229, 231, 235)"
                  : "none",
              md:
                id === 1 || id === 2 || id === 3 || id === 4
                  ? "1px solid rgb(229, 231, 235)"
                  : "none",
              lg:
                id === 1 || id === 2 || id === 3
                  ? "1px solid rgb(229, 231, 235)"
                  : "none",
            }}
          >
            <HStack spacing={4}>
              <Box
                border="1px solid #bde6fa"
                bg="#e1f2fd"
                padding={2}
                borderRadius="full"
                w="48px"
                h="48px"
                textAlign="center"
              >
                {/* <Text>{icon}</Text> */}
              </Box>
              <Heading fontSize="2xl" fontWeight="bold">
                {title}
              </Heading>
            </HStack>
            <Text lineHeight="2" fontSize="md" color="rgba(107,114,128,1)">
              {description}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Features;
