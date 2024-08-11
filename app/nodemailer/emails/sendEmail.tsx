import nodemailer from "nodemailer"

interface EmailProps {
  to: string
  from: string
  name: string
  subject?: string
  body: string
}

export async function sendEmail({ to, from, subject, name, body }: EmailProps) {
  const { SMTP_PASSWORD } = process.env
  const SMTP_EMAIL = "nikuzediop@gmail.com"

  if (!SMTP_EMAIL || !SMTP_PASSWORD) {
    throw new Error(
      "SMTP credentials are not defined in environment variables.",
    )
  }

  if (!to) {
    throw new Error("Recipient email is not defined.")
  }

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  })

  try {
    const testResult = await transport.verify()
    console.log("Transport verified:", testResult)
  } catch (error) {
    console.error("Error verifying transport:", error)
    return
  }

  try {
    const sendResult = await transport.sendMail({
      to: SMTP_EMAIL,
      from,
      replyTo: from,
      subject: subject,
      html: body,
    })
    console.log("Email sent successfully:", sendResult)
  } catch (error) {
    console.error("Error sending email:", error)
  }
}
