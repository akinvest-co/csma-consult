import { extendTheme } from "@chakra-ui/react"
import {  Plus_Jakarta_Sans } from "next/font/google"
import { withProse } from "@nikolovlazar/chakra-ui-prose"

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400"],
  fallback: ["Helvetica", "Arial", "sans-serif"],
})

export const theme = extendTheme(
  {
    fonts: {
      heading: font.style.fontFamily,
      body: font.style.fontFamily,
    },
  },
  withProse(),
)
