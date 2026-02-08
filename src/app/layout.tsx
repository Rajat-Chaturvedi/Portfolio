import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderServer from "./components/Header/HeaderServer";
import WhatsAppWidget from "./components/Whatsapp/WhatsAppWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rajat Chaturvedi | FullStack Developer",
  description: "A master was once a beginner ...",
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
        <WhatsAppWidget phoneNumber="918979966510" />
      </body>
    </html>
  );
}
