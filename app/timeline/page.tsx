"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Particles from "@/components/Particles"
import Link from "next/link"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { animations, getTransition } from "@/lib/animations"
import { Calendar, Users, Lightbulb, Code, Trophy, Star, ArrowRight, CheckCircle, Clock } from "lucide-react"

export default function TimelinePage() {
  const { scrollYProgress } = useScroll()
  
  // Create animated values for the single moving dot with responsive scroll
  const dotYRaw = useTransform(scrollYProgress, [0, 0.95], [0, 1200])
  const dotPulseRaw = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const dotGlowRaw = useTransform(scrollYProgress, [0, 1], [0, 1])
  
  // Apply spring animations for responsive movement
  const dotY = useSpring(dotYRaw, {
    stiffness: 300,
    damping: 15,
    restDelta: 0.01
  })
  const dotPulse = useSpring(dotPulseRaw, {
    stiffness: 400,
    damping: 10,
    restDelta: 0.01
  })
  const dotGlow = useSpring(dotGlowRaw, {
    stiffness: 350,
    damping: 12,
    restDelta: 0.01
  })

  const timelineEvents = [
    {
      month: "Phase 1",
      title: "Registration & Onboarding",
      icon: Calendar,
      description: "Applications open for Project Leads, Mentors, and Participants. Teams are formed and projects are introduced.",
      highlights: [],
      accentColor: "#0096FF",
      status: "current",
    },
    {
      month: "Phase 2",
      title: "Community Bonding",
      icon: Users,
      description: "Contributors connect with mentors, explore beginner-friendly issues, and learn through workshops.",
      highlights: [],
      accentColor: "#00E0FF",
      status: "upcoming",
    },
    {
      month: "Phase 3",
      title: "Active Contribution",
      icon: Code,
      description: "Core development begins with pull requests, code reviews, and teamwork.",
      highlights: [],
      accentColor: "#00FFA3",
      status: "upcoming",
    },
    {
      month: "Phase 4",
      title: "Refinement & Completion",
      icon: Lightbulb,
      description: "Features are polished, bugs are fixed, and documentation is improved.",
      highlights: [],
      accentColor: "#CFFF04",
      status: "upcoming",
    },
    {
      month: "Phase 5",
      title: "Final Showcase",
      icon: Trophy,
      description: "Completed projects are presented to the community, with recognition for outstanding contributors.",
      highlights: [],
      accentColor: "#9D4DFF",
      status: "upcoming",
    }
  ]


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0F1C] to-[#0D1224]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Particles Background */}
        <div className="absolute inset-0">
          <Particles
            particleCount={40}
            particleSize={3}
            particleSpeed={0.8}
            particleColor="#0096FF"
            backgroundColor="transparent"
            opacity={0.6}
            connectionDistance={120}
            connectionColor="#0096FF"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-4 px-4 py-2 border-2 border-blue-500 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-all duration-300">
              Program Flow
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-6">Your 6-Month Journey</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From registration to showcase, follow the complete Y-SoC timeline and see how you'll grow as a developer
              and contributor to the open-source community.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-6">Program Flow</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Each phase is carefully designed to maximize learning, collaboration, and project success
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600 transform -translate-x-1/2 shadow-lg shadow-gray-500/20" />

            {/* Timeline Dots */}
            {timelineEvents.map((event, index) => (
              <div
                key={`dot-${event.month}`}
                className={`absolute left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 z-10 ${
                  event.status === "current" 
                    ? "bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/50" 
                    : "bg-gray-600 shadow-lg shadow-gray-500/30"
                }`}
                style={{
                  top: `${index * 20}rem` // Position dots at correct intervals
                }}
              />
            ))}

            {/* Single Moving Dot */}
            <motion.div 
              className="absolute left-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 border-4 border-[#0A0F1C] transform -translate-x-1/2 z-20"
              style={{
                y: dotY,
                scale: dotPulse,
                boxShadow: useTransform(dotGlow, [0, 1], [
                  "0 0 0px rgba(0, 150, 255, 0)",
                  "0 0 20px rgba(0, 150, 255, 0.8), 0 0 40px rgba(0, 224, 255, 0.6)"
                ])
              }}
            />

            <div className="space-y-16">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.month}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <div 
                      className="bg-[#12182B] rounded-2xl p-6 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 shadow-lg hover:shadow-xl"
                      style={{
                        borderLeftColor: event.accentColor,
                        borderLeftWidth: '4px'
                      }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{
                            backgroundColor: event.accentColor,
                            boxShadow: `0 0 20px ${event.accentColor}40`
                          }}
                        >
                          <event.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm font-medium text-gray-400">{event.month}</span>
                            <span 
                              className="px-3 py-1 rounded-full text-xs font-semibold"
                              style={{
                                backgroundColor: `${event.accentColor}20`,
                                color: event.accentColor,
                                border: `1px solid ${event.accentColor}40`
                              }}
                            >
                              {event.status === "current" ? "Current" : "Upcoming"}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                          <p className="text-[#A9B2C7] leading-relaxed">{event.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500/10 via-cyan-500/5 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't miss out on this incredible opportunity to grow, learn, and contribute to meaningful projects. Your
              open-source journey starts with a single application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25"
              >
                <Link href="/recruit" className="flex items-center">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white bg-transparent"
              >
                <Link href="/about">Learn More About Y-SoC</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
