// File: app/components/ui/LeaderProfile.tsx
type LeaderProfileProps = {
  name: string;
  role: string;
  bio: string;
};

export default function LeaderProfile({ name, role, bio }: LeaderProfileProps) {
  const initials = name.split(' ').map(n => n[0]).slice(0, 2).join('');

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm text-center">
      <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-sky-300 to-indigo-400 flex items-center justify-center text-white font-semibold">
        {initials}
      </div>
      <div className="mt-4 font-medium">{name}</div>
      <div className="text-sm text-gray-500">{role}</div>
      <p className="mt-2 text-sm text-gray-600">{bio}</p>
    </div>
  );
}