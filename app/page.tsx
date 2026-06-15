"use client"

import { Button } from "@/components/ui/button"
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
  ChevronDown,
  Star,
  BookOpen,
  Building2,
  ArrowUpRight,
  Sparkles,
  Layers,
  Terminal,
  Lock,
  Globe,
  Zap,
  TrendingUp,
  GitFork,
  Users,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect() } },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

const navItems = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
]

const skillCategories = [
  {
    title: "Languages",
    icon: Terminal,
    gradient: "from-blue-500 to-cyan-400",
    accent: "border-blue-500/30",
    iconBg: "bg-blue-500/15 text-blue-400",
    skills: ["C++", "C#", "C", "Java", "Python", "SQL"],
  },
  {
    title: "Web & Frameworks",
    icon: Globe,
    gradient: "from-indigo-500 to-purple-400",
    accent: "border-indigo-500/30",
    iconBg: "bg-indigo-500/15 text-indigo-400",
    skills: ["React", "Next.js", "Node.js", "MongoDB", "Express", "HTML/CSS", "JavaScript"],
  },
  {
    title: "Security & Crypto",
    icon: Lock,
    gradient: "from-purple-500 to-pink-400",
    accent: "border-purple-500/30",
    iconBg: "bg-purple-500/15 text-purple-400",
    skills: ["AES", "RSA", "FHE", "OpenSSL", "Key Rotation", "Network Security"],
  },
  {
    title: "Cloud & Tools",
    icon: Cloud,
    gradient: "from-violet-500 to-blue-400",
    accent: "border-violet-500/30",
    iconBg: "bg-violet-500/15 text-violet-400",
    skills: ["Google Cloud", "IBM Cloud", "Git/GitHub", "Postman", "VS Code", "JetBrains"],
  },
]

const projects = [
  {
    title: "CryptoLink",
    tag: "Secure Chat with Hybrid Encryption",
    desc: "CLI & GUI-based secure chat app in C++ using hybrid AES + RSA encryption. Implements OpenSSL for encryption and Boost.Asio for cross-platform networking with session key rotation.",
    badges: ["AES+RSA", "OpenSSL", "Boost.Asio"],
    date: "Aug 2025",
    gradient: "from-blue-500 to-cyan-400",
    span: "lg:col-span-1",
  },
  {
    title: "Zero8Zero",
    tag: "Cloud Telephony SaaS Platform",
    desc: "Full-stack SaaS platform for IVR-based voice campaigns with real-time analytics, contact management, audio handling, text-to-speech, and secure payment gateway integration.",
    badges: ["SaaS", "Full-Stack", "IVR", "Payments"],
    date: "Apr 2026",
    gradient: "from-purple-500 to-pink-400",
    span: "lg:col-span-2",
  },
  {
    title: "ECC Digital Signature Using NIST P-256",
    tag: "Cryptographic Analysis",
    desc: "Implementation and evaluation of elliptic curve-based digital signatures leveraging the NIST P-256 curve for blockchain and secure communication applications.",
    badges: ["ECC", "NIST P-256", "Blockchain"],
    date: "Jul 2025",
    gradient: "from-indigo-500 to-blue-400",
    span: "lg:col-span-1",
  },
  {
    title: "Bug Triage System",
    tag: "Machine Learning",
    desc: "Automated bug triage that categorizes and prioritizes issues using J46 Decision Tree, reducing triage time by 30% and improving developer workflow.",
    badges: ["ML", "J46 Tree", "Automation"],
    date: "Nov 2024 – Jan 2025",
    gradient: "from-amber-500 to-yellow-400",
    span: "lg:col-span-1",
  },
  {
    title: "Duelisto",
    tag: "Mobile Social Application",
    desc: "Social media platform built with Kotlin for Android, enabling users to connect, share ideas, and express thoughts freely.",
    badges: ["Kotlin", "Android", "Mobile"],
    date: "Dec 2024",
    gradient: "from-emerald-500 to-green-400",
    span: "lg:col-span-1",
  },
]

