"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  Github,
  Download,
  MapPin,
  Phone,
  ExternalLink,
  Calendar,
  GraduationCap,
  Award,
  Briefcase,
  Send,
  Code,
  Database,
  Shield,
  Cloud,
  Menu,
  X,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      // Header scroll effect
      setScrolled(window.scrollY > 50)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const webhookUrl = "https://discord.com/api/webhooks/1441152099101708329/KmEc3ROLJUEHZPg8RMBweGHo0iSGFWVVGk25tSDDoRzQx0vB6QzbEQavLXrBnM4B7BXE"
      
      const embed = {
        title: "New Portfolio Message! 🎉",
        description: formData.message,
        color: 16750848, // Orange color (#ff8c00)
        fields: [
          {
            name: "Name",
            value: formData.name,
            inline: true,
          },
          {
            name: "Email",
            value: formData.email,
            inline: true,
          },
          {
            name: "Timestamp",
            value: new Date().toLocaleString(),
            inline: false,
          },
        ],
        footer: {
          text: "Portfolio Contact Form",
        },
      }

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          embeds: [embed],
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setSubmitStatus("idle"), 5000) // Clear message after 5 seconds
      } else {
        setSubmitStatus("error")
        setTimeout(() => setSubmitStatus("idle"), 5000)
      }
    } catch (error) {
      console.error("Error sending message:", error)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Professional Black Theme Background */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Pure black base */}
        <div className="absolute inset-0 bg-black"></div>

        {/* Subtle gradient accent - very minimal */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 via-transparent to-orange-600/5"></div>
        </div>

        {/* Professional grid - very subtle */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
        linear-gradient(rgba(255, 140, 0, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 140, 0, 0.1) 1px, transparent 1px)
      `,
            backgroundSize: "100px 100px",
          }}
        ></div>

        {/* Minimal floating accents */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/2 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-orange-600/2 rounded-full blur-3xl"></div>

        {/* Subtle accent particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-orange-500/20 rounded-full animate-tech-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${12 + Math.random() * 8}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Professional Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md border-b border-orange-500/20"
            : "bg-black/50 backdrop-blur-sm border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Minimal Logo & Brand */}
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <div className="absolute -inset-3 bg-orange-600/20 group-hover:bg-orange-600/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg border-2 border-orange-400/60 flex items-center justify-center shadow-lg hover:shadow-orange-600/50 transition-all">
                  {/* Professional GJ Logo with design */}
                  <div className="flex items-center justify-center">
                    <span className="text-white font-black text-lg tracking-wider">G</span>
                    <span className="text-orange-200 font-black text-lg tracking-wider ml-0.5">J</span>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-gray-100 to-orange-400 bg-clip-text text-transparent">
                  Goutham JR
                </h1>
                <p className="text-xs text-orange-400 font-semibold tracking-widest uppercase">
                  Software Engineer
                </p>
              </div>
            </div>

            {/* Professional Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {[
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "experience", label: "Experience" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md ${
                    activeSection === item.id
                      ? "text-orange-400 bg-orange-600/10"
                      : "text-gray-300 hover:text-orange-400 hover:bg-orange-600/5"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
            </nav>

            {/* Bold Social & CTA */}
            <div className="flex items-center space-x-4">
              {/* Social Links */}
              <div className="hidden md:flex items-center space-x-3">
                <a
                  href="https://github.com/Goutham-JR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-black hover:bg-orange-600 rounded-lg border border-gray-700 hover:border-orange-500 transition-all duration-300 shadow-lg hover:shadow-orange-500/40"
                >
                  <Github className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/95 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity border border-orange-500/50 shadow-lg">
                    GitHub
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/95"></div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/justgoutham/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-black hover:bg-orange-600 rounded-lg border border-gray-700 hover:border-orange-500 transition-all duration-300 shadow-lg hover:shadow-orange-500/40"
                >
                  <svg
                    className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/95 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity border border-orange-500/50 shadow-lg">
                    LinkedIn
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/95"></div>
                  </div>
                </a>

                <a
                  href="mailto:gowthamnaidu.jr@gmail.com"
                  className="group relative p-3 bg-black hover:bg-orange-600 rounded-lg border border-gray-700 hover:border-orange-500 transition-all duration-300 shadow-lg hover:shadow-orange-500/40"
                >
                  <Mail className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-900/95 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity border border-blue-500/30 shadow-lg">
                    Email
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900/95"></div>
                  </div>
                </a>
              </div>

              {/* CTA Button */}
              <a
                href="/Goutham 3rd Sem .pdf" 
                download
                className="relative group bg-orange-600 hover:bg-orange-500 text-white px-6 py-2 rounded-md font-semibold shadow-lg hover:shadow-orange-500/30 transform hover:scale-105 transition-all duration-300 inline-block text-sm"
              >
                <span className="relative flex items-center justify-center">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 bg-gray-900 hover:bg-gray-800 rounded-md border border-gray-700 transition-all duration-300"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="pt-4 space-y-2">
              {[
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "experience", label: "Experience" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-white bg-gradient-to-r from-orange-600 to-orange-700 shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-orange-600/20"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile Social Links */}
              <div className="flex justify-center space-x-4 pt-4 border-t border-orange-500/20">
                <a
                  href="https://github.com/Goutham-JR"
                  className="p-2 bg-black rounded-lg shadow-lg hover:bg-orange-600"
                >
                  <Github className="w-5 h-5 text-gray-300 hover:text-white" />
                </a>
                <a
                  href="https://linkedin.com/in/justgoutham"
                  className="p-2 bg-black rounded-lg shadow-lg hover:bg-orange-600"
                >
                  <svg className="w-5 h-5 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="mailto:gowthamnaidu.jr@gmail.com"
                  className="p-2 bg-black rounded-lg shadow-lg hover:bg-orange-600"
                >
                  <Mail className="w-5 h-5 text-gray-300 hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 relative min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Animated profile image */}
            <div className="mb-12">
              <div className="relative inline-block mb-8">
                <div className="absolute -inset-1 bg-orange-600 rounded-lg blur-md opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <img
                  src="/Goutham.jpeg"
                  alt="Goutham JR"
                  className="relative w-48 h-48 rounded-lg mx-auto object-cover border border-orange-500/40 shadow-lg transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Main content with staggered animations */}
            <div className="space-y-6 mb-12">
              {/* Name heading */}
              <div className="inline-block animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black bg-gradient-to-r from-white via-orange-200 to-orange-500 bg-clip-text text-transparent mb-4 drop-shadow-lg">
                  Goutham JR
                </h1>
                {/* Animated underline accent */}
                <div className="h-1.5 w-24 mx-auto bg-gradient-to-r from-orange-600 to-orange-400 rounded-full shadow-lg shadow-orange-600/50"></div>
              </div>

              {/* Decorative line */}
              <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
              </div>

              {/* Subtitle */}
              <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
                Software Engineer & MCA Student | Building secure, innovative solutions
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <a href="mailto:gowthamnaidu.jr@gmail.com"
                    className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-3 rounded-md font-semibold text-base shadow-lg hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center group">
                    <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Get In Touch
                  </a>

                <a
                  href="https://github.com/Goutham-JR?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-orange-500/50 text-orange-400 hover:text-white hover:bg-orange-600/20 px-8 py-3 rounded-md font-semibold text-base transform hover:scale-105 transition-all duration-300 bg-transparent inline-flex items-center justify-center group">
                  <Github className="w-5 h-5 mr-2 group-hover:-rotate-12 transition-transform" />
                  View Projects
                </a>
              </div>
            </div>

            {/* Scroll indicator with animation */}
            <div className="mt-20 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2s' }}>
              <div className="text-gray-400 text-sm mb-3">Scroll to explore</div>
              <svg className="w-6 h-6 text-orange-500 mx-auto animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold inline-block text-white">
              About <span className="text-orange-500">Me</span>
            </h2>
          </div>
          <Card className="border border-orange-500/20 bg-gray-900/40 backdrop-blur-sm hover:bg-gray-900/60 hover:border-orange-500/40 transition-all duration-500 shadow-lg">
            <CardContent className="p-8">
              <div className="text-lg text-gray-300 leading-relaxed text-center">
                <p className="mb-4">
                  I'm an <span className="text-orange-400 font-semibold">MCA student</span> at RV Institute of Technology & Management, deeply passionate about{" "}
                  <span className="text-amber-300 font-semibold">software engineering</span> and building robust, scalable{" "}
                  <span className="text-blue-300 font-semibold">applications</span>.
                </p>
                <p>
                  Skilled in <span className="text-emerald-300 font-semibold">C++, Java, Python and the MERN stack</span>, with a strong interest in
                  <span className="text-amber-300 font-semibold"> Cryptography</span> and secure systems including research in
                  <span className="text-amber-300 font-semibold"> Homomorphic Encryption</span>.
                </p>
              </div>

            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold inline-block text-white">
              Skills <span className="text-orange-500">&</span> Expertise
            </h2>
          </div>

          {/* Modern Card Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Programming Languages */}
            <div className="group">
              <Card className="relative bg-gray-900/40 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 transform hover:-translate-y-2 shadow-lg hover:shadow-blue-500/20 rounded-lg overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
                <CardHeader className="text-center pb-3">
                  <div className="w-12 h-12 mx-auto mb-3 bg-blue-600/20 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-6 h-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-lg text-white font-bold group-hover:text-blue-300 transition-colors">
                    Programming
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {["C++", "C#",  "C", "Java", "Python", "SQL"].map((skill, idx) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-blue-600/20 text-blue-300 hover:bg-blue-600/40 transition-colors border border-blue-500/40 font-medium text-xs px-2 py-1 animate-fade-in"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Web Development */}
            <div className="group">
              <Card className="relative bg-gray-900/40 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 transform hover:-translate-y-2 shadow-lg hover:shadow-cyan-500/20 rounded-lg overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-600 to-blue-500"></div>
                <CardHeader className="text-center pb-3">
                  <div className="w-12 h-12 mx-auto mb-3 bg-cyan-600/20 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Database className="w-6 h-6 text-cyan-400" />
                  </div>
                  <CardTitle className="text-lg text-white font-bold group-hover:text-cyan-300 transition-colors">
                    Web Development
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "MongoDB", "Express", "J2EE", "HTML", "JavaScript", "CSS"].map((skill, idx) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-cyan-600/20 text-cyan-300 hover:bg-cyan-600/40 transition-colors border border-cyan-500/40 font-medium text-xs px-2 py-1 animate-fade-in"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Cybersecurity */}
            <div className="group">
              <Card className="relative bg-gray-900/40 backdrop-blur-sm border border-red-500/20 hover:border-red-400/40 transition-all duration-500 transform hover:-translate-y-2 shadow-lg hover:shadow-red-500/20 rounded-lg overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-orange-500"></div>
                <CardHeader className="text-center pb-3">
                  <div className="w-12 h-12 mx-auto mb-3 bg-red-600/20 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-red-400" />
                  </div>
                  <CardTitle className="text-lg text-white font-bold group-hover:text-red-300 transition-colors">
                    Cybersecurity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {["AES Encryption", "RSA", "Homomorphic Encryption", "OpenSSL", "Network Security"].map((skill, idx) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-red-600/20 text-red-300 hover:bg-red-600/40 transition-colors border border-red-500/40 font-medium text-xs px-2 py-1 animate-fade-in"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Cloud & Tools */}
            <div className="group">
              <Card className="relative bg-gray-900/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 transform hover:-translate-y-2 shadow-lg hover:shadow-purple-500/20 rounded-lg overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-500"></div>
                <CardHeader className="text-center pb-3">
                  <div className="w-12 h-12 mx-auto mb-3 bg-purple-600/20 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Cloud className="w-6 h-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-lg text-white font-bold group-hover:text-purple-300 transition-colors">
                    Cloud & Tools
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {["Google Cloud", "IBM Cloud", "Git", "VS Code", "Postman"].map((skill, idx) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-purple-600/20 text-purple-300 hover:bg-purple-600/40 transition-colors border border-purple-500/40 font-medium text-xs px-2 py-1 animate-fade-in"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Skills Summary */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="group">
                <div className="text-3xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform">
                  6+
                </div>
                <div className="text-gray-300 font-medium">Programming Languages</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform">
                  10+
                </div>
                <div className="text-gray-300 font-medium">Web Technologies</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform">
                  3+
                </div>
                <div className="text-gray-300 font-medium">Security Protocols</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform">
                  8+
                </div>
                <div className="text-gray-300 font-medium">Development Tools</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold inline-block text-white">
              Featured <span className="text-orange-500">Projects</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Existing CryptoLink Card - made more compact */}
            <Card className="group border border-blue-500/40 bg-slate-900/40 backdrop-blur-xl hover:bg-slate-900/60 hover:border-blue-400/70 transition-all duration-500 transform hover:-translate-y-4 overflow-hidden shadow-lg shadow-blue-500/30">
              <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-white group-hover:text-blue-300 transition-colors font-bold">
                    CryptoLink
                  </CardTitle>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-300 group-hover:scale-125 transition-all cursor-pointer" />
                </div>
                <CardDescription className="text-gray-300 font-semibold">Secure Chat Application</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-300 mb-4 text-sm">
                  A secure messaging application implementing end-to-end encryption for private communications.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-blue-600/30 text-blue-300 border-blue-500/60 text-xs">OpenSSL</Badge>
                  <Badge className="bg-blue-600/30 text-blue-300 border-blue-500/60 text-xs">Security</Badge>
                  <Badge className="bg-blue-600/30 text-blue-300 border-blue-500/60 text-xs">Boost.Asio</Badge>
                </div>
                <div className="flex items-center text-gray-400 text-xs">
                  <Calendar className="w-4 h-4 mr-2" />
                  September 2025
                </div>
              </CardContent>
            </Card>

            {/* Existing IoT Communication Card - made more compact */}
            <Card className="group border border-purple-500/40 bg-slate-900/40 backdrop-blur-xl hover:bg-slate-900/60 hover:border-purple-400/70 transition-all duration-500 transform hover:-translate-y-4 overflow-hidden shadow-lg shadow-purple-500/30">
              <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-400"></div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-white group-hover:text-purple-300 transition-colors font-bold">
                    IoT Communication
                  </CardTitle>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-300 group-hover:scale-125 transition-all cursor-pointer" />
                </div>
                <CardDescription className="text-gray-300 font-semibold">Xbee Protocol Implementation</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-300 mb-4 text-sm">
                  Developed IoT communication system using Xbee protocol for wireless device connectivity.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-purple-600/30 text-purple-300 border-purple-500/60 text-xs">IoT</Badge>
                  <Badge className="bg-purple-600/30 text-purple-300 border-purple-500/60 text-xs">Xbee</Badge>
                  <Badge className="bg-purple-600/30 text-purple-300 border-purple-500/60 text-xs">Wireless</Badge>
                </div>
                <div className="flex items-center text-gray-400 text-xs">
                  <Calendar className="w-4 h-4 mr-2" />
                  Feb 2022
                </div>
              </CardContent>
            </Card>

            {/* Existing Web Portfolio Card - made more compact */}
            <Card className="group border border-cyan-500/40 bg-slate-900/40 backdrop-blur-xl hover:bg-slate-900/60 hover:border-cyan-400/70 transition-all duration-500 transform hover:-translate-y-4 overflow-hidden shadow-lg shadow-cyan-500/30">
              <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-400"></div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-white group-hover:text-cyan-300 transition-colors font-bold">
                    Web Portfolio
                  </CardTitle>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-300 group-hover:scale-125 transition-all cursor-pointer" />
                </div>
                <CardDescription className="text-gray-300 font-semibold">J2EE Implementation</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-300 mb-4 text-sm">
                  Professional portfolio website built using J2EE framework with dynamic content management.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-cyan-600/30 text-cyan-300 border-cyan-500/60 text-xs">J2EE</Badge>
                  <Badge className="bg-cyan-600/30 text-cyan-300 border-cyan-500/60 text-xs">Web</Badge>
                  <Badge className="bg-cyan-600/30 text-cyan-300 border-cyan-500/60 text-xs">Portfolio</Badge>
                </div>
                <div className="flex items-center text-gray-400 text-xs">
                  <Calendar className="w-4 h-4 mr-2" />
                  Jan 2023
                </div>
              </CardContent>
            </Card>

            {/* New Project 1: ECC Digital Signature - compact */}
            <Card className="group border border-red-500/40 bg-slate-900/40 backdrop-blur-xl hover:bg-slate-900/60 hover:border-red-400/70 transition-all duration-500 transform hover:-translate-y-4 overflow-hidden shadow-lg shadow-red-500/30">
              <div className="h-1 bg-gradient-to-r from-red-600 to-orange-500"></div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-white group-hover:text-red-300 transition-colors font-bold">
                    ECC Digital Signature Using NIST P-256
                  </CardTitle>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-red-300 group-hover:scale-125 transition-all cursor-pointer" />
                </div>
                <CardDescription className="text-gray-300 font-semibold">Cryptographic Analysis</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-300 mb-4 text-sm">
                  Secure implementation and evaluation of elliptic curve-based digital signatures leveraging the NIST P-256 curve.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-red-600/30 text-red-300 border-red-500/60 text-xs">Blockchain</Badge>
                  <Badge className="bg-red-600/30 text-red-300 border-red-500/60 text-xs">ECC</Badge>
                  <Badge className="bg-red-600/30 text-red-300 border-red-500/60 text-xs">Comparison</Badge>
                </div>
                <div className="flex items-center text-gray-400 text-xs">
                  <Calendar className="w-4 h-4 mr-2" />
                  Jul 2025
                </div>
              </CardContent>
            </Card>

            {/* New Project 2: Duelisto Mobile App - compact */}
            <Card className="group border border-green-500/40 bg-slate-900/40 backdrop-blur-xl hover:bg-slate-900/60 hover:border-green-400/70 transition-all duration-500 transform hover:-translate-y-4 overflow-hidden shadow-lg shadow-green-500/30">
              <div className="h-1 bg-gradient-to-r from-green-600 to-emerald-500"></div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-white group-hover:text-green-300 transition-colors font-bold">
                    Duelisto - Social App
                  </CardTitle>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-green-300 group-hover:scale-125 transition-all cursor-pointer" />
                </div>
                <CardDescription className="text-gray-300 font-semibold">Mobile Application</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-300 mb-4 text-sm">
                  Social media platform enabling users to connect, share ideas, and express thoughts freely.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-green-600/30 text-green-300 border-green-500/60 text-xs">Mobile App</Badge>
                  <Badge className="bg-green-600/30 text-green-300 border-green-500/60 text-xs">Kotlin</Badge>
                  <Badge className="bg-green-600/30 text-green-300 border-green-500/60 text-xs">Android</Badge>
                </div>
                <div className="flex items-center text-gray-400 text-xs">
                  <Calendar className="w-4 h-4 mr-2" />
                  Dec 2024
                </div>
              </CardContent>
            </Card>

            {/* New Project 3: Bug Triage - compact */}
            <Card className="group border border-yellow-500/40 bg-slate-900/40 backdrop-blur-xl hover:bg-slate-900/60 hover:border-yellow-400/70 transition-all duration-500 transform hover:-translate-y-4 overflow-hidden shadow-lg shadow-yellow-500/30">
              <div className="h-1 bg-gradient-to-r from-yellow-600 to-amber-500"></div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-white group-hover:text-yellow-300 transition-colors font-bold">
                    Bug Triage System
                  </CardTitle>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-yellow-300 group-hover:scale-125 transition-all cursor-pointer" />
                </div>
                <CardDescription className="text-gray-300 font-semibold">Machine Learning</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-300 mb-4 text-sm">
                  Automated bug triage system that categorizes and prioritizes issues for efficient developer workflow.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-yellow-600/30 text-yellow-300 border-yellow-500/60 text-xs">ML</Badge>
                  <Badge className="bg-yellow-600/30 text-yellow-300 border-yellow-500/60 text-xs">J46 Tree</Badge>
                  <Badge className="bg-yellow-600/30 text-yellow-300 border-yellow-500/60 text-xs">Testing</Badge>
                </div>
                <div className="flex items-center text-gray-400 text-xs">
                  <Calendar className="w-4 h-4 mr-2" />
                  Nov 2024 – Jan 2025
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold inline-block text-white">
              Professional <span className="text-orange-500">Experience</span>
            </h2>
          </div>
          <Card className="border border-orange-500/40 bg-slate-900/40 backdrop-blur-xl hover:bg-slate-900/60 hover:border-orange-400/70 transition-all duration-500 transform hover:-translate-y-4 overflow-hidden shadow-lg shadow-orange-500/30">
            <div className="h-1 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 shadow-md shadow-orange-600/40"></div>
            <CardHeader className="bg-slate-900/30">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-3xl text-white mb-3 font-bold">Software Engineer Intern</CardTitle>
                  <CardDescription className="text-xl text-gray-300 font-semibold">TechCiti Technologies Private Limited</CardDescription>
                </div>
                <div className="bg-orange-600/15 border border-orange-500/40 p-5 rounded-lg hover:bg-orange-600/25 transition-colors">
                  <Briefcase className="w-10 h-10 text-orange-400" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="flex items-center text-gray-400 mb-8">
                <Calendar className="w-5 h-5 mr-3" />
                <span className="bg-orange-600/20 text-orange-300 px-4 py-2 rounded-lg font-bold border border-orange-500/50">
                  Nov 2024 – Jan 2025
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-300 text-lg">
                      Developed and maintained Bug Triage using modern technologies
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-orange-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-300 text-lg">
                      Collaborated with cross-functional teams to deliver high-quality solutions
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-300 text-lg">
                      Implemented J46 Decision Tree for prioritizing work in application development
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-300 text-lg">
                      Participated in code reviews and contributed to technical documentation
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education & Achievements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Education Section */}
          <div>
            <h2 className="text-4xl font-bold mb-8 inline-block text-white">
              My <span className="text-orange-500">Education</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <Card className="border border-orange-500/40 bg-slate-900/40 backdrop-blur-xl hover:bg-slate-900/60 hover:border-orange-400/70 transition-all duration-300 shadow-lg shadow-orange-500/30">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <CardTitle className="text-lg text-white font-bold">Master of Computer Applications</CardTitle>
                      <CardDescription className="text-gray-300 font-semibold text-sm">
                        RV Institute of Technology & Management
                      </CardDescription>
                    </div>
                    <GraduationCap className="w-8 h-8 text-orange-400 flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300 font-bold">CGPA: 8.67</span>
                    <Badge className="bg-orange-600/30 text-orange-300 border-orange-500/60 font-bold text-xs">Current</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-orange-500/40 bg-slate-900/40 backdrop-blur-xl hover:bg-slate-900/60 hover:border-orange-400/70 transition-all duration-300 shadow-lg shadow-orange-500/30">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <CardTitle className="text-lg text-white font-bold">
                        Bachelor of Computer Applications
                      </CardTitle>
                      <CardDescription className="text-gray-300 font-semibold text-sm">
                        ASC Degree College
                      </CardDescription>
                    </div>
                    <GraduationCap className="w-8 h-8 text-orange-400 flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300 font-bold">CGPA: 8.85</span>
                    <Badge className="bg-orange-600/30 text-orange-300 border-orange-500/60 font-bold text-xs">
                      Completed
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Research & Achievements Section */}
          <div>
            <h2 className="text-4xl font-bold mb-8 inline-block text-white">
              Research & <span className="text-orange-500">Achievements</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border border-orange-500/40 bg-slate-900/40 backdrop-blur-xl hover:bg-slate-900/60 hover:border-orange-400/70 transition-all duration-300 shadow-lg shadow-orange-500/30">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <CardTitle className="text-lg text-white font-bold">IEEE Published Paper</CardTitle>
                      <CardDescription className="text-gray-300 font-semibold text-sm">
                        Secure Folder Encryption using Homomorphic Encryption
                      </CardDescription>
                    </div>
                    <Award className="w-8 h-8 text-orange-400 flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-gray-300 text-sm">
                    Research paper focusing on advanced encryption techniques for secure data storage and
                    communication.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-orange-500/40 bg-slate-900/40 backdrop-blur-xl hover:bg-slate-900/60 hover:border-orange-400/70 transition-all duration-300 shadow-lg shadow-orange-500/30">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <CardTitle className="text-lg text-white font-bold">Smart India Hackathon 2024</CardTitle>
                      <CardDescription className="text-gray-300 font-semibold text-sm">Finalist</CardDescription>
                    </div>
                    <Award className="w-8 h-8 text-orange-400 flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-gray-300 text-sm">
                    Reached the finals of India's biggest hackathon, demonstrating innovative problem-solving skills.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-orange-900/20 to-black"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold inline-block text-white">
              Let's <span className="text-orange-500">Connect</span> & Create Something <span className="text-orange-500">Amazing</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-8 lg:space-y-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 inline-block"><span className="text-white">Get In</span> <span className="text-orange-500">Touch</span></h3>
                <div className="space-y-6 md:space-y-8">
                  <div className="flex items-start md:items-center group">
                    <div className="bg-gradient-to-r from-orange-600 to-orange-500 p-4 md:p-5 rounded-lg mr-4 md:mr-6 group-hover:scale-110 transition-transform flex-shrink-0">
                      <MapPin className="w-6 md:w-8 h-6 md:h-8 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-gray-400 text-xs md:text-sm">Location</p>
                      <p className="text-white font-bold text-base md:text-xl break-words">Bangalore, Karnataka</p>
                    </div>
                  </div>
                  <div className="flex items-start md:items-center group">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 md:p-5 rounded-lg mr-4 md:mr-6 group-hover:scale-110 transition-transform flex-shrink-0">
                      <Phone className="w-6 md:w-8 h-6 md:h-8 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-gray-400 text-xs md:text-sm">Phone</p>
                      <p className="text-white font-bold text-base md:text-xl break-words">+91 9380519585</p>
                    </div>
                  </div>
                  <div className="flex items-start md:items-center group">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 md:p-5 rounded-lg mr-4 md:mr-6 group-hover:scale-110 transition-transform flex-shrink-0">
                      <Mail className="w-6 md:w-8 h-6 md:h-8 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-gray-400 text-xs md:text-sm">Email</p>
                      <p className="text-white font-bold text-base md:text-xl break-words overflow-hidden text-ellipsis">gowthamnaidu.jr@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border border-orange-500/40 bg-slate-900/40 backdrop-blur-xl shadow-lg shadow-orange-500/30">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl text-white font-bold">Send a Message</CardTitle>
                <CardDescription className="text-gray-300 text-sm md:text-lg">
                  I'd love to hear from you. Send me a message and I'll respond as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-6 md:space-y-8">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-slate-800/50 border border-orange-500/50 text-white placeholder:text-gray-400 focus:border-orange-400 transition-all duration-300 text-base md:text-lg py-3 md:py-4"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-slate-800/50 border border-orange-500/50 text-white placeholder:text-gray-400 focus:border-orange-400 transition-all duration-300 text-base md:text-lg py-3 md:py-4"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                      className="bg-slate-800/50 border border-orange-500/50 text-white placeholder:text-gray-400 focus:border-orange-400 transition-all duration-300 text-base md:text-lg"
                    />
                  </div>
                  
                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center font-semibold">
                      ✅ Message sent successfully! I'll get back to you soon.
                    </div>
                  )}
                  
                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-center font-semibold">
                      ❌ Error sending message. Please try again.
                    </div>
                  )}
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white py-3 md:py-4 rounded-lg font-bold text-base md:text-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className={`w-5 md:w-6 h-5 md:h-6 mr-2 md:mr-3 ${isSubmitting ? "animate-spin" : ""}`} />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/90 backdrop-blur-xl border-t border-orange-500/40 text-white py-8 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-xl font-bold text-orange-400 mb-3">
              Goutham JR
            </div>
            <p className="text-gray-300 mb-4 text-sm">Building secure, innovative solutions for tomorrow</p>
            <div className="flex justify-center space-x-4 mb-4">
              <a href="https://github.com/Goutham-JR" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-orange-600/20 transform hover:scale-110 transition-all duration-300 p-2"
                >
                  <Github className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://linkedin.com/in/justgoutham" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-orange-600/20 transform hover:scale-110 transition-all duration-300 p-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Button>
              </a>
              <a href="mailto:gowthamnaidu.jr@gmail.com">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-orange-600/20 transform hover:scale-110 transition-all duration-300 p-2"
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </a>
            </div>
            <p className="text-gray-500 text-xs">© 2025 Goutham JR. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
