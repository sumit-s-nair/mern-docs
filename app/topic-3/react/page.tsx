'use client'

import { LessonLayout } from "@/components/lesson/lesson-layout"
import { LessonSection } from "@/components/lesson/lesson-section"
import { CodeBlock } from "@/components/lesson/code-block"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function ReactLessonPage() {
  const router = useRouter()

  return (
    <LessonLayout
      title="React Essentials"
      intro="React is a powerful JavaScript library for building user interfaces using components. You’ll learn the fundamentals of JSX, state, hooks, routing, and context to create interactive and maintainable applications."
      toc={[
        { href: "#components", label: "Components & JSX" },
        { href: "#hooks", label: "State Management & Hooks" },
        { href: "#routing", label: "Routing with React Router" },
        { href: "#context", label: "Global State with Context API" },
        { href: "#best-practices", label: "Performance & Best Practices" },
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

      {/* ---------- Section 1: Components & JSX ---------- */}
      <LessonSection id="components" title="Components & JSX">
        <p className="text-muted-foreground mb-3">
          Components are the building blocks of React. JSX allows you to write HTML-like syntax directly inside JavaScript, making UI development declarative and intuitive.
        </p>

        <CodeBlock
          language="jsx"
          code={`// Simple React Component
function Welcome() {
  return <h1>Hello, React!</h1>;
}

// Using the component
export default function App() {
  return (
    <div>
      <Welcome />
      <p>Welcome to your first React app!</p>
    </div>
  );
}`}
        />
      </LessonSection>

      {/* ---------- Section 2: State Management & Hooks ---------- */}
      <LessonSection id="hooks" title="State Management & Hooks">
        <p className="text-muted-foreground mb-3">
          Hooks let you use React features like state and lifecycle methods inside functional components. The most common hooks are <code>useState</code> and <code>useEffect</code>.
        </p>

        <CodeBlock
          language="jsx"
          code={`import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return (
    <div className="text-center">
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}`}
        />
      </LessonSection>

      {/* ---------- Section 3: Routing ---------- */}
      <LessonSection id="routing" title="Routing with React Router">
        <p className="text-muted-foreground mb-3">
          React Router enables navigation between pages in a single-page application (SPA). You can define routes and link to them without reloading the page.
        </p>

        <CodeBlock
          language="jsx"
          code={`import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Us</h2>;
}

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}`}
        />
      </LessonSection>

      {/* ---------- Section 4: Context API ---------- */}
      <LessonSection id="context" title="Global State with Context API">
        <p className="text-muted-foreground mb-3">
          The Context API helps share data across components without prop drilling. It’s ideal for global state like themes, user data, or language settings.
        </p>

        <CodeBlock
          language="jsx"
          code={`import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Toggle Theme (Current: {theme})
    </button>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ThemeButton />
    </ThemeProvider>
  );
}`}
        />
      </LessonSection>

      {/* ---------- Section 5: Best Practices ---------- */}
      <LessonSection id="best-practices" title="Performance & Best Practices">
        <p className="text-muted-foreground">
          Optimize your React apps by minimizing unnecessary re-renders, splitting components logically, and using <code>React.memo</code> or <code>useMemo</code> when appropriate.
        </p>

        <CodeBlock
          language="jsx"
          code={`import { memo, useMemo } from "react";

const ExpensiveCalculation = memo(({ value }) => {
  const result = useMemo(() => {
    console.log("Calculating...");
    return value * 2;
  }, [value]);

  return <p>Result: {result}</p>;
});

export default function App() {
  return (
    <div>
      <h2>Performance Example</h2>
      <ExpensiveCalculation value={10} />
    </div>
  );
}`}
        />
      </LessonSection>
    </LessonLayout>
  )
}
