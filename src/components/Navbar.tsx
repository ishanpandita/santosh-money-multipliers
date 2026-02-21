"use client"; // ✅ MOVED to top (must be first line)

import Link from "next/link";
import Image from "next/image";
import { useState } from "react"; // ✅ ADDED

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // ✅ ADDED

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ✅ CHANGED h-15 → h-16 (15 is not valid Tailwind height) */}
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/slogo.png"
              alt="Santosh Money Multiplier"
              width={110}
              height={110}
              className="h-12 w-auto object-contain"
              priority
            />
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-teal-700 to-emerald-700 bg-clip-text text-transparent">
                Santosh Money Multiplier
              </h1>
              <p className="text-[11px] leading-4 text-slate-500">
                Financial Security & Growth
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-slate-700 hover:text-teal-700 font-medium transition-colors relative group">
              Home
            </Link>

            <Link href="/#about-section" className="text-slate-700 hover:text-teal-700 font-medium transition-colors relative group">
              About
            </Link>

            <Link href="/#services-section" className="text-slate-700 hover:text-teal-700 font-medium transition-colors relative group">
              Services
            </Link>

            <Link href="/#contact-section" className="text-slate-700 hover:text-teal-700 font-medium transition-colors relative group">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)} // ✅ ADDED toggle
              className="text-slate-700 hover:text-teal-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
        </div>

        {/* ✅ ADDED Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4 border-t pt-4">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="block text-slate-700"
            >
              Home
            </Link>

            <Link
              href="/#about-section"
              onClick={() => setMenuOpen(false)}
              className="block text-slate-700"
            >
              About
            </Link>

            <Link
              href="/#services-section"
              onClick={() => setMenuOpen(false)}
              className="block text-slate-700"
            >
              Services
            </Link>

            <Link
              href="/#contact-section"
              onClick={() => setMenuOpen(false)}
              className="block text-slate-700"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}