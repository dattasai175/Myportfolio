"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"

const techLogos = [
  // Tier-1 Core
  { name: "React", color: "#61DAFB", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", color: "#000000", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
  { name: "TypeScript", color: "#3178C6", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Python", color: "#3776AB", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Django", color: "#092E20", icon: "https://cdn.simpleicons.org/django/092E20" },
  { name: "Tailwind CSS", color: "#06B6D4", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Vercel", color: "#000000", icon: "https://cdn.simpleicons.org/vercel/000000" },
  { name: "Docker", color: "#2496ED", icon: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Kubernetes", color: "#326CE5", icon: "https://cdn.simpleicons.org/kubernetes/326CE5" },
  { name: "GitHub", color: "#181717", icon: "https://cdn.simpleicons.org/github/181717" },
  { name: "Git", color: "#F05032", icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "Node.js", color: "#339933", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "TensorFlow", color: "#FF6F00", icon: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
  { name: "PyTorch", color: "#EE4C2C", icon: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
  { name: "LangChain", color: "#1C3C3C", icon: "https://cdn.simpleicons.org/langchain/1C3C3C" },
  
  // Tier-2 Strong Logos
  { name: "Framer Motion", color: "#0055FF", icon: "https://cdn.simpleicons.org/framermotion/0055FF" },
  { name: "Three.js", color: "#000000", icon: "https://cdn.simpleicons.org/threedotjs/000000" },
  { name: "Supabase", color: "#3ECF8E", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
  { name: "Prisma", color: "#2D3748", icon: "https://cdn.simpleicons.org/prisma/2D3748" },
  { name: "tRPC", color: "#2596BE", icon: "https://cdn.simpleicons.org/trpc/2596BE" },
  { name: "Redis", color: "#DC382D", icon: "https://cdn.simpleicons.org/redis/DC382D" },
  { name: "PostgreSQL", color: "#336791", icon: "https://cdn.simpleicons.org/postgresql/336791" },
  { name: "FastAPI", color: "#009688", icon: "https://cdn.simpleicons.org/fastapi/009688" },
  { name: "Firebase", color: "#FFCA28", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
  { name: "Shopify", color: "#96BF48", icon: "https://cdn.simpleicons.org/shopify/96BF48" },
  { name: "Svelte", color: "#FF3E00", icon: "https://cdn.simpleicons.org/svelte/FF3E00" },
  { name: "Astro", color: "#FF5D01", icon: "https://cdn.simpleicons.org/astro/FF5D01" },
  { name: "Vite", color: "#646CFF", icon: "https://cdn.simpleicons.org/vite/646CFF" },
  { name: "Bun", color: "#000000", icon: "https://cdn.simpleicons.org/bun/000000" },
  { name: "Turborepo", color: "#EF4444", icon: "https://cdn.simpleicons.org/turborepo/EF4444" },
  
  // Tier-3 2025 Hype
  { name: "Ollama", color: "#FFFFFF", icon: "https://cdn.simpleicons.org/ollama/FFFFFF" },
  { name: "Stripe", color: "#635BFF", icon: "https://cdn.simpleicons.org/stripe/635BFF" },
  { name: "Cloudflare", color: "#F38020", icon: "https://cdn.simpleicons.org/cloudflare/F38020" },
  { name: "Render", color: "#46E3B7", icon: "https://cdn.simpleicons.org/render/46E3B7" },
  { name: "Expo", color: "#000020", icon: "https://cdn.simpleicons.org/expo/000020" },
  { name: "Figma", color: "#F24E1E", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "Notion", color: "#000000", icon: "https://cdn.simpleicons.org/notion/000000" },
  
  // Bonus Ultra-Clean
  { name: "TanStack Query", color: "#FF4154", icon: "https://cdn.simpleicons.org/reactquery/FF4154" },
  { name: "Playwright", color: "#2EAD33", icon: "https://cdn.simpleicons.org/playwright/2EAD33" },
  { name: "Jest", color: "#C21325", icon: "https://cdn.simpleicons.org/jest/C21325" },
  { name: "Vitest", color: "#6E9F18", icon: "https://cdn.simpleicons.org/vitest/6E9F18" },
  { name: "ESLint", color: "#4B32C3", icon: "https://cdn.simpleicons.org/eslint/4B32C3" },
  { name: "Prettier", color: "#F7B93E", icon: "https://cdn.simpleicons.org/prettier/F7B93E" },
]

// Cyberpunk Neural Network Scene
function CyberpunkNeuralNetwork() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [surgeTime, setSurgeTime] = useState(0)
  const [surging, setSurging] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [failedIcons, setFailedIcons] = useState<Set<number>>(new Set())
  const [scale, setScale] = useState(1)
  
  // Filter out failed icons and create a clean list
  const visibleLogos = techLogos.filter((_, i) => !failedIcons.has(i))
  
  // Debug: Log visible logos count
  useEffect(() => {
    if (visibleLogos.length === 0) {
      console.warn("No visible logos found!")
    }
  }, [visibleLogos.length])

  useEffect(() => {
    let rafId: number
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2
    }

    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) {
        setScale(0.6)
      } else if (width < 768) {
        setScale(0.75)
      } else if (width < 1024) {
        setScale(0.9)
      } else {
        setScale(1)
      }
    }

    const updateMousePos = () => {
      setMousePos({ x: mouseX, y: mouseY })
      rafId = requestAnimationFrame(updateMousePos)
    }

    handleResize() // Set initial scale
    rafId = requestAnimationFrame(updateMousePos)
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("resize", handleResize, { passive: true })

    // Data surge every 4 seconds
    const interval = setInterval(() => {
      setSurgeTime(Date.now())
      setSurging(true)
      setTimeout(() => setSurging(false), 800)
    }, 4000)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      clearInterval(interval)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center"
      style={{
        transform: `perspective(1000px) rotateX(${mousePos.y * 0.3}deg) rotateY(${mousePos.x * 0.3}deg) scale(${scale})`,
        willChange: "transform",
        background: "transparent",
        overflow: "visible",
        minHeight: "300px",
        transition: "transform 0.3s ease-out",
      }}
    >
      {/* Subtle background particles - minimal to blend with page */}
      <div className="absolute inset-0">
        {Array.from({ length: 80 }).map((_, i) => {
          const delay = Math.random() * 4
          const duration = 5 + Math.random() * 3
          return (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 0.8 + 0.3}px`,
                height: `${Math.random() * 0.8 + 0.3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: surging ? "rgba(6, 182, 212, 0.4)" : "rgba(168, 85, 247, 0.15)",
                boxShadow: surging
                  ? `0 0 4px rgba(6, 182, 212, 0.5)`
                  : `0 0 1px rgba(168, 85, 247, 0.2)`,
                animation: `float ${duration}s ease-in-out infinite`,
                animationDelay: `${delay}s`,
                willChange: surging ? "box-shadow, background" : "auto",
                transition: "box-shadow 0.15s ease-out, background 0.15s ease-out",
              }}
            />
          )
        })}
      </div>


      {/* Hexagonal logo panels with free-floating animations */}
      <div className="absolute inset-0" style={{ overflow: "visible" }}>
        {visibleLogos.map((logo, i) => {
          const duration = 20
          const totalIcons = Math.max(visibleLogos.length, 1)
          // Calculate delay to spread icons along the path (negative to start at different points)
          const delay = -(i / totalIcons) * duration
          
          // Calculate initial position based on delay progress
          const progress = (i / totalIcons) % 1
          // Map progress to infinity path using parametric equations
          const t = progress * Math.PI * 2
          // Infinity path: x = a*sin(t), y = a*sin(t)*cos(t) / (1 + sin²(t))
          // Path size matches the keyframes (220px)
          const a = 220 // Matches the infinityPath keyframes
          const x = a * Math.sin(t) / (1 + Math.pow(Math.sin(t), 2))
          const y = (a * Math.sin(t) * Math.cos(t)) / (1 + Math.pow(Math.sin(t), 2))
          const rotation = (progress * 360) % 360
          
          // Map back to original index for hover tracking
          const originalIndex = techLogos.findIndex((l) => l.name === logo.name)
          
          return (
            <div
              key={`${logo.name}-${i}`}
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
                zIndex: hoveredIndex === originalIndex ? 20 : 1,
              }}
              onMouseEnter={() => setHoveredIndex(originalIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                style={{
                  animation: `infinityPath ${duration}s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
                  animationDelay: `${delay}s`,
                  animationFillMode: "both",
                  willChange: "transform",
                  opacity: 1,
                  transform: `translate(-50%, -50%) translateX(${x}px) translateY(${y}px) rotate(${rotation}deg) translateZ(0)`,
                  backfaceVisibility: "hidden",
                }}
              >
              {/* Hexagon container - responsive sizing */}
              <div
                className="relative flex items-center justify-center transition-all duration-200"
                style={{
                  width: hoveredIndex === originalIndex ? "clamp(28px, 5vw, 40px)" : "clamp(24px, 4.5vw, 36px)",
                  height: hoveredIndex === originalIndex ? "clamp(28px, 5vw, 40px)" : "clamp(24px, 4.5vw, 36px)",
                  clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
                  background: surging
                    ? `linear-gradient(135deg, ${logo.color}30, ${logo.color}10)`
                    : `linear-gradient(135deg, ${logo.color}20, ${logo.color}05)`,
                  border: `1.5px solid ${hoveredIndex === originalIndex ? logo.color : surging ? "#00ffff" : logo.color}50`,
                  boxShadow: surging
                    ? `0 0 20px ${logo.color}60, inset 0 0 15px ${logo.color}30, 0 0 30px #00ffff30`
                    : hoveredIndex === originalIndex
                    ? `0 0 18px ${logo.color}60, inset 0 0 12px ${logo.color}25, 0 0 25px ${logo.color}40`
                    : `0 0 10px ${logo.color}40, inset 0 0 8px ${logo.color}15`,
                  backdropFilter: "blur(8px)",
                  transform: hoveredIndex === originalIndex ? "scale(1.15) rotate(5deg)" : "scale(1)",
                  filter: hoveredIndex === originalIndex
                    ? "brightness(1.3) drop-shadow(0 0 20px currentColor)"
                    : surging
                    ? "brightness(1.2)"
                    : "brightness(1)",
                  zIndex: hoveredIndex === originalIndex ? 10 : 1,
                  transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {/* Scanline overlay */}
                {surging && (
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6, 182, 212, 0.1) 2px, rgba(6, 182, 212, 0.1) 4px)",
                      clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
                      animation: "scanline 0.15s linear infinite",
                      willChange: "transform",
                    }}
                  />
                )}

                        {/* Logo image - responsive sizing */}
                        <Image
                          src={logo.icon}
                          alt={logo.name}
                          width={hoveredIndex === originalIndex ? 22 : 20}
                          height={hoveredIndex === originalIndex ? 22 : 20}
                          className="relative z-10"
                          style={{
                            width: hoveredIndex === originalIndex ? "clamp(18px, 3vw, 22px)" : "clamp(16px, 2.5vw, 20px)",
                            height: hoveredIndex === originalIndex ? "clamp(18px, 3vw, 22px)" : "clamp(16px, 2.5vw, 20px)",
                            objectFit: "contain",
                            filter: surging ? "brightness(1.5) contrast(1.2)" : "brightness(1) contrast(1)",
                            transition: "filter 0.15s ease-out, width 0.15s ease-out, height 0.15s ease-out",
                            imageRendering: "crisp-edges",
                          }}
                          onError={() => {
                            setFailedIcons((prev) => new Set(prev).add(originalIndex))
                          }}
                          unoptimized
                        />
              </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Center DK monogram (glitchy cyberpunk font) - positioned at exact center */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 5,
          margin: 0,
          padding: 0,
        }}
      >
        <div
          style={{
            fontSize: "clamp(2rem, 5vw, 6rem)",
            fontWeight: "bold",
            opacity: surging ? 0.9 : 0.1,
            color: surging ? "#00ffff" : "#ffffff",
            textShadow: surging
              ? `
                0 0 20px #00ffff,
                0 0 40px #00ffff,
                0 0 60px #00ffff
              `
              : "0 0 10px rgba(255, 255, 255, 0.3)",
            fontFamily: "monospace",
            letterSpacing: "0.2em",
            animation: surging ? "glitch 0.4s steps(2) infinite" : "none",
            transition: "opacity 0.2s ease-out, color 0.2s ease-out, text-shadow 0.2s ease-out",
            willChange: surging ? "text-shadow" : "auto",
            lineHeight: "1",
            whiteSpace: "nowrap",
            margin: 0,
            padding: 0,
            textAlign: "center",
            width: "fit-content",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          DK
        </div>
      </div>

    </div>
  )
}

// Main Component
export default function NeuralScene() {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="relative h-[500px] w-full flex items-center justify-center">
        <div className="text-6xl font-bold text-white/10 font-mono">DK</div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="relative h-[500px] w-full">
      <CyberpunkNeuralNetwork />
    </div>
  )
}

