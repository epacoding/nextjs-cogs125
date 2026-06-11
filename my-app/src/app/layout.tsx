import type { Metadata } from "next";
import { playfair, dmSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evan Asti — COGS 125 Portfolio",
  description: "A design portfolio for COGS 125.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
