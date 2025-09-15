"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import GridDotBackground from "@/components/GridDotBackground"
import Link from "next/link"
import { motion } from "framer-motion"
import { animations, getTransition } from "@/lib/animations"
import { Crown, Heart, Mail, Gift, Users, Zap } from "lucide-react"

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <GridDotBackground
            dotSize={2}
            dotSpacing={40}
            dotColor="#8b5cf6"
            backgroundColor="transparent"
            opacity={0.3}
            animationSpeed={0.7}
            pulseIntensity={0.4}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={animations.slideUp.initial}
            animate={animations.slideUp.animate}
            transition={getTransition(0.6)}
            className="mb-6"
          >
            <Badge variant="secondary" className="mb-4 px-6 py-3 text-sm font-medium border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all duration-300 text-white">
              <Crown className="w-4 h-4 mr-2" />
              Partnership Opportunities
            </Badge>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight gpu-accelerated"
            initial={animations.slideUp.initial}
            animate={animations.slideUp.animate}
            transition={getTransition(0.8)}
          >
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Become Our</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Sponsor</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
            initial={animations.slideUp.initial}
            animate={animations.slideUp.animate}
            transition={getTransition(0.6)}
          >
            Join our mission to empower the next generation of developers. Your support helps us create opportunities for young talent worldwide.
          </motion.p>

          <motion.div
            className="flex justify-center items-center"
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
                size="lg"
                className="gradient-primary text-white hover:opacity-90 transition-all duration-300 neon-glow shadow-lg hover:shadow-xl"
                onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=ysoc.team@gmail.com&su=Sponsorship Inquiry", "_blank")}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Started
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={animations.scrollReveal.initial}
            whileInView={animations.scrollReveal.whileInView}
            transition={animations.scrollReveal.transition}
            viewport={animations.scrollReveal.viewport}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Why Sponsor Y-SoC?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Partner with us to make a meaningful impact on the future of open source development and youth education.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Gift,
                title: "Access Top Talent",
                description: "Connect with the brightest young developers in open source"
              },
              {
                icon: Users,
                title: "Build Your Brand",
                description: "Enhance your company's reputation in the developer community"
              },
              {
                icon: Zap,
                title: "Shape the Future",
                description: "Influence the next generation of open source development"
              },
              {
                icon: Heart,
                title: "Make an Impact",
                description: "Support youth education and skill development"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={animations.scale.initial}
                whileInView={animations.scale.animate}
                transition={getTransition(0.4)}
                viewport={animations.scrollReveal.viewport}
                whileHover={animations.card.whileHover}
                className="text-center group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/50 group-hover:bg-gradient-to-br group-hover:from-primary/5 group-hover:to-secondary/5">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <item.icon className="w-12 h-12 mx-auto text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}