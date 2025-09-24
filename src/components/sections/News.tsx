import NewsCard from "@/components/ui/NewsCard";
import { Newspaper } from "lucide-react";

export default function News() {
  return (
    <section id="news" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent flex items-center justify-center gap-2">
          <Newspaper className="h-7 w-7" /> News & Updates
        </h3>
        <p className="mt-3 text-gray-600">
          Stay updated on our latest launches, partnerships, and insights shaping the future.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
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
