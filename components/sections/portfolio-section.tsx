"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, Eye } from "lucide-react"

type Category = "all" | "web design" | "applications" | "web development"

interface Project {
  id: number
  title: string
  category: Category
  image: string
  link: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Currency Converter",
    category: "applications",
    image: "project-1.png",
    link: "https://github.com/shishirahm3d/currency_converter",
  },
    {
    id: 2,
    title: "Blood Heroes",
    category: "web development",
    image: "project-2.png",
    link: "https://github.com/shishirahm3d/blood-heroes",
  },
  {
    id: 3,
    title: "Discord Music Bot",
    category: "applications",
    image: "project-3.png",
    link: "https://github.com/shishirahm3d/bfl-music-bot",
  },
  {
    id: 4,
    title: "AI Lawyer",
    category: "web development",
    image: "project-4.png",
    link: "https://ailawyerbd.shishirahmed.me/",
  },
]

const categories: { id: Category; label: string; count: number }[] = [
  { id: "all", label: "All Projects", count: projects.length },
  { id: "web design", label: "Web Design", count: projects.filter((p) => p.category === "web design").length },
  { id: "applications", label: "Applications", count: projects.filter((p) => p.category === "applications").length },
  {
    id: "web development",
    label: "Web Development",
    count: projects.filter((p) => p.category === "web development").length,
  },
]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("all")
  const [isSelectOpen, setIsSelectOpen] = useState(false)

  const filteredProjects = projects.filter((project) => activeCategory === "all" || project.category === activeCategory)

  const activeCategoryData = categories.find((cat) => cat.id === activeCategory)

  return (
    <Card className="glass border-white/10 p-8">
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Portfolio</h2>
          <div className="w-16 h-0.5 gradient-primary rounded-full" />
          <p className="text-white/70 mt-3">Showcasing my latest work and creative projects</p>
        </div>

        {/* Filter Buttons - Desktop */}
        <div className="hidden md:flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className={
                activeCategory === category.id
                  ? "gradient-primary text-white hover:opacity-90 font-medium px-4 py-2 text-sm"
                  : "glass border-white/10 text-white/70 hover:text-white hover:bg-white/5 font-medium px-4 py-2 text-sm"
              }
            >
              {category.label}
              <Badge variant="secondary" className="ml-2 bg-white/20 text-white text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Filter Select - Mobile */}
        <div className="md:hidden relative">
          <Button
            variant="outline"
            className="w-full justify-between glass border-white/20 text-white hover:bg-white/5 py-3 bg-transparent"
            onClick={() => setIsSelectOpen(!isSelectOpen)}
          >
            <span className="flex items-center gap-2">
              {activeCategoryData?.label}
              <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                {activeCategoryData?.count}
              </Badge>
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isSelectOpen ? "rotate-180" : ""}`} />
          </Button>

          {isSelectOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 glass border-white/20 rounded-lg p-2 z-10">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant="ghost"
                  size="sm"
                  className="w-full justify-between text-white/70 hover:text-white hover:bg-white/5 py-2 text-sm"
                  onClick={() => {
                    setActiveCategory(category.id)
                    setIsSelectOpen(false)
                  }}
                >
                  {category.label}
                  <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg border border-white/20"
                  >
                    <Eye className="w-6 h-6 text-gray-800" />
                  </a>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="font-semibold text-white text-lg tracking-tight">{project.title}</h3>
                <p className="text-white/50 text-sm capitalize font-medium">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
