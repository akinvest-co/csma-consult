import { sendEmail } from "@app/app/nodemailer/emails/sendEmail"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { to, name, body } = await request.json()

  try {
    await sendEmail({ to, name, body })
    return NextResponse.json({ message: "Email sent successfully" })
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}

export function GET() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 })
}
