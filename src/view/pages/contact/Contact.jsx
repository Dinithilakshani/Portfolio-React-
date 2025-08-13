import { Button } from "@/component/ui/Button.jsx"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/component/ui/Card.jsx"
import { Input } from "@/component/ui/Input.jsx"
import { Label } from "@/component/ui/Label.jsx"
import { Textarea } from "@/component/ui/TextArea.jsx"
import { MapPin, Phone, Mail, Clock, Leaf } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
            {/* Header */}
            <header className="bg-white shadow-sm border-b border-green-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center gap-3">
                        <div className="bg-green-600 p-2 rounded-full">
                            <Leaf className="h-6 w-6 text-white" />
                        </div>
                        <h1 className="text-3xl font-bold text-green-800">PlantParadise</h1>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-green-800 mb-4">Get in Touch</h2>
                    <p className="text-lg text-green-700 max-w-2xl mx-auto">
                        Have questions about our plants or need gardening advice? We'd love to hear from you! Our plant experts are
                        here to help you create your perfect green paradise.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <Card className="shadow-lg border-green-200">
                        <CardHeader className="bg-green-50">
                            <CardTitle className="text-2xl text-green-800">Send us a Message</CardTitle>
                            <CardDescription className="text-green-600">
                                Fill out the form below and we'll get back to you within 24 hours
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName" className="text-green-700">
                                        First Name
                                    </Label>
                                    <Input
                                        id="firstName"
                                        placeholder="Enter your first name"
                                        className="border-green-200 focus:border-green-500 focus:ring-green-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName" className="text-green-700">
                                        Last Name
                                    </Label>
                                    <Input
                                        id="lastName"
                                        placeholder="Enter your last name"
                                        className="border-green-200 focus:border-green-500 focus:ring-green-500"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-green-700">
                                    Email Address
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="your.email@example.com"
                                    className="border-green-200 focus:border-green-500 focus:ring-green-500"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone" className="text-green-700">
                                    Phone Number (Optional)
                                </Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="(555) 123-4567"
                                    className="border-green-200 focus:border-green-500 focus:ring-green-500"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="subject" className="text-green-700">
                                    Subject
                                </Label>
                                <Input
                                    id="subject"
                                    placeholder="What can we help you with?"
                                    className="border-green-200 focus:border-green-500 focus:ring-green-500"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-green-700">
                                    Message
                                </Label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell us about your plant needs, questions, or how we can help..."
                                    rows={5}
                                    className="border-green-200 focus:border-green-500 focus:ring-green-500"
                                />
                            </div>

                            <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3">Send Message</Button>
                        </CardContent>
                    </Card>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Contact Details */}
                        <Card className="shadow-lg border-green-200">
                            <CardHeader className="bg-green-50">
                                <CardTitle className="text-2xl text-green-800">Contact Information</CardTitle>
                                <CardDescription className="text-green-600">Visit us, call us, or send us an email</CardDescription>
                            </CardHeader>
                            <CardContent className="p-6 space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-3 rounded-full">
                                        <MapPin className="h-5 w-5 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-green-800 mb-1">Visit Our Store</h3>
                                        <p className="text-green-700">
                                            123 Garden Lane
                                            <br />
                                            Green Valley, CA 90210
                                            <br />
                                            United States
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-3 rounded-full">
                                        <Phone className="h-5 w-5 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-green-800 mb-1">Call Us</h3>
                                        <p className="text-green-700">
                                            Main: (555) 123-PLANT
                                            <br />
                                            Support: (555) 123-HELP
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-3 rounded-full">
                                        <Mail className="h-5 w-5 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-green-800 mb-1">Email Us</h3>
                                        <p className="text-green-700">
                                            General: hello@plantparadise.com
                                            <br />
                                            Support: support@plantparadise.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-3 rounded-full">
                                        <Clock className="h-5 w-5 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-green-800 mb-1">Store Hours</h3>
                                        <p className="text-green-700">
                                            Monday - Friday: 8:00 AM - 7:00 PM
                                            <br />
                                            Saturday: 9:00 AM - 6:00 PM
                                            <br />
                                            Sunday: 10:00 AM - 5:00 PM
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* FAQ Section */}
                        <Card className="shadow-lg border-green-200">
                            <CardHeader className="bg-green-50">
                                <CardTitle className="text-xl text-green-800">Quick Questions?</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-green-800 mb-2">Do you offer plant delivery?</h4>
                                        <p className="text-green-700 text-sm">Yes! We offer local delivery within 25 miles of our store.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-green-800 mb-2">Can I return a plant if it doesn't thrive?</h4>
                                        <p className="text-green-700 text-sm">
                                            We offer a 30-day plant guarantee with proper care instructions followed.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-green-800 mb-2">Do you provide plant care consultations?</h4>
                                        <p className="text-green-700 text-sm">
                                            Our experts offer free consultations for plant care and garden planning.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}
