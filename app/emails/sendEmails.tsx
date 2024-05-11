"use server"

import React from "react"
import { Resend } from "resend"
import { ContactFormEmail } from "./react-emails"
// import { useAppSelector } from "../hooks/cart/hooks"

const resend = new Resend("re_hKNEirr7_6wyrSAwqAJQmyvSK4A7o7spv")

export async function SendEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string
  const titleProduct = formData.get("titleProduct") as string
  const qtyProduct = Number(formData.get("qtyProduct"))

  console.log(name, email, message, titleProduct)
  // const cartItems = useAppSelector((store) => store.store)

  if (
    email !== null &&
    name !== null &&
    message !== null &&
    titleProduct !== null
  ) {
    await resend.emails.send({
      from: `Acme <onboarding@resend.dev>`,
      to: "nikuzediop@gmail.com",
      subject: "Demande de devis",
      reply_to: email,
      react: (
        <ContactFormEmail
          name={name}
          message={message}
          titleProduct={titleProduct}
          qtyProduct={qtyProduct}
        />
      ),
    })
  }
}
