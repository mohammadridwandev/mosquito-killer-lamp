import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import ScrollAnimate from "@/Components/ScrollAnimate";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mosquito Killer Lamp",
  description: "A website for a mosquito killer lamp product.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased suppressHydrationWarning`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollAnimate>
          <Navbar />
          {children}
          <Footer />
        </ScrollAnimate>
      </body>
    </html>
  );
}
