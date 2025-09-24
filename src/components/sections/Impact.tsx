import Stat from "@/components/ui/Stat";
import { Cpu, Leaf, ShieldCheck, Users } from "lucide-react";

export default function Impact() {
  return (
    <section id="impact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Text Section */}
        <div className="flex-1">
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Innovation and Impact
          </h3>
          <p className="mt-6 text-gray-600 leading-relaxed">
            We focus on responsible growth, sustainable operations, and inclusive
            technology. Our products are designed to be low energy, privacy-first,
            and practical for the South African context, fully POPIA compliant, and
            simple to use.
          </p>

          <ul className="mt-6 space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <Leaf className="h-5 w-5 text-green-500" />
              Modular product design for lower maintenance and better reliability.
            </li>
            <li className="flex items-center gap-3">
              <Cpu className="h-5 w-5 text-indigo-500" />
              AI that augments human work, not replace it, to improve productivity.
            </li>
            <li className="flex items-center gap-3">
              <Users className="h-5 w-5 text-purple-500" />
              Local-first solutions, built for Johannesburg and Cape Town with
              global ambitions.
            </li>
          </ul>
        </div>

        {/* Stats Section */}
        <div className="flex-1 bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg p-8 border border-gray-100">
          <h4 className="font-semibold text-lg text-gray-800">
            Impact Snapshot
          </h4>
          <div className="mt-6 grid grid-cols-2 gap-6">
            <Stat label="SMEs onboarded" value="28" icon={<Users className="h-5 w-5 text-indigo-500" />} />
            <Stat label="Avg time saved" value="12 hrs/mo" icon={<Cpu className="h-5 w-5 text-purple-500" />} />
            <Stat label="Reduction in errors" value="84%" icon={<Leaf className="h-5 w-5 text-green-500" />} />
            <Stat label="POPIA compliant" value="Yes" icon={<ShieldCheck className="h-5 w-5 text-blue-500" />} />
          </div>
        </div>
      </div>
    </section>
  );
}
