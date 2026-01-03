import Link from 'next/link'
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center">
      <div className="space-y-6">
        <div className="space-y-3">
          <h1 className="text-8xl font-bold tracking-tighter sm:text-9xl">
            404
          </h1>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Page Not Found
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Button asChild size="lg">
            <Link href="/">
              Return Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/topic-1">
              Browse Topics
            </Link>
          </Button>
        </div>

        <div className="pt-8 border-t">
          <p className="text-sm text-muted-foreground mb-3">
            Popular Topics:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Button asChild variant="link" size="sm">
              <Link href="/topic-1/html">HTML</Link>
            </Button>
            <Button asChild variant="link" size="sm">
              <Link href="/topic-1/css">CSS</Link>
            </Button>
            <Button asChild variant="link" size="sm">
              <Link href="/topic-2/javascript">JavaScript</Link>
            </Button>
            <Button asChild variant="link" size="sm">
              <Link href="/topic-3/react">React</Link>
            </Button>
            <Button asChild variant="link" size="sm">
              <Link href="/topic-5/nextjs">Next.js</Link>
            </Button>
            <Button asChild variant="link" size="sm">
              <Link href="/topic-6/mongodb-basics">MongoDB</Link>
            </Button>
            <Button asChild variant="link" size="sm">
              <Link href="/topic-7/nodejs-setup">Node.js</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
