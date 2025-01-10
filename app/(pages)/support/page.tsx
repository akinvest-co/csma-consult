import SupportView from "@app/app/ui/pages/support/support.view"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: "Support",
  description: "L'excellence de notre bureau en télécommunication",
}

export default function Support() {
  return <SupportView />
}
