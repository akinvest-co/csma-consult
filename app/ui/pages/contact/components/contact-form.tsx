import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react"

const ContactForm = () => {
  return (
    <VStack
      spacing="10"
      boxShadow="0px 0px 25px rgba(54, 91, 125, 0.2)"
      p="6"
      rounded="2xl"
    >
      <VStack as="form" spacing="5" w="full">
        <FormControl>
          <FormLabel htmlFor="name">Prénom et Nom</FormLabel>
          <Input
            id="name"
            name="user_name"
            placeholder="Prénom et Nom"
            value=""
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            name="user_email"
            placeholder="nikuzediop@gmail.com"
            value=""
          />

          <FormHelperText>
            Nous ne partagerons jamais votre adresse email.
          </FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="subject">Objet</FormLabel>
          <Input
            id="subject"
            name="user_subject"
            placeholder="Objet de votre courriel"
            value=""
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea
            id="message"
            name="user_message"
            placeholder="Message"
            value=""
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
          className="btn-black"
          borderRadius="999rem"
        >
          Envoyer
        </Button>
      </VStack>
    </VStack>
  )
}

export default ContactForm
