// File: app/components/sections/Impact.tsx
import Stat from "@/components/ui/Stat";

export default function Impact() {
  return (
    <section id="impact" className="py-16">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold">Innovation and Impact</h3>
          <p className="mt-4 text-gray-600">
            We focus on responsible growth, sustainable operations, and inclusive technology. Our products are designed to be low energy, privacy-first, and practical for the South African context, POPIA compliant, and simple to use.
          </p>

          <ul className="mt-6 space-y-3 text-gray-600">
            <li>Modular product design for lower maintenance and better reliability.</li>
            <li>AI that augments human work, not replace it, to improve productivity.</li>
            <li>Local-first solutions, built for Johannesburg and Cape Town markets, with global ambitions.</li>
          </ul>
        </div>

        <div className="flex-1 bg-white rounded-lg shadow p-6">
          <h4 className="font-semibold">Impact snapshot</h4>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <Stat label="SMEs onboarded" value="28" />
            <Stat label="Avg time saved" value="12 hrs/mo" />
            <Stat label="Reduction in errors" value="84%" />
            <Stat label="POPIA compliant" value="Yes" />
          </div>
        </div>
      </div>
    </section>
  );
}