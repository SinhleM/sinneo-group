import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  // Simple email regex validation
  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Validate inputs
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!validateEmail(formData.email))
      newErrors.email = "Please enter a valid email.";
    if (!formData.message.trim())
      newErrors.message = "Please enter a message.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("sending");

    // Simulate async form submission
    setTimeout(() => {
      // Replace with actual form submission logic/API integration here
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

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
          <span className="font-semibold text-gray-800">Virzurely</span>? Send us a
          message and we’ll get back to you soon.
        </p>

        {/* Contact Form */}
        <div className="mt-10 p-8 rounded-2xl bg-white shadow-md border border-gray-100 text-left">
          {status === "success" ? (
            <div className="text-green-600 font-semibold text-center text-lg">
              Thank you for your message! We’ll get back to you shortly.
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  autoComplete="name"
                  className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby="name-error"
                />
                {errors.name && (
                  <p
                    id="name-error"
                    className="text-red-600 text-sm mt-1"
                    role="alert"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby="email-error"
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="text-red-600 text-sm mt-1"
                    role="alert"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us what you’re looking for..."
                  className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby="message-error"
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="text-red-600 text-sm mt-1"
                    role="alert"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 px-6 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}

          {/* Trust Signals */}
          <div className="mt-8 text-sm text-gray-500 space-y-2">
            <p>We typically respond within 24 hours.</p>
            <p>Your information stays private and secure.</p>
            <p>
              Prefer to schedule a meeting?{" "}
              <a
                href="https://calendly.com/your-calendar" // Replace with your actual Calendly link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Book a time here
              </a>
              .
            </p>
            <p>
              Or email us directly at{" "}
              <a
                href="mailto:contact@sinneo.com"
                className="text-blue-600 underline"
              >
                contact@sinneo.com
              </a>
              .
            </p>
          </div>

          {/* Privacy Disclaimer */}
          <p className="mt-6 text-xs text-gray-400 italic">
            By submitting this form, you agree to our privacy policy and terms of
            service.
          </p>
        </div>
      </div>
    </section>
  );
}