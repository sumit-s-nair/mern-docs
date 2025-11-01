"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Highlight, themes } from "prism-react-renderer"

type Props = {
  code: string
  language?: "html" | "css" | "js" | "tsx" | string
  className?: string
  showLineNumbers?: boolean
}

export function CodeBlock({ code, language = "html", className, showLineNumbers = false }: Props) {
  const [copied, setCopied] = useState(false)
  const { theme } = useTheme()

  async function copy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    } catch {
      // no-op
    }
  }

  const prismTheme = theme === "dark" ? themes.vsDark : themes.github

  return (
    <div className={cn("relative rounded-md border bg-card overflow-hidden", className)}>
      <div className="flex items-center justify-between border-b px-3 py-2 bg-muted/50">
        <span className="text-xs uppercase tracking-wide text-muted-foreground font-medium">
          {language || "code"}
        </span>
        <Button 
          size="sm" 
          variant="outline" 
          onClick={copy} 
          aria-label="Copy code"
          className="h-7 px-2 text-xs"
        >
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>

      <div className="overflow-x-auto">
        <div className="p-3 text-sm leading-6 min-w-0">
                  <Highlight theme={prismTheme} code={code.trim()} language={(language as string) || "markup"}>
                    {({ className: cl, style, tokens, getLineProps, getTokenProps }) => (
              <pre 
                className={cn(cl, "font-mono text-sm min-w-max")} 
                style={{...style, background: 'transparent'}} 
                aria-label="Code sample"
              >
                {tokens.map((line, i) => {
                          const lineProps = getLineProps({ line, key: i })
                          return (
                            <div key={i} {...lineProps} className="flex">
                      {showLineNumbers && (
                        <span className="select-none pr-4 text-right text-xs text-muted-foreground w-8 flex-shrink-0">
                          {i + 1}
                        </span>
                      )}
                      <span className="flex-1 min-w-0">
                                {line.map((token, j) => {
                                  const tokenProps = getTokenProps({ token, key: j })
                                  return <span key={j} {...tokenProps} />
                                })}
                      </span>
                    </div>
                  )
                })}
              </pre>
            )}
          </Highlight>
        </div>
      </div>
    </div>
  )
}
