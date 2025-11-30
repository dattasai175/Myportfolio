import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Technologies from "@/components/Technologies"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Experience />
      <Technologies />
      <Projects />
      <Contact />
    </main>
  )
}

