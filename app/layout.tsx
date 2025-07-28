import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "armond schneider",
  description: "product design engineer",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "armond schneider",
    description: "product design engineer",
    url: "https://armond.me",
    siteName: "armond schneider",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "armond schneider - product design engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "armond schneider",
    description: "product design engineer",
    images: ["/images/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}