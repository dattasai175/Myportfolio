"use client"

import { useRef, useState, useEffect } from "react"

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Django",
  "Python",
  "PyTorch",
  "TensorFlow",
  "LangChain",
  "Ollama",
  "Llama",
  "Redis",
  "PostgreSQL",
  "Docker",
  "Vercel",
  "Tailwind",
]

// Enhanced 2D CSS Version (Premium fallback)
function TechConstellation2D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
      style={{
        transform: `perspective(1000px) rotateX(${mousePos.y * 5}deg) rotateY(${mousePos.x * 5}deg)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {/* Center DATTA text with premium effects */}
      <div 
        className="absolute text-6xl md:text-8xl font-bold text-white/90"
        style={{
          textShadow: `
            0 0 20px rgba(168, 85, 247, 0.5),
            0 0 40px rgba(59, 130, 246, 0.3),
            0 0 60px rgba(6, 182, 212, 0.2)
          `,
          animation: "pulse 3s ease-in-out infinite",
        }}
      >
        DATTA
      </div>

      {/* Orbiting tech tags with enhanced animations */}
      <div className="absolute inset-0">
        {technologies.map((tech, i) => {
          const angle = (i / technologies.length) * 360
          const radius = 120
          const x = Math.cos((angle * Math.PI) / 180) * radius
          const y = Math.sin((angle * Math.PI) / 180) * radius
          const hue = (i * 24) % 360

          return (
            <div
              key={tech}
              className="tech-tag absolute glass rounded-full px-4 py-2 text-xs font-medium text-neon-cyan neon-glow-cyan"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
                animation: `orbit ${15 + i * 0.5}s linear infinite`,
                animationDelay: `${i * 0.1}s`,
                background: `linear-gradient(135deg, hsla(${hue}, 70%, 60%, 0.3), hsla(${(hue + 60) % 360}, 70%, 60%, 0.3))`,
                boxShadow: `
                  0 0 10px hsla(${hue}, 70%, 60%, 0.5),
                  0 0 20px hsla(${hue}, 70%, 60%, 0.3),
                  inset 0 0 10px hsla(${hue}, 70%, 60%, 0.2)
                `,
                backdropFilter: "blur(10px)",
                border: `1px solid hsla(${hue}, 70%, 60%, 0.5)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translate(-50%, -50%) scale(1.4)"
                e.currentTarget.style.zIndex = "10"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translate(-50%, -50%) scale(1)"
                e.currentTarget.style.zIndex = "1"
              }}
            >
              {tech}
            </div>
          )
        })}
      </div>

      {/* Enhanced background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-neon-purple/40 via-neon-cyan/40 to-neon-blue/40 blur-sm"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Radial gradient background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(6, 182, 212, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)
          `,
        }}
      />
    </div>
  )
}

// Main Component
export default function HeroVisual() {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="relative h-[500px] w-full flex items-center justify-center">
        <div className="text-6xl font-bold text-white/50">DATTA</div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="relative h-[500px] w-full">
      <TechConstellation2D />
    </div>
  )
}
