import { Card, CardContent } from "@/component/ui/Card.jsx"
import { Badge } from "@/component/ui/Badge.jsx"
import my4to from "../../../assets/IMG-20240501-WA0008.jpg"
import Succulent_plant from "../../../assets/Succulent_plant.png"
import indoor from "../../../assets/indoor.png"
import harder from "../../../assets/img_1.png"
export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-emerald-100">
            {/* Header Section */}
            <div className="relative overflow-hidden bg-emerald-600 text-white">
                {/* Animated overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-emerald-900/20 animate-pulse"></div>

                {/* Decorative plant icons */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-10 left-10 text-emerald-200 opacity-30 animate-bounce">🌿</div>
                    <div className="absolute top-20 right-16 text-emerald-300 opacity-30 animate-bounce delay-200">🌱</div>
                    <div className="absolute bottom-10 left-1/3 text-emerald-100 opacity-40 animate-bounce delay-500">🍀</div>
                </div>

                {/* Content */}
                <div className="relative w-full px-6 py-20 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-4 tracking-wide">
                        About
                    </h1>
                    <p className="text-lg md:text-2xl text-emerald-50 max-w-2xl mx-auto leading-relaxed">
                        Nurturing green dreams, one plant at a time
                    </p>
                </div>

                {/* SVG Wave Divider */}
                <svg className="absolute bottom-0 w-full h-16 text-emerald-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill="currentColor">
                    <path d="M0,224L48,224C96,224,192,224,288,208C384,192,480,160,576,170.7C672,181,768,235,864,240C960,245,1056,203,1152,170.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L0,320Z"></path>
                </svg>
            </div>



    <div className="w-full px-6 py-12">
                {/* Main Story Section */}
                <Card className="mb-12 shadow-lg">
                    <CardContent className="p-8">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <img
                                    src={my4to}
                                    alt="Dinithi Palliyaguru in her plant nursery"
                                    className="rounded-lg shadow-md object-cover w-[1000px] h-[400px]"
                                />


                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-emerald-800 mb-4">Meet Dinithi Palliyaguru</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Welcome to my green sanctuary! I'm Dinithi Palliyaguru, and I've been passionate about plants for over
                                    a decade. What started as a small collection of succulents on my windowsill has blossomed into a
                                    thriving plant shop dedicated to bringing nature into your home.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    My journey began when I discovered the therapeutic power of gardening during my university years. The
                                    simple act of nurturing a seed into a flourishing plant became my meditation, my joy, and eventually,
                                    my calling.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Mission & Values */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <Card className="shadow-lg">
                        <CardContent className="p-6">
                            <h3 className="text-2xl font-bold text-emerald-700 mb-4">Our Mission</h3>
                            <p className="text-gray-700 leading-relaxed">
                                To make plant parenthood accessible and joyful for everyone. Whether you're a seasoned gardener or just
                                starting your green journey, I'm here to help you find the perfect plant companions and provide the
                                knowledge you need to help them thrive.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="shadow-lg">
                        <CardContent className="p-6">
                            <h3 className="text-2xl font-bold text-emerald-700 mb-4">Our Values</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                                    Sustainable growing practices
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                                    Personalized plant care guidance
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                                    Building a community of plant lovers
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                                    Quality plants at fair prices
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* Expertise Section */}
                <Card className="mb-12 shadow-lg">
                    <CardContent className="p-8">
                        <h3 className="text-3xl font-bold text-emerald-800 mb-6 text-center">My Plant Expertise</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <img
                                    src={indoor}
                                    alt="Indoor plants"
                                    className="rounded-lg mx-auto mb-4 w-full h-48 object-cover"
                                />
                                <h4 className="font-semibold text-emerald-700 mb-2">Indoor Plants</h4>
                                <p className="text-sm text-gray-600">
                                    Specializing in low-light and air-purifying plants perfect for any home
                                </p>
                            </div>
                            <div className="text-center">
                                <img
                                    src={Succulent_plant}
                                    alt="Succulents"
                                    className="rounded-lg mx-auto mb-4 w-full h-48 object-cover"
                                />
                                <h4 className="font-semibold text-emerald-700 mb-2">Succulents</h4>
                                <p className="text-sm text-gray-600">
                                    Drought-resistant beauties that are perfect for beginners and busy lifestyles
                                </p>
                            </div>
                            <div className="text-center">
                                <img
                                    src={harder}
                                    alt="Herbs"
                                    className="rounded-lg mx-auto mb-4 w-full h-48 object-cover"
                                />
                                <h4 className="font-semibold text-emerald-700 mb-2">Herbs</h4>
                                <p className="text-sm text-gray-600">
                                    Fresh culinary herbs to enhance your cooking and connect you with your food
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Certifications & Achievements */}
                <Card className="mb-12 shadow-lg">
                    <CardContent className="p-8">
                        <h3 className="text-3xl font-bold text-emerald-800 mb-6 text-center">Certifications & Achievements</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            <Badge variant="secondary" className="px-4 py-2 text-sm">
                                Certified Horticulturist
                            </Badge>
                            <Badge variant="secondary" className="px-4 py-2 text-sm">
                                Sustainable Gardening Specialist
                            </Badge>
                            <Badge variant="secondary" className="px-4 py-2 text-sm">
                                Plant Disease Diagnostician
                            </Badge>
                            <Badge variant="secondary" className="px-4 py-2 text-sm">
                                5+ Years Experience
                            </Badge>
                            <Badge variant="secondary" className="px-4 py-2 text-sm">
                                1000+ Happy Plant Parents
                            </Badge>
                        </div>
                    </CardContent>
                </Card>

                {/* Personal Touch */}
                <Card className="shadow-lg">
                    <CardContent className="p-8 text-center">
                        <h3 className="text-3xl font-bold text-emerald-800 mb-4">Let's Grow Together</h3>
                        <p className="text-gray-700 leading-relaxed mx-auto mb-6">
                            Every plant has a story, and I love being part of yours. When you visit my shop, you're not just buying a
                            plant – you're joining a community of plant enthusiasts who believe in the power of green living. I'm
                            always here to answer your questions, troubleshoot plant problems, and celebrate your gardening victories!
                        </p>
                        <div className="flex justify-center gap-4 text-sm text-emerald-600">
                            <span>📧 dinithi@plantshop.com</span>
                            <span>📱 +94 77 123 4567</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
