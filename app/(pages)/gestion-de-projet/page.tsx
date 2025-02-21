import RecettesView from "@app/app/ui/pages/gestion-de-projet/recettes.view"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Réception et Mise en Service",
}

export default function Recettes() {
  return <RecettesView />
}
