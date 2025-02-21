import { Box, Flex, Heading, Text, VStack, Icon, Image } from "@chakra-ui/react";
import { advantages } from "./data";
import { Bold } from "tabler-icons-react";
const WhyChooseUs = () => {
    return (
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        bg="gray.10"
        p={10}
        borderRadius="xl"
        boxShadow="lg"
        my={10}
      >
        
        <Box flex="1">
          <Image 
            src="/images/auditBan.png" 
            alt="Pourquoi nous choisir" 
            borderRadius="lg"
            boxShadow="md"
            height="400px"
            objectFit="cover"
          />
        </Box>
  
        
        <VStack flex="1" align="start" spacing={6} pl={{ md: 10 }} mt={{ base: 6, md: 0 }}>
          <Heading size="lg"  >Nos Atouts</Heading>

          {advantages.map((adv, index) => (
            <Flex key={index} align="center" gap={4} p={4} bg="white" borderRadius="lg" boxShadow="xl" _hover={{ transform: "scale(1.05)", transition: "0.2s" }}>
              
              <Box>
                <Heading size="md">{adv.title}</Heading>
                <Text color="gray.500">{adv.description}</Text>
              </Box>
            </Flex>
          ))}
        </VStack>
      </Flex>
    );
  };
  
  export default WhyChooseUs;