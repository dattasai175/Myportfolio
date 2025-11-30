"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Send, Mail, MessageSquare, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Confetti from "react-confetti"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [showConfetti, setShowConfetti] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setShowConfetti(true)
    setIsSubmitting(false)
    setFormData({ name: "", email: "", message: "" })

    setTimeout(() => setShowConfetti(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="relative py-24 grainy-bg">
      {showConfetti && (
        <Confetti
          width={typeof window !== "undefined" ? window.innerWidth : 0}
          height={typeof window !== "undefined" ? window.innerHeight : 0}
          recycle={false}
          numberOfPieces={500}
        />
      )}

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto mb-4" />
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I&apos;d love to hear from you!
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8 md:p-12 space-y-6"
          >
            <div className="relative">
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder=" "
                className="peer pt-6 pb-2 h-auto glass border-none focus-visible:ring-2 focus-visible:ring-neon-cyan"
              />
              <Label
                htmlFor="name"
                className="absolute left-4 top-4 text-foreground/60 transition-all duration-200 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-neon-cyan peer-focus:text-sm peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-sm"
              >
                <User size={18} className="inline mr-2" />
                Name
              </Label>
            </div>

            <div className="relative">
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder=" "
                className="peer pt-6 pb-2 h-auto glass border-none focus-visible:ring-2 focus-visible:ring-neon-cyan"
              />
              <Label
                htmlFor="email"
                className="absolute left-4 top-4 text-foreground/60 transition-all duration-200 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-neon-cyan peer-focus:text-sm peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-sm"
              >
                <Mail size={18} className="inline mr-2" />
                Email
              </Label>
            </div>

            <div className="relative">
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder=" "
                className="peer pt-6 pb-2 glass border-none focus-visible:ring-2 focus-visible:ring-neon-cyan resize-none"
              />
              <Label
                htmlFor="message"
                className="absolute left-4 top-4 text-foreground/60 transition-all duration-200 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-neon-cyan peer-focus:text-sm peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-sm"
              >
                <MessageSquare size={18} className="inline mr-2" />
                Message
              </Label>
            </div>

            <Button
              type="submit"
              variant="neon"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="mr-2" size={18} />
                  Send Message
                </>
              )}
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-foreground/60 mb-4">Or reach out directly:</p>
            <div className="flex justify-center gap-6">
              <a
                href="mailto:datta.sai175@gmail.com"
                className="flex items-center gap-2 text-neon-cyan hover:text-neon-blue transition-colors"
              >
                <Mail size={20} />
                <span>datta.sai175@gmail.com</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

