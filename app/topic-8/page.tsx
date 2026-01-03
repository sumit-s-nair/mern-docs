'use client'

import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function Topic8Page() {
  const topics = [
    {
      title: "SEO Fundamentals",
      href: "/topic-8/seo-fundamentals",
      points: ["What is SEO", "How search engines work", "SEO terminology", "Ranking factors"],
    },
    {
      title: "On-Page SEO",
      href: "/topic-8/on-page-seo",
      points: ["Meta tags", "Heading structure", "Content optimization", "Internal linking"],
    },
    {
      title: "Technical SEO",
      href: "/topic-8/technical-seo",
      points: ["Robots.txt & Sitemap", "Structured data", "Performance optimization", "Mobile-first"],
    },
    {
      title: "SEO Best Practices",
      href: "/topic-8/seo-best-practices",
      points: ["Next.js SEO", "React SEO patterns", "Common mistakes", "Tools & testing"],
    },
  ]

  const router = useRouter()

  return (
    <main>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => router.push('/')}
        className="flex items-center gap-2 m-4"
      >
        <ArrowLeft className="h-4 w-4" />
        Home
      </Button>
      <section className="container mx-auto max-w-5xl px-4 py-8 md:py-12 lg:py-16">
        <div className="flex flex-col gap-4 md:gap-6">
          <h1 className="text-balance text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            SEO & Web Optimization
          </h1>
          <p className="text-muted-foreground max-w-2xl leading-relaxed text-base md:text-lg">
            Learn Search Engine Optimization from basics to advanced techniques. Understand how to make your websites discoverable, 
            rank higher in search results, and implement SEO best practices in modern frameworks like Next.js.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-4 pb-12 md:pb-16">
        <div className="grid gap-4 md:gap-6 sm:grid-cols-1 md:grid-cols-2">
          {topics.map((t) => (
            <Link
              key={t.title}
              href={t.href}
              aria-label={`Open ${t.title} lesson`}
              className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              <Card
                className="relative h-full cursor-pointer overflow-hidden border border-border/60 bg-card/60
                          transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-primary/60
                          group-hover:bg-card/80"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between text-lg font-semibold">
                    <span className="transition-colors group-hover:text-primary">
                      {t.title}
                    </span>
                    <ArrowRight
                      className="size-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary"
                    />
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    What you&apos;ll learn
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-sm">
                  <ul className="list-disc pl-5 leading-7 marker:text-primary/70 text-muted-foreground group-hover:text-foreground transition-colors">
                    {t.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
