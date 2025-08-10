"use client"

import { Button } from "@/components/ui/button"

type Section = "about" | "resume" | "portfolio" | "contact"

interface NavigationProps {
  activeSection: Section
  onSectionChange: (section: Section) => void
}

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const sections: { id: Section; label: string }[] = [
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-4 z-20 glass border-white/10 rounded-xl p-2">
      <div className="flex flex-wrap justify-center gap-1">
        {sections.map((section) => (
          <Button
            key={section.id}
            variant={activeSection === section.id ? "default" : "ghost"}
            size="sm"
            onClick={() => onSectionChange(section.id)}
            className={
              activeSection === section.id
                ? "gradient-primary text-white hover:opacity-90 font-medium px-4 py-2 text-sm"
                : "text-white/70 hover:text-white hover:bg-white/5 font-medium px-4 py-2 text-sm"
            }
          >
            {section.label}
          </Button>
        ))}
      </div>
    </nav>
  )
}
