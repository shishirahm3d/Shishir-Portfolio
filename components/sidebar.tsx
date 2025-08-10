"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, Mail, Phone, Calendar, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  
  const titles = [
    "Full-Stack Developer",
    "Prompt Engineer", 
    "Systems Administrator",
    "UI/UX Designer",
    "Software Engineer"
  ]
  
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex]
    let currentIndex = 0
    
    if (isTyping) {
      // Typing animation
      const typingInterval = setInterval(() => {
        if (currentIndex <= currentTitle.length) {
          setDisplayedText(currentTitle.substring(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(typingInterval)
          // Wait 3 seconds before starting to delete
          setTimeout(() => {
            setIsTyping(false)
          }, 3000)
        }
      }, 150) // Type each character every 150ms (slower typing)
      
      return () => clearInterval(typingInterval)
    } else {
      // Deleting animation
      currentIndex = currentTitle.length
      const deletingInterval = setInterval(() => {
        if (currentIndex >= 0) {
          setDisplayedText(currentTitle.substring(0, currentIndex))
          currentIndex--
        } else {
          clearInterval(deletingInterval)
          setIsTyping(true)
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
        }
      }, 80) // Delete each character every 80ms (slower deletion)
      
      return () => clearInterval(deletingInterval)
    }
  }, [currentTitleIndex, isTyping])

  return (
    <Card className="glass border-white/10 p-6 lg:w-80 lg:sticky lg:top-8 lg:h-fit">
      <div className="flex items-center gap-4 lg:flex-col lg:text-center">
        <div className="relative">
          <div className="relative w-20 h-20 lg:w-32 lg:h-32 rounded-2xl overflow-hidden gradient-primary p-0.5">
            <div className="w-full h-full rounded-2xl overflow-hidden bg-background">
              <Image
                src="/shishir.jpg"
                alt="Shishir Ahmed Midul"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
        </div>

        <div className="flex-1 lg:flex-none">
          <h1 className="text-xl lg:text-2xl font-semibold text-white mb-2">Shishir Ahmed Midul</h1>
          <div className="glass bg-white/5 text-white/90 text-sm px-3 py-1.5 rounded-lg inline-block font-medium">
            <span className="font-mono">
              {displayedText}
              <span className="animate-pulse text-purple-400">|</span>
            </span>
          </div>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="lg:hidden text-white/70 hover:text-white hover:bg-white/5"
        >
          <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
        </Button>
      </div>

      <div className={`mt-6 space-y-6 ${isExpanded ? "block" : "hidden lg:block"}`}>
        <div className="h-px bg-white/10" />

        <div className="space-y-4">
          {[
            { icon: Mail, label: "Email", value: "contact@shishirahmed.me", href: "mailto:contact@shishirahmed.me" },
            { icon: Phone, label: "Phone", value: "+8801786306390", href: "tel:+8801786306390" },
            { icon: Calendar, label: "Birthday", value: "April 03, 2001" },
            { icon: MapPin, label: "Location", value: "Mirpur, Dhaka, BD" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon className="w-4 h-4 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-white/50 uppercase tracking-wide font-medium">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-sm text-white/90 hover:text-white transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-white/90">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="h-px bg-white/10" />

        <div className="flex justify-center gap-3">
          {[
            { icon: Github, href: "https://github.com/shishirahm3d", color: "hover:text-gray-300" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/shishir-ahmed-midul", color: "hover:text-blue-400" },
            { icon: Twitter, href: "https://x.com/shishir_ahm3d", color: "hover:text-sky-400" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 glass rounded-lg flex items-center justify-center text-white/60 ${social.color} transition-colors hover:bg-white/5`}
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </Card>
  )
}
