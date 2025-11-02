'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function HomePage() {
  const topics = [
    {
      title: "1. MongoDB Setup",
      href: "/topic-6/mongodb-setup",
      points: ["Local Installation", "MongoDB Atlas (Cloud)", "Environment Setup", "PATH Configuration", "Verify Installation"],
    },
    {
      title: "2. MongoDB Basics & CRUD",
      href: "/topic-6/mongodb-basics",
      points: ["Understanding MongoDB", "Databases & Collections", "Insert Operations", "Read Operations", "Update Operations", "Delete Operations"],
    },
    {
      title: "3. MongoDB with Node.js",
      href: "/topic-6/mongodb-nodejs",
      points: ["Node.js Driver", "Using Mongoose ODM", "Database Indexing", "Aggregation Framework", "Schema Design", "Best Practices"],
    },
  ]

  const router = useRouter()

  return (
    <main className="overflow-x-hidden">
      <Button
            variant="ghost"
            size="sm"
            onClick={() => router.push('/')}
            className="flex items-center gap-1.5 m-3 sm:m-4 text-xs sm:text-sm shrink-0"
          >
            <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span className="whitespace-nowrap">Home</span>
          </Button>
      <section className="container mx-auto max-w-5xl px-3 sm:px-4 py-8 sm:py-12 md:py-16">
        <div className="flex flex-col gap-4 sm:gap-6">
          <h1 className="text-pretty text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight break-words">Learn MongoDB Essentials</h1>
          <p className="text-muted-foreground max-w-2xl leading-relaxed text-sm sm:text-base break-words">
            Master MongoDB from scratch — learn setup, CRUD operations, indexing, aggregation pipelines, schema design, and deployment best practices. Hands-on examples with both the native MongoDB driver and Mongoose ODM.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-3 sm:px-4 pb-12 sm:pb-16">
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
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

                <CardContent className="text-xs sm:text-sm">
                  <ul className="list-disc pl-4 sm:pl-5 leading-6 sm:leading-7 marker:text-primary/70 text-muted-foreground group-hover:text-foreground transition-colors">
                    {t.points.map((p) => (
                      <li key={p} className="break-words">{p}</li>
                    ))}
                  </ul>

                  <div className="mt-3 sm:mt-4">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="transition-all duration-200 hover:bg-primary hover:text-primary-foreground text-xs sm:text-sm"
                    >
                      <span className="whitespace-nowrap">Open lesson</span>
                    </Button>
                  </div>
                </CardContent>

                {/* ✨ Decorative hover glow */}
                <div className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-10 bg-primary" />
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
