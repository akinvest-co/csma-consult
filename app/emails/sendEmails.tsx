"use server"

import { sendEmail } from "../nodemailer/emails/sendEmail"

export const send = async (to: string, name: string, message: string) => {
  await sendEmail({
    to: "nikuzediop@gmail.com",
    from: "",
    name: name,
    body: `<p>${message}</p>`,
  })
}
