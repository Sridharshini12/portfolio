"use client"

import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Code,
  Palette,
  Smartphone,
  Star,
  Sparkles,
  Rocket,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExperienceSection } from "@/components/experience-section"
import { ContactForm } from "@/components/contact-form"

export default function Portfolio() {
  const projects = [
    {
      title: "AI Powered Chatbot for Netflix",
      description:
        "An intelligent chatbot system designed to provide Netflix customer support with AI-powered responses and user assistance.",
      image: "/images/netflix-chatbot.png",
      technologies: ["React.js", "Node.js", "AI/ML", "Firebase"],
      github: "#",
      live: "https://chatbot-support-e3aec.web.app/login",
    },
    {
      title: "Personalized News App",
      description:
        "A personalized news application that curates content based on user preferences and reading habits with beautiful mobile interface.",
      image: "/images/personalized-news-app.png",
      technologies: ["React.js", "Node.js", "API Integration", "JavaScript"],
      github: "#",
      live: "#",
    },
    {
      title: "Tourist Places App",
      description:
        "A comprehensive travel application showcasing tourist destinations with detailed information and recommendations.",
      image: "/images/tourist-places-app.png",
      technologies: ["Flutter", "Firebase", "Google Maps API", "Dart"],
      github: "#",
      live: "#",
    },
  ]

  const skills = [
    { category: "Programming", items: ["Python", "C", "Java", "JavaScript", "Dart"], icon: Code },
    { category: "Web Technologies", items: ["HTML", "CSS", "React.js", "Node.js", "Flutter"], icon: Palette },
    {
      category: "Database & Tools",
      items: ["MySQL", "Firebase", "Git", "VS Code", "Android Studio"],
      icon: Smartphone,
    },
  ]

  return (
    <div className="min-h-screen galaxy-bg">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-pink-500/20 bg-black/20 backdrop-blur-md supports-[backdrop-filter]:bg-black/10">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl cosmic-text flex items-center gap-2">
            <Star className="h-5 w-5 text-pink-400" />
            Sridharshini
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="text-sm font-medium text-pink-200 hover:text-pink-400 transition-colors">
              About
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium text-pink-200 hover:text-pink-400 transition-colors"
            >
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium text-pink-200 hover:text-pink-400 transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium text-pink-200 hover:text-pink-400 transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-sm font-medium text-pink-200 hover:text-pink-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-24 md:py-32 relative">
        <div className="absolute top-10 left-10 text-pink-400/30 animate-pulse">
          <Sparkles className="h-8 w-8" />
        </div>
        <div className="absolute top-20 right-20 text-purple-400/30 animate-bounce">
          <Star className="h-6 w-6" />
        </div>
        <div className="absolute bottom-20 left-1/4 text-blue-400/30 animate-pulse">
          <Star className="h-4 w-4" />
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Hi, I'm <span className="cosmic-text animate-pulse">Sridharshini</span>
              </h1>
              <p className="text-xl text-pink-100/80 max-w-[600px] leading-relaxed">
                Computer Science Engineering student at Sri Sairam Institute of Technology, passionate about web
                development and AI. Currently working as a Webmaster at Yes Bioscience.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="w-fit bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 pink-glow"
                asChild
              >
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-fit border-pink-400/50 text-pink-200 hover:bg-pink-500/20 hover:border-pink-400"
                asChild
              >
                <a href="/resume.html" target="_blank" rel="noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  View Resume
                </a>
              </Button>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-pink-300 hover:text-pink-400 transition-colors hover:scale-110 transform">
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/sri-dharshini-0817a528b"
                className="text-pink-300 hover:text-pink-400 transition-colors hover:scale-110 transform"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="mailto:sridharshini1208@gmail.com"
                className="text-pink-300 hover:text-pink-400 transition-colors hover:scale-110 transform"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative floating">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-pink-500/30 via-purple-500/30 to-blue-500/30 flex items-center justify-center pulse-pink backdrop-blur-sm">
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-pink-400/20 to-purple-600/20 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/sridharshini-profile.jpg"
                    alt="Sridharshini - Web Developer and CS Student"
                    width={300}
                    height={300}
                    className="rounded-full object-cover border-2 border-pink-400/50 w-full h-full"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 text-yellow-400 animate-spin">
                <Sparkles className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl"></div>
        <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
          <h2 className="text-3xl font-bold tracking-tighter cosmic-text flex items-center justify-center gap-2">
            <Rocket className="h-8 w-8 text-pink-400" />
            About Me
          </h2>
          <p className="text-lg text-pink-100/80 leading-relaxed">
            I'm a passionate full-stack developer who loves turning complex problems into beautiful, functional
            solutions. When I'm not coding, you'll find me exploring new technologies, contributing to open source
            projects, or sharing knowledge with the developer community.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="cosmic-card hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center">
                <Code className="h-12 w-12 mx-auto text-pink-400 mb-2" />
                <CardTitle className="text-pink-200">Clean Code</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-pink-100/70">
                  Writing maintainable, scalable code that performs excellently across all platforms.
                </p>
              </CardContent>
            </Card>
            <Card className="cosmic-card hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center">
                <Palette className="h-12 w-12 mx-auto text-purple-400 mb-2" />
                <CardTitle className="text-pink-200">UI/UX Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-pink-100/70">
                  Creating intuitive interfaces that provide seamless user experiences.
                </p>
              </CardContent>
            </Card>
            <Card className="cosmic-card hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center">
                <Smartphone className="h-12 w-12 mx-auto text-blue-400 mb-2" />
                <CardTitle className="text-pink-200">Responsive Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-pink-100/70">
                  Building applications that work perfectly across all devices and screen sizes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container py-24 relative">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter cosmic-text flex items-center justify-center gap-2">
              <Rocket className="h-8 w-8 text-pink-400" />
              Professional Experience
            </h2>
            <p className="text-lg text-pink-100/80 leading-relaxed">
              My professional journey in web development and technology.
            </p>
          </div>
          <ExperienceSection />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-24">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter cosmic-text flex items-center justify-center gap-2">
              <Star className="h-8 w-8 text-pink-400" />
              Featured Projects
            </h2>
            <p className="text-lg text-pink-100/80 max-w-2xl mx-auto">
              Explore my collection of projects that showcase my development skills.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="cosmic-card overflow-hidden hover:scale-105 transition-all duration-300 group"
              >
                <div className="aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-600/20"></div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-pink-200">
                    {project.title}
                    <div className="flex space-x-2">
                      <Link
                        href={project.github}
                        className="text-pink-300 hover:text-pink-400 hover:scale-110 transition-all"
                      >
                        <Github className="h-4 w-4" />
                      </Link>
                      <Link
                        href={project.live}
                        className="text-pink-300 hover:text-pink-400 hover:scale-110 transition-all"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </div>
                  </CardTitle>
                  <CardDescription className="text-pink-100/70">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-200 border-pink-400/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 rounded-3xl"></div>
        <div className="space-y-12 relative z-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter cosmic-text flex items-center justify-center gap-2">
              <Sparkles className="h-8 w-8 text-pink-400" />
              Skills & Technologies
            </h2>
            <p className="text-lg text-pink-100/80 max-w-2xl mx-auto">
              My toolkit of technologies for building modern digital experiences.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {skills.map((skillGroup) => {
              const IconComponent = skillGroup.icon
              return (
                <Card
                  key={skillGroup.category}
                  className="cosmic-card hover:scale-105 transition-transform duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-center text-pink-200 flex items-center justify-center gap-2">
                      <IconComponent className="h-6 w-6 text-pink-400" />
                      {skillGroup.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skillGroup.items.map((skill) => (
                        <Badge
                          key={skill}
                          className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-200 border-pink-400/30 hover:scale-110 transition-transform"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-24">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter cosmic-text flex items-center justify-center gap-2">
              <Mail className="h-8 w-8 text-pink-400" />
              Let's Build Something Amazing
            </h2>
            <p className="text-lg text-pink-100/80 max-w-2xl mx-auto">
              Ready to work together? Let's create something that makes a real impact.
            </p>
          </div>

          <ContactForm />

          <div className="text-center space-y-6">
            <div className="flex justify-center space-x-6">
              <Link href="#" className="text-pink-300 hover:text-pink-400 transition-colors hover:scale-110 transform">
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/sri-dharshini-0817a528b"
                className="text-pink-300 hover:text-pink-400 transition-colors hover:scale-110 transform"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="mailto:sridharshini1208@gmail.com"
                className="text-pink-300 hover:text-pink-400 transition-colors hover:scale-110 transform"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-pink-100/60">
                Or reach out directly at{" "}
                <a
                  href="mailto:sridharshini1208@gmail.com"
                  className="text-pink-400 hover:text-pink-300 hover:underline"
                >
                  sridharshini1208@gmail.com
                </a>
              </p>
              <p className="text-sm text-pink-100/60">
                WhatsApp:{" "}
                <a
                  href="https://wa.me/919444952571"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 hover:underline"
                >
                  +91 9444952571
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-pink-500/20 py-8 bg-black/20 backdrop-blur-sm">
        <div className="container text-center text-sm text-pink-100/60">
          <p>&copy; 2024 Sridharshini. Made with 💖 and passion for great code.</p>
        </div>
      </footer>
    </div>
  )
}
