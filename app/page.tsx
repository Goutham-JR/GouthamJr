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

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Professional Animated Background */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Clean gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950"></div>

        {/* Subtle tech pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10"></div>
        </div>

        {/* Professional geometric grid - fixed repeat */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
        linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
      `,
            backgroundSize: "100px 100px",
            backgroundRepeat: "repeat",
            backgroundPosition: "0 0",
          }}
        ></div>

        {/* Full coverage floating elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl animate-float-medium"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-2xl animate-float-fast"></div>
        <div className="absolute top-10 right-10 w-48 h-48 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-gradient-to-r from-violet-500/5 to-pink-500/5 rounded-full blur-3xl animate-float-medium"></div>

        {/* Enhanced tech particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-tech-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
            }}
          ></div>
        ))}

        {/* Professional accent lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>
        </div>

        {/* Subtle code-like pattern - fixed coverage */}
        <div className="absolute inset-0 opacity-3">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `
          radial-gradient(circle at 20% 30%, #3b82f6 0%, transparent 25%),
          radial-gradient(circle at 80% 70%, #6366f1 0%, transparent 25%),
          radial-gradient(circle at 60% 20%, #8b5cf6 0%, transparent 25%),
          radial-gradient(circle at 40% 80%, #8b5cf6 0%, transparent 25%)
        `,
              backgroundSize: "800px 800px, 600px 600px, 1000px 1000px, 700px 700px",
              animation: "tech-float 40s ease-in-out infinite",
            }}
          ></div>
        </div>
      </div>

      {/* Professional cursor effect */}
      <div
        className="fixed w-6 h-6 bg-blue-400/10 rounded-full blur-sm pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      ></div>

      {/* Ultra Vibrant Professional Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-slate-950/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl"
            : "bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/30"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Neon Logo & Brand */}
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 rounded-xl blur-lg opacity-60 group-hover:opacity-80 transition duration-300 animate-rainbow-glow"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-600 rounded-xl border-2 border-white/20 flex items-center justify-center shadow-2xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-violet-400 to-fuchsia-400 rounded-lg flex items-center justify-center animate-pulse">
                    <span className="text-black font-bold text-xl">GJ</span>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent animate-rainbow-text">
                  Goutham JR
                </h1>
                <p className="text-sm bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent font-semibold tracking-wide">
                  Aspiring Software Engineer & MCA Student
                </p>
              </div>
            </div>

            {/* Vibrant Navigation */}
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
                  className={`relative px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-xl group ${
                    activeSection === item.id
                      ? "text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 shadow-lg shadow-violet-500/50"
                      : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-violet-600/20 hover:to-fuchsia-600/20"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-xl animate-pulse"></div>
                  )}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-400 group-hover:w-full transition-all duration-300 rounded-full"></div>
                </button>
              ))}
            </nav>

            {/* Neon Social & CTA */}
            <div className="flex items-center space-x-4">
              {/* Glowing Social Links */}
              <div className="hidden md:flex items-center space-x-3">
                <a
                  href="https://github.com/Goutham-JR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-violet-600 hover:to-purple-600 rounded-xl border border-gray-700 hover:border-violet-500 transition-all duration-300 shadow-lg hover:shadow-violet-500/50"
                >
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity border border-violet-500/50 shadow-lg shadow-violet-500/20">
                    GitHub
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/justgoutham/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-500 hover:to-cyan-500 rounded-xl border border-blue-700 hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
                >
                  <svg
                    className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity border border-cyan-500/50 shadow-lg shadow-cyan-500/20">
                    LinkedIn
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                  </div>
                </a>

                <a
                  href="mailto:gowthamnaidu.jr@gmail.com"
                  className="group relative p-3 bg-gradient-to-r from-emerald-800 to-green-900 hover:from-emerald-500 hover:to-green-500 rounded-xl border border-emerald-700 hover:border-emerald-400 transition-all duration-300 shadow-lg hover:shadow-emerald-500/50"
                >
                  <Mail className="w-5 h-5 text-emerald-400 group-hover:text-white transition-colors" />
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity border border-emerald-500/50 shadow-lg shadow-emerald-500/20">
                    Email
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                  </div>
                </a>
              </div>

              {/* Electric CTA Button */}
              <a
                href="/Goutham 3rd Sem .pdf" 
                download
                className="relative group bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 hover:from-pink-400 hover:via-violet-400 hover:to-cyan-400 text-white px-8 py-3 rounded-xl font-bold shadow-2xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300 border-0 animate-rainbow-glow inline-block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-violet-600 to-cyan-600 rounded-xl blur opacity-50 group-hover:opacity-70 transition-opacity animate-pulse"></div>
                <span className="relative flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Resume
                </span>
              </a>


              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 rounded-xl border border-violet-500 transition-all duration-300 shadow-lg shadow-violet-500/50"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
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
                      ? "text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-violet-600/30 hover:to-fuchsia-600/30"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile Social Links */}
              <div className="flex justify-center space-x-4 pt-4 border-t border-violet-500/30">
                <a
                  href="https://github.com/Goutham-JR"
                  className="p-2 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg shadow-lg"
                >
                  <Github className="w-5 h-5 text-gray-300" />
                </a>
                <a
                  href="https://linkedin.com/in/justgoutham"
                  className="p-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg shadow-lg"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="mailto:gowthamnaidu.jr@gmail.com"
                  className="p-2 bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg shadow-lg"
                >
                  <Mail className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="mb-8">
              <div className="relative inline-block mb-8">
                <div className="absolute -inset-6 bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 rounded-full blur-2xl opacity-50 animate-rainbow-pulse"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-full blur-xl opacity-40 animate-rainbow-pulse delay-1000"></div>
                <img
                  src="/Goutham.jpeg"
                  alt="Goutham JR"
                  className="relative w-52 h-52 rounded-full mx-auto object-cover border-4 border-white/30 shadow-2xl transform hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h1 className="text-7xl sm:text-8xl font-bold mb-8 animate-rainbow-text">
                <span className="bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Goutham JR
                </span>
              </h1>

              <p className="text-3xl mb-10 font-light">
                <span className="text-cyan-400 animate-neon-glow">Aspiring Software Engineering</span> •
                <span className="text-violet-400 animate-neon-glow delay-300"> Code Enthusiast</span> •
                <span className="text-fuchsia-400 animate-neon-glow delay-600"> MCA @RVITM'25</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="mailto:gowthamnaidu.jr@gmail.com"
                    className="bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 hover:from-pink-400 hover:via-violet-400 hover:to-cyan-400 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-pink-500/50 transform hover:scale-110 transition-all duration-300 animate-rainbow-glow inline-flex items-center">
                    <Mail className="w-6 h-6 mr-3" />
                    Get In Touch
                  </a>

                <a
                  href="https://github.com/Goutham-JR?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-violet-400 text-violet-400 hover:text-white hover:bg-gradient-to-r hover:from-violet-600 hover:to-fuchsia-600 px-10 py-5 rounded-2xl font-bold text-lg transform hover:scale-110 transition-all duration-300 bg-transparent shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 inline-flex items-center">
                  <Github className="w-6 h-6 mr-3" />
                  View Projects
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent animate-rainbow-text">
            About Me
          </h2>
          <Card className="border-2 border-violet-500/50 bg-black/60 backdrop-blur-xl hover:bg-black/70 hover:border-violet-400 transition-all duration-500 transform hover:-translate-y-4 shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50">
            <CardContent className="p-10">
              <div className="text-xl text-gray-200 leading-relaxed text-center">
                <p className="mb-6">
                  I'm an <span className="text-cyan-400 font-bold animate-neon-glow">MCA student</span> at RV Institute of Technology & Management, deeply passionate about{" "}
                  <span className="text-violet-400 font-bold animate-neon-glow">software engineering</span> and building robust, scalable{" "}
                  <span className="text-fuchsia-400 font-bold animate-neon-glow">Applications</span>.
                </p>
                <p>
                  Skilled in <span className="text-emerald-400 font-bold animate-neon-glow">C++, Java, python and the MERN stack</span>, with a strong interest in
                  <span className="text-orange-400 font-bold animate-neon-glow"> Cryptography</span> and secure systems — including research in
                  <span className="text-orange-400 font-bold animate-neon-glow"> Homomorphic Encryption</span>.
                </p>
              </div>

            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent animate-rainbow-text">
            Skills & Expertise
          </h2>

          {/* Modern Card Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Programming Languages */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <Card className="relative bg-black/80 backdrop-blur-xl border-2 border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 transform hover:-translate-y-2 shadow-2xl hover:shadow-cyan-500/50 rounded-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-400"></div>
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-8 h-8 text-cyan-400 drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-xl text-white font-bold group-hover:text-cyan-400 transition-colors">
                    Programming
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {["C++", "C#",  "C", "Java", "Python", "SQL"].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/40 transition-colors border border-cyan-500/50 font-semibold px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Web Development */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <Card className="relative bg-black/80 backdrop-blur-xl border-2 border-violet-500/30 hover:border-violet-400/60 transition-all duration-500 transform hover:-translate-y-2 shadow-2xl hover:shadow-violet-500/50 rounded-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-400 to-purple-400"></div>
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Database className="w-8 h-8 text-violet-400 drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-xl text-white font-bold group-hover:text-violet-400 transition-colors">
                    Web Development
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "MongoDB", "Express", "J2EE", "HTML", "JavaScript", "CSS"].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-violet-500/20 text-violet-300 hover:bg-violet-500/40 transition-colors border border-violet-500/50 font-semibold px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Cybersecurity */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <Card className="relative bg-black/80 backdrop-blur-xl border-2 border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-500 transform hover:-translate-y-2 shadow-2xl hover:shadow-emerald-500/50 rounded-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-green-400"></div>
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-emerald-400 drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-xl text-white font-bold group-hover:text-emerald-400 transition-colors">
                    Cybersecurity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {["AES Encryption", "RSA", "Homomorphic Encryption", "OpenSSL", "Network Security"].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/40 transition-colors border border-emerald-500/50 font-semibold px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Cloud & Tools */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <Card className="relative bg-black/80 backdrop-blur-xl border-2 border-orange-500/30 hover:border-orange-400/60 transition-all duration-500 transform hover:-translate-y-2 shadow-2xl hover:shadow-orange-500/50 rounded-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-red-400"></div>
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Cloud className="w-8 h-8 text-orange-400 drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-xl text-white font-bold group-hover:text-orange-400 transition-colors">
                    Cloud & Tools
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {["Google Cloud", "IBM Cloud", "Git", "VS Code", "Postman"].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-orange-500/20 text-orange-300 hover:bg-orange-500/40 transition-colors border border-orange-500/50 font-semibold px-3 py-1"
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
                <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform">
                  6+
                </div>
                <div className="text-gray-300 font-medium">Programming Languages</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-violet-400 mb-2 group-hover:scale-110 transition-transform">
                  10+
                </div>
                <div className="text-gray-300 font-medium">Web Technologies</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-emerald-400 mb-2 group-hover:scale-110 transition-transform">
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
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent animate-rainbow-text">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Existing CryptoLink Card - made more compact */}
            <Card className="group border-2 border-cyan-500/50 bg-black/60 backdrop-blur-xl hover:bg-black/70 hover:border-cyan-400 transition-all duration-500 transform hover:-translate-y-4 overflow-hidden shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/60">
              <div className="h-1 bg-gradient-to-r from-cyan-400 to-blue-400 animate-rainbow-glow"></div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors font-bold">
                    CryptoLink
                  </CardTitle>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:scale-125 transition-all cursor-pointer animate-neon-glow" />
                </div>
                <CardDescription className="text-gray-300 font-semibold">Secure Chat Application</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-200 mb-4 text-sm">
                  A secure messaging application implementing end-to-end encryption for private communications.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/50 text-xs">OpenSSL</Badge>
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/50 text-xs">Security</Badge>
                  <Badge className="bg-violet-500/20 text-violet-300 border-violet-500/50 text-xs">Boost.Asio</Badge>
                </div>
                <div className="flex items-center text-gray-400 text-xs">
                  <Calendar className="w-4 h-4 mr-2" />
                  May 2025 – Ongoing
                </div>
              </CardContent>
            </Card>

            {/* Existing IoT Communication Card - made more compact */}
            <Card className="group border-2 border-emerald-500/50 bg-black/60 backdrop-blur-xl hover:bg-black/70 hover:border-emerald-400 transition-all duration-500 transform hover:-translate-y-4 overflow-hidden shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/60">
              <div className="h-1 bg-gradient-to-r from-emerald-400 to-green-400 animate-rainbow-glow"></div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-white group-hover:text-emerald-400 transition-colors font-bold">
                    IoT Communication
                  </CardTitle>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 group-hover:scale-125 transition-all cursor-pointer animate-neon-glow" />
                </div>
                <CardDescription className="text-gray-300 font-semibold">Xbee Protocol Implementation</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-200 mb-4 text-sm">
                  Developed IoT communication system using Xbee protocol for wireless device connectivity.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/50 text-xs">IoT</Badge>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/50 text-xs">Xbee</Badge>
                  <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/50 text-xs">Wireless</Badge>
                </div>
                <div className="flex items-center text-gray-400 text-xs">
                  <Calendar className="w-4 h-4 mr-2" />
                  Feb 2022
                </div>
              </CardContent>
            </Card>

            {/* Existing Web Portfolio Card - made more compact */}
            <Card className="group border-2 border-fuchsia-500/50 bg-black/60 backdrop-blur-xl hover:bg-black/70 hover:border-fuchsia-400 transition-all duration-500 transform hover:-translate-y-4 overflow-hidden shadow-2xl shadow-fuchsia-500/30 hover:shadow-fuchsia-500/60">
              <div className="h-1 bg-gradient-to-r from-fuchsia-400 to-pink-400 animate-rainbow-glow"></div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-white group-hover:text-fuchsia-400 transition-colors font-bold">
                    Web Portfolio
                  </CardTitle>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-fuchsia-400 group-hover:scale-125 transition-all cursor-pointer animate-neon-glow" />
                </div>
                <CardDescription className="text-gray-300 font-semibold">J2EE Implementation</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-200 mb-4 text-sm">
                  Professional portfolio website built using J2EE framework with dynamic content management.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/50 text-xs">J2EE</Badge>
                  <Badge className="bg-pink-500/20 text-pink-300 border-pink-500/50 text-xs">Web</Badge>
                  <Badge className="bg-violet-500/20 text-violet-300 border-violet-500/50 text-xs">Portfolio</Badge>
                </div>
                <div className="flex items-center text-gray-400 text-xs">
                  <Calendar className="w-4 h-4 mr-2" />
                  Jan 2023
                </div>
              </CardContent>
            </Card>

            {/* New Project 1: Cloud Security Dashboard - compact */}
            <Card className="group border-2 border-indigo-500/50 bg-black/60 backdrop-blur-xl hover:bg-black/70 hover:border-indigo-400 transition-all duration-500 transform hover:-translate-y-4 overflow-hidden shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/60">
              <div className="h-1 bg-gradient-to-r from-indigo-400 to-purple-400 animate-rainbow-glow"></div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-white group-hover:text-indigo-400 transition-colors font-bold">
                    ECC Digital Signature Using NIST P-256 with Analysis
                  </CardTitle>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-indigo-400 group-hover:scale-125 transition-all cursor-pointer animate-neon-glow" />
                </div>
                <CardDescription className="text-gray-300 font-semibold">Real-time Security Monitoring</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-200 mb-4 text-sm">
                  A secure implementation and evaluation of elliptic curve-based digital signatures leveraging the NIST P-256 curve.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/50 text-xs">Block Chain</Badge>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/50 text-xs">ECC</Badge>
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/50 text-xs">Comparsion</Badge>
                </div>
                <div className="flex items-center text-gray-400 text-xs">
                  <Calendar className="w-4 h-4 mr-2" />
                  Jul 2025
                </div>
              </CardContent>
            </Card>

            {/* New Project 2: Blockchain Voting System - compact */}
            <Card className="group border-2 border-yellow-500/50 bg-black/60 backdrop-blur-xl hover:bg-black/70 hover:border-yellow-400 transition-all duration-500 transform hover:-translate-y-4 overflow-hidden shadow-2xl shadow-yellow-500/30 hover:shadow-yellow-500/60">
              <div className="h-1 bg-gradient-to-r from-yellow-400 to-orange-400 animate-rainbow-glow"></div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-white group-hover:text-yellow-400 transition-colors font-bold">
                    Duelisto - A Mobile Application
                  </CardTitle>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 group-hover:scale-125 transition-all cursor-pointer animate-neon-glow" />
                </div>
                <CardDescription className="text-gray-300 font-semibold">Mobile Application Development</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-200 mb-4 text-sm">
                  A social media platform that enables users to connect, share ideas, and express their thoughts freely.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/50 text-xs">Mobile App</Badge>
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/50 text-xs">
                    Kotlin
                  </Badge>
                  <Badge className="bg-red-500/20 text-red-300 border-red-500/50 text-xs">Android </Badge>
                </div>
                <div className="flex items-center text-gray-400 text-xs">
                  <Calendar className="w-4 h-4 mr-2" />
                  Dec 2024
                </div>
              </CardContent>
            </Card>

            {/* New Project 3: AI-Powered Threat Detection - compact */}
            <Card className="group border-2 border-rose-500/50 bg-black/60 backdrop-blur-xl hover:bg-black/70 hover:border-rose-400 transition-all duration-500 transform hover:-translate-y-4 overflow-hidden shadow-2xl shadow-rose-500/30 hover:shadow-rose-500/60">
              <div className="h-1 bg-gradient-to-r from-rose-400 to-pink-400 animate-rainbow-glow"></div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-white group-hover:text-rose-400 transition-colors font-bold">
                    Bug Triage 
                  </CardTitle>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-rose-400 group-hover:scale-125 transition-all cursor-pointer animate-neon-glow" />
                </div>
                <CardDescription className="text-gray-300 font-semibold">Machine Learning for Testing</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-200 mb-4 text-sm">
                  Bug triage is the process of categorizing and prioritizing issues, enabling developers to address the most critical bugs first.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-rose-500/20 text-rose-300 border-rose-500/50 text-xs">ML</Badge>
                  <Badge className="bg-pink-500/20 text-pink-300 border-pink-500/50 text-xs">J46 Decision Tree</Badge>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/50 text-xs">Bug</Badge>
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
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent animate-rainbow-text">
            Professional Experience
          </h2>
          <Card className="border-2 border-violet-500/50 bg-black/60 backdrop-blur-xl hover:bg-black/70 hover:border-violet-400 transition-all duration-500 transform hover:-translate-y-4 overflow-hidden shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/60">
            <div className="h-2 bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 animate-rainbow-glow"></div>
            <CardHeader className="bg-black/30">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-3xl text-white mb-3 font-bold">Software Engineer Intern</CardTitle>
                  <CardDescription className="text-xl text-gray-200 font-bold">TechCiti Technologies Private Limited</CardDescription>
                </div>
                <div className="bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 p-5 rounded-2xl animate-rainbow-glow">
                  <Briefcase className="w-10 h-10 text-white" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="flex items-center text-gray-400 mb-8">
                <Calendar className="w-5 h-5 mr-3" />
                <span className="bg-violet-500/20 text-violet-300 px-4 py-2 rounded-full font-bold border border-violet-500/50">
                  Nov 2024 – Jan 2025
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2 mr-4 flex-shrink-0 animate-neon-glow"></div>
                    <p className="text-gray-200 text-lg">
                      Developed and maintained Bug Triage using modern technologies
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-violet-400 rounded-full mt-2 mr-4 flex-shrink-0 animate-neon-glow"></div>
                    <p className="text-gray-200 text-lg">
                      Collaborated with cross-functional teams to deliver high-quality solutions
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full mt-2 mr-4 flex-shrink-0 animate-neon-glow"></div>
                    <p className="text-gray-200 text-lg">
                      Implemented J46 Decision Tree for the prioritizing work in application development
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-orange-400 rounded-full mt-2 mr-4 flex-shrink-0 animate-neon-glow"></div>
                    <p className="text-gray-200 text-lg">
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
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-rainbow-text">
                Education
              </h2>
              <div className="space-y-8">
                <Card className="border-2 border-cyan-500/50 bg-black/60 backdrop-blur-xl hover:bg-black/70 hover:border-cyan-400 transition-all duration-300 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/60">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl text-white font-bold">Master of Computer Applications</CardTitle>
                        <CardDescription className="text-gray-300 font-semibold text-lg">
                          RV Institute of Technology & Management
                        </CardDescription>
                      </div>
                      <GraduationCap className="w-10 h-10 text-cyan-400 animate-neon-glow" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-200 font-bold text-lg">CGPA: 8.67</span>
                      <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/50 font-bold">Current</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-emerald-500/50 bg-black/60 backdrop-blur-xl hover:bg-black/70 hover:border-emerald-400 transition-all duration-300 shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/60">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl text-white font-bold">
                          Bachelor of Computer Applications
                        </CardTitle>
                        <CardDescription className="text-gray-300 font-semibold text-lg">
                          ASC Degree College
                        </CardDescription>
                      </div>
                      <GraduationCap className="w-10 h-10 text-emerald-400 animate-neon-glow" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-200 font-bold text-lg">CGPA: 8.85</span>
                      <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/50 font-bold">
                        Completed
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent animate-rainbow-text">
                Research & Achievements
              </h2>
              <div className="space-y-8">
                <Card className="border-2 border-violet-500/50 bg-black/60 backdrop-blur-xl hover:bg-black/70 hover:border-violet-400 transition-all duration-300 shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/60">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl text-white font-bold">IEEE Published Paper</CardTitle>
                        <CardDescription className="text-gray-300 font-semibold text-lg">
                          Secure Folder Encryption using Homomorphic Encryption
                        </CardDescription>
                      </div>
                      <Award className="w-10 h-10 text-violet-400 animate-neon-glow" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200 text-lg">
                      Research paper focusing on advanced encryption techniques for secure data storage and
                      communication.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-orange-500/50 bg-black/60 backdrop-blur-xl hover:bg-black/70 hover:border-orange-400 transition-all duration-300 shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/60">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl text-white font-bold">Smart India Hackathon 2024</CardTitle>
                        <CardDescription className="text-gray-300 font-semibold text-lg">Finalist</CardDescription>
                      </div>
                      <Award className="w-10 h-10 text-orange-400 animate-neon-glow" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200 text-lg">
                      Reached the finals of India's biggest hackathon, demonstrating innovative problem-solving skills.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-violet-900/50 to-black"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent animate-rainbow-text">
            Let's Connect & Create Something Amazing
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-10">
              <div>
                <h3 className="text-3xl font-bold mb-8 text-white">Get In Touch</h3>
                <div className="space-y-8">
                  <div className="flex items-center group">
                    <div className="bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 p-5 rounded-2xl mr-6 group-hover:scale-110 transition-transform animate-rainbow-glow">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white font-bold text-xl">Bangalore, Karnataka</p>
                    </div>
                  </div>
                  <div className="flex items-center group">
                    <div className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 p-5 rounded-2xl mr-6 group-hover:scale-110 transition-transform animate-rainbow-glow">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-white font-bold text-xl">+91 9380519585</p>
                    </div>
                  </div>
                  <div className="flex items-center group">
                    <div className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 p-5 rounded-2xl mr-6 group-hover:scale-110 transition-transform animate-rainbow-glow">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white font-bold text-xl">gowthamnaidu.jr@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-2 border-violet-500/50 bg-black/60 backdrop-blur-xl shadow-2xl shadow-violet-500/30">
              <CardHeader>
                <CardTitle className="text-3xl text-white font-bold">Send a Message</CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  I'd love to hear from you. Send me a message and I'll respond as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-8">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="bg-black/50 border-2 border-violet-500/50 text-white placeholder:text-gray-400 focus:border-violet-400 transition-all duration-300 text-lg py-4"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-black/50 border-2 border-violet-500/50 text-white placeholder:text-gray-400 focus:border-violet-400 transition-all duration-300 text-lg py-4"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={5}
                      className="bg-black/50 border-2 border-violet-500/50 text-white placeholder:text-gray-400 focus:border-violet-400 transition-all duration-300 text-lg"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 hover:from-pink-400 hover:via-violet-400 hover:to-cyan-400 text-white py-4 rounded-2xl font-bold text-lg transform hover:scale-105 transition-all duration-300 animate-rainbow-glow">
                    <Send className="w-6 h-6 mr-3" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/90 backdrop-blur-xl border-t-2 border-violet-500/50 text-white py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent mb-6 animate-rainbow-text">
              Goutham JR
            </div>
            <p className="text-gray-300 mb-8 text-lg">Building secure, innovative solutions for tomorrow</p>
            <div className="flex justify-center space-x-8 mb-10">
              <Button
                variant="ghost"
                size="lg"
                className="text-gray-400 hover:text-white hover:bg-violet-600/20 transform hover:scale-125 transition-all duration-300 p-4"
              >
                <Github className="w-8 h-8" />
              </Button>
              <a href="https://linkedin.com/in/justgoutham" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-gray-400 hover:text-white hover:bg-violet-600/20 transform hover:scale-125 transition-all duration-300 p-4"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Button>
              </a>
              <Button
                variant="ghost"
                size="lg"
                className="text-gray-400 hover:text-white hover:bg-violet-600/20 transform hover:scale-125 transition-all duration-300 p-4"
              >
                <Mail className="w-8 h-8" />
              </Button>
            </div>
            <p className="text-gray-500 text-lg">© 2025 Goutham JR. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
