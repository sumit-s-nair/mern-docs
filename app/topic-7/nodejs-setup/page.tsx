'use client'

import { LessonLayout } from "@/components/lesson/lesson-layout"
import { LessonSection } from "@/components/lesson/lesson-section"
import { CodeBlock } from "@/components/lesson/code-block"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function NodeJSSetupPage() {
  const router = useRouter()

  return (
    <LessonLayout
      title="Node.js Installation & Setup Guide"
      intro="Complete step-by-step guide to install and configure Node.js on your computer. Learn how to set up Node.js on Windows, macOS, and Linux with best practices."
      toc={[
        { href: "#introduction", label: "Introduction" },
        { href: "#prerequisites", label: "Prerequisites" },
        { href: "#windows", label: "Windows Installation" },
        { href: "#macos", label: "macOS Installation" },
        { href: "#linux", label: "Linux Installation" },
        { href: "#nvm", label: "Using NVM (Recommended)" },
        { href: "#verify", label: "Verify Installation" },
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
          Node.js is a JavaScript runtime built on Chrome&apos;s V8 JavaScript engine. It allows you to run JavaScript on the server side and build scalable network applications.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-4 rounded-md">
          <p className="font-semibold mb-2">LTS vs Current</p>
          <p className="text-sm text-muted-foreground mb-3">
            Node.js releases come in two versions:
          </p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li><strong>LTS (Long Term Support):</strong> Recommended for production. Stable and receives updates for 30 months.</li>
            <li><strong>Current:</strong> Latest features but may have breaking changes. Good for experimentation.</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-3">
            <strong>Recommendation:</strong> Install the LTS version for production and learning.
          </p>
        </div>
      </LessonSection>

      <LessonSection id="prerequisites" title="Prerequisites">
        <p className="text-muted-foreground mb-4">
          Before installing Node.js, ensure you have:
        </p>

        <div className="space-y-3 mb-4">
          <div className="flex items-start gap-2">
            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary text-sm">✓</span>
            </div>
            <p className="text-sm text-muted-foreground">Basic understanding of command line interface (Terminal/Command Prompt)</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary text-sm">✓</span>
            </div>
            <p className="text-sm text-muted-foreground">Administrator/sudo access on your system</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary text-sm">✓</span>
            </div>
            <p className="text-sm text-muted-foreground">Stable internet connection for downloads</p>
          </div>
        </div>
      </LessonSection>

      <LessonSection id="windows" title="Windows Installation">
        <p className="text-muted-foreground mb-4">
          Follow these steps to install Node.js on Windows:
        </p>

        <div className="space-y-6">
          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Step 1: Download Node.js</p>
            <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-1">
              <li>Visit <a href="https://nodejs.org/" target="_blank" className="text-primary underline">nodejs.org</a></li>
              <li>Download the Windows Installer (.msi) for the LTS version</li>
              <li>Choose the 64-bit version for modern systems</li>
            </ol>
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Step 2: Run the Installer</p>
            <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-2">
              <li>Double-click the downloaded .msi file</li>
              <li>Click &quot;Next&quot; on the welcome screen</li>
              <li>Accept the license agreement</li>
              <li>Choose the installation location (default is fine)</li>
              <li>Select &quot;Complete&quot; installation to install npm as well</li>
              <li>Check &quot;Automatically install necessary tools&quot; if prompted</li>
              <li>Click &quot;Install&quot; and wait for completion</li>
              <li>Click &quot;Finish&quot;</li>
            </ol>
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Step 3: Verify Installation</p>
            <p className="text-sm text-muted-foreground mb-2">
              Open Command Prompt or PowerShell and run:
            </p>
            <CodeBlock
              language="bash"
              code={`node --version
npm --version`}
            />
            <p className="text-sm text-muted-foreground mt-2">
              You should see version numbers like <code>v20.10.0</code> and <code>10.2.3</code>
            </p>
          </div>
        </div>
      </LessonSection>

      <LessonSection id="macos" title="macOS Installation">
        <p className="text-muted-foreground mb-4">
          There are two recommended ways to install Node.js on macOS:
        </p>

        <div className="space-y-6">
          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Option 1: Using Homebrew (Recommended)</p>
            <p className="text-sm text-muted-foreground mb-2">
              If you have Homebrew installed, this is the easiest method:
            </p>
            <CodeBlock
              language="bash"
              code={`# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node

# Verify installation
node --version
npm --version`}
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Option 2: Official Installer</p>
            <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-1">
              <li>Visit <a href="https://nodejs.org/" target="_blank" className="text-primary underline">nodejs.org</a></li>
              <li>Download the macOS Installer (.pkg) for the LTS version</li>
              <li>Double-click the .pkg file to run the installer</li>
              <li>Follow the installation wizard</li>
              <li>Enter your password when prompted</li>
              <li>Click &quot;Install&quot; and wait for completion</li>
            </ol>
          </div>
        </div>
      </LessonSection>

      <LessonSection id="linux" title="Linux Installation">
        <p className="text-muted-foreground mb-4">
          Installation varies by Linux distribution. Here are instructions for popular distros:
        </p>

        <div className="space-y-6">
          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Ubuntu/Debian</p>
            <p className="text-sm text-muted-foreground mb-2">
              Using NodeSource repository (recommended for latest version):
            </p>
            <CodeBlock
              language="bash"
              code={`# Download and import NodeSource GPG key
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

# Install Node.js
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version`}
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Fedora/CentOS/RHEL</p>
            <CodeBlock
              language="bash"
              code={`# Download NodeSource setup script
curl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -

# Install Node.js
sudo dnf install -y nodejs

# Verify installation
node --version
npm --version`}
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Arch Linux</p>
            <CodeBlock
              language="bash"
              code={`# Install Node.js
sudo pacman -S nodejs npm

# Verify installation
node --version
npm --version`}
            />
          </div>
        </div>
      </LessonSection>

      <LessonSection id="nvm" title="Using NVM (Node Version Manager)">
        <p className="text-muted-foreground mb-4">
          NVM allows you to install and switch between multiple Node.js versions easily. This is especially useful when working on different projects.
        </p>

        <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 p-4 rounded-md mb-4">
          <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-300 mb-2">
            Pro Tip
          </p>
          <p className="text-sm text-muted-foreground">
            If you plan to work on multiple projects or need to test across different Node.js versions, start with NVM instead of a direct installation.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Install NVM (macOS/Linux)</p>
            <CodeBlock
              language="bash"
              code={`# Download and install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Reload shell configuration
source ~/.bashrc  # or ~/.zshrc for zsh

# Verify NVM installation
nvm --version`}
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Install NVM (Windows)</p>
            <p className="text-sm text-muted-foreground mb-2">
              Use <a href="https://github.com/coreybutler/nvm-windows" target="_blank" className="text-primary underline">nvm-windows</a>:
            </p>
            <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-1">
              <li>Download nvm-setup.zip from the releases page</li>
              <li>Extract and run nvm-setup.exe</li>
              <li>Follow the installation wizard</li>
              <li>Open a new Command Prompt</li>
            </ol>
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Using NVM</p>
            <CodeBlock
              language="bash"
              code={`# Install latest LTS version
nvm install --lts

# Install a specific version
nvm install 20.10.0

# List installed versions
nvm list

# Switch to a specific version
nvm use 20.10.0

# Set default version
nvm alias default 20.10.0

# Verify current version
node --version`}
            />
          </div>
        </div>
      </LessonSection>

      <LessonSection id="verify" title="Verify Installation">
        <p className="text-muted-foreground mb-4">
          After installation, verify that Node.js and npm are working correctly:
        </p>

        <div className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-2">Check Versions</p>
            <CodeBlock
              language="bash"
              code={`node --version
npm --version`}
            />
            <p className="text-sm text-muted-foreground mt-2">
              Expected output: version numbers like <code>v20.10.0</code> and <code>10.2.3</code>
            </p>
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-2">Test Node.js</p>
            <p className="text-sm text-muted-foreground mb-2">
              Create a simple test file:
            </p>
            <CodeBlock
              language="javascript"
              code={`// test.js
console.log('Node.js is working!');
console.log('Node version:', process.version);`}
            />
            <p className="text-sm text-muted-foreground mt-2 mb-1">
              Run the file:
            </p>
            <CodeBlock
              language="bash"
              code={`node test.js`}
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-2">Test npm</p>
            <CodeBlock
              language="bash"
              code={`# Create a new directory
mkdir test-project
cd test-project

# Initialize a new npm project
npm init -y

# You should see a package.json file created`}
            />
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 p-4 rounded-md mt-4">
          <p className="text-sm font-semibold text-green-900 dark:text-green-300 mb-2">
            Success!
          </p>
          <p className="text-sm text-muted-foreground">
            Your Node.js environment is ready! You can now proceed to learn Node.js fundamentals and start building applications.
          </p>
          <Button
            onClick={() => router.push('/topic-7/fundamentals')}
            className="mt-3"
            size="sm"
          >
            Next: Node.js Fundamentals
          </Button>
        </div>
      </LessonSection>
    </LessonLayout>
  )
}
