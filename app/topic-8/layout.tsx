import type React from "react"
import type { Metadata } from "next"
import "../globals.css"

export const metadata: Metadata = {
  title: "Topic 8: SEO & Web Optimization",
  description:
    "Master Search Engine Optimization fundamentals including on-page SEO, technical SEO, metadata optimization, structured data, performance optimization, and best practices for modern web applications.",
  keywords: [
    "SEO tutorial",
    "search engine optimization",
    "on-page SEO",
    "technical SEO",
    "metadata optimization",
    "structured data",
    "schema markup",
    "web performance",
    "SEO best practices",
    "robots.txt",
    "sitemap.xml"
  ],
  openGraph: {
    title: "Topic 8: SEO & Web Optimization | MERN Docs",
    description: "Learn SEO fundamentals and best practices with practical examples for modern web applications.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
