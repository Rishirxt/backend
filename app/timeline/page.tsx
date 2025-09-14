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
      color: "bg-primary",
      status: "active",
    },
    {
      month: "Phase 2",
      title: "Community Bonding",
      icon: Users,
      description: "Contributors connect with mentors, explore beginner-friendly issues, and learn through workshops.",
      highlights: [],
      color: "bg-secondary",
      status: "upcoming",
    },
    {
      month: "Phase 3",
      title: "Active Contribution",
      icon: Code,
      description: "Core development begins with pull requests, code reviews, and teamwork.",
      highlights: [],
      color: "bg-accent",
      status: "upcoming",
    },
    {
      month: "Phase 4",
      title: "Refinement & Completion",
      icon: Lightbulb,
      description: "Features are polished, bugs are fixed, and documentation is improved.",
      highlights: [],
      color: "bg-chart-4",
      status: "upcoming",
    },
    {
      month: "Phase 5",
      title: "Final Showcase",
      icon: Trophy,
      description: "Completed projects are presented to the community, with recognition for outstanding contributors.",
      highlights: [],
      color: "bg-chart-5",
      status: "upcoming",
    }
  ]


  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Particles Background */}
        <div className="absolute inset-0">
          <Particles
            particleCount={40}
            particleSize={3}
            particleSpeed={0.8}
            particleColor="#f59e0b"
            backgroundColor="transparent"
            opacity={0.6}
            connectionDistance={120}
            connectionColor="#f59e0b"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              Program Flow
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Your 6-Month Journey</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">Program Flow</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each phase is carefully designed to maximize learning, collaboration, and project success
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform md:-translate-x-0.5" />

            {/* Single Moving Dot */}
            <motion.div 
              className="absolute left-8 md:left-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background transform -translate-x-3 md:-translate-x-3 z-20"
              style={{
                y: dotY,
                scale: dotPulse,
                boxShadow: useTransform(dotGlow, [0, 1], [
                  "0 0 0px rgba(59, 130, 246, 0)",
                  "0 0 30px rgba(59, 130, 246, 1)"
                ])
              }}
            />

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.month}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Static Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary/30 transform -translate-x-2 md:-translate-x-2 z-10" />

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <Card className="hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div
                            className={`w-12 h-12 rounded-lg ${event.color} flex items-center justify-center neon-glow`}
                          >
                            <event.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <Badge variant={event.status === "active" ? "default" : "secondary"} className="mb-2">
                              {event.status === "active" ? "Current Phase" : "Upcoming"}
                            </Badge>
                            <h3 className="text-sm font-medium text-muted-foreground">{event.month}</h3>
                          </div>
                        </div>

                        <h4 className="text-xl font-bold text-foreground mb-3">{event.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't miss out on this incredible opportunity to grow, learn, and contribute to meaningful projects. Your
              open-source journey starts with a single application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="gradient-primary text-white hover:opacity-90 transition-opacity neon-glow"
              >
                <Link href="/recruit" className="flex items-center">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
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
