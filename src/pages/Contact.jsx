import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2, Instagram, Facebook, Twitter } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import { categories } from "../data/categories";
import { DoodleStar } from "../components/ui/GeneratedDoodles";

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
    <section className="relative mx-auto max-w-6xl overflow-hidden px-6 py-16">
        <DoodleStar className="animate-float absolute right-6 top-2 h-10 w-10 text-gold-500/70 select-none pointer-events-none" />
      <SectionHeading
        eyebrow="Let's Talk"
        title="Start Planning Your Event"
        subtitle="Tell us a little about your event and we'll get back to you within one business day."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        {/* TODO: Email, phone, and office hours below are placeholders to replace before launch */}
        <Reveal className="space-y-6 rounded-[2rem] bg-plum-900 p-8 text-cream">
          <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-gold-400">
            <span className="h-px w-6 bg-gold-400/70" aria-hidden="true" />
            Get in Touch
          </span>
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
          <div className="flex gap-4 text-cream/70">
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
        </Reveal>

        <Reveal delay={0.1}>
        <form onSubmit={handleSubmit} className="space-y-5 rounded-[2rem] border border-plum-100 p-8">
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
        </Reveal>
      </div>
    </section>
  );
}
