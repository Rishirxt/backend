"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Code, Users, Zap, Globe, Calendar, Trophy, ChevronUp, Briefcase, GraduationCap, Palette, BookOpen } from "lucide-react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import { useEffect, useState, useCallback, useMemo, lazy, Suspense } from "react"
import { animations, getTransition } from "@/lib/animations"

// Lazy load heavy WebGL components for better performance

export default function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001
  })

  // Performance optimization: use transform instead of changing width
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    setShowScrollTop(window.scrollY > 300)
  }, [])

  useEffect(() => {
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [handleScroll])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const features = [
    {
      icon: Code,
      title: "Open Source Projects",
      description: "Contribute to real-world projects and build your portfolio with meaningful code.",
    },
    {
      icon: Users,
      title: "Global Community",
      description: "Connect with passionate developers from around the world and learn together.",
    },
    {
      icon: Zap,
      title: "Skill Development",
      description: "Level up your coding skills with mentorship and hands-on experience.",
    },
    {
      icon: Globe,
      title: "Remote Collaboration",
      description: "Work with distributed teams and master modern development workflows.",
    },
  ]


  const roles = [
    { 
      name: "Project Leads", 
      color: "bg-blue-500", 
      iconColor: "text-blue-500",
      icon: Briefcase,
      description: "Guide and manage open-source projects" 
    },
    { 
      name: "Mentors", 
      color: "bg-teal-500", 
      iconColor: "text-teal-500",
      icon: GraduationCap,
      description: "Share knowledge and guide newcomers" 
    },
    { 
      name: "Contributors", 
      color: "bg-green-500", 
      iconColor: "text-green-500",
      icon: Code,
      description: "Write code and build amazing features" 
    },
    { 
      name: "Designers", 
      color: "bg-purple-500", 
      iconColor: "text-purple-500",
      icon: Palette,
      description: "Create beautiful and intuitive interfaces" 
    },
    { 
      name: "Learners", 
      color: "bg-orange-500", 
      iconColor: "text-orange-500",
      icon: BookOpen,
      description: "Start your open-source journey" 
    },
  ]

  return (
    <div className="min-h-screen bg-black scroll-smooth">
        {/* Optimized Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary z-50 origin-left gpu-accelerated"
          style={{ scaleX }}
        />
        
        <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Light mode contrast overlay */}
        <div className="absolute inset-0 bg-white/5 dark:bg-transparent" />
        
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={animations.scale.initial}
              animate={animations.scale.animate}
              transition={getTransition(0.6)}
              className="mb-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge variant="secondary" className="mb-4 px-6 py-3 text-sm font-medium border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all duration-300 text-white">
                  <Calendar className="w-4 h-4 mr-2" />
                  October 2025 - March 2026
                </Badge>
              </motion.div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight gpu-accelerated"
              initial={animations.slideUp.initial}
              animate={animations.slideUp.animate}
              transition={getTransition(0.8)}
            >
              <motion.span 
                className="gradient-text inline-block"
                whileHover={animations.hover}
                transition={getTransition(0.2)}
              >
                Youth Season
              </motion.span>
              <br />
              <motion.span 
                className="gradient-text inline-block"
                whileHover={animations.hover}
                transition={getTransition(0.2)}
              >
                of Code
              </motion.span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
              initial={animations.slideUp.initial}
              animate={animations.slideUp.animate}
              transition={getTransition(0.6)}
            >
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.div 
                  className="font-semibold text-foreground"
                  style={{
                    background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  You Code, You Create, You Collaborate
                </motion.div>
                <div>Join the global youth open-source community and build the future together</div>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              initial={animations.slideUp.initial}
              animate={animations.slideUp.animate}
              transition={getTransition(0.6)}
            >
              <motion.div
                whileHover={animations.hover}
                whileTap={animations.button.whileTap}
                transition={getTransition(0.2)}
              >
                <Button
                  asChild
                  size="lg"
                  className="gradient-primary text-white hover:opacity-90 transition-all duration-300 neon-glow shadow-lg hover:shadow-xl"
                  onClick={() => {
                    const featuresSection = document.querySelector('#features')
                    if (featuresSection) {
                      featuresSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  <Link href="/recruit" className="flex items-center group">
                    Join Y-SOC <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={animations.hover}
                whileTap={animations.button.whileTap}
                transition={getTransition(0.2)}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent transition-all duration-300 hover:shadow-lg"
                  onClick={() => {
                    const featuresSection = document.querySelector('#features')
                    if (featuresSection) {
                      featuresSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </motion.div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 relative overflow-hidden page-transition">
        {/* Optimized floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {useMemo(() => 
            [...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary/20 rounded-full gpu-accelerated"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            )), [])
          }
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">Why Join Y-SoC?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the power of collaborative coding and accelerate your development journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/50 group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <motion.div 
                      className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mx-auto mb-4 neon-glow group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      <feature.icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </motion.div>
                    <motion.h3 
                      className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {feature.title}
                    </motion.h3>
                    <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section id="roles" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden page-transition">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">Find Your Role</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're a beginner or expert, there's a place for you in our community
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* First Row - 3 roles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {roles.slice(0, 3).map((role, index) => (
                <motion.div
                  key={role.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="cursor-pointer group"
                >
                  <div className="h-full text-center rounded-2xl border border-gray-700/30 bg-gray-900/50 backdrop-blur-sm hover:border-gray-600/50 hover:shadow-xl transition-all duration-300">
                    <div className="p-6">
                      {/* Modern Icon */}
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30">
                        <role.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Role Title */}
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                        {role.name}
                      </h3>
                      
                      {/* Role Description */}
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        {role.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Second Row - 2 roles centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {roles.slice(3, 5).map((role, index) => (
                <motion.div
                  key={role.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                  viewport={{ once: true }}
                  className="cursor-pointer group"
                >
                  <div className="h-full text-center rounded-2xl border border-gray-700/30 bg-gray-900/50 backdrop-blur-sm hover:border-gray-600/50 hover:shadow-xl transition-all duration-300">
                    <div className="p-6">
                      {/* Modern Icon */}
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30">
                        <role.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Role Title */}
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                        {role.name}
                      </h3>
                      
                      {/* Role Description */}
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        {role.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/40 via-gray-800/20 to-gray-900/40 relative overflow-hidden page-transition">
        {/* Light mode contrast overlay */}
        <div className="absolute inset-0 bg-white/5 dark:bg-transparent" />
        
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
        
       
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <Trophy className="w-16 h-16 mx-auto mb-6 text-primary drop-shadow-lg" />
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-5xl font-bold gradient-text mb-6"
              whileHover={{ 
                scale: 1.02,
                textShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
              }}
            >
              Ready to Start Coding?
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join thousands of young developers building the future of open source. Your journey starts here.
            </motion.p>
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={animations.hover}
                whileTap={animations.button.whileTap}
                transition={getTransition(0.2)}
              >
                <Button
                  asChild
                  size="lg"
                  className="gradient-primary text-white hover:opacity-90 transition-all duration-300 neon-glow shadow-lg hover:shadow-xl"
                >
                  <Link href="/recruit" className="flex items-center group">
                    Apply Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />

      {/* Smooth Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0
        }}
        whileHover={{ 
          scale: 1.1,
          y: -2
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-5 w-5" />
      </motion.button>
      </div>
  )
}
