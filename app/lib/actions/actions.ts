import { formDataSchema } from "../contactSchema/formSchema"

export async function addEntry(state: any, formData: FormData) {
  const result = formDataSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  })
}
