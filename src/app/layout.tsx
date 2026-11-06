import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Fragment_Mono } from "next/font/google";
import "./globals.css";

const switzer = localFont({
  src: [
    {
      path: "../../public/sites/resido/fonts/switzer-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/sites/resido/fonts/switzer-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/sites/resido/fonts/switzer-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-switzer",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-fragment-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sayaro - Architecture, Construction & Renovation",
  description:
    "Architecture, construction, and renovation services built for precision, purpose, and lasting quality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${switzer.variable} ${inter.variable} ${fragmentMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
