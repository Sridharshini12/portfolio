"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, CheckCircle, AlertCircle, Sparkles } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/mjkreara", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setSubmitStatus("success")
        form.reset()
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto cosmic-card hover:scale-105 transition-all duration-300 relative overflow-hidden">
      <div className="absolute top-4 right-4">
        <Sparkles className="h-6 w-6 text-pink-400/50 animate-pulse" />
      </div>
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-pink-200">
          <Mail className="h-5 w-5 text-pink-400" />
          Send a Message
        </CardTitle>
        <CardDescription className="text-pink-100/70">
          Ready to launch your project? Let's connect and create something amazing together!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-pink-200">
                Name *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                disabled={isSubmitting}
                className="bg-black/20 border-pink-400/30 text-pink-100 placeholder:text-pink-300/50 focus:border-pink-400 focus:ring-pink-400/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-pink-200">
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                required
                disabled={isSubmitting}
                className="bg-black/20 border-pink-400/30 text-pink-100 placeholder:text-pink-300/50 focus:border-pink-400 focus:ring-pink-400/20"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="text-pink-200">
              Subject *
            </Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              placeholder="What would you like to discuss?"
              required
              disabled={isSubmitting}
              className="bg-black/20 border-pink-400/30 text-pink-100 placeholder:text-pink-300/50 focus:border-pink-400 focus:ring-pink-400/20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-pink-200">
              Message *
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Share your ideas and let's create something amazing together..."
              className="min-h-[120px] bg-black/20 border-pink-400/30 text-pink-100 placeholder:text-pink-300/50 focus:border-pink-400 focus:ring-pink-400/20"
              required
              disabled={isSubmitting}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 pink-glow"
            disabled={isSubmitting}
            size="lg"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sending Message...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>

          {submitStatus === "success" && (
            <div className="flex items-center gap-2 text-green-300 bg-green-500/10 border border-green-500/20 p-3 rounded-md">
              <CheckCircle className="h-5 w-5" />
              <span>🚀 Message sent successfully! I'll get back to you soon!</span>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="flex items-center gap-2 text-red-300 bg-red-500/10 border border-red-500/20 p-3 rounded-md">
              <AlertCircle className="h-5 w-5" />
              <span>Something went wrong! Please try again or contact me directly.</span>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
