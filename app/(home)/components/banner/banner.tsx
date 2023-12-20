import { data } from "@lib/static-data/banner";
import {
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Button,
  Box,
  Container,
} from "@chakra-ui/react";
import Image from "next/image";

import NextLink from "next/link";

const Banner = () => {
  return (
    <Box>
      <Container maxW="container.xl" my="20">
        {data.map(({ id, title, intro, image }) => (
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing="20"
            alignItems="center"
            key={id}
          >
            <VStack
              spacing="8"
              align={{ md: "center", lg: "start" }}
              textAlign={{ base: "center", lg: "left" }}
            >
              <Heading
                lineHeight={{
                  base: "shorter",
                  md: "shorter",
                  lg: "short",
                }}
                size={{ base: "2xl", md: "3xl" }}
              >
                {title}
              </Heading>

              <Text fontSize={{ base: "lg", md: "xl" }} lineHeight="1.7">
                {intro}
              </Text>

              <Button
                size="xl"
                as={NextLink}
                href="/products"
                letterSpacing="1px"
                textTransform="uppercase"
                bg="#1799cf"
                _hover={{ bg: "#0c84bd" }}
                color="#fff"
                fontSize="1rem"
                py="1rem"
                px="2rem"
              >
                Voir Nos Solutions
              </Button>
            </VStack>

            <Box>
              <Image
                src={image}
                alt="Illustration Banner"
                placeholder="blur"
                priority
                width={450}
                height={450}
              />
            </Box>
          </SimpleGrid>
        ))}
      </Container>
    </Box>
  );
};

export default Banner;
