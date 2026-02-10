"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/50 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-mono text-sm font-bold tracking-tight text-primary transition-colors hover:text-primary/80"
        >
          {"<AP />"}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group flex items-center gap-1.5 text-xs tracking-wide text-muted-foreground transition-colors hover:text-primary"
              >
                <span className="font-mono text-primary">
                  {"0" + (i + 1) + "."}
                </span>
                <span>{link.label}</span>
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:aakashpaliwal95@gmail.com"
              className="rounded border border-primary px-4 py-1.5 font-mono text-xs text-primary transition-all hover:bg-primary/10"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border/50 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center gap-6 px-6 py-8">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex flex-col items-center gap-1"
                >
                  <span className="font-mono text-xs text-primary">
                    {"0" + (i + 1) + "."}
                  </span>
                  <span className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </span>
                </a>
              ))}
              <a
                href="mailto:aakashpaliwal95@gmail.com"
                className="mt-2 rounded border border-primary px-6 py-2 font-mono text-sm text-primary transition-all hover:bg-primary/10"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
