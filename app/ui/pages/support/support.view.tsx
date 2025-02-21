"use client"
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Container,
  UnorderedList,
  ListItem,
  FormControl,
  FormLabel,
  Input,
  Button,useToast,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from "@chakra-ui/react"
import NextImage from "next/image"
import { contactInfo } from "@app/app/lib/static-data/pages/conctact"
import {
  supportDataAccount,
} from "@app/app/lib/static-data/pages/support"
import Layout from "@app/app/layout/layout.page"
import { useState } from "react";
const Support = () => {
  const [showAlert, setShowAlert] = useState(false);
  const toast = useToast();

  const handleClick = () => {
    // Affichage du toast
    toast({
      title: "Message de l'évenement Portail Client:",
      description: "Votre compte n'est pas encore créé, merci de contacter notre commercial dédié.",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "bottom-right",
    });

    setShowAlert(true);

    // Cacher l'alert après 3 secondes
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };
  return (
    <Layout>
      <Box>
       <Container maxW="container.lg" my="28">
          <Box my="28">
            
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="10">
              {contactInfo.map(({ id, icon, title, intro, address }) => (
                <VStack
                  align="start"
                  key={id}
                  borderRadius="xl"
                  spacing="3"
                  p="5"
                  boxShadow="rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px"
                >
                  <Box
                    overflow="hidden"
                    border="1px dashed #F7871A"
                    bg="#e1f2fd"
                    padding={2}
                    borderRadius="full"
                    w="45px"
                    h="45px"
                    textAlign="center"
                  >
                    <NextImage src={icon} alt="" />
                  </Box>
                  <Heading size="md">{title}</Heading>
                  <Box color="rgba(107,114,128,1)">
                    <Text>{intro}</Text>
                    {title === "Notre adresse e-mail" ? (
                      <a
                        href={`mailto:${address}`}
                        style={{ textDecoration: "underline" }}
                      >
                        {address}
                      </a>
                    ) : (
                      <Text>{address}</Text>
                    )}
                  </Box>
                </VStack>
              ))}
            </SimpleGrid>
          </Box>
        </Container>
        <Container maxW="container.xl">
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing="10"
            alignItems="center"
            mb="28"
          >
            <Box>
              {supportDataAccount.map(({ id, title, items }) => (
                <VStack key={id} align="start">
                  <Heading size="2xl" lineHeight="shorter" letterSpacing="1px">
                    {title}
                  </Heading>
                  <UnorderedList>
                    {items.map(({ id, label }) => (
                      <ListItem
                        key={id}
                        lineHeight="2"
                        listStyleType="none"
                        fontSize="lg"
                      >
                        <span
                          style={{
                            color: "#1799cf",
                            fontSize: "24px",
                            marginRight: "10px",
                            fontWeight: "900",
                          }}
                        >
                          ✓
                        </span>
                        {label}
                      </ListItem>
                    ))}
                  </UnorderedList>
                </VStack>
              ))}
            </Box>

            <VStack
              spacing="10"
              boxShadow="0px 0px 25px rgba(54, 91, 125, 0.2)"
              p="8"
              rounded="2xl"
            >
              <VStack as="form" spacing="5" w="full">
                <FormControl isRequired>
                  <FormLabel>Login</FormLabel>
                  <Input type="text" placeholder="Email" />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Mot de passe</FormLabel>
                  <Input type="password" placeholder="Mot de passe" />
                </FormControl>
              </VStack>
              <Button
                type="submit"
                w="full"
                bg="#1799cf"
                textTransform="uppercase"
                py="6"
                letterSpacing="1px"
                borderRadius="999rem"
                color="white"
                _hover={{ bg: "#0c84bd" }}
                onClick={handleClick}
              >
                Connecter
              </Button>
             
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>
    </Layout>
  )
}

export default Support
