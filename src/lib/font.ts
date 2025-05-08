import { Dancing_Script, Orbitron, Playfair_Display } from "next/font/google";

export const brandTitleFont = Dancing_Script({
  subsets: ["latin"],
  weight: "700",
  style: "normal",
  variable: "--font-brand-title",
});

export const brandSubtitleFont = Orbitron({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-brand-subtitle",
});

export const brandTextFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-brand-text",
});


