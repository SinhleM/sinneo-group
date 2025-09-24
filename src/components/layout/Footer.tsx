import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h4 className="text-xl font-bold text-white">Sinneo Group</h4>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Building, investing in, and operating ventures that solve
            real-world challenges through technology and innovation.
          </p>
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
        </div>

        {/* Virzurely Highlight */}
        <div>
          <h5 className="font-semibold text-white mb-4">Our Product</h5>
          <p className="text-gray-400 text-sm leading-relaxed">
            Explore{" "}
            <span className="font-semibold text-white">Virzurely</span>, our
            flagship data automation & dashboard solution.
          </p>
          <a
            href="#"
            className="mt-4 inline-block text-sm font-medium text-blue-400 hover:text-blue-300 transition"
          >
            Learn more →
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sinneo Group. All rights reserved.
      </div>
    </footer>
  );
}
