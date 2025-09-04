import { partnersImages, testimonialsData } from "@app/app/lib/static-data/home/testimonials";
import { Container, VStack, Text, Heading, Avatar, Box, Icon, HStack } from "@chakra-ui/react";
import NextImage from "next/image";
import Slider from "react-slick";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsView = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, 
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, 
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };

  return (
    <Box
      bgGradient="linear(-90deg, rgba(255, 254, 252, 0.2) 50%, #F7FAFC 100%)"
      my="2"
      py="2"
    >
      <Container maxW="container.xl">
      <Heading size="xl" letterSpacing="1px" lineHeight="short" textAlign="center">
          Paroles inspirantes
        </Heading>
          <Box width="70px" height="5px" bg="#F8861A" mx="auto" mt="2"   />
        <Slider {...settings}>
          {testimonialsData.map(({ id, title, quote, imageProfile, nomDirecteur, role }) => (
            <Box key={id} textAlign="center" p={4}>
            <VStack spacing="6">
              <Box
                maxW="600px"
                minH="220px"  
                mx="auto"
                mt={10}
                p={6}
                borderLeft="4px solid"
                borderColor="orange.400"
                bg="gray.50"
                borderRadius="md"
                boxShadow="md"
                position="relative"
                display="flex" 
                flexDirection="column"
                justifyContent="space-between" 
              >
                <Icon as={FaQuoteLeft} color="orange.400" fontSize="2xl" position="absolute" top={4} left={4} />
                
                <Text fontSize={["md", "lg"]} fontStyle="italic" color="gray.700" px={10} flexGrow={1}>
                  {quote}
                </Text>
                
                <Box
                  mt={4}
                  textAlign="right"
                  pr={10}
                  display="flex"
                  flexDirection={["column", "row"]}  
                  alignItems="center"
                  justifyContent="center"
                >
                  <Avatar src={imageProfile} name={nomDirecteur} size="md" mr={2} />
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="bold" color="2fa#3d1">– {nomDirecteur}</Text>
                    <Text fontSize="sm" color="gray.500">{role}</Text>
                  </VStack>
                </Box>
          
                <Icon as={FaQuoteRight} color="orange.400" fontSize="2xl" position="absolute" bottom={4} right={4} />
              </Box>
            </VStack>
          </Box>
     
          ))}
        </Slider>
        <Heading size="xl" letterSpacing="1px" lineHeight="short" textAlign="center" mt={20}>
            Nos réseaux et outils d’intervention
        </Heading>
        <Box width="70px" height="5px" bg="#F8861A" mx="auto" mt="2"   />
        <HStack justifyContent="space-around" mt="20" flexWrap="wrap" spacing={{ base: "5", md: "0" }} mb={10}>
  {partnersImages.map((partner) => (
    <Box
      key={partner.id}
      w="150px"
      h="90px"
      borderRadius="md"
      overflow="hidden"
      bg="gray.100" 
      
      p={2} 
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <NextImage src={partner.image} alt={partner.alt} placeholder="blur" />
    </Box>
  ))}
</HStack>

      </Container>
    </Box>
  );
};

export default TestimonialsView;