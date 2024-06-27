import { NextApiRequest, NextApiResponse } from "next"
import { sendEmail } from "../nodemailer/emails/sendEmail"

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { to, name, body } = req.body

    try {
      await sendEmail({ to, name, body })
      res.status(200).json({ message: "Email sent successfully" })
    } catch (error) {
      res.status(500).json({ error: "Failed to send email" })
    }
  } else {
    res.setHeader("Allow", ["POST"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
