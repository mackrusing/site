// next
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
// vercel
import { SpeedInsights } from "@vercel/speed-insights/next";
// styles
import "@/styles/main.css";

// font
const sansFont = localFont({
  src: [
    {
      path: "../fonts/input-sans-condensed-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/input-sans-condensed-regular-italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/input-sans-condensed-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/input-sans-condensed-bold-italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

//
// meta
//

export const metadata: Metadata = {
  title: "Mack Rusing",
  description:
    "Hi, I'm Mack! I'm an 18-year-old software engineer currently living in Phoenix, Arizona. I love web development, the command-line, and coffee (lots of coffee).",
  keywords: ["Mack", "Rusing", "developer", "blog", "portfolio"],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

//
// layout
//

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`dark ${sansFont.className}`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
