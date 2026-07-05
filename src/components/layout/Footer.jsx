import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone } from "lucide-react";
import { categories } from "../../data/categories";

const quickCategories = categories.slice(0, 6);

export default function Footer() {
  return (
    <footer className="bg-plum-900 text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-semibold">Vivora</p>
          <p className="mt-3 text-sm text-cream/70">
            Full-spectrum event management — from intimate ceremonies to citywide
            celebrations.
          </p>
          <div className="mt-5 flex gap-4 text-cream/70">
            <a href="#" aria-label="Instagram" className="hover:text-gold-400">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gold-400">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gold-400">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div>
          <p className="mb-4 font-semibold text-gold-400">Navigate</p>
          <ul className="space-y-2 text-sm text-cream/70">
            <li>
              <Link to="/" className="hover:text-cream">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-cream">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-cream">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-cream">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 font-semibold text-gold-400">Popular Categories</p>
          <ul className="space-y-2 text-sm text-cream/70">
            {quickCategories.map((category) => (
              <li key={category.id}>
                <Link to="/services" className="hover:text-cream">
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 font-semibold text-gold-400">Get in Touch</p>
          <ul className="space-y-3 text-sm text-cream/70">
            <li className="flex items-center gap-2">
              <Mail size={16} /> hello@vivora.events
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +1 (555) 010-0100
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Vivora Events. All rights reserved.
      </div>
    </footer>
  );
}
