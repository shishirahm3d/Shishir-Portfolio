"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  })

  const [isValid, setIsValid] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const newFormData = { ...formData, [name]: value }
    setFormData(newFormData)

    // Check if form is valid
    const valid =
      newFormData.fullname.trim() !== "" &&
      newFormData.email.trim() !== "" &&
      newFormData.message.trim() !== "" &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newFormData.email)
    setIsValid(valid)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isValid) {
      console.log("Form submitted:", formData)
      // Handle form submission here
    }
  }

  return (
    <Card className="glass border-white/10 p-8">
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
          <div className="w-16 h-0.5 gradient-primary rounded-full" />
          <p className="text-white/70 mt-3">Let's work together on your next project</p>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Get In Touch</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                type="text"
                name="fullname"
                placeholder="Full name"
                value={formData.fullname}
                onChange={handleInputChange}
                required
                className="glass border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 bg-transparent py-3 px-4"
              />
              <Input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="glass border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 bg-transparent py-3 px-4"
              />
            </div>
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              className="glass border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 bg-transparent p-4 resize-none"
            />
            <Button
              type="submit"
              disabled={!isValid}
              className="gradient-primary text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed py-3 px-6 font-medium"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </Card>
  )
}
