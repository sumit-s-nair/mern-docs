import type React from "react"
import type { Metadata } from "next"
import "../globals.css"

export const metadata: Metadata = {
  title: "Topic 7: Node.js",
  description:
    "Complete Node.js guide: installation & setup, fundamentals, modules & NPM, best practices, and API development with Express.js.",
  keywords: ["Node.js tutorial", "npm", "Express.js", "REST API", "async programming", "Node.js modules"],
  openGraph: {
    title: "Topic 7: Node.js | MERN Docs",
    description: "Comprehensive Node.js guide from setup to building production-ready APIs.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={`font-sans`}>
      <main>{children}</main>
    </div>
  )
}
