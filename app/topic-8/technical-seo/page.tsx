'use client'
import { Wrench, Lock, TrendingUp, Check, AlertTriangle, X } from 'lucide-react';import { LessonLayout } from "@/components/lesson/lesson-layout"
import { LessonSection } from "@/components/lesson/lesson-section"
import { CodeBlock } from "@/components/lesson/code-block"
import { Badge } from "@/components/ui/badge"
import { PreviewCard } from "@/components/lesson/preview-card"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"

export default function TechnicalSeoPage() {
  const router = useRouter()
  return (
    <LessonLayout
      title="Technical SEO"
      intro="Technical SEO optimizes the infrastructure of your website to help search engines crawl, index, and render your pages efficiently. Learn about robots.txt, sitemaps, structured data, performance optimization, and mobile-first design."
      toc={[
        { href: "#robots-txt", label: "Robots.txt" },
        { href: "#xml-sitemap", label: "XML Sitemaps" },
        { href: "#structured-data", label: "Structured Data" },
        { href: "#canonical-urls", label: "Canonical URLs" },
        { href: "#page-speed", label: "Page Speed" },
        { href: "#mobile-first", label: "Mobile-First" },
        { href: "#https-security", label: "HTTPS & Security" },
        { href: "#core-web-vitals", label: "Core Web Vitals" },
      ]}
    >
      <div className="mb-4 flex flex-col sm:flex-row gap-2 sm:gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.push('/topic-8')}
          className="flex items-center gap-2 justify-center sm:justify-start"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Topics
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.push('/topic-8/seo-best-practices')}
          className="flex items-center gap-2 justify-center sm:justify-start"
        >
          Go to SEO Best Practices
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <LessonSection id="robots-txt" title="Robots.txt File">
        <p className="text-muted-foreground mb-4">
          The <code>robots.txt</code> file tells search engine crawlers which pages they can or cannot access on your site.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-4 rounded-md mb-4">
          <p className="font-semibold mb-2">Key Concepts</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Located at the root: <code>https://yoursite.com/robots.txt</code></li>
            <li>Controls crawler access before they request pages</li>
            <li>Not a security mechanism—don't rely on it to hide sensitive data</li>
            <li>Directives: <code>User-agent</code>, <code>Allow</code>, <code>Disallow</code>, <code>Sitemap</code></li>
          </ul>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <PreviewCard
            title="Basic robots.txt"
            language="html"
            code={`# Allow all crawlers to access everything
User-agent: *
Allow: /

# Block access to admin area
Disallow: /admin/

# Block private files
Disallow: /private/

# Sitemap location
Sitemap: https://yoursite.com/sitemap.xml`}
          />

          <PreviewCard
            title="Advanced robots.txt"
            language="html"
            code={`# Google bot
User-agent: Googlebot
Allow: /
Disallow: /api/
Disallow: /temp/

# Bing bot
User-agent: Bingbot
Allow: /

# Block bad bots
User-agent: BadBot
Disallow: /

# Sitemaps
Sitemap: https://yoursite.com/sitemap.xml
Sitemap: https://yoursite.com/sitemap-images.xml`}
          />
        </div>

        <div className="mt-4">
          <p className="text-sm font-semibold mb-2">Next.js Implementation (Dynamic robots.txt)</p>
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
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://mern-docs.vercel.app/sitemap.xml',
    host: 'https://mern-docs.vercel.app',
  }
}

