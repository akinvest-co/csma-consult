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
  AlertDescription,
  HStack,  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
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
const { isOpen, onOpen, onClose } = useDisclosure();
const handleRedirectLogin = () => {
  window.location.href = "https://www.dashboard.csmaconsult.com/login";
};
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
      <Box pt={10}>
       
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
                  <Heading fontSize={{ base: "3xl", md: "4xl" }} fontWeight="500" lineHeight="1.2" mb={5}>
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
                            color: "#0047CC",
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

            <HStack
  spacing="10"
  boxShadow="0px 0px 25px rgba(54, 91, 125, 0.2)"
  p="8"
  rounded="2xl"
  align="stretch"
  justify="center"
  wrap="wrap"
>
  <VStack
    spacing="5"
    w="full"
    maxW="md"
    align="stretch"
    bg="white"
    p="6"
    rounded="xl"
    boxShadow="md"
    borderTop="4px solid #0047CC"
  >
    <Text fontSize="xl" fontWeight="bold" color="#0047CC">
      Se connecter sur notre portail
    </Text>
    <Button
      w="full"
      bg="#0047CC"
      textTransform="uppercase"
      py="6"
      letterSpacing="1px"
      borderRadius="999rem"
      color="white"
      _hover={{ bg: "#0c84bd" }}
      onClick={handleRedirectLogin}
    >
      Se connecter
    </Button>
  </VStack>

  <VStack
    spacing="5"
    w="full"
    maxW="md"
    align="stretch"
    bg="white"
    p="6"
    rounded="xl"
    boxShadow="md"
    borderTop="4px solid #FF6A00"
  >
    <Text fontSize="xl" fontWeight="bold" color="#FF6A00">
      Obtenir un compte
    </Text>
    <Button
      w="full"
      variant="outline"
      borderColor="#FF6A00"
      color="#FF6A00"
      textTransform="uppercase"
      py="6"
      letterSpacing="1px"
      borderRadius="999rem"
      _hover={{ bg: "#fff4e5", borderColor: "#FF6A00" }}
      onClick={onOpen}
    >
      Obtenir un compte
    </Button>
  </VStack>
            </HStack>

<Modal isOpen={isOpen} onClose={onClose} isCentered>
  <ModalOverlay />
  <ModalContent borderTop="4px solid #FF6A00">
    <ModalHeader color="#0047CC">Création de compte</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      Pour obtenir un compte, veuillez vous rapprocher de votre commercial dédié.
    </ModalBody>
    <ModalFooter>
      <Button
        bg="#FF6A00"
        color="white"
        _hover={{ bg: "#FF6A00" }}
        borderRadius="md"
        onClick={onClose}
      >
        Fermer
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>


          </SimpleGrid>
        </Container>
      </Box>
    </Layout>
  )
}

export default Support
