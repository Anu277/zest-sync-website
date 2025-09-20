import type React from "react"
import type { Metadata, Viewport } from "next"
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
    "Revolutionary offline video player with AI-powered subtitle generation, multi-language translation, and offline video processing. Supports 14 languages with Whisper AI and Helsinki MarianMT models.",
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
  metadataBase: new URL("https://zest-sync-player.vercel.app"),
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
    description: "Revolutionary offline video player with AI-powered subtitle generation and multi-language translation. Supports 14 languages.",
    url: "https://zest-sync-player.vercel.app",
    siteName: "Zest Sync Player",
    images: [
      {
        url: "/assets/images/logo.png",
        width: 1200,
        height: 1200,
        alt: "Zest Sync Player - AI-Powered Video Player Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zest Sync Player - AI-Powered Video Player",
    description: "Revolutionary offline video player with AI subtitle generation and multi-language translation",
    images: ["/assets/images/logo.png"],
    creator: "@anub0709",
  },
  verification: {
    google: "0JdHd_p6bt9Tf9cXiYhWjMzq7XUMvez9zzb8pMBKa5Y",
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
