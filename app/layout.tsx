import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reyansh Ayurveda | Healing Naturally Through Ayurveda",
  description: "Authentic Ayurvedic treatments, Panchakarma therapy, and herbal medicine at Reyansh Ayurveda clinic.",
  keywords: ["Ayurveda", "Panchakarma", "Herbal Medicine", "Natural Healing", "Reyansh Ayurveda"],
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialFloatingBar from "@/components/SocialFloatingBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        {children}
        <Footer />
        <SocialFloatingBar />
      </body>
    </html>
  );
}
