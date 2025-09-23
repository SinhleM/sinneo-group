// File: app/components/sections/Hero.tsx
'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20"
    >
      <div>
        <p className="text-sm text-sky-600 font-medium">Trusted by ambitious businesses</p>
        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
          Sinneo Group, building future-ready ventures that scale
        </h2>
        <p className="mt-6 text-gray-600 max-w-xl">
          We launch and operate companies that solve real problems, from AI-driven data products to logistics optimization. Our group model combines consulting, product delivery, and operational excellence to create measurable value for clients and partners.
        </p>

        <div className="mt-8 flex gap-4">
          <a href="#contact" className="inline-block rounded-md px-6 py-3 bg-indigo-600 text-white font-medium">Work with us</a>
          <a href="#divisions" className="inline-block rounded-md px-6 py-3 border border-gray-200 text-gray-700">Explore divisions</a>
        </div>

        <div className="mt-8 text-xs text-gray-500">
          Backed by Sinneo Group — Virzurely, Sinneo Logistics, Sinneo Consulting
        </div>
      </div>

      <div className="relative">
        <div className="rounded-2xl bg-white shadow-lg p-6">
          {/* ... Card content from original file ... */}
        </div>
        <div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-2xl bg-gradient-to-br from-indigo-100 to-sky-50 opacity-80 blur-lg" />
      </div>
    </motion.section>
  );
}