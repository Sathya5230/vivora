import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function AccordionCategory({
  category,
  index = 0,
  defaultOpen = false,
  searchTerm = "",
}) {
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
    <div className="border-b border-plum-900/15">
      <button
        type="button"
        onClick={() => setOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="flex items-center gap-4">
          <span className="font-mono text-xs text-plum-700/40">
            {String(index + 1).padStart(2, "0")}
          </span>
          <Icon size={18} className="text-plum-700" />
          <span className="font-display text-lg font-bold text-plum-900">{category.name}</span>
        </span>
        <ChevronDown
          size={20}
          className={`text-plum-700 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="flex flex-wrap gap-2 pb-6 pl-11">
          {visibleEvents.map((eventName) => (
            <span
              key={eventName}
              className="border border-plum-900/15 px-3 py-1.5 text-xs font-medium text-plum-700"
            >
              {eventName}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