const experienceData = [
  {
    role: "Software Engineer Intern",
    company: "TechCiti Technologies Pvt Ltd",
    period: "Nov 2024 – Jan 2025",
    items: [
      "Built automated bug triage system, reducing triage time by 30%",
      "Improved ML model accuracy by 15% via feature engineering",
      "Automated CI/CD pipelines, cutting deployment cycles by 40%",
      "Collaborated cross-functionally on code reviews and documentation",
    ],
  },
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const { ref: heroRef, inView: heroIn } = useInView(0.1)
  const { ref: aboutRef, inView: aboutIn } = useInView()
  const { ref: workRef, inView: workIn } = useInView()
  const { ref: projectsRef, inView: projectsIn } = useInView()
  const { ref: skillsRef, inView: skillsIn } = useInView()
  const { ref: contactRef, inView: contactIn } = useInView()

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "work", "projects", "skills", "contact"]
      const sp = window.scrollY + 120
      setScrolled(window.scrollY > 50)

      for (const s of sections) {
        const el = document.getElementById(s)
        if (el) {
          const { offsetTop, offsetHeight } = el
          if (sp >= offsetTop && sp < offsetTop + offsetHeight) {
            setActiveSection(s)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const r = await fetch(
        "https://discord.com/api/webhooks/1441152099101708329/KmEc3ROLJUEHZPg8RMBweGHo0iSGFWVVGk25tSDDoRzQx0vB6QzbEQavLXrBnM4B7BXE",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            embeds: [{
              title: "New Portfolio Message!",
              description: formData.message,
              color: 10526880,
              fields: [
                { name: "Name", value: formData.name, inline: true },
                { name: "Email", value: formData.email, inline: true },
              ],
            }],
          }),
        }
      )
      if (r.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  return (
    <div className="min-h-screen bg-[#07070d] text-white overflow-hidden">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#07070d]" />
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-600/8 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[80%] h-[40%] bg-indigo-600/5 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,.12) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-blue-400/20 rounded-full"
            style={{
              left: `${2 + (i * 3.3) % 96}%`,
              top: `${10 + (i * 7.1) % 80}%`,
              animation: `pulse 6s ${i * 0.6}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#07070d]/80 backdrop-blur-2xl border-b border-blue-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button onClick={() => scrollTo("hero")} className="relative group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex items-center justify-center shadow-lg shadow-blue-600/30">
                  <span className="text-white font-black text-base">GJ</span>
                </div>
                <span className="hidden sm:block text-lg font-bold tracking-tight">Goutham J R</span>
              </div>
            </button>

            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-white bg-blue-600/15 border border-blue-500/20"
                      : "text-gray-400 hover:text-blue-300 hover:bg-blue-600/8"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="/Goutham_JR_Resume.pdf"
                download
                className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-5 py-2 rounded-xl text-sm font-semibold shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-105"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 bg-white/5 rounded-xl border border-white/10"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile */}
          <div
            className={`lg:hidden transition-all duration-400 ease-in-out ${
              mobileMenuOpen ? "max-h-80 opacity-100 pb-6" : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="space-y-1 pt-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? "text-white bg-blue-600/20 border border-blue-500/20"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="/Goutham_JR_Resume.pdf"
                download
                className="flex items-center gap-2 w-full mt-3 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section id="hero" ref={heroRef} className="min-h-screen flex items-center relative pt-24 pb-16 px-6 lg:px-8">
        <div className={`max-w-7xl mx-auto w-full transition-all duration-1000 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-blue-300 text-sm font-medium">Open to opportunities</span>
              </div>

              <div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                    Goutham
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    J R
                  </span>
                </h1>
                <div className="mt-4 h-1.5 w-32 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full" />
              </div>

              <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                Software Engineer & MCA Graduate. Building secure, innovative solutions at the intersection of cryptography, cloud, and full-stack development.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:gowthamnaidu.jr@gmail.com"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-4 rounded-xl font-semibold shadow-xl shadow-blue-600/30 transition-all duration-300 hover:scale-[1.03]"
                >
                  Get In Touch
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="https://github.com/Goutham-JR?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 border border-blue-500/25 text-blue-300 hover:text-white hover:bg-blue-600/15 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.03]"
                >
                  <Github className="w-5 h-5" />
                  View Projects
                </a>
              </div>

              {/* Social strip */}
              <div className="flex items-center gap-4 pt-4">
                <span className="text-xs text-gray-500 uppercase tracking-widest">Connect</span>
                <div className="h-px w-12 bg-gray-800" />
                <div className="flex gap-3">
                  {[
                    { href: "https://github.com/Goutham-JR", icon: Github },
                    { href: "https://linkedin.com/in/justgoutham", icon: () => (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    )},
                    { href: "mailto:gowthamnaidu.jr@gmail.com", icon: Mail },
                    { href: "https://wa.me/919380519585", icon: () => (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    )},
                  ].map(({ href, icon: Icon }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-white/5 hover:bg-blue-600/15 rounded-xl border border-white/10 hover:border-blue-500/30 text-gray-400 hover:text-blue-300 transition-all"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Visual */}
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-500/20 to-purple-600/20 rounded-full blur-3xl"></div>
                <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-[32px] overflow-hidden border-2 border-blue-400/20 shadow-2xl shadow-blue-600/15">
                  <img
                    src="/Goutham.jpeg"
                    alt="Goutham J R"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#07070d]/90 backdrop-blur-xl border border-blue-500/20 rounded-2xl px-5 py-3 shadow-xl animate-float-slow">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium text-blue-200">7+ Languages</span>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 bg-[#07070d]/90 backdrop-blur-xl border border-purple-500/20 rounded-2xl px-5 py-3 shadow-xl animate-float-medium">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-medium text-purple-200">2x Hackathon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-20 animate-bounce" style={{ animationDuration: "3s" }}>
            <ChevronDown className="w-5 h-5 text-blue-400/40" />
          </div>
        </div>
      </section>

      {/* ─── ABOUT + STATS (Bento) ─── */}
      <section id="about" ref={aboutRef} className="py-24 px-6 lg:px-8">
        <div className={`max-w-7xl mx-auto transition-all duration-700 ${aboutIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-14">
            <span className="text-xs text-blue-400/80 uppercase tracking-[0.2em] font-semibold">About</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Who I Am</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {/* Main bio - largest */}
            <div className="md:col-span-2 row-span-2 relative group">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-600/20 via-indigo-500/20 to-purple-600/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative h-full bg-[#0c0c14]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-8 md:p-10">
                <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-6" />
                <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl">
                  <p>
                    I'm an <span className="text-blue-300 font-semibold">MCA graduate</span> from RV Institute of Technology & Management, deeply passionate about{" "}
                    <span className="text-indigo-300 font-semibold">software engineering</span> and building robust, scalable applications.
                  </p>
                  <p>
                    Skilled in <span className="text-emerald-300 font-semibold">C++, C#, Java, Python and the MERN stack</span>, with a strong interest in
                    Cryptography and secure systems — including research in Homomorphic Encryption.
                  </p>
                  <p>
                    My work spans full-stack development, cybersecurity, cloud platforms, and machine learning, driven by a mission to build technology that is both powerful and secure.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick facts */}
            <div className="relative group">
              <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative h-full bg-[#0c0c14]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-6">
                <div className="space-y-5">
                  {[
                    { icon: MapPin, label: "Location", value: "Bangalore, KA" },
                    { icon: Phone, label: "Phone", value: "+91 9380519585" },
                    { icon: () => (
                      <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    ), label: "WhatsApp", value: "+91 9380519585" },
                    { icon: Mail, label: "Email", value: "gowthamnaidu.jr@gmail.com" },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="p-2 bg-blue-600/10 rounded-lg">
                        <Icon className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">{label}</p>
                        <p className="text-sm text-gray-200 font-medium">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats row */}
            {[
              { value: "7+", label: "Languages", icon: Code },
              { value: "12+", label: "Technologies", icon: Layers },
              { value: "5+", label: "Projects", icon: Zap },
            ].map(({ value, label, icon: Icon }) => (
              <div key={label} className="relative group">
                <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative bg-[#0c0c14]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-5 text-center">
                  <div className="flex justify-center mb-2">
                    <div className="p-2 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
                    {value}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SPOTLIGHT PROJECT ─── */}
      <section id="work" ref={workRef} className="py-24 px-6 lg:px-8">
        <div className={`max-w-7xl mx-auto transition-all duration-700 ${workIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-14">
            <span className="text-xs text-indigo-400/80 uppercase tracking-[0.2em] font-semibold">Featured Work</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3">
              <span className="bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">Spotlight Project</span>
            </h2>
          </div>

          <div className="relative group">
            <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-3xl blur-md opacity-40 group-hover:opacity-60 transition duration-500" />
            <div className="relative bg-[#0c0c14]/90 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600" />
              <div className="p-8 md:p-12 lg:p-16">
                <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center">
                  <div className="lg:col-span-3 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      <span className="text-indigo-300 text-sm font-medium">April 2026</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">Zero8Zero</h3>
                    <p className="text-indigo-200 font-medium text-lg">Cloud Telephony SaaS Platform</p>
                    <p className="text-gray-400 leading-relaxed">
                      Full-stack SaaS platform for IVR-based voice campaigns with real-time analytics, contact and agent management, audio handling, text-to-speech integration, and secure payment gateway (CCAvenue) for subscription billing. Designed with scalable modular architecture for production deployment.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["SaaS", "Full-Stack", "IVR", "Payments", "Real-time Analytics"].map((b) => (
                        <Badge key={b} className="bg-indigo-600/20 text-indigo-300 border-indigo-500/40">{b}</Badge>
                      ))}
                    </div>
                    <a
                      href="https://www.zero8zero.co.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 font-medium transition-colors group/link"
                    >
                      Visit Live Site
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/5">
                      <img
                        src="/Zero8Zero.png"
                        alt="Zero8Zero SaaS Platform"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section id="projects" ref={projectsRef} className="py-24 px-6 lg:px-8">
        <div className={`max-w-7xl mx-auto transition-all duration-700 ${projectsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-14">
            <span className="text-xs text-blue-400/80 uppercase tracking-[0.2em] font-semibold">Portfolio</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">All Projects</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projects.map((p) => (
              <div key={p.title} className={`relative group ${p.span}`}>
                <div className="absolute -inset-[1px] bg-gradient-to-r from-white/5 to-white/0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative h-full bg-[#0c0c14]/60 backdrop-blur-xl border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-1">
                  <div className={`h-1 bg-gradient-to-r ${p.gradient}`} />
                  <div className="p-6 md:p-7 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">{p.title}</h3>
                      <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition-colors flex-shrink-0 mt-1" />
                    </div>
                    <p className="text-gray-500 text-sm font-medium mb-2">{p.tag}</p>
                    <p className="text-gray-400 text-sm leading-relaxed flex-1">{p.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.badges.map((b) => (
                        <Badge key={b} className="bg-white/5 text-gray-300 border-white/10 text-xs">{b}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-4 pt-4 border-t border-white/5">
                      <Calendar className="w-3.5 h-3.5" />
                      {p.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section id="skills" ref={skillsRef} className="py-24 px-6 lg:px-8">
        <div className={`max-w-7xl mx-auto transition-all duration-700 ${skillsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-14">
            <span className="text-xs text-purple-400/80 uppercase tracking-[0.2em] font-semibold">Expertise</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3">
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">Skills & Stack</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {skillCategories.map((cat) => {
              const Icon = cat.icon
              return (
                <div key={cat.title} className="relative group">
                  <div className="absolute -inset-[1px] bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500" />
                  <div className="relative h-full bg-[#0c0c14]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6">
                    <div className={`h-1 w-12 bg-gradient-to-r ${cat.gradient} rounded-full mb-5`} />
                    <div className={`w-10 h-10 ${cat.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-white font-bold text-base mb-3">{cat.title}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((s) => (
                        <Badge
                          key={s}
                          variant="secondary"
                          className="bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 transition-colors text-xs"
                        >
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Stat strip */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "7+", label: "Programming Languages", icon: Code },
              { value: "12+", label: "Web Technologies", icon: Globe },
              { value: "3+", label: "Security Protocols", icon: Lock },
              { value: "12+", label: "Development Tools", icon: Cloud },
            ].map(({ value, label, icon: Icon }) => (
              <div key={label} className="bg-[#0c0c14]/60 backdrop-blur-sm border border-white/5 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
                  {value}
                </div>
                <div className="text-xs text-gray-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE + GITHUB + EDUCATION ─── */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Experience Timeline */}
          <div className="mb-24">
            <div className="text-center mb-14">
              <span className="text-xs text-blue-400/80 uppercase tracking-[0.2em] font-semibold">Career</span>
              <h2 className="text-4xl sm:text-5xl font-bold mt-3">
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Experience</span>
              </h2>
            </div>

            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-indigo-500 to-purple-600" />
              {experienceData.map((exp) => (
                <div key={exp.role} className="relative pl-16 pb-12 last:pb-0 group">
                  <div className="absolute left-[11px] top-1 w-[26px] h-[26px] rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 border-[3px] border-[#07070d] shadow-lg shadow-blue-600/30 z-10 flex items-center justify-center">
                    <Briefcase className="w-3 h-3 text-white" />
                  </div>
                  <div className="bg-[#0c0c14]/60 backdrop-blur-xl border border-white/5 hover:border-blue-500/20 rounded-2xl p-6 md:p-8 transition-all duration-500 hover:-translate-y-0.5">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <p className="text-blue-300/80 text-sm font-medium flex items-center gap-1.5 mt-0.5">
                          <Building2 className="w-3.5 h-3.5" />
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-xs text-gray-500 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2.5">
                      {exp.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60 mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub + Achievements */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* GitHub Card */}
            <div className="lg:col-span-2 relative group">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative h-full bg-[#0c0c14]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-blue-600/15 rounded-xl">
                    <Github className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">GitHub</h3>
                    <p className="text-xs text-gray-500">@Goutham-JR</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: "10+", label: "Repos", icon: GitFork },
                    { value: "5+", label: "Contributions", icon: TrendingUp },
                    { value: "50+", label: "Stars", icon: Star },
                  ].map(({ value, label, icon: Icon }) => (
                    <div key={label} className="text-center bg-white/5 rounded-xl p-3">
                      <Icon className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                      <div className="text-lg font-bold text-white">{value}</div>
                      <div className="text-[10px] text-gray-500">{label}</div>
                    </div>
                  ))}
                </div>
                <a
                  href="https://github.com/Goutham-JR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View profile <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* IEEE Paper */}
            <div className="relative group">
              <div className="absolute -inset-[1px] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative h-full bg-[#0c0c14]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-6">
                <div className="p-2.5 bg-indigo-600/15 rounded-xl w-fit mb-4">
                  <BookOpen className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-white font-bold text-sm mb-1">IEEE Published Paper</h3>
                <p className="text-gray-400 text-xs mb-2">Homomorphic Encryption with Microsoft SEAL</p>
                <p className="text-gray-500 text-[11px] leading-relaxed">
                  Published in IEEE COMP-SIF Conference, pp 1-6, March 2025.
                </p>
              </div>
            </div>

            {/* SIH + Education */}
            <div className="relative group">
              <div className="absolute -inset-[1px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative h-full bg-[#0c0c14]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-6">
                <div className="p-2.5 bg-purple-600/15 rounded-xl w-fit mb-4">
                  <Award className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-white font-bold text-sm mb-1">Smart India Hackathon 2024</h3>
                <p className="text-gray-400 text-xs mb-2">Final Stage Participant</p>
                <p className="text-gray-500 text-[11px] leading-relaxed">
                  Reached finals of India's largest hackathon.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Certs */}
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* MCA */}
            <div className="relative group">
              <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-500/15 to-indigo-500/15 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-[#0c0c14]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="w-5 h-5 text-blue-400" />
                  <div>
                    <h4 className="text-white font-bold text-sm">MCA</h4>
                    <p className="text-gray-500 text-xs">RVITM</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">CGPA: 8.86</span>
                  <Badge className="bg-blue-600/15 text-blue-300 border-blue-500/30 text-[10px]">Dec 2025</Badge>
                </div>
              </div>
            </div>

            {/* BCA */}
            <div className="relative group">
              <div className="absolute -inset-[1px] bg-gradient-to-br from-indigo-500/15 to-purple-500/15 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-[#0c0c14]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="w-5 h-5 text-indigo-400" />
                  <div>
                    <h4 className="text-white font-bold text-sm">BCA</h4>
                    <p className="text-gray-500 text-xs">ASC Degree College</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">CGPA: 8.85</span>
                  <Badge className="bg-indigo-600/15 text-indigo-300 border-indigo-500/30 text-[10px]">Nov 2023</Badge>
                </div>
              </div>
            </div>

            {/* C# Cert */}
            <div className="relative group">
              <div className="absolute -inset-[1px] bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-[#0c0c14]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-5 h-5 text-purple-400" />
                  <div>
                    <h4 className="text-white font-bold text-sm">C# with Microsoft</h4>
                    <p className="text-gray-500 text-xs">Microsoft</p>
                  </div>
                </div>
                <Badge className="bg-purple-600/15 text-purple-300 border-purple-500/30 text-[10px]">2025</Badge>
              </div>
            </div>

            {/* IBM AI Cert */}
            <div className="relative group">
              <div className="absolute -inset-[1px] bg-gradient-to-br from-pink-500/15 to-rose-500/15 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-[#0c0c14]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-5 h-5 text-pink-400" />
                  <div>
                    <h4 className="text-white font-bold text-sm">IBM AI</h4>
                    <p className="text-gray-500 text-xs">IBM</p>
                  </div>
                </div>
                <Badge className="bg-pink-600/15 text-pink-300 border-pink-500/30 text-[10px]">2024</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" ref={contactRef} className="py-24 px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent pointer-events-none" />
        <div className={`max-w-7xl mx-auto relative transition-all duration-700 ${contactIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-14">
            <span className="text-xs text-blue-400/80 uppercase tracking-[0.2em] font-semibold">Contact</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Get In Touch</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-3">
                <p className="text-gray-400 leading-relaxed">
                  Have a project in mind or just want to say hi? I'm always open to discussing new opportunities, collaborations, and ideas.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "gowthamnaidu.jr@gmail.com", href: "mailto:gowthamnaidu.jr@gmail.com" },
                  { icon: Phone, label: "Phone", value: "+91 9380519585", href: "tel:+919380519585" },
                  { icon: () => (
                    <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    ), label: "WhatsApp", value: "+91 9380519585", href: "https://wa.me/919380519585" },
                  { icon: MapPin, label: "Location", value: "Bangalore, Karnataka" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="p-3 bg-blue-600/10 rounded-xl">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm text-gray-200 hover:text-blue-300 transition-colors font-medium">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-gray-200 font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href="https://github.com/Goutham-JR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-blue-600/15 rounded-xl border border-white/10 hover:border-blue-500/30 text-gray-400 hover:text-blue-300 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/justgoutham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-blue-600/15 rounded-xl border border-white/10 hover:border-blue-500/30 text-gray-400 hover:text-blue-300 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a
                  href="mailto:gowthamnaidu.jr@gmail.com"
                  className="p-3 bg-white/5 hover:bg-blue-600/15 rounded-xl border border-white/10 hover:border-blue-500/30 text-gray-400 hover:text-blue-300 transition-all"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/919380519585"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-blue-600/15 rounded-xl border border-white/10 hover:border-blue-500/30 text-gray-400 hover:text-blue-300 transition-all"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 relative group">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-600/20 via-indigo-500/20 to-purple-600/20 rounded-2xl blur-sm" />
              <div className="relative bg-[#0c0c14]/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
                <p className="text-sm text-gray-500 mb-6">Fill out the form and I'll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500/50 transition-all py-6 rounded-xl"
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500/50 transition-all py-6 rounded-xl"
                    />
                  </div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500/50 transition-all rounded-xl"
                  />

                  {submitStatus === "success" && (
                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-300 text-sm text-center font-medium">
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-300 text-sm text-center font-medium">
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white py-6 rounded-xl font-semibold shadow-xl shadow-blue-600/30 transition-all hover:scale-[1.01] disabled:opacity-50"
                  >
                    <Send className={`w-4 h-4 mr-2 ${isSubmitting ? "animate-spin" : ""}`} />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-white/5 py-10 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
              <span className="text-white font-black text-xs">GJ</span>
            </div>
            <span className="text-sm text-gray-400">Goutham J R</span>
          </div>
          <p className="text-xs text-gray-600">© 2025 Goutham J R. All rights reserved.</p>
          <div className="flex gap-3">
            <a href="https://github.com/Goutham-JR" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-300 transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com/in/justgoutham" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-300 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
            <a href="mailto:gowthamnaidu.jr@gmail.com" className="text-gray-500 hover:text-blue-300 transition-colors">
              <Mail className="w-4 h-4" />
            </a>
            <a href="https://wa.me/919380519585" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-300 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
