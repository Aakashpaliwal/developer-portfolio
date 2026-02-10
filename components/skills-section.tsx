"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "ReactJS",
      "Angular 6+",
      "Node.js",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "State & Data",
    skills: [
      "Redux",
      "Zustand",
      "Redux Thunk / Saga",
      "TanStack Query",
      "GraphQL",
    ],
  },
  {
    title: "UI & Styling",
    skills: [
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "ShadCN",
      "Responsive Design",
    ],
  },
  {
    title: "Testing & Quality",
    skills: [
      "Jest",
      "React Testing Library",
      "Unit Testing",
      "Code Reviews",
      "PR Reviews",
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      "Git / GitHub / Bitbucket",
      "Jira",
      "Confluence",
      "ClickUp",
      "Pivotal Tracker",
    ],
  },
  {
    title: "Leadership",
    skills: [
      "Team Leadership",
      "Mentoring",
      "Agile / Scrum",
      "Sprint Planning",
      "Cross-functional Collaboration",
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center gap-4"
        >
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            <span className="mr-2 font-mono text-xl text-primary">04.</span>
            Skills & Tools
          </h2>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants}>
              <h3 className="mb-4 font-mono text-sm font-semibold text-primary">
                {category.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-primary">{">"}</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-lg border border-border/50 bg-card p-8"
        >
          <h3 className="mb-6 font-mono text-sm font-semibold text-primary">
            Key Achievements
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Enhanced App Performance",
                desc: "Increased application load speed by 20% through effective optimization techniques.",
              },
              {
                title: "Improved Code Quality",
                desc: "Reduced code defects via implementation of rigorous review processes.",
              },
              {
                title: "Led Feature Delivery",
                desc: "Led a team to deliver enterprise-level features within six months.",
              },
              {
                title: "Mentored Engineers",
                desc: "Mentored junior developers, boosting team productivity and skill development.",
              },
            ].map((achievement) => (
              <div key={achievement.title} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {achievement.title}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {achievement.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
