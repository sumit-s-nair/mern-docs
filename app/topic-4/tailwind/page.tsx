'use client'

import { LessonLayout } from "@/components/lesson/lesson-layout"
import { LessonSection } from "@/components/lesson/lesson-section"
import { CodeBlock } from "@/components/lesson/code-block"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function TailwindLessonPage() {
  const router = useRouter()

  return (
    <LessonLayout
      title="Tailwind CSS Essentials"
      intro="Tailwind CSS is a utility-first CSS framework that lets you rapidly build modern, responsive interfaces using prebuilt utility classes. You’ll learn the fundamentals of layout, responsive design, customization, and best practices for clean, maintainable styling."
      toc={[
        { href: "#utility-first", label: "Utility-First Styling" },
        { href: "#responsive", label: "Responsive Design" },
        { href: "#customization", label: "Customization with Config" },
        { href: "#plugins", label: "Plugins and Extensions" },
        { href: "#best-practices", label: "Best Practices" },
      ]}
    >
      {/* ---------- Navigation Buttons ---------- */}
      <div className="mb-4 flex flex-row gap-8">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.push('/topic-3')}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </div>

      {/* ---------- Section 1: Utility-First Styling ---------- */}
      <LessonSection id="utility-first" title="Utility-First Styling">
        <p className="text-muted-foreground mb-3">
          Tailwind CSS provides low-level utility classes for styling elements directly in your markup. This helps you design quickly without writing custom CSS for every small change.
        </p>

        <CodeBlock
          language="html"
          code={`<!-- Example: Button Styles -->
<button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
  Click Me
</button>

<!-- Example: Card Layout -->
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow p-4">
  <h2 class="text-xl font-semibold mb-2">Tailwind Card</h2>
  <p class="text-gray-600">A simple card styled entirely using Tailwind utilities.</p>
</div>`}
        />
      </LessonSection>

      {/* ---------- Section 2: Responsive Design ---------- */}
      <LessonSection id="responsive" title="Responsive Design">
        <p className="text-muted-foreground mb-3">
          Tailwind uses a mobile-first approach to responsive design. You can prefix utility classes with breakpoints like <code>sm:</code>, <code>md:</code>, <code>lg:</code>, or <code>xl:</code> to control how elements behave across screen sizes.
        </p>

        <CodeBlock
          language="html"
          code={`<!-- Responsive Grid Example -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-red-200 p-6 text-center rounded">Item 1</div>
  <div class="bg-green-200 p-6 text-center rounded">Item 2</div>
  <div class="bg-blue-200 p-6 text-center rounded">Item 3</div>
</div>

<!-- Responsive Text Example -->
<h1 class="text-2xl md:text-4xl lg:text-5xl font-bold">Responsive Heading</h1>`}
        />
      </LessonSection>

      {/* ---------- Section 3: Customization with Config ---------- */}
      <LessonSection id="customization" title="Customization with Config">
        <p className="text-muted-foreground mb-3">
          You can customize your design system using the <code>tailwind.config.js</code> file. This allows you to define your own colors, spacing, fonts, and themes to match your brand identity.
        </p>

        <CodeBlock
          language="javascript"
          code={`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#93c5fd',
          DEFAULT: '#3b82f6',
          dark: '#1e3a8a',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
};

// Usage Example
<h1 class="text-brand font-heading text-3xl">Welcome to Tailwind!</h1>`}
        />
      </LessonSection>

      {/* ---------- Section 4: Plugins and Extensions ---------- */}
      <LessonSection id="plugins" title="Plugins and Extensions">
        <p className="text-muted-foreground mb-3">
          Tailwind’s plugin system allows you to add utilities or integrate third-party plugins such as forms, typography, or aspect-ratio. This makes the framework flexible and extendable.
        </p>

        <CodeBlock
          language="javascript"
          code={`// Install official plugins
npm install @tailwindcss/forms @tailwindcss/typography

// Add to tailwind.config.js
plugins: [
  require('@tailwindcss/forms'),
  require('@tailwindcss/typography'),
]

// Usage Example
<article class="prose lg:prose-xl">
  <h1>Beautiful Typography</h1>
  <p>This text is styled using the Tailwind Typography plugin.</p>
</article>`}
        />
      </LessonSection>

      {/* ---------- Section 5: Best Practices ---------- */}
      <LessonSection id="best-practices" title="Best Practices">
        <p className="text-muted-foreground">
          Keep your Tailwind code clean and scalable by grouping related utilities, leveraging <code>@apply</code> for reusable patterns, and avoiding unnecessary custom CSS whenever possible.
        </p>

        <CodeBlock
          language="css"
          code={`/* Example: Extracting repetitive styles with @apply */
.btn-primary {
  @apply bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600;
}

/* Use in your HTML */
<button class="btn-primary">Primary Button</button>`}
        />
      </LessonSection>
    </LessonLayout>
  )
}
