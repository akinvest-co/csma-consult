import { useForm } from "@mantine/form"

export function useContactForm() {
  const form = useForm({
    initialValues: {
      user_name: "",
      user_email: "",
      user_subject: "",
      user_message: "",
    },

    validate: {
      user_name: (value) => (value ? null : "Entrez votre Prénom et Nom"),
      user_email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Email invalide",
      user_message: (value) => (value ? null : "Message est requis"),
    },
  })

  const onSubmit = (values: any) => {
    console.log(values)
    // Traitement des données du formulaire
  }

  return { form, onSubmit }
}
