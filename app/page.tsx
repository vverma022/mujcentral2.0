"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Download, Users, ChevronRight } from 'lucide-react'
import { motion } from "framer-motion"
import { useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const MotionImage = motion(Image)

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b"
      >
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold"
          >
            StudentsHub
          </motion.div>
          <div className="hidden md:flex items-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Resources
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Events
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </motion.a>
          </div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button>Join Community</Button>
          </motion.div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section ref={containerRef} className="relative pt-24">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/college-illustration.jpg"
            alt="College building watercolor illustration"
            fill
            className="object-cover object-center opacity-15"
            priority
          />
        </motion.div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="space-y-6">
              <motion.div variants={itemVariants}>
                <Badge className="px-4 py-1 bg-orange-100 text-orange-700 hover:bg-orange-100">
                  Your Academic Success Partner
                </Badge>
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold leading-tight"
              >
                The Ultimate Student Resource Platform
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl text-muted-foreground"
              >
                Access past papers, study materials, and connect with your peers. Everything you need for academic excellence.
              </motion.p>
              <motion.div variants={itemVariants} className="flex gap-4">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button size="lg">
                    Explore Resources
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              variants={itemVariants}
              className="relative h-[400px] hidden md:block"
            >
              <MotionImage
                src="/college-illustration.jpg"
                alt="College building watercolor illustration"
                fill
                className="object-contain"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: BookOpen,
              title: "Past Year Papers",
              description: "Access a comprehensive collection of previous exam papers to enhance your preparation.",
            },
            {
              icon: Download,
              title: "Study Materials",
              description: "Download lecture notes, presentations, and additional learning resources.",
            },
            {
              icon: Users,
              title: "Community",
              description: "Connect with fellow students, share resources, and learn together.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <Card className="bg-orange-50 overflow-hidden">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div variants={itemVariants} className="space-y-4">
                  <h2 className="text-3xl font-bold">Ready for Your Exams?</h2>
                  <p className="text-lg text-muted-foreground">
                    Get access to our complete collection of past papers and ace your exams like a pro!
                  </p>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                      Access Now
                    </Button>
                  </motion.div>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="relative h-[300px]"
                >
                  <MotionImage
                    src="/college-illustration.jpg"
                    alt="College building watercolor illustration"
                    fill
                    className="object-contain"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Future Features Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Coming Soon</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Study Assistant",
                description: "Get personalized study recommendations and instant answers to your questions.",
              },
              {
                title: "Virtual Study Rooms",
                description: "Collaborate with peers in real-time virtual study environments.",
              },
              {
                title: "Gamified Learning Paths",
                description: "Track your progress and earn rewards as you complete your study goals.",
              },
              {
                title: "Interactive Practice Tests",
                description: "Take dynamic tests that adapt to your knowledge level for optimal learning.",
              },
              {
                title: "Resource Marketplace",
                description: "Buy, sell, or exchange study materials with other students.",
              },
              {
                title: "Mobile App",
                description: "Access all features on-the-go with our upcoming mobile application.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    <Button variant="ghost" className="group">
                      Learn more
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-lg font-semibold">StudentsHub</h3>
              <p className="text-sm text-muted-foreground">Your Academic Success Partner</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2023 StudentsHub. All rights reserved.</p>
            <p className="mt-2">Built by Runtime Error's</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

