// File: app/components/layout/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between py-8 mb-4">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-sky-400 flex items-center justify-center text-white font-semibold">
          SG
        </div>
        <div>
          <h1 className="text-lg font-semibold">Sinneo Group</h1>
          <p className="text-sm text-gray-500">
            Building ventures that transform business
          </p>
        </div>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
        <a href="#about" className="hover:underline">About</a>
        <a href="#divisions" className="hover:underline">Divisions</a>
        <a href="#impact" className="hover:underline">Innovation</a>
        <a href="#news" className="hover:underline">News</a>
        <a href="#contact" className="hover:underline">Contact</a>
        <Link href="#contact" className="ml-4 inline-block rounded-md px-4 py-2 border border-transparent bg-sky-600 text-white text-sm">
          Inquire
        </Link>
      </nav>
    </header>
  );
}