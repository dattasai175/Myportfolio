"use client"

import { useRef, useState, useEffect } from "react"

const techIcons = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#000000" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Python", color: "#3776AB" },
  { name: "Django", color: "#092E20" },
  { name: "PyTorch", color: "#EE4C2C" },
  { name: "TensorFlow", color: "#FF6F00" },
  { name: "LangChain", color: "#1C3C3C" },
  { name: "Ollama", color: "#FFFFFF" },
  { name: "Llama", color: "#FF6B35" },
  { name: "FastAPI", color: "#009688" },
  { name: "Node.js", color: "#339933" },
  { name: "Redis", color: "#DC382D" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Docker", color: "#2496ED" },
  { name: "Kubernetes", color: "#326CE5" },
  { name: "Vercel", color: "#000000" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "Supabase", color: "#3ECF8E" },
  { name: "Prisma", color: "#2D3748" },
  { name: "tRPC", color: "#2596BE" },
  { name: "Three.js", color: "#000000" },
  { name: "Framer Motion", color: "#0055FF" },
  { name: "GitHub", color: "#181717" },
]

// Enhanced 2D Neural Network (Premium implementation)
function NeuralBrain2D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [pulseTime, setPulseTime] = useState(0)
  const [pulsing, setPulsing] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Pulse every 4-6 seconds
    const interval = setInterval(() => {
      setPulseTime(Date.now())
      setPulsing(true)
      setTimeout(() => setPulsing(false), 500)
    }, 4000 + Math.random() * 2000)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 70% 70%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
          radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%),
          #000000
        `,
        transform: `perspective(1000px) rotateX(${mousePos.y * 3}deg) rotateY(${mousePos.x * 3}deg)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {/* Neural network particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 200 }).map((_, i) => {
          const angle = Math.random() * Math.PI * 2
          const radius = Math.random() * 200
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius

          return (
            <div
              key={i}
              className="absolute rounded-full bg-neon-purple/40"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                animation: `float ${3 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                boxShadow: pulsing ? `0 0 10px rgba(168, 85, 247, 0.8)` : `0 0 3px rgba(168, 85, 247, 0.3)`,
                transition: "box-shadow 0.3s",
              }}
            />
          )
        })}
      </div>

      {/* Synapse connections */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
        {techIcons.slice(0, 12).map((_, i) => {
          const angle1 = (i / 12) * 360
          const angle2 = ((i + 1) / 12) * 360
          const x1 = 50 + Math.cos((angle1 * Math.PI) / 180) * 20
          const y1 = 50 + Math.sin((angle1 * Math.PI) / 180) * 20
          const x2 = 50 + Math.cos((angle2 * Math.PI) / 180) * 20
          const y2 = 50 + Math.sin((angle2 * Math.PI) / 180) * 20

          return (
            <line
              key={i}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="#06b6d4"
              strokeWidth={pulsing ? "2" : "1"}
              opacity={pulsing ? 0.6 : 0.2}
              style={{ transition: "all 0.3s" }}
            />
          )
        })}
      </svg>

      {/* Tech icons as neural nodes */}
      <div className="absolute inset-0">
        {techIcons.map((icon, i) => {
          const angle = (i / techIcons.length) * 360
          const radius = 150 + Math.sin(Date.now() * 0.001 + i) * 20
          const x = Math.cos((angle * Math.PI) / 180) * radius
          const y = Math.sin((angle * Math.PI) / 180) * radius

          return (
            <div
              key={icon.name}
              className="absolute w-14 h-14 rounded-xl glass flex items-center justify-center font-bold text-xs transition-all duration-300"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
                background: pulsing
                  ? `linear-gradient(135deg, ${icon.color}80, ${icon.color}40)`
                  : `linear-gradient(135deg, ${icon.color}50, ${icon.color}20)`,
                border: `2px solid ${icon.color}80`,
                boxShadow: pulsing
                  ? `0 0 30px ${icon.color}60, inset 0 0 20px ${icon.color}40`
                  : `0 0 15px ${icon.color}40, inset 0 0 10px ${icon.color}20`,
                color: icon.color,
                animation: `orbit ${20 + i * 0.5}s linear infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translate(-50%, -50%) scale(1.6)"
                e.currentTarget.style.filter = "brightness(1.8) drop-shadow(0 0 20px currentColor)"
                e.currentTarget.style.zIndex = "10"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translate(-50%, -50%) scale(1)"
                e.currentTarget.style.filter = "brightness(1) drop-shadow(0 0 0px currentColor)"
                e.currentTarget.style.zIndex = "1"
              }}
            >
              {icon.name.charAt(0)}
            </div>
          )
        })}
      </div>

      {/* Center DK monogram (visible on pulse) */}
      <div
        className="absolute text-5xl md:text-7xl font-bold text-white/30 transition-opacity duration-300"
        style={{
          opacity: pulsing ? 0.8 : 0,
          textShadow: pulsing
            ? "0 0 30px rgba(168, 85, 247, 0.8), 0 0 60px rgba(6, 182, 212, 0.6)"
            : "none",
        }}
      >
        DK
      </div>

      {/* Film grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />
    </div>
  )
}

// Main Component
export default function NeuralBrain() {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="relative h-[500px] w-full flex items-center justify-center">
        <div className="text-6xl font-bold text-white/20">DK</div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="relative h-[500px] w-full">
      <NeuralBrain2D />
    </div>
  )
}
