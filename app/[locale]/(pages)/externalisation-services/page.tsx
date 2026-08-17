import { Metadata } from "next"
import ExternalisationServicesPage from "../../ui/pages/externalisation-services/externalisation.view"



export const metadata: Metadata = {
  title: "Externalisation de service",
}

export default function Conformite() {
  return <ExternalisationServicesPage />
}
