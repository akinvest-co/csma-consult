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
  Select,Grid
} from "@chakra-ui/react"
import { useTransition } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

type DevisFormValues = {
  user_name: string
  user_email: string
  user_phone: string
  project_type: string
  user_deadline: string
  user_subject?: string
  user_message: string
}

const PROJECT_TYPES = [
  "Etudes Télécoms",
  "Génie Civil",
  "Energétique",
  "Conseil & Stratégie",
]

const DevisForm = () => {
  const [isPending, startTransition] = useTransition()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DevisFormValues>()

  const onSubmit = (values: DevisFormValues) => {
    startTransition(async () => {
      const smtpEmail = "fama.tall@csmaconsult.com"

      const response = await fetch("/api/devis", {   
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    to: smtpEmail,
    name: values.user_name,
    from: values.user_email,
    phone: values.user_phone,
    projectType: values.project_type,
    deadline: values.user_deadline,
    subject: `Demande de devis – ${values.project_type}`,
    body: values.user_message,
  }),
})

      if (response.ok) {
        toast.success(
          "Merci ! Votre demande de devis a bien été reçue. Notre équipe vous contactera sous peu !",
          { duration: 5000 }
        )
        reset()
      } else {
        toast.error("Échec de l'envoi. Veuillez réessayer.")
      }
    })
  }

  return (
   
    <Box boxShadow="0px 0px 25px rgba(54, 91, 125, 0.2)" p="6" rounded="2xl">
      <form onSubmit={handleSubmit(onSubmit)}>
  <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={5}>
    {/* Colonne gauche */}
    <VStack spacing={5} align="stretch">
      {/* Prénom et Nom */}
      <FormControl isInvalid={!!errors.user_name}>
        <FormLabel htmlFor="user_name">Prénom et Nom</FormLabel>
        <Input
          id="user_name"
          placeholder="Prénom et Nom"
          {...register("user_name", { required: "Le nom est requis" })}
        />
        {errors.user_name && (
          <FormErrorMessage>{errors.user_name.message}</FormErrorMessage>
        )}
      </FormControl>

      {/* Email */}
      <FormControl isInvalid={!!errors.user_email}>
        <FormLabel htmlFor="user_email">Email</FormLabel>
        <Input
          id="user_email"
          type="email"
          placeholder="Votre email"
          {...register("user_email", {
            required: "L'email est requis",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Email invalide",
            },
          })}
        />
        {errors.user_email && (
          <FormErrorMessage>{errors.user_email.message}</FormErrorMessage>
        )}
      </FormControl>

      {/* Téléphone */}
      <FormControl isInvalid={!!errors.user_phone}>
        <FormLabel htmlFor="user_phone">Numéro de téléphone</FormLabel>
        <Input
          id="user_phone"
          type="tel"
          placeholder="+221 XX XXX XX XX"
          {...register("user_phone", {
            required: "Le numéro de téléphone est requis",
            pattern: {
              value: /^[+\d\s\-().]{7,20}$/,
              message: "Numéro invalide",
            },
          })}
        />
        {errors.user_phone && (
          <FormErrorMessage>{errors.user_phone.message}</FormErrorMessage>
        )}
      </FormControl>

      {/* Type de projet */}
      <FormControl isInvalid={!!errors.project_type}>
        <FormLabel htmlFor="project_type">Type de projet</FormLabel>
        <Select
          id="project_type"
          {...register("project_type", {
            required: "Veuillez sélectionner un type de projet",
          })}
        >
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
        {errors.project_type && (
          <FormErrorMessage>{errors.project_type.message}</FormErrorMessage>
        )}
      </FormControl>
    </VStack>

    {/* Colonne droite */}
    <VStack spacing={5} align="stretch">
      {/* Délai souhaité */}
      <FormControl isInvalid={!!errors.user_deadline}>
        <FormLabel htmlFor="user_deadline">Délai souhaité</FormLabel>
        <Select
          id="user_deadline"
         
          {...register("user_deadline", {
            required: "Veuillez indiquer un délai",
          })}
        >
          <option value="Moins d'1 mois">Moins d&apos;1 mois</option>
          <option value="1 à 3 mois">1 à 3 mois</option>
          <option value="3 à 6 mois">3 à 6 mois</option>
          <option value="Plus de 6 mois">Plus de 6 mois</option>
          <option value="Flexible">Flexible</option>
        </Select>
        {errors.user_deadline && (
          <FormErrorMessage>{errors.user_deadline.message}</FormErrorMessage>
        )}
      </FormControl>

      {/* Objet (optionnel) */}
      <FormControl>
        <FormLabel htmlFor="user_subject">Objet</FormLabel>
        <Input
          id="user_subject"
          placeholder="Objet de votre demande"
          {...register("user_subject")}
        />
      </FormControl>

      {/* Message */}
      <FormControl isInvalid={!!errors.user_message}>
        <FormLabel htmlFor="user_message">Message</FormLabel>
        <Textarea
          id="user_message"
          placeholder="Décrivez votre projet..."
          rows={5}
          {...register("user_message", {
            required: "Le message est requis",
            minLength: {
              value: 20,
              message: "Le message doit contenir au moins 20 caractères",
            },
          })}
        />
        {errors.user_message && (
          <FormErrorMessage>{errors.user_message.message}</FormErrorMessage>
        )}
      </FormControl>
    </VStack>
  </Grid>

  {/* Bouton en pleine largeur sous les deux colonnes */}
  <Button
    type="submit"
    w="full"
    mt={5}
    bg="#1799cf"
    textTransform="uppercase"
    py="6"
    letterSpacing="1px"
    color="white"
    _hover={{ bg: "#0c84bd" }}
    borderRadius="999rem"
    isLoading={isPending}
    loadingText="Envoi en cours..."
  >
    Envoyer ma demande
  </Button>
</form>
    </Box>
   
  )
}

export default DevisForm