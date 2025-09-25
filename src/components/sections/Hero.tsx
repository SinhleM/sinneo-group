"use client";

import { motion } from "framer-motion";

interface HeroProps {
  backgroundImage: string; // This prop will now expect a lighter background image
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
      {/* Overlay - now lighter for a white background, or remove if not needed.
          A subtle gradient might also work here to guide the eye.
          Let's try a very subtle darkening or a light gradient to push text forward. */}
      {/* For a white background, a very subtle dark overlay or even a light radial gradient
          from transparent to white at the edges could work to focus on text.
          Let's try a very light black overlay or just remove it if the image is clear enough.
          For now, I'll reduce the intensity significantly. */}
      <div className="absolute inset-0 bg-black/10 z-0" /> {/* Much lighter overlay */}

      {/* Text Section */}
      <div className="relative z-10 px-6 md:px-16 max-w-2xl py-20 md:py-0"> {/* Added vertical padding for smaller screens */}
        <p className="text-sm font-semibold text-gray-600 mb-4">Sinneo Solutions</p> {/* Changed to dark grey */}

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-950 leading-tight"> {/* Changed to dark grey */}
          Building ventures that solve real business problems
        </h1>

        <p className="mt-6 text-lg text-gray-800"> {/* Changed to dark grey */}
          From AI-powered platforms to logistics optimization, we deliver full-scale innovation tailored for the modern enterprises.
        </p>

        {/* CTA */}
        <div className="mt-8">
          <a
            href="#contact"
            className="inline-block rounded-md bg-white text-gray-950 px-6 py-3 text-base font-semibold shadow hover:bg-gray-100 transition"
          >
            Get in touch
          </a>
        </div>
      </div>

    </motion.section>
  );
}