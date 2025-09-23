// File: app/components/ui/Stat.tsx
type StatProps = {
  label: string;
  value: string;
};

export default function Stat({ label, value }: StatProps) {
  return (
    <div className="p-3 border rounded">
      <div className="text-xs text-gray-400">{label}</div>
      <div className="font-medium mt-1">{value}</div>
    </div>
  );
}