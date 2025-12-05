"use client"

import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
      infinite: false,
    })

    let rafId: number

    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    // Handle anchor link clicks with smooth scroll
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')
      
      // Skip if clicking on buttons or elements that shouldn't trigger scroll
      if (target.closest('button') || target.closest('[data-no-scroll]')) {
        return
      }
      
      if (anchor && anchor.getAttribute('href') !== '#') {
        const href = anchor.getAttribute('href')
        if (href) {
          e.preventDefault()
          const targetElement = document.querySelector(href)
          if (targetElement) {
            lenis.scrollTo(targetElement, {
              offset: -80,
              duration: 1.5,
            })
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick, true)

    return () => {
      document.removeEventListener('click', handleAnchorClick, true)
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}

