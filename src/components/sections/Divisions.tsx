// File: app/components/sections/Divisions.tsx
import DivisionCard from "@/components/ui/DivisionCard";

export default function Divisions() {
  return (
    <section id="divisions" className="py-16">
      <h3 className="text-2xl font-semibold">Our Divisions</h3>
      <p className="mt-2 text-gray-600 max-w-2xl">
        A flexible portfolio that grows with market needs, funded and supported through Sinneo Group.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <DivisionCard
          title="Sinneo Consulting"
          desc="AI-enabled business transformation, workflows, and automation for SMEs."
        />
        <DivisionCard
          title="Virzurely"
          desc="Lightweight, plug-and-play BI, reporting, and data automation for SMEs."
          highlight
        />
        <DivisionCard
          title="Sinneo Logistics"
          desc="Route planning, fleet optimization, and logistic tech solutions to improve margins."
        />
      </div>
    </section>
  );
}