"use client"

import Layout from "@app/app/layout/layout.page"
import {
  bureauDataCentre,
  bureauDataInfr,
  bureauDataIng,
  bureauDataRecettes,
} from "@app/app/lib/static-data/pages/bureau-etudes"
import { Link } from "@chakra-ui/next-js"
import NextLink from "next/link"

import {
  Container,
  Heading,
  Box,
  Text,
  VStack,
  SimpleGrid,
  Button,
  Flex,
} from "@chakra-ui/react"
import Image from "next/image"

export default function BureauView() {
  return (
    <Layout>
      <Container maxW="container.xl" mt="10">
        <VStack align="center" spacing="5">
          <Heading letterSpacing="1px">BUREAU D’ÉTUDES</Heading>
          <Text
            textAlign="center"
            w={{ base: "100%", md: "100%", lg: "600px" }}
            lineHeight="1.6"
            fontSize={{ base: "16px", md: "18px" }}
          >
            Nos équipes veille à la pérennité et la fiabilité des informations
            intégrées. En coordination avec les équipes terrains, chaque étape
            est soigneusement orchestrée.
          </Text>
        </VStack>
      </Container>
      <Box bgColor="#1799cf">
        <Container maxW="container.xl">
          {bureauDataIng.map(({ id, img, title, descr, linkText }) => (
            <SimpleGrid
              columns={{ base: 1, md: 1, lg: 2 }}
              my="28"
              key={id}
              spacing="20"
              alignItems="center"
              py="20"
            >
              <Box borderRadius="xl" overflow="hidden">
                <Image src={img} alt={title} placeholder="blur" />
              </Box>
              <VStack
                align={{ md: "center", lg: "start" }}
                spacing="10"
                color="white"
              >
                <Heading
                  letterSpacing="1px"
                  fontSize={{ base: "2xl", md: "2xl", lg: "3xl" }}
                  textAlign={{ base: "center", md: "center", lg: "left" }}
                >
                  {title}
                </Heading>
                <Text
                  lineHeight="1.7"
                  fontSize={{ md: "md", lg: "lg" }}
                  textAlign={{ base: "center", md: "center", lg: "left" }}
                >
                  {descr}
                </Text>
                <Link
                  href="#"
                  fontWeight="bold"
                  letterSpacing="1px"
                  textTransform="uppercase"
                  textAlign={{ base: "center", md: "center", lg: "left" }}
                >
                  {linkText} &rArr;
                </Link>
              </VStack>
            </SimpleGrid>
          ))}
        </Container>
      </Box>

      <Container maxW="container.xl">
        {bureauDataInfr.map(({ id, img, title, descr, linkText }) => (
          <SimpleGrid
            columns={{ base: 1, md: 1, lg: 2 }}
            key={id}
            spacing="20"
            alignItems="center"
          >
            <VStack align={{ md: "center", lg: "start" }} spacing="10">
              <Heading
                letterSpacing="1px"
                fontSize={{ base: "2xl", md: "2xl", lg: "3xl" }}
                textAlign={{ base: "center", md: "center", lg: "left" }}
              >
                {title}
              </Heading>
              <Text
                lineHeight="1.7"
                fontSize={{ md: "md", lg: "lg" }}
                textAlign={{ base: "center", md: "center", lg: "left" }}
              >
                {descr}
              </Text>
              <Link
                href="#"
                fontWeight="bold"
                letterSpacing="1px"
                textTransform="uppercase"
                textAlign={{ base: "center", md: "center", lg: "left" }}
              >
                {linkText} &rArr;
              </Link>
            </VStack>

            <Box
              borderRadius="xl"
              overflow="hidden"
              order={{ base: "-1", md: "-1", lg: "1" }}
            >
              <Image src={img} alt={title} placeholder="blur" />
            </Box>
          </SimpleGrid>
        ))}
      </Container>

      <Container maxW="container.xl" my="28">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          flexDir={{ base: "column", md: "column", lg: "row" }}
        >
          <VStack
            spacing="5"
            align="start"
            mb={{ base: "7", md: "7", lg: "0" }}
          >
            <Heading textAlign={{ base: "center", md: "left" }}>
              Gestion d’Infrastructures télécom privées
            </Heading>
            <Text textAlign={{ base: "center", md: "center", lg: "left" }}>
              Des mises à jour en temps réel à la supervision 24/7/365 des
              infrastructures fibres optiques, nous garantissons une gestion
              agile et fiable, respectant les normes les plus strictes de
              l'industrie.
            </Text>
          </VStack>

          <Button
            size="xl"
            w={{ base: "100%", md: "50%" }}
            as={NextLink}
            href="/contact"
            letterSpacing="1px"
            textTransform="uppercase"
            bg="#1799cf"
            _hover={{ bg: "#0c84bd" }}
            color="#fff"
            fontSize="1rem"
            py="1rem"
            px="2rem"
          >
            Nous Contacter
          </Button>
        </Flex>
      </Container>

      <Box bgColor="#1799cf">
        <Container maxW="container.xl">
          {bureauDataRecettes.map(({ id, img, title, descr, linkText }) => (
            <SimpleGrid
              columns={{ base: 1, md: 1, lg: 2 }}
              my="28"
              key={id}
              spacing="20"
              alignItems="center"
              py="20"
            >
              <Box borderRadius="xl" overflow="hidden">
                <Image src={img} alt={title} placeholder="blur" />
              </Box>
              <VStack
                align={{ md: "center", lg: "start" }}
                spacing="10"
                color="white"
              >
                <Heading
                  letterSpacing="1px"
                  fontSize={{ base: "2xl", md: "2xl", lg: "3xl" }}
                  textAlign={{ base: "center", md: "center", lg: "left" }}
                >
                  {title}
                </Heading>
                <Text
                  lineHeight="1.7"
                  fontSize={{ md: "md", lg: "lg" }}
                  textAlign={{ base: "center", md: "center", lg: "left" }}
                >
                  {descr}
                </Text>
                <Link
                  href="#"
                  fontWeight="bold"
                  letterSpacing="1px"
                  textTransform="uppercase"
                  textAlign="center"
                >
                  {linkText} &rArr;
                </Link>
              </VStack>
            </SimpleGrid>
          ))}
        </Container>
      </Box>

      <Container maxW="container.xl" mb="20">
        {bureauDataCentre.map(({ id, img, title, descr, linkText }) => (
          <SimpleGrid
            columns={{ base: 1, md: 1, lg: 2 }}
            key={id}
            spacing="20"
            alignItems="center"
          >
            <VStack align={{ md: "center", lg: "start" }} spacing="10">
              <Heading
                letterSpacing="1px"
                fontSize={{ base: "2xl", md: "2xl", lg: "3xl" }}
                textAlign={{ base: "center", md: "center", lg: "left" }}
              >
                {title}
              </Heading>
              <Text
                lineHeight="1.7"
                fontSize={{ md: "md", lg: "lg" }}
                textAlign={{ base: "center", md: "center", lg: "left" }}
              >
                {descr}
              </Text>
              <Link
                href="#"
                fontWeight="bold"
                letterSpacing="1px"
                textTransform="uppercase"
                textAlign={{ base: "center", md: "center", lg: "left" }}
              >
                {linkText} &rArr;
              </Link>
            </VStack>

            <Box
              borderRadius="xl"
              overflow="hidden"
              order={{ base: "-1", md: "-1", lg: "1" }}
            >
              <Image src={img} alt={title} placeholder="blur" />
            </Box>
          </SimpleGrid>
        ))}
      </Container>
    </Layout>
  )
}
