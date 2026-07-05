import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Exhibitors" },
  { to: "/services#sponsors", label: "Sponsors" },
  { to: "/about#blogs", label: "Blogs" },
  { to: "/contact", label: "Contact Us" },
];

const TechLogo = () => (
  <svg className="h-7 w-7 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
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

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-purple-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight text-slate-900">
          <TechLogo />
          <span>TechXperience</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${
                  isActive ? "text-purple-600" : "text-slate-600 hover:text-purple-600"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-200"
          >
            GET A TICKET
          </Link>
        </div>

        <button
          type="button"
          className="text-slate-900 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-t border-purple-100 bg-white px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-base font-semibold ${isActive ? "text-purple-600" : "text-slate-600"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-full bg-purple-600 px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-purple-700"
          >
            GET A TICKET
          </Link>
        </div>
      )}
    </header>
  );
}
