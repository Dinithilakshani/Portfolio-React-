import coverpage from "../../../assets/img.png"
import { Button } from "@/component/ui/Button.jsx"
import { Card, CardContent } from "@/component/ui/Card.jsx"
import { Badge } from "@/component/ui/Badge.jsx"
import { Leaf, ShoppingCart, Star, Truck, Shield, Heart } from "lucide-react"

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-emerald-50 to-green-50 py-20 lg:py-32">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 font-sans">
                                    New Collection Available
                                </Badge>
                                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight font-sans">
                                    Nurture Your Green Thumb
                                </h1>
                                <p className="text-xl text-gray-600 leading-relaxed font-sans">
                                    Explore our collection of plants & gardening supplies to transform your space into a thriving green
                                    oasis.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white font-sans">
                                    Shop Now
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-sans bg-transparent"
                                >
                                    Browse Plants
                                </Button>
                            </div>
                            <div className="flex items-center gap-8 pt-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900 font-sans">500+</div>
                                    <div className="text-sm text-gray-600 font-sans">Plant Varieties</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900 font-sans">10k+</div>
                                    <div className="text-sm text-gray-600 font-sans">Happy Customers</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900 font-sans">5★</div>
                                    <div className="text-sm text-gray-600 font-sans">Average Rating</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">

                            <img
                                src={coverpage}
                                alt="Beautiful collection of indoor plants"
                                className="rounded-2xl shadow-2xl w-[800px] h-[900px]"
                            />


                            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                                        <Leaf className="h-6 w-6 text-emerald-600"/>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 font-sans">Free Care Guide</div>
                                        <div className="text-sm text-gray-600 font-sans">With every purchase</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}


            {/* Featured Products */}
            <section className="py-20 bg-gray-50">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-sans">Best Sellers</h2>
                        <p className="text-xl text-gray-600 font-sans">Our most loved plants that bring joy to every home</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                name: "Monstera Deliciosa",
                                price: "$45",
                                rating: 4.9,
                                image: "monstera deliciosa in white ceramic pot",
                            },
                            { name: "Fiddle Leaf Fig", price: "$65", rating: 4.8, image: "fiddle leaf fig tree in modern planter" },
                            { name: "Snake Plant", price: "$35", rating: 5.0, image: "snake plant sansevieria in decorative pot" },
                            {
                                name: "Pothos Golden",
                                price: "$25",
                                rating: 4.9,
                                image: "golden pothos trailing plant in hanging pot",
                            },
                        ].map((plant, index) => (
                            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                                <CardContent className="p-0">
                                    <div className="relative overflow-hidden rounded-t-lg">
                                        <img
                                            src={`/placeholder.svg?height=300&width=300&query=${plant.image}`}
                                            alt={plant.name}
                                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute top-4 right-4">
                                            <Badge className="bg-emerald-600 text-white font-sans">Popular</Badge>
                                        </div>
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <div>
                                            <h3 className="font-semibold text-lg text-gray-900 font-sans">{plant.name}</h3>
                                            <div className="flex items-center gap-2 mt-2">
                                                <div className="flex items-center">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                    ))}
                                                </div>
                                                <span className="text-sm text-gray-600 font-sans">({plant.rating})</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-2xl font-bold text-emerald-600 font-sans">{plant.price}</span>
                                            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-500 text-white font-sans">
                                                Add to Cart
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-white">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-sans">What Our Customers Say</h2>
                        <p className="text-xl text-gray-600 font-sans">Join thousands of happy plant parents</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Sarah Johnson",
                                text: "Amazing quality plants and excellent customer service. My monstera arrived perfectly packaged and is thriving!",
                                rating: 5,
                            },
                            {
                                name: "Mike Chen",
                                text: "The care guides are incredibly helpful. As a beginner, I've successfully kept all my plants alive thanks to their tips.",
                                rating: 5,
                            },
                            {
                                name: "Emma Davis",
                                text: "Fast shipping and beautiful plants. The fiddle leaf fig I ordered exceeded my expectations. Highly recommend!",
                                rating: 5,
                            },
                        ].map((testimonial, index) => (
                            <Card key={index} className="border-0 shadow-sm">
                                <CardContent className="p-6 space-y-4">
                                    <div className="flex items-center">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 italic font-sans">"{testimonial.text}"</p>
                                    <div className="font-semibold text-gray-900 font-sans">- {testimonial.name}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-emerald-600">
                <div className="w-full text-center px-4 sm:px-6 lg:px-8">
                    <div className="space-y-8">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white font-sans">Ready to Start Your Plant Journey?</h2>
                        <p className="text-xl text-emerald-100 font-sans">
                            Join our community of plant lovers and get 10% off your first order
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 font-sans">
                                Shop Plants Now
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-emerald-600 font-sans bg-transparent"
                            >
                                Browse Care Guides
                            </Button>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}
