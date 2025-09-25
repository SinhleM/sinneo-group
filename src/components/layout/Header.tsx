'use client';

import Link from "next/link";
import { useState } from "react";
import NextImage from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg shadow-sm transition-colors">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <div className="group flex-shrink-0">
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-40 md:h-14 md:w-52 transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110">
              <NextImage
                src="/Sinneo_Logo-removebg-preview.png"
                alt="Sinneo Group Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          {[
            { label: "About", href: "#about" },
            { label: "Divisions", href: "#divisions" },
            { label: "Innovation", href: "#impact" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-600"
            >
              {item.label}
            </a>
          ))}

          <Link
            href="#contact"
            className="ml-6 inline-block rounded-full px-5 py-2.5 text-base font-semibold shadow-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Book a consult
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
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
          )}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg px-6 py-4 border-t border-gray-200">
          <nav className="flex flex-col gap-4 text-sm font-medium text-gray-700">
            {[
              { label: "About", href: "#about" },
              { label: "Divisions", href: "#divisions" },
              { label: "Innovation", href: "#impact" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Link
              href="#contact"
              className="mt-2 inline-block rounded-full px-6 py-3 text-center text-base font-semibold shadow-md bg-gradient-to-r from-blue-500 to-blue-700 text-white transition hover:scale-105 hover:shadow-lg"
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
