import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import StickySidebar from "./components/StickySidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hambana",
  description: "Hambana Company for Non-Specialied Wholesale Trade",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <StickySidebar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
