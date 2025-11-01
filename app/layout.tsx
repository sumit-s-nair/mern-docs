import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar"
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: {
    default: "MERN Full Stack Documentation | Learn Web Development",
    template: "%s | MERN Docs"
  },
  description:
    "Master web development from HTML to deployment. Build a complete MERN stack application with clear explanations, live previews, and copyable examples.",
  keywords: [
    "MERN stack",
    "web development",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "full stack development",
    "tutorial",
    "documentation"
  ],
  authors: [
    { name: "Yathartha Aarush" },
    { name: "Sumit Santhosh Nair" }
  ],
  creator: "MERN Docs Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mern-docs.vercel.app",
    title: "MERN Full Stack Documentation",
    description: "Master web development from HTML to deployment. Build a complete MERN stack application.",
    siteName: "MERN Docs",
  },
  twitter: {
    card: "summary_large_image",
    title: "MERN Full Stack Documentation",
    description: "Master web development from HTML to deployment. Build a complete MERN stack application.",
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/placeholder-logo.svg" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`font-sans antialiased transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
