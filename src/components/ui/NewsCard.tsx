// File: app/components/ui/NewsCard.tsx
type NewsCardProps = {
  title: string;
  date: string;
  excerpt: string;
};

export default function NewsCard({ title, date, excerpt }: NewsCardProps) {
  return (
    <article className="p-4 bg-white rounded-lg shadow-sm">
      <div className="text-xs text-gray-400">{date}</div>
      <h5 className="font-semibold mt-2">{title}</h5>
      <p className="mt-2 text-sm text-gray-600">{excerpt}</p>
      <div className="mt-4">
        <a href="#" className="text-sm text-indigo-600">Read more</a>
      </div>
    </article>
  );
}