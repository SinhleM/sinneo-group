"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20"
    >
      {/* Left: Text */}
      <div>
        <p className="text-sm font-medium text-indigo-600">
          Trusted by ambitious businesses
        </p>
        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 bg-clip-text text-transparent">
          Sinneo Group, building future-ready ventures that scale
        </h2>
        <p className="mt-6 text-gray-600 max-w-xl">
          We launch and operate companies that solve real problems, from
          AI-driven data products to logistics optimization. Our group model
          combines consulting, product delivery, and operational excellence to
          create measurable value for clients and partners.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex gap-4">
          <a
            href="#contact"
            className="inline-block rounded-md px-6 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 text-white font-medium shadow-md hover:scale-105 transition"
          >
            Work with us
          </a>
          <a
            href="#divisions"
            className="inline-block rounded-md px-6 py-3 border border-indigo-200 text-gray-700 hover:border-indigo-400 hover:text-indigo-600 transition"
          >
            Explore divisions
          </a>
        </div>

        {/* Microcopy */}
        <div className="mt-8 text-xs text-gray-500">
          Backed by Sinneo Group — Virzurely, Sinneo Logistics, Sinneo Consulting
        </div>
      </div>

      {/* Right: Visual / Mockup */}
      <div className="relative">
        <div className="rounded-2xl bg-white shadow-xl p-6 relative z-10">
          <h3 className="text-lg font-semibold text-gray-900">
            Future-ready solutions
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            AI-powered insights, automation, and global strategy designed for
            SMEs and enterprises.
          </p>
          <div className="mt-4 flex gap-6 text-sm text-gray-700">
            <div>
              <span className="block text-xl font-bold text-indigo-600">50+</span>
              Clients served
            </div>
            <div>
              <span className="block text-xl font-bold text-purple-600">3</span>
              Active divisions
            </div>
          </div>
        </div>

        {/* Gradient orb background */}
        <div className="absolute -right-12 -bottom-12 w-56 h-56 rounded-full bg-gradient-to-br from-indigo-200 via-purple-200 to-sky-100 opacity-70 blur-2xl" />
      </div>
    </motion.section>
  );
}
