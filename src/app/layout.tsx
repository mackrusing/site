// next
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
// styles
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fastly-cloud.typenetwork.com/projects/7853/fontface.css?65dc1e11"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body className={`dark ${sansFont.className}`}>{children}</body>
    </html>
  );
}
