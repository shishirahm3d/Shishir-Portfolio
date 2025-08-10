"use client"

import { useState } from "react"
import { Sidebar } from "./sidebar"
import { Navigation } from "./navigation"
import { AboutSection } from "./sections/about-section"
import { ResumeSection } from "./sections/resume-section"
import { PortfolioSection } from "./sections/portfolio-section"
import { ContactSection } from "./sections/contact-section"

type Section = "about" | "resume" | "portfolio" | "contact"

export function Portfolio() {
  const [activeSection, setActiveSection] = useState<Section>("about")

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />
      case "resume":
        return <ResumeSection />
      case "portfolio":
        return <PortfolioSection />
      case "contact":
        return <ContactSection />
      default:
        return <AboutSection />
    }
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          <Sidebar />
          <div className="flex-1 min-w-0">
            <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
            <div className="mt-8">{renderSection()}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
