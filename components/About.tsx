"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-24 grainy-bg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto" />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 md:p-12 space-y-6"
          >
            <p className="text-xl text-foreground/90 leading-relaxed font-medium">
              Hey, I'm Datta.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Just a curious developer and lifelong student trying to build things that matter — mostly with AI, clean code, and a bit of stubborn optimism.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              When I'm not coding, you'll find me sketching or lost in a game.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Nothing fancy, just quietly working on ideas I hope might outlast me.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Let's make something worthwhile together ✦
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                { label: "Projects Completed", value: "20+" },
                { label: "Technologies", value: "15+" },
                { label: "Years Learning", value: "8" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center p-4 rounded-lg glass"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground/60 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

