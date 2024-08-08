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
  Heading,
} from "@chakra-ui/react"
import { useAppSelector } from "../hooks/cart/hooks"


export default function ContactForm() {
  const { form, onSubmit, validate } = useContactForm()

  const cartItems = useAppSelector((store) => store.store)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const validationResult = validate()
    if (validationResult.hasErrors) {
      return
    }

    const values = form.values
    onSubmit(values)

    const productsHtml = cartItems
    .map(
      (item) => `
    <div>
      <p>${item.attributes.name} (x${item.quantity})</p>
      <img src="${item.attributes.image.data[0].attributes.url}" alt="${item.attributes.name}" style="width: 50px;"/>
    </div>
  `,
    )
    .join("")

  
    const smtpEmail = "nikuzediop@gmail.com"
    if (!smtpEmail) {
      console.error("SMTP_EMAIL is not defined in environment variables.")
      return
    }

    const response = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: smtpEmail,
        from: values.user_email,
        name: values.user_name,
        body: `${values.user_message}<br/><br/>Produits:<br/>${productsHtml}`,

      }),
    })
    if (response.ok) {
      console.log("Email sent successfully")
    } else {
      console.error("Failed to send email")
    }

  }

  return (
    <Box
      boxShadow="0px 0px 25px rgba(54, 91, 125, 0.2)"
      p="6"
      rounded="2xl"
      alignSelf="self-start"
    >
      <Heading mb="10">Demandez le devis</Heading>
      <form onSubmit={handleSubmit}>
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
            <textarea name="titleProduct" hidden />
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
