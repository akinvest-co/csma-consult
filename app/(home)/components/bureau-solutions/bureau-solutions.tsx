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
} from "@chakra-ui/react";

const BureauSolutions = () => {
  return (
    <Container maxW="container.lg" my={40}>
      <Center height="100px">
        <Box>
          {bureauData.map(({ title, description, linkText, path }) => (
            <VStack align="start" spacing="8" key={title}>
              <Box>
                <Heading
                  size={{ base: "md", md: "md" }}
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  {title}
                </Heading>
              </Box>
              <Box>
                <Text>{description}</Text>
              </Box>
              <Box>
                <Link
                  href={path}
                  color="#1799cf"
                  _hover={{ textDecor: "none" }}
                >
                  <span>{linkText}</span>
                  <span style={{ marginLeft: "15px" }}>&rarr;</span>
                </Link>
              </Box>
            </VStack>
          ))}
        </Box>

        <Divider
          orientation="vertical"
          mx={10}
          borderColor="#1799cf"
          borderWidth={2}
        />
        <Box>
          {solutionsData.map(({ title, description, linkText, path }) => (
            <VStack align="start" spacing="8" key={title}>
              <Box>
                <Heading
                  size={{ base: "md", md: "md" }}
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  {title}
                </Heading>
              </Box>
              <Box>
                <Text>{description}</Text>
              </Box>
              <Box>
                <Link
                  href={path}
                  color="#1799cf"
                  _hover={{ textDecor: "none" }}
                >
                  <span>{linkText}</span>
                  <span style={{ marginLeft: "15px" }}>&rarr;</span>
                </Link>
              </Box>
            </VStack>
          ))}
        </Box>
      </Center>
    </Container>
  );
};

export default BureauSolutions;
