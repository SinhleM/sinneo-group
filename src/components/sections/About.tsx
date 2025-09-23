// File: app/components/sections/About.tsx
import { Lightbulb, Eye, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Heading */}
        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          About Sinneo Group
        </h3>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Sinneo Group is a modern conglomerate that builds, invests in, and
          operates businesses solving practical problems across industries. We
          bring together product thinking, technology, and operational
          expertise to help companies and communities thrive in a digital-first
          world.
        </p>
      </div>

      {/* Mission / Vision / Values */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition">
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
            <Lightbulb size={24} />
          </div>
          <h4 className="mt-4 font-semibold text-lg text-gray-900">Mission</h4>
          <p className="mt-2 text-sm text-gray-600">
            Create scalable ventures that deliver measurable economic and
            social impact across Africa and beyond.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition">
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 text-white">
            <Eye size={24} />
          </div>
          <h4 className="mt-4 font-semibold text-lg text-gray-900">Vision</h4>
          <p className="mt-2 text-sm text-gray-600">
            Be the trusted partner for businesses embracing digital
            transformation and future-ready solutions.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition">
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-indigo-500 text-white">
            <HeartHandshake size={24} />
          </div>
          <h4 className="mt-4 font-semibold text-lg text-gray-900">Values</h4>
          <p className="mt-2 text-sm text-gray-600">
            Integrity, clarity, long-term focus, and a commitment to
            technology-forward thinking.
          </p>
        </div>
      </div>
    </section>
  );
}
