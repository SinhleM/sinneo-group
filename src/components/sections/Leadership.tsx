import LeaderProfile from "@/components/ui/LeaderProfile";
import { Users } from "lucide-react";

export default function Leadership() {
  return (
    <section id="leadership" className="py-20">
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent flex items-center justify-center gap-2">
          <Users className="h-7 w-7" /> Leadership
        </h3>
        <p className="mt-3 text-gray-600">
          A small, experienced team driven by execution, clarity, and integrity.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <LeaderProfile
          name="Sinhle Mkhabela"
          role="Founder & CEO"
          bio="Product and cloud strategist, focused on data and operations."
        />
        <LeaderProfile
          name="Anele Dlamini"
          role="Head of Product"
          bio="Design and UX lead, building human centered experiences."
        />
        <LeaderProfile
          name="Nokuthula M"
          role="Head of Ops"
          bio="Operations and logistics specialist with local market experience."
        />
      </div>
    </section>
  );
}
