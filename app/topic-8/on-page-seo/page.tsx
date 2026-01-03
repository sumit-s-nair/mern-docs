'use client'
import { X, Check, Lightbulb } from 'lucide-react';import { LessonLayout } from "@/components/lesson/lesson-layout"
import { LessonSection } from "@/components/lesson/lesson-section"
import { CodeBlock } from "@/components/lesson/code-block"
import { Badge } from "@/components/ui/badge"
import { PreviewCard } from "@/components/lesson/preview-card"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"

export default function OnPageSeoPage() {
  const router = useRouter()
  return (
    <LessonLayout
      title="On-Page SEO"
      intro="On-page SEO involves optimizing individual web pages to rank higher and earn more relevant traffic. Learn how to optimize meta tags, content, headings, and internal structure for better search visibility."
      toc={[
        { href: "#meta-tags", label: "Meta Tags" },
        { href: "#title-tags", label: "Title Tags" },
        { href: "#meta-description", label: "Meta Descriptions" },
        { href: "#heading-structure", label: "Heading Structure" },
        { href: "#content-optimization", label: "Content Optimization" },
        { href: "#internal-linking", label: "Internal Linking" },
        { href: "#image-optimization", label: "Image Optimization" },
        { href: "#url-structure", label: "URL Structure" },
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
          onClick={() => router.push('/topic-8/technical-seo')}
          className="flex items-center gap-2 justify-center sm:justify-start"
        >
          Go to Technical SEO
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <LessonSection id="meta-tags" title="Meta Tags Overview">
        <p className="text-muted-foreground mb-4">
          Meta tags are HTML elements that provide information about your page to search engines and visitors. 
          They don't appear on the page itself but are crucial for SEO.
        </p>

        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Essential Meta Tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO Meta Tags -->
    <title>Your Page Title - Brand Name</title>
    <meta name="description" content="A compelling description of your page content">
    <meta name="keywords" content="keyword1, keyword2, keyword3">
    <meta name="author" content="Your Name">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://yoursite.com/page">
    <meta property="og:title" content="Your Page Title">
    <meta property="og:description" content="Your page description">
    <meta property="og:image" content="https://yoursite.com/image.jpg">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Your Page Title">
    <meta name="twitter:description" content="Your page description">
    <meta name="twitter:image" content="https://yoursite.com/image.jpg">
  </head>
  <body>
    <!-- Page content -->
  </body>
</html>`}
        />
      </LessonSection>

      <LessonSection id="title-tags" title="Title Tags">
        <p className="text-muted-foreground mb-4">
          The <Badge variant="outline">&lt;title&gt;</Badge> tag is one of the most important on-page SEO factors. 
          It appears in search results, browser tabs, and when sharing on social media.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-4 rounded-md mb-4">
          <p className="font-semibold mb-2">Title Tag Best Practices</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Keep it between 50-60 characters (Google displays ~60)</li>
            <li>Include your primary keyword near the beginning</li>
            <li>Make it unique for each page</li>
            <li>Be descriptive and compelling to increase click-through rates</li>
            <li>Include your brand name at the end</li>
            <li>Avoid keyword stuffing</li>
          </ul>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="border rounded-lg p-4 bg-red-50 dark:bg-red-950/10">
            <p className="font-semibold text-red-600 dark:text-red-400 mb-2 flex items-center gap-2"><X className="w-5 h-5" /> Bad Example</p>
            <code className="text-sm">Best web development tutorials JavaScript React Node.js MongoDB Express tutorials</code>
            <p className="text-xs text-muted-foreground mt-2">Too long, keyword stuffing, not user-friendly</p>
          </div>

          <div className="border rounded-lg p-4 bg-green-50 dark:bg-green-950/10">
            <p className="font-semibold text-green-600 dark:text-green-400 mb-2 flex items-center gap-2"><Check className="w-5 h-5" /> Good Example</p>
            <code className="text-sm">MERN Stack Tutorial: Build Full-Stack Apps | MERN Docs</code>
            <p className="text-xs text-muted-foreground mt-2">Clear, concise, includes keyword and brand</p>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm font-semibold mb-2">Next.js Implementation:</p>
          <CodeBlock
            language="typescript"
            code={`// app/layout.tsx or app/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'MERN Docs - Full Stack Development Guide',
    template: '%s | MERN Docs', // Page Title | MERN Docs
  },
  description: 'Learn MERN stack development with tutorials...',
}

// Individual page
export const metadata: Metadata = {
  title: 'React Fundamentals', // Will become: React Fundamentals | MERN Docs
  description: 'Master React basics...',
}`}
          />
        </div>
      </LessonSection>

      <LessonSection id="meta-description" title="Meta Descriptions">
        <p className="text-muted-foreground mb-4">
          Meta descriptions provide a brief summary of your page content. While not a direct ranking factor, 
          they heavily influence click-through rates from search results.
        </p>

        <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 p-4 rounded-md mb-4">
          <p className="font-semibold mb-2">Meta Description Best Practices</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Keep it between 150-160 characters</li>
            <li>Include your target keyword naturally</li>
            <li>Write compelling copy that encourages clicks</li>
            <li>Make it unique for each page</li>
            <li>Include a call-to-action when appropriate</li>
            <li>Accurately describe the page content</li>
          </ul>
        </div>

        <div className="space-y-4">
          <div className="border rounded-lg p-4 bg-red-50 dark:bg-red-950/10">
            <p className="font-semibold text-red-600 dark:text-red-400 mb-2 flex items-center gap-2"><X className="w-5 h-5" /> Bad Example</p>
            <code className="text-sm">Welcome to our website. Click here for more information.</code>
            <p className="text-xs text-muted-foreground mt-2">Too vague, no keywords, not compelling</p>
          </div>

          <div className="border rounded-lg p-4 bg-green-50 dark:bg-green-950/10">
            <p className="font-semibold text-green-600 dark:text-green-400 mb-2 flex items-center gap-2"><Check className="w-5 h-5" /> Good Example</p>
            <code className="text-sm">
              Master the MERN stack with our comprehensive tutorial. Learn MongoDB, Express, React, and Node.js 
              through hands-on projects and clear examples. Start building today!
            </code>
            <p className="text-xs text-muted-foreground mt-2">Descriptive, includes keywords, has CTA, under 160 chars</p>
          </div>
        </div>

        <CodeBlock
          language="typescript"
          code={`// Next.js metadata
export const metadata: Metadata = {
  title: 'React Hooks Tutorial',
  description: 'Learn React Hooks with practical examples. Master useState, useEffect, useContext, and custom hooks to build powerful React applications.',
}`}
        />
      </LessonSection>

      <LessonSection id="heading-structure" title="Heading Structure (H1-H6)">
        <p className="text-muted-foreground mb-4">
          Proper heading hierarchy helps search engines understand your content structure and improves accessibility.
        </p>

        <div className="bg-muted/50 p-4 rounded-md mb-4">
          <p className="font-semibold mb-2">Heading Hierarchy Rules</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li><strong>H1:</strong> One per page, main topic/page title</li>
            <li><strong>H2:</strong> Major sections of content</li>
            <li><strong>H3:</strong> Subsections under H2</li>
            <li><strong>H4-H6:</strong> Further subsections as needed</li>
            <li>Never skip heading levels (don't go H1 → H3)</li>
            <li>Include keywords naturally in headings</li>
          </ul>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <PreviewCard
            title="Poor Hierarchy"
            language="html"
            code={`<h1>MERN Tutorial</h1>
<h3>What is MongoDB?</h3>
<h2>Database Basics</h2>
<h4>Installation</h4>
<h1>Express Setup</h1>`}
          />

          <PreviewCard
            title="Good Hierarchy"
            language="html"
            code={`<h1>MERN Stack Tutorial</h1>

<h2>MongoDB</h2>
<h3>What is MongoDB?</h3>
<h3>Installation</h3>
<h4>Windows Setup</h4>
<h4>Mac Setup</h4>

<h2>Express.js</h2>
<h3>Getting Started</h3>`}
          />
        </div>

        <div className="mt-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-4 rounded-md">
          <p className="font-semibold mb-2 flex items-center gap-2"><Lightbulb className="w-5 h-5" /> Pro Tip</p>
          <p className="text-sm text-muted-foreground">
            Your H1 should match or closely relate to your page title (meta title). This reinforces to search engines 
            what the page is about and creates consistency for users.
          </p>
        </div>
      </LessonSection>

      <LessonSection id="content-optimization" title="Content Optimization">
        <p className="text-muted-foreground mb-4">
          High-quality, optimized content is the foundation of good SEO. Search engines reward pages that 
          provide value to users.
        </p>

        <div className="space-y-4">
          <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-950/20 p-4 rounded-r-md">
            <h3 className="font-semibold mb-2">1. Keyword Research & Placement</h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Research keywords with tools like Google Keyword Planner, Ahrefs, or Ubersuggest</li>
              <li>Target one primary keyword per page</li>
              <li>Include primary keyword in: title, H1, first paragraph, URL</li>
              <li>Use semantic variations and related terms naturally</li>
              <li>Avoid keyword density over 2-3% (keyword stuffing penalty)</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/20 p-4 rounded-r-md">
            <h3 className="font-semibold mb-2">2. Content Length & Depth</h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Longer content (1500+ words) tends to rank better for competitive keywords</li>
              <li>Prioritize quality over length—don't add fluff</li>
              <li>Cover topics comprehensively</li>
              <li>Break content into scannable sections</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-950/20 p-4 rounded-r-md">
            <h3 className="font-semibold mb-2">3. Content Freshness</h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Regularly update existing content</li>
              <li>Add new information as topics evolve</li>
              <li>Include publish and update dates</li>
              <li>Fresh content signals relevance to search engines</li>
            </ul>
          </div>

          <div className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-950/20 p-4 rounded-r-md">
            <h3 className="font-semibold mb-2">4. Readability</h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Use short paragraphs (2-3 sentences)</li>
              <li>Include bullet points and numbered lists</li>
              <li>Add images, code examples, and diagrams</li>
              <li>Use simple language (avoid jargon when possible)</li>
              <li>Target 8th-grade reading level for broad audiences</li>
            </ul>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm font-semibold mb-2">Example: Keyword-Optimized Paragraph</p>
          <div className="border rounded-lg p-4 bg-muted/30">
            <p className="text-sm">
              <strong>React Hooks</strong> revolutionized how developers write React components. With hooks like <code>useState</code> and 
              <code>useEffect</code>, you can add state and lifecycle features to <strong>functional React components</strong> without 
              converting them to classes. This <strong>React Hooks tutorial</strong> will teach you how to use hooks effectively in your projects.
            </p>
            <p className="text-xs text-muted-foreground mt-2 italic">
              Primary keyword "React Hooks" used naturally, with semantic variations and related terms
            </p>
          </div>
        </div>
      </LessonSection>

      <LessonSection id="internal-linking" title="Internal Linking Strategy">
        <p className="text-muted-foreground mb-4">
          Internal links connect your pages together, helping search engines discover content and understand 
          your site structure while distributing page authority.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-4 rounded-md mb-4">
          <p className="font-semibold mb-2">Internal Linking Best Practices</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Link to related content within your site</li>
            <li>Use descriptive anchor text (not "click here")</li>
            <li>Link from high-authority pages to newer pages</li>
            <li>Keep important pages within 3 clicks from homepage</li>
            <li>Fix broken internal links promptly</li>
            <li>Use follow links (avoid nofollow for internal links)</li>
          </ul>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="border rounded-lg p-4 bg-red-50 dark:bg-red-950/10">
            <p className="font-semibold text-red-600 dark:text-red-400 mb-2 flex items-center gap-2"><X className="w-5 h-5" /> Bad Anchor Text</p>
            <code className="text-sm">
              Learn more about React in &lt;a href="/react"&gt;this article&lt;/a&gt;.
              <br/><br/>
              &lt;a href="/tutorial"&gt;Click here&lt;/a&gt; for the tutorial.
            </code>
          </div>

          <div className="border rounded-lg p-4 bg-green-50 dark:bg-green-950/10">
            <p className="font-semibold text-green-600 dark:text-green-400 mb-2 flex items-center gap-2"><Check className="w-5 h-5" /> Good Anchor Text</p>
            <code className="text-sm">
              Learn more about &lt;a href="/react"&gt;React fundamentals&lt;/a&gt;.
              <br/><br/>
              Read our &lt;a href="/tutorial"&gt;React Hooks tutorial&lt;/a&gt;.
            </code>
          </div>
        </div>

        <CodeBlock
          language="typescript"
          code={`// Next.js internal linking with proper anchor text
import Link from 'next/link'

export default function BlogPost() {
  return (
    <article>
      <p>
        Before diving into hooks, make sure you understand{' '}
        <Link href="/react/components">React component basics</Link>.
      </p>
      
      <p>
        After mastering useState, learn about{' '}
        <Link href="/react/useeffect">useEffect for side effects</Link>.
      </p>
      
      {/* Related articles section */}
      <aside>
        <h3>Related Topics</h3>
        <ul>
          <li><Link href="/react/context">React Context API</Link></li>
          <li><Link href="/react/custom-hooks">Creating Custom Hooks</Link></li>
        </ul>
      </aside>
    </article>
  )
}`}
        />
      </LessonSection>

      <LessonSection id="image-optimization" title="Image Optimization for SEO">
        <p className="text-muted-foreground mb-4">
          Optimized images improve page speed, user experience, and can rank in image search results.
        </p>

        <div className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-md">
            <h3 className="font-semibold mb-2">1. Alt Text (Alternative Text)</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Alt text describes images for screen readers and search engines. It also displays if the image fails to load.
            </p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Be descriptive and specific</li>
              <li>Include keywords when relevant (naturally)</li>
              <li>Keep it under 125 characters</li>
              <li>Don't start with "Image of..." or "Picture of..."</li>
            </ul>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <PreviewCard
              title="Poor Alt Text"
              language="html"
              code={`<img src="img1.jpg" alt="image">
<img src="screenshot.png" alt="screenshot">
<img src="logo.svg" alt="">`}
            />

            <PreviewCard
              title="Good Alt Text"
              language="html"
              code={`<img src="react-hooks-diagram.jpg" 
     alt="React Hooks lifecycle diagram">
<img src="mongodb-dashboard.png" 
     alt="MongoDB Atlas cluster dashboard">
<img src="mern-logo.svg" 
     alt="MERN Docs logo">`}
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <h3 className="font-semibold mb-2">2. File Names</h3>
            <p className="text-sm text-muted-foreground mb-2">Use descriptive, keyword-rich file names:</p>
            <div className="grid gap-2 md:grid-cols-2 text-sm">
              <div className="bg-red-50 dark:bg-red-950/10 p-2 rounded">
                <span className="text-red-600 dark:text-red-400"><X className="w-4 h-4 inline" /></span> IMG_1234.jpg
              </div>
              <div className="bg-green-50 dark:bg-green-950/10 p-2 rounded">
                <span className="text-green-600 dark:text-green-400"><Check className="w-4 h-4 inline" /></span> react-component-lifecycle.jpg
              </div>
              <div className="bg-red-50 dark:bg-red-950/10 p-2 rounded">
                <span className="text-red-600 dark:text-red-400"><X className="w-4 h-4 inline" /></span> screenshot-2024.png
              </div>
              <div className="bg-green-50 dark:bg-green-950/10 p-2 rounded">
                <span className="text-green-600 dark:text-green-400"><Check className="w-4 h-4 inline" /></span> nodejs-installation-windows.png
              </div>
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <h3 className="font-semibold mb-2">3. File Size & Format</h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Compress images (use tools like TinyPNG, ImageOptim)</li>
              <li>Use modern formats: WebP, AVIF for better compression</li>
              <li>Target under 100KB for web images</li>
              <li>Use SVG for logos and icons</li>
              <li>Implement lazy loading for below-the-fold images</li>
            </ul>
          </div>
        </div>

        <CodeBlock
          language="typescript"
          code={`// Next.js Image component (automatic optimization)
import Image from 'next/image'

export default function Component() {
  return (
    <Image
      src="/react-hooks-diagram.jpg"
      alt="React Hooks useState and useEffect diagram"
      width={800}
      height={600}
      loading="lazy" // Lazy load for better performance
      quality={85} // Adjust quality (default 75)
    />
  )
}

// HTML with responsive images
<img
  src="/image-800.jpg"
  srcset="
    /image-400.jpg 400w,
    /image-800.jpg 800w,
    /image-1200.jpg 1200w
  "
  sizes="(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px"
  alt="Responsive React tutorial screenshot"
  loading="lazy"
/>`}
        />
      </LessonSection>

      <LessonSection id="url-structure" title="URL Structure & Optimization">
        <p className="text-muted-foreground mb-4">
          Clean, descriptive URLs are better for users and search engines. They should be easy to read and understand.
        </p>

        <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 p-4 rounded-md mb-4">
          <p className="font-semibold mb-2">SEO-Friendly URL Best Practices</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Use hyphens (-) to separate words, not underscores</li>
            <li>Keep URLs short and descriptive (3-5 words ideal)</li>
            <li>Include your target keyword</li>
            <li>Use lowercase letters only</li>
            <li>Avoid special characters and parameters when possible</li>
            <li>Create a logical hierarchy</li>
          </ul>
        </div>

        <div className="space-y-4">
          <div className="border rounded-lg p-4 bg-red-50 dark:bg-red-950/10">
            <p className="font-semibold text-red-600 dark:text-red-400 mb-2 flex items-center gap-2"><X className="w-5 h-5" /> Poor URL Structure</p>
            <div className="space-y-2 text-sm font-mono">
              <div>https://example.com/page.php?id=123&cat=tutorials</div>
              <div>https://example.com/REACT_Tutorial_For_BEGINNERS</div>
              <div>https://example.com/blog/2024/01/15/post-title-here</div>
              <div>https://example.com/p1234567</div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Too complex, inconsistent, includes unnecessary parameters
            </p>
          </div>

          <div className="border rounded-lg p-4 bg-green-50 dark:bg-green-950/10">
            <p className="font-semibold text-green-600 dark:text-green-400 mb-2 flex items-center gap-2"><Check className="w-5 h-5" /> Good URL Structure</p>
            <div className="space-y-2 text-sm font-mono">
              <div>https://example.com/react-tutorial</div>
              <div>https://example.com/tutorials/react-hooks</div>
              <div>https://example.com/blog/react-best-practices</div>
              <div>https://example.com/mongodb/setup</div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Clean, descriptive, keyword-rich, hierarchical
            </p>
          </div>
        </div>

        <div className="mt-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-4 rounded-md">
          <p className="font-semibold mb-2">URL Structure Hierarchy Example</p>
          <div className="text-sm font-mono space-y-1 text-muted-foreground">
            <div>/ (Homepage)</div>
            <div>├── /mern-stack</div>
            <div>│   ├── /mern-stack/mongodb</div>
            <div>│   ├── /mern-stack/express</div>
            <div>│   ├── /mern-stack/react</div>
            <div>│   └── /mern-stack/nodejs</div>
            <div>└── /tutorials</div>
            <div>    ├── /tutorials/react-hooks</div>
            <div>    └── /tutorials/rest-api</div>
          </div>
        </div>

        <div className="mt-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 p-4 rounded-md">
          <p className="font-semibold mb-2 flex items-center gap-2"><Lightbulb className="w-5 h-5" /> Next.js File-Based Routing</p>
          <p className="text-sm text-muted-foreground">
            Next.js automatically creates SEO-friendly URLs based on your file structure. 
            The file <code>app/tutorials/react-hooks/page.tsx</code> becomes 
            <code>/tutorials/react-hooks</code>.
          </p>
        </div>
      </LessonSection>
    </LessonLayout>
  )
}
