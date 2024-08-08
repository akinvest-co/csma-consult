import nodemailer from "nodemailer"
import { render } from '@react-email/components';
import EmailTemplate from "@app/app/emails/emailTemplate";

interface EmailProps {
  to: string;
  from: string;
  name: string;
  userMessage: string;
  products: { name: string; quantity: number; imageUrl: string }[];
}

export async function sendEmail({ to, from, name, userMessage, products }: EmailProps) {
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

  const emailHtml = render(<EmailTemplate name={name} userMessage={userMessage} products={products} />);


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
      subject: `Demande de devis de ${name}`,
      html: emailHtml,
    })
    console.log("Email sent successfully:", sendResult)
  } catch (error) {
    console.error("Error sending email:", error)
  }
}
