'use client'

import { LessonLayout } from "@/components/lesson/lesson-layout"
import { LessonSection } from "@/components/lesson/lesson-section"
import { CodeBlock } from "@/components/lesson/code-block"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function FundamentalsPage() {
  const router = useRouter()

  return (
    <LessonLayout
      title="Node.js Fundamentals"
      intro="Master the core concepts that make Node.js unique and powerful. Learn about the event loop, asynchronous programming patterns, and the module system."
      toc={[
        { href: "#introduction", label: "Introduction" },
        { href: "#event-loop", label: "Event Loop" },
        { href: "#async", label: "Asynchronous Programming" },
        { href: "#callbacks", label: "Callbacks" },
        { href: "#promises", label: "Promises" },
        { href: "#async-await", label: "Async/Await" },
        { href: "#modules", label: "Module System" },
      ]}
    >
      <div className="mb-4 flex flex-row gap-8">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.push('/topic-7')}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Node.js Lesson
        </Button>
      </div>

      <LessonSection id="introduction" title="Introduction">
        <p className="text-muted-foreground mb-4">
          Node.js is built on Chrome&apos;s V8 JavaScript engine and uses an event-driven, non-blocking I/O model. This makes it lightweight and efficient, perfect for data-intensive real-time applications.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-4 rounded-md">
          <p className="font-semibold mb-2">Key Characteristics</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li><strong>Single-threaded:</strong> Uses one main thread for JavaScript execution</li>
            <li><strong>Event-driven:</strong> Responds to events asynchronously</li>
            <li><strong>Non-blocking I/O:</strong> Doesn&apos;t wait for I/O operations to complete</li>
            <li><strong>Scalable:</strong> Can handle thousands of concurrent connections</li>
          </ul>
        </div>
      </LessonSection>

      <LessonSection id="event-loop" title="Event Loop">
        <p className="text-muted-foreground mb-4">
          The event loop is what allows Node.js to perform non-blocking I/O operations despite JavaScript being single-threaded. It offloads operations to the system kernel whenever possible.
        </p>

        <CodeBlock
          language="js"
          code={`console.log('First');

setTimeout(() => {
  console.log('Second');
}, 0);

console.log('Third');

// Output:
// First
// Third
// Second`}
          showLineNumbers
        />

        <p className="text-sm text-muted-foreground mt-4 mb-4">
          Even though <code>setTimeout</code> has a delay of 0ms, &quot;Second&quot; is printed last because the callback is placed in the event queue and executed after the current call stack is empty.
        </p>

        <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 p-4 rounded-md">
          <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-300 mb-2">
            Event Loop Phases
          </p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li><strong>Timers:</strong> Executes callbacks scheduled by setTimeout() and setInterval()</li>
            <li><strong>Pending callbacks:</strong> Executes I/O callbacks deferred to the next loop iteration</li>
            <li><strong>Poll:</strong> Retrieves new I/O events</li>
            <li><strong>Check:</strong> Executes setImmediate() callbacks</li>
            <li><strong>Close callbacks:</strong> Executes close event callbacks</li>
          </ul>
        </div>
      </LessonSection>

      <LessonSection id="async" title="Asynchronous Programming">
        <p className="text-muted-foreground mb-4">
          Node.js uses asynchronous programming to handle multiple operations concurrently without blocking the main thread. This is essential for building performant applications.
        </p>

        <div className="bg-muted/50 p-4 rounded-md mb-4">
          <p className="font-semibold mb-2">Why Asynchronous?</p>
          <p className="text-sm text-muted-foreground">
            Synchronous code blocks execution until an operation completes. In a web server, this would mean handling only one request at a time. Asynchronous code allows the server to handle multiple requests while waiting for I/O operations (database queries, file reads, API calls) to complete.
          </p>
        </div>
      </LessonSection>

      <LessonSection id="callbacks" title="Callbacks">
        <p className="text-muted-foreground mb-4">
          Callbacks are functions passed as arguments to be executed later when an asynchronous operation completes.
        </p>

        <CodeBlock
          language="js"
          code={`const fs = require('fs');

// Asynchronous file reading with callback
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log('File contents:', data);
});

console.log('Reading file...');

// Output:
// Reading file...
// File contents: [contents of file.txt]`}
          showLineNumbers
        />

        <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 p-4 rounded-md mt-4">
          <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-300 mb-2">
            Callback Hell
          </p>
          <p className="text-sm text-muted-foreground mb-2">
            When multiple callbacks are nested, code becomes difficult to read and maintain. This is known as &quot;callback hell&quot; or &quot;pyramid of doom&quot;:
          </p>
          <CodeBlock
            language="js"
            code={`fs.readFile('file1.txt', (err, data1) => {
  fs.readFile('file2.txt', (err, data2) => {
    fs.readFile('file3.txt', (err, data3) => {
      // More nesting...
    });
  });
});`}
          />
          <p className="text-sm text-muted-foreground mt-2">
            Promises and async/await solve this problem elegantly.
          </p>
        </div>
      </LessonSection>

      <LessonSection id="promises" title="Promises">
        <p className="text-muted-foreground mb-4">
          Promises provide a cleaner way to handle asynchronous operations. A promise represents a value that may be available now, in the future, or never.
        </p>

        <CodeBlock
          language="js"
          code={`const fs = require('fs').promises;

// Using promises
fs.readFile('file.txt', 'utf8')
  .then(data => {
    console.log('File contents:', data);
    return fs.readFile('file2.txt', 'utf8');
  })
  .then(data2 => {
    console.log('File 2 contents:', data2);
  })
  .catch(err => {
    console.error('Error:', err);
  });`}
          showLineNumbers
        />

        <div className="bg-muted/50 p-4 rounded-md mt-4">
          <p className="font-semibold mb-3">Promise States</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li><strong>Pending:</strong> Initial state, neither fulfilled nor rejected</li>
            <li><strong>Fulfilled:</strong> Operation completed successfully</li>
            <li><strong>Rejected:</strong> Operation failed</li>
          </ul>
        </div>

        <div className="mt-4">
          <p className="font-semibold mb-2">Creating a Promise</p>
          <CodeBlock
            language="js"
            code={`function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  });
}

delay(2000)
  .then(() => console.log('Executed after 2 seconds'));`}
            showLineNumbers
          />
        </div>
      </LessonSection>

      <LessonSection id="async-await" title="Async/Await">
        <p className="text-muted-foreground mb-4">
          Async/await makes asynchronous code look and behave more like synchronous code, making it easier to read and maintain.
        </p>

        <CodeBlock
          language="js"
          code={`const fs = require('fs').promises;

async function readFiles() {
  try {
    const data1 = await fs.readFile('file1.txt', 'utf8');
    console.log('File 1:', data1);
    
    const data2 = await fs.readFile('file2.txt', 'utf8');
    console.log('File 2:', data2);
    
    return { data1, data2 };
  } catch (err) {
    console.error('Error reading files:', err);
    throw err;
  }
}

readFiles();`}
          showLineNumbers
        />

        <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 p-4 rounded-md mt-4 mb-4">
          <p className="text-sm font-semibold text-green-900 dark:text-green-300 mb-2">
            Best Practice
          </p>
          <p className="text-sm text-muted-foreground">
            Use async/await for cleaner, more readable asynchronous code. It&apos;s now the preferred approach in modern Node.js applications.
          </p>
        </div>

        <p className="font-semibold mb-2">Parallel Execution</p>
        <p className="text-sm text-muted-foreground mb-2">
          Use <code>Promise.all()</code> to execute multiple promises in parallel:
        </p>
        <CodeBlock
          language="js"
          code={`async function readFilesParallel() {
  try {
    // Read both files simultaneously
    const [data1, data2] = await Promise.all([
      fs.readFile('file1.txt', 'utf8'),
      fs.readFile('file2.txt', 'utf8')
    ]);
    
    console.log('File 1:', data1);
    console.log('File 2:', data2);
  } catch (err) {
    console.error('Error:', err);
  }
}`}
          showLineNumbers
        />
      </LessonSection>

      <LessonSection id="modules" title="Module System">
        <p className="text-muted-foreground mb-4">
          Node.js uses modules to organize code into reusable pieces. By default, Node.js uses the CommonJS module system, but also supports ES modules.
        </p>

        <div className="space-y-6">
          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">CommonJS (require/module.exports)</p>
            <p className="text-sm text-muted-foreground mb-2">
              Creating a module:
            </p>
            <CodeBlock
              language="js"
              code={`// math.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };`}
              showLineNumbers
            />
            <p className="text-sm text-muted-foreground mt-3 mb-2">
              Using the module:
            </p>
            <CodeBlock
              language="js"
              code={`// app.js
const math = require('./math');

console.log(math.add(5, 3));      // 8
console.log(math.subtract(5, 3)); // 2

// Or use destructuring
const { add, subtract } = require('./math');
console.log(add(5, 3)); // 8`}
              showLineNumbers
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">ES Modules (import/export)</p>
            <p className="text-sm text-muted-foreground mb-2">
              To use ES modules, either use <code>.mjs</code> extension or add <code>&quot;type&quot;: &quot;module&quot;</code> to package.json:
            </p>
            <CodeBlock
              language="js"
              code={`// math.mjs
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// Default export
export default function multiply(a, b) {
  return a * b;
}`}
              showLineNumbers
            />
            <p className="text-sm text-muted-foreground mt-3 mb-2">
              Using ES modules:
            </p>
            <CodeBlock
              language="js"
              code={`// app.mjs
import multiply, { add, subtract } from './math.mjs';

console.log(add(5, 3));      // 8
console.log(subtract(5, 3)); // 2
console.log(multiply(5, 3)); // 15`}
              showLineNumbers
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Built-in Modules</p>
            <p className="text-sm text-muted-foreground mb-2">
              Node.js comes with many built-in modules you can use without installation:
            </p>
            <CodeBlock
              language="js"
              code={`const fs = require('fs');           // File system
const path = require('path');       // Path utilities
const http = require('http');       // HTTP server
const crypto = require('crypto');   // Cryptography
const os = require('os');           // Operating system info
const events = require('events');   // Event emitter`}
            />
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-4 rounded-md mt-4">
          <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">
            Next Steps
          </p>
          <p className="text-sm text-muted-foreground mb-3">
            Now that you understand the fundamentals, you&apos;re ready to learn about npm and creating your own modules!
          </p>
          <Button
            onClick={() => router.push('/topic-7/modules-npm')}
            size="sm"
          >
            Next: Modules & NPM
          </Button>
        </div>
      </LessonSection>
    </LessonLayout>
  )
}
