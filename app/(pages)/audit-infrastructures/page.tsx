import AuditView from "@app/app/ui/pages/audit/audit.view"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Audit d’Infrastructures Optiques",
}

export default function Audit() {
  return <AuditView />
}
