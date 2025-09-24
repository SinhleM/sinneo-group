import DivisionCard from "@/components/ui/DivisionCard";
import { Briefcase, LineChart, Truck } from "lucide-react";

export default function Divisions() {
  return (
    <section id="divisions" className="py-20 relative">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Our Divisions
        </h3>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          A flexible portfolio that grows with market needs, funded and
          supported through Sinneo Group.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <DivisionCard
          icon={<Briefcase className="h-6 w-6 text-indigo-500" />}
          title="Sinneo Consulting"
          desc="AI-enabled business transformation, workflows, and automation for SMEs."
        />
        <DivisionCard
          icon={<LineChart className="h-6 w-6 text-purple-500" />}
          title="Virzurely"
          desc="Lightweight, plug-and-play BI, reporting, and data automation for SMEs."
          highlight
        />
        <DivisionCard
          icon={<Truck className="h-6 w-6 text-green-500" />}
          title="Sinneo Logistics"
          desc="Route planning, fleet optimization, and logistic tech solutions to improve margins."
        />
      </div>
    </section>
  );
}
