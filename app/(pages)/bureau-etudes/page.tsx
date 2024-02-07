import BureauView from "@app/app/ui/pages/bureau-etudes/bureau.view"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bureau d'Études",
}

export default function BureauEtudes() {
  return <BureauView />
}
