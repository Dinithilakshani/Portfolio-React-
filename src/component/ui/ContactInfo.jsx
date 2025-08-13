import { Card, CardContent } from "@/component/ui/Card.jsx"
import { MapPin, Phone, Mail, Clock, Leaf } from "lucide-react"

export function ContactInfo() {
    return (
        <div className="space-y-8">
            {/* Welcome Message */}
            <Card className="bg-green-700 text-white shadow-lg">
                <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                        <Leaf className="w-8 h-8 text-lime-300" />
                        <h2 className="text-2xl font-bold">Green Haven Nursery</h2>
                    </div>
                    <p className="text-green-100 leading-relaxed">
                        Welcome to our botanical paradise! Whether you're a seasoned gardener or just starting your plant journey,
                        we're here to help you create the green space of your dreams.
                    </p>
                </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="grid gap-6">
                <Card className="border-green-200 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-lime-100 p-3 rounded-full">
                                <MapPin className="w-6 h-6 text-green-700" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-green-800 mb-1">Visit Our Nursery</h3>
                                <p className="text-green-600">
                                    123 Garden Lane
                                    <br />
                                    Botanical District
                                    <br />
                                    Green City, GC 12345
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-green-200 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-lime-100 p-3 rounded-full">
                                <Phone className="w-6 h-6 text-green-700" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-green-800 mb-1">Call Us</h3>
                                <p className="text-green-600">
                                    (555) 123-PLANT
                                    <br />
                                    <span className="text-sm text-green-500">Free plant care consultation</span>
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-green-200 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-lime-100 p-3 rounded-full">
                                <Mail className="w-6 h-6 text-green-700" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-green-800 mb-1">Email Us</h3>
                                <p className="text-green-600">
                                    hello@greenhaven.com
                                    <br />
                                    <span className="text-sm text-green-500">We respond within 24 hours</span>
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-green-200 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-lime-100 p-3 rounded-full">
                                <Clock className="w-6 h-6 text-green-700" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-green-800 mb-1">Opening Hours</h3>
                                <div className="text-green-600 space-y-1">
                                    <p>Monday - Friday: 8:00 AM - 7:00 PM</p>
                                    <p>Saturday: 8:00 AM - 6:00 PM</p>
                                    <p>Sunday: 10:00 AM - 5:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Additional Info */}
            <Card className="border-lime-200 bg-lime-50">
                <CardContent className="p-6 text-center">
                    <Leaf className="w-12 h-12 text-lime-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-green-800 mb-2">Plant Care Tips</h3>
                    <p className="text-green-600 text-sm">
                        Follow us on social media for daily plant care tips and seasonal gardening advice!
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
