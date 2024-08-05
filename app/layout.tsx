import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProviders from "@/providers/modal-providers";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store App Online",
  description: "Toko Online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProviders/>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
