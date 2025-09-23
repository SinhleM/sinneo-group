// File: app/components/sections/Leadership.tsx
import LeaderProfile from "@/components/ui/LeaderProfile";

export default function Leadership() {
  return (
    <section id="leadership" className="py-16">
      <h3 className="text-2xl font-semibold">Leadership</h3>
      <p className="mt-2 text-gray-600">
        A small, experienced team focused on execution and integrity.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
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