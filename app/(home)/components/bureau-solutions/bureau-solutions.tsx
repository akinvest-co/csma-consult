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
} from "@chakra-ui/react";

const BureauSolutions = () => {
  return (
    <Container maxW="container.lg" my={40}>
      <Center height={40}>
        <>
          {bureauData.map(({ title, description, linkText, path }) => (
            <VStack align="start" spacing="8">
              <Heading
                size={{ base: "md", md: "lg" }}
                fontWeight="bold"
                textTransform="uppercase"
              >
                {title}
              </Heading>
              <Text>{description}</Text>
              <Link href={path} color="#1799cf" _hover={{ textDecor: "none" }}>
                <span>{linkText}</span>
                <span style={{ marginLeft: "15px" }}>&rarr;</span>
              </Link>
            </VStack>
          ))}
        </>

        <Divider
          orientation="vertical"
          mx={10}
          borderColor="#1799cf"
          borderWidth={1}
          height="100%"
        />
        <>
          {solutionsData.map(({ title, description, linkText, path }) => (
            <VStack align="start" spacing="8">
              <Heading
                size={{ base: "md", md: "lg" }}
                fontWeight="bold"
                textTransform="uppercase"
              >
                {title}
              </Heading>
              <Text>{description}</Text>
              <Link href={path} color="#1799cf" _hover={{ textDecor: "none" }}>
                <span>{linkText}</span>
                <span style={{ marginLeft: "15px" }}>&rarr;</span>
              </Link>
            </VStack>
          ))}
        </>
      </Center>
    </Container>
  );
};

export default BureauSolutions;
