import { Cpu, Leaf, Users, ShieldCheck, Globe } from "lucide-react";
import Image from "next/image";

export default function Impact() {
  return (
    <section
      id="impact"
      className="py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 px-6">
        {/* Text Section */}
        <div className="flex-1">
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Innovation & Impact
          </h3>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-xl">
            We focus on responsible growth, sustainable operations, and inclusive
            technology. Our solutions are designed to be energy-efficient,
            privacy-first, and practical for the South African context — fully
            POPIA compliant and simple to use.
          </p>

          <ul className="mt-8 space-y-5 text-gray-800 max-w-md">
            <li className="flex items-start gap-3">
              <Leaf className="h-6 w-6 text-blue-600 flex-shrink-0" />
              <span>
                Modular product design for lower maintenance and better reliability.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Cpu className="h-6 w-6 text-blue-600 flex-shrink-0" />
              <span>
                AI that augments human work to boost productivity, not replace it.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Users className="h-6 w-6 text-blue-600 flex-shrink-0" />
              <span>
                Local-first solutions built for Johannesburg and Cape Town, with
                global ambitions.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck className="h-6 w-6 text-blue-600 flex-shrink-0" />
              <span>
                Privacy-first platforms, fully POPIA compliant from day one.
              </span>
            </li>
          </ul>

          {/* Placeholder Startup "Metrics" / Commitments */}
          <div className="mt-12 grid grid-cols-2 gap-6 max-w-md">
            <div className="text-center p-4 rounded-xl bg-white shadow-md ring-1 ring-gray-100">
              <p className="text-2xl font-bold text-blue-600">0 → 100</p>
              <p className="mt-1 text-sm text-gray-600">
                SMEs we aim to empower
              </p>
            </div>
            <div className="text-center p-4 rounded-xl bg-white shadow-md ring-1 ring-gray-100">
              <p className="text-2xl font-bold text-blue-600">2025+</p>
              <p className="mt-1 text-sm text-gray-600">
                Built with future scale in mind
              </p>
            </div>
            <div className="text-center p-4 rounded-xl bg-white shadow-md ring-1 ring-gray-100">
              <p className="text-2xl font-bold text-blue-600">100%</p>
              <p className="mt-1 text-sm text-gray-600">
                Commitment to POPIA compliance
              </p>
            </div>
            <div className="text-center p-4 rounded-xl bg-white shadow-md ring-1 ring-gray-100">
              <p className="text-2xl font-bold text-blue-600">Global</p>
              <p className="mt-1 text-sm text-gray-600">
                Solutions starting in Africa, built for the world
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
            <Image
              src="/inovation.jpg" // replace with your actual image path
              alt="Innovation & Impact illustration"
              width={600}
              height={400}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
