import { bureauData } from "@app/app/lib/static-data/home/bureau-etudes"
import { Link } from "@chakra-ui/next-js"
import {
  Container,
  Flex,
  VStack,
  Heading,
  Text,
  Box,
  Divider,
} from "@chakra-ui/react"

export default function BureauView() {
  return (
    <Container maxW="container.lg" mb="28">
      <Flex flexDirection={{ base: "column", md: "column", lg: "row" }}>
        <Box flex="1">
          {bureauData.etudes.map(({ id, title, descr, linkText }, index) => (
            <VStack key={id} align="center" spacing="7">
              <Heading letterSpacing="1px">{title}</Heading>
              <Text lineHeight="1.7" textAlign="center" fontSize="16px">
                {descr}
              </Text>
              <Link
                href="#"
                color="#1799cf"
                fontWeight="bold"
                letterSpacing="1px"
              >
                {linkText} &rArr;
              </Link>
            </VStack>
          ))}
        </Box>
        <Box>
          <Divider
            orientation="vertical"
            display={{ base: "none", md: "none", lg: "block" }}
            border="1px dashed #1799cf"
            mx="10"
          />
        </Box>
        <Box flex="1">
          {bureauData.solutions.map(({ id, title, descr, linkText }, index) => (
            <VStack key={id} align="center" spacing="7">
              <Heading letterSpacing="1px">{title}</Heading>
              <Text lineHeight="1.7" textAlign="center" fontSize="16px">
                {descr}
              </Text>
              <Link
                href="#"
                color="#1799cf"
                fontWeight="bold"
                letterSpacing="1px"
              >
                {linkText} &rArr;
              </Link>
            </VStack>
          ))}
        </Box>
      </Flex>
    </Container>
  )
}
