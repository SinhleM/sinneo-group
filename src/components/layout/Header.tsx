"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-sky-500 flex items-center justify-center text-white font-bold shadow-md">
            SG
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Sinneo Group</h1>
            <p className="text-xs text-gray-500">
              Building ventures that transform business
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#about" className="hover:text-indigo-600 transition">About</a>
          <a href="#divisions" className="hover:text-indigo-600 transition">Divisions</a>
          <a href="#impact" className="hover:text-indigo-600 transition">Innovation</a>
          <a href="#news" className="hover:text-indigo-600 transition">News</a>
          <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
          <Link
            href="#contact"
            className="ml-6 inline-block rounded-md px-5 py-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 text-white shadow-md hover:scale-105 transition"
          >
            Inquire
          </Link>
        </nav>
      </div>
    </header>
  );
}
