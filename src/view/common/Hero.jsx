import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Code, Sparkles, ArrowDown, User, Briefcase, Award, Terminal, GraduationCap, BookOpen, Calendar, ExternalLink, Folder, Send, MapPin, Phone } from 'lucide-react';

export default function Portfolio() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null);
    const educationRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState('');

    useEffect(() => {
        setIsVisible(true);

        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const scrollToAbout = () => {
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setFormStatus(''), 5000);
    };

    const glowStyle = {
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(236, 72, 153, 0.15), transparent 80%)`
    };

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden relative">
            {/* Animated background glow */}
            <div
                className="fixed inset-0 transition-opacity duration-300 pointer-events-none"
                style={glowStyle}
            />

            {/* Gradient orbs */}
            <div className="fixed top-20 left-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="fixed bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
                {/* Profile avatar */}
                <img
                    src="src/image/WhatsApp%20Image%202025-09-08%20at%2011.48.20.jpeg"  // Replace with your actual image path
                    alt="Dinithi Palliyaguru"
                    className="relative w-32 h-32 md:w-80 md:h-80 object-cover rounded-full shadow-2xl transform group-hover:scale-110 transition-transform duration-300 z-10 border-4 border-pink-500/30"
                />

                {/* Name and title */}
                <div
                    className={`text-center mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                        Hi, I'm <span
                        className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Dinithi Palliyaguru</span>
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-gray-400 text-xl md:text-2xl">
                        <Sparkles className="w-6 h-6 text-pink-500"/>
                        <p>Frontend Developer</p>
                    </div>
                </div>

                {/* Description */}
                <p className={`text-gray-400 text-center max-w-2xl text-lg md:text-xl mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                    Passionate about creating beautiful, functional web experiences with modern technologies.
                </p>

                {/* Social links */}
                <div
                    className={`flex gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                    {[
                        {Icon: Github, label: 'GitHub', href: 'https://github.com/Dinithilakshani'},
                        {
                            Icon: Linkedin,
                            label: 'LinkedIn',
                            href: 'https://www.linkedin.com/in/dinithi-palliyaguru-8b4505266/'
                        },
                        {Icon: Mail, label: 'Email', href: 'dinithipalliyaguru@gmail.com'}
                    ].map(({Icon, label, href}, index) => (
                        <a
                            key={label}
                            href={href}
                            className="group relative p-4 rounded-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-pink-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50"
                            aria-label={label}
                            style={{animationDelay: `${index * 100}ms`}}
                        >
                            <Icon className="w-7 h-7 text-pink-500 group-hover:scale-110 transition-transform"/>
                            <span
                                className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {label}
              </span>
                        </a>
                    ))}
                </div>

                {/* Scroll indicator */}
                <div
                    onClick={scrollToAbout}
                    className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 cursor-pointer ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div
                        className="flex flex-col items-center gap-2 animate-bounce hover:scale-110 transition-transform">
                        <span className="text-sm text-gray-500">Scroll to explore</span>
                        <ArrowDown className="w-5 h-5 text-pink-500"/>
                    </div>
                </div>
            </div>

            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="fixed w-1 h-1 bg-pink-500/30 rounded-full animate-pulse"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${2 + Math.random() * 3}s`
                    }}
                />
            ))}

            {/* About Section */}
            <section ref={aboutRef} className="relative z-10 min-h-screen py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    {/* My Story Section */}
                    <div className="mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-pink-500">
                            My Story
                        </h2>

                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                I'm a passionate frontend developer born in 2003, dedicated to creating
                                clean, responsive, and user-friendly web interfaces. My journey in tech
                                began during my school and early college years, where I first discovered
                                my love for building beautiful and interactive web experiences.
                            </p>

                            <p>
                                With strong skills in modern frontend technologies like React, Tailwind CSS,
                                and JavaScript, I focus on crafting smooth UI/UX experiences. I believe in
                                writing code that is simple, maintainable, and visually appealing.
                            </p>

                            <p>
                                When I’m not coding, I enjoy learning new tools, improving my creativity,
                                and exploring design trends. I also love sharing knowledge and helping
                                others grow in the developer community.
                            </p>
                        </div>
                    </div>

                    {/* Skills & Expertise Section */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-pink-500">
                            Skills & Expertise
                        </h2>

                        {/* Frontend Skills */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold mb-6 text-pink-500">Frontend</h3>
                            <div className="flex flex-wrap gap-3">
                                {['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Next.js'].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-6 py-3 bg-pink-500/10 border border-pink-500/30 rounded-full text-pink-300 font-medium hover:bg-pink-500/20 hover:border-pink-500/50 transition-all duration-300 cursor-default"
                                    >
                    {skill}
                  </span>
                                ))}
                            </div>
                        </div>

                        {/* Backend Skills */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold mb-6 text-pink-500">Backend</h3>
                            <div className="flex flex-wrap gap-3">
                                {['Node.js', 'Express', 'MongoDB',].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-6 py-3 bg-pink-500/10 border border-pink-500/30 rounded-full text-pink-300 font-medium hover:bg-pink-500/20 hover:border-pink-500/50 transition-all duration-300 cursor-default"
                                    >
                    {skill}
                  </span>
                                ))}
                            </div>
                        </div>

                        {/* Tools & Other Skills */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold mb-6 text-pink-500">Tools & Other</h3>
                            <div className="flex flex-wrap gap-3">
                                {['Git', 'GitHub', 'VS Code', 'Docker', 'Postman', 'Figma'].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-6 py-3 bg-pink-500/10 border border-pink-500/30 rounded-full text-pink-300 font-medium hover:bg-pink-500/20 hover:border-pink-500/50 transition-all duration-300 cursor-default"
                                    >
                    {skill}
                  </span>
                                ))}
                            </div>
                        </div>

                        {/* Stats */}

                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section ref={educationRef} className="relative z-10 min-h-screen py-20 px-6">


                {/* GDSE */}
                <div className="relative pl-8 border-l-2 border-pink-500/30">
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-pink-500 rounded-full border-4 border-black"/>
                    <div
                        className="bg-gray-900/30 border border-pink-500/20 rounded-xl p-6 hover:border-pink-500/50 transition-all duration-300 hover:scale-[1.02]">
                        <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                            <div>
                                <h3 className="text-2xl font-bold text-pink-500 mb-2">
                                    Graduate Diploma in Software Engineering (GDSE)
                                </h3>
                                <p className="text-gray-300 font-medium">
                                            Institute of Java & Software Engineering (IJSE)
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <Calendar className="w-4 h-4" />
                                        <span>2023 - 2025</span>
                                    </div>
                                </div>
                                <p className="text-gray-400 mb-4">
                                    Advanced diploma program covering full-stack development, algorithms, data structures, and enterprise application development.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['Advanced Java', 'Spring Framework', 'MySQL', 'Git & GitHub', 'Agile'].map((topic) => (
                                        <span
                                            key={topic}
                                            className="px-3 py-1 bg-pink-500/10 border border-pink-500/30 rounded-full text-pink-300 text-sm"
                                        >
                      {topic}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* A/L (Advanced Level) */}
                        <div className="relative pl-8 border-l-2 border-pink-500/30">
                            <div className="absolute -left-3 top-0 w-6 h-6 bg-pink-500 rounded-full border-4 border-black" />
                            <div className="bg-gray-900/30 border border-pink-500/20 rounded-xl p-6 hover:border-pink-500/50 transition-all duration-300 hover:scale-[1.02]">
                                <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                                    <div>
                                        <h3 className="text-2xl font-bold text-pink-500 mb-2">
                                            G.C.E Advanced Level (A/L)
                                        </h3>
                                        <p className="text-gray-300 font-medium">
                                            Physical Science Stream
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <Calendar className="w-4 h-4" />
                                        <span>2020 - 2021</span>
                                    </div>
                                </div>
                                <p className="text-gray-400 mb-4">
                                    Completed Advanced Level education with focus on Mathematics, Physics, and Chemistry - building strong analytical and problem-solving foundations.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['Combined Mathematics', 'Physics', 'Chemistry', 'ICT'].map((subject) => (
                                        <span
                                            key={subject}
                                            className="px-3 py-1 bg-pink-500/10 border border-pink-500/30 rounded-full text-pink-300 text-sm"
                                        >
                      {subject}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* O/L (Ordinary Level) */}
                        <div className="relative pl-8 border-l-2 border-pink-500/30">
                            <div className="absolute -left-3 top-0 w-6 h-6 bg-pink-500 rounded-full border-4 border-black" />
                            <div className="bg-gray-900/30 border border-pink-500/20 rounded-xl p-6 hover:border-pink-500/50 transition-all duration-300 hover:scale-[1.02]">
                                <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                                    <div>
                                        <h3 className="text-2xl font-bold text-pink-500 mb-2">
                                            G.C.E Ordinary Level (O/L)
                                        </h3>
                                        <p className="text-gray-300 font-medium">
                                            General Education
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <Calendar className="w-4 h-4" />
                                        <span>2018</span>
                                    </div>
                                </div>
                                <p className="text-gray-400 mb-4">
                                    Successfully completed Ordinary Level examination with distinction, establishing a strong foundation in core academic subjects.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['Mathematics', 'Science', 'English', 'ICT', '9 Subjects Passed'].map((achievement) => (
                                        <span
                                            key={achievement}
                                            className="px-3 py-1 bg-pink-500/10 border border-pink-500/30 rounded-full text-pink-300 text-sm"
                                        >
                      {achievement}
                    </span>
                                    ))}
                                </div>
                            </div>

                    {/* Certifications Section */}

                </div>
            </section>

            {/* Projects Section */}
            <section ref={projectsRef} className="relative z-10 min-h-screen py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Projects Header */}
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-pink-500">
                            Projects
                        </h2>
                        <p className="text-gray-300 text-lg">
                            A showcase of my work - from web applications to full-stack solutions.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Project 1 */}
                        {/* Auction System Project */}
                        <div
                            className="group bg-gray-900/30 border border-pink-500/20 rounded-xl overflow-hidden
  hover:border-pink-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl
  hover:shadow-pink-500/10"
                        >

                            {/* Project Image */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src="/src/image/gettyimages-1294081164-612x612.jpg"   // <-- Replace with your auction project image
                                    alt="Auction System Screenshot"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-500 transition-colors">
                                    Vehicle Auction System (Spring Boot + MySQL)
                                </h3>

                                <p className="text-gray-400 mb-4 text-sm">
                                    A complete auction management system with user authentication, bidding module,
                                    admin dashboard, and live bid updates built using Spring Boot and MySQL.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {['Spring Boot', 'MySQL', 'REST API'].map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-pink-500/10 border border-pink-500/30 rounded text-pink-300 text-xs"
                                        >
          {tech}
        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <a
                                        href="https://github.com/Dinithilakshani/TruthAuction-Spring-Boot-.git"
                                        className="flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors text-sm"
                                    >
                                        <Github className="w-4 h-4" />
                                        Code
                                    </a>

                                    <a
                                        href="#"
                                        className="flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors text-sm"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>


                        {/* Project 2 */}
                        <div className="group bg-gray-900/30 border border-pink-500/20 rounded-xl overflow-hidden
    hover:border-pink-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl
    hover:shadow-pink-500/10">

                            {/* Project Image */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src="/src/image/pexels-kowalievska-1148957 (1).jpg"  // <-- Replace this with your image path
                                    alt="Dinu Clothing Shop Screenshot"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-500 transition-colors">
                                    Dinu Clothing Shop – React & Tailwind
                                </h3>

                                <p className="text-gray-400 mb-4 text-sm">
                                    An online clothing shop built with React and Tailwind CSS featuring product
                                    listings,
                                    categories, animations, and a modern shopping UI.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {['React', 'Tailwind', 'Mongo DB' ,'Framer Motion'].map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-pink-500/10 border border-pink-500/30 rounded text-pink-300 text-xs"
                                        >
          {tech}
        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <a
                                        href="#"
                                        className="flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors text-sm"
                                    >
                                        <Github className="w-4 h-4"/>
                                        Code
                                    </a>

                                    <a
                                        href="#"
                                        className="flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors text-sm"
                                    >
                                        <ExternalLink className="w-4 h-4"/>
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>


                        {/* Project 3 */}
                        <div className="group bg-gray-900/30 border border-pink-500/20 rounded-xl overflow-hidden
    hover:border-pink-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl
    hover:shadow-pink-500/10">

                            {/* Project Image */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src="/assets/car-parking-system.png"   // <-- Replace with your image path
                                    alt="Car Parking System Microservice Screenshot"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-500 transition-colors">
                                    Car Parking System – Microservices + Docker
                                </h3>

                                <p className="text-gray-400 mb-4 text-sm">
                                    A distributed car parking management system built using microservices architecture,
                                    Docker containers, service discovery, gateway routing, and load balancing.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {['Spring Boot', 'Microservices', 'Docker', 'API Gateway'].map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-pink-500/10 border border-pink-500/30 rounded text-pink-300 text-xs"
                                        >
          {tech}
        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <a
                                        href="https://github.com/Dinithilakshani/Smart-Parking-System-MicroService-.git"
                                        className="flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors text-sm"
                                    >
                                        <Github className="w-4 h-4"/>
                                        Code
                                    </a>

                                    <a
                                        href="#"
                                        className="flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors text-sm"
                                    >
                                        <ExternalLink className="w-4 h-4"/>
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Project 4 */}
                        <div className="group bg-gray-900/30 border border-pink-500/20 rounded-xl overflow-hidden
    hover:border-pink-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl
    hover:shadow-pink-500/10">

                            {/* Project Image */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src="/src/image/istockphoto-2110310187-612x612.webp"   // <-- Replace with your project picture
                                    alt="Charlies House Screenshot"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-500 transition-colors">
                                    Charlie’s House (Bootstrap)
                                </h3>

                                <p className="text-gray-400 mb-4 text-sm">
                                    A modern Bootstrap-based website with clean UI, responsive layout, and smooth
                                    components.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {['HTML', 'CSS', 'Bootstrap'].map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-pink-500/10 border border-pink-500/30 rounded text-pink-300 text-xs"
                                        >
          {tech}
        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <a
                                        href="https://github.com/Dinithilakshani/Charlies-House.git"
                                        className="flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors text-sm"
                                    >
                                        <Github className="w-4 h-4"/>
                                        Code
                                    </a>

                                    <a
                                        href="#"
                                        className="flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors text-sm"
                                    >
                                        <ExternalLink className="w-4 h-4"/>
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Project 5 */}
                        <div
                            className="group bg-gray-900/30 border border-pink-500/20 rounded-xl overflow-hidden hover:border-pink-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/10">

                            {/* Project Image */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src="src/image/240_F_954800751_M0QGgNskbUcytkRhSp7a5qLnyp0pYOXa.jpg"   // <-- Replace with your project picture
                                    alt="Recipe Finder Screenshot"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-500 transition-colors">
                                    Recipe Finder
                                </h3>

                                <p className="text-gray-400 mb-4 text-sm">
                                    A simple HTML & CSS food recipe website with categories, search option, and
                                    beautiful UI layouts.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {['HTML', 'CSS', 'Responsive Design'].map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-pink-500/10 border border-pink-500/30 rounded text-pink-300 text-xs"
                                        >
          {tech}
        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <a
                                        href="https://github.com/Dinithilakshani/Food-Recipe-.git"
                                        className="flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors text-sm"
                                    >
                                        <Github className="w-4 h-4"/>
                                        Code
                                    </a>

                                    <a
                                        href="#"
                                        className="flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors text-sm"
                                    >
                                        <ExternalLink className="w-4 h-4"/>
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>


                        {/* Project 6 */}
                        <div
                            className="group bg-gray-900/30 border border-pink-500/20 rounded-xl overflow-hidden hover:border-pink-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/10">

                            {/* Project Image */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src="src/image/images.jpg"     // <-- Replace with your project image path
                                    alt="PetCare App Screenshot"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-500 transition-colors">
                                    PetCare Mobile App
                                </h3>

                                <p className="text-gray-400 mb-4 text-sm">
                                    Mobile application built with React Native + Expo for pet health tracking,
                                    appointments, and care reminders.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {['React Native', 'Expo', 'Tailwind'].map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-pink-500/10 border border-pink-500/30 rounded text-pink-300 text-xs"
                                        >
          {tech}
        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <a
                                        href="https://github.com/Dinithilakshani/PetCare-App-Mobile-Application-.git"
                                        className="flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors text-sm"
                                    >
                                        <Github className="w-4 h-4"/>
                                        Code
                                    </a>

                                    <a
                                        href=""
                                        className="flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors text-sm"
                                    >
                                        <ExternalLink className="w-4 h-4"/>
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* View More Button */}
                        <div className="text-center mt-12">
                            <a
                                href="https://github.com/Dinithilakshani/PetCare-App-Mobile-Application-.git"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-pink-500/10 border border-pink-500/30 rounded-full text-pink-500 font-medium hover:bg-pink-500/20 hover:border-pink-500/50 transition-all duration-300 hover:scale-105"
                            >
                                <Github className="w-5 h-5"/>
                                View More Projects on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section ref={contactRef} className="relative z-10 min-h-screen py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Contact Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-pink-500">
                            Get In Touch
                        </h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to
                            discussing new opportunities and ideas.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div>
                            <h3 className="text-2xl font-bold mb-8 text-white">Contact Information</h3>

                            <div className="space-y-6">
                                {/* Email */}
                                <div
                                    className="flex items-start gap-4 p-4 bg-gray-900/30 border border-pink-500/20 rounded-xl hover:border-pink-500/50 transition-all duration-300">
                                    <div className="p-3 bg-pink-500/10 rounded-lg">
                                        <Mail className="w-6 h-6 text-pink-500"/>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Email</h4>
                                        <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-pink-500 transition-colors">
                                            your.email@example.com
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4 p-4 bg-gray-900/30 border border-pink-500/20 rounded-xl hover:border-pink-500/50 transition-all duration-300">
                                    <div className="p-3 bg-pink-500/10 rounded-lg">
                                        <Phone className="w-6 h-6 text-pink-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Phone</h4>
                                        <a href="tel:+94787088752" className="text-gray-400 hover:text-pink-500 transition-colors">
                                            +94 12 345 6789
                                        </a>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start gap-4 p-4 bg-gray-900/30 border border-pink-500/20 rounded-xl hover:border-pink-500/50 transition-all duration-300">
                                    <div className="p-3 bg-pink-500/10 rounded-lg">
                                        <MapPin className="w-6 h-6 text-pink-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Location</h4>
                                        <p className="text-gray-400">
                                            Galle, Sri Lanka
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="mt-8">
                                <h4 className="font-semibold text-white mb-4">Connect With Me</h4>
                                <div className="flex gap-4">
                                    {[
                                        { Icon: Github, href: 'https://github.com/Dinithilakshani', label: 'GitHub' },
                                        { Icon: Linkedin, href: 'https://www.linkedin.com/in/dinithi-palliyaguru-8b4505266/', label: 'LinkedIn' },
                                        { Icon: Mail, href: 'dinithipalliyaguru@gmail.com', label: 'Email' }
                                    ].map(({ Icon, href, label }) => (
                                        <a
                                            key={label}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-4 bg-gray-900/30 border border-pink-500/20 rounded-xl hover:border-pink-500/50 hover:scale-110 transition-all duration-300 group"
                                            aria-label={label}
                                        >
                                            <Icon className="w-6 h-6 text-pink-500 group-hover:scale-110 transition-transform" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <h3 className="text-2xl font-bold mb-8 text-white">Send Me a Message</h3>

                            <div className="bg-gray-900/30 border border-pink-500/20 rounded-xl p-6">
                                {formStatus && (
                                    <div className="mb-6 p-4 bg-pink-500/10 border border-pink-500/30 rounded-lg text-pink-300">
                                        {formStatus}
                                    </div>
                                )}

                                <div onSubmit={handleSubmit}>
                                    {/* Name Input */}
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20 text-white transition-all duration-300"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    {/* Email Input */}
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20 text-white transition-all duration-300"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    {/* Subject Input */}
                                    <div className="mb-4">
                                        <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20 text-white transition-all duration-300"
                                            placeholder="Project Inquiry"
                                        />
                                    </div>

                                    {/* Message Input */}
                                    <div className="mb-6">
                                        <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows="5"
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20 text-white transition-all duration-300 resize-none"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        onClick={handleSubmit}
                                        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50"
                                    >
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 py-8 px-6 border-t border-gray-800">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © 2024 Dinithi Palliyaguru. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors text-sm">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors text-sm">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}