"use client"

import React, { useState } from "react"
import { Button } from "@/component/ui/Button.jsx"
import { Input } from "@/component/ui/Input.jsx"
import { Textarea } from "@/component/ui/TextArea.jsx"
import { Card, CardContent, CardHeader, CardTitle } from "@/component/ui/Card.jsx"
import { Leaf, Send } from "lucide-react"

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000))

        setIsSubmitting(false)
        setFormData({ name: "", email: "", subject: "", message: "" })
        alert("Thank you for your message! We'll get back to you soon.")
    }

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <Card className="shadow-lg border-green-200 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl text-green-800 flex items-center justify-center gap-2">
                    <Leaf className="w-6 h-6 text-lime-600" />
                    Send Us a Message
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-green-800">
                                Your Name
                            </label>
                            <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                required
                                className="border-green-200 focus:border-lime-500 focus:ring-lime-500/20"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-green-800">
                                Email Address
                            </label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                required
                                className="border-green-200 focus:border-lime-500 focus:ring-lime-500/20"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-green-800">
                            Subject
                        </label>
                        <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="What can we help you with?"
                            required
                            className="border-green-200 focus:border-lime-500 focus:ring-lime-500/20"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-green-800">
                            Message
                        </label>
                        <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your plant needs, questions, or how we can help you grow your green space..."
                            rows={5}
                            required
                            className="border-green-200 focus:border-lime-500 focus:ring-lime-500/20 resize-none"
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-green-700 hover:bg-green-800 text-white py-3 text-lg font-medium transition-all duration-200 hover:shadow-lg"
                    >
                        {isSubmitting ? (
                            <div className="flex items-center justify-center gap-2">
                                <Leaf className="w-4 h-4 animate-spin" />
                                Sending...
                            </div>
                        ) : (
                            <div className="flex items-center justify-center gap-2">
                                <Send className="w-4 h-4" />
                                Send Message
                            </div>
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
