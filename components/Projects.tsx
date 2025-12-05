"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "X Clone",
    description: "A full-featured Twitter/X clone built with modern web technologies, featuring real-time updates, user authentication, and a responsive design that replicates the core functionality of the popular social media platform.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    liveUrl: "https://vercel.com/dattasai175s-projects/x-clone/12hwaDYxNMbGkge5RpJLLu7g9N3m",
    githubUrl: "https://github.com/dattasai175/x-clone",
    category: "Full Stack",
  },
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      const currentScroll = scrollRef.current.scrollLeft
      const targetScroll = direction === "left" 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount
      
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="projects" className="relative py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto mb-4" />
            <p className="text-foreground/60 max-w-2xl mx-auto">
              A collection of innovative projects showcasing expertise in AI/ML, data science, and full-stack development
            </p>
          </div>

          <div className="relative">
            <div
              ref={scrollRef}
              data-horizontal-scroll
              data-lenis-prevent
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-6 snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              onWheel={(e) => {
                const element = scrollRef.current
                if (!element) return
                
                // Check if horizontal scrolling is needed
                const isScrollable = element.scrollWidth > element.clientWidth
                const isAtStart = element.scrollLeft <= 0
                const isAtEnd = element.scrollLeft >= element.scrollWidth - element.clientWidth - 1
                
                // If horizontal scroll is possible and user is scrolling horizontally
                if (isScrollable && Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                  e.stopPropagation()
                  // Allow native horizontal scrolling
                } else if (isScrollable && !isAtStart && !isAtEnd && e.deltaY !== 0) {
                  // If in the middle of horizontal scroll area, prevent vertical scroll
                  e.stopPropagation()
                }
              }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex-shrink-0 w-[90vw] md:w-[500px] snap-center"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative h-[600px] perspective-1000">
                    <motion.div
                      className="relative w-full h-full preserve-3d transition-transform duration-700"
                      animate={{
                        rotateY: hoveredIndex === index ? 180 : 0,
                      }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Front of card */}
                      <div className="absolute inset-0 backface-hidden glass rounded-2xl overflow-hidden group">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-4 right-4">
                            <span className="px-3 py-1 rounded-full text-xs font-medium glass text-neon-cyan">
                              {project.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                          <h3 className="text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
                          <p className="text-foreground/70 mb-4 flex-grow">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.slice(0, 3).map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 rounded text-xs font-medium glass text-foreground/60"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className="px-2 py-1 rounded text-xs font-medium glass text-foreground/60">
                                +{project.technologies.length - 3}
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-neon-cyan font-medium mt-auto">
                            Hover to see more →
                          </div>
                        </div>
                      </div>

                      {/* Back of card */}
                      <div
                        className="absolute inset-0 backface-hidden glass-strong rounded-2xl p-6 flex flex-col"
                        style={{ transform: "rotateY(180deg)" }}
                      >
                        <h3 className="text-2xl font-bold mb-4 text-foreground">{project.title}</h3>
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-foreground/60 mb-3">Tech Stack:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 text-neon-cyan border border-neon-cyan/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-4 mt-auto">
                          <Button variant="neon" size="sm" className="flex-1" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2" size={16} />
                              Live Demo
                            </a>
                          </Button>
                          <Button variant="glass" size="sm" className="flex-1" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2" size={16} />
                              Code
                            </a>
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Scroll buttons */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full glass flex items-center justify-center hover:glass-strong transition-all z-10 hidden md:flex"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full glass flex items-center justify-center hover:glass-strong transition-all z-10 hidden md:flex"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>
      </div>

    </section>
  )
}

