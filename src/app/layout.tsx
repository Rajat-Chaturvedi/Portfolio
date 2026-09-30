import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderServer from "./components/Header/HeaderServer";
import WhatsAppWidget from "./components/Whatsapp/WhatsAppWidget";
import { SITE_CONTENT } from "./constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SITE_CONTENT.title,
  description: SITE_CONTENT.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderServer />
        {children}

        {/* WhatsApp Floating Widget */}
        <WhatsAppWidget phoneNumber={SITE_CONTENT.whatsappNumber} />
      </body>
    </html>
  );
}
