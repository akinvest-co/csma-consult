import { bureauData } from "@app/app/lib/static-data/home/bureau-etudes"
import { Link } from "@chakra-ui/next-js"
import {
  Container,
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Divider,
  HStack,
} from "@chakra-ui/react"

export default function BureauView() {
  return (
    <Container maxW="container.lg" mb="28">
      <SimpleGrid columns={{ md: 1, lg: 2 }} spacing="20">
        {bureauData.map(({ id, title, descr, linkText }) => (
          <VStack key={id} align="start" spacing="7">
            <Heading letterSpacing="1px">{title}</Heading>
            <Text lineHeight="1.6">{descr}</Text>
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
      </SimpleGrid>
    </Container>
  )
}
