import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validate = () => {
    const newErrors: any = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!validateEmail(formData.email))
      newErrors.email = "Please enter a valid email.";
    if (!formData.message.trim())
      newErrors.message = "Please enter a message.";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: null }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-gray-50"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')", // Replace with HQ image or map
        }}
      ></div>
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Side: Info */}
        <div className="flex flex-col justify-center space-y-6">
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Let’s Work <span className="text-blue-600">Together</span>
          </h3>
          <p className="text-lg text-gray-600">
            Have a project in mind or want to learn more about{" "}
            <span className="font-semibold text-gray-800">Sinneo Group</span>? 
            Start the conversation and we’ll be in touch soon.
          </p>

          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-600" />
              contact@sinneo.com
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-blue-600" />
              +27 11 123 4567
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-600" />
              Johannesburg, South Africa
            </p>
          </div>

          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-500 hover:text-blue-600">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-8 rounded-2xl bg-white shadow-md border border-gray-100">
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
                  className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email}</p>
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
                />
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 px-6 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Start the Conversation"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
