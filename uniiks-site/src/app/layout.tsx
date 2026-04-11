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
    default: "UNIIKS | 144G Assisted Living in Brooklyn Park, MN",
    template: "%s | UNIIKS",
  },
  description:
    "UNIIKS provides 144G Assisted Living and 245D home & community-based services for individuals with disabilities and seniors in Brooklyn Park, Minnesota. Person-centered care that feels like family.",
  keywords: [
    "144G assisted living",
    "assisted living Brooklyn Park MN",
    "245D services",
    "disability services",
    "home support",
    "HCBS",
    "individualized home supports",
    "family training",
    "respite care",
    "companion services",
    "CADI waiver",
    "DD waiver",
    "Minnesota disability services",
    "community based services",
    "employment services disability",
    "homemaker services MN",
  ],
  openGraph: {
    title: "UNIIKS | 144G Assisted Living in Brooklyn Park, MN",
    description:
      "144G Assisted Living and 245D home & community-based services for individuals with disabilities and seniors in Brooklyn Park, Minnesota.",
    url: "https://uniikscare.com",
    siteName: "UNIIKS",
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
