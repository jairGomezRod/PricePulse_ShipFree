import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import type React from "react"; // Import React
import { cn } from "@/lib/utils";
import Navbar from "./(site)/Navbar";
import Footer from "./(site)/Footer";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PricePulse",
  description: "PricePulse - Gestiona tu lista de compras eficientemente",
  keywords: [
    "saas",
    "boilerplate",
    "free",
    "free boilerplate",
    "github",
    "shoping",
    "price pulse",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(bricolageGrotesque.className, "antialiased")}>
        <Navbar />
        <div className="p-24">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
