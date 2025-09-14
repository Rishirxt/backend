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
import { Shield, Eye, Lock, Database, UserCheck, Globe, Mail, ExternalLink } from "lucide-react"

export default function PrivacyPolicyPage() {
  const privacyPrinciples = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "We implement robust security measures to protect your personal information."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We clearly explain how we collect, use, and share your data."
    },
    {
      icon: Lock,
      title: "Minimal Collection",
      description: "We only collect data that is necessary for our program operations."
    },
    {
      icon: UserCheck,
      title: "Your Control",
      description: "You have control over your personal data and can request changes or deletion."
    }
  ]

  const dataTypes = [
    {
      category: "Personal Information",
      items: [
        "Full name and contact information (email, phone number)",
        "Date of birth and age verification",
        "Country of residence and timezone",
        "Educational background and experience level"
      ]
    },
    {
      category: "Technical Information",
      items: [
        "IP address and device information",
        "Browser type and version",
        "Operating system details",
        "Website usage analytics and cookies"
      ]
    },
    {
      category: "Program Data",
      items: [
        "Application submissions and responses",
        "Project contributions and code submissions",
        "Mentor-mentee interactions",
        "Program progress and achievements"
      ]
    }
  ]

  const dataUsage = [
    {
      purpose: "Program Administration",
      description: "To manage applications, assign mentors, track progress, and facilitate program activities."
    },
    {
      purpose: "Communication",
      description: "To send program updates, notifications, and respond to your inquiries."
    },
    {
      purpose: "Improvement",
      description: "To analyze program effectiveness and improve our services and user experience."
    },
    {
      purpose: "Legal Compliance",
      description: "To comply with applicable laws, regulations, and legal obligations."
    }
  ]

  const rights = [
    {
      right: "Access",
      description: "Request access to your personal data we hold about you."
    },
    {
      right: "Correction",
      description: "Request correction of inaccurate or incomplete personal data."
    },
    {
      right: "Deletion",
      description: "Request deletion of your personal data under certain circumstances."
    },
    {
      right: "Portability",
      description: "Request a copy of your data in a structured, machine-readable format."
    },
    {
      right: "Objection",
      description: "Object to processing of your personal data for certain purposes."
    },
    {
      right: "Restriction",
      description: "Request restriction of processing under certain circumstances."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <GridDotBackground
            dotSize={2}
            dotSpacing={40}
            dotColor="#06b6d4"
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
              <Shield className="w-4 h-4 mr-2" />
              Data Protection
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold gradient-text mb-8"
            initial={animations.slideUp.initial}
            animate={animations.slideUp.animate}
            transition={getTransition(0.8)}
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto"
            initial={animations.slideUp.initial}
            animate={animations.slideUp.animate}
            transition={getTransition(0.6)}
          >
            Your privacy is important to us. This policy explains how Y-SoC collects, uses, and protects your personal information.
          </motion.p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12">
              <CardContent className="space-y-6">
                <h2 className="text-3xl font-bold text-center mb-8">Our Commitment to Privacy</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Youth Season of Code (Y-SoC) is committed to protecting your privacy and personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                  you participate in our program or use our website.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  By using our services, you agree to the collection and use of information in accordance with 
                  this policy. We will not use or share your information with anyone except as described in this 
                  Privacy Policy.
                </p>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Last Updated:</strong> September 2025
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Privacy Principles</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow these core principles to ensure your privacy and data protection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="space-y-4">
                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <principle.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{principle.title}</h3>
                    <p className="text-muted-foreground">{principle.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Information We Collect</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We collect different types of information to provide and improve our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataTypes.map((type, index) => (
              <motion.div
                key={type.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6">
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <Database className="w-6 h-6 text-primary" />
                      <h3 className="text-xl font-semibold">{type.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {type.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Use Your Information</h2>
            <p className="text-xl text-muted-foreground">
              We use your information for specific, legitimate purposes related to our program.
            </p>
          </motion.div>

          <div className="space-y-6">
            {dataUsage.map((usage, index) => (
              <motion.div
                key={usage.purpose}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <CardContent>
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Globe className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{usage.purpose}</h3>
                        <p className="text-muted-foreground">{usage.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Privacy Rights</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              You have certain rights regarding your personal information under applicable privacy laws.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rights.map((right, index) => (
              <motion.div
                key={right.right}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6">
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <UserCheck className="w-6 h-6 text-green-500" />
                      <h3 className="text-lg font-semibold">{right.right}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{right.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12">
              <CardContent className="space-y-6">
                <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
                <p className="text-lg text-muted-foreground leading-relaxed text-center">
                  If you have any questions about this Privacy Policy or wish to exercise your privacy rights, 
                  please contact us:
                </p>
                <div className="space-y-4 text-center">
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span><strong>Email:</strong> ysoc.team@gmail.com</span>
                  </div>
                </div>
                <div className="text-center">
                  <Button asChild className="mt-4">
                    <Link href="/contact">
                      Contact Us
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
