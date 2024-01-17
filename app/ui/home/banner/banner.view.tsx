import { bannerData } from "@app/app/lib/static-data/home/banner"
import {
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Button,
  Box,
  Container,
} from "@chakra-ui/react"
import Image from "next/image"

import NextLink from "next/link"

const BannerView = () => {
  return (
    <Box>
      <Container maxW="container.xl" mt="20" mb="28">
        {bannerData.map(({ id, title, intro, image }) => (
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

            <Box borderRadius="md" overflow="hidden">
              <Image
                src={image}
                alt="Illustration Banner"
                placeholder="blur"
                priority
              />
            </Box>
          </SimpleGrid>
        ))}
      </Container>
    </Box>
  )
}

export default BannerView
