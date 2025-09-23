// File: app/components/ui/DivisionCard.tsx
type DivisionCardProps = {
  title: string;
  desc: string;
  highlight?: boolean;
};

export default function DivisionCard({ title, desc, highlight }: DivisionCardProps) {
  return (
    <div className={`p-6 rounded-lg shadow-sm bg-white ${highlight ? 'border-2 border-indigo-100' : ''}`}>
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-gray-600 text-sm">{desc}</p>
      <div className="mt-4">
        <a href="#contact" className="text-sm font-medium text-indigo-600">Learn more</a>
      </div>
    </div>
  );
}