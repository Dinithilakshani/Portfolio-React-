import React from "react";

import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaSearch, FaUser, FaShoppingCart, FaBars } from "react-icons/fa";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                            </svg>
                        </div>
                        <div className="text-xl font-bold text-gray-800">
                            <span className="text-green-600">Plant</span>Paradise
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="/"
                           className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>

                        {/* Plants Dropdown */}
                        <div className="relative group">
                            <button
                                className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                                Plants <FaChevronDown className="ml-1 text-xs"/>
                            </button>
                            <div
                                className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="py-1">
                                    {["Indoor Plants", "Outdoor Plants", "Succulents", "Air Plants"].map((item) => (
                                        <a key={item} href="#"
                                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600">
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <a href="#"
                           className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Accessories</a>
                        <a href="/service"
                           className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"> Service</a>
                        <a href="/about"
                           className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
                        <a href="/contact"
                           className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>

                    </div>

                    {/* Right Icons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <FaSearch className="text-gray-600 hover:text-green-600 cursor-pointer" />
                        <FaUser className="text-gray-600 hover:text-green-600 cursor-pointer" />
                        <div className="relative cursor-pointer">
                            <FaShoppingCart className="text-gray-600 hover:text-green-600" />
                            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <FaBars
                            className="text-gray-600 hover:text-green-600 cursor-pointer"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50">Home</a>
                    <button
                        className="w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 flex justify-between"
                        onClick={() => setSubmenuOpen(!submenuOpen)}
                    >
                        Plants {submenuOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    {submenuOpen && (
                        <div className="pl-6">
                            {["Indoor Plants", "Outdoor Plants", "Succulents", "Air Plants"].map((item) => (
                                <a key={item} href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50">
                                    {item}
                                </a>
                            ))}
                        </div>
                    )}
                    <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50">Accessories</a>
                    <a href="/Service" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50">Care Guide</a>
                    <a href="/about" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50">About</a>
                    <a href="/Contact" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50">Contact</a>
                </div>
            )}
        </nav>
    );
}
