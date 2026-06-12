import "./globals.css";
import { Playfair_Display, DM_Sans } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "Evan Asti Portfolio",
  description: "COGS 125 Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body style={{ margin: 0, padding: 0, background: "#050505", color: "white" }}>
        {children}
      </body>
    </html>
  );
}