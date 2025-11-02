'use client'

import { LessonLayout } from "@/components/lesson/lesson-layout"
import { LessonSection } from "@/components/lesson/lesson-section"
import { CodeBlock } from "@/components/lesson/code-block"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function MongoDBSetupPage() {
  const router = useRouter()

  return (
    <LessonLayout
      title="MongoDB Installation & Setup Guide"
      intro="Complete step-by-step guide to install and configure MongoDB on your computer. Choose between local installation or cloud setup with MongoDB Atlas."
      toc={[
        { href: "#choose", label: "Which Option to Choose?" },
        { href: "#local", label: "Local Installation" },
        { href: "#atlas", label: "MongoDB Atlas (Cloud)" },
        { href: "#verify", label: "Verify Installation" },
      ]}
    >
      <div className="mb-4 flex flex-wrap gap-2 items-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.push('/topic-6')}
          className="flex items-center gap-1.5 text-xs sm:text-sm shrink-0"
        >
          <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          <span className="whitespace-nowrap">Back to Topic 6</span>
        </Button>
      </div>

      <LessonSection id="choose" title="Which Option to Choose?">
        <p className="text-muted-foreground mb-4">
          You have two options to get MongoDB running:
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-4 rounded-md">
            <p className="font-semibold mb-2">Option 1: Local Installation</p>
            <p className="text-sm text-muted-foreground mb-3">
              Install MongoDB directly on your computer
            </p>
            <p className="text-sm font-semibold mb-1">Pros:</p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mb-2">
              <li>Works offline</li>
              <li>Faster for local development</li>
              <li>More control over configuration</li>
            </ul>
            <p className="text-sm font-semibold mb-1">Cons:</p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Takes up disk space</li>
              <li>Requires installation steps</li>
              <li>Need to manage updates</li>
            </ul>
          </div>

          <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 p-4 rounded-md">
            <p className="font-semibold mb-2">Option 2: MongoDB Atlas (Cloud)</p>
            <p className="text-sm text-muted-foreground mb-3">
              Use MongoDB in the cloud (free tier available)
            </p>
            <p className="text-sm font-semibold mb-1">Pros:</p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mb-2">
              <li>No installation needed</li>
              <li>Access from anywhere</li>
              <li>Automatic backups</li>
              <li>Production-ready</li>
            </ul>
            <p className="text-sm font-semibold mb-1">Cons:</p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Requires internet connection</li>
              <li>Free tier has storage limits (512MB)</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 p-4 rounded-md mt-4">
          <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-300 mb-2">
            Recommendation for Beginners
          </p>
          <p className="text-sm text-muted-foreground">
            Start with <strong>MongoDB Atlas (Cloud)</strong> - it&apos;s easier and gets you up and running in 5 minutes. You can always install locally later if needed!
          </p>
        </div>
      </LessonSection>

      <LessonSection id="local" title="Local Installation">
        <p className="text-muted-foreground mb-4">
          Follow the instructions for your operating system:
        </p>

        <div className="space-y-6">
          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Step 1: Download MongoDB Community Server</p>
            <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-1">
              <li className="break-words">Visit <a href="https://www.mongodb.com/try/download/community" target="_blank" className="text-primary underline break-all">mongodb.com/try/download/community</a></li>
              <li>Select the latest stable version (7.0 or higher)</li>
              <li>Choose your operating system</li>
              <li>Download the installer</li>
            </ol>
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Step 2: Install MongoDB</p>
            
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-2">Windows Installation:</p>
                <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-2">
                  <li>Double-click the downloaded MSI file</li>
                  <li>Click &quot;Next&quot; on the welcome screen</li>
                  <li>Accept the license agreement</li>
                  <li>Choose <strong>&quot;Complete&quot;</strong> installation</li>
                  <li>
                    <strong>Service Configuration Screen:</strong>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>✓ Keep &quot;Install MongoDB as a Service&quot; checked</li>
                      <li>✓ Select &quot;Run service as Network Service user&quot;</li>
                      <li>Service Name: <code>MongoDB</code></li>
                      <li>Data Directory: Keep default</li>
                      <li>Log Directory: Keep default</li>
                      <li>Click &quot;Next&quot;</li>
                    </ul>
                  </li>
                  <li>
                    MongoDB Compass (optional):
                    <ul className="list-disc pl-5 mt-1">
                      <li>Keep checked if you want a visual interface</li>
                      <li>Or uncheck to skip</li>
                    </ul>
                  </li>
                  <li>Click &quot;Install&quot; and wait</li>
                  <li>Click &quot;Finish&quot;</li>
                </ol>

                <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 p-3 rounded-md mt-3">
                  <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-300 mb-2">
                    Adding MongoDB to PATH (Windows)
                  </p>
                  <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Search for &quot;Environment Variables&quot; in Windows</li>
                    <li>Click &quot;Edit the system environment variables&quot;</li>
                    <li>Click &quot;Environment Variables&quot; button</li>
                    <li>Under &quot;System variables&quot;, find and select <strong>Path</strong></li>
                    <li>Click &quot;Edit&quot;</li>
                    <li>Click &quot;New&quot; and add:
                      <CodeBlock
                        language="text"
                        code={`C:\\Program Files\\MongoDB\\Server\\7.0\\bin`}
                      />
                    </li>
                    <li>Click &quot;OK&quot; on all windows</li>
                    <li>Restart your terminal</li>
                  </ol>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-2">macOS Installation:</p>
                <p className="text-sm text-muted-foreground mb-2">Using Homebrew (easiest method):</p>
                <CodeBlock
                  language="bash"
                  code={`# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Add MongoDB tap
brew tap mongodb/brew

# Install MongoDB
brew install mongodb-community@7.0

# Start MongoDB service
brew services start mongodb-community@7.0`}
                />
              </div>

              <div>
                <p className="font-semibold mb-2">Linux (Ubuntu/Debian):</p>
                <CodeBlock
                  language="bash"
                  code={`# Import MongoDB public key
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -

# Add MongoDB repository
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

# Update package list
sudo apt-get update

# Install MongoDB
sudo apt-get install -y mongodb-org

# Start MongoDB service
sudo systemctl start mongod

# Enable MongoDB to start on boot
sudo systemctl enable mongod`}
                />
              </div>
            </div>
          </div>
        </div>
      </LessonSection>

      <LessonSection id="atlas" title="MongoDB Atlas (Cloud Setup)">
        <p className="text-muted-foreground mb-4">
          Follow these steps to set up a free cloud database in minutes:
        </p>

        <div className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-2">Step 1: Create an Account</p>
            <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-1">
              <li className="break-words">Go to <a href="https://cloud.mongodb.com" target="_blank" className="text-primary underline break-all">cloud.mongodb.com</a></li>
              <li>Click &quot;Sign Up&quot;</li>
              <li>Sign up with email or use Google/GitHub</li>
              <li>Verify your email if required</li>
            </ol>
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-2">Step 2: Create a Free Cluster</p>
            <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-2">
              <li>After logging in, click &quot;Build a Database&quot;</li>
              <li>Select <strong>M0 FREE</strong> tier (512MB storage)</li>
              <li>Choose a cloud provider (AWS, Google Cloud, or Azure)</li>
              <li>Select a region close to you</li>
              <li>Name your cluster (or keep default &quot;Cluster0&quot;)</li>
              <li>Click &quot;Create Cluster&quot;</li>
            </ol>
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-2">Step 3: Security Setup</p>
            <p className="text-sm text-muted-foreground mb-2">
              You&apos;ll see a <strong>Security Quickstart</strong> screen:
            </p>
            <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-2">
              <li>
                <strong>Create Database User:</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>Username: <code>myuser</code> (or your choice)</li>
                  <li>Password: Click &quot;Autogenerate Secure Password&quot;</li>
                  <li><strong>SAVE THIS PASSWORD!</strong> Copy it somewhere safe</li>
                  <li>Click &quot;Create User&quot;</li>
                </ul>
              </li>
              <li>
                <strong>Network Access:</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>Choose &quot;My Local Environment&quot;</li>
                  <li>Click &quot;Add My Current IP Address&quot;</li>
                  <li>Or click &quot;Allow Access from Anywhere&quot; (0.0.0.0/0) for learning</li>
                  <li>Click &quot;Finish and Close&quot;</li>
                </ul>
              </li>
            </ol>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 p-4 rounded-md">
            <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-300 mb-2">
              What if I see &quot;Service Config&quot; screen?
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              Sometimes after clicking &quot;Finish and Close&quot;, you might see additional options:
            </p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li><strong>Deployment Type:</strong> Leave as &quot;Cluster&quot;</li>
              <li><strong>Cloud Provider & Region:</strong> Already set</li>
              <li><strong>Cluster Tier:</strong> Should show &quot;M0 Sandbox (Free)&quot;</li>
              <li><strong>Additional Settings:</strong> Leave everything as default</li>
              <li>Just click &quot;Create Cluster&quot; or &quot;Confirm&quot;</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-2">
              Wait 3-5 minutes for your cluster to deploy.
            </p>
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-2">Step 4: Get Your Connection String</p>
            <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-1">
              <li>Once cluster is ready, click &quot;Connect&quot; button</li>
              <li>Select &quot;Connect your application&quot;</li>
              <li>Driver: Choose &quot;Node.js&quot;</li>
              <li>Version: Select latest</li>
              <li>Copy the connection string</li>
              <li>Replace <code>&lt;password&gt;</code> with your actual password</li>
              <li>Replace <code>myFirstDatabase</code> with your database name (e.g., <code>schoolDB</code>)</li>
            </ol>
            <p className="text-sm text-muted-foreground mt-2">
              Example connection string:
            </p>
            <CodeBlock
              language="text"
              code={`mongodb+srv://myuser:mypassword@cluster0.xxxxx.mongodb.net/schoolDB?retryWrites=true&w=majority`}
            />
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 p-4 rounded-md mt-4">
          <p className="text-sm font-semibold text-green-900 dark:text-green-300 mb-2">
            Success!
          </p>
          <p className="text-sm text-muted-foreground">
            Your MongoDB Atlas cluster is ready! You can now connect to it from your applications using the connection string.
          </p>
        </div>
      </LessonSection>

      <LessonSection id="verify" title="Verify Installation">
        <p className="text-muted-foreground mb-4">
          Let&apos;s make sure everything is working correctly:
        </p>

        <div className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-2">For Local Installation:</p>
            <p className="text-sm text-muted-foreground mb-2">
              Open your terminal and run:
            </p>
            <CodeBlock
              language="bash"
              code={`# Check MongoDB Shell version
mongosh --version

# Connect to local MongoDB
mongosh

# You should see a connection message and a prompt like:
# test>`}
            />
            <p className="text-sm text-muted-foreground mt-2">
              If you see the MongoDB shell prompt, congratulations! MongoDB is installed correctly.
            </p>
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-2">For MongoDB Atlas:</p>
            <p className="text-sm text-muted-foreground mb-2">
              Test your connection using mongosh:
            </p>
            <CodeBlock
              language="bash"
              code={`# Connect to your Atlas cluster (replace with your connection string)
mongosh "mongodb+srv://myuser:mypassword@cluster0.xxxxx.mongodb.net/schoolDB"

# You should see a connection success message`}
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-2">Quick Test:</p>
            <p className="text-sm text-muted-foreground mb-2">
              Once connected, try these commands:
            </p>
            <CodeBlock
              language="javascript"
              code={`// Show all databases
show dbs

// Create a test database
use testDB

// Insert a test document
db.test.insertOne({ message: "Hello MongoDB!" })

// Find the document
db.test.find()

// You should see your inserted document!`}
            />
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-3 sm:p-4 rounded-md mt-4 overflow-hidden">
          <p className="text-xs sm:text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2 break-words">
            All Set!
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground break-words">
            Now proceed to the MongoDB Basics lesson to start learning how to use MongoDB!
          </p>
          <Button
            onClick={() => router.push('/topic-6/mongodb-basics')}
            className="mt-3 text-xs sm:text-sm"
            size="sm"
          >
            <span className="whitespace-nowrap">Next: MongoDB Basics & CRUD</span>
          </Button>
        </div>
      </LessonSection>
    </LessonLayout>
  )
}
