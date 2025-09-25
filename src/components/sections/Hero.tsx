"use client";

import { motion } from "framer-motion";

interface HeroProps {
  backgroundImage: string;
}

export default function Hero({ backgroundImage }: HeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative w-full min-h-screen grid grid-cols-1 md:grid-cols-2 items-center overflow-hidden"
    >
      {/* Background Image with lower opacity */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.4, // <-- make image transparent here (30% opacity)
          zIndex: 0,
        }}
      />

      {/* Slight dark overlay to enhance text visibility */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Text Section */}
      <div className="relative z-20 px-6 md:px-16 max-w-2xl py-20 md:py-0">
        <p className="text-sm font-semibold text-gray-800 mb-4">Sinneo Group</p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-950 leading-tight">
          Building ventures that solve real business problems
        </h1>

        <p className="mt-6 text-lg text-gray-800">
          Pioneering solutions at the intersection of technology, logistics, and strategy — designed to scale with tomorrow’s businesses.
        </p>

        {/* Mini credibility marker */}
        <p className="mt-4 text-sm text-gray-800 italic">
          Shaping ventures across industries — technology, logistics, consulting, and beyond.
        </p>

        {/* CTA */}
        <div className="mt-8">
          <a
            href="#contact"
            className="inline-block rounded-md bg-blue-600 text-white px-6 py-3 text-base font-semibold shadow hover:bg-blue-700 transition"
          >
            Get in touch
          </a>
        </div>
      </div>
    </motion.section>
  );
}
