import Link from "next/link";
import { getLatestSettings } from "@/lib/getSettings";

export function Masthead() {
  const { userName } = getLatestSettings();

  return (
    <header className="border-b border-[var(--color-mm-border)] bg-[var(--color-mm-bg)] sticky top-0 z-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <Link
            href="/"
            className="text-[var(--color-mm-primary)] font-semibold text-lg hover:text-[var(--color-mm-dark)] transition-colors"
          >
            {userName}
          </Link>
          <nav className="flex gap-6">
            <Link
              href="/"
              className="text-[var(--color-mm-primary)] hover:text-[var(--color-mm-link)] transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="text-[var(--color-mm-primary)] hover:text-[var(--color-mm-link)] transition-colors"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
