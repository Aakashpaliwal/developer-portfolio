"use client"

import { Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="px-6 py-8">
      {/* Side social links - visible on larger screens */}
      <div className="hidden lg:fixed lg:bottom-0 lg:left-10 lg:flex lg:flex-col lg:items-center lg:gap-6">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <div className="h-24 w-px bg-muted-foreground/40" />
      </div>

      {/* Side email - visible on larger screens */}
      <div className="hidden lg:fixed lg:right-10 lg:bottom-0 lg:flex lg:flex-col lg:items-center lg:gap-6">
        <a
          href="mailto:aakashpaliwal95@gmail.com"
          className="text-xs tracking-widest text-muted-foreground transition-colors hover:text-primary"
          style={{ writingMode: "vertical-rl" }}
        >
          aakashpaliwal95@gmail.com
        </a>
        <div className="h-24 w-px bg-muted-foreground/40" />
      </div>

      {/* Bottom footer */}
      <div className="mx-auto max-w-4xl text-center">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
        >
          <p>Designed & Built by Akash Paliwal</p>
        </a>
      </div>
    </footer>
  )
}
