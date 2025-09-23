// File: app/components/sections/News.tsx
import NewsCard from "@/components/ui/NewsCard";

export default function News() {
  return (
    <section id="news" className="py-16">
      <h3 className="text-2xl font-semibold">News and Updates</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <NewsCard
          title="Virzurely public beta launches"
          date="Sep 8, 2025"
          excerpt="Lightweight BI for SMEs, first 50 users offered discounted pricing."
        />
        <NewsCard
          title="Sinneo Group partners with local fleet"
          date="Aug 14, 2025"
          excerpt="Pilot for route optimization and fuel savings begins in Gauteng."
        />
        <NewsCard
          title="POPIA best practices guide published"
          date="Jul 22, 2025"
          excerpt="Free resource for small businesses, covers compliant data handling."
        />
      </div>
    </section>
  );
}