"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/30 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Header Content */}
        <div>
          <h1 className="text-lg font-semibold text-white">Sinneo Group</h1>
          <p className="text-xs text-gray-200">
            Building ventures that transform business
          </p>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#divisions" className="hover:text-white transition">Divisions</a>
          <a href="#impact" className="hover:text-white transition">Innovation</a>
          <a href="#news" className="hover:text-white transition">News</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <Link
            href="#contact"
            className="ml-6 inline-block rounded-md px-5 py-2 bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md hover:scale-105 transition"
          >
            Inquire
          </Link>
        </nav>
      </div>
    </header>
  );
}
