"use client";

import { LessonLayout } from "@/components/lesson/lesson-layout";
import { LessonSection } from "@/components/lesson/lesson-section";
import { CodeBlock } from "@/components/lesson/code-block";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function NextLessonPage() {
  const router = useRouter();

  return (
    <LessonLayout
      title="Next.js Essentials"
      intro="Next.js is a React framework for building fast, scalable, and production-ready web applications. You will learn about routing, data fetching, server and client components, API routes, and optimization techniques for modern full-stack development."
      toc={[
        { href: "#routing", label: "File-Based Routing" },
        { href: "#data-fetching", label: "Data Fetching (SSR & SSG)" },
        { href: "#client-server", label: "Client & Server Components" },
        { href: "#api-routes", label: "API Routes & Serverless Functions" },
        { href: "#optimization", label: "Performance & Optimization" },
      ]}
    >
      {/* ---------- Navigation Buttons ---------- */}
      <div className="mb-4 flex flex-row gap-8">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.push("/topic-3")}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </div>

      {/* ---------- Section 1: File-Based Routing ---------- */}
      <LessonSection id="routing" title="File-Based Routing">
        <p className="text-muted-foreground mb-3">
          Next.js automatically creates routes based on your folder structure
          inside the <code>app</code> or <code>pages</code> directory. Each file
          corresponds to a route, making navigation intuitive and simple.
        </p>

        <CodeBlock
          language="bash"
          code={`app/
├── page.tsx           → Renders the home page (/)
├── about/
│   └── page.tsx       → Renders the About page (/about)
└── blog/
    ├── page.tsx       → Renders the Blog list (/blog)
    └── [slug]/
        └── page.tsx   → Dynamic route for individual posts (/blog/hello-world)
`}
        />

        <CodeBlock
          language="tsx"
          code={`// app/about/page.tsx
export default function AboutPage() {
  return <h1>About Us</h1>;
}

// app/blog/[slug]/page.tsx
export default function BlogPost({ params }) {
  return <h2>Post: {params.slug}</h2>;
}`}
        />
      </LessonSection>

      {/* ---------- Section 2: Data Fetching (SSR & SSG) ---------- */}
      <LessonSection id="data-fetching" title="Data Fetching (SSR & SSG)">
        <p className="text-muted-foreground mb-3">
          Next.js supports multiple data fetching strategies: Static Site
          Generation (SSG), Server-Side Rendering (SSR), and Client-Side
          Fetching. This flexibility allows you to balance performance and
          freshness.
        </p>

        <CodeBlock
          language="tsx"
          code={`// Server Component (SSR Example)
// app/posts/page.tsx
export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <ul className="list-disc pl-6 space-y-2">
        {posts.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}`}
        />

        <CodeBlock
          language="tsx"
          code={`// Static Generation Example
// app/page.tsx
export const revalidate = 60; // Revalidate every 60 seconds

export default async function HomePage() {
  const res = await fetch("https://api.example.com/data", { next: { revalidate: 60 } });
  const data = await res.json();

  return <div>Pre-rendered content with revalidation.</div>;
}`}
        />
      </LessonSection>

      {/* ---------- Section 3: Client & Server Components ---------- */}
      <LessonSection id="client-server" title="Client & Server Components">
        <p className="text-muted-foreground mb-3">
          In Next.js 13+, components are Server Components by default. You can
          opt into Client Components by adding the <code>use client</code>
          directive. Use Client Components for interactivity and hooks.
        </p>

        <CodeBlock
          language="tsx"
          code={`// app/components/Counter.tsx
'use client'

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="space-y-2">
      <h2>Count: {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="px-3 py-1 bg-blue-500 text-white rounded"
      >
        Increase
      </button>
    </div>
  );
}

// app/page.tsx
import Counter from "./components/Counter";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Welcome to Next.js</h1>
      <Counter />
    </div>
  );
}`}
        />
      </LessonSection>

      {/* ---------- Section 4: API Routes & Serverless Functions ---------- */}
      <LessonSection id="api-routes" title="API Routes & Serverless Functions">
        <p className="text-muted-foreground mb-3">
          API routes let you build backend functionality directly inside your
          Next.js app. These run as serverless functions, perfect for handling
          form submissions, fetching data, or processing requests.
        </p>

        <CodeBlock
          language="tsx"
          code={`// app/api/hello/route.ts
export async function GET() {
  return Response.json({ message: "Hello from Next.js API!" });
}

// Example fetch from a page
export default async function ApiExample() {
  const res = await fetch("/api/hello");
  const data = await res.json();

  return <p>{data.message}</p>;
}`}
        />
      </LessonSection>

      {/* ---------- Section 5: Performance & Optimization ---------- */}
      <LessonSection id="optimization" title="Performance & Optimization">
        <p className="text-muted-foreground">
          Next.js offers built-in optimization for images, scripts, and fonts.
          Use the <code>next/image</code> and <code>next/font</code> components
          to automatically improve performance.
        </p>

        <CodeBlock
          language="tsx"
          code={`import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function OptimizedPage() {
  return (
    <div className={\`\${inter.className} p-6\`}>
      <h1 className="text-2xl font-bold mb-4">Optimized Example</h1>
      <Image
        src="/nextjs-logo.png"
        alt="Next.js Logo"
        width={150}
        height={150}
        priority
        className="rounded"
      />
      <p>Fast and optimized by default.</p>
    </div>
  );
}`}
        />
      </LessonSection>
    </LessonLayout>
  );
}
