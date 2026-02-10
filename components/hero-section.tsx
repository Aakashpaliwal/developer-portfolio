"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col justify-center px-6 pt-20"
    >
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto w-full max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-5 font-mono text-sm text-primary md:text-base"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Akash Paliwal.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-2 text-balance text-3xl font-bold leading-tight tracking-tight text-muted-foreground sm:text-4xl md:text-5xl lg:text-6xl"
        >
          I build things for the web.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {"I'm a solution-driven "}
          <span className="text-foreground">Senior Software Engineer</span>
          {" with over "}
          <span className="text-foreground">6+ years of experience</span>
          {" developing consumer-focused websites and web applications using React, TypeScript, and JavaScript. Currently leading frontend development at "}
          <a
            href="#experience"
            className="text-primary transition-colors hover:text-primary/80"
          >
            Webkorps
          </a>
          {" for enterprise clients like Red Bull and Mara."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10 flex items-center gap-4"
        >
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded border border-primary px-7 py-4 font-mono text-sm text-primary transition-all hover:bg-primary/10"
          >
            View my experience
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="mailto:aakashpaliwal95@gmail.com"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            aakashpaliwal95@gmail.com
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground">Scroll</span>
          <div className="h-8 w-5 rounded-full border border-border/60 p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
