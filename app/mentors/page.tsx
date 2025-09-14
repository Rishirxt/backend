"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Plasma from "@/components/Plasma"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  User, 
  Star, 
  Code, 
  ArrowRight, 
  Mail, 
  ExternalLink,
  Award,
  Clock,
  BookOpen,
  MessageCircle
} from "lucide-react"
import { mentors } from "@/data/mentors"

export default function MentorsPage() {



  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[80vh] flex items-center">
        
        {/* Light mode contrast overlay */}
        <div className="absolute inset-0 bg-white/10 dark:bg-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              Our Mentors
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Learn from Industry Experts</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get personalized guidance from experienced professionals who are passionate about helping you succeed in your open-source journey.
            </p>
          </motion.div>

        </div>
      </section>


      {/* Mentors Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">Meet Our Mentors</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals ready to guide you through your open-source journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-stretch">
            {mentors.map((mentor, index) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/30 bg-background/80 backdrop-blur-sm flex flex-col hover:scale-105 hover:shadow-primary/20">
                  <CardContent className="p-8 flex flex-col h-full">
                    {/* Mentor Header */}
                    <div className="flex items-start gap-5 mb-8">
                      <div className="relative flex-shrink-0">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-primary/20 group-hover:border-primary/40 transition-colors duration-300 shadow-lg">
                          <img
                            src={mentor.avatar}
                            alt={mentor.name}
                            className="w-full h-full object-cover object-center"
                            style={{ aspectRatio: '1/1' }}
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-3 border-background shadow-sm"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            {mentor.name}
                          </h3>
                          <Badge variant="outline" className="text-xs px-3 py-1 bg-green-500/10 border-green-500/30 text-green-600 flex-shrink-0">
                            {mentor.availability}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2 font-medium">{mentor.role}</p>
                        <p className="text-sm text-primary font-semibold">{mentor.company}</p>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-grow">
                      {mentor.bio}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {mentor.expertise.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs px-3 py-1 bg-primary/10 text-primary border-primary/20">
                          {skill}
                        </Badge>
                      ))}
                      {mentor.expertise.length > 3 && (
                        <Badge variant="outline" className="text-xs px-3 py-1 border-primary/30 text-primary">
                          +{mentor.expertise.length - 3} more
                        </Badge>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-center text-sm text-muted-foreground mb-6 p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-green-500" />
                        <span className="font-medium">{mentor.experience}</span>
                      </div>
                    </div>

                    {/* Action Buttons - Pushed to bottom */}
                    <div className="flex gap-2 mt-auto">
                      <Button 
                        size="sm" 
                        className="flex-1 gradient-primary text-white hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
                        asChild
                      >
                        <a 
                          href={mentor.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center font-medium"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Connect
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">Ready to Get Mentored?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join Y-SoC and get paired with experienced mentors who will guide you through your open-source journey and help you grow as a developer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="gradient-primary text-white hover:opacity-90 transition-opacity neon-glow"
              >
                <Link href="/recruit" className="flex items-center">
                  Apply as a Mentee <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=mentors@Y-SoC.dev" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Become a Mentor
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
