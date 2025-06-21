import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Briefcase, Star } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Webmaster",
      company: "Yes Bioscience",
      duration: "September 2023 - Present",
      type: "Current Position",
      description:
        "Managing and maintaining web presence, developing web solutions, and ensuring optimal website performance and user experience.",
      skills: ["Web Development", "Content Management", "SEO", "Analytics"],
    },
    {
      title: "Web Developer Intern",
      company: "Futurenet Technologies",
      duration: "June 2025 - July 2025",
      type: "Upcoming Mission",
      description: "Upcoming internship focused on web development technologies and real-world project implementation.",
      skills: ["React.js", "Node.js", "Full Stack Development", "Project Management"],
    },
  ]

  return (
    <section id="experience" className="container py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl"></div>
      <div className="space-y-12 relative z-10">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter cosmic-text flex items-center justify-center gap-2">
            <Briefcase className="h-8 w-8 text-pink-400" />
            Professional Experience
          </h2>
          <p className="text-lg text-pink-100/80 max-w-2xl mx-auto">
            My professional journey through web development and technology roles.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <Card key={index} className="cosmic-card relative hover:scale-105 transition-all duration-300 group">
              <div className="absolute top-4 right-4">
                <Star className="h-5 w-5 text-pink-400/50 group-hover:text-pink-400 transition-colors" />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-pink-200">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-purple-300">{exp.company}</CardDescription>
                  </div>
                  <Badge
                    className={`${
                      exp.type === "Current Position"
                        ? "bg-gradient-to-r from-pink-500/30 to-purple-500/30 text-pink-200 border-pink-400/50"
                        : "bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-blue-200 border-blue-400/50"
                    }`}
                  >
                    {exp.type}
                  </Badge>
                </div>
                <div className="flex items-center text-sm text-pink-100/70">
                  <CalendarDays className="mr-2 h-4 w-4 text-pink-400" />
                  {exp.duration}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-pink-100/80">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-200 border-pink-400/30 text-xs hover:scale-110 transition-transform"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
