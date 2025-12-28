import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ExitIntentPopup from "./components/ExitIntentPopup";
import FlashSalePopup from "./components/FlashSalePopup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { ModalProvider } from "./context/ModalContext";
import ContactModal from "./components/ContactModal";

// ... existing imports

export const metadata: Metadata = {
  title: "R&B Pest Control",
  description: "Servicios profesionales de control de plagas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ModalProvider>
          {children}
          <ExitIntentPopup />
          <FlashSalePopup />
          <ContactModal />
        </ModalProvider>
      </body>
    </html>
  );
}
