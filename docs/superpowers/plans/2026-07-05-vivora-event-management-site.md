# Vivora Event Management Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the Vivora event management marketing site — a 4-route React app (Home, Services, About, Contact) covering 15 event categories, per `docs/superpowers/specs/2026-07-05-vivora-event-management-site-design.md`.

**Architecture:** Vite + React (JSX, no TypeScript) + React Router, styled with Tailwind CSS using a custom plum/gold/cream design-token palette. Homepage is a single long scroll assembled from independent section components; Services/About/Contact are dedicated routes sharing a common Header/Footer layout. All category/event-type content lives in one shared data module.

**Tech Stack:** React 18, Vite 5, react-router-dom 6, Tailwind CSS 3, framer-motion (entrance animations), lucide-react (icons). No backend, no automated test framework (see Global Constraints).

## Global Constraints

- No TypeScript — all source files are `.jsx`/`.js`.
- No backend, no network calls, no API integration anywhere (contact form is UI-only).
- No automated test framework is in scope (per spec §9). Every task's verification step is a **manual check**: run the dev server and confirm the described behavior in the browser. "Run tests" steps below mean this manual check, not an automated suite.
- Exactly **15 event categories** (not 17) — copy referencing category count must say "15+ Event Categories".
- No fabricated real individuals: testimonials and team references must read as clearly generic/placeholder, never presented as real named people with photos.
- Tailwind design tokens are defined once in Task 1 (`tailwind.config.js`) and must be reused verbatim in every later task: colors `plum` (50–900), `gold` (50–600), `cream` (DEFAULT/100/200); font families `font-display` (Fraunces) and `font-sans` (Manrope); animation `animate-marquee`.
- Every task ends with a git commit.

---

## Task 1: Project Scaffold & Design Tokens

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `.gitignore`
- Create: `index.html`
- Create: `src/main.jsx`
- Create: `src/App.jsx`
- Create: `src/index.css`
- Create: `src/pages/Home.jsx`
- Create: `src/pages/Services.jsx`
- Create: `src/pages/About.jsx`
- Create: `src/pages/Contact.jsx`

**Interfaces:**
- Produces: Tailwind tokens `plum-{50..900}`, `gold-{50..600}`, `cream`/`cream-100`/`cream-200`, `font-display`, `font-sans`, `animate-marquee` (consumed by every later task).
- Produces: routes `/`, `/services`, `/about`, `/contact` rendered by `App.jsx` (Task 2 will nest these under a shared `Layout`).
- Produces: default-exported page components `Home`, `Services`, `About`, `Contact` (later tasks fill these in; the export name and file path must not change).

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "vivora",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^11.3.0",
    "lucide-react": "^0.427.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.40",
    "tailwindcss": "^3.4.7",
    "vite": "^5.4.0"
  }
}
```

- [ ] **Step 2: Create `.gitignore`**

```
node_modules
dist
.DS_Store
```

- [ ] **Step 3: Create `vite.config.js`**

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```

- [ ] **Step 4: Create `postcss.config.js`**

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

- [ ] **Step 5: Create `tailwind.config.js`**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        plum: {
          50: "#faf5f8",
          100: "#f3e4ee",
          200: "#e6c3dd",
          300: "#d38dc0",
          400: "#b85a9d",
          500: "#943a7d",
          600: "#742c64",
          700: "#5b2350",
          800: "#3a1533",
          900: "#1e0b1c",
        },
        gold: {
          50: "#fbf6e9",
          100: "#f5e7c1",
          200: "#ecd08c",
          300: "#dfb35a",
          400: "#c9a24b",
          500: "#b08a36",
          600: "#8c6c2a",
        },
        cream: {
          DEFAULT: "#fbf6f1",
          100: "#fbf6f1",
          200: "#f5ebe0",
        },
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Manrope", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 6: Create `index.html`**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vivora | Event Management</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 7: Create `src/index.css`**

```css
@import url("https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Manrope:wght@400;500;600;700;800&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-cream text-plum-900 font-sans antialiased;
}
```

- [ ] **Step 8: Create the four page stubs**

`src/pages/Home.jsx`:
```jsx
export default function Home() {
  return (
    <div className="px-6 py-24 text-center">
      <h1 className="font-display text-4xl font-semibold text-plum-900">Home</h1>
    </div>
  );
}
```

`src/pages/Services.jsx`:
```jsx
export default function Services() {
  return (
    <div className="px-6 py-24 text-center">
      <h1 className="font-display text-4xl font-semibold text-plum-900">Services</h1>
    </div>
  );
}
```

`src/pages/About.jsx`:
```jsx
export default function About() {
  return (
    <div className="px-6 py-24 text-center">
      <h1 className="font-display text-4xl font-semibold text-plum-900">About</h1>
    </div>
  );
}
```

`src/pages/Contact.jsx`:
```jsx
export default function Contact() {
  return (
    <div className="px-6 py-24 text-center">
      <h1 className="font-display text-4xl font-semibold text-plum-900">Contact</h1>
    </div>
  );
}
```

- [ ] **Step 9: Create `src/App.jsx`**

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
```

- [ ] **Step 10: Create `src/main.jsx`**

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

- [ ] **Step 11: Install dependencies**

Run: `npm install`
Expected: completes with no errors, creates `node_modules/` and `package-lock.json`.

- [ ] **Step 12: Manual verification**

Run: `npm run dev`
Expected: terminal prints a local URL (e.g. `http://localhost:5173`). Open it and visit `/`, `/services`, `/about`, `/contact` directly — each shows its heading in a serif display font on a cream background, confirming Tailwind + fonts + routing all work.

- [ ] **Step 13: Commit**

```bash
git add package.json vite.config.js tailwind.config.js postcss.config.js .gitignore index.html src
git commit -m "feat: scaffold Vivora Vite+React+Tailwind project with routing"
```

---

## Task 2: Category Data + Header/Footer/Layout

