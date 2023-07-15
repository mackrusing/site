//
// RootLayout
//  site-wide metadata, fonts, and layout
//

// types
import type { Metadata } from "next";
// fonts
import { IBM_Plex_Sans } from "next/font/google";
import localFont from "next/font/local";
// styles
import "@/styles/global.scss";

//  metadata
export const metadata: Metadata = {
  title: "Mack Rusing",
  authors: { name: "Mack Rusing"},
  creator: "Mack Rusing",
  description: "Welcome! I'm Mack Rusing, a web & software developer from Phoenix, Arizona.",
  keywords: ["Mack", "Rusing", "developer", "blog", "portfolio"],
  colorScheme: "dark light",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mackk.net"),
  openGraph: {
    title: "Mack Rusing",
    description: "Welcome! I'm Mack Rusing, a web & software developer from Phoenix, Arizona.",
    url: "https://mackk.net",
    siteName: "Mack Rusing",
    locale: "en_US",
    type: "website",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#21252b" },
  ],
  assets: ["https://static.mackk.net"],
};

// fonts
const plex = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  fallback: ["sans-serif"],
  display: "swap",
});

const symbols = localFont({
  variable: "--font-material-symbols-rounded",
  src: "../fonts/material-symbols-rounded.woff2",
  display: "block",
});

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${plex.variable} ${symbols.variable}`}>
      <body>{children}</body>
    </html>
  )
}
