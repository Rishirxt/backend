"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Globe, Mail, MapPin } from "lucide-react"

export default function TeamPage() {
  const coreTeam = [
    {
      name: "Punya Mittal",
      role: "Founder",
      location: "Delhi, India",
      bio: "Founder of Y-SoC, driven to empower youth through open source. Experienced in leading communities and building global collaborations.",
      image: "/mittal.jpg",
      skills: ["Leadership", "Open Source", "Community Building"],
      social: {
        linkedin: "https://www.linkedin.com/in/punya-mittal-a1122520b"
      },
    },
    {
      name: "Ayush Vaish",
      role: "Programme Director",
      location: "Delhi, India",
      bio: "Oversees program structure and execution at Y-SoC. Skilled in managing large-scale initiatives and ensuring smooth operations.",
      image: "/ay.jpg",
      skills: ["Program Management", "System Design", "Mentorship"],
      social: {
        linkedin: "https://www.linkedin.com/in/ayush-vaish-286064361"
      },
    },
    {
      name: "Vaibhav Dwivedi",
      role: "Programme Management Head",
      location: "Uttar Pradesh, India",
      bio: "Coordinates teams and drives collaboration across departments. Focused on fostering inclusive, well-managed communities.",
      image: "/vaibhav.jpg",
      skills: ["Development", "Management", "Communication"],
      social: {
        linkedin: "https://www.linkedin.com/in/vaibhav-dwivedi-64bds"
      },
    },
    {
      name: "Vaibhav Raj",
      role: "Technical Head",
      location: "Jharkhand, India",
      bio: "Leads the technical direction of Y-SoC, ensuring scalable and innovative solutions. Passionate about clean design and accessible technology.",
      image: "/vr.jpg",
      skills: ["Full-Stack Development", "System Architecture", "Accessibility"],
      social: {
        linkedin: "https://www.linkedin.com/in/vaibhavraj28"
      },
    },
    {
      name: "Utsav Gautam",
      role: "Mentor Coordination Head",
      location: "Uttar Pradesh, India",
      bio: "Bridges mentors with participants to maximize learning. Experienced in guiding developers and building strong mentor ecosystems.",
      image: "/utsav.jpg",
      skills: ["Mentorship", "Coordination", "Industry Expertise"],
      social: {
        linkedin: "https://www.linkedin.com/in/utsav-gautam-406696303"
      },
    },
    {
      name: "Nayonika Nair",
      role: "Design and UI/UX Head",
      location: "Karnataka, India",
      bio: "Leads the design vision of Y-SoC. Focused on crafting engaging, modern, and accessible user experiences for the community.",
      image: "/nyonika.jpg",
      skills: ["UI/UX", "Design Thinking", "Prototyping"],
      social: {
        linkedin: "https://www.linkedin.com/in/nayonika-nair"
      },
    },
    {
      name: "Aryaman Kumar Singh",
      role: "Documentation and Content Head",
      location: "Jharkhand, India",
      bio: "Responsible for creating and managing clear, structured documentation. Dedicated to making Y-SoC processes transparent and accessible.",
      image: "/ar.jpeg",
      skills: ["Technical Writing", "Documentation", "Content Strategy"],
      social: {
        linkedin: "https://www.linkedin.com/in/aryaman-kumar-singh-2b6832317"
      },
    },
    {
      name: "Sahil Poply",
      role: "Code of Conduct Head",
      location: "Madhya Pradesh, India",
      bio: "Ensures a safe, inclusive, and collaborative environment at Y-SoC. Advocates for diversity and fair practices in open-source communities.",
      image: "/sa.jpg",
      skills: ["Community Guidelines", "Policy Making", "Conflict Resolution"],
      social: {
        linkedin: "https://www.linkedin.com/in/sahil-poply-6150b1324"
      },
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-4 px-4 py-2 border-2 border-blue-500 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-all duration-300">
              Meet Our Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">The People Behind Y-SoC</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of organizers, mentors, and contributors from around the world are united by a shared
              passion for open source and youth empowerment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Core Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The dedicated organizers who make Y-SoC possible
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/30 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-2">
                          {member.social.github && (
                            <Button 
                              size="sm" 
                              variant="secondary" 
                              className="w-8 h-8 p-0 hover:bg-primary hover:text-primary-foreground transition-colors"
                              asChild
                            >
                              <Link href={`https://github.com/${member.social.github}`} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4" />
                              </Link>
                            </Button>
                          )}
                          {member.social.linkedin && (
                            <Button 
                              size="sm" 
                              variant="secondary" 
                              className="w-8 h-8 p-0 hover:bg-blue-600 hover:text-white transition-colors"
                              asChild
                            >
                              <Link href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                                <Linkedin className="w-4 h-4" />
                              </Link>
                            </Button>
                          )}
                          {member.social.twitter && (
                            <Button 
                              size="sm" 
                              variant="secondary" 
                              className="w-8 h-8 p-0 hover:bg-blue-400 hover:text-white transition-colors"
                              asChild
                            >
                              <Link href={`https://twitter.com/${member.social.twitter}`} target="_blank" rel="noopener noreferrer">
                                <Twitter className="w-4 h-4" />
                              </Link>
                            </Button>
                          )}
                          {member.social.website && (
                            <Button 
                              size="sm" 
                              variant="secondary" 
                              className="w-8 h-8 p-0 hover:bg-green-600 hover:text-white transition-colors"
                              asChild
                            >
                              <Link href={`https://${member.social.website}`} target="_blank" rel="noopener noreferrer">
                                <Globe className="w-4 h-4" />
                              </Link>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-2">{member.role}</p>
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <MapPin className="w-4 h-4 mr-1" />
                        {member.location}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>
                      <div className="flex flex-wrap gap-1">
                        {member.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
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

      {/* Join Team CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Want to Join Our Team?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals to help grow the Y-SoC community. Whether as a mentor,
              organizer, or contributor, there's a place for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="gradient-primary text-white hover:opacity-90 transition-opacity neon-glow"
              >
                <Link href="/contact" className="flex items-center">
                  Get In Touch <Mail className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Link href="/recruit">Join as Participant</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
