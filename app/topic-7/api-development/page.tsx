'use client'

import { LessonLayout } from "@/components/lesson/lesson-layout"
import { LessonSection } from "@/components/lesson/lesson-section"
import { CodeBlock } from "@/components/lesson/code-block"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function ApiDevelopmentPage() {
  const router = useRouter()

  return (
    <LessonLayout
      title="API Development with Express.js"
      intro="Learn how to build production-ready REST APIs using Express.js and Node.js. From basic routes to complete CRUD operations with best practices."
      toc={[
        { href: "#introduction", label: "Introduction" },
        { href: "#setup", label: "Project Setup" },
        { href: "#first-route", label: "Creating Routes" },
        { href: "#middleware", label: "Middleware" },
        { href: "#rest-api", label: "Building REST API" },
        { href: "#testing", label: "Testing APIs" },
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
          Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It&apos;s the de facto standard for building APIs with Node.js.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-4 rounded-md">
          <p className="font-semibold mb-2">Why Express.js?</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li><strong>Minimal:</strong> Provides just what you need, no bloat</li>
            <li><strong>Flexible:</strong> Use any database, template engine, or architecture</li>
            <li><strong>Fast:</strong> Built on Node.js for high performance</li>
            <li><strong>Popular:</strong> Large ecosystem and community support</li>
          </ul>
        </div>
      </LessonSection>

      <LessonSection id="setup" title="Project Setup">
        <p className="text-muted-foreground mb-4">
          Let&apos;s create a new Express.js project from scratch.
        </p>

        <div className="space-y-6">
          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Step 1: Initialize project</p>
            <CodeBlock
              language="bash"
              code={`# Create project directory
mkdir my-api
cd my-api

# Initialize npm
npm init -y`}
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Step 2: Install Express</p>
            <CodeBlock
              language="bash"
              code={`# Install Express
npm install express

# Install nodemon for development (optional but recommended)
npm install --save-dev nodemon`}
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Step 3: Update package.json</p>
            <p className="text-sm text-muted-foreground mb-2">
              Add scripts to your <code>package.json</code>:
            </p>
            <CodeBlock
              language="json"
              code={`{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
}`}
            />
          </div>
        </div>
      </LessonSection>

      <LessonSection id="first-route" title="Creating Your First Route">
        <p className="text-muted-foreground mb-4">
          Create an <code>index.js</code> file with a basic Express server:
        </p>

        <CodeBlock
          language="js"
          code={`const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Basic GET route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to my API' });
});

// Route with parameters
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ 
    userId, 
    message: \`User ID: \${userId}\`
  });
});

// Route with query parameters
app.get('/search', (req, res) => {
  const { q, page = 1 } = req.query;
  res.json({ 
    query: q, 
    page: parseInt(page)
  });
});

// Start server
app.listen(PORT, () => {
  console.log(\`Server running on http://localhost:\${PORT}\`);
});`}
          showLineNumbers
        />

        <div className="bg-muted/50 p-4 rounded-md mt-4">
          <p className="font-semibold mb-2">Run your server</p>
          <CodeBlock
            language="bash"
            code={`# For development (auto-restart on changes)
npm run dev

# For production
npm start`}
          />
          <p className="text-sm text-muted-foreground mt-2">
            Visit <code>http://localhost:3000</code> in your browser or use a tool like Postman to test the API.
          </p>
        </div>
      </LessonSection>

      <LessonSection id="middleware" title="Middleware">
        <p className="text-muted-foreground mb-4">
          Middleware functions have access to the request and response objects. They can modify them, end the request-response cycle, or call the next middleware.
        </p>

        <div className="space-y-6">
          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Logging middleware</p>
            <CodeBlock
              language="js"
              code={`// Custom logging middleware
app.use((req, res, next) => {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
  next(); // Pass control to next middleware
});`}
              showLineNumbers
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Authentication middleware</p>
            <CodeBlock
              language="js"
              code={`// Authentication middleware
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  // Verify token (simplified example)
  if (token !== 'valid-token') {
    return res.status(401).json({ error: 'Invalid token' });
  }
  
  // Attach user to request
  req.user = { id: 1, name: 'John' };
  next();
};

// Use middleware on specific routes
app.get('/protected', authenticate, (req, res) => {
  res.json({ 
    message: 'This is protected data',
    user: req.user
  });
});`}
              showLineNumbers
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Error handling middleware</p>
            <CodeBlock
              language="js"
              code={`// Error handling middleware (put this last)
app.use((err, req, res, next) => {
  console.error(err.stack);
  
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Something went wrong!',
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    }
  });
});`}
              showLineNumbers
            />
          </div>
        </div>
      </LessonSection>

      <LessonSection id="rest-api" title="Building a Complete REST API">
        <p className="text-muted-foreground mb-4">
          Here&apos;s a complete example of a RESTful API for managing users with all CRUD operations.
        </p>

        <CodeBlock
          language="js"
          code={`const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// In-memory data store (use a database in production)
let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

// GET all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET single user
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  res.json(user);
});

// POST create user
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  
  // Validation
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email required' });
  }
  
  const newUser = {
    id: users.length + 1,
    name,
    email
  };
  
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user
app.put('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  const { name, email } = req.body;
  if (name) user.name = name;
  if (email) user.email = email;
  
  res.json(user);
});

// DELETE user
app.delete('/api/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  
  if (index === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  users.splice(index, 1);
  res.status(204).send();
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(\`API server running on http://localhost:\${PORT}\`);
});`}
          showLineNumbers
        />

        <div className="bg-yellow-50 dark:bg-muted border border-yellow-200 dark:border-yellow-900 p-4 rounded-md mt-4">
          <p className="text-sm font-semibold text-yellow-600 mb-2">
            Production Note
          </p>
          <p className="text-sm text-muted-foreground">
            This example uses an in-memory array for simplicity. In production, use a proper database like PostgreSQL, MongoDB, or MySQL.
          </p>
        </div>
      </LessonSection>

      <LessonSection id="testing" title="Testing Your API">
        <p className="text-muted-foreground mb-4">
          You can test your API using cURL, Postman, or any HTTP client. Here are examples using cURL:
        </p>

        <div className="space-y-6">
          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">GET all users</p>
            <CodeBlock
              language="bash"
              code={`curl http://localhost:3000/api/users`}
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">GET single user</p>
            <CodeBlock
              language="bash"
              code={`curl http://localhost:3000/api/users/1`}
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">POST create user</p>
            <CodeBlock
              language="bash"
              code={`curl -X POST http://localhost:3000/api/users \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Charlie","email":"charlie@example.com"}'`}
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">PUT update user</p>
            <CodeBlock
              language="bash"
              code={`curl -X PUT http://localhost:3000/api/users/1 \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Alice Updated"}'`}
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">DELETE user</p>
            <CodeBlock
              language="bash"
              code={`curl -X DELETE http://localhost:3000/api/users/1`}
            />
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-4 rounded-md mt-4">
          <p className="font-semibold mb-2">Using Postman</p>
          <p className="text-sm text-muted-foreground mb-2">
            Postman is a popular API testing tool with a graphical interface:
          </p>
          <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-1">
            <li>Download Postman from <a href="https://www.postman.com" target="_blank" className="text-primary underline">postman.com</a></li>
            <li>Create a new request</li>
            <li>Set the HTTP method (GET, POST, PUT, DELETE)</li>
            <li>Enter the URL (e.g., http://localhost:3000/api/users)</li>
            <li>For POST/PUT, add JSON body in the &quot;Body&quot; tab</li>
            <li>Click &quot;Send&quot; to execute the request</li>
          </ol>
        </div>
      </LessonSection>

      <div className="bg-green-50 dark:bg-green-300/20 border border-green-200 dark:border-green-900 p-4 rounded-md mt-8">
        <p className="text-sm font-semibold text-green-600 mb-2">
          Congratulations!
        </p>
        <p className="text-sm text-muted-foreground mb-3">
          You&apos;ve completed the Node.js essentials! You now have the knowledge to build production-ready applications with Node.js and Express.js. Keep practicing and building projects to solidify your skills.
        </p>
        <div className="flex gap-2">
          <Button
            onClick={() => router.push('/topic-7')}
            variant="link"
            size="sm"
          >
            Back to Topics
          </Button>
          <Button
            onClick={() => router.push('/')}
            size="sm"
            className="bg-blue-500"
          >
            Go to Home
          </Button>
        </div>
      </div>
    </LessonLayout>
  )
}
