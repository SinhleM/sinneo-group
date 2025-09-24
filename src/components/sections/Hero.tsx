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
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for subtle darkening */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Text Section */}
      <div className="relative z-10 px-6 md:px-16 max-w-2xl">
        <p className="text-sm font-semibold text-white/80 mb-4">Sinneo Solutions</p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          Building ventures that solve real business problems
        </h1>

        <p className="mt-6 text-lg text-white/80">
          From AI-powered platforms to logistics optimization — we deliver full-scale innovation tailored for the modern enterprise.
        </p>

        {/* CTA */}
        <div className="mt-8">
          <a
            href="#contact"
            className="inline-block rounded-md bg-white text-black px-6 py-3 text-base font-semibold shadow hover:bg-gray-100 transition"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Image Mockup */}
      <div className="relative z-10 hidden md:block px-6 md:px-10 lg:px-20">
        <div className="w-full max-w-md mx-auto shadow-2xl rounded-xl overflow-hidden">
          <img
            src="/mockup.png" // You can replace this with your actual visual or screenshot
            alt="Dashboard preview"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </motion.section>
  );
}
