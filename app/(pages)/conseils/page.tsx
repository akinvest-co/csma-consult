import Conseils from '@app/app/ui/pages/conseils/conseil.view'
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nos conseils",
}
export default function page() {
  return (
    <Conseils/>
  )
}
