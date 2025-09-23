// File: app/components/sections/About.tsx
export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-4xl">
        <h3 className="text-2xl font-semibold">About Sinneo Group</h3>
        <p className="mt-4 text-gray-600">
          Sinneo Group is a modern conglomerate that builds, invests in, and operates businesses that solve practical problems. We combine product thinking, technology, and operational know-how to help companies and communities thrive.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h4 className="font-semibold">Mission</h4>
            <p className="mt-2 text-sm text-gray-600">
              Create scalable ventures that deliver measurable economic and social impact.
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h4 className="font-semibold">Vision</h4>
            <p className="mt-2 text-sm text-gray-600">
              Be the trusted partner for African businesses embracing digital transformation.
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h4 className="font-semibold">Values</h4>
            <p className="mt-2 text-sm text-gray-600">
              Integrity, clarity, long-term focus, and technology-forward thinking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}