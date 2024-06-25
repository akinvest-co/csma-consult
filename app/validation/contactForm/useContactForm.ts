import { useForm } from "@mantine/form"

export function useContactForm() {
  const form = useForm({
    initialValues: {
      user_name: "",
      user_email: "",
      user_message: "",
    },

    validate: {
      user_name: (value: string) =>
        value ? null : "Entrez votre Prénom et Nom",
      user_email: (value: string) =>
        /^\S+@\S+$/.test(value) ? null : "Email invalide",
      user_message: (value: string) => (value ? null : "Message est requis"),
    },
  })

  const onSubmit = (values: any) => {
    console.log(values)
  }

  return { form, onSubmit, validate: form.validate }
}
