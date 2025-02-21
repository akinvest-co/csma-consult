import { Metadata } from "next"
import SupervisionView from "@app/app/ui/pages/centre-de-service/supervision.view"

export const metadata: Metadata = {
  title: "Centre de Supervision",
}

export default function Supervision() {
  return <SupervisionView />
}
