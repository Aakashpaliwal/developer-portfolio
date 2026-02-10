"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 font-mono text-sm text-primary">
            05. What's Next?
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Get In Touch
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            {"I'm currently open to new opportunities. Whether you have a question, want to collaborate, or just want to say hi, my inbox is always open."}
          </p>
        </motion.div>

        <motion.a
          href="mailto:aakashpaliwal95@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 inline-flex items-center gap-2 rounded border border-primary px-8 py-4 font-mono text-sm text-primary transition-all hover:bg-primary/10"
        >
          Say Hello
          <Mail className="h-4 w-4" />
        </motion.a>

        {/* Contact details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6"
        >
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4 text-primary" />
            aakashpaliwal95@gmail.com
          </span>
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4 text-primary" />
            +91 8764049758
          </span>
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            Jhalawar, Rajasthan
          </span>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-3 text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-3 text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
