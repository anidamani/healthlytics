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
      <head>
        <title>Healthlytics.ai - AI-Powered Healthcare Analytics Solutions</title>
        <meta name="description" content="Healthlytics.ai delivers cutting-edge AI and data analytics solutions for healthcare organizations. Optimize operations, improve patient outcomes, and ensure regulatory compliance."/>
        <meta name="keywords" content="healthcare AI, medical data analytics, clinical decision support, healthcare compliance, predictive analytics"/>
        <meta property="og:title" content="Healthlytics.ai - Transform Healthcare with AI Analytics"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://healthlytics.ai"/>
        <meta property="og:image" content="https://healthlytics.ai/og-image.jpg"/>
        <link rel="icon" href="/favicon.ico" />
      </head>
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
