'use client';

import Link from "next/link";
import { useState } from "react";
import NextImage from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-2">
        {/* Logo */}
        <div className="group flex-shrink-0 pl-0 ml-0">
          <Link href="/" className="flex flex-col">
            <div className="relative h-12 w-48 md:h-16 md:w-64">
              <NextImage
                src="/Sinneo_Logo-removebg-preview.png"
                alt="Sinneo Group Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#divisions" className="hover:text-white transition">Divisions</a>
          <a href="#impact" className="hover:text-white transition">Innovation</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <Link
            href="#contact"
            className="ml-6 inline-block rounded-3xl px-5 py-3 text-base font-semibold shadow-xl transition-all hover:scale-105 hover:-translate-y-0.5 bg-blue-500 text-white hover:bg-blue-700"
          >
            Book a consult
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/80 px-6 py-4 transition-all duration-300 ease-in-out">
          <nav className="flex flex-col gap-4 text-sm font-medium text-gray-300">
            <a href="#about" className="hover:text-white transition" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#divisions" className="hover:text-white transition" onClick={() => setIsMenuOpen(false)}>Divisions</a>
            <a href="#innovation" className="hover:text-white transition" onClick={() => setIsMenuOpen(false)}>Innovation</a>
            <a href="#contact" className="hover:text-white transition" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <Link
              href="#contact"
              className="mt-2 inline-block rounded-lg px-6 py-3 text-center text-base font-semibold shadow-md transition bg-blue-600 text-white hover:bg-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a consult
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
