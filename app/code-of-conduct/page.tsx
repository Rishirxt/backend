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
import { Shield, Users, Heart, MessageCircle, AlertTriangle, CheckCircle, ExternalLink } from "lucide-react"

export default function CodeOfConductPage() {
  const principles = [
    {
      icon: Users,
      title: "Inclusive Community",
      description: "We welcome participants from all backgrounds, experiences, and skill levels."
    },
    {
      icon: Heart,
      title: "Respectful Environment",
      description: "We treat everyone with dignity, kindness, and professional courtesy."
    },
    {
      icon: MessageCircle,
      title: "Open Communication",
      description: "We encourage constructive feedback and transparent dialogue."
    },
    {
      icon: Shield,
      title: "Safe Space",
      description: "We maintain a harassment-free environment for all participants."
    }
  ]

  const expectations = [
    {
      icon: CheckCircle,
      title: "Be Respectful",
      description: "Treat all participants with respect, regardless of their background, experience level, or opinions."
    },
    {
      icon: CheckCircle,
      title: "Be Inclusive",
      description: "Welcome newcomers and help create an environment where everyone can contribute and learn."
    },
    {
      icon: CheckCircle,
      title: "Be Constructive",
      description: "Provide helpful feedback and focus on improving projects and processes."
    },
    {
      icon: CheckCircle,
      title: "Be Professional",
      description: "Maintain professional communication and behavior in all interactions."
    },
    {
      icon: CheckCircle,
      title: "Be Collaborative",
      description: "Work together as a team and support your fellow contributors."
    },
    {
      icon: CheckCircle,
      title: "Be Patient",
      description: "Remember that everyone is learning and growing at their own pace."
    }
  ]

  const prohibitedBehaviors = [
    "Harassment, discrimination, or intimidation of any kind",
    "Inappropriate or offensive language, comments, or imagery",
    "Personal attacks, trolling, or inflammatory remarks",
    "Spam, excessive self-promotion, or off-topic discussions",
    "Sharing private information without consent",
    "Any form of sexual harassment or inappropriate advances",
    "Threats of violence or harmful behavior",
    "Disrupting events, meetings, or collaborative work"
  ]

  const reportingProcess = [
    {
      step: "1",
      title: "Document the Incident",
      description: "Record details including date, time, location, and involved parties."
    },
    {
      step: "2",
      title: "Contact the Team",
      description: "Reach out to our Code of Conduct team via email or direct message."
    },
    {
      step: "3",
      title: "Investigation",
      description: "Our team will investigate the incident confidentially and thoroughly."
    },
    {
      step: "4",
      title: "Resolution",
      description: "Appropriate action will be taken based on our enforcement guidelines."
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
              Community Guidelines
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold gradient-text mb-8"
            initial={animations.slideUp.initial}
            animate={animations.slideUp.animate}
            transition={getTransition(0.8)}
          >
            Code of Conduct
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto"
            initial={animations.slideUp.initial}
            animate={animations.slideUp.animate}
            transition={getTransition(0.6)}
          >
            Our commitment to creating a welcoming, inclusive, and respectful environment for all participants in the Youth Season of Code community.
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
                <h2 className="text-3xl font-bold text-center mb-8">Our Commitment</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The Youth Season of Code (Y-SoC) is dedicated to providing a harassment-free experience for everyone, 
                  regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, 
                  nationality, personal appearance, race, religion, or sexual identity and orientation.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We do not tolerate harassment of participants in any form. This code of conduct applies to all Y-SoC 
                  spaces, including online forums, chat rooms, email lists, social media, and in-person events.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Principles</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide our community interactions and help create a positive environment for everyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
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

      {/* Expected Behavior */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Expected Behavior</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We expect all participants to follow these guidelines in all Y-SoC interactions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expectations.map((expectation, index) => (
              <motion.div
                key={expectation.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6">
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <expectation.icon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{expectation.title}</h3>
                        <p className="text-muted-foreground">{expectation.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Behavior */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prohibited Behavior</h2>
            <p className="text-xl text-muted-foreground">
              The following behaviors are considered harassment and are unacceptable in our community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <CardContent>
                <div className="space-y-4">
                  {prohibitedBehaviors.map((behavior, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{behavior}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Reporting Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Reporting Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              If you experience or witness harassment, we encourage you to report it. All reports will be handled confidentially.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reportingProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 text-center">
                  <CardContent className="space-y-4">
                    <div className="w-12 h-12 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Card className="p-8 max-w-2xl mx-auto">
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <p className="text-muted-foreground">
                  To report violations or ask questions about this code of conduct, please contact our team:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> team@ysoc.in</p>
                </div>
                <Button asChild className="mt-4">
                  <Link href="/contact">
                    Contact Us
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Enforcement */}
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
                <h2 className="text-3xl font-bold text-center mb-8">Enforcement</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Participants asked to stop any harassing behavior are expected to comply immediately. 
                    If a participant engages in harassing behavior, the Y-SoC team may take any action they 
                    deem appropriate, including warning the offender or expulsion from the program.
                  </p>
                  <p>
                    We will respect confidentiality requests for the purpose of protecting victims of abuse. 
                    We will not name harassment victims without their affirmative consent.
                  </p>
                  <p>
                    This code of conduct applies to all Y-SoC spaces, but if you are being harassed by a 
                    member of Y-SoC outside our spaces, we still want to know about it. We will take all 
                    good-faith reports of harassment seriously.
                  </p>
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
