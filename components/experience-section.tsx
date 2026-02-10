"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const experiences = [
  {
    company: "Webkorps",
    role: "Senior Software Engineer",
    period: "Aug 2025 - Feb 2026",
    location: "Indore",
    bullets: [
      "Leading frontend development for Asset Panda modules using React, TypeScript, Zustand, and GraphQL, shipping features used by enterprise customers like Red Bull and Mara.",
      "Set frontend code quality standards, introduced component-level unit tests with Jest/RTL and reviewed PRs for engineers, improved defect leakage.",
      "Streamlined code review processes, ensuring adherence to standards and improving overall code quality.",
      "Mentored junior engineers, fostering skill development and promoting best coding practices.",
    ],
    tags: ["React", "TypeScript", "Zustand", "GraphQL", "Jest", "RTL"],
  },
  {
    company: "Jeavio",
    role: "Senior Software Engineer",
    period: "Aug 2024 - Jun 2025",
    location: "Vadodara (Remote)",
    bullets: [
      "Built and optimized enterprise-grade UIs across 3 logistics platforms - Roger, OnRamp, and Interchange - focused on shipment tracking, operations, and analytics.",
      "Integrated Google Maps API to display and update truck locations dynamically, improving route visibility and fleet tracking UX.",
      "Delivered new customer-facing features (filters, pagination, grid enhancements) with attention to UX, load performance, and testability.",
      "Contributed to POCs for optimizing initial app load and minimizing bundle size via component splitting and deferred loading.",
    ],
    tags: ["React", "Google Maps API", "JavaScript", "Git"],
  },
  {
    company: "Ilead Synapse",
    role: "Front End Developer",
    period: "Apr 2022 - Jun 2024",
    location: "Indore",
    bullets: [
      "Developed multiple e-commerce projects for prestigious clients like TCP, Chronicle Cloud, and Ananda, covering the full project lifecycle.",
      "Led sprint reviews and planning meetings to enhance team engagement and collaboration, aligning project goals with client expectations.",
      "Used React JS, Angular 6+, and Node JS to create dynamic, innovative solutions, ensuring quality through unit testing with Jest and RTL.",
      "Supervised and mentored team members to ensure compliance with procedures and foster professional development.",
    ],
    tags: ["React", "Angular", "Node.js", "Jest", "RTL"],
  },
  {
    company: "FSIARS",
    role: "Web Developer",
    period: "Apr 2018 - Mar 2022",
    location: "Pune",
    bullets: [
      "Enhanced user experience by implementing responsive web design and optimizing website performance using HTML, CSS, and JavaScript.",
      "Collaborated with UX/UI designers and backend developers to ensure seamless integration using jQuery, ReactJS, and Bootstrap.",
      "Boosted page load time by 30% through waterfall modal and CDN libraries to address memory leakages.",
      "Successfully led multiple e-commerce projects for clients such as QMS, IMS, and PaisaHub.",
    ],
    tags: ["React", "jQuery", "Bootstrap", "HTML/CSS", "JavaScript"],
  },
]

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center gap-4"
        >
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            <span className="mr-2 font-mono text-xl text-primary">02.</span>
            {"Where I've Worked"}
          </h2>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-0 md:flex-row md:gap-8"
        >
          {/* Tabs - vertical on desktop, horizontal scroll on mobile */}
          <div className="scrollbar-none mb-6 flex overflow-x-auto border-b border-border md:mb-0 md:flex-col md:border-b-0 md:border-l">
            {experiences.map((exp, i) => (
              <button
                key={exp.company}
                type="button"
                onClick={() => setActiveTab(i)}
                className={`relative shrink-0 px-5 py-3 text-left font-mono text-xs transition-all sm:text-sm ${
                  activeTab === i
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                }`}
              >
                {exp.company}
                {activeTab === i && (
                  <motion.div
                    layoutId="experienceTab"
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-primary md:top-0 md:bottom-auto md:h-full md:w-0.5"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="min-h-[320px] flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {experiences[activeTab].role}
                  <span className="text-primary">
                    {" @ " + experiences[activeTab].company}
                  </span>
                </h3>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {experiences[activeTab].period}
                  {" | "}
                  {experiences[activeTab].location}
                </p>

                <ul className="mt-6 flex flex-col gap-3">
                  {experiences[activeTab].bullets.map((bullet) => (
                    <li
                      key={bullet.slice(0, 30)}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {experiences[activeTab].tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
