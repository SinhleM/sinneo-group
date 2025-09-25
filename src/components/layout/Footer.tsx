import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info with Quote and Founder */}
        <div>
          <h4 className="text-xl font-bold text-white mb-3">Sinneo Group</h4>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Building, investing in, and operating ventures that solve real-world challenges through technology and innovation.
          </p>
          {/* Founder quote + headshot */}
          <div className="flex items-center gap-3 mt-6 bg-gray-800 p-4 rounded-lg shadow-md">
            <img
              src="/Headshot 1 cropped.png" // Replace with actual founder headshot URL or import
              alt="Founder"
              className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
            />
            <div>
              <p className="text-sm italic text-gray-300">
                “Innovation drives us forward every day.”
              </p>
              <p className="text-xs font-semibold mt-1">– Sinhle Mkhabela, Founder</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="font-semibold text-white mb-4">Quick Links</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#news" className="hover:text-white transition">News</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h5 className="font-semibold text-white mb-4">Contact</h5>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} /> contact@sinneogroup.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +27 (0) 11 123 4567
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Johannesburg, South Africa
            </li>
          </ul>
          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://linkedin.com/company/sinneogroup"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-500 transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com/sinneogroup"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-blue-400 transition"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://github.com/sinneogroup"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-gray-100 transition"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Virzurely Highlight with Badge */}
        <div>
          <h5 className="font-semibold text-white mb-4">Our Product</h5>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Explore{" "}
            <span className="font-semibold text-blue-400">Virzurely</span>, our flagship data automation & dashboard solution.
          </p>
          <a
            href="#"
            className="inline-block mb-6 text-sm font-semibold text-white bg-blue-600 px-4 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Learn more →
          </a>
          {/* Backed by Sinneo Group badge */}
          <div className="inline-flex items-center gap-2 bg-gray-800 text-gray-400 text-xs font-semibold px-3 py-1 rounded-full border border-gray-700 select-none">
            <img
              src="/Sinneo-Logo1-Transparent.png" // Replace with badge image or icon
              alt="Backed by Sinneo Group"
              className="w-5 h-5"
            />
            Backed by Sinneo Group
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500 select-none">
        © {new Date().getFullYear()} Sinneo Group. All rights reserved.
      </div>
    </footer>
  );
}
