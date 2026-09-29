import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

import { PersonStructuredData } from "@/components/seo/person-structured-data";
import { siteConfig } from "@/config/site";
import { getSiteUrl } from "@/lib/site-url";

import "./globals.css";

const geistSans = Geist({
  display: "swap",
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  display: "swap",
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();
const socialImageUrl = siteUrl ? new URL("og.png", siteUrl) : undefined;

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.personName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.personName,
  authors: [
    {
      name: siteConfig.personName,
      ...(siteUrl ? { url: siteUrl } : {}),
    },
  ],
  creator: siteConfig.personName,
  alternates: siteUrl ? { canonical: siteUrl } : undefined,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.personName,
    url: siteUrl,
    images: socialImageUrl
      ? [
          {
            url: socialImageUrl,
            width: 1200,
            height: 630,
            alt: `${siteConfig.personName} — AI & Data Science Student`,
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: socialImageUrl ? [socialImageUrl] : undefined,
  },
  robots: {
    index: Boolean(siteUrl),
    follow: Boolean(siteUrl),
    googleBot: {
      index: Boolean(siteUrl),
      follow: Boolean(siteUrl),
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon", type: "image/png", sizes: "64x64" }],
    shortcut: "/icon",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#080a0f",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <PersonStructuredData />
        {children}
      </body>
    </html>
  );
}