**Files:**
- Create: `src/data/categories.js`
- Create: `src/components/ui/Button.jsx`
- Create: `src/components/layout/Header.jsx`
- Create: `src/components/layout/Footer.jsx`
- Create: `src/components/layout/Layout.jsx`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: Tailwind tokens from Task 1.
- Produces: `categories` (array) and `featuredCategoryIds` (array of strings) from `src/data/categories.js`. Each category object shape: `{ id: string, icon: LucideIcon, emoji: string, name: string, description: string, events: string[] }`. Every later task that needs category data imports from this file.
- Produces: `Button` component (`src/components/ui/Button.jsx`), props `{ children, variant = "primary" | "secondary" | "gold", as: Component = "button", className, ...rest }`. Consumed by Hero, CtaBanner, Header, Contact form.
- Produces: `Layout` component that renders `<Header /><main><Outlet /></main><Footer />`; `App.jsx` now nests all 4 routes under it.

- [ ] **Step 1: Create `src/data/categories.js`**

```js
import {
  Gem,
  Heart,
  Flower2,
  PartyPopper,
  Briefcase,
  GraduationCap,
  Music,
  Users,
  Landmark,
  Trophy,
  UtensilsCrossed,
  Gift,
  Megaphone,
  Palette,
  Plane,
} from "lucide-react";

export const categories = [
  {
    id: "wedding-events",
    icon: Gem,
    emoji: "💍",
    name: "Wedding Events",
    description: "End-to-end planning for the big day, from concept to send-off.",
    events: [
      "Full Wedding Planning",
      "Destination Weddings",
      "Luxury Weddings",
      "Intimate Weddings",
      "Wedding Coordination",
      "Wedding Day Management",
    ],
  },
  {
    id: "pre-wedding-events",
    icon: Heart,
    emoji: "💖",
    name: "Pre-Wedding Events",
    description: "Every milestone before the wedding, planned with the same care.",
    events: [
      "Engagement Ceremony",
      "Proposal Planning",
      "Save-the-Date Events",
      "Pre-Wedding Photoshoots",
      "Bachelor & Bachelorette Parties",
      "Bridal Shower",
      "Groom Shower",
    ],
  },
  {
    id: "traditional-wedding-functions",
    icon: Flower2,
    emoji: "🌼",
    name: "Traditional Wedding Functions",
    description: "Mehendi to reception — every ritual, beautifully executed.",
    events: [
      "Mehendi Ceremony",
      "Haldi Ceremony",
      "Sangeet Night",
      "Reception",
      "Wedding Anniversary Celebrations",
      "Vow Renewal Ceremonies",
    ],
  },
  {
    id: "private-celebrations",
    icon: PartyPopper,
    emoji: "🎉",
    name: "Private Celebrations",
    description: "Birthdays, showers, and milestones worth celebrating properly.",
    events: [
      "Birthday Parties",
      "Kids' Birthday Parties",
      "Milestone Birthdays",
      "Anniversary Parties",
      "Baby Shower",
      "Gender Reveal Parties",
      "Naming Ceremony",
      "Housewarming Ceremony",
      "Retirement Parties",
      "Graduation Parties",
      "Family Reunions",
    ],
  },
  {
    id: "corporate-events",
    icon: Briefcase,
    emoji: "🏢",
    name: "Corporate Events",
    description: "Conferences, launches, and gatherings that reflect your brand.",
    events: [
      "Conferences",
      "Seminars",
      "Business Meetings",
      "Product Launches",
      "Award Ceremonies",
      "Annual Day Events",
      "Team Building Events",
      "Networking Events",
      "Trade Shows",
      "Exhibitions",
      "Corporate Gala Dinners",
    ],
  },
  {
    id: "educational-events",
    icon: GraduationCap,
    emoji: "🎓",
    name: "Educational Events",
    description: "Fests, ceremonies, and workshops for schools and campuses.",
    events: [
      "School Annual Day",
      "College Fest",
      "Graduation Ceremony",
      "Workshops",
      "Hackathons",
      "Educational Conferences",
    ],
  },
  {
    id: "entertainment-events",
    icon: Music,
    emoji: "🎵",
    name: "Entertainment Events",
    description: "Concerts, festivals, and live shows produced start to finish.",
    events: [
      "Concerts",
      "Music Festivals",
      "DJ Nights",
      "Live Performances",
      "Fashion Shows",
      "Talent Shows",
      "Comedy Shows",
      "Celebrity Meet & Greets",
    ],
  },
  {
    id: "cultural-community-events",
    icon: Users,
    emoji: "🎭",
    name: "Cultural & Community Events",
    description: "Festivals and gatherings that bring communities together.",
    events: [
      "Cultural Festivals",
      "Community Gatherings",
      "Charity Events",
      "Fundraising Events",
      "Public Celebrations",
      "Local Festivals",
    ],
  },
  {
    id: "religious-events",
    icon: Landmark,
    emoji: "🙏",
    name: "Religious Events",
    description: "Sacred ceremonies and gatherings, handled with respect and precision.",
    events: [
      "Temple Festivals",
      "Church Events",
      "Mosque Gatherings",
      "Poojas & Homams",
      "Religious Processions",
      "Spiritual Retreats",
    ],
  },
  {
    id: "sports-fitness-events",
    icon: Trophy,
    emoji: "🏅",
    name: "Sports & Fitness Events",
    description: "Tournaments, marathons, and challenges for every skill level.",
    events: [
      "Sports Tournaments",
      "Marathons",
      "Cycling Events",
      "Fitness Challenges",
      "Yoga Events",
      "Adventure Events",
    ],
  },
  {
    id: "social-lifestyle-events",
    icon: UtensilsCrossed,
    emoji: "🍽️",
    name: "Social & Lifestyle Events",
    description: "Tastings, mixers, and lifestyle experiences with polish.",
    events: [
      "Food Festivals",
      "Wine & Beverage Tastings",
      "Networking Mixers",
      "Lifestyle Exhibitions",
      "Shopping Festivals",
    ],
  },
  {
    id: "seasonal-holiday-events",
    icon: Gift,
    emoji: "🎄",
    name: "Seasonal & Holiday Events",
    description: "Festive celebrations for every holiday on the calendar.",
    events: [
      "Christmas Parties",
      "New Year Celebrations",
      "Diwali Events",
      "Eid Celebrations",
      "Halloween Parties",
      "Valentine's Day Events",
      "Mother's Day & Father's Day Events",
    ],
  },
  {
    id: "business-promotional-events",
    icon: Megaphone,
    emoji: "💼",
    name: "Business & Promotional Events",
    description: "Activations and launches that get your brand noticed.",
    events: [
      "Brand Activations",
      "Roadshows",
      "Store Launches",
      "Franchise Launches",
      "Influencer Events",
      "Media Events",
      "Press Conferences",
      "Promotional Campaigns",
    ],
  },
  {
    id: "creative-special-events",
    icon: Palette,
    emoji: "🎨",
    name: "Creative & Special Events",
    description: "Exhibitions, premieres, and one-of-a-kind creative showcases.",
    events: [
      "Art Exhibitions",
      "Photography Exhibitions",
      "Book Launches",
      "Movie Premieres",
      "Gaming Events",
      "E-sports Tournaments",
      "NFT & Web3 Events",
    ],
  },
  {
    id: "destination-luxury-events",
    icon: Plane,
    emoji: "🌍",
    name: "Destination & Luxury Events",
    description: "Once-in-a-lifetime events, anywhere in the world.",
    events: [
      "Destination Weddings",
      "Beach Weddings",
      "Cruise Events",
      "Luxury Private Parties",
      "VIP Events",
      "Celebrity Events",
      "International Conferences",
    ],
  },
];

export const featuredCategoryIds = [
  "wedding-events",
  "corporate-events",
  "private-celebrations",
  "entertainment-events",
  "cultural-community-events",
  "destination-luxury-events",
  "religious-events",
  "seasonal-holiday-events",
];
```

