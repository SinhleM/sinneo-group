"use client";

import { Mail, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Contact() {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Inquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      `Email: ${data.get("email")}\n\nMessage:\n${data.get("message")}`
    );
    window.location.href = `mailto:hello@sinneo.co.za?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Contact Us
        </h3>
        <p className="mt-3 text-gray-600">
          For partnerships, demos, or media enquiries, get in touch with us.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Form */}
        <form
          className="space-y-6 bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg p-8 border border-gray-100"
          onSubmit={handleFormSubmit}
        >
          <div className="relative">
            <input
              name="name"
              required
              className="peer w-full rounded-md border border-gray-200 bg-transparent px-4 pt-5 pb-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
              placeholder=" "
            />
            <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base">
              Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              required
              className="peer w-full rounded-md border border-gray-200 bg-transparent px-4 pt-5 pb-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
              placeholder=" "
            />
            <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base">
              Email
            </label>
          </div>

          <div className="relative">
            <textarea
              name="message"
              rows={4}
              required
              className="peer w-full rounded-md border border-gray-200 bg-transparent px-4 pt-5 pb-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
              placeholder=" "
            />
            <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base">
              Message
            </label>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="inline-block rounded-md px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-transform transform hover:scale-105 shadow-md"
            >
              Send Inquiry
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg p-8 border border-gray-100">
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <MapPin className="h-5 w-5 text-indigo-500" /> Head Office
            </h4>
            <p className="mt-3 text-sm text-gray-600">Johannesburg, South Africa</p>
            <p className="mt-1 text-sm text-gray-600 flex items-center gap-2">
              <Mail className="h-4 w-4 text-indigo-500" /> hello@sinneo.co.za
            </p>
          </div>
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg p-8 border border-gray-100">
            <h4 className="font-semibold text-lg">Follow Us</h4>
            <div className="mt-4 flex gap-5 text-gray-600">
              <a href="#" aria-label="LinkedIn" className="hover:text-indigo-600">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-indigo-600">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-indigo-600">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
