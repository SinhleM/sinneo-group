// File: app/components/sections/Contact.tsx
'use client'; // Required for the form's onSubmit event handler

export default function Contact() {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Inquiry from ${data.get('name')}`);
    const body = encodeURIComponent(`Email: ${data.get('email')}\n\nMessage:\n${data.get('message')}`);
    window.location.href = `mailto:hello@sinneo.co.za?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16">
      <h3 className="text-2xl font-semibold">Contact</h3>
      <p className="mt-2 text-gray-600">
        For partnerships, demos, or media enquiries, get in touch.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <form className="space-y-4 bg-white rounded-lg shadow p-6" onSubmit={handleFormSubmit}>
          <div>
            <label className="text-sm font-medium">Name</label>
            <input name="name" required className="mt-2 block w-full rounded-md border-gray-200 shadow-sm p-3" />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input type="email" name="email" required className="mt-2 block w-full rounded-md border-gray-200 shadow-sm p-3" />
          </div>
          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea name="message" required rows={4} className="mt-2 block w-full rounded-md border-gray-200 shadow-sm p-3" />
          </div>
          <div className="text-right">
            <button type="submit" className="inline-block rounded-md px-5 py-2 bg-indigo-600 text-white font-medium">
              Send inquiry
            </button>
          </div>
        </form>

        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="font-semibold">Head office</h4>
            <p className="mt-2 text-sm text-gray-600">Johannesburg, South Africa</p>
            <p className="mt-1 text-sm text-gray-600">Email: hello@sinneo.co.za</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="font-semibold">Follow</h4>
            <div className="mt-3 flex gap-3">
              <a href="#" aria-label="LinkedIn" className="text-sm">LinkedIn</a>
              <a href="#" aria-label="Twitter" className="text-sm">X</a>
              <a href="#" aria-label="Instagram" className="text-sm">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}