- [ ] **Step 2: Create `src/components/ui/Button.jsx`**

```jsx
export default function Button({
  children,
  variant = "primary",
  as: Component = "button",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200";
  const variants = {
    primary: "bg-plum-700 text-cream hover:bg-plum-800",
    secondary:
      "bg-transparent border border-plum-700 text-plum-700 hover:bg-plum-700 hover:text-cream",
    gold: "bg-gold-400 text-plum-900 hover:bg-gold-500",
  };

  return (
    <Component className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
}
```

- [ ] **Step 3: Create `src/components/layout/Header.jsx`**

```jsx
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
```

- [ ] **Step 4: Create `src/components/layout/Footer.jsx`**

```jsx
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
```

- [ ] **Step 5: Create `src/components/layout/Layout.jsx`**

```jsx
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-cream text-plum-900">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
```

- [ ] **Step 6: Modify `src/App.jsx` to nest routes under `Layout`**

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

- [ ] **Step 7: Manual verification**

Run: `npm run dev` (if not already running)
Expected: every route shows the sticky header (logo, 4 nav links, "Book a Consultation" button) and the dark footer with 4 columns. Clicking nav links navigates correctly and highlights the active link. Resize the browser below 768px width — the desktop nav/CTA disappear, a hamburger icon appears; clicking it opens a stacked mobile menu with the same 4 links + CTA, and clicking a link closes the menu and navigates.

- [ ] **Step 8: Commit**

```bash
git add src
git commit -m "feat: add category data, Header, Footer, and shared Layout"
```

---

## Task 3: Doodles + Hero Section

**Files:**
- Create: `src/components/ui/Doodles.jsx`
- Create: `src/components/sections/Hero.jsx`
- Modify: `src/pages/Home.jsx`

**Interfaces:**
- Produces: named exports `Sparkle`, `Swirl`, `Squiggle` from `src/components/ui/Doodles.jsx` — each accepts `{ className }` and renders an inline SVG colored via `currentColor` (control color with a Tailwind `text-*` class on `className`).
- Produces: default-exported `Hero` component (no props) from `src/components/sections/Hero.jsx`.
- Consumes: `Button` from Task 2.

- [ ] **Step 1: Create `src/components/ui/Doodles.jsx`**

```jsx
export function Sparkle({ className = "" }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 2c1 6 3 11 8 13-5 2-7 7-8 13-1-6-3-11-8-13 5-2 7-7 8-13Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Swirl({ className = "" }) {
  return (
    <svg viewBox="0 0 60 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 20c0-9 7-16 16-16s14 6 12 14-10 10-16 6 0-14 8-14 10 6 8 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Squiggle({ className = "" }) {
  return (
    <svg viewBox="0 0 80 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M2 10c6-8 12 8 18 0s12-8 18 0 12 8 18 0 12-8 18 0"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
```

- [ ] **Step 2: Create `src/components/sections/Hero.jsx`**

```jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkle, Swirl } from "../ui/Doodles";
import Button from "../ui/Button";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80";

export default function Hero() {
  return (
    <section className="relative mx-auto grid max-w-7xl gap-12 overflow-hidden px-6 pb-24 pt-16 md:grid-cols-2 md:items-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <Sparkle className="absolute -left-6 -top-6 h-10 w-10 text-gold-400" />
        <Swirl className="absolute -bottom-8 right-4 h-12 w-20 text-plum-400" />
        <img
          src={HERO_IMAGE}
          alt="Guests celebrating at a Vivora-planned event"
          className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-gold-500">
          Vivora Events
        </span>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-plum-900 sm:text-5xl lg:text-6xl">
          Every Occasion, <span className="text-plum-500">Perfectly</span> Orchestrated
        </h1>
        <p className="mt-6 max-w-lg text-lg text-plum-700/80">
          From intimate ceremonies to citywide celebrations, Vivora plans, designs,
          and delivers every detail of your event — so you can just show up and
          celebrate.
        </p>

        <div className="mt-10 flex flex-col gap-4 rounded-3xl bg-gradient-to-br from-plum-100 to-gold-100 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-xl font-semibold text-plum-900">
              15+ Event Categories, One Team
            </p>
            <p className="mt-1 text-sm text-plum-700/70">
              Weddings · Corporate · Celebrations · Culture · and more
            </p>
          </div>
          <Button as={Link} to="/contact" variant="primary">
            Book a Consultation
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 3: Modify `src/pages/Home.jsx`**

```jsx
import Hero from "../components/sections/Hero";

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
```

- [ ] **Step 4: Manual verification**

Run: `npm run dev`, open `/`
Expected: hero shows a two-column layout — left, a rounded photo with a gold sparkle and plum swirl doodle overlapping its corners; right, the headline "Every Occasion, Perfectly Orchestrated" with "Perfectly" in a lighter plum, supporting text, a gradient info card with "15+ Event Categories, One Team", and a "Book a Consultation" button that navigates to `/contact`. Both columns fade/slide in on load.

- [ ] **Step 5: Commit**

```bash
git add src
git commit -m "feat: add doodle accents and homepage hero section"
```

---

## Task 4: Marquee Ticker + Category Marquee

**Files:**
- Create: `src/components/ui/Marquee.jsx`
- Create: `src/components/sections/CategoryMarquee.jsx`
- Modify: `src/pages/Home.jsx`

**Interfaces:**
- Produces: default-exported `Marquee` component, props `{ items: string[], className }` — renders `items` duplicated back-to-back scrolling via `animate-marquee`.
- Produces: default-exported `CategoryMarquee` component (no props), consumes `categories` from Task 2's data module.

- [ ] **Step 1: Create `src/components/ui/Marquee.jsx`**

```jsx
export default function Marquee({ items, className = "" }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="flex w-max animate-marquee gap-10 py-6">
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="whitespace-nowrap font-display text-2xl font-semibold sm:text-3xl"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create `src/components/sections/CategoryMarquee.jsx`**

```jsx
import Marquee from "../ui/Marquee";
import { categories } from "../../data/categories";

const marqueeItems = categories.map((category) => `${category.emoji} ${category.name}`);

export default function CategoryMarquee() {
  return (
    <section className="bg-plum-900 text-gold-400">
      <Marquee items={marqueeItems} />
    </section>
  );
}
```

- [ ] **Step 3: Modify `src/pages/Home.jsx`**

```jsx
import Hero from "../components/sections/Hero";
import CategoryMarquee from "../components/sections/CategoryMarquee";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryMarquee />
    </>
  );
}
```

- [ ] **Step 4: Manual verification**

Run: `npm run dev`, open `/`
Expected: below the hero, a dark plum strip with gold bold text continuously scrolls all 15 category names (with emoji) leftward in an unbroken loop with no visible seam or jump.

- [ ] **Step 5: Commit**

```bash
git add src
git commit -m "feat: add scrolling category marquee to homepage"
```

---

## Task 5: Stat Cards + Stats Strip

**Files:**
- Create: `src/components/ui/StatCard.jsx`
- Create: `src/components/sections/StatsStrip.jsx`
- Modify: `src/pages/Home.jsx`

**Interfaces:**
- Produces: default-exported `StatCard`, props `{ value: string, label: string }`.
- Produces: default-exported `StatsStrip` (no props).

- [ ] **Step 1: Create `src/components/ui/StatCard.jsx`**

```jsx
export default function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl bg-plum-800 px-6 py-8 text-center">
      <p className="font-display text-3xl font-semibold text-gold-400 sm:text-4xl">
        {value}
      </p>
      <p className="mt-2 text-sm text-cream/70">{label}</p>
    </div>
  );
}
```

- [ ] **Step 2: Create `src/components/sections/StatsStrip.jsx`**

```jsx
import StatCard from "../ui/StatCard";

const stats = [
  { value: "500+", label: "Events Delivered" },
  { value: "15+", label: "Event Categories" },
  { value: "50+", label: "Cities Served" },
  { value: "10k+", label: "Happy Guests" },
];

export default function StatsStrip() {
  return (
    <section className="bg-plum-900 px-6 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Modify `src/pages/Home.jsx`**

```jsx
import Hero from "../components/sections/Hero";
import CategoryMarquee from "../components/sections/CategoryMarquee";
import StatsStrip from "../components/sections/StatsStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryMarquee />
      <StatsStrip />
    </>
  );
}
```

- [ ] **Step 4: Manual verification**

Run: `npm run dev`, open `/`
Expected: below the marquee, a dark section shows 4 stat cards (2 per row on mobile, 4 per row on desktop) reading "500+ Events Delivered", "15+ Event Categories", "50+ Cities Served", "10k+ Happy Guests" in gold numerals.

- [ ] **Step 5: Commit**

```bash
git add src
git commit -m "feat: add stats strip to homepage"
```

---

## Task 6: Category Cards + Services Bento Grid

**Files:**
- Create: `src/components/ui/CategoryCard.jsx`
- Create: `src/components/ui/SectionHeading.jsx`
- Create: `src/components/sections/ServicesBentoGrid.jsx`
- Modify: `src/pages/Home.jsx`

**Interfaces:**
- Produces: default-exported `SectionHeading`, props `{ eyebrow?, title, subtitle?, align?: "left" | "center" }` (defaults to centered).
- Produces: default-exported `CategoryCard`, props `{ category }` (shape from Task 2's data module) — links to `/services`.
- Produces: default-exported `ServicesBentoGrid` (no props), consumes `categories` and `featuredCategoryIds` from Task 2.

- [ ] **Step 1: Create `src/components/ui/SectionHeading.jsx`**

```jsx
export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  const alignment = align === "left" ? "text-left items-start" : "text-center items-center mx-auto";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-widest text-gold-500">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-semibold text-plum-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="text-base text-plum-700/80 sm:text-lg">{subtitle}</p>}
    </div>
  );
}
```

- [ ] **Step 2: Create `src/components/ui/CategoryCard.jsx`**

```jsx
import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  const Icon = category.icon;

  return (
    <Link
      to="/services"
      className="group rounded-2xl border border-plum-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-plum-100 text-plum-700 transition-colors group-hover:bg-plum-700 group-hover:text-cream">
        <Icon size={22} />
      </div>
      <p className="mt-4 font-display text-lg font-semibold text-plum-900">
        {category.emoji} {category.name}
      </p>
      <p className="mt-2 text-sm text-plum-700/70">{category.description}</p>
    </Link>
  );
}
```

- [ ] **Step 3: Create `src/components/sections/ServicesBentoGrid.jsx`**

```jsx
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CategoryCard from "../ui/CategoryCard";
import SectionHeading from "../ui/SectionHeading";
import { categories, featuredCategoryIds } from "../../data/categories";

