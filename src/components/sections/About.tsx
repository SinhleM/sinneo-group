import { Lightbulb, Eye, HeartHandshake } from "lucide-react";
import NextImage from "next/image";
import { motion } from "framer-motion";

interface AboutCardProps {
  imageSrc: string;
  title: string;
  description: string;
  Icon: React.ElementType;
}

function AboutCard({ imageSrc, title, description, Icon }: AboutCardProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group rounded-2xl bg-white shadow-md hover:shadow-xl border border-gray-100 hover:border-blue-500 hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Larger background image with hover zoom effect */}
      <div className="relative w-full h-64"> {/* Increased from h-40 to h-64 */}
        <NextImage
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 transform group-hover:scale-105 opacity-80 group-hover:opacity-90"
        />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1">
        <Icon className="w-10 h-10 text-blue-600 mb-4" />
        <h4 className="font-semibold text-2xl text-gray-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h4>
        <p className="mt-4 text-gray-700 text-base leading-relaxed flex-1">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white to-gray-50 relative"
    >
      <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
        <h3 className="text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
          Who <span className="text-blue-600">We Are</span>
        </h3>

        <p className="mt-6 text-lg md:text-xl text-gray-800 max-w-4xl mx-auto md:mx-0 leading-relaxed">
          At Sinneo Group, we believe the future belongs to those who build it thoughtfully. 
          We’re more than just a conglomerate — we’re a team passionate about turning ideas into impactful 
          businesses that uplift communities and inspire growth. Our foundation is built on practical 
          solutions, genuine relationships, and a relentless drive to innovate for people.
        </p>

        <blockquote className="mt-8 max-w-4xl mx-auto md:mx-0 italic text-blue-700 font-semibold border-l-4 border-blue-600 pl-4">
          “Technology and heart combined — that’s how we create lasting change.” —{" "}
          <span className="not-italic font-normal">Amina Njeri, CEO</span>
        </blockquote>
      </div>

      {/* Mission, Vision, Values */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        <AboutCard
          imageSrc="/mission.jpg"
          title="Our Mission"
          description="We create ventures that don’t just scale — they transform lives. From local startups to continental partnerships, we focus on real solutions that make an economic and social difference."
          Icon={Lightbulb}
        />

        <AboutCard
          imageSrc="/vision.jpg"
          title="Our Vision"
          description="To be the trusted catalyst for businesses and communities embracing a future where technology empowers growth, inclusivity, and sustainability."
          Icon={Eye}
        />

        <AboutCard
          imageSrc="/value.jpg"
          title="Our Values"
          description="Integrity, transparency, long-term thinking, and an unwavering commitment to innovation and people-first technology."
          Icon={HeartHandshake}
        />
      </div>
    </section>
  );
}
