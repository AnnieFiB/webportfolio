import React from "react";
import {
  FacebookIcon,
  GitHubIcon,
  LinkedInIcon,
  BlueSkyIcon,
  TwitterIcon,
  EmailIcon,
} from "./icons";

const LABELS: Record<string, string> = {
  facebook: "Facebook",
  twitter: "X (Twitter)",
  linkedin: "LinkedIn",
  github: "GitHub",
  bluesky: "BlueSky",
  email: "Email",
  phone: "Phone",
};

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  bluesky: BlueSkyIcon,
  email: EmailIcon,
  phone: () => <span className="text-gray-500">📞</span>,
};

export type ContactItem = { key: string; url: string };

type Props = Readonly<{
  contacts: ContactItem[];
  variant?: "inline" | "dropdown";
}>;

export function ContactCard({ contacts, variant = "inline" }: Props) {
  const filtered = contacts.filter((contact) => contact.url);
  if (filtered.length === 0) return null;

  if (variant === "dropdown") {
    return (
      <div className="flex flex-col">
        {filtered.map(({ key, url }) => {
          const Icon = ICONS[key];
          return (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-sm text-[var(--color-mm-dark)] hover:bg-[var(--color-accent-1)] hover:text-[var(--color-mm-link)] transition-colors"
            >
              {Icon && <Icon className="w-4 h-4 shrink-0" />}
              {LABELS[key]}
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-3">
      {filtered.map(({ key, url }) => {
        const Icon = ICONS[key];
        return (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-mm-muted)] hover:text-[var(--color-mm-link)] transition-colors w-5 h-5"
          >
            {Icon && <Icon className="w-full h-full" />}
          </a>
        );
      })}
    </div>
  );
}
