'use client'
import { Rocket, DollarSign, Target, Zap, Lightbulb } from 'lucide-react';import { LessonLayout } from "@/components/lesson/lesson-layout"
import { LessonSection } from "@/components/lesson/lesson-section"
import { CodeBlock } from "@/components/lesson/code-block"
import { Badge } from "@/components/ui/badge"
import { PreviewCard } from "@/components/lesson/preview-card"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"

export default function SeoFundamentalsPage() {
  const router = useRouter()
  return (
    <LessonLayout
      title="SEO Fundamentals"
      intro="Search Engine Optimization (SEO) is the practice of improving your website's visibility in search engine results. Understanding how search engines work is essential for creating discoverable, high-ranking web content."
      toc={[
        { href: "#what-is-seo", label: "What is SEO?" },
        { href: "#how-search-works", label: "How Search Engines Work" },
        { href: "#ranking-factors", label: "Ranking Factors" },
        { href: "#seo-types", label: "Types of SEO" },
        { href: "#terminology", label: "Key Terminology" },
        { href: "#why-seo-matters", label: "Why SEO Matters" },
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
          onClick={() => router.push('/topic-8/on-page-seo')}
          className="flex items-center gap-2 justify-center sm:justify-start"
        >
          Go to On-Page SEO
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <LessonSection id="what-is-seo" title="What is SEO?">
        <p className="text-muted-foreground mb-4">
          <strong>SEO (Search Engine Optimization)</strong> is the process of optimizing your website to increase its visibility 
          when people search for products, services, or information related to your business in search engines like Google, Bing, or DuckDuckGo.
        </p>
        
        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-4 rounded-md">
          <p className="font-semibold mb-2">The Goal of SEO</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Increase organic (non-paid) traffic to your website</li>
            <li>Improve visibility in search engine results pages (SERPs)</li>
            <li>Attract relevant visitors who are interested in your content</li>
            <li>Build trust and credibility with users and search engines</li>
          </ul>
        </div>
      </LessonSection>

      <LessonSection id="how-search-works" title="How Search Engines Work">
        <p className="text-muted-foreground mb-4">
          Search engines use automated bots (crawlers/spiders) to discover, analyze, and index web content. 
          Understanding this process helps you optimize your site effectively.
        </p>

        <div className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-2">1. Crawling</p>
            <p className="text-sm text-muted-foreground">
              Search engine bots (like Googlebot) follow links from page to page, discovering new and updated content. 
              They read your <code>robots.txt</code> file to know which pages to crawl and which to avoid.
            </p>
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-2">2. Indexing</p>
            <p className="text-sm text-muted-foreground">
              After crawling, search engines analyze the content, images, and metadata. They store this information in a massive database (index). 
              Only indexed pages can appear in search results.
            </p>
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-2">3. Ranking</p>
            <p className="text-sm text-muted-foreground">
              When someone searches, the search engine ranks indexed pages based on hundreds of factors. 
              The goal is to show the most relevant, high-quality results first.
            </p>
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-2">4. Serving Results</p>
            <p className="text-sm text-muted-foreground">
              The search engine displays results on the SERP (Search Engine Results Page), typically showing 10 organic results per page, 
              along with ads, featured snippets, and other features.
            </p>
          </div>
        </div>
      </LessonSection>

      <LessonSection id="ranking-factors" title="Major Ranking Factors">
        <p className="text-muted-foreground mb-4">
          Search engines use over 200 ranking factors. Here are the most important ones you should focus on:
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Content Quality</h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Original, valuable content</li>
              <li>Comprehensive coverage of topics</li>
              <li>Regular content updates</li>
              <li>Proper grammar and readability</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Keywords</h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Relevant keywords in titles and headings</li>
              <li>Natural keyword placement in content</li>
              <li>Semantic variations and related terms</li>
              <li>Avoid keyword stuffing</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Page Speed</h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Fast loading times (&lt;3 seconds)</li>
              <li>Optimized images and assets</li>
              <li>Efficient code and caching</li>
              <li>Core Web Vitals metrics</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Mobile-Friendliness</h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Responsive design</li>
              <li>Mobile-first indexing</li>
              <li>Touch-friendly navigation</li>
              <li>Readable text without zooming</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Backlinks</h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Quality links from authoritative sites</li>
              <li>Relevant anchor text</li>
              <li>Natural link building</li>
              <li>Avoid spam or paid links</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">User Experience (UX)</h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Low bounce rate</li>
              <li>High dwell time</li>
              <li>Easy navigation</li>
              <li>HTTPS security</li>
            </ul>
          </div>
        </div>
      </LessonSection>

      <LessonSection id="seo-types" title="Types of SEO">
        <p className="text-muted-foreground mb-4">
          SEO is divided into three main categories, each focusing on different aspects of optimization:
        </p>

        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-50 to-transparent dark:from-green-950/20 border-l-4 border-green-500 p-4 rounded-r-md">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Badge variant="outline">1</Badge> On-Page SEO
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              Optimizing individual web pages to rank higher. You have direct control over these elements.
            </p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Meta titles and descriptions</li>
              <li>Heading tags (H1, H2, H3...)</li>
              <li>Content quality and keywords</li>
              <li>Internal linking structure</li>
              <li>Image alt text and optimization</li>
              <li>URL structure</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-950/20 border-l-4 border-blue-500 p-4 rounded-r-md">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Badge variant="outline">2</Badge> Off-Page SEO
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              Building your site's authority through external factors. Focuses on reputation and relationships.
            </p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Backlink building from quality sites</li>
              <li>Social media presence and signals</li>
              <li>Guest blogging and content marketing</li>
              <li>Brand mentions and citations</li>
              <li>Influencer outreach</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-950/20 border-l-4 border-purple-500 p-4 rounded-r-md">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Badge variant="outline">3</Badge> Technical SEO
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              Optimizing the technical aspects of your website to help search engines crawl and index it efficiently.
            </p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Site speed and performance</li>
              <li>XML sitemaps and robots.txt</li>
              <li>Structured data (Schema markup)</li>
              <li>HTTPS and security</li>
              <li>Mobile responsiveness</li>
              <li>Canonical URLs and redirects</li>
            </ul>
          </div>
        </div>
      </LessonSection>

      <LessonSection id="terminology" title="Essential SEO Terminology">
        <div className="space-y-3">
          <div className="bg-muted/50 p-3 rounded-md">
            <p className="font-semibold">SERP (Search Engine Results Page)</p>
            <p className="text-sm text-muted-foreground">The page displayed by search engines in response to a query.</p>
          </div>

          <div className="bg-muted/50 p-3 rounded-md">
            <p className="font-semibold">Organic Traffic</p>
            <p className="text-sm text-muted-foreground">Visitors who find your site through unpaid search results (not ads).</p>
          </div>

          <div className="bg-muted/50 p-3 rounded-md">
            <p className="font-semibold">Keywords</p>
            <p className="text-sm text-muted-foreground">Words and phrases people type into search engines.</p>
          </div>

          <div className="bg-muted/50 p-3 rounded-md">
            <p className="font-semibold">Meta Tags</p>
            <p className="text-sm text-muted-foreground">HTML tags that provide information about your page to search engines (title, description, etc.).</p>
          </div>

          <div className="bg-muted/50 p-3 rounded-md">
            <p className="font-semibold">Backlinks</p>
            <p className="text-sm text-muted-foreground">Links from other websites pointing to your site. They act as "votes of confidence."</p>
          </div>

          <div className="bg-muted/50 p-3 rounded-md">
            <p className="font-semibold">Crawling</p>
            <p className="text-sm text-muted-foreground">The process by which search engine bots discover pages on your website.</p>
          </div>

          <div className="bg-muted/50 p-3 rounded-md">
            <p className="font-semibold">Indexing</p>
            <p className="text-sm text-muted-foreground">Storing and organizing content found during crawling in the search engine's database.</p>
          </div>

          <div className="bg-muted/50 p-3 rounded-md">
            <p className="font-semibold">Domain Authority (DA)</p>
            <p className="text-sm text-muted-foreground">A score (0-100) predicting how well a website will rank. Higher is better.</p>
          </div>

          <div className="bg-muted/50 p-3 rounded-md">
            <p className="font-semibold">Bounce Rate</p>
            <p className="text-sm text-muted-foreground">Percentage of visitors who leave after viewing only one page. Lower is usually better.</p>
          </div>

          <div className="bg-muted/50 p-3 rounded-md">
            <p className="font-semibold">Core Web Vitals</p>
            <p className="text-sm text-muted-foreground">Google's metrics for page experience: LCP (loading), FID (interactivity), CLS (visual stability).</p>
          </div>
        </div>
      </LessonSection>

      <LessonSection id="why-seo-matters" title="Why SEO Matters for Developers">
        <p className="text-muted-foreground mb-4">
          As a web developer, understanding SEO is crucial for building successful web applications:
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="border rounded-lg p-4 bg-gradient-to-br from-card to-muted/20">
            <h3 className="font-semibold mb-2 flex items-center gap-2"><Rocket className="w-5 h-5" /> Increased Visibility</h3>
            <p className="text-sm text-muted-foreground">
              75% of users never scroll past the first page of search results. Good SEO puts your site in front of potential users.
            </p>
          </div>

          <div className="border rounded-lg p-4 bg-gradient-to-br from-card to-muted/20">
            <h3 className="font-semibold mb-2 flex items-center gap-2"><DollarSign className="w-5 h-5" /> Cost-Effective Marketing</h3>
            <p className="text-sm text-muted-foreground">
              Organic traffic is free. Unlike paid ads, SEO provides long-term benefits without ongoing costs.
            </p>
          </div>

          <div className="border rounded-lg p-4 bg-gradient-to-br from-card to-muted/20">
            <h3 className="font-semibold mb-2 flex items-center gap-2"><Target className="w-5 h-5" /> Targeted Traffic</h3>
            <p className="text-sm text-muted-foreground">
              SEO attracts users actively searching for what you offer, leading to higher conversion rates.
            </p>
          </div>

          <div className="border rounded-lg p-4 bg-gradient-to-br from-card to-muted/20">
            <h3 className="font-semibold mb-2 flex items-center gap-2"><Zap className="w-5 h-5" /> Better User Experience</h3>
            <p className="text-sm text-muted-foreground">
              SEO best practices (fast loading, mobile-friendly, quality content) improve UX for everyone.
            </p>
          </div>
        </div>

        <div className="mt-6 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 p-4 rounded-md">
          <p className="font-semibold mb-2 flex items-center gap-2"><Lightbulb className="w-5 h-5" /> Key Takeaway</p>
          <p className="text-sm text-muted-foreground">
            SEO isn't just about search engines—it's about creating a better web experience. When you optimize for search engines, 
            you're also optimizing for your users. Modern frameworks like Next.js make implementing SEO best practices easier than ever.
          </p>
        </div>
      </LessonSection>
    </LessonLayout>
  )
}
