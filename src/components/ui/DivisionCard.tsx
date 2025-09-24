type DivisionCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  highlight?: boolean;
  align?: "left" | "center";
  learnMore?: boolean;
};

export default function DivisionCard({
  icon,
  title,
  desc,
  highlight = false,
  align = "center",
  learnMore = false,
}: DivisionCardProps) {
  return (
    <div
      className={`p-6 rounded-xl shadow-md hover:shadow-lg transition ${
        highlight ? "bg-gray-100" : "bg-gray-50"
      } text-${align} w-full`}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-200 text-blue-800 mb-4">
        {icon}
      </div>

      {/* Title and Learn More on same line */}
      <div className="flex justify-between items-center">
        <h4 className="font-semibold text-lg text-black">{title}</h4>
        {learnMore && (
          <a
            href="#"
            className="text-blue-600 hover:underline text-sm font-medium"
            aria-label={`Learn more about ${title}`}
          >
            Learn More →
          </a>
        )}
      </div>

      <p className="mt-2 text-sm text-black">{desc}</p>
    </div>
  );
}
