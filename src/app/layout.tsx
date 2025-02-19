import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const tajawal = Tajawal({ 
  weight: "400",
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Aseel Shakra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={tajawal.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
