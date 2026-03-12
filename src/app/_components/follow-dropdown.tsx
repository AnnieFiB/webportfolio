"use client";

import { useState, useRef, useEffect } from "react";
import { ContactCard, type ContactItem } from "./contact-card";

type Props = Readonly<{
  contacts: ContactItem[];
}>;

export function FollowDropdown({ contacts }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Mobile: Follow button that toggles dropdown */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="lg:hidden flex items-center gap-2 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-mm-muted)] border border-[var(--color-mm-border)] rounded hover:bg-[var(--color-accent-1)] transition-colors"
      >
        Follow
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Mobile: Dropdown panel */}
      {open && (
        <div
          className="lg:hidden absolute top-full left-0 mt-1 py-2 bg-white border border-[var(--color-mm-border)] rounded shadow-md z-10 min-w-[160px]"
          onClick={() => setOpen(false)}
        >
          <ContactCard contacts={contacts} variant="dropdown" />
        </div>
      )}

      {/* Desktop: Label + inline links */}
      <div className="hidden lg:block">
        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-mm-muted)] block mb-2">
          Follow
        </span>
        <ContactCard contacts={contacts} />
      </div>
    </div>
  );
}
