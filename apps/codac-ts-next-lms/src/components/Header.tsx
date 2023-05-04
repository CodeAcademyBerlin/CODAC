import React, { useState } from "react";
import Link from "next/link";

const Header = ({ title }: { title: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed left-0 top-0 z-10 w-full bg-teal-500 text-white shadow-md">
      <nav className="container mx-auto px-4 py-3 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            {title}
          </Link>
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
          <Link
            href="/courses"
            className="mb-2 block font-semibold hover:text-gray-100"
          >
            Courses
          </Link>
          <Link
            href="/projects"
            className="mb-2 block font-semibold hover:text-gray-100"
          >
            Projects
          </Link>
          <Link
            href="/spikes"
            className="mb-2 block font-semibold hover:text-gray-100"
          >
            Spikes
          </Link>
        </div>
        <div className="hidden md:block">
          <Link
            href="/courses"
            className="mx-4 font-semibold hover:text-gray-100"
          >
            Courses
          </Link>
          <Link
            href="/projects"
            className="mx-4 font-semibold hover:text-gray-100"
          >
            Projects
          </Link>
          <Link
            href="/spikes"
            className="mx-4 font-semibold hover:text-gray-100"
          >
            Spikes
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
