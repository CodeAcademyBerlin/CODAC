import React, { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-10 bg-teal-500 text-white shadow-md">
            <nav className="container mx-auto px-4 py-3 md:flex md:justify-between md:items-center">
                <div className="flex justify-between items-center">
                    <a href="/" className="font-bold text-xl">
                        Projects
                    </a>
                    <button
                        className="md:hidden"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6 text-white hover:text-teal-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`${
                        isMenuOpen ? "block" : "hidden"
                    } md:hidden mt-3`}
                >
                    <a
                        href="#"
                        className="block hover:text-gray-100 font-semibold mb-2"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="block hover:text-gray-100 font-semibold mb-2"
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="block hover:text-gray-100 font-semibold mb-2"
                    >
                        Contact
                    </a>
                    <a
                        href="#"
                        className="block hover:text-gray-100 font-semibold mb-2"
                    >
                        Login
                    </a>
                    <button className="border border-white text-white rounded-md py-2 px-4 hover:bg-teal-700 hover:text-white">
                        Sign up
                    </button>
                </div>
                <div className="hidden md:block">
                    <a
                        href="#"
                        className="hover:text-gray-100 mx-4 font-semibold"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="hover:text-gray-100 mx-4 font-semibold"
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="hover:text-gray-100 mx-4 font-semibold"
                    >
                        Contact
                    </a>
                    <a
                        href="#"
                        className="hover:text-gray-100 mx-4 font-semibold"
                    >
                        Login
                    </a>
                    <button className="border border-white text-white rounded-md py-2 px-4 hover:bg-teal-700 hover:text-white">
                        Sign up
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;