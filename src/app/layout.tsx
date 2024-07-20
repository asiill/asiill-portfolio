import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aseel Shakra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <div className="top-left-h"></div>
          <div className="top-left-v"></div>
          <div className="bottom-right-h"></div>
          <div className="bottom-right-v"></div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
