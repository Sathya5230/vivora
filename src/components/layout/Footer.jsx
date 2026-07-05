import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone } from "lucide-react";
import { categories } from "../../data/categories";

const quickCategories = categories.slice(0, 6);

const TechLogo = () => (
  <svg className="h-7 w-7 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <circle cx="5" cy="12" r="1.5" fill="currentColor" />
    <circle cx="12" cy="5" r="1.5" fill="currentColor" />
    <circle cx="12" cy="19" r="1.5" fill="currentColor" />
    <circle cx="19" cy="12" r="1.5" fill="currentColor" />
    <line x1="6.5" y1="11" x2="10.5" y2="6.5" />
    <line x1="6.5" y1="13" x2="10.5" y2="17.5" />
    <line x1="13.5" y1="6.5" x2="17.5" y2="11" />
    <line x1="13.5" y1="17.5" x2="17.5" y2="13" />
    <line x1="12" y1="7" x2="12" y2="17" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-plum-900 text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-bold text-white flex items-center gap-2">
            <TechLogo />
            <span>TechXperience</span>
          </p>
          <p className="mt-3 text-sm text-cream/70">
            Fueling innovation, sparking connection — the premier gathering of global creators and builders.
          </p>
          <div className="mt-5 flex gap-4 text-cream/70">
            <a href="#" aria-label="Instagram" className="hover:text-purple-400">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-purple-400">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-purple-400">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div>
          <p className="mb-4 font-semibold text-purple-400">Navigate</p>
          <ul className="space-y-2 text-sm text-cream/70">
            <li>
              <Link to="/" className="hover:text-cream">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-cream">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-cream">
                Exhibitors
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-cream">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 font-semibold text-purple-400">Categories</p>
          <ul className="space-y-2 text-sm text-cream/70">
            <li>
              <a href="#" className="hover:text-cream">Keynotes</a>
            </li>
            <li>
              <a href="#" className="hover:text-cream">Exhibits</a>
            </li>
            <li>
              <a href="#" className="hover:text-cream">Workshops</a>
            </li>
            <li>
              <a href="#" className="hover:text-cream">Networking</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 font-semibold text-purple-400">Get in Touch</p>
          <ul className="space-y-3 text-sm text-cream/70">
            <li className="flex items-center gap-2">
              <Mail size={16} /> info@techxperience.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +1 (555) 010-0200
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} TechXperience. All rights reserved.
      </div>
    </footer>
  );
}
