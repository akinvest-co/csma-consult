import { solutionsData } from "@app/app/lib/static-data/home/bureau-etudes";
import { Link } from "@chakra-ui/next-js";
import { 
  Container, 
  Flex, 
  VStack, 
  Heading, 
  Text, 
  Box, 
  Button, 
  Icon, 
  Circle 
} from "@chakra-ui/react";
import { IconType } from "react-icons"; 

export default function BureauView() {
  return (
    <Container maxW="container.xl" mb="28">
      <Flex flexDirection={{ base: "column", md: "row" }} flexWrap="wrap" justifyContent="space-between" mt={10}>
        {solutionsData.map(({ id, title, descr, buttonText, path, icon }: { 
          id: number; 
          title: string; 
          descr: string; 
          buttonText: string; 
          path: string; 
          icon: IconType; 
        }) => (
          <Box
            key={id}
            flex={{ base: "1 1 100%", md: "1 1 45%", lg: "1 1 22%" }}
            mb="8"
            p="6"
            bg="white"
            border="1px dashed #F78719"
            borderRadius="2xl"
            boxShadow="xl"
            minH="350px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            width={{ base: "100%", md: "48%", lg: "30%" }}
            mr={{ base: "0", md: "6" }}
          >
            <VStack spacing="6" flex="1" width="100%" align="center">
              
              <Circle size="60px" bg="#45C4EE1A" display="flex" alignItems="center" justifyContent="center" >
                <Icon as={icon} boxSize={8} color="#F78719" />
              </Circle>
              
              <Heading letterSpacing="1px" fontSize={{ base: "xl", md: "xl" }} textAlign="center">
                {title}
              </Heading>
             
              <Text 
          lineHeight="1.7"  
          fontSize="16px" 
          color="gray.600" 
          flex="1"  
          minH="50px" 
          maxW="90%" 
           
          mb={5}
          whiteSpace="pre-line"
        >
          {descr}
        </Text>

            </VStack>
            {/* Bouton */}
            <Button
              as="a"
              href={path}
              border="1px solid #45C4EE"
              bg="white"
              size="md"
              width="100%"
              mt="auto"
              _hover={{
                color: "white",
                bg: "#45C4EE",
              }}
            >
              {buttonText}
            </Button>
          </Box>
        ))}
      </Flex>

      {/* Section CSMA */}
      <Box
       bg="linear-gradient(to bottom, #FF7F00, #FF6000)"


        color="white"
        textAlign="center"
        py={{ base: "8", md: "12" }}
        px="6"
        mt="8"
        borderRadius="lg"
      >
        <Container maxW="container.md">
          <VStack spacing="6">
            <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold">
              CSMA est une société créée par des ingénieurs expérimentés de plus de 20 ans.
              Nous offrons des prestations de Bureau d’études, d'opérations d'audit et d'accompagnement en chefferie de projets télécoms.
            </Text>
            <Button
              as="a"
              href="/qui-sommes-nous"
              bg="white"
              color="#FF6000"
              fontWeight="bold"
              borderRadius="lg"
              px="6"
              py="4"
              _hover={{ bg: "#45C4EE", color: "white" }}
            >
              À propos de nous
            </Button>
          </VStack>
        </Container>
      </Box>
    </Container>
  );
}
