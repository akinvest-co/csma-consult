"use client"

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
import { useContactForm } from "@app/app/validation/contactForm"
import { useTransition } from "react"
import toast from "react-hot-toast"

const ContactForm = () => {
  const [isPending, startTransition] = useTransition()
  const { form, onSubmit, validate } = useContactForm()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const validationResult = validate()
    if (validationResult.hasErrors) {
      return
    }

    startTransition(async () => {
      const values = form.values
      onSubmit(values)

      const smtpEmail = "fama.tall@csmaconsult.com"
      if (!smtpEmail) {
        console.error("SMTP_EMAIL is not defined in environment variables.")
        return
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: smtpEmail,
          from: values.user_email,
          subject: values.user_subject || "Contactez-nous",
          body: values.user_message,
        }),
      })
      if (response.ok) {
        toast.success("Merci! Votre demande a bien été prise en compte. Notre èquipe vous contactera sous peu!", {
          duration: 5000,
        })

        form.reset()
      } else {
        toast.error("Échec de l'envoi de l'email.")
      }
    })
  }

  return (
    <Box boxShadow="0px 0px 25px rgba(54, 91, 125, 0.2)" p="6" rounded="2xl">
      <form onSubmit={handleSubmit}>
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
            disabled={isPending}
            aria-disabled={isPending}
          >
            {isPending ? "Envoi en cours..." : "Envoyer"}
          </Button>
        </VStack>
      </form>
    </Box>
  )
}

export default ContactForm
