import ContactView from "@app/app/ui/pages/contact/components/contact.view"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nous Contacter",
}

export default function Contact() {
  return <ContactView />
}
