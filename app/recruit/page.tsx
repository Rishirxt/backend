"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { motion } from "framer-motion"
import { useState } from "react"
import { Crown, Users, Code, Palette, GraduationCap, Send, CheckCircle, AlertCircle, Briefcase, BookOpen } from "lucide-react"

export default function RecruitPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    role: "",
    experience: "",
    skills: "",
    motivation: "",
    portfolio: "",
    github: "",
    linkedin: "",
    availability: "",
    agreeTerms: false,
    agreeNewsletter: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [submitSuccess, setSubmitSuccess] = useState("")

  const roles = [
    {
      value: "project-lead",
      label: "Project Lead",
      icon: Briefcase,
      description: "Guide and manage open-source projects",
      color: "text-blue-500",
      iconColor: "text-blue-500",
    },
    {
      value: "mentor",
      label: "Mentor",
      icon: GraduationCap,
      description: "Share knowledge and guide newcomers",
      color: "text-teal-500",
      iconColor: "text-teal-500",
    },
    {
      value: "contributor",
      label: "Contributor",
      icon: Code,
      description: "Write code and build amazing features",
      color: "text-green-500",
      iconColor: "text-green-500",
    },
    {
      value: "designer",
      label: "Designer",
      icon: Palette,
      description: "Create beautiful and intuitive interfaces",
      color: "text-purple-500",
      iconColor: "text-purple-500",
    },
    {
      value: "learner",
      label: "Learner",
      icon: BookOpen,
      description: "Start your open-source journey",
      color: "text-orange-500",
      iconColor: "text-orange-500",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")
    setSubmitSuccess("")

    try {
      // Prepare data for the Flask backend
      const submissionData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        country: formData.country,
        role: formData.role,
        experience_level: formData.experience,
        technical_skills: formData.skills,
        why_join: formData.motivation,
        github: formData.github,
        portfolio: formData.portfolio,
        time_commitment: formData.availability,
        agree_terms: formData.agreeTerms,
        updates_subscription: formData.agreeNewsletter
      }

      // Send data to Flask backend
      const response = await fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
        mode: 'cors'
      })

      const result = await response.json()

      // Check if submission was successful based on backend response
      if (response.ok && result.success === true) {
        setSubmitSuccess('Application submitted successfully!')
        setSubmitError("")
        // Clear form after successful submission
        setTimeout(() => {
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            country: "",
            role: "",
            experience: "",
            skills: "",
            motivation: "",
            portfolio: "",
            github: "",
            linkedin: "",
            availability: "",
            agreeTerms: false,
            agreeNewsletter: false,
          })
          setSubmitSuccess("")
        }, 3000)
      } else {
        setSubmitError(result.message || result.error || 'Submission failed')
        setSubmitSuccess("")
      }
    } catch (error) {
      setSubmitError('Failed to submit application. Please try again.')
      setSubmitSuccess("")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 neon-glow">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold gradient-text mb-6">Submitted Successfully!</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Your application has been submitted successfully. We'll review your application and get back to you soon.
              </p>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              Join Y-SoC
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Start Your Journey</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to join the global youth open-source community? Fill out the application below and take the first
              step toward collaborative coding excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Role Selection */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-center mb-8 gradient-text">Choose Your Role</h2>
            <div className="grid md:grid-cols-5 gap-4 mb-8">
              {roles.map((role, index) => (
                <motion.div
                  key={role.value}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer"
                  onClick={() => handleInputChange("role", role.value)}
                >
                  <Card
                    className={`h-full transition-all duration-300 ease-in-out ${
                      formData.role === role.value
                        ? "border-primary shadow-lg neon-glow scale-105"
                        : "border-border/50 hover:border-primary/30 hover:shadow-md"
                    }`}
                  >
                    <CardContent className="p-6 text-center">
                      {/* Modern Icon */}
                      <div className="mb-4">
                        <role.icon className={`w-8 h-8 mx-auto ${role.iconColor} transition-colors duration-300`} />
                      </div>
                      
                      {/* Role Title */}
                      <h3 className={`font-semibold mb-2 text-lg ${role.color}`}>{role.label}</h3>
                      
                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed">{role.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">Application Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                        className="border-border/50 focus:border-primary transition-all duration-200 hover:border-primary/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                        className="border-border/50 focus:border-primary transition-all duration-200 hover:border-primary/50"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="border-border/50 focus:border-primary transition-all duration-200 hover:border-primary/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <Input
                        id="country"
                        value={formData.country}
                        onChange={(e) => handleInputChange("country", e.target.value)}
                        required
                        className="border-border/50 focus:border-primary transition-all duration-200 hover:border-primary/50"
                      />
                    </div>
                  </div>

                  {/* Role Selection Alert */}
                  {!formData.role && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2 p-4 bg-destructive/10 border border-destructive/20 rounded-lg"
                    >
                      <AlertCircle className="w-5 h-5 text-destructive" />
                      <p className="text-sm text-destructive">Please select a role above to continue.</p>
                    </motion.div>
                  )}

                  {/* Experience Level */}
                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience Level *</Label>
                    <Select
                      value={formData.experience}
                      onValueChange={(value) => handleInputChange("experience", value)}
                    >
                      <SelectTrigger className="border-border/50 focus:border-primary transition-all duration-200 hover:border-primary/50 group">
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent className="z-50">
                        <SelectItem 
                          value="beginner"
                          className="transition-colors duration-150 hover:bg-primary/10"
                        >
                          Beginner (0-1 years)
                        </SelectItem>
                        <SelectItem 
                          value="intermediate"
                          className="transition-colors duration-150 hover:bg-primary/10"
                        >
                          Intermediate (1-3 years)
                        </SelectItem>
                        <SelectItem 
                          value="advanced"
                          className="transition-colors duration-150 hover:bg-primary/10"
                        >
                          Advanced (3-5 years)
                        </SelectItem>
                        <SelectItem 
                          value="expert"
                          className="transition-colors duration-150 hover:bg-primary/10"
                        >
                          Expert (5+ years)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Skills */}
                  <div className="space-y-2">
                    <Label htmlFor="skills">Technical Skills *</Label>
                    <Textarea
                      id="skills"
                      placeholder="List your programming languages, frameworks, tools, and technologies..."
                      value={formData.skills}
                      onChange={(e) => handleInputChange("skills", e.target.value)}
                      required
                      className="border-border/50 focus:border-primary min-h-[100px] transition-all duration-200 hover:border-primary/50"
                    />
                  </div>

                  {/* Motivation */}
                  <div className="space-y-2">
                    <Label htmlFor="motivation">Why do you want to join Y-SoC? *</Label>
                    <Textarea
                      id="motivation"
                      placeholder="Tell us about your motivation, goals, and what you hope to achieve..."
                      value={formData.motivation}
                      onChange={(e) => handleInputChange("motivation", e.target.value)}
                      required
                      className="border-border/50 focus:border-primary min-h-[120px] transition-all duration-200 hover:border-primary/50"
                    />
                  </div>

                  {/* Links */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="github">GitHub Profile</Label>
                      <Input
                        id="github"
                        placeholder="https://github.com/username"
                        value={formData.github}
                        onChange={(e) => handleInputChange("github", e.target.value)}
                        className="border-border/50 focus:border-primary transition-all duration-200 hover:border-primary/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="portfolio">Portfolio/Website</Label>
                      <Input
                        id="portfolio"
                        placeholder="https://yourportfolio.com"
                        value={formData.portfolio}
                        onChange={(e) => handleInputChange("portfolio", e.target.value)}
                        className="border-border/50 focus:border-primary transition-all duration-200 hover:border-primary/50"
                      />
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="space-y-2">
                    <Label htmlFor="availability">Time Commitment *</Label>
                    <Select
                      value={formData.availability}
                      onValueChange={(value) => handleInputChange("availability", value)}
                    >
                      <SelectTrigger className="border-border/50 focus:border-primary transition-all duration-200 hover:border-primary/50 group">
                        <SelectValue placeholder="How many hours per week can you commit?" />
                      </SelectTrigger>
                      <SelectContent className="z-50">
                        <SelectItem 
                          value="5-10"
                          className="transition-colors duration-150 hover:bg-primary/10"
                        >
                          5-10 hours per week
                        </SelectItem>
                        <SelectItem 
                          value="10-15"
                          className="transition-colors duration-150 hover:bg-primary/10"
                        >
                          10-15 hours per week
                        </SelectItem>
                        <SelectItem 
                          value="15-20"
                          className="transition-colors duration-150 hover:bg-primary/10"
                        >
                          15-20 hours per week
                        </SelectItem>
                        <SelectItem 
                          value="20+"
                          className="transition-colors duration-150 hover:bg-primary/10"
                        >
                          20+ hours per week
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="agreeTerms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                        required
                        className="transition-all duration-200 hover:scale-110"
                      />
                      <Label htmlFor="agreeTerms" className="text-sm">
                        I agree to the{" "}
                        <a href="#" className="text-primary hover:underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-primary hover:underline">
                          Code of Conduct
                        </a>{" "}
                        *
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="agreeNewsletter"
                        checked={formData.agreeNewsletter}
                        onCheckedChange={(checked) => handleInputChange("agreeNewsletter", checked as boolean)}
                        className="transition-all duration-200 hover:scale-110"
                      />
                      <Label htmlFor="agreeNewsletter" className="text-sm">
                        I'd like to receive updates about Y-SoC and the open-source community
                      </Label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  {submitSuccess && (
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <p className="text-green-500 font-medium">{submitSuccess}</p>
                      </div>
                    </div>
                  )}
                  
                  {submitError && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg mb-4">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-red-500" />
                        <p className="text-red-500 font-medium">{submitError}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="pt-6">
                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.role || !formData.agreeTerms}
                      className="w-full gradient-primary text-white hover:opacity-90 transition-opacity neon-glow"
                    >
                      {isSubmitting ? (
                        "Submitting Application..."
                      ) : (
                        <>
                          Submit Application <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
