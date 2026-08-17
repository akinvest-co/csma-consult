import { Metadata } from "next"
import EnergiePage from "../../../ui/pages/energies/energies.view"


export const metadata: Metadata = {
  title: "Energies",
}

export default function Supervision() {
  return <EnergiePage />
}
