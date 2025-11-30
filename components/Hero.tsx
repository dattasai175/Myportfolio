"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Particles from "@/components/Particles"
import NeuralScene from "@/components/NeuralScene"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grainy-bg"
    >
      <Particles />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[80vh] py-8 md:py-0">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-neon-cyan font-mono text-sm">Hello, I'm</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              <span className="block transition-all duration-300">
                Datta Katikaneni
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-foreground/80"
            >
              Software Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-foreground/60 max-w-md"
            >
              Building things that matter with AI, clean code, and a bit of stubborn optimism.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="neon" size="lg" asChild>
                <a href="#projects">
                  View Projects
                </a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2" size={18} />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Tech Constellation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[600px] flex items-center justify-center w-full overflow-visible"
          >
            <NeuralScene />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-foreground/60 hover:text-neon-cyan transition-colors">
          <span className="text-sm">Scroll</span>
          <ArrowDown size={24} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}

