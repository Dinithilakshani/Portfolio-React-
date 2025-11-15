import React from "react";



const Navbar = () => {
    return (
        <nav className="bg-black border-b-2 border-pink-500 px-6 py-4 shadow-lg shadow-pink-500/20">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <h1 className="text-3xl font-bold text-pink-500 hover:text-pink-400 transition-all duration-300 hover:scale-110 cursor-pointer">
                    Portfolio
                </h1>

                {/* Navigation Links */}

            </div>
        </nav>
    );
};

export default Navbar;
