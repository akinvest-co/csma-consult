"use server"

import React from "react"
import { Resend } from "resend"
// import { ContactFormEmail } from "./react-emails";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const titleProduct = formData.get("titleProduct") as string
  const qtyProduct = Number(formData.get("qtyProduct"))

  console.log({ name, email, titleProduct, qtyProduct })

  if (email !== null && name !== null && titleProduct !== null) {
    await resend.emails.send({
      from: `Acme <onboarding@resend.dev>`,
      to: "nikuzediop@gmail.com",
      subject: "Demande de devis",
      reply_to: email,
      text: "",
      //   react: (
      //     <ContactFormEmail
      //       name={name}
      //       titleProduct={titleProduct}
      //       qtyProduct={qtyProduct}
      //     />
      //   ),
    })
  }
}
