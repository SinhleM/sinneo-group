import { Lightbulb, Eye, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      {/* Main wrapper */}
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

      {/* Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {/* Mission */}
        <div className="group p-8 rounded-2xl bg-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <Lightbulb size={28} />
          </div>
          <h4 className="mt-6 font-semibold text-xl text-gray-900">Mission</h4>
          <p className="mt-3 text-gray-700 text-base leading-relaxed">
            Create scalable ventures that deliver measurable economic and social
            impact across Africa and beyond.
          </p>
        </div>

        {/* Vision */}
        <div className="group p-8 rounded-2xl bg-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <Eye size={28} />
          </div>
          <h4 className="mt-6 font-semibold text-xl text-gray-900">Vision</h4>
          <p className="mt-3 text-gray-700 text-base leading-relaxed">
            Be the trusted partner for businesses embracing digital transformation
            and future-ready solutions.
          </p>
        </div>

        {/* Values */}
        <div className="group p-8 rounded-2xl bg-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <HeartHandshake size={28} />
          </div>
          <h4 className="mt-6 font-semibold text-xl text-gray-900">Values</h4>
          <p className="mt-3 text-gray-700 text-base leading-relaxed">
            Integrity, clarity, long-term focus, and a commitment to
            technology-forward thinking.
          </p>
        </div>
      </div>
    </section>
  );
}
