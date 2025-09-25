import { Lightbulb, Eye, HeartHandshake } from "lucide-react";
import NextImage from "next/image";
import { motion } from "framer-motion";

// A reusable card component with an image and text
interface AboutCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

function AboutCard({ imageSrc, title, description }: AboutCardProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="group rounded-2xl bg-gray-100 shadow-sm hover:shadow-xl hover:border-2 hover:border-blue-500 hover:scale-[1.02] transition-all duration-300 overflow-hidden"
    >
      {/* Image Block: Placed outside of padding for a full-bleed look */}
      <div className="relative w-full h-48">
        <NextImage
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content Block: Has its own reduced padding */}
      <div className="p-6">
        <h4 className="font-semibold text-xl text-gray-900 group-hover:text-blue-600 transition-colors">{title}</h4>
        <p className="mt-3 text-gray-700 text-base leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
        <h3 className="text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
          About <span className="text-gray-950">Sinneo Group</span>
        </h3>
        <p className="mt-6 text-lg md:text-xl text-gray-800 max-w-4xl mx-auto md:mx-0 leading-relaxed">
          Sinneo Group is a modern conglomerate that builds, invests in, and operates
          businesses solving practical problems across industries. We unite product
          thinking, technology, and operational expertise to help companies and
          communities thrive in a digital-first world.
        </p>
      </div>

      {/* Cards with Images */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        <AboutCard
          imageSrc="/mission.jpg" // Replace with your image path
          title="Mission"
          description="Create scalable ventures that deliver measurable economic and social impact across Africa and beyond."
        />

        <AboutCard
          imageSrc="/vision.jpg" // Replace with your image path
          title="Vision"
          description="Be the trusted partner for businesses embracing digital transformation and future-ready solutions."
        />

        <AboutCard
          imageSrc="/value.jpg" // Replace with your image path
          title="Values"
          description="Integrity, clarity, long-term focus, and a commitment to technology-forward thinking."
        />
      </div>
    </section>
  );
}