const featured = categories.filter((category) => featuredCategoryIds.includes(category.id));
const remainingCount = categories.length - featured.length;

export default function ServicesBentoGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="What We Plan"
        title="Every Kind of Celebration"
        subtitle="From the most traditional rituals to the boldest brand activations — explore a few of the 15+ categories Vivora manages end to end."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}

        <Link
          to="/services"
          className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-plum-900 p-6 text-center text-cream transition hover:bg-plum-800"
        >
          <span className="font-display text-lg font-semibold">
            +{remainingCount} More Categories
          </span>
          <span className="inline-flex items-center gap-2 text-sm text-gold-400">
            View All Services <ArrowRight size={16} />
          </span>
        </Link>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Modify `src/pages/Home.jsx`**

```jsx
import Hero from "../components/sections/Hero";
import CategoryMarquee from "../components/sections/CategoryMarquee";
import StatsStrip from "../components/sections/StatsStrip";
import ServicesBentoGrid from "../components/sections/ServicesBentoGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryMarquee />
      <StatsStrip />
      <ServicesBentoGrid />
    </>
  );
}
```

- [ ] **Step 5: Manual verification**

Run: `npm run dev`, open `/`
Expected: below the stats, a "Every Kind of Celebration" section shows 8 category cards (each with an icon, name+emoji, description) plus a 9th dark tile reading "+7 More Categories / View All Services →". Clicking any card or the "+7" tile navigates to `/services`. Icons render correctly (no broken/missing icon boxes).

- [ ] **Step 6: Commit**

```bash
git add src
git commit -m "feat: add services bento grid to homepage"
```

---

## Task 7: Process Steps Section

**Files:**
- Create: `src/components/ui/ProcessStep.jsx`
- Create: `src/components/sections/ProcessSection.jsx`
- Modify: `src/pages/Home.jsx`

**Interfaces:**
- Produces: default-exported `ProcessStep`, props `{ number: string, title: string, description: string }`.
- Produces: default-exported `ProcessSection` (no props) — **reused as-is by the About page in Task 12**, so its file path/export must not change.
- Consumes: `SectionHeading` from Task 6.

- [ ] **Step 1: Create `src/components/ui/ProcessStep.jsx`**

```jsx
export default function ProcessStep({ number, title, description }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <span className="font-display text-3xl font-semibold text-gold-500">{number}</span>
      <p className="mt-3 font-display text-lg font-semibold text-plum-900">{title}</p>
      <p className="mt-2 text-sm text-plum-700/70">{description}</p>
    </div>
  );
}
```

- [ ] **Step 2: Create `src/components/sections/ProcessSection.jsx`**

```jsx
import ProcessStep from "../ui/ProcessStep";
import SectionHeading from "../ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We learn your story, your guests, and your vision in a detailed consultation.",
  },
  {
    number: "02",
    title: "Design",
    description: "Our team designs the concept, theme, vendors, and timeline around you.",
  },
  {
    number: "03",
    title: "Deliver",
    description: "Every logistic, vendor, and detail is coordinated and confirmed.",
  },
  {
    number: "04",
    title: "Celebrate",
    description: "On the day, our team manages everything so you can be fully present.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-plum-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="How Vivora Works" title="From First Call to Final Toast" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <ProcessStep key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Modify `src/pages/Home.jsx`**

```jsx
import Hero from "../components/sections/Hero";
import CategoryMarquee from "../components/sections/CategoryMarquee";
import StatsStrip from "../components/sections/StatsStrip";
import ServicesBentoGrid from "../components/sections/ServicesBentoGrid";
import ProcessSection from "../components/sections/ProcessSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryMarquee />
      <StatsStrip />
      <ServicesBentoGrid />
      <ProcessSection />
    </>
  );
}
```

- [ ] **Step 4: Manual verification**

Run: `npm run dev`, open `/`
Expected: below the bento grid, a light plum section titled "From First Call to Final Toast" shows 4 numbered cards: 01 Discover, 02 Design, 03 Deliver, 04 Celebrate, each with its description.

- [ ] **Step 5: Commit**

```bash
git add src
git commit -m "feat: add process section to homepage"
```

---

## Task 8: Testimonials

**Files:**
- Create: `src/components/ui/TestimonialCard.jsx`
- Create: `src/components/sections/Testimonials.jsx`
- Modify: `src/pages/Home.jsx`

**Interfaces:**
- Produces: default-exported `TestimonialCard`, props `{ quote: string, name: string, eventType: string }`.
- Produces: default-exported `Testimonials` (no props). Quotes are placeholders (see Global Constraints — no fabricated real individuals; names are generic first-name + last-initial).

- [ ] **Step 1: Create `src/components/ui/TestimonialCard.jsx`**

```jsx
import { Star } from "lucide-react";

export default function TestimonialCard({ quote, name, eventType }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">
      <div className="flex gap-1 text-gold-400">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} size={16} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <p className="mt-4 text-plum-700/90">&ldquo;{quote}&rdquo;</p>
      <p className="mt-6 font-display font-semibold text-plum-900">{name}</p>
      <p className="text-sm text-plum-700/60">{eventType}</p>
    </div>
  );
}
```

- [ ] **Step 2: Create `src/components/sections/Testimonials.jsx`**

```jsx
import TestimonialCard from "../ui/TestimonialCard";
import SectionHeading from "../ui/SectionHeading";

