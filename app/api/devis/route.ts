import { sendEmail } from "@app/app/nodemailer/emails/sendEmail"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const {
    to,
    name,
    from,
    subject,
    body,
    phone,
    projectType,
    deadline,
  } = await request.json()

  // Validation des champs requis
  if (!to || !from || !body || !projectType) {
    return NextResponse.json(
      { error: "Champs requis manquants (to, from, body, projectType)" },
      { status: 400 }
    )
  }

  const formattedBody = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 NOUVELLE DEMANDE DE DEVIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Nom         : ${name || "—"}
📧 Email       : ${from}
📞 Téléphone   : ${phone || "—"}
🗂 Type projet : ${projectType}
⏱ Délai       : ${deadline || "—"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${body}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  `.trim()

  try {
    await sendEmail({
      to,
      name,
      from,
      subject: subject || `Demande de devis – ${projectType}`,
      body: formattedBody,
    })

    return NextResponse.json(
      { message: "Demande de devis envoyée avec succès" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Erreur envoi devis:", error)
    return NextResponse.json(
      { error: "Échec de l'envoi de la demande de devis" },
      { status: 500 }
    )
  }
}

export function GET() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 })
}