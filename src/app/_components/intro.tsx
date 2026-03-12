import { getLatestSettings } from "@/lib/getSettings";

export function Intro() {
  const { userName, userIntro } = getLatestSettings();

  return (
    <section className="mb-12 md:mb-16">
      <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-mm-dark)] mb-2">
        {userName}
      </h1>
      <p className="text-[var(--color-mm-muted)] text-base md:text-lg leading-relaxed max-w-3xl">
        {userIntro}
      </p>
    </section>
  );
}