// Placeholder testimonials — replace with real client quotes before launch.
const testimonials = [
  {
    quote:
      "Vivora handled every detail of our wedding weekend. We didn't worry about a single thing.",
    name: "Priya S.",
    eventType: "Destination Wedding",
  },
  {
    quote: "Our product launch felt like a Broadway show. The team executed flawlessly.",
    name: "Daniel K.",
    eventType: "Corporate Product Launch",
  },
  {
    quote:
      "From the Mehendi to the reception, every function felt personal and stress-free.",
    name: "Ananya R.",
    eventType: "Traditional Wedding Functions",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading eyebrow="Client Love" title="What Our Clients Say" />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Modify `src/pages/Home.jsx`**

```jsx
import Hero from "../components/sections/Hero";
import CategoryMarquee from "../components/sections/CategoryMarquee";
import StatsStrip from "../components/sections/StatsStrip";
import ServicesBentoGrid from "../components/sections/ServicesBentoGrid";
import ProcessSection from "../components/sections/ProcessSection";
import Testimonials from "../components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryMarquee />
      <StatsStrip />
      <ServicesBentoGrid />
      <ProcessSection />
      <Testimonials />
    </>
  );
}
```

- [ ] **Step 4: Manual verification**

Run: `npm run dev`, open `/`
Expected: below the process section, "What Our Clients Say" shows 3 cards, each with 5 gold stars, a quote, a name, and an event type tag.

- [ ] **Step 5: Commit**

```bash
git add src
git commit -m "feat: add testimonials section to homepage"
```

---

## Task 9: Gallery Teaser

**Files:**
- Create: `src/components/sections/GalleryTeaser.jsx`
- Modify: `src/pages/Home.jsx`

**Interfaces:**
- Produces: default-exported `GalleryTeaser` (no props). Uses hosted Unsplash image URLs directly (no local asset pipeline).

- [ ] **Step 1: Create `src/components/sections/GalleryTeaser.jsx`**

```jsx
import SectionHeading from "../ui/SectionHeading";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80",
    caption: "Weddings",
  },
  {
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    caption: "Corporate Events",
  },
  {
    src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80",
    caption: "Concerts",
  },
  {
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
    caption: "Celebrations",
  },
];

export default function GalleryTeaser() {
  return (
    <section className="bg-plum-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Moments We've Made" title="A Glimpse Into Our Work" />
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {photos.map((photo) => (
            <div key={photo.caption} className="group relative overflow-hidden rounded-2xl">
              <img
                src={photo.src}
                alt={photo.caption}
                className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-plum-900/70 via-transparent to-transparent p-4 opacity-0 transition group-hover:opacity-100">
                <span className="font-display text-lg font-semibold text-cream">
                  {photo.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Modify `src/pages/Home.jsx`**

```jsx
import Hero from "../components/sections/Hero";
import CategoryMarquee from "../components/sections/CategoryMarquee";
import StatsStrip from "../components/sections/StatsStrip";
import ServicesBentoGrid from "../components/sections/ServicesBentoGrid";
import ProcessSection from "../components/sections/ProcessSection";
import Testimonials from "../components/sections/Testimonials";
import GalleryTeaser from "../components/sections/GalleryTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryMarquee />
      <StatsStrip />
      <ServicesBentoGrid />
      <ProcessSection />
      <Testimonials />
      <GalleryTeaser />
    </>
  );
}
```

- [ ] **Step 3: Manual verification**

Run: `npm run dev`, open `/`
Expected: below testimonials, a 2x2 (mobile) / 1x4 (desktop) photo grid loads real photos; hovering a photo scales it slightly and reveals a caption ("Weddings", "Corporate Events", "Concerts", "Celebrations") over a dark gradient.

- [ ] **Step 4: Commit**

```bash
git add src
git commit -m "feat: add gallery teaser section to homepage"
```

---

## Task 10: CTA Banner + Homepage Finalization

**Files:**
- Create: `src/components/ui/CtaBanner.jsx`
- Modify: `src/pages/Home.jsx`

**Interfaces:**
- Produces: default-exported `CtaBanner`, props `{ title?: string, subtitle?: string, ctaLabel?: string, ctaTo?: string }` with defaults ("Ready to Plan Your Event?" / generic subtitle / "Book a Consultation" / "/contact"). **Reused by Services (Task 11) and About (Task 12)** with overridden props — its prop names must not change.
- Consumes: `Button`, `Sparkle` from earlier tasks.

- [ ] **Step 1: Create `src/components/ui/CtaBanner.jsx`**

```jsx
import { Link } from "react-router-dom";
import Button from "./Button";
import { Sparkle } from "./Doodles";

