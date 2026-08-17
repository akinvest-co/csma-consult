import { extendTheme } from "@chakra-ui/react";
import { Montserrat, DM_Sans } from "next/font/google";
import { withProse } from "@nikolovlazar/chakra-ui-prose";

const sora = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  fallback: ["Arial", "sans-serif"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  fallback: ["Arial", "sans-serif"],
});

export const theme = extendTheme(
  {
    fonts: {
      heading: sora.style.fontFamily,
      body: dmSans.style.fontFamily,
    },
    fontSizes: {
      xs: "0.8rem",       // 12.8px  → 13px
      sm: "0.95rem",      // 15.2px  → 15px
      md: "1.075rem",     // 17.2px  → 17px
      lg: "1.2rem",       // 19.2px  → 19px
      xl: "1.35rem",      // 21.6px  → 22px
      "2xl": "1.65rem",   // 26.4px  → 26px
      "3xl": "2rem",      // 32px
      "4xl": "2.5rem",    // 40px
      "5xl": "3.25rem",   // 52px
      "6xl": "4rem",      // 64px
    },
    letterSpacings: {
      tighter: "-0.03em",
      tight: "-0.02em",
      normal: "0em",
      wide: "0.04em",
      wider: "0.1em",
      widest: "0.2em",
    },
    lineHeights: {
      shorter: "1.2",
      short: "1.35",
      base: "1.65",
      tall: "1.8",
    },
  },
  withProse()
);