// This generates /robots.txt automatically`}
          />
        </div>
      </LessonSection>

      <LessonSection id="xml-sitemap" title="XML Sitemaps">
        <p className="text-muted-foreground mb-4">
          XML sitemaps help search engines discover and index your pages more efficiently. They list all important URLs 
          along with metadata like last modified date and priority.
        </p>

        <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 p-4 rounded-md mb-4">
          <p className="font-semibold mb-2">Sitemap Best Practices</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Include all important pages (max 50,000 URLs per sitemap)</li>
            <li>Update when content changes</li>
            <li>Submit to Google Search Console and Bing Webmaster Tools</li>
            <li>Reference in robots.txt file</li>
            <li>Use sitemap index for sites with multiple sitemaps</li>
          </ul>
        </div>

        <CodeBlock
          language="xml"
          code={`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com/</loc>
    <lastmod>2026-01-03</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yoursite.com/blog/react-tutorial</loc>
    <lastmod>2026-01-02</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yoursite.com/about</loc>
    <lastmod>2025-12-01</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>`}
        />

        <div className="mt-4">
          <p className="text-sm font-semibold mb-2">Next.js Sitemap Implementation</p>
          <CodeBlock
            language="typescript"
            code={`// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mern-docs.vercel.app'
  const currentDate = new Date()

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: \`\${baseUrl}/tutorials/react\`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: \`\${baseUrl}/tutorials/nodejs\`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Add all your pages...
  ]
}

// Generates /sitemap.xml automatically`}
          />
        </div>
      </LessonSection>

      <LessonSection id="structured-data" title="Structured Data (Schema Markup)">
        <p className="text-muted-foreground mb-4">
          Structured data uses a standardized format (JSON-LD, Microdata) to provide explicit information about your page content. 
          This enables rich snippets in search results like star ratings, FAQs, breadcrumbs, and more.
        </p>

        <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 p-4 rounded-md mb-4">
          <p className="font-semibold mb-2">Benefits of Structured Data</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Enhanced search result appearance (rich snippets)</li>
            <li>Better search engine understanding of content</li>
            <li>Potential for knowledge graph inclusion</li>
            <li>Voice search optimization</li>
            <li>Increased click-through rates</li>
          </ul>
        </div>

        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Article Schema</h3>
            <CodeBlock
              language="json"
              code={`{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Complete React Hooks Guide",
  "description": "Learn React Hooks with practical examples",
  "author": {
    "@type": "Person",
    "name": "John Doe"
  },
  "datePublished": "2026-01-03",
  "dateModified": "2026-01-03",
  "image": "https://yoursite.com/react-hooks.jpg",
  "publisher": {
    "@type": "Organization",
    "name": "MERN Docs",
    "logo": {
      "@type": "ImageObject",
      "url": "https://yoursite.com/logo.png"
    }
  }
}`}
            />
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Breadcrumb Schema</h3>
            <CodeBlock
              language="json"
              code={`{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://yoursite.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Tutorials",
      "item": "https://yoursite.com/tutorials"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "React Hooks",
      "item": "https://yoursite.com/tutorials/react-hooks"
    }
  ]
}`}
            />
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">FAQ Schema</h3>
            <CodeBlock
              language="json"
              code={`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are React Hooks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "React Hooks are functions that let you use state and other React features in functional components."
      }
    },
    {
      "@type": "Question",
      "name": "When should I use useEffect?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use useEffect for side effects like data fetching, subscriptions, or manually changing the DOM."
      }
    }
  ]
}`}
            />
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm font-semibold mb-2">Next.js Implementation (JSON-LD)</p>
          <CodeBlock
            language="typescript"
            code={`// app/blog/[slug]/page.tsx
export default function BlogPost() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'React Hooks Tutorial',
    description: 'Learn React Hooks...',
    author: {
      '@type': 'Person',
      name: 'John Doe',
    },
    datePublished: '2026-01-03',
    image: 'https://yoursite.com/image.jpg',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article>
        {/* Your content */}
      </article>
    </>
  )
}`}
          />
        </div>

        <div className="mt-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-4 rounded-md">
          <p className="font-semibold mb-2 flex items-center gap-2"><Wrench className="w-5 h-5" /> Testing Tools</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li><strong>Google Rich Results Test:</strong> Test structured data</li>
            <li><strong>Schema.org Validator:</strong> Validate markup syntax</li>
            <li><strong>Google Search Console:</strong> Monitor rich result status</li>
          </ul>
        </div>
      </LessonSection>

      <LessonSection id="canonical-urls" title="Canonical URLs">
        <p className="text-muted-foreground mb-4">
          Canonical URLs tell search engines which version of a page is the "main" one when you have duplicate or similar content 
          on multiple URLs. This prevents duplicate content issues.
        </p>

        <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 p-4 rounded-md mb-4">
          <p className="font-semibold mb-2">When to Use Canonical Tags</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Multiple URLs showing the same content (www vs non-www)</li>
            <li>URL parameters (tracking codes, session IDs)</li>
            <li>Printer-friendly versions</li>
            <li>Paginated content</li>
            <li>Syndicated content on other sites</li>
          </ul>
        </div>

        <CodeBlock
          language="html"
          code={`<!-- In the <head> section -->
<link rel="canonical" href="https://yoursite.com/preferred-url" />

<!-- Example: Prefer HTTPS and www -->
<!-- Page: http://example.com/page -->
<link rel="canonical" href="https://www.example.com/page" />

<!-- Example: Ignore URL parameters -->
<!-- Page: /products?sort=price&color=blue -->
<link rel="canonical" href="https://yoursite.com/products" />`}
        />

        <div className="mt-4">
          <p className="text-sm font-semibold mb-2">Next.js Implementation</p>
          <CodeBlock
            language="typescript"
            code={`// app/layout.tsx or specific page
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://mern-docs.vercel.app'),
  alternates: {
    canonical: '/', // or specific path like '/blog/post-title'
  },
}

// For dynamic pages
export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    alternates: {
      canonical: \`/blog/\${params.slug}\`,
    },
  }
}`}
          />
        </div>
      </LessonSection>

      <LessonSection id="page-speed" title="Page Speed Optimization">
        <p className="text-muted-foreground mb-4">
          Page speed is a confirmed ranking factor. Faster sites provide better user experience and rank higher in search results.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Image Optimization</h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Use WebP or AVIF format</li>
              <li>Compress images (TinyPNG, ImageOptim)</li>
              <li>Implement lazy loading</li>
              <li>Use responsive images (srcset)</li>
              <li>Optimize with Next.js Image component</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Code Optimization</h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Minify CSS, JS, HTML</li>
              <li>Remove unused code (tree shaking)</li>
              <li>Code splitting and lazy loading</li>
              <li>Use production builds</li>
              <li>Optimize third-party scripts</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Server & Hosting</h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Use CDN (Cloudflare, Vercel)</li>
              <li>Enable HTTP/2 or HTTP/3</li>
              <li>Implement caching strategies</li>
              <li>Use compression (Gzip, Brotli)</li>
              <li>Choose fast hosting provider</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Resource Loading</h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Defer non-critical JavaScript</li>
              <li>Preload critical resources</li>
              <li>Minimize render-blocking resources</li>
              <li>Use resource hints (dns-prefetch)</li>
              <li>Optimize font loading</li>
            </ul>
          </div>
        </div>

        <div className="mt-4">
          <CodeBlock
            language="typescript"
            code={`// next.config.mjs - Performance optimizations
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  compress: true, // Enable gzip compression
  swcMinify: true, // Use SWC for faster minification
  
  // Enable HTTP/2 Server Push
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig`}
          />
        </div>
      </LessonSection>

      <LessonSection id="mobile-first" title="Mobile-First & Responsive Design">
        <p className="text-muted-foreground mb-4">
          Google uses mobile-first indexing, meaning it primarily uses the mobile version of your site for ranking. 
          Your site must be mobile-friendly to rank well.
        </p>

        <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 p-4 rounded-md mb-4">
          <p className="font-semibold mb-2">Mobile-First Checklist</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li><Check className="w-4 h-4 inline mr-2 text-green-600 dark:text-green-400" />Responsive design (adapts to all screen sizes)</li>
            <li><Check className="w-4 h-4 inline mr-2 text-green-600 dark:text-green-400" />Mobile viewport meta tag</li>
            <li><Check className="w-4 h-4 inline mr-2 text-green-600 dark:text-green-400" />Touch-friendly navigation (44px minimum touch targets)</li>
            <li><Check className="w-4 h-4 inline mr-2 text-green-600 dark:text-green-400" />Readable text without zooming (16px+ font size)</li>
            <li><Check className="w-4 h-4 inline mr-2 text-green-600 dark:text-green-400" />No horizontal scrolling</li>
            <li><Check className="w-4 h-4 inline mr-2 text-green-600 dark:text-green-400" />Fast mobile performance</li>
            <li><Check className="w-4 h-4 inline mr-2 text-green-600 dark:text-green-400" />Avoid mobile-unfriendly interstitials</li>
          </ul>
        </div>

        <CodeBlock
          language="html"
          code={`<!-- Essential viewport meta tag -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Responsive images -->
<img 
  src="/image-mobile.jpg"
  srcset="
    /image-mobile.jpg 400w,
    /image-tablet.jpg 800w,
    /image-desktop.jpg 1200w
  "
  sizes="(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px"
  alt="Responsive image"
/>

<!-- Mobile-friendly CSS -->
<style>
  /* Mobile-first approach */
  body {
    font-size: 16px; /* Readable without zoom */
    padding: 1rem;
  }
  
  button {
    min-height: 44px; /* Touch-friendly */
    min-width: 44px;
  }
  
  /* Tablet and up */
  @media (min-width: 768px) {
    body {
      padding: 2rem;
    }
  }
  
  /* Desktop */
  @media (min-width: 1024px) {
    body {
      max-width: 1200px;
      margin: 0 auto;
    }
  }
</style>`}
        />
      </LessonSection>

      <LessonSection id="https-security" title="HTTPS & Security">
        <p className="text-muted-foreground mb-4">
          HTTPS is a confirmed ranking signal. Google prioritizes secure sites and Chrome warns users about non-HTTPS sites.
        </p>

        <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 p-4 rounded-md mb-4">
          <p className="font-semibold mb-2">Why HTTPS Matters</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li><Lock className="w-4 h-4 inline mr-2" />Data encryption between browser and server</li>
            <li><TrendingUp className="w-4 h-4 inline mr-2" />SEO ranking boost</li>
            <li><Check className="w-4 h-4 inline mr-2 text-green-600 dark:text-green-400" />Trust indicators in browser (padlock icon)</li>
            <li><X className="w-4 h-4 inline mr-2 text-red-600 dark:text-red-400" />Avoids "Not Secure" warnings</li>
            <li><Lock className="w-4 h-4 inline mr-2" />Required for modern web features (Service Workers, HTTP/2)</li>
          </ul>
        </div>

        <div className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-md">
            <h3 className="font-semibold mb-2">Setting Up HTTPS</h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Get an SSL/TLS certificate (Let's Encrypt offers free ones)</li>
              <li>Install certificate on your server</li>
              <li>Update internal links to use HTTPS</li>
              <li>Set up 301 redirects from HTTP to HTTPS</li>
              <li>Update canonical URLs to HTTPS</li>
              <li>Enable HSTS (HTTP Strict Transport Security)</li>
            </ul>
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <h3 className="font-semibold mb-2">HSTS Header</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Force browsers to always use HTTPS:
            </p>
            <CodeBlock
              language="txt"
              code={`Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`}
            />
          </div>
        </div>
      </LessonSection>

      <LessonSection id="core-web-vitals" title="Core Web Vitals">
        <p className="text-muted-foreground mb-4">
          Core Web Vitals are Google's metrics for measuring real-world user experience. They're part of page experience signals 
          that affect rankings.
        </p>

        <div className="grid gap-4">
          <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/20 p-4 rounded-r-md">
            <h3 className="font-semibold mb-2">LCP - Largest Contentful Paint</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Measures loading performance. How long until the largest content element becomes visible.
            </p>
            <div className="text-sm space-y-1">
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-green-600 dark:text-green-400" />Good: &lt;2.5 seconds</div>
              <div className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />Needs Improvement: 2.5-4 seconds</div>
              <div className="flex items-center gap-2"><X className="w-4 h-4 text-red-600 dark:text-red-400" />Poor: &gt;4 seconds</div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              <strong>How to improve:</strong> Optimize images, use CDN, improve server response time, eliminate render-blocking resources
            </p>
          </div>

          <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-950/20 p-4 rounded-r-md">
            <h3 className="font-semibold mb-2">FID - First Input Delay (now INP)</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Measures interactivity. Time from user interaction to browser response.
            </p>
            <div className="text-sm space-y-1">
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-green-600 dark:text-green-400" />Good: &lt;100 milliseconds</div>
              <div className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />Needs Improvement: 100-300ms</div>
              <div className="flex items-center gap-2"><X className="w-4 h-4 text-red-600 dark:text-red-400" />Poor: &gt;300ms</div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              <strong>How to improve:</strong> Reduce JavaScript execution time, split long tasks, use web workers, optimize third-party scripts
            </p>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-950/20 p-4 rounded-r-md">
            <h3 className="font-semibold mb-2">CLS - Cumulative Layout Shift</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Measures visual stability. How much page content shifts unexpectedly during loading.
            </p>
            <div className="text-sm space-y-1">
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-green-600 dark:text-green-400" />Good: &lt;0.1</div>
              <div className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />Needs Improvement: 0.1-0.25</div>
              <div className="flex items-center gap-2"><X className="w-4 h-4 text-red-600 dark:text-red-400" />Poor: &gt;0.25</div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              <strong>How to improve:</strong> Set image/video dimensions, avoid inserting content above existing content, use transform animations
            </p>
          </div>
        </div>

        <div className="mt-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-4 rounded-md">
          <p className="font-semibold mb-2 flex items-center gap-2"><Wrench className="w-5 h-5" /> Testing Tools</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li><strong>PageSpeed Insights:</strong> Analyze performance and get recommendations</li>
            <li><strong>Chrome DevTools:</strong> Lighthouse tab for detailed audits</li>
            <li><strong>Web Vitals Extension:</strong> Real-time Core Web Vitals monitoring</li>
            <li><strong>Google Search Console:</strong> Core Web Vitals report for all pages</li>
          </ul>
        </div>
      </LessonSection>
    </LessonLayout>
  )
}
