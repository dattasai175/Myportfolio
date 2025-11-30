"use client"

import { useRef, useState, useEffect } from "react"

const techLogos = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#000000" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "Python", color: "#3776AB" },
  { name: "Django", color: "#092E20" },
  { name: "FastAPI", color: "#009688" },
  { name: "Node.js", color: "#339933" },
  { name: "TensorFlow", color: "#FF6F00" },
  { name: "PyTorch", color: "#EE4C2C" },
  { name: "LangChain", color: "#1C3C3C" },
  { name: "Ollama", color: "#FFFFFF" },
  { name: "Llama", color: "#FF6B35" },
  { name: "Docker", color: "#2496ED" },
  { name: "Kubernetes", color: "#326CE5" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Redis", color: "#DC382D" },
  { name: "Supabase", color: "#3ECF8E" },
  { name: "Vercel", color: "#000000" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "Three.js", color: "#000000" },
  { name: "Framer Motion", color: "#0055FF" },
]

// Enhanced 2D Neural Network (Premium implementation)
function NeuralNetwork2D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [pulseTime, setPulseTime] = useState(0)
  const [pulsing, setPulsing] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Thought pulse every 6 seconds
    const interval = setInterval(() => {
      setPulseTime(Date.now())
      setPulsing(true)
      setTimeout(() => setPulsing(false), 1000)
    }, 6000)

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
        background: "radial-gradient(circle at center, rgba(0, 0, 0, 0.8) 0%, #000000 100%)",
        transform: `perspective(1000px) rotateX(${mousePos.y * 2}deg) rotateY(${mousePos.x * 2}deg)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {/* Background neural particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 300 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-neon-purple/30"
            style={{
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 6}s`,
              boxShadow: pulsing ? `0 0 8px rgba(168, 85, 247, 0.6)` : `0 0 2px rgba(168, 85, 247, 0.2)`,
              transition: "box-shadow 0.3s",
            }}
          />
        ))}
      </div>

      {/* Dynamic connection lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
        {techLogos.slice(0, 12).map((_, i) => {
          const angle1 = (i / 12) * 360
          const angle2 = ((i + 1) / 12) * 360
          const x1 = 50 + Math.cos((angle1 * Math.PI) / 180) * 25
          const y1 = 50 + Math.sin((angle1 * Math.PI) / 180) * 25
          const x2 = 50 + Math.cos((angle2 * Math.PI) / 180) * 25
          const y2 = 50 + Math.sin((angle2 * Math.PI) / 180) * 25

          return (
            <line
              key={i}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke={pulsing ? "#06b6d4" : "#a855f7"}
              strokeWidth={pulsing ? "2" : "1"}
              opacity={pulsing ? 0.8 : hoveredIndex === i ? 0.6 : 0.2}
              style={{ transition: "all 0.3s" }}
            />
          )
        })}
      </svg>

      {/* Tech logo nodes as glass orbs */}
      <div className="absolute inset-0">
        {techLogos.map((logo, i) => {
          const angle = (i / techLogos.length) * 360
          const radius = 160 + Math.sin(Date.now() * 0.0005 + i) * 15
          const x = Math.cos((angle * Math.PI) / 180) * radius
          const y = Math.sin((angle * Math.PI) / 180) * radius

          return (
            <div
              key={logo.name}
              className="absolute w-16 h-16 rounded-full glass flex items-center justify-center font-bold text-xs transition-all duration-300"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: hoveredIndex === i ? "translate(-50%, -50%) scale(1.4)" : "translate(-50%, -50%) scale(1)",
                background: pulsing
                  ? `radial-gradient(circle, ${logo.color}60, ${logo.color}20)`
                  : `radial-gradient(circle, ${logo.color}40, ${logo.color}10)`,
                border: `2px solid ${logo.color}80`,
                boxShadow: pulsing
                  ? `0 0 40px ${logo.color}80, inset 0 0 30px ${logo.color}40, 0 0 60px ${logo.color}40`
                  : hoveredIndex === i
                  ? `0 0 30px ${logo.color}60, inset 0 0 20px ${logo.color}30, 0 0 50px ${logo.color}50`
                  : `0 0 20px ${logo.color}40, inset 0 0 15px ${logo.color}20`,
                color: logo.color,
                backdropFilter: "blur(20px)",
                animation: `orbit ${25 + i * 0.5}s linear infinite`,
                animationDelay: `${i * 0.1}s`,
                filter: hoveredIndex === i 
                  ? "brightness(1.5) drop-shadow(0 0 25px currentColor)" 
                  : "brightness(1)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="w-full h-full rounded-full flex items-center justify-center"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${logo.color}40, transparent 70%)`,
                }}
              >
                {logo.name.charAt(0)}
              </div>
            </div>
          )
        })}
      </div>

      {/* Center DK monogram (visible during pulse) */}
      <div
        className="absolute text-6xl md:text-8xl font-bold text-white/20 transition-all duration-500"
        style={{
          opacity: pulsing ? 0.6 : 0,
          textShadow: pulsing
            ? "0 0 40px rgba(168, 85, 247, 0.8), 0 0 80px rgba(6, 182, 212, 0.6), 0 0 120px rgba(168, 85, 247, 0.4)"
            : "none",
          transform: pulsing ? "scale(1.1)" : "scale(1)",
        }}
      >
        DK
      </div>

      {/* Film grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />
    </div>
  )
}

// Main Component
export default function NeuralHero() {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="relative h-[500px] w-full flex items-center justify-center">
        <div className="text-6xl font-bold text-white/10">DK</div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="relative h-[500px] w-full">
      <NeuralNetwork2D />
    </div>
  )
}
