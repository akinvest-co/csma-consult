import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: "%s | CSMA CONSULT",
    default: "CSMA CONSULT",
  },

  description: "L'excellence de notre bureau en télécommunication",
}

import { Providers } from "./providers"
import StoreProvider from "./redux/Provider"
import { Toaster } from "react-hot-toast"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <StoreProvider>
          <Providers>{children}</Providers>

          <Toaster position="bottom-right" />
        </StoreProvider>
      </body>
    </html>
  )
}
