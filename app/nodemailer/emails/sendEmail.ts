// import ContactForm from "@app/app/emails/contact-form"
// import { Resend } from "resend"

// const resend = new Resend(process.env.RESEND_API_KEY)

// export async function POST() {
//   await resend.emails.send({
//     from: "Csma Consult <onboarding@resend.dev>",
//     to: "nikuzediop@gmai.com",
//     subject: "Message du client",
//     react: ContactForm(),
//   })
// }

import nodemailer from "nodemailer"

export async function sendEmail({
  to,
  name,
  body,
}: {
  to: string
  name: string
  body: string
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  })

  try {
    const testResult = await transport.verify()
    console.log(testResult)
  } catch (error) {
    console.log(error)

    return
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      html: body,
    })

    console.log(sendResult)
  } catch (error) {
    console.log(error)
  }
}
