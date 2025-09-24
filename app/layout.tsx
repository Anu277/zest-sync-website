import type React from "react"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#e50914',
}

export const metadata: Metadata = {
  title: {
    default: "Zest Sync Player - AI-Powered Video Player with Smart Subtitles",
    template: "%s | Zest Sync Player"
  },
  description:
    "AI-powered video player with smart subtitle generation, real-time translation, and multi-language support. Features Whisper AI and Helsinki MarianMT models for 14+ languages.",
  keywords: [
    "video player", "AI subtitles", "offline player", "subtitle generator", 
    "video translation", "Whisper AI", "MarianMT", "smart player", 
    "automatic subtitles", "multi-language", "offline video", "AI translation",
    "video accessibility", "subtitle translation", "media player", "zest sync player"
  ],
  authors: [{ name: "Anurag Bheemani", url: "https://linkedin.com/in/anurag-bheemani" }],
  creator: "Anurag Bheemani",
  publisher: "Anurag Bheemani",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://zest-sync.netlify.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Zest Sync Player - AI-Powered Video Player with Smart Subtitles",
    description: "AI-powered video player with smart subtitle generation and real-time multi-language translation. Supports 14+ languages.",
    url: "https://zestsync.netlify.app",
    siteName: "Zest Sync Player",
    images: [
      {
        url: "/logo_900.webp",
        width: 1200,
        height: 1200,
        alt: "Zest Sync Player - AI-Powered Video Player Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Zest Sync Player - AI-Powered Video Player",
    description: "AI-powered video player with smart subtitle generation and real-time multi-language translation",
    images: ["/logo_900.webp"],
    creator: "@anu_b_277",
  },
  icons: {
    icon: "/icon.ico",
    shortcut: "/icon.ico",
    apple: "/icon.ico",
  },
  verification: {
    google: "0JdHd_p6bt9Tf9cXiYhWjMzq7XUMvez9zzb8pMBKa5Y",
  },
  category: "technology",
  other: {
    // WhatsApp sharing
    "og:image:width": "1200",
    "og:image:height": "1200",
    // Telegram sharing
    "telegram:channel": "@zestsyncplayer",
    // Instagram (uses OpenGraph)
    "article:author": "https://instagram.com/anurag_bheemani",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-TBTEP01CW6"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TBTEP01CW6');
        `}
      </Script>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
