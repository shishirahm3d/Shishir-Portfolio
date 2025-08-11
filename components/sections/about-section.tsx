"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Code, Palette, Smartphone, Brain } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Building end-to-end web applications with React, Next.js, Node.js, and modern backend technologies.",
  },
  {
    icon: Brain,
    title: "AI & Prompt Engineering",
    description: "Developing intelligent systems and optimizing AI interactions for enhanced user experiences.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing interfaces that prioritize user experience and accessibility.",
  },
  {
    icon: Smartphone,
    title: "Systems Administration",
    description: "Managing server infrastructure, deployment pipelines, and ensuring optimal system performance.",
  },
]

export function AboutSection() {

  return (
    <Card className="glass border-white/10 p-8 animate-in fade-in-0 duration-500">
      <div className="space-y-4">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">About Me</h2>
          <div className="w-16 h-0.5 gradient-primary rounded-full" />
        </div>

        {/* About Text */}
        <div className="space-y-4 text-white/80 leading-relaxed text-justify">
          <p>
            I'm a passionate <span className="text-gradient font-medium">Full-Stack Developer</span> and{" "}
            <span className="text-gradient font-medium">AI Prompt Engineer</span> from Dhaka, Bangladesh, specializing in 
            modern web technologies and intelligent systems. I love crafting digital solutions that bridge the gap between 
            cutting-edge technology and user-centered design.
          </p>
          <p>
            With expertise spanning from frontend frameworks like React and Next.js to backend systems and server 
            administration, I build comprehensive web applications that are both powerful and intuitive. My recent focus 
            on AI and prompt engineering allows me to integrate intelligent features that enhance user experiences and 
            automate complex workflows.
          </p>
          <p>
            Whether it's developing scalable web applications, designing seamless user interfaces, or architecting robust 
            server infrastructure, I approach every project with attention to detail and a commitment to delivering 
            exceptional results that exceed expectations.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">What I Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="glass border-white/10 p-6 hover:bg-white/5 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">{service.title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

      </div>

    </Card>
  )
}
