"use server"

import { sendEmail } from "../nodemailer/emails/sendEmail"

export const send = async (
  to: string,
  from: string,
  name: string,
  message: string,
) => {
  await sendEmail({
    to,
    from,
    name,
    body: `<p>${message}</p>`
  })
}
