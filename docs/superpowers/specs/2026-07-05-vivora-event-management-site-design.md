# Vivora — Event Management Website Design

**Date:** 2026-07-05
**Status:** Approved by user, pending spec review sign-off

## 1. Purpose & Scope

Build a from-scratch marketing/lead-gen website for **Vivora**, an event management
company covering everything from weddings to corporate events to concerts. The
project directory is currently empty — this is a greenfield build.

Visual inspiration (provided by user, not to be copied verbatim):
- **TechXperience** — light lavender/white palette, soft rounded cards, sparkle/swirl
  line-art doodles, split-hero layout with an event-detail info card.
- **NasSummit** — bold black/purple/yellow palette, brutalist sticker badges,
  scrolling marquee ticker strips, oversized condensed type, bold stat grids.

Vivora blends these: a light, elegant base (fits the wedding-heavy service list)
with bold high-contrast accent sections borrowed from the NasSummit energy
(marquee ticker, stat strip).

## 2. Tech Stack

- **React 18 + Vite** (JavaScript/JSX, no TypeScript — kept lightweight for a
  marketing site)
- **Tailwind CSS** for styling
- **React Router** for 4 routes: `/`, `/services`, `/about`, `/contact`
- **lucide-react** for line icons (service categories, UI icons)
- **framer-motion** for scroll-entrance/hover animations (polish, per "unique and
  creative" requirement)
- Doodle accents (sparkles, swirls) are hand-built inline SVG React components —
  no external asset library exists, so these are authored for this project
- Stock photography via hosted Unsplash URLs (hero + a few showcase spots only,
  per user's "mix" choice); everything else uses color/gradient/icon treatment

No backend. The contact form is front-end only: on submit it shows a success
state but does not send data anywhere (no API requested in scope).

## 3. Visual System

**Palette** (exact Tailwind scale finalized during implementation, direction locked):
- Primary — deep violet-plum (e.g. `#4A1942` range) for headlines, primary buttons,
  nav
- Accent — warm gold/champagne (e.g. `#C9A24B` range) for highlights, underlines,
  badges
- Light backgrounds — cream/blush (e.g. `#FBF6F1`, soft lavender-tinted gradients)
  for most sections
- Dark contrast — near-black plum (e.g. `#1E0B1C`) for the marquee and stats
  sections, with gold/white text

**Type:**
- Display/headline face: a distinctive serif with personality (e.g. **Fraunces**)
  — gives an elegant, wedding-appropriate feel without the generic Playfair-everywhere
  look
- Body/UI face: a clean geometric sans (e.g. **Manrope**)

**Icons:** lucide-react, one icon per service category card.

**Doodles:** a small `Doodles` component set (sparkle star, swirl/scribble,
squiggle line) as inline SVGs, reused across hero and section backgrounds,
matching the TechXperience reference's hand-drawn accent style.

**Photography:** Unsplash-hosted images for the hero split-image and 2–3 gallery
showcase spots (wedding, corporate, concert/entertainment). All other visual
interest comes from gradients, doodles, and icon-driven cards.

## 4. Navigation

Sticky header: **Vivora** logo (wordmark + simple geometric mark, violet+gold) ·
Home · About · Services · Contact · primary CTA button **"Book a Consultation"**.

## 5. Homepage (`/`) — single long scroll

1. **Hero** — split layout: left, a photo (or small photo collage) in a rounded
   frame with sparkle/swirl doodles around it (à la TechXperience); right, an
   eyebrow ("Vivora Events"), a large two-line headline, supporting subtext, an
   event-style info/CTA card, and a primary "Book a Consultation" button.
2. **Marquee ticker** — dark plum background, gold/white bold condensed text,
   infinite horizontal scroll of category names (Weddings • Corporate Events •
   Birthdays • Concerts • Cultural Festivals • Destination Weddings • …).
3. **Stats strip** — dark bento-style stat cards: e.g. "500+ Events Delivered",
   "15+ Event Categories", "50+ Cities", "10k+ Happy Guests".
4. **Services bento grid** — ~8 featured category cards (icon, name, 1-line
   description) pulled from the full category list below, plus a "+7 more
   categories" tile linking to `/services`.
5. **Process** — "How Vivora Works": Discover → Design → Deliver → Celebrate,
   4-step card row.
6. **Testimonials** — grid or simple carousel of client quotes with name, event
   type tag, and star rating (placeholder quotes, clearly generic — no fabricated
   real people).
7. **Gallery teaser** — masonry of 4–6 showcase photos (Unsplash) spanning
   different event types, hover caption with event type.
8. **CTA banner** — bold gradient section, "Ready to plan your event?" + primary
   button.
9. **Footer** — logo + tagline, nav links, quick links to top categories, social
   icons (placeholder hrefs), contact email/phone placeholders, copyright.

## 6. Services Page (`/services`)

- Page hero: short intro + a live client-side text search/filter input that
  filters event-type chips across all categories as you type.
- All categories rendered as **accordion sections** (collapsed by default except
  the first), each expanding into a chip-grid of every event type in that
  category. This handles the full list (15 categories, 100+ event types) without
  overwhelming a single view, per the "filterable/searchable" structure decision.
- Full category → event type list (source of truth, from user's brief):

  1. 💍 **Wedding Events** — Full Wedding Planning, Destination Weddings, Luxury
     Weddings, Intimate Weddings, Wedding Coordination, Wedding Day Management
  2. 💖 **Pre-Wedding Events** — Engagement Ceremony, Proposal Planning,
     Save-the-Date Events, Pre-Wedding Photoshoots, Bachelor & Bachelorette
     Parties, Bridal Shower, Groom Shower
  3. 🌼 **Traditional Wedding Functions** — Mehendi Ceremony, Haldi Ceremony,
     Sangeet Night, Reception, Wedding Anniversary Celebrations, Vow Renewal
     Ceremonies
  4. 🎉 **Private Celebrations** — Birthday Parties, Kids' Birthday Parties,
     Milestone Birthdays, Anniversary Parties, Baby Shower, Gender Reveal
     Parties, Naming Ceremony, Housewarming Ceremony, Retirement Parties,
     Graduation Parties, Family Reunions
  5. 🏢 **Corporate Events** — Conferences, Seminars, Business Meetings, Product
     Launches, Award Ceremonies, Annual Day Events, Team Building Events,
     Networking Events, Trade Shows, Exhibitions, Corporate Gala Dinners
  6. 🎓 **Educational Events** — School Annual Day, College Fest, Graduation
     Ceremony, Workshops, Hackathons, Educational Conferences
  7. 🎵 **Entertainment Events** — Concerts, Music Festivals, DJ Nights, Live
     Performances, Fashion Shows, Talent Shows, Comedy Shows, Celebrity Meet &
     Greets
  8. 🎭 **Cultural & Community Events** — Cultural Festivals, Community
     Gatherings, Charity Events, Fundraising Events, Public Celebrations, Local
     Festivals
  9. 🙏 **Religious Events** — Temple Festivals, Church Events, Mosque
     Gatherings, Poojas & Homams, Religious Processions, Spiritual Retreats
  10. 🏅 **Sports & Fitness Events** — Sports Tournaments, Marathons, Cycling
      Events, Fitness Challenges, Yoga Events, Adventure Events
  11. 🍽️ **Social & Lifestyle Events** — Food Festivals, Wine & Beverage
      Tastings, Networking Mixers, Lifestyle Exhibitions, Shopping Festivals
  12. 🎄 **Seasonal & Holiday Events** — Christmas Parties, New Year
      Celebrations, Diwali Events, Eid Celebrations, Halloween Parties,
      Valentine's Day Events, Mother's Day & Father's Day Events
  13. 💼 **Business & Promotional Events** — Brand Activations, Roadshows, Store
      Launches, Franchise Launches, Influencer Events, Media Events, Press
      Conferences, Promotional Campaigns
  14. 🎨 **Creative & Special Events** — Art Exhibitions, Photography
      Exhibitions, Book Launches, Movie Premieres, Gaming Events, E-sports
      Tournaments, NFT & Web3 Events
  15. 🌍 **Destination & Luxury Events** — Destination Weddings, Beach Weddings,
      Cruise Events, Luxury Private Parties, VIP Events, Celebrity Events,
      International Conferences

  (15 categories total — homepage/footer copy should say "15+ Event Categories",
  not 17.)

- Ends with a CTA banner linking to `/contact`.

## 7. About Page (`/about`)

- Story/mission section: what Vivora does and why (boutique, full-spectrum event
  management across every occasion type).
- "Why Vivora" values grid (e.g. Creativity, Precision, Personalization,
  Reliability) — icon + short copy per value.
- Reused/expanded process section (Discover → Design → Deliver → Celebrate).
- Capability-based team framing (e.g. "Lead Planners", "Design Team", "Vendor
  Network", "Day-of Coordinators") — **no fabricated named individuals, bios, or
  photos of real people**, since none exist.
- CTA banner linking to `/contact`.

## 8. Contact Page (`/contact`)

- Split layout: left — contact info block (email, phone, social icons, office
  hours, all placeholder values clearly marked as such in code comments), right —
  inquiry form: Name, Email, Phone, Event Type (select, populated from the 15
  categories), Event Date, Message, Submit.
- Front-end only: `onSubmit` prevents default, shows an inline success message.
  No network request.

## 9. Testing / Verification

No automated test framework requested for a marketing site. Verification is
manual: run the Vite dev server, click through all 4 routes/nav links, confirm
responsive layout at mobile/tablet/desktop widths, confirm the services
accordion + search filter works, confirm the contact form shows its success
state.

## 10. Out of Scope

- Backend/API, real form submission, email delivery
- CMS or dynamic content management
- Real client testimonials, real team bios/photos, real client logos
- Payment/booking/checkout flows
- Multi-language support
