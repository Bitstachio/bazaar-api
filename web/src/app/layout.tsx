import Navbar from "@/components/layout/Navbar/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bazaar",
  description: "A modern platform for online shopping",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
