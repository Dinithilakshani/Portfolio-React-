// components/Footer.jsx
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Brand Column */}
                    <div>
                        <div className="text-2xl font-bold mb-4">🌿 Verde</div>
                        <p className="text-gray-400 mb-4">Bringing nature to your doorstep</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">📘</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">📷</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">🐦</a>
                        </div>
                    </div>

                    {/* Shop Links Column */}
                    <div>
                        <h4 className="font-semibold mb-4">Shop</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Indoor Plants</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Outdoor Plants</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Succulents</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Plant Care</a></li>
                        </ul>
                    </div>

                    {/* Support Column */}
                    <div>
                        <h4 className="font-semibold mb-4">Support</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Plant Care Guide</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>📧 hello@verde.com</li>
                            <li>📞 (555) 123-4567</li>
                            <li>📍 123 Garden Street<br/>Plant City, PC 12345</li>
                        </ul>
                    </div>

                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 Verde Plant Shop. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
