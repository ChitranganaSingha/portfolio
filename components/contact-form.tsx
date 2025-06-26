"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, CheckCircle, AlertCircle, Mail } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    // Basic client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setSubmitStatus("error")
      setErrorMessage("Please fill in all fields")
      setIsSubmitting(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus("error")
      setErrorMessage("Please enter a valid email address")
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
        setErrorMessage(data.error || "Failed to send message")
      }
    } catch (error) {
      console.error("Contact form error:", error)
      setSubmitStatus("error")
      setErrorMessage(
        "Network error. Please check your connection and try again, or contact me directly at chitrangana.singha@gmail.com",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDirectEmail = () => {
    window.location.href = "mailto:chitrangana.singha@gmail.com?subject=Portfolio Contact&body=Hello Chitrangana,"
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-slate-700">
              Name *
            </label>
            <Input
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="border-slate-300 focus:border-teal-400"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-700">
              Email *
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="border-slate-300 focus:border-teal-400"
              required
              disabled={isSubmitting}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium text-slate-700">
            Subject *
          </label>
          <Input
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="border-slate-300 focus:border-teal-400"
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-slate-700">
            Message *
          </label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            rows={6}
            className="border-slate-300 focus:border-teal-400"
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <p className="text-green-800 font-medium">Message sent successfully! I'll get back to you soon.</p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="h-5 w-5 text-red-600" />
              <p className="text-red-800 font-medium">{errorMessage}</p>
            </div>

            {/* Alternative contact method */}
            <div className="flex items-center gap-2 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <Mail className="h-5 w-5 text-blue-600" />
              <div className="flex-1">
                <p className="text-blue-800 font-medium">Alternative: Send me an email directly</p>
                <Button
                  type="button"
                  variant="link"
                  onClick={handleDirectEmail}
                  className="text-blue-600 hover:text-blue-700 p-0 h-auto font-normal"
                >
                  chitrangana.singha@gmail.com
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending Message...
              </>
            ) : (
              "Send Message"
            )}
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={handleDirectEmail}
            className="border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            <Mail className="mr-2 h-4 w-4" />
            Direct Email
          </Button>
        </div>
      </form>
    </div>
  )
}
