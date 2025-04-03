import { getLatestSettings } from "@/lib/getSettings";
import { ContactCard } from "./contact-card";

export function Intro() {
  const { userName, userIntro } = getLatestSettings();

  return (
    <section className="relative flex flex-col md:flex-row items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="absolute top-0 right-0">
        <ContactCard />
      </div>
      <div className="flex flex-col md:mr-8">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight">
          Portfolio
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-8 md:mb-12">
          {userName}
        </h2>
      </div>
      <div className="relative w-full md:w-auto">
        <h4 className="text-center md:text-left text-lg mt-8 md:mt-0 md:pl-8">
          {userIntro}
        </h4>
      </div>
    </section>
  );
}
