// app/layout.tsx

import type { Metadata } from "next";
import { Lato } from "next/font/google"; // 1. Import Lato from next/font/google
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// 2. Font setup for Lato
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"], // 3. You must specify weights for non-variable fonts
  variable: "--font-lato", // 4. Define a CSS variable for Tailwind
});

export const metadata: Metadata = {
  title: "Sinneo Group",
  description: "Building ventures that transform business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lato.variable}`}>
      <body
        className={`antialiased bg-gray-50 text-gray-900`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}