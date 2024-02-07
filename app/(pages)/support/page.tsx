import { Metadata } from "next"
import SupportView from "@app/app/ui/pages/support/support.view"

export const metadata: Metadata = {
  title: "Support",
  description: "L'excellence de notre bureau en télécommunication",
}

export default function Support() {
  return <SupportView />
}
