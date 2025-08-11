import { Card } from "@/components/ui/card"
import { BookOpen, Briefcase, TrendingUp, Globe } from "lucide-react"

const education = [
  {
    title: "Daffodil International University",
    period: "Sep 2021 — Aug 2025",
    description:
      "Bachelor's degree in Computer Science and Engineering, focusing on modern software development, algorithms, and emerging technologies.",
  },
]

const experience = [
  {
    title: "Software Developer",
    period: "July 2025 — Present",
    description:
      "Full stack developer at Automat Dealer Services LLC responsible for front end development (UI/UX), back end development (databases, logic, APIs), full cycle development, testing and debugging, and end user support.",
  },
]

const skills = [
  { name: "Frontend Development", level: 95, color: "from-blue-500 to-cyan-500" },
  { name: "Backend Development", level: 90, color: "from-green-500 to-emerald-500" },
  { name: "Programming Languages", level: 80, color: "from-purple-500 to-pink-500" },
  { name: "Database Management", level: 90, color: "from-orange-500 to-red-500" },
  { name: "User Interface Design", level: 95, color: "from-indigo-500 to-purple-500" },
  { name: "Artificial Intelligence", level: 85, color: "from-teal-500 to-blue-500" },
]

const languages = [
  { name: "English", level: 90, color: "from-blue-500 to-indigo-500" },
  { name: "Bengali", level: 100, color: "from-green-500 to-teal-500" },
  { name: "Hindi", level: 80, color: "from-orange-500 to-pink-500" },
]

export function ResumeSection() {
  return (
    <Card className="glass border-white/10 p-8 animate-in fade-in-0 duration-500">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Resume</h2>
          <div className="w-16 h-0.5 gradient-primary rounded-full" />
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">Education</h3>
          </div>

          <div className="space-y-8 ml-16">
            {education.map((item, index) => (
              <div key={index} className="relative">
                {index !== education.length - 1 && (
                  <div className="absolute left-[-2rem] top-8 w-0.5 h-full bg-gradient-to-b from-purple-500 to-transparent" />
                )}
                <div className="absolute left-[-2.25rem] top-2 w-2 h-2 gradient-primary rounded-full" />

                <Card className="glass border-white/10 p-6">
                  <h4 className="text-lg font-medium text-white">{item.title}</h4>
                  <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                    {item.period}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">Experience</h3>
          </div>

          <div className="space-y-8 ml-16">
            {experience.map((item, index) => (
              <div key={index} className="relative">
                {index !== experience.length - 1 && (
                  <div className="absolute left-[-2rem] top-8 w-0.5 h-full bg-gradient-to-b from-pink-500 to-transparent" />
                )}
                <div className="absolute left-[-2.25rem] top-2 w-2 h-2 gradient-secondary rounded-full" />

                <Card className="glass border-white/10 p-6">
                  <h4 className="text-lg font-medium text-white">{item.title}</h4>
                  <div className="inline-block px-3 py-1 bg-pink-500/20 text-pink-300 text-sm rounded-full">
                    {item.period}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Skills and Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skills */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 gradient-accent rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">Skills</h3>
            </div>

            <Card className="glass border-white/10 p-4">
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-white text-sm">{skill.name}</h4>
                      <span className="text-white/60 text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Languages */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 gradient-accent rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">Languages</h3>
            </div>

            <Card className="glass border-white/10 p-4">
              <div className="space-y-4">
                {languages.map((language, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-white text-sm">{language.name}</h4>
                      <span className="text-white/60 text-xs">{language.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${language.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${language.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Card>
  )
}
