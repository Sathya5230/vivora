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

const Wordmark = () => (
  <span className="flex items-center gap-2">
    <span className="h-2.5 w-2.5 rotate-45 bg-gold-500" aria-hidden="true" />
    <span className="font-display text-xl font-extrabold tracking-tight text-plum-900">
      Vivora
    </span>
  </span>
);

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-plum-100/30 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `group relative font-mono text-xs uppercase tracking-[0.15em] transition-colors ${
                  isActive ? "text-plum-900" : "text-plum-700/60 hover:text-plum-900"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px w-full origin-left bg-gold-500 transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                    aria-hidden="true"
                  />
                </>
              )}
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
        <div className="flex flex-col gap-4 border-t border-plum-900/10 bg-cream px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-mono text-sm uppercase tracking-[0.15em] ${
                  isActive ? "text-plum-900" : "text-plum-700/60"
                }`
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
