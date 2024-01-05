import React, { useRef, useState, useEffect, RefObject } from "react";
// import emailjs from "@emailjs/browser";

import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Alert,
  AlertIcon,
  Spinner,
} from "@chakra-ui/react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const formRef = useRef<HTMLFormElement | null>(null);

  const validateForm = () => {
    let valid = true;

    if (name.trim() === "") {
      setNameError("Veuillez entrer votre nom");
      valid = false;
    } else {
      setNameError("");
    }

    if (email.trim() === "") {
      setEmailError("Veuillez entrer votre adresse email");
      valid = false;
    } else if (!/\S+@\S+\.(com|net|org|edu|gov|co(\.\w+)*)/.test(email)) {
      setEmailError("Veuillez entrer une adresse email valide");
      valid = false;
    } else {
      setEmailError("");
    }

    if (message.trim() === "") {
      setMessageError("Veuillez entrer votre message");
      valid = false;
    } else {
      setMessageError("");
    }

    return valid;
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const clearSuccessMessage = () => {
    setTimeout(() => {
      setSuccessMessage("");
    }, 60000);
  };

//   const sendEmail = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (validateForm()) {
//       setIsLoading(true);
//       if (formRef.current !== null) {
//         emailjs
//           .sendForm(
//             "service_n7vrnbn",
//             "template_ejyt6yq",
//             formRef.current,
//             "_LNktCgxm-lI0t9rW"
//           )
//           .then(
//             (result) => {
//               console.log(result.text);
//               setSuccessMessage(
//                 "Votre message a été envoyé. Nous vous remercions de votre attention."
//               );
//               clearForm();
//             },
//             (error) => {
//               console.log(error.text);
//             }
//           )
//           .finally(() => {
//             setIsLoading(false);
//           });
//       }
//     }
//   };

  useEffect(() => {
    clearSuccessMessage();
  }, [name, email, subject, message]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <VStack
      spacing="10"
      boxShadow="0px 0px 25px rgba(54, 91, 125, 0.2)"
      p="6"
      rounded="2xl"
    >
      <VStack as="form" spacing="5" w="full" >
        <FormControl>
          <FormLabel htmlFor="name">Prénom et Nom</FormLabel>
          <Input
            id="name"
            name="user_name"
            placeholder="Prénom et Nom"
            value={name}
            onChange={handleNameChange}
          />
          {nameError && (
            <Alert status="error" mt={3} borderRadius="xl">
              <AlertIcon />
              {nameError}
            </Alert>
          )}
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            name="user_email"
            placeholder="Votre email"
            value={email}
            onChange={handleEmailChange}
          />

          {emailError && (
            <Alert status="error" my={3} borderRadius="xl">
              <AlertIcon />
              {emailError}
            </Alert>
          )}
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
            value={subject}
            onChange={handleSubjectChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea
            id="message"
            name="user_message"
            placeholder="Message"
            value={message}
            onChange={handleMessageChange}
          />
          {messageError && (
            <Alert status="error" mt={3} borderRadius="xl">
              <AlertIcon />
              {messageError}
            </Alert>
          )}
        </FormControl>

        {successMessage && (
          <Alert status="success" borderRadius="xl">
            <AlertIcon />
            {successMessage}
          </Alert>
        )}

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
          isLoading={isLoading}
          loadingText="En cours d'envoi..."
          spinner={<Spinner size="md" />}
        >
          Envoyer
        </Button>
      </VStack>
    </VStack>
  );
};

export default ContactForm;