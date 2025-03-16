import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import CallToAction from "./components/Home/CallToAction";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "healthlytics.ai",
  description: "Revolutionizing Healthcare Delivery through Data-Driven Innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` px-[12px] sm:px-[20px] lg:px-[32px] bg-[#f4f4f4] `}
      >
        <main className="max-w-[1440px] mx-auto">
        <Header/>
        {children}
        <CallToAction/>
        <Footer/>
        </main>
      </body>
    </html>
  );
}
