import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-plum-100 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-2xl font-semibold text-plum-900">
          Vivora
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${
                  isActive ? "text-plum-900" : "text-plum-700/70 hover:text-plum-900"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button as={Link} to="/contact" variant="primary">
            Book a Consultation
          </Button>
        </div>

        <button
          type="button"
          className="text-plum-900 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-t border-plum-100 bg-cream px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-base font-semibold ${isActive ? "text-plum-900" : "text-plum-700/70"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Button as={Link} to="/contact" variant="primary" onClick={() => setOpen(false)}>
            Book a Consultation
          </Button>
        </div>
      )}
    </header>
  );
}
