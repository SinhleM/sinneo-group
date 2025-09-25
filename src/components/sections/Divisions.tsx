import DivisionCard from "@/components/ui/DivisionCard";

export default function Divisions() {
  return (
    <section id="divisions" className="py-20 bg-white">
      {/* Container with small horizontal margin/padding */}
      <div className="mx-4 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-black bg-clip-text">
          Our Divisions
        </h3>
        <p className="mt-6 text-lg text-black max-w-3xl mx-auto">
          A flexible portfolio that grows with market needs, funded and
          supported through Sinneo Group.
        </p>
      </div>

      {/* Cards stacked vertically with horizontal margin */}
      <div className="mt-12 flex flex-col gap-6 max-w-5xl mx-auto">
        {/* Sinneo Consulting Card */}
        <DivisionCard
          imageSrc="/consulting.jpg"
          title="Sinneo Consulting"
          desc="AI-enabled business transformation, workflows, and automation for SMEs."
          align="left"
          learnMore
        />

        {/* Vizurely Card - Image on RIGHT, Text on LEFT */}
        <DivisionCard
          imageSrc="/vizurely.png"
          title="Vizurely"
          desc="Lightweight, plug-and-play BI, reporting, and data automation for SMEs."
          align="right" // <-- This is the key change
          learnMore
        />

        {/* Sinneo Logistics Card */}
        <DivisionCard
          imageSrc="/logistics.jpg"
          title="Sinneo Logistics"
          desc="Route planning, fleet optimization, and logistic tech solutions to improve margins."
          align="left"
          learnMore
        />
      </div>
    </section>
  );
}
