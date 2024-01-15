import { z } from "zod"

export const formDataSchema = z.object({
  name: z.string().min(4, "Veuillez entre votre nom et prenom"),
  email: z.string().email({ message: "Votre addresse email n'est pas valide" }),
  message: z.string().min(1, "Veuillez ecrirer votre message"),
})
