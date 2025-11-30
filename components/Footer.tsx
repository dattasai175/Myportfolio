"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/datta-katikaneni-821748179/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Mail, href: "mailto:datta@example.com", label: "Email" },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-border/50 py-12 grainy-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-foreground/60 text-sm"
          >
            © {new Date().getFullYear()} Datta Katikaneni. All rights reserved.
          </motion.p>

          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground/60 hover:text-neon-cyan hover:neon-glow-cyan transition-all"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={18} />
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

