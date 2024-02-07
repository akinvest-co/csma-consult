import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: "%s | CSMA CONSULT",
    default: "CSMA CONSULT",
  },

  description: "L'excellence de notre bureau en télécommunication",
}

import { Providers } from "./providers"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
