"use client"

import { useForm } from "@mantine/form"

import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  VStack,
  Box,
} from "@chakra-ui/react"

const ContactForm = () => {
  const form = useForm({
    initialValues: {
      user_name: "",
      user_email: "",
      user_subject: "",
      user_message: "",
    },

    validate: {
      user_name: (value) => (value ? null : "Prénom et Nom sont requis"),
      user_email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Email invalide",
      user_subject: (value) => (value ? null : "Objet est requis"),
      user_message: (value) => (value ? null : "Message est requis"),
    },
  })

  const onSubmit = (values: any) => {
    console.log(values)
    // Traitement des données du formulaire
  }

  return (
    <Box boxShadow="0px 0px 25px rgba(54, 91, 125, 0.2)" p="6" rounded="2xl">
      <form onSubmit={form.onSubmit(onSubmit)}>
        <VStack spacing="5">
          <FormControl isInvalid={!!form.errors.user_name}>
            <FormLabel htmlFor="user_name">Prénom et Nom</FormLabel>
            <Input
              id="user_name"
              placeholder="Prénom et Nom"
              {...form.getInputProps("user_name")}
            />
            {form.errors.user_name && (
              <FormErrorMessage>{form.errors.user_name}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={!!form.errors.user_email}>
            <FormLabel htmlFor="user_email">Email</FormLabel>
            <Input
              id="user_email"
              placeholder="Votre email"
              {...form.getInputProps("user_email")}
            />
            {form.errors.user_email && (
              <FormErrorMessage>{form.errors.user_email}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="user_subject">Objet</FormLabel>
            <Input
              id="user_subject"
              placeholder="Objet de votre courriel"
              {...form.getInputProps("user_subject")}
            />
          </FormControl>

          <FormControl isInvalid={!!form.errors.user_message}>
            <FormLabel htmlFor="user_message">Message</FormLabel>
            <Textarea
              id="user_message"
              placeholder="Message"
              {...form.getInputProps("user_message")}
            />
            {form.errors.user_message && (
              <FormErrorMessage>{form.errors.user_message}</FormErrorMessage>
            )}
          </FormControl>

          <Button
            type="submit"
            w="full"
            bg="#1799cf"
            textTransform="uppercase"
            py="6"
            letterSpacing="1px"
            color="white"
            _hover={{ bg: "#0c84bd" }}
            borderRadius="999rem"
          >
            Envoyer
          </Button>
        </VStack>
      </form>
    </Box>
  )
}

export default ContactForm
