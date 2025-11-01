'use client'

import { LessonLayout } from "@/components/lesson/lesson-layout"
import { LessonSection } from "@/components/lesson/lesson-section"
import { CodeBlock } from "@/components/lesson/code-block"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { ArrowLeft, Shield, Zap, FileCode, Settings } from "lucide-react"

export default function BestPracticesPage() {
  const router = useRouter()

  const practices = [
    {
      icon: Shield,
      title: "Security First",
      description: "Always validate input, use environment variables for secrets, and keep dependencies updated.",
    },
    {
      icon: Zap,
      title: "Optimize Performance",
      description: "Use async operations, implement caching, and monitor your application's performance.",
    },
    {
      icon: FileCode,
      title: "Clean Code",
      description: "Follow consistent coding standards, write meaningful comments, and keep functions small.",
    },
    {
      icon: Settings,
      title: "Configuration",
      description: "Use environment-specific configs and never hardcode sensitive information.",
    },
  ]

  return (
    <LessonLayout
      title="Node.js Best Practices"
      intro="Follow these industry standards to build robust, secure, and maintainable Node.js applications. Learn error handling, security, performance optimization, and code organization."
      toc={[
        { href: "#introduction", label: "Introduction" },
        { href: "#error-handling", label: "Error Handling" },
        { href: "#security", label: "Security" },
        { href: "#performance", label: "Performance" },
        { href: "#code-structure", label: "Code Structure" },
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
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {practices.map((practice) => (
            <Card key={practice.title} className="bg-muted/30">
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <practice.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{practice.title}</CardTitle>
                <CardDescription className="text-sm">{practice.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </LessonSection>

      <LessonSection id="error-handling" title="Error Handling">
        <p className="text-muted-foreground mb-4">
          Proper error handling is crucial for building reliable applications. Always handle errors gracefully and provide meaningful error messages.
        </p>

        <div className="space-y-6">
          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Always handle errors in async functions</p>
            <CodeBlock
              language="js"
              code={`// ✅ Good - Proper error handling
async function getData() {
  try {
    const result = await fetchData();
    return result;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // or handle appropriately
  }
}

// ❌ Bad - No error handling
async function getData() {
  const result = await fetchData(); // Unhandled promise rejection!
  return result;
}`}
              showLineNumbers
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Use centralized error handling in Express</p>
            <CodeBlock
              language="js"
              code={`// Error handling middleware (put this last)
app.use((err, req, res, next) => {
  console.error(err.stack);
  
  res.status(err.status || 500).json({
    error: {
      message: err.message,
      // Only show stack in development
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    }
  });
});`}
              showLineNumbers
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Handle unhandled rejections</p>
            <CodeBlock
              language="js"
              code={`// Catch unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Application specific logging, throwing an error, or other logic here
});

// Catch uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1); // Exit to restart
});`}
              showLineNumbers
            />
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-muted border border-yellow-200 dark:border-yellow-900 p-4 rounded-md mt-4">
          <p className="text-sm font-semibold text-yellow-600 mb-2">
            Important
          </p>
          <p className="text-sm text-muted-foreground">
            Never expose detailed error messages or stack traces to clients in production! Log them server-side but send generic error messages to users.
          </p>
        </div>
      </LessonSection>

      <LessonSection id="security" title="Security">
        <p className="text-muted-foreground mb-4">
          Security should be a top priority. Follow these practices to protect your application and user data.
        </p>

        <div className="space-y-6">
          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Use environment variables for sensitive data</p>
            <p className="text-sm text-muted-foreground mb-2">
              Install the <code>dotenv</code> package:
            </p>
            <CodeBlock
              language="bash"
              code={`npm install dotenv`}
            />
            <p className="text-sm text-muted-foreground mt-3 mb-2">
              Create a <code>.env</code> file:
            </p>
            <CodeBlock
              language="text"
              code={`DATABASE_URL=postgresql://user:pass@localhost/db
API_KEY=your-secret-api-key
JWT_SECRET=your-jwt-secret
PORT=3000`}
            />
            <p className="text-sm text-muted-foreground mt-3 mb-2">
              Use in your application:
            </p>
            <CodeBlock
              language="js"
              code={`require('dotenv').config();

const dbUrl = process.env.DATABASE_URL;
const apiKey = process.env.API_KEY;
const port = process.env.PORT || 3000;`}
              showLineNumbers
            />
            <div className="bg-red-50 dark:bg-red-800/20 border border-red-200 dark:border-red-800 p-3 rounded-md mt-3">
              <p className="text-sm font-semibold text-red-500 mb-2">
                Never commit .env files!
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                Add to <code>.gitignore</code>:
              </p>
              <CodeBlock
                language="text"
                code={`.env
.env.local
.env.*.local`}
              />
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Validate and sanitize user input</p>
            <CodeBlock
              language="js"
              code={`const validator = require('validator');

app.post('/user', (req, res) => {
  const { email, name, age } = req.body;
  
  // Validate email
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }
  
  // Sanitize input
  const sanitizedName = validator.escape(name);
  
  // Validate age
  if (!Number.isInteger(age) || age < 0 || age > 150) {
    return res.status(400).json({ error: 'Invalid age' });
  }
  
  // Process sanitized data...
});`}
              showLineNumbers
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Security best practices checklist</p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
              <li>Use HTTPS in production</li>
              <li>Implement rate limiting to prevent DDoS attacks</li>
              <li>Use helmet.js for secure HTTP headers</li>
              <li>Keep dependencies updated (<code>npm audit</code>)</li>
              <li>Use parameterized queries to prevent SQL injection</li>
              <li>Implement proper authentication and authorization</li>
              <li>Hash passwords with bcrypt</li>
              <li>Use CORS properly</li>
              <li>Set secure cookie flags (httpOnly, secure, sameSite)</li>
            </ul>
          </div>
        </div>
      </LessonSection>

      <LessonSection id="performance" title="Performance Optimization">
        <p className="text-muted-foreground mb-4">
          Write efficient code that scales well and provides a great user experience.
        </p>

        <div className="space-y-6">
          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Use async operations for I/O</p>
            <CodeBlock
              language="js"
              code={`// ✅ Good - Non-blocking
const fs = require('fs').promises;

async function readFiles() {
  // Read files in parallel
  const [file1, file2] = await Promise.all([
    fs.readFile('file1.txt', 'utf8'),
    fs.readFile('file2.txt', 'utf8')
  ]);
  return { file1, file2 };
}

// ❌ Bad - Blocking
const fs = require('fs');
const file1 = fs.readFileSync('file1.txt', 'utf8'); // Blocks!
const file2 = fs.readFileSync('file2.txt', 'utf8'); // Blocks!`}
              showLineNumbers
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Implement caching</p>
            <CodeBlock
              language="js"
              code={`// Simple in-memory cache
const cache = new Map();
const CACHE_TTL = 60000; // 1 minute

async function getUser(id) {
  const cached = cache.get(id);
  
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data;
  }
  
  const user = await database.findUser(id);
  cache.set(id, { data: user, timestamp: Date.now() });
  
  return user;
}`}
              showLineNumbers
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Use compression</p>
            <CodeBlock
              language="js"
              code={`const compression = require('compression');
const express = require('express');
const app = express();

// Enable gzip compression
app.use(compression());

// Your routes...`}
              showLineNumbers
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Performance tips</p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
              <li>Use connection pooling for databases</li>
              <li>Implement pagination for large datasets</li>
              <li>Use streaming for large files</li>
              <li>Enable HTTP/2 for better performance</li>
              <li>Use a CDN for static assets</li>
              <li>Implement proper logging without blocking</li>
              <li>Use cluster module to utilize multiple CPU cores</li>
              <li>Monitor performance with tools like PM2 or New Relic</li>
            </ul>
          </div>
        </div>
      </LessonSection>

      <LessonSection id="code-structure" title="Code Structure & Organization">
        <p className="text-muted-foreground mb-4">
          Organize your project for maintainability and scalability. A well-structured codebase is easier to understand, test, and extend.
        </p>

        <div className="space-y-6">
          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Recommended project structure</p>
            <CodeBlock
              language="text"
              code={`my-app/
├── src/
│   ├── controllers/    # Request handlers
│   ├── models/         # Data models
│   ├── routes/         # Route definitions
│   ├── middleware/     # Custom middleware
│   ├── services/       # Business logic
│   ├── utils/          # Helper functions
│   ├── config/         # Configuration files
│   └── app.js          # Express app setup
├── tests/              # Test files
├── public/             # Static files
├── .env                # Environment variables
├── .env.example        # Example env file
├── .gitignore
├── package.json
└── README.md`}
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Separate concerns</p>
            <CodeBlock
              language="js"
              code={`// ✅ Good - Separated concerns
// controllers/userController.js
const userService = require('../services/userService');

exports.getUser = async (req, res, next) => {
  try {
    const user = await userService.findById(req.params.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

// services/userService.js
const User = require('../models/User');

exports.findById = async (id) => {
  return await User.findById(id);
};

// routes/users.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/:id', userController.getUser);

module.exports = router;`}
              showLineNumbers
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Code quality best practices</p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
              <li>Follow the Single Responsibility Principle</li>
              <li>Keep functions small and focused</li>
              <li>Use meaningful variable and function names</li>
              <li>Write comments for complex logic only</li>
              <li>Use ESLint for code consistency</li>
              <li>Write unit tests for critical functions</li>
              <li>Use Prettier for code formatting</li>
              <li>Follow consistent naming conventions</li>
              <li>Avoid deep nesting (max 3 levels)</li>
              <li>Don&apos;t repeat yourself (DRY principle)</li>
            </ul>
          </div>
        </div>
      </LessonSection>

      <div className="bg-blue-50 dark:bg-muted border border-blue-200 dark:border-blue-900 p-4 rounded-md mt-8">
        <p className="text-sm font-semibold text-blue-500 mb-2">
          Ready to Build?
        </p>
        <p className="text-sm text-muted-foreground mb-3">
          Now that you know the best practices, let&apos;s put everything together and build a complete REST API with Express.js!
        </p>
        <Button
          onClick={() => router.push('/topic-7/api-development')}
          size="sm"
          className="bg-blue-500"
        >
          Next: API Development
        </Button>
      </div>
    </LessonLayout>
  )
}
