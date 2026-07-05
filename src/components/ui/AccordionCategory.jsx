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
        onClick={() => setOpen(!isOpen)}
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
