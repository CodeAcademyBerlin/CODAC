import React, { useState } from "react";
import Link from "next/link";

const Header = ({ title }: { title: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 z-10 w-full bg-teal-500 text-white shadow-md">
      <nav className="container mx-auto px-4 py-3 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <a href="/projects" className="text-xl font-bold">
            {title}
          </a>
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 text-white hover:text-teal-700"
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
        <div className={`${isMenuOpen ? "block" : "hidden"} mt-3 md:hidden`}>
          <a href="#" className="mb-2 block font-semibold hover:text-gray-100">
            Hello World!
          </a>
          <a href="#" className="mb-2 block font-semibold hover:text-gray-100">
            Career
          </a>
          <a href="#" className="mb-2 block font-semibold hover:text-gray-100">
            Mentors
          </a>
          <a href="#" className="mb-2 block font-semibold hover:text-gray-100">
            Calendar
          </a>
          <a href="#" className="mb-2 block font-semibold hover:text-gray-100">
            Login
          </a>
          <button className="rounded-md border border-white py-2 px-4 text-white hover:bg-teal-700 hover:text-white">
            Sign up
          </button>
        </div>
        <div className="hidden md:block">
          <a href="/" className="mx-4 font-semibold hover:text-gray-100">
            Home
          </a>
          <a href="#" className="mx-4 font-semibold hover:text-gray-100">
            Career
          </a>
          <a href="#" className="mx-4 font-semibold hover:text-gray-100">
            Mentors
          </a>
          <a href="#" className="mx-4 font-semibold hover:text-gray-100">
            Calendar
          </a>
          <a href="#" className="mx-4 font-semibold hover:text-gray-100">
            Login
          </a>
          <button className="rounded-md border border-white py-2 px-4 text-white hover:bg-teal-700 hover:text-white">
            Sign up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
