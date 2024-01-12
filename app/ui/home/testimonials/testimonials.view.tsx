import { testimonialsData } from "@app/app/lib/static-data/home/testimonials"
import {
  Container,
  SimpleGrid,
  VStack,
  Text,
  Heading,
  Box,
  Image,
  HStack,
} from "@chakra-ui/react"
import styled from "styled-components"

const TestimonialsView = () => {
  return (
    <Box
      bgGradient="linear(-90deg, rgba(255, 254, 252, 0.5) 50%, #F7FAFC 100%)"
      my="28"
      py="20"
    >
      <Container maxW="container.xl">
        {testimonialsData.map(
          ({ id, title, quote, imageProfile, nomDirecteur, role }) => (
            <SimpleGrid
              columns={{ base: 1, md: 1, lg: 2 }}
              spacing="20"
              //   alignItems="center"
              key={id}
            >
              <VStack align={{ base: "center", md: "start" }} spacing="6">
                <Heading size="2xl" letterSpacing="1px" lineHeight="short">
                  {title}
                </Heading>
              </VStack>

              <VStack align="start" spacing="6">
                <BlockQuote>{quote}</BlockQuote>

                <HStack spacing="5">
                  <Image
                    borderRadius="full"
                    boxSize="50px"
                    src={imageProfile}
                    alt="Dan Abramov"
                    loading="lazy"
                  />
                  <Box fontSize="md">
                    <Text fontWeight="bold">{nomDirecteur}</Text>
                    <Text color="rgba(107,114,128,1)">{role}</Text>
                  </Box>
                </HStack>
              </VStack>
            </SimpleGrid>
          ),
        )}
      </Container>
    </Box>
  )
}

export default TestimonialsView

const BlockQuote = styled.div`
  font-size: 17px;
  font-style: italic;
  border-top: 1px solid #bde6fa;
  border-bottom: 1px solid #bde6fa;
  position: relative;
  padding: 35px 0;
  line-height: 1.7rem;

  &:before {
    position: absolute;
    content: open-quote;
    color: #41bcef;
    font-size: 10rem;
    line-height: 0;
    top: 43px;
  }

  &:after {
    position: absolute;
    content: close-quote;
    color: #41bcef;
    font-size: 10rem;
    line-height: 0;
    bottom: -43px;
    right: 30px;
  }
`
