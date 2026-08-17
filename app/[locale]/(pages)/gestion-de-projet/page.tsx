import { Metadata } from "next"
import RecettesView from "../../ui/pages/energies/energies.view"

export const metadata: Metadata = {
  title: "Réception et Mise en Service",
}

export default function Recettes() {
  return <RecettesView />
}
