"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, Mail, CheckCircle, AlertCircle } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastType, setToastType] = useState<'success' | 'error'>('success')

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setIsSubmitting(true)

  //   try {
  //     const response = await fetch('https://portfolio-3-0-w9cj.onrender.com/send-email', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     })

  //     if (response.ok) {
  //       // Success case
  //       setFormData({ name: "", email: "", message: "" })
  //       setToastType('success')
  //       setShowToast(true)
  //       setTimeout(() => setShowToast(false), 5000)
  //     } else {
  //       throw new Error('Server error')
  //     }
  //   } catch (error) {
  //     // Error case
  //     setToastType('error')
  //     setShowToast(true)
  //     setTimeout(() => setShowToast(false), 5000)
  //   } finally {
  //     setIsSubmitting(false)
  //   }
  // }


const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://portfolio-3-0-w9cj.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          subject: "Zest Sync Player"
        }),
      })

      if (response.ok) {
        // Success case
        setFormData({ name: "", email: "", message: ""})
        setToastType('success')
        setShowToast(true)
        setTimeout(() => setShowToast(false), 7000)
      } else {
        throw new Error('Server error')
      }
    } catch (error) {
      // Error case
      setToastType('error')
      setShowToast(true)
      setTimeout(() => setShowToast(false), 7000)
    } finally {
      setIsSubmitting(false)
    }
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2 max-w-sm">
          {toastType === 'success' ? (
            <Card className="glass p-4 flex items-center gap-3 border-green-500/50 bg-green-500/10">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <div>
                <p className="font-semibold text-green-500">Message Sent!</p>
                <p className="text-sm text-muted-foreground">I'll get back to you soon.</p>
              </div>
            </Card>
          ) : (
            <Card className="glass p-4 border-red-500/50 bg-red-500/10">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-500">Message Failed!</p>
                  <p className="text-sm text-muted-foreground mb-2">Please contact me directly:</p>
                  <p className="text-sm text-primary font-mono">anub0709@gmail.com</p>
                </div>
              </div>
            </Card>
          )}
        </div>
      )}
      
      <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">Have questions or feedback? I'd love to hear from you.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div>
            <Card className="glass p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Contact Me</h3>
                  <p className="text-muted-foreground">I'll get back to you soon</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Support</h4>
                  <p className="text-muted-foreground">Get help with installation, features, and troubleshooting</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Feedback</h4>
                  <p className="text-muted-foreground">Share your ideas for new features and improvements</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Bug Reports</h4>
                  <p className="text-muted-foreground">Help me improve by reporting any issues you encounter</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact form */}
          <Card className="glass p-8 overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-6 min-w-0">
              <div>
                <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="glass border-border/50 focus:border-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="glass border-border/50 focus:border-primary"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="min-w-0">
                <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="glass border-border/50 focus:border-primary resize-none overflow-y-auto w-full"
                  placeholder="Tell us about your question, feedback, or issue..."
                  style={{resize: 'none', minWidth: 0, maxWidth: '100%'}}
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full glass-hover neon-glow-hover" size="lg">
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
    </>
  )
}
