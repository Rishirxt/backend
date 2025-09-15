"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import DarkVeil from "@/components/DarkVeil"
import Link from "next/link"
import { motion } from "framer-motion"
import { animations, getTransition } from "@/lib/animations"
import { Target, Eye, Users, Code, Palette, GraduationCap, Crown, ArrowRight, Globe, Heart, Zap } from "lucide-react"

export default function AboutPage() {
  const memberCategories = [
    {
      icon: Crown,
      title: "Project Leads",
      description:
        "Visionary leaders who guide open-source projects from conception to completion. They coordinate teams, make technical decisions, and ensure project success.",
      skills: ["Project Management", "Technical Leadership", "Team Coordination", "Strategic Planning"],
      color: "bg-primary",
      textColor: "text-primary",
    },
    {
      icon: Users,
      title: "Mentors",
      description:
        "Experienced developers who share knowledge and guide newcomers. They provide technical guidance, code reviews, and career advice.",
      skills: ["Code Review", "Technical Guidance", "Career Mentoring", "Knowledge Sharing"],
      color: "bg-secondary",
      textColor: "text-secondary",
    },
    {
      icon: Code,
      title: "Contributors",
      description:
        "The backbone of our community who write code, fix bugs, and build amazing features. They turn ideas into reality through their coding skills.",
      skills: ["Software Development", "Bug Fixing", "Feature Implementation", "Testing"],
      color: "bg-accent",
      textColor: "text-accent",
    },
    {
      icon: Palette,
      title: "Designers",
      description:
        "Creative minds who craft beautiful and intuitive user interfaces. They ensure our projects are not just functional but also visually appealing.",
      skills: ["UI/UX Design", "Visual Design", "Prototyping", "User Research"],
      color: "bg-chart-4",
      textColor: "text-chart-4",
    },
    {
      icon: GraduationCap,
      title: "Learners",
      description:
        "Enthusiastic beginners starting their open-source journey. They learn by doing, contributing, and growing with the community.",
      skills: ["Learning", "Contributing", "Collaboration", "Growth Mindset"],
      color: "bg-chart-5",
      textColor: "text-chart-5",
    },
  ]

  const values = [
    {
      icon: Globe,
      title: "Global Collaboration",
      description: "We believe in the power of diverse perspectives from around the world working together.",
    },
    {
      icon: Heart,
      title: "Inclusive Community",
      description: "Everyone is welcome regardless of their background, experience level, or location.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "We encourage creative solutions and cutting-edge approaches to problem-solving.",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[80vh] flex items-center">
        {/* DarkVeil Background */}
        <div className="absolute inset-0 opacity-60 dark:opacity-40">
          <DarkVeil />
        </div>
        
        {/* Light mode contrast overlay */}
        <div className="absolute inset-0 bg-white/10 dark:bg-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-4 px-4 py-2 border-2 border-blue-500 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-all duration-300">
              About Y-SoC
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Empowering Youth Through Open Source
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Y-SoC is more than a program—it's a movement that connects passionate young developers worldwide to
              create, collaborate, and contribute to meaningful open-source projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Target className="w-8 h-8 text-primary mr-3" />
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Our Mission</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To create a global platform where young developers can learn, grow, and contribute to open-source
                    projects while building meaningful connections and advancing their careers. We bridge the gap
                    between learning and real-world application through collaborative coding.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-secondary/20 hover:border-secondary/40 transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Eye className="w-8 h-8 text-secondary mr-3" />
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Our Vision</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To become the world's leading youth-driven open-source community, fostering innovation and
                    collaboration across borders. We envision a future where every young developer has the opportunity
                    to contribute to projects that matter and shape the digital world.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* DarkVeil Background */}
        <div className="absolute inset-0 opacity-40 dark:opacity-30">
          <DarkVeil />
        </div>
        
        {/* Light mode contrast overlay */}
        <div className="absolute inset-0 bg-white/5 dark:bg-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do in the Y-SoC community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 neon-glow">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Community Roles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover where you fit in our diverse community of creators, collaborators, and innovators
            </p>
          </motion.div>

          <div className="space-y-8">
            {memberCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row items-start gap-6">
                      <div className="flex items-center gap-4 lg:min-w-0 lg:flex-1">
                        <div
                          className={`w-16 h-16 rounded-xl ${category.color} flex items-center justify-center neon-glow`}
                        >
                          <category.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            {category.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {category.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 lg:min-w-0 lg:flex-1">
                        {category.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="px-3 py-1 text-sm"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Ready to Join Our Community?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're a seasoned developer or just starting out, there's a place for you in Y-SoC. Let's build
              the future of open source together.
            </p>
            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                className="gradient-primary text-white hover:opacity-90 transition-opacity neon-glow"
              >
                <Link href="/recruit" className="flex items-center">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
