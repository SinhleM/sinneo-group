'use client';

import DivisionCard from "@/components/ui/DivisionCard";

export default function Divisions() {
  return (
    <section id="divisions" className="py-20 bg-gray-50">
      <div className="mx-4 text-center">
        <h3 className="text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
          Our <span className="text-blue-600">Divisions</span>
        </h3>
        <p className="mt-6 text-lg text-black max-w-3xl mx-auto">
          A flexible portfolio that grows with market needs — built, funded, and supported through Sinneo Group.
        </p>
      </div>

      <div className="mt-12 flex flex-col gap-6 max-w-5xl mx-auto">
        {/* Sinneo Consulting */}
        <DivisionCard
          imageSrc="/consulting.jpg"
          title="Sinneo Consulting"
          desc="AI-enabled business transformation, workflows, and automation tailored for SMEs."
          align="left"
          learnMore
          modalContent={
            <>
              <p>
                Sinneo Consulting works with growing businesses to optimize operations, implement automation, and
                future-proof strategy with the power of AI and smart processes.
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-1">
                <li>AI-driven process design</li>
                <li>Operational efficiency for SMEs</li>
                <li>Custom workflow automation</li>
                <li>Business diagnostics & audits</li>
              </ul>
            </>
          }
        />

        {/* Vizurely */}
        <DivisionCard
          imageSrc="/vizurely.png"
          title="Vizurely"
          desc="Lightweight, plug-and-play BI, reporting, and data automation platform."
          align="right"
          learnMore
          modalContent={
            <>
              <p>
                Vizurely is a no-code business intelligence tool for real-time reporting and data visualization.
                Designed with non-technical users in mind, Vizurely enables instant dashboarding and automation.
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-1">
                <li>Easy integrations (Google Sheets, Notion, Airtable)</li>
                <li>Instant dashboards & charts</li>
                <li>Custom triggers and data alerts</li>
                <li>Perfect for resource-limited teams</li>
              </ul>
            </>
          }
        />

        {/* Sinneo Logistics */}
        <DivisionCard
          imageSrc="/logistics.jpg"
          title="Sinneo Logistics"
          desc="Advanced route planning, fleet optimization, and logistics tech stack for modern distribution."
          align="left"
          learnMore
          modalContent={
            <>
              <p>
                Sinneo Logistics provides software and systems to help logistics businesses move faster, cheaper, and
                smarter. Built for Africa’s complex logistics networks.
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-1">
                <li>Dynamic route optimization</li>
                <li>Fleet tracking dashboards</li>
                <li>Predictive delivery estimation</li>
                <li>Works with low-connectivity environments</li>
              </ul>
            </>
          }
        />
      </div>
    </section>
  );
}
