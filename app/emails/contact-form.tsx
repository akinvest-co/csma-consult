// "use client"

import { useContactForm } from "@app/app/validation/contactForm"
import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
  Button,
} from "@chakra-ui/react"
import { SendEmail } from "./sendEmails"
import { useAppSelector } from "../hooks/cart/hooks"

export default function ContactForm() {
  const { form, onSubmit } = useContactForm()

  return (
    <Box
      boxShadow="0px 0px 25px rgba(54, 91, 125, 0.2)"
      p="6"
      rounded="2xl"
      alignSelf="self-start"
    >
      <form onSubmit={form.onSubmit(onSubmit)} action={SendEmail}>
        <VStack spacing="5">
          <FormControl isInvalid={!!form.errors.user_name}>
            <FormLabel htmlFor="user_name">Prénom et Nom</FormLabel>
            <Input
              id="user_name"
              name="name"
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
              name="email"
              placeholder="Votre email"
              {...form.getInputProps("user_email")}
            />
            {form.errors.user_email && (
              <FormErrorMessage>{form.errors.user_email}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={!!form.errors.user_message}>
            <FormLabel htmlFor="user_message">Message</FormLabel>
            <Textarea
              id="user_message"
              name="message"
              placeholder="Message"
              {...form.getInputProps("user_message")}
            />
            {form.errors.user_message && (
              <FormErrorMessage>{form.errors.user_message}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl>
            <textarea
              name="titleProduct"
              // defaultValue={cartItems.map((product) => product.attributes.name)}
              hidden
            />
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
            Demande de devis
          </Button>
        </VStack>
      </form>
    </Box>
  )
}
