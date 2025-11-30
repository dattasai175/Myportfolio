"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Code,
  Database,
  Cloud,
  Brain,
  FlaskConical,
  GitBranch,
  Container,
  FileCode,
  BarChart3,
  Layers,
  Zap,
} from "lucide-react"

const techCategories = {
  Frontend: {
    icon: Code,
    color: "from-neon-purple to-purple-600",
    technologies: [
      { name: "React", icon: Code, proficiency: 90 },
      { name: "Next.js", icon: Code, proficiency: 85 },
      { name: "Gatsby", icon: Code, proficiency: 75 },
    ],
  },
  Backend: {
    icon: FlaskConical,
    color: "from-neon-blue to-blue-600",
    technologies: [
      { name: "Django", icon: FlaskConical, proficiency: 85 },
      { name: "Python", icon: Code, proficiency: 90 },
      { name: "FastAPI", icon: Zap, proficiency: 80 },
    ],
  },
  "AI/ML": {
    icon: Brain,
    color: "from-neon-cyan to-cyan-600",
    technologies: [
      { name: "TensorFlow", icon: Brain, proficiency: 85 },
      { name: "PyTorch", icon: Brain, proficiency: 80 },
      { name: "scikit-learn", icon: Brain, proficiency: 88 },
      { name: "Keras", icon: Brain, proficiency: 82 },
      { name: "Hugging Face", icon: Brain, proficiency: 75 },
    ],
  },
  "Data Tools": {
    icon: BarChart3,
    color: "from-pink-500 to-rose-600",
    technologies: [
      { name: "Pandas", icon: Database, proficiency: 92 },
      { name: "NumPy", icon: Database, proficiency: 90 },
      { name: "Matplotlib", icon: BarChart3, proficiency: 85 },
      { name: "Seaborn", icon: BarChart3, proficiency: 87 },
      { name: "Jupyter", icon: FileCode, proficiency: 95 },
      { name: "Streamlit", icon: Code, proficiency: 80 },
    ],
  },
  DevOps: {
    icon: Cloud,
    color: "from-orange-500 to-amber-600",
    technologies: [
      { name: "AWS", icon: Cloud, proficiency: 80 },
      { name: "Docker", icon: Container, proficiency: 85 },
      { name: "Git", icon: GitBranch, proficiency: 90 },
      { name: "SQL", icon: Database, proficiency: 88 },
    ],
  },
}

const proficiencyLabels: Record<number, string> = {
  95: "Expert",
  90: "Expert",
  85: "Advanced",
  80: "Advanced",
  75: "Intermediate",
}

export default function Technologies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="technologies" className="relative py-24 grainy-bg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan bg-clip-text text-transparent">
              Technologies & Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto mb-4" />
            <p className="text-foreground/60 max-w-2xl mx-auto">
              A comprehensive toolkit for building intelligent solutions and data-driven applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {Object.entries(techCategories).map(([category, data], categoryIndex) => {
              const CategoryIcon = data.icon
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                  className="glass rounded-2xl p-6 hover:glass-strong transition-all duration-300 group"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${data.color} mb-4`}>
                    <CategoryIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{category}</h3>
                  <div className="space-y-4">
                    {data.technologies.map((tech, techIndex) => {
                      const TechIcon = tech.icon
                      const proficiencyLabel = proficiencyLabels[tech.proficiency] || "Intermediate"
                      return (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                          className="group/item"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <TechIcon className="w-4 h-4 text-neon-cyan" />
                              <span className="text-sm font-medium text-foreground">{tech.name}</span>
                            </div>
                            <span className="text-xs text-foreground/60">{proficiencyLabel}</span>
                          </div>
                          <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${data.color} rounded-full`}
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${tech.proficiency}%` } : { width: 0 }}
                              transition={{
                                delay: categoryIndex * 0.1 + techIndex * 0.05 + 0.3,
                                duration: 1,
                                type: "spring",
                                stiffness: 100,
                              }}
                            />
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Top Skills Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="glass rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Top Skills
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "React", value: 90, color: "from-neon-purple to-purple-600" },
                { name: "Python", value: 90, color: "from-neon-blue to-blue-600" },
                { name: "TensorFlow", value: 85, color: "from-neon-cyan to-cyan-600" },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 200 }}
                  className="text-center"
                >
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <svg className="transform -rotate-90 w-32 h-32">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-background/20"
                      />
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                      <motion.circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke={`url(#gradient-${index})`}
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 56}`}
                        initial={{ strokeDashoffset: 2 * Math.PI * 56 }}
                        animate={
                          isInView
                            ? { strokeDashoffset: 2 * Math.PI * 56 * (1 - skill.value / 100) }
                            : { strokeDashoffset: 2 * Math.PI * 56 }
                        }
                        transition={{ delay: 0.8 + index * 0.1, duration: 1.5, type: "spring" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
                        {skill.value}%
                      </span>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">{skill.name}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

