"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Full-Stack Engineer",
    company: "The Aspen Project",
    location: "Remote",
    period: "Jan 2021 – Jan 2022",
    description: "Built and shipped a production-grade web platform from zero to deployed. Designed scalable database schemas ⋅ engineered clean REST APIs ⋅ wired React frontends ⋅ owned AWS deployments. Everything just worked. **Full-stack Engineer ownership, end to end.",
    technologies: ["React", "REST APIs", "AWS", "Database Design", "Full-Stack"],
  },
  {
    title: "Backend / Full-Stack Developer",
    company: "Electronic Service Delivery – Government of Telangana",
    location: "Hyderabad, India",
    period: "May – Jul 2019",
    description: "Single-handedly developed and delivered a public-facing grievance portal for the state IT department using Django + DRF. Tens of thousands of citizens used it. Still live.",
    technologies: ["Django", "Django REST Framework", "Python", "Backend", "Full-Stack"],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="relative py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan bg-clip-text text-transparent">
              Experience & Selected Work
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple via-neon-blue to-neon-cyan hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative glass rounded-xl p-6 md:p-8 ml-0 md:ml-16 hover:glass-strong transition-all duration-300 group"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-12 top-8 w-4 h-4 rounded-full bg-neon-purple neon-glow hidden md:block group-hover:scale-150 transition-transform" />

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-neon-cyan mb-2">
                        <Briefcase size={16} />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-4 text-foreground/60 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-foreground/80 mb-4 leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium glass text-neon-cyan"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 glass rounded-xl p-6 md:p-8 space-y-8"
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Education
            </h3>
            
            <div className="space-y-6">
              {/* M.S. */}
              <div className="space-y-2">
                <p className="text-xl font-semibold text-foreground">M.S. Electrical & Computer Engineering</p>
                <p className="text-foreground/60">Stony Brook University • Aug 2023 – Present</p>
                <p className="text-foreground/80 mt-2 flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded text-sm glass">Deep Learning</span>
                  <span className="px-2 py-1 rounded text-sm glass">Network Security</span>
                  <span className="px-2 py-1 rounded text-sm glass">Distributed ML</span>
                  <span className="px-2 py-1 rounded text-sm glass">Cyber-Physical Systems</span>
                  <span className="px-2 py-1 rounded text-sm glass">Wireless Networks</span>
                </p>
              </div>

              {/* B.Tech */}
              <div className="space-y-2 pt-4 border-t border-foreground/10">
                <p className="text-xl font-semibold text-foreground">B.Tech Computer Science</p>
                <p className="text-foreground/60">Vellore Institute of Technology • 2017 – 2021</p>
                <p className="text-foreground/80 mt-2 flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded text-sm glass">DSA</span>
                  <span className="px-2 py-1 rounded text-sm glass">OOP</span>
                  <span className="px-2 py-1 rounded text-sm glass">OS</span>
                  <span className="px-2 py-1 rounded text-sm glass">DBMS</span>
                  <span className="px-2 py-1 rounded text-sm glass">AI</span>
                  <span className="px-2 py-1 rounded text-sm glass">NLP</span>
                  <span className="px-2 py-1 rounded text-sm glass">Blockchain</span>
                  <span className="px-2 py-1 rounded text-sm glass">IoT</span>
                  <span className="px-2 py-1 rounded text-sm glass">HCI</span>
                  <span className="px-2 py-1 rounded text-sm glass">SE</span>
                  <span className="px-2 py-1 rounded text-sm glass">CAO</span>
                  <span className="px-2 py-1 rounded text-sm glass">TOC</span>
                  <span className="px-2 py-1 rounded text-sm glass">Compiler</span>
                  <span className="px-2 py-1 rounded text-sm glass">DLD</span>
                  <span className="px-2 py-1 rounded text-sm glass">MP</span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

