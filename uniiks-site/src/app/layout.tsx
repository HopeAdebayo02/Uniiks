import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "UNIIKS LLC | Home & Community-Based Disability Services in St. Paul, MN",
    template: "%s | UNIIKS LLC",
  },
  description:
    "UNIIKS LLC provides compassionate, person-centered home and community-based services for individuals with disabilities in St. Paul, Minnesota. Services include Individualized Home Supports, respite care, companion services, and employment support.",
  keywords: [
    "disability services",
    "home support",
    "St. Paul MN",
    "HCBS",
    "individualized home supports",
    "family training",
    "respite care",
    "companion services",
    "CADI waiver",
    "DD waiver",
    "Minnesota disability services",
  ],
  openGraph: {
    title: "UNIIKS LLC | Home & Community-Based Disability Services",
    description:
      "Compassionate, person-centered home and community-based services for individuals with disabilities in St. Paul, Minnesota.",
    url: "https://uniikscare.com",
    siteName: "UNIIKS LLC",
    locale: "en_US",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
