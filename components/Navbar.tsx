"use client"

import Link from "next/link"
// Button removed — not used in Navbar
import { ThemeToggle } from "@/components/theme-toggle"
// usePathname and cn removed — not used

export default function Navbar() {
  // pathname intentionally unused in this simple navbar

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-base md:text-lg font-semibold truncate">
          MERN Stack Docs
        </Link>
        <div className="flex items-center gap-1 md:gap-4">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
