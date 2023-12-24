import {
  bureauData,
  solutionsData,
} from "@app/app/lib/static-data/home/bureau-solutions";
import {
  Center,
  Container,
  Divider,
  VStack,
  Heading,
  Text,
  Link,
  Box,
  Flex,
} from "@chakra-ui/react";

const BureauSolutions = () => {
  return (
    <Container maxW="container.lg" my="40">
      <Flex
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        textAlign={{ base: "center", md: "center", lg: "left" }}
      >
        <Box flex="1">
          {bureauData.map(({ title, description, linkText, path }) => (
            <VStack
              key={title}
              spacing={5}
              align={{ base: "center", md: "center", lg: "start" }}
              mb={12}
            >
              <Heading
                size={{ base: "md", md: "md", lg: "lg" }}
                textTransform="uppercase"
              >
                {title}
              </Heading>
              <Text>{description}</Text>
              <Link href={path} color="#1799cf" _hover={{ textDecor: "none" }}>
                <span>{linkText}</span>
                {/* <span style={{ marginLeft: "15px" }}>&rarr;</span> */}
              </Link>
            </VStack>
          ))}
        </Box>
        <Box>
          <Divider
            orientation="vertical"
            borderColor="#1799cf"
            display={{ base: "none", md: "none", lg: "block" }}
            borderWidth={1}
            height="100%"
            mx={35}
          />
        </Box>
        <Box flex="1">
          {solutionsData.map(({ title, description, linkText, path }) => (
            <VStack
              key={title}
              spacing={5}
              align={{ base: "center", md: "center", lg: "start" }}
            >
              <Heading
                size={{ base: "md", md: "md", lg: "lg" }}
                textTransform="uppercase"
              >
                {title}
              </Heading>
              <Text>{description}</Text>
              <Link href={path} color="#1799cf" _hover={{ textDecor: "none" }}>
                <span>{linkText}</span>
                {/* <span style={{ marginLeft: "15px" }}>&rarr;</span> */}
              </Link>
            </VStack>
          ))}
        </Box>
      </Flex>
    </Container>
  );
};

export default BureauSolutions;
