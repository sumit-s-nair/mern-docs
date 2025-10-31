'use client'

import { LessonLayout } from "@/components/lesson/lesson-layout"
import { LessonSection } from "@/components/lesson/lesson-section"
import { CodeBlock } from "@/components/lesson/code-block"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function ModulesNpmPage() {
  const router = useRouter()

  return (
    <LessonLayout
      title="Modules & NPM"
      intro="Learn how to work with Node.js modules and manage packages with npm, the world's largest software registry."
      toc={[
        { href: "#introduction", label: "Introduction" },
        { href: "#npm-basics", label: "NPM Basics" },
        { href: "#package-json", label: "package.json" },
        { href: "#installing", label: "Installing Packages" },
        { href: "#creating", label: "Creating Modules" },
        { href: "#versioning", label: "Semantic Versioning" },
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
          npm (Node Package Manager) is the world&apos;s largest software registry with over 2 million packages. It allows you to install, share, and manage dependencies in your Node.js projects.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-4 rounded-md">
          <p className="font-semibold mb-2">What is npm?</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li><strong>Package Registry:</strong> Hosts millions of reusable code packages</li>
            <li><strong>CLI Tool:</strong> Command-line interface for managing packages</li>
            <li><strong>Dependency Manager:</strong> Automatically handles package dependencies</li>
          </ul>
        </div>
      </LessonSection>

      <LessonSection id="npm-basics" title="NPM Basics">
        <p className="text-muted-foreground mb-4">
          Here are the most common npm commands you&apos;ll use regularly:
        </p>

        <CodeBlock
          language="bash"
          code={`# Initialize a new project
npm init

# Quick initialization with defaults
npm init -y

# Install a package
npm install package-name
npm i package-name  # shorthand

# Install as dev dependency
npm install --save-dev package-name
npm i -D package-name  # shorthand

# Install globally
npm install -g package-name

# Uninstall a package
npm uninstall package-name

# Update packages
npm update

# List installed packages
npm list

# Check for outdated packages
npm outdated`}
        />

        <div className="bg-muted/50 p-4 rounded-md mt-4">
          <p className="font-semibold mb-2">Package Types</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
            <li>
              <strong>Dependencies:</strong> Packages your application needs to run in production
              <br />
              <code className="text-xs">npm install express</code>
            </li>
            <li>
              <strong>Dev Dependencies:</strong> Packages needed only during development (testing, build tools)
              <br />
              <code className="text-xs">npm install --save-dev nodemon</code>
            </li>
            <li>
              <strong>Global Packages:</strong> CLI tools installed system-wide
              <br />
              <code className="text-xs">npm install -g typescript</code>
            </li>
          </ul>
        </div>
      </LessonSection>

      <LessonSection id="package-json" title="package.json">
        <p className="text-muted-foreground mb-4">
          The <code>package.json</code> file is the heart of any Node.js project. It contains metadata about your project and its dependencies.
        </p>

        <CodeBlock
          language="json"
          code={`{
  "name": "my-app",
  "version": "1.0.0",
  "description": "My Node.js application",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest"
  },
  "keywords": ["nodejs", "api"],
  "author": "Your Name",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2",
    "dotenv": "^16.0.3"
  },
  "devDependencies": {
    "nodemon": "^3.0.1",
    "jest": "^29.5.0"
  }
}`}
          showLineNumbers
        />

        <div className="bg-muted/50 p-4 rounded-md mt-4">
          <p className="font-semibold mb-3">Key Fields</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
            <li><strong>name:</strong> Package name (required, lowercase, no spaces)</li>
            <li><strong>version:</strong> Package version (required, follows semantic versioning)</li>
            <li><strong>main:</strong> Entry point of your application</li>
            <li><strong>scripts:</strong> Custom commands you can run with <code>npm run</code></li>
            <li><strong>dependencies:</strong> Packages required for production</li>
            <li><strong>devDependencies:</strong> Packages needed only for development</li>
          </ul>
        </div>

        <div className="mt-4">
          <p className="font-semibold mb-2">Running Scripts</p>
          <CodeBlock
            language="bash"
            code={`# Run a custom script
npm run dev

# Special scripts (no "run" needed)
npm start
npm test`}
          />
        </div>
      </LessonSection>

      <LessonSection id="installing" title="Installing Packages">
        <p className="text-muted-foreground mb-4">
          When you install packages, npm creates a <code>node_modules</code> folder and a <code>package-lock.json</code> file.
        </p>

        <div className="space-y-6">
          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Basic Installation</p>
            <CodeBlock
              language="bash"
              code={`# Install all dependencies from package.json
npm install

# Install specific package
npm install express

# Install specific version
npm install express@4.18.0

# Install latest version
npm install express@latest`}
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">The node_modules Folder</p>
            <p className="text-sm text-muted-foreground mb-3">
              This folder contains all installed packages and their dependencies. It can be very large!
            </p>
            <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 p-3 rounded-md">
              <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-300 mb-2">
                Important
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                Never commit <code>node_modules</code> to version control! Add it to your <code>.gitignore</code> file:
              </p>
              <CodeBlock
                language="text"
                code={`# .gitignore
node_modules/
.env`}
              />
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">package-lock.json</p>
            <p className="text-sm text-muted-foreground mb-2">
              This file locks down the exact versions of all packages and their dependencies. It ensures consistent installs across different environments.
            </p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Automatically generated by npm</li>
              <li>Should be committed to version control</li>
              <li>Ensures everyone installs the same package versions</li>
            </ul>
          </div>
        </div>
      </LessonSection>

      <LessonSection id="creating" title="Creating Your Own Modules">
        <p className="text-muted-foreground mb-4">
          You can create reusable modules to organize your code better and share functionality across your application.
        </p>

        <div className="space-y-6">
          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Example: Logger Module</p>
            <CodeBlock
              language="js"
              code={`// utils/logger.js
function log(message) {
  const timestamp = new Date().toISOString();
  console.log(\`[\${timestamp}] \${message}\`);
}

function error(message) {
  const timestamp = new Date().toISOString();
  console.error(\`[\${timestamp}] ERROR: \${message}\`);
}

function warn(message) {
  const timestamp = new Date().toISOString();
  console.warn(\`[\${timestamp}] WARNING: \${message}\`);
}

module.exports = { log, error, warn };`}
              showLineNumbers
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Using Your Module</p>
            <CodeBlock
              language="js"
              code={`// app.js
const logger = require('./utils/logger');

logger.log('Application started');
logger.warn('This is a warning');
logger.error('Something went wrong');

// Output:
// [2024-01-15T10:30:00.000Z] Application started
// [2024-01-15T10:30:00.001Z] WARNING: This is a warning
// [2024-01-15T10:30:00.002Z] ERROR: Something went wrong`}
              showLineNumbers
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Module Best Practices</p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
              <li>Keep modules focused on a single responsibility</li>
              <li>Use descriptive file and function names</li>
              <li>Document your module with comments</li>
              <li>Export only what&apos;s necessary (keep internal functions private)</li>
              <li>Organize related modules in folders</li>
            </ul>
          </div>
        </div>
      </LessonSection>

      <LessonSection id="versioning" title="Semantic Versioning">
        <p className="text-muted-foreground mb-4">
          npm uses semantic versioning (semver) to manage package versions. Understanding version numbers is crucial for managing dependencies.
        </p>

        <div className="bg-muted/50 p-4 rounded-md mb-4">
          <p className="font-semibold mb-3">Version Format: MAJOR.MINOR.PATCH</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
            <li><strong>MAJOR (1.0.0):</strong> Breaking changes, incompatible API changes</li>
            <li><strong>MINOR (0.1.0):</strong> New features, backward-compatible</li>
            <li><strong>PATCH (0.0.1):</strong> Bug fixes, backward-compatible</li>
          </ul>
        </div>

        <div className="bg-muted/50 p-4 rounded-md">
          <p className="font-semibold mb-3">Version Ranges</p>
          <p className="text-sm text-muted-foreground mb-3">
            You can specify which versions to accept using special characters:
          </p>
          <CodeBlock
            language="json"
            code={`{
  "dependencies": {
    "exact": "4.18.2",           // Exactly 4.18.2
    "caret": "^4.18.2",          // >=4.18.2 <5.0.0 (most common)
    "tilde": "~4.18.2",          // >=4.18.2 <4.19.0
    "greater": ">4.18.2",        // Greater than 4.18.2
    "range": ">=4.18.0 <5.0.0",  // Version range
    "latest": "latest",          // Always latest (not recommended)
    "wildcard": "4.x"            // Any 4.x.x version
  }
}`}
            showLineNumbers
          />
        </div>

        <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 p-4 rounded-md mt-4">
          <p className="text-sm font-semibold text-green-900 dark:text-green-300 mb-2">
            Recommended
          </p>
          <p className="text-sm text-muted-foreground">
            Use the caret (<code>^</code>) for most dependencies. It allows minor updates and patches while preventing breaking changes: <code>&quot;express&quot;: &quot;^4.18.2&quot;</code>
          </p>
        </div>
      </LessonSection>

      <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-4 rounded-md mt-8">
        <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">
          Ready for More?
        </p>
        <p className="text-sm text-muted-foreground mb-3">
          Now that you understand modules and npm, learn about best practices for writing production-ready Node.js applications!
        </p>
        <Button
          onClick={() => router.push('/topic-7/best-practices')}
          size="sm"
        >
          Next: Best Practices
        </Button>
      </div>
    </LessonLayout>
  )
}
