import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar"
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  metadataBase: new URL('https://mern-docs.vercel.app'),
  title: {
    default: "MERN Full Stack Documentation | Learn Web Development",
    template: "%s | MERN Docs"
  },
  description:
    "Master web development from HTML to deployment. Build a complete MERN stack application with clear explanations, live previews, and copyable examples.",
  alternates: {
    canonical: '/',
  },
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
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'MERN Full Stack Documentation',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MERN Full Stack Documentation",
    description: "Master web development from HTML to deployment. Build a complete MERN stack application.",
    images: ['/logo.png'],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'MERN Docs',
              description: 'Comprehensive MERN stack documentation and tutorials',
              url: 'https://mern-docs.vercel.app',
              author: [
                {
                  '@type': 'Person',
                  name: 'Yathartha Aarush',
                },
                {
                  '@type': 'Person',
                  name: 'Sumit Santhosh Nair',
                },
              ],
              publisher: {
                '@type': 'Organization',
                name: 'MERN Docs Team',
              },
              inLanguage: 'en-US',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://mern-docs.vercel.app/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Course',
              name: 'MERN Full Stack Development Course',
              description: 'Learn MERN stack from basics to deployment',
              provider: {
                '@type': 'Organization',
                name: 'MERN Docs',
                sameAs: 'https://mern-docs.vercel.app',
              },
              educationalLevel: 'Beginner to Advanced',
              inLanguage: 'en-US',
              hasCourseInstance: [
                {
                  '@type': 'CourseInstance',
                  courseMode: 'online',
                  courseWorkload: 'PT40H',
                },
              ],
            }),
          }}
        />
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
