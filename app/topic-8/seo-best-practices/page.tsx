'use client'
import { Check, AlertTriangle, X, Search, Zap, BarChart, Target, Wrench } from 'lucide-react';import { LessonLayout } from "@/components/lesson/lesson-layout"
import { LessonSection } from "@/components/lesson/lesson-section"
import { CodeBlock } from "@/components/lesson/code-block"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function SeoBestPracticesPage() {
  const router = useRouter()
  return (
    <LessonLayout
      title="SEO Best Practices"
      intro="Learn how to implement SEO best practices in Next.js applications, avoid common SEO mistakes, and use essential tools for testing and monitoring your site's search performance."
      toc={[
        { href: "#nextjs-seo", label: "Next.js SEO" },
        { href: "#react-seo", label: "React SEO Patterns" },
        { href: "#common-mistakes", label: "Common Mistakes" },
        { href: "#seo-tools", label: "SEO Tools" },
        { href: "#testing", label: "Testing & Validation" },
        { href: "#monitoring", label: "Monitoring & Analytics" },
        { href: "#checklist", label: "SEO Checklist" },
      ]}
    >
      <div className="mb-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.push('/topic-8')}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Topics
        </Button>
      </div>

      <LessonSection id="nextjs-seo" title="Next.js SEO Implementation">
        <p className="text-muted-foreground mb-4">
          Next.js provides powerful built-in features for SEO. The App Router (Next.js 13+) offers improved metadata handling 
          and automatic optimization.
        </p>

        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-950/20 border-l-4 border-blue-500 p-4 rounded-r-md">
            <h3 className="font-semibold mb-2">1. Metadata Configuration</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Use the <code>Metadata</code> API for static and dynamic metadata:
            </p>
            <CodeBlock
              language="typescript"
              code={`// app/layout.tsx - Root layout metadata
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://yoursite.com'),
  title: {
    default: 'Your Site Name',
    template: '%s | Your Site Name',
  },
  description: 'Your site description',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Company',
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yoursite.com',
    title: 'Your Site Name',
    description: 'Your site description',
    siteName: 'Your Site',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Your site preview',
    }],
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Your Site Name',
    description: 'Your site description',
    images: ['/og-image.jpg'],
  },
  
  // Robots
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
  
  // Verification
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

// app/blog/[slug]/page.tsx - Dynamic page metadata
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug)
  
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: \`/blog/\${params.slug}\`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [post.coverImage],
    },
  }
}`}
            />
          </div>

          <div className="bg-gradient-to-r from-green-50 to-transparent dark:from-green-950/20 border-l-4 border-green-500 p-4 rounded-r-md">
            <h3 className="font-semibold mb-2">2. Dynamic robots.txt</h3>
            <CodeBlock
              language="typescript"
              code={`// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
    ],
    sitemap: 'https://yoursite.com/sitemap.xml',
    host: 'https://yoursite.com',
  }
}`}
            />
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-950/20 border-l-4 border-purple-500 p-4 rounded-r-md">
            <h3 className="font-semibold mb-2">3. Dynamic Sitemap</h3>
            <CodeBlock
              language="typescript"
              code={`// app/sitemap.ts
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://yoursite.com'
  
  // Fetch dynamic data (e.g., blog posts)
  const posts = await getAllPosts()
  
  const postUrls = posts.map((post) => ({
    url: \`\${baseUrl}/blog/\${post.slug}\`,
    lastModified: post.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: \`\${baseUrl}/blog\`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...postUrls,
  ]
}`}
            />
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-transparent dark:from-orange-950/20 border-l-4 border-orange-500 p-4 rounded-r-md">
            <h3 className="font-semibold mb-2">4. JSON-LD Structured Data</h3>
            <CodeBlock
              language="typescript"
              code={`// app/blog/[slug]/page.tsx
export default async function BlogPost({ params }) {
  const post = await getPost(params.slug)
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
  }
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <h1>{post.title}</h1>
        {/* Post content */}
      </article>
    </>
  )
}`}
            />
          </div>
        </div>
      </LessonSection>

      <LessonSection id="react-seo" title="React SEO Patterns">
        <p className="text-muted-foreground mb-4">
          SEO challenges in React and solutions for better search engine visibility.
        </p>

        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2"><Check className="w-5 h-5 text-green-600 dark:text-green-400" /> Server-Side Rendering (SSR)</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Next.js renders pages on the server, making content immediately available to search engines.
            </p>
            <CodeBlock
              language="typescript"
              code={`// SSR with App Router (default in Next.js 13+)
export default async function Page() {
  const data = await fetch('https://api.example.com/data')
  const json = await data.json()
  
  return <div>{json.title}</div>
}

// Force dynamic rendering if needed
export const dynamic = 'force-dynamic'`}
            />
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2"><Check className="w-5 h-5 text-green-600 dark:text-green-400" /> Static Site Generation (SSG)</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Pre-render pages at build time for best SEO and performance.
            </p>
            <CodeBlock
              language="typescript"
              code={`// SSG is default in Next.js App Router
export default function Page() {
  return <div>Static content</div>
}

// Generate static params for dynamic routes
export async function generateStaticParams() {
  const posts = await getAllPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}`}
            />
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2"><Check className="w-5 h-5 text-green-600 dark:text-green-400" /> Incremental Static Regeneration (ISR)</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Update static content without rebuilding the entire site.
            </p>
            <CodeBlock
              language="typescript"
              code={`// Revalidate every 60 seconds
export const revalidate = 60

export default async function Page() {
  const data = await fetch('https://api.example.com/data')
  const json = await data.json()
  
  return <div>{json.title}</div>
}`}
            />
          </div>

          <div className="border rounded-lg p-4 bg-yellow-50 dark:bg-yellow-950/20">
            <h3 className="font-semibold mb-2 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" /> Client-Side Rendering Limitations</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Search engines may not execute JavaScript or wait for client-side data fetching.
            </p>
            <CodeBlock
              language="typescript"
              code={`// Bad for SEO - Content not available on first render
'use client'
import { useState, useEffect } from 'react'

export default function BadPage() {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData)
  }, [])
  
  if (!data) return <div>Loading...</div>
  return <div>{data.title}</div>
}

// Good for SEO - Content available immediately
export default async function GoodPage() {
  const data = await fetch('/api/data')
  const json = await data.json()
  
  return <div>{json.title}</div>
}`}
            />
          </div>
        </div>
      </LessonSection>

      <LessonSection id="common-mistakes" title="Common SEO Mistakes to Avoid">
        <div className="space-y-4">
          <div className="border-l-4 border-red-500 bg-red-50 dark:bg-red-950/10 p-4 rounded-r-md">
            <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2 flex items-center gap-2"><X className="w-5 h-5" /> Duplicate Content</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Multiple URLs with identical or very similar content confuses search engines.
            </p>
            <p className="text-sm"><strong>Solution:</strong> Use canonical tags, 301 redirects, or robots.txt to specify preferred URLs.</p>
          </div>

          <div className="border-l-4 border-red-500 bg-red-50 dark:bg-red-950/10 p-4 rounded-r-md">
            <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2 flex items-center gap-2"><X className="w-5 h-5" /> Slow Page Speed</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Slow sites rank lower and users abandon them quickly.
            </p>
            <p className="text-sm"><strong>Solution:</strong> Optimize images, use CDN, minimize JavaScript, implement caching.</p>
          </div>

          <div className="border-l-4 border-red-500 bg-red-50 dark:bg-red-950/10 p-4 rounded-r-md">
            <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2 flex items-center gap-2"><X className="w-5 h-5" /> Missing or Poor Meta Tags</h3>
            <p className="text-sm text-muted-foreground mb-2">
              No titles, descriptions, or duplicate meta tags across pages.
            </p>
            <p className="text-sm"><strong>Solution:</strong> Unique, descriptive meta tags for every page with target keywords.</p>
          </div>

          <div className="border-l-4 border-red-500 bg-red-50 dark:bg-red-950/10 p-4 rounded-r-md">
            <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2 flex items-center gap-2"><X className="w-5 h-5" /> Not Mobile-Friendly</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Site doesn't work well on mobile devices.
            </p>
            <p className="text-sm"><strong>Solution:</strong> Responsive design, mobile-first approach, test on real devices.</p>
          </div>

          <div className="border-l-4 border-red-500 bg-red-50 dark:bg-red-950/10 p-4 rounded-r-md">
            <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2 flex items-center gap-2"><X className="w-5 h-5" /> Broken Links (404s)</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Internal or external links that lead to error pages.
            </p>
            <p className="text-sm"><strong>Solution:</strong> Regularly audit links, implement custom 404 pages, set up 301 redirects.</p>
          </div>

          <div className="border-l-4 border-red-500 bg-red-50 dark:bg-red-950/10 p-4 rounded-r-md">
            <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2 flex items-center gap-2"><X className="w-5 h-5" /> Keyword Stuffing</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Overusing keywords unnaturally to manipulate rankings.
            </p>
            <p className="text-sm"><strong>Solution:</strong> Use keywords naturally, focus on semantic variations, prioritize user experience.</p>
          </div>

          <div className="border-l-4 border-red-500 bg-red-50 dark:bg-red-950/10 p-4 rounded-r-md">
            <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2 flex items-center gap-2"><X className="w-5 h-5" /> Ignoring Analytics</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Not tracking performance or user behavior.
            </p>
            <p className="text-sm"><strong>Solution:</strong> Set up Google Analytics, Search Console, monitor key metrics regularly.</p>
          </div>

          <div className="border-l-4 border-red-500 bg-red-50 dark:bg-red-950/10 p-4 rounded-r-md">
            <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2 flex items-center gap-2"><X className="w-5 h-5" /> Blocking Search Engines</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Accidentally blocking crawlers with robots.txt or meta noindex tags.
            </p>
            <p className="text-sm"><strong>Solution:</strong> Verify robots.txt and meta tags, test in Google Search Console.</p>
          </div>
        </div>
      </LessonSection>

      <LessonSection id="seo-tools" title="Essential SEO Tools">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="border rounded-lg p-4 bg-gradient-to-br from-card to-blue-50 dark:to-blue-950/10">
            <h3 className="font-semibold mb-2 flex items-center gap-2"><Search className="w-5 h-5" /> Google Search Console</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Monitor search performance, submit sitemaps, fix indexing issues.
            </p>
            <ul className="list-disc pl-5 text-xs text-muted-foreground space-y-1">
              <li>Track keyword rankings and impressions</li>
              <li>Identify crawl errors</li>
              <li>Submit URLs for indexing</li>
              <li>Monitor Core Web Vitals</li>
            </ul>
            <p className="text-xs mt-2 text-primary">Free | search.google.com/search-console</p>
          </div>

          <div className="border rounded-lg p-4 bg-gradient-to-br from-card to-green-50 dark:to-green-950/10">
            <h3 className="font-semibold mb-2 flex items-center gap-2"><Zap className="w-5 h-5" /> PageSpeed Insights</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Analyze page performance and get optimization suggestions.
            </p>
            <ul className="list-disc pl-5 text-xs text-muted-foreground space-y-1">
              <li>Core Web Vitals metrics</li>
              <li>Performance opportunities</li>
              <li>Mobile and desktop analysis</li>
              <li>Lighthouse integration</li>
            </ul>
            <p className="text-xs mt-2 text-primary">Free | pagespeed.web.dev</p>
          </div>

          <div className="border rounded-lg p-4 bg-gradient-to-br from-card to-purple-50 dark:to-purple-950/10">
            <h3 className="font-semibold mb-2 flex items-center gap-2"><BarChart className="w-5 h-5" /> Google Analytics</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Track user behavior, traffic sources, and conversions.
            </p>
            <ul className="list-disc pl-5 text-xs text-muted-foreground space-y-1">
              <li>Real-time visitor tracking</li>
              <li>Traffic source analysis</li>
              <li>User behavior flows</li>
              <li>Conversion tracking</li>
            </ul>
            <p className="text-xs mt-2 text-primary">Free | analytics.google.com</p>
          </div>

          <div className="border rounded-lg p-4 bg-gradient-to-br from-card to-orange-50 dark:to-orange-950/10">
            <h3 className="font-semibold mb-2 flex items-center gap-2"><Target className="w-5 h-5" /> Ahrefs / SEMrush</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Comprehensive SEO platform for keyword research and competitor analysis.
            </p>
            <ul className="list-disc pl-5 text-xs text-muted-foreground space-y-1">
              <li>Keyword research and difficulty</li>
              <li>Backlink analysis</li>
              <li>Competitor tracking</li>
              <li>Site audit tools</li>
            </ul>
            <p className="text-xs mt-2 text-primary">Paid | ahrefs.com / semrush.com</p>
          </div>

          <div className="border rounded-lg p-4 bg-gradient-to-br from-card to-pink-50 dark:to-pink-950/10">
            <h3 className="font-semibold mb-2 flex items-center gap-2"><Wrench className="w-5 h-5" /> Screaming Frog</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Desktop tool for crawling websites and identifying technical SEO issues.
            </p>
            <ul className="list-disc pl-5 text-xs text-muted-foreground space-y-1">
              <li>Site crawling and analysis</li>
              <li>Find broken links</li>
              <li>Audit redirects</li>
              <li>Analyze page titles and meta</li>
            </ul>
            <p className="text-xs mt-2 text-primary">Free (500 URLs) / Paid | screamingfrog.co.uk</p>
          </div>

          <div className="border rounded-lg p-4 bg-gradient-to-br from-card to-yellow-50 dark:to-yellow-950/10">
            <h3 className="font-semibold mb-2 flex items-center gap-2"><Check className="w-5 h-5 text-green-600 dark:text-green-400" /> Schema Validator</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Test and validate structured data markup.
            </p>
            <ul className="list-disc pl-5 text-xs text-muted-foreground space-y-1">
              <li>Validate JSON-LD syntax</li>
              <li>Preview rich results</li>
              <li>Check schema errors</li>
              <li>Test multiple formats</li>
            </ul>
            <p className="text-xs mt-2 text-primary">Free | validator.schema.org</p>
          </div>
        </div>
      </LessonSection>

      <LessonSection id="testing" title="Testing & Validation">
        <p className="text-muted-foreground mb-4">
          Regular testing ensures your SEO implementations are working correctly.
        </p>

        <div className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-md">
            <h3 className="font-semibold mb-2">1. SEO Checklist Before Launch</h3>
            <ul className="list-none space-y-2 text-sm">
              <li><Check className="w-4 h-4 inline mr-2 text-green-600 dark:text-green-400" />Unique title and meta description for each page</li>
              <li><Check className="w-4 h-4 inline mr-2 text-green-600 dark:text-green-400" />robots.txt file configured correctly</li>
              <li><Check className="w-4 h-4 inline mr-2 text-green-600 dark:text-green-400" />XML sitemap generated and submitted</li>
              <li><Check className="w-4 h-4 inline mr-2 text-green-600 dark:text-green-400" />HTTPS enabled across entire site</li>
              <li><Check className="w-4 h-4 inline mr-2 text-green-600 dark:text-green-400" />Canonical URLs set properly</li>
              <li><Check className="w-4 h-4 inline mr-2 text-green-600 dark:text-green-400" />Structured data implemented and validated</li>
              <li><Check className="w-4 h-4 inline mr-2 text-green-600 dark:text-green-400" />Mobile-responsive design</li>
              <li><Check className="w-4 h-4 inline mr-2 text-green-600 dark:text-green-400" />Page speed optimized (&lt;3 seconds)</li>
              <li><Check className="w-4 h-4 inline mr-2 text-green-600 dark:text-green-400" />No broken internal links</li>
              <li><Check className="w-4 h-4 inline mr-2 text-green-600 dark:text-green-400" />Images have alt text</li>
              <li><Check className="w-4 h-4 inline mr-2 text-green-600 dark:text-green-400" />Proper heading hierarchy (H1-H6)</li>
              <li><Check className="w-4 h-4 inline mr-2 text-green-600 dark:text-green-400" />Google Analytics and Search Console connected</li>
            </ul>
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <h3 className="font-semibold mb-2">2. Manual Testing Commands</h3>
            <CodeBlock
              language="bash"
              code={`# Test robots.txt
curl https://yoursite.com/robots.txt

# Test sitemap
curl https://yoursite.com/sitemap.xml

# Test meta tags (view source)
curl -s https://yoursite.com | grep -i "<title\\|<meta"

# Check for broken links with wget
wget --spider -r -nd -nv -o broken-links.log https://yoursite.com

# Test page speed
curl -o /dev/null -s -w "Total: %{time_total}s\\n" https://yoursite.com`}
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <h3 className="font-semibold mb-2">3. Automated SEO Testing</h3>
            <CodeBlock
              language="typescript"
              code={`// tests/seo.test.ts
import { test, expect } from '@playwright/test'

test('homepage has correct meta tags', async ({ page }) => {
  await page.goto('/')
  
  // Check title
  await expect(page).toHaveTitle(/MERN Docs/)
  
  // Check meta description
  const metaDescription = page.locator('meta[name="description"]')
  await expect(metaDescription).toHaveAttribute('content', /MERN stack/)
  
  // Check canonical URL
  const canonical = page.locator('link[rel="canonical"]')
  await expect(canonical).toHaveAttribute('href', 'https://yoursite.com/')
  
  // Check Open Graph tags
  const ogTitle = page.locator('meta[property="og:title"]')
  await expect(ogTitle).toHaveAttribute('content', /MERN/)
})

test('all pages have unique titles', async ({ page }) => {
  const urls = ['/', '/blog', '/about', '/contact']
  const titles = []
  
  for (const url of urls) {
    await page.goto(url)
    const title = await page.title()
    titles.push(title)
  }
  
  // Check all titles are unique
  const uniqueTitles = new Set(titles)
  expect(uniqueTitles.size).toBe(titles.length)
})`}
            />
          </div>
        </div>
      </LessonSection>

      <LessonSection id="monitoring" title="Monitoring & Ongoing Optimization">
        <p className="text-muted-foreground mb-4">
          SEO is not a one-time task. Continuous monitoring and optimization are essential for maintaining and improving rankings.
        </p>

        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/20 p-4 rounded-r-md">
            <h3 className="font-semibold mb-2">Weekly Tasks</h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Check Google Search Console for crawl errors</li>
              <li>Monitor Core Web Vitals metrics</li>
              <li>Review top performing and declining pages</li>
              <li>Check for new backlinks</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-950/20 p-4 rounded-r-md">
            <h3 className="font-semibold mb-2">Monthly Tasks</h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Analyze traffic trends and patterns</li>
              <li>Update old content with fresh information</li>
              <li>Identify and fix broken links</li>
              <li>Review and improve low-performing pages</li>
              <li>Research new keyword opportunities</li>
              <li>Check competitor rankings</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-950/20 p-4 rounded-r-md">
            <h3 className="font-semibold mb-2">Quarterly Tasks</h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Comprehensive site audit</li>
              <li>Review and update SEO strategy</li>
              <li>Analyze conversion rates from organic traffic</li>
              <li>Update structured data as needed</li>
              <li>Review and refresh metadata</li>
              <li>Competitor analysis and benchmarking</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 p-4 rounded-md">
          <p className="font-semibold mb-2 flex items-center gap-2"><BarChart className="w-5 h-5" /> Key Metrics to Track</p>
          <div className="grid gap-2 md:grid-cols-2 text-sm">
            <div>
              <p className="font-semibold text-xs text-muted-foreground mb-1">Traffic Metrics</p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Organic traffic volume</li>
                <li>Click-through rate (CTR)</li>
                <li>Bounce rate</li>
                <li>Average session duration</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-xs text-muted-foreground mb-1">Performance Metrics</p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Keyword rankings</li>
                <li>Backlink count and quality</li>
                <li>Domain authority</li>
                <li>Core Web Vitals scores</li>
              </ul>
            </div>
          </div>
        </div>
      </LessonSection>

      <LessonSection id="checklist" title="Complete SEO Checklist">
        <div className="grid gap-4">
          <div className="border rounded-lg p-4 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-950/20">
            <h3 className="font-semibold mb-3 flex items-center gap-2"><Check className="w-5 h-5 text-green-600 dark:text-green-400" /> On-Page SEO</h3>
            <div className="space-y-2 text-sm">
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>Unique, descriptive title tags (50-60 characters)</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>Compelling meta descriptions (150-160 characters)</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>Proper heading hierarchy (one H1, multiple H2-H6)</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>Keyword-optimized content</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>Internal linking with descriptive anchor text</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>Image alt text for all images</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>SEO-friendly URLs</span>
              </label>
            </div>
          </div>

          <div className="border rounded-lg p-4 bg-gradient-to-br from-green-50 to-transparent dark:from-green-950/20">
            <h3 className="font-semibold mb-3 flex items-center gap-2"><Wrench className="w-5 h-5" /> Technical SEO</h3>
            <div className="space-y-2 text-sm">
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>robots.txt configured correctly</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>XML sitemap generated and submitted</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>HTTPS enabled (SSL certificate)</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>Canonical URLs implemented</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>Structured data (Schema markup)</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>Mobile-responsive design</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>Page speed optimized (&lt;3 seconds)</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>Core Web Vitals passing</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>No broken links (404 errors)</span>
              </label>
            </div>
          </div>

          <div className="border rounded-lg p-4 bg-gradient-to-br from-purple-50 to-transparent dark:from-purple-950/20">
            <h3 className="font-semibold mb-3 flex items-center gap-2"><Target className="w-5 h-5" /> Content & UX</h3>
            <div className="space-y-2 text-sm">
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>High-quality, original content</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>Content covers topic comprehensively</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>Easy to read and scan (short paragraphs, bullets)</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>Regular content updates</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>Clear navigation and site structure</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>Custom 404 page</span>
              </label>
            </div>
          </div>

          <div className="border rounded-lg p-4 bg-gradient-to-br from-orange-50 to-transparent dark:from-orange-950/20">
            <h3 className="font-semibold mb-3 flex items-center gap-2"><BarChart className="w-5 h-5" /> Monitoring & Tools</h3>
            <div className="space-y-2 text-sm">
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>Google Search Console connected</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>Google Analytics installed</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>Site verified with search engines</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>Regular performance monitoring</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>Tracking conversions and goals</span>
              </label>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border border-green-200 dark:border-green-900 p-6 rounded-lg">
          <h3 className="font-semibold text-lg mb-3 flex items-center gap-2"><Check className="w-5 h-5 text-green-600 dark:text-green-400" /> You're Ready to Rank!</h3>
          <p className="text-sm text-muted-foreground">
            SEO is an ongoing process, not a one-time task. Implement these best practices, monitor your results, 
            and continuously optimize based on data. Remember: create content for users first, search engines second. 
            Quality content that genuinely helps people will always win in the long run.
          </p>
        </div>
      </LessonSection>
    </LessonLayout>
  )
}
