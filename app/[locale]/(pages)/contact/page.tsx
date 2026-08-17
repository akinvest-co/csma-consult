import { Metadata } from "next"
import ContactView from "../../ui/pages/contact/components/contact.view"

export const metadata: Metadata = {
  title: "Nous Contacter",
}

export default function Contact() {
  return <ContactView />
}
