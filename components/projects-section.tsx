"use client"

import { motion } from "framer-motion"
import { ExternalLink, Folder } from "lucide-react"

const featuredProjects = [
  {
    title: "Asset Panda",
    description:
      "A leading, highly configurable asset management and tracking platform used by enterprise clients like Red Bull and Mara to manage millions of assets. Features comprehensive modules for Asset Tracking, Maintenance Management, and Inventory Management with barcode scanning and automated audit trails.",
    tags: ["React", "TypeScript", "Zustand", "GraphQL", "Jest/RTL"],
    role: "Frontend Lead",
  },
  {
    title: "everAg Logistics Suite",
    description:
      "A unified dry-bulk freight ecosystem consisting of three primary products: onRamp for carrier onboarding and compliance, Interchange for a digital freight marketplace, and Roger Hauls for real-time shipment tracking. Streamlines supply chain by digitizing paper-based workflows and providing live fleet visibility.",
    tags: ["React", "Google Maps API", "JavaScript", "REST APIs"],
    role: "Senior Software Engineer",
  },
  {
    title: "Chronicle Cloud",
    description:
      "A versatile app enhancing student success, supporting note-taking, team teaching, assessments, and data management. Developed by teachers, it embraces best practices like formative assessment, effective feedback, and collaboration for all subjects.",
    tags: ["React", "Node.js", "Jest", "RTL"],
    role: "Front End Developer",
  },
]

const otherProjects = [
  {
    title: "TCP E-Commerce",
    description: "Full lifecycle e-commerce development for a prestigious client, from development to maintenance.",
    tags: ["React", "Node.js", "E-Commerce"],
  },
  {
    title: "Ananda Platform",
    description: "E-commerce project covering the full project lifecycle with dynamic, innovative solutions.",
    tags: ["React", "Angular", "Node.js"],
  },
  {
    title: "PaisaHub",
    description: "Led e-commerce project for fintech client, enhancing user engagement and managing UI/UX overhaul.",
    tags: ["jQuery", "ReactJS", "Bootstrap"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center gap-4"
        >
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            <span className="mr-2 font-mono text-xl text-primary">03.</span>
            Things I've Built
          </h2>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        {/* Featured Projects */}
        <div className="flex flex-col gap-24">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col gap-4 ${
                i % 2 === 0 ? "items-start" : "items-start md:items-end"
              }`}
            >
              <p className="font-mono text-xs text-primary">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold text-foreground">
                {project.title}
              </h3>
              <div
                className={`w-full rounded-lg border border-border/50 bg-card p-6 shadow-lg md:max-w-lg ${
                  i % 2 === 0 ? "" : "md:text-right"
                }`}
              >
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                {"Role: " + project.role}
              </p>
              <div
                className={`flex flex-wrap gap-2 ${
                  i % 2 === 0 ? "" : "md:justify-end"
                }`}
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Notable Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <h3 className="text-xl font-bold text-foreground">
            Other Noteworthy Projects
          </h3>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group flex flex-col rounded-lg border border-border/50 bg-card p-6 transition-all hover:border-primary/30"
            >
              <div className="mb-6 flex items-center justify-between">
                <Folder className="h-10 w-10 text-primary" />
                <ExternalLink className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <h4 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                {project.title}
              </h4>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
