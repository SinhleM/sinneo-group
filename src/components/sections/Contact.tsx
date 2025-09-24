export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Let’s Work <span className="text-blue-600">Together</span>
        </h3>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          Have a project in mind or want to learn more about{" "}
          <span className="font-semibold text-gray-800">Sinneo Group</span> and{" "}
          <span className="font-semibold text-gray-800">Virzurely</span>? 
          Send us a message and we’ll get back to you soon.
        </p>

        {/* Contact Form */}
        <div className="mt-10 p-8 rounded-2xl bg-white shadow-md border border-gray-100">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
            <textarea
              rows={4}
              placeholder="Tell us what you’re looking for..."
              className="w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