export default function CtaBanner({
  title = "Ready to Plan Your Event?",
  subtitle = "Tell us your vision — we'll handle everything from concept to celebration.",
  ctaLabel = "Book a Consultation",
  ctaTo = "/contact",
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-plum-700 to-plum-900 px-6 py-20 text-center text-cream">
      <Sparkle className="absolute left-10 top-10 h-10 w-10 text-gold-400/70" />
      <Sparkle className="absolute bottom-10 right-10 h-8 w-8 text-gold-400/50" />
      <h2 className="font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-xl text-cream/80">{subtitle}</p>
      <div className="mt-8 flex justify-center">
        <Button as={Link} to={ctaTo} variant="gold">
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Modify `src/pages/Home.jsx`**

```jsx
import { useEffect } from "react";
import Hero from "../components/sections/Hero";
import CategoryMarquee from "../components/sections/CategoryMarquee";
import StatsStrip from "../components/sections/StatsStrip";
import ServicesBentoGrid from "../components/sections/ServicesBentoGrid";
import ProcessSection from "../components/sections/ProcessSection";
import Testimonials from "../components/sections/Testimonials";
import GalleryTeaser from "../components/sections/GalleryTeaser";
import CtaBanner from "../components/ui/CtaBanner";

export default function Home() {
  useEffect(() => {
    document.title = "Vivora | Full-Service Event Management";
  }, []);

  return (
    <>
      <Hero />
      <CategoryMarquee />
      <StatsStrip />
      <ServicesBentoGrid />
      <ProcessSection />
      <Testimonials />
      <GalleryTeaser />
      <CtaBanner />
    </>
  );
}
```

- [ ] **Step 3: Manual verification**

Run: `npm run dev`, open `/`
Expected: the homepage now ends with a dark gradient CTA banner ("Ready to Plan Your Event?" + gold "Book a Consultation" button linking to `/contact`) directly above the footer. The browser tab title reads "Vivora | Full-Service Event Management". Scroll the full page top-to-bottom and confirm all 8 sections appear in order: Hero, Marquee, Stats, Bento Grid, Process, Testimonials, Gallery, CTA.

- [ ] **Step 4: Commit**

```bash
git add src
git commit -m "feat: add CTA banner and finalize homepage assembly"
```

---

## Task 11: Services Page

**Files:**
- Create: `src/components/ui/AccordionCategory.jsx`
- Modify: `src/pages/Services.jsx`

**Interfaces:**
- Produces: default-exported `AccordionCategory`, props `{ category, defaultOpen?: boolean, searchTerm?: string }` — renders category header + expandable chip-grid of `category.events`, filtered by `searchTerm` (case-insensitive substring match); auto-expands and hides itself (`return null`) if a non-empty `searchTerm` matches nothing in that category.
- Consumes: `SectionHeading`, `CtaBanner`, `categories` from earlier tasks.

- [ ] **Step 1: Create `src/components/ui/AccordionCategory.jsx`**

```jsx
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function AccordionCategory({ category, defaultOpen = false, searchTerm = "" }) {
  const [open, setOpen] = useState(defaultOpen);
  const Icon = category.icon;

  const visibleEvents = category.events.filter((eventName) =>
    eventName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (searchTerm && visibleEvents.length === 0) {
    return null;
  }

  const isOpen = open || (searchTerm.length > 0 && visibleEvents.length > 0);

  return (
    <div className="rounded-2xl border border-plum-100 bg-white">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-plum-100 text-plum-700">
            <Icon size={20} />
          </span>
          <span className="font-display text-lg font-semibold text-plum-900">
            {category.emoji} {category.name}
          </span>
        </span>
        <ChevronDown
          size={20}
          className={`text-plum-700 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="flex flex-wrap gap-2 px-6 pb-6">
          {visibleEvents.map((eventName) => (
            <span key={eventName} className="rounded-full bg-plum-50 px-4 py-2 text-sm text-plum-700">
              {eventName}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Modify `src/pages/Services.jsx`**

```jsx
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import AccordionCategory from "../components/ui/AccordionCategory";
import CtaBanner from "../components/ui/CtaBanner";
import SectionHeading from "../components/ui/SectionHeading";
import { categories } from "../data/categories";

export default function Services() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    document.title = "Services | Vivora";
  }, []);

  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pb-12 pt-16 text-center">
        <SectionHeading
          eyebrow="Our Services"
          title="Every Celebration, Perfectly Planned"
          subtitle="Browse all 15 categories and 100+ event types Vivora manages end to end. Search to find exactly what you need."
        />

        <div className="mx-auto mt-8 flex max-w-md items-center gap-3 rounded-full border border-plum-200 bg-white px-5 py-3">
          <Search size={18} className="text-plum-700/50" />
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search event types, e.g. 'Mehendi'"
            className="w-full bg-transparent text-sm text-plum-900 outline-none placeholder:text-plum-700/40"
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="flex flex-col gap-4">
          {categories.map((category, index) => (
            <AccordionCategory
              key={category.id}
              category={category}
              defaultOpen={index === 0}
              searchTerm={searchTerm}
            />
          ))}
        </div>
      </section>

      <CtaBanner
        title="Don't See Your Event Listed?"
        subtitle="If it can be celebrated, Vivora can plan it. Tell us what you have in mind."
      />
    </>
  );
}
```

- [ ] **Step 3: Manual verification**

Run: `npm run dev`, open `/services`
Expected: page shows a search bar and 15 collapsed accordions (first one, "Wedding Events", open by default). Clicking any accordion header toggles it open/closed, revealing its event-type chips. Typing "mehendi" into the search box collapses all categories except "Traditional Wedding Functions" (auto-expanded, showing only the "Mehendi Ceremony" chip). Clearing the search restores the default state (only the first accordion open). Page ends with a CTA banner reading "Don't See Your Event Listed?".

- [ ] **Step 4: Commit**

```bash
git add src
git commit -m "feat: build services page with searchable category accordions"
```

---

## Task 12: About Page

**Files:**
- Modify: `src/pages/About.jsx`

**Interfaces:**
- Consumes: `SectionHeading`, `ProcessSection` (unchanged from Task 7), `CtaBanner` from earlier tasks.

- [ ] **Step 1: Modify `src/pages/About.jsx`**

```jsx
import { useEffect } from "react";
import { Sparkles, ShieldCheck, Palette, HeartHandshake } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import ProcessSection from "../components/sections/ProcessSection";
import CtaBanner from "../components/ui/CtaBanner";

const values = [
  {
    icon: Sparkles,
    title: "Creativity",
    description: "Every event is designed around your story, not a template.",
  },
  {
    icon: ShieldCheck,
    title: "Precision",
    description: "Timelines, vendors, and logistics tracked down to the minute.",
  },
  {
    icon: Palette,
    title: "Personalization",
    description: "From color palette to playlist, every detail reflects you.",
  },
  {
    icon: HeartHandshake,
    title: "Reliability",
    description: "On the day, our team handles everything so you don't have to.",
  },
];

const teamCapabilities = [
  {
    title: "Lead Planners",
    description: "Own your event end to end, from first call to final toast.",
  },
  {
    title: "Design Team",
    description: "Craft the look, feel, and theme of every celebration.",
  },
  {
    title: "Vendor Network",
    description: "Vetted caterers, venues, photographers, and performers.",
  },
  {
    title: "Day-of Coordinators",
    description: "On-site management so you can be fully present.",
  },
];

export default function About() {
  useEffect(() => {
    document.title = "About | Vivora";
  }, []);

  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-16 text-center">
        <SectionHeading
          eyebrow="About Vivora"
          title="Full-Spectrum Event Management, One Team"
          subtitle="Vivora was built on a simple idea: every occasion, from a first-birthday party to a multi-day destination wedding, deserves the same level of care, creativity, and precision. We plan, design, and deliver events across 15+ categories — so you never need a different vendor for a different kind of celebration."
        />
      </section>

      <section className="bg-plum-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Why Vivora" title="What Makes Us Different" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-plum-100 text-plum-700">
                  <value.icon size={22} />
                </div>
                <p className="mt-4 font-display text-lg font-semibold text-plum-900">
                  {value.title}
                </p>
                <p className="mt-2 text-sm text-plum-700/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="The Team Behind Vivora" title="Who You'll Work With" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamCapabilities.map((capability) => (
            <div key={capability.title} className="rounded-2xl border border-plum-100 p-6">
              <p className="font-display text-lg font-semibold text-plum-900">
                {capability.title}
              </p>
              <p className="mt-2 text-sm text-plum-700/70">{capability.description}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
```

- [ ] **Step 2: Manual verification**

Run: `npm run dev`, open `/about`
Expected: page shows, in order: the mission statement, a 4-item "What Makes Us Different" values grid (Creativity, Precision, Personalization, Reliability), the same 4-step process section used on the homepage, a 4-item "Who You'll Work With" capability grid (Lead Planners, Design Team, Vendor Network, Day-of Coordinators — no named individuals or photos), and the default CTA banner ("Ready to Plan Your Event?").

- [ ] **Step 3: Commit**

```bash
git add src
git commit -m "feat: build about page"
```

---

## Task 13: Contact Page

**Files:**
- Modify: `src/pages/Contact.jsx`

**Interfaces:**
- Consumes: `SectionHeading`, `Button`, `categories` from earlier tasks. Form is fully client-side (no network request) per Global Constraints.

- [ ] **Step 1: Modify `src/pages/Contact.jsx`**

```jsx
import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import { categories } from "../data/categories";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  eventType: categories[0].name,
  eventDate: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact | Vivora";
  }, []);

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // No backend configured yet — this only updates local UI state.
    setSubmitted(true);
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading
        eyebrow="Let's Talk"
        title="Start Planning Your Event"
        subtitle="Tell us a little about your event and we'll get back to you within one business day."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6 rounded-3xl bg-plum-900 p-8 text-cream">
          <p className="font-display text-xl font-semibold">Get in Touch</p>
          <ul className="space-y-4 text-sm text-cream/80">
            <li className="flex items-center gap-3">
              <Mail size={18} /> hello@vivora.events
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} /> +1 (555) 010-0100
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} /> Available for events worldwide
            </li>
          </ul>
          <p className="text-sm text-cream/60">
            Office hours: Monday – Saturday, 9:00 AM – 7:00 PM
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-plum-100 p-8">
          {submitted ? (
            <div className="flex flex-col items-center gap-3 py-12 text-center">
              <CheckCircle2 size={40} className="text-plum-700" />
              <p className="font-display text-xl font-semibold text-plum-900">
                Thank you! We'll be in touch shortly.
              </p>
            </div>
          ) : (
            <>
              <div>
                <label className="text-sm font-semibold text-plum-900">Name</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={handleChange("name")}
                  className="mt-1 w-full rounded-xl border border-plum-200 px-4 py-3 outline-none focus:border-plum-500"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-plum-900">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={handleChange("email")}
                    className="mt-1 w-full rounded-xl border border-plum-200 px-4 py-3 outline-none focus:border-plum-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-plum-900">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    className="mt-1 w-full rounded-xl border border-plum-200 px-4 py-3 outline-none focus:border-plum-500"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-plum-900">Event Type</label>
                  <select
                    value={form.eventType}
                    onChange={handleChange("eventType")}
                    className="mt-1 w-full rounded-xl border border-plum-200 px-4 py-3 outline-none focus:border-plum-500"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold text-plum-900">Event Date</label>
                  <input
                    type="date"
                    value={form.eventDate}
                    onChange={handleChange("eventDate")}
                    className="mt-1 w-full rounded-xl border border-plum-200 px-4 py-3 outline-none focus:border-plum-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-plum-900">Message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={handleChange("message")}
                  className="mt-1 w-full rounded-xl border border-plum-200 px-4 py-3 outline-none focus:border-plum-500"
                />
              </div>

              <Button type="submit" variant="primary" className="w-full">
                Send Inquiry
              </Button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Manual verification**

Run: `npm run dev`, open `/contact`
Expected: left column shows contact info (email, phone, "Available for events worldwide", office hours) on a dark card. Right column shows a form with Name, Email, Phone, Event Type (a `<select>` populated with all 15 category names), Event Date, Message, and a "Send Inquiry" button. Filling in Name and Email (required) and clicking "Send Inquiry" replaces the form with a checkmark and "Thank you! We'll be in touch shortly." No network request is made (check the browser Network tab — no POST/fetch fires).

- [ ] **Step 3: Commit**

```bash
git add src
git commit -m "feat: build contact page with client-side inquiry form"
```

---

## Task 14: Final QA Pass

**Files:** none (verification only; fixes if needed are applied to files from earlier tasks)

**Interfaces:** none — this task only verifies the integrated app.

- [ ] **Step 1: Production build check**

Run: `npm run build`
Expected: build completes with no errors, produces a `dist/` directory.

- [ ] **Step 2: Preview the production build**

Run: `npm run preview`
Expected: terminal prints a local preview URL (e.g. `http://localhost:4173`).

- [ ] **Step 3: Full manual walkthrough**

Open the preview URL and work through this checklist:

- **Home (`/`):** hero image + doodles + headline + CTA card render; marquee scrolls all 15 categories seamlessly; 4 stat cards show; bento grid shows 8 cards + "+7 More Categories" tile linking to `/services`; process section shows 4 steps; testimonials show 3 cards; gallery shows 4 photos with hover captions; CTA banner appears above the footer; footer shows all 4 columns.
- **Services (`/services`):** search "Mehendi" isolates the "Traditional Wedding Functions" accordion; clearing the search restores the default (only the first accordion open); every one of the 15 accordions expands/collapses on click.
- **About (`/about`):** mission text, 4 values, the shared process section, 4 team-capability cards (no named individuals/photos), and a CTA banner all render.
- **Contact (`/contact`):** filling Name + Email and submitting shows the success state; the Event Type dropdown lists all 15 categories.
- **Responsive check:** resize the browser to ~375px width and repeat a quick pass over all 4 routes — header collapses to a working hamburger menu, all grids stack to a single column, the marquee still scrolls, the contact form fields stack vertically.

- [ ] **Step 4: Fix any issues found**

If any check above fails, fix it in the relevant file from its originating task and re-run the check. (No issues are anticipated if all prior tasks were verified individually.)

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: final QA pass across all routes and breakpoints"
```
