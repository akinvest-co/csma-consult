
import { Metadata } from "next"
import BureauView from "../../ui/pages/bureau-etudes/bureau.view"

export const metadata: Metadata = {
  title: "Bureau d'Études",
}

export default function BureauEtudes() {
  return <BureauView />
}
