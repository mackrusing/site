// types
import type { Metadata } from "next";
// styles
import "@/styles/global.scss";

//  metadata
export const metadata: Metadata = {
  title: "Mack Rusing",
  authors: { name: "Mack Rusing", url: "https://mackk.net" },
  description: "Welcome! I'm Mack Rusing, a web & software developer from Phoenix, Arizona.",
  keywords: ["Mack", "Rusing", "developer", "blog", "portfolio"],
  colorScheme: "dark light",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
