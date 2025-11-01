'use client'

import { BookOpen, ArrowRight } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const courseData = [
  { day: 1, title: "Web Basics (HTML + CSS)", topics: 2 },
  { day: 2, title: "JavaScript Essentials", topics: 1 },
  { day: 3, title: "ReactJs", topics: 1 },
  { day: 4, title: "Tailwind CSS", topics: 1 },
  { day: 5, title: "NextJs", topics: 1 },
  { day: 6, title: "MongoDB", topics: 3 },
  { day: 7, title: "NodeJs", topics: 5 },
]


export default function CoursePage() {

  return (
    <div className="min-h-screen bg-background">

      {/* ---------- HERO ---------- */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              Developer Documentation
            </Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              MERN Full Stack Developer Documentation
            </h1>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Master the MERN Stack — from fundamentals to full-stack deployment with the MERN stack.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>No Prerequisites</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ---------- TOPICS ---------- */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-foreground">Topics</h2>
          <p className="text-muted-foreground">
            Click on any topic to view detailed lesson content and code examples
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courseData.map((day) => (
            <Link key={day.day} href={`/topic-${day.day}`} className="block h-full">
              <Card className="group h-full will-change-transform hover:border-primary hover:shadow-lg transition-transform duration-200 ease-out">
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-lg font-bold text-primary">
                      {day.day}
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                  <CardTitle className="text-lg">{day.title}</CardTitle>
                  <CardDescription>
                    Day {day.day} • {day.topics} topics
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- AUTHORS ---------- */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">Authors</h2>

          <div className="grid gap-8 lg:grid-cols-3">
            
            <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
              {[
                { name: "Sumit Santhosh Nair", contact: "CSE (AIML) • Semester 5" },
                { name: "Yathartha Aarush", contact: "CSE (AIML) • Semester 5" },
              ].map((person) => (
                <Card
                  key={person.name}
                  className="group relative overflow-hidden border border-border/60 bg-card/60 
                            transition-all duration-300 hover:-translate-y-1 hover:shadow-lg 
                            hover:border-primary/60 hover:bg-card/80"
                >
                  <CardHeader className="relative z-10 flex flex-col gap-2 ">
                    <div className="flex lg:flex-col w-full items-center gap-3">
                      <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                        {person.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <CardTitle className="text-lg text-center font-semibold transition-colors group-hover:text-primary">
                          {person.name}
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">
                          {person.contact}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  {/* glow overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-primary transition-opacity duration-300" />
                </Card>
              ))}
            </div>

            <div className="hover:cursor-pointer" onClick={() => window.open("https://github.com/sumit-s-nair/mern-docs/blob/main/contributions.md", "_blank")}>
              <Card
                className="group relative overflow-hidden border border-border/60 bg-card/60 
                          transition-all duration-300 hover:-translate-y-1 hover:shadow-lg 
                          hover:border-primary/60 hover:bg-card/80 w-full max-w-sm text-center p-6"
              >
                <CardHeader className="relative z-10">
                  <CardTitle className="text-lg font-semibold transition-colors group-hover:text-primary">
                    Want to Contribute?
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mt-2">
                    Check out our project on GitHub and help improve this documentation!
                  </CardDescription>
                </CardHeader>

                <a
                  href="https://github.com/sumit-s-nair/mern-docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center justify-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.41 7.86 10.94.58.1.79-.25.79-.56v-2.03c-3.19.69-3.86-1.54-3.86-1.54-.53-1.33-1.29-1.69-1.29-1.69-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.21 1.79 1.21 1.04 1.78 2.73 1.26 3.4.97.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.45.11-3.03 0 0 .97-.31 3.18 1.19a11 11 0 0 1 5.8 0c2.21-1.5 3.18-1.19 3.18-1.19.63 1.58.23 2.74.11 3.03.74.81 1.19 1.85 1.19 3.11 0 4.42-2.7 5.39-5.27 5.67.41.36.77 1.08.77 2.19v3.25c0 .31.21.67.8.56A10.5 10.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                  </svg>
                  View on GitHub
                </a>

                {/* glow overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-primary transition-opacity duration-300" />
              </Card>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-12">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">Top Contributors</h2>

          <div className="grid gap-8 lg:grid-cols-3">
            
            <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
              {[
                { name: "Vipul Bohra", contact: "CSE (AIML) • Semester 5" },
              ].map((person) => (
                <Card
                  key={person.name}
                  className="group relative overflow-hidden border border-border/60 bg-card/60 
                            transition-all duration-300 hover:-translate-y-1 hover:shadow-lg 
                            hover:border-primary/60 hover:bg-card/80"
                >
                  <CardHeader className="relative z-10 flex flex-col gap-2 ">
                    <div className="flex lg:flex-col w-full items-center gap-3">
                      <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                        {person.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <CardTitle className="text-lg text-center font-semibold transition-colors group-hover:text-primary">
                          {person.name}
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">
                          {person.contact}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  {/* glow overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-primary transition-opacity duration-300" />
                </Card>
              ))}
            </div>
          </div>
        </div>

      </section>

    </div>
  )
}
