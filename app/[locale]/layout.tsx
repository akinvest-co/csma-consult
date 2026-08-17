import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getMessages, } from 'next-intl/server'
import { notFound } from 'next/navigation'

import { Providers } from "../providers"
import StoreProvider from "../redux/Provider"
import { Toaster } from "react-hot-toast"
import { routing } from '@app/i18n/routing'
import {setRequestLocale} from 'next-intl/server';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  setRequestLocale(locale); 

  const messages = await getMessages()

  return (
    <html  suppressHydrationWarning lang={locale}>
      <body suppressHydrationWarning>
        <StoreProvider>
          <Providers>
           
            <NextIntlClientProvider messages={messages} locale={locale}>
              {children}
            </NextIntlClientProvider>
          </Providers>
          <Toaster position="bottom-right" />
        </StoreProvider>
      </body>
    </html>
  )
}