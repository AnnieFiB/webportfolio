import Link from "next/link";
import { getLatestSettings } from "@/lib/getSettings";
import { ContactCard } from "./contact-card";

const Header = () => {
  const settings = getLatestSettings();
  const contacts = [
    { key: "facebook", url: settings.facebook },
    { key: "twitter", url: settings.twitter },
    { key: "linkedin", url: settings.linkedin },
    { key: "github", url: settings.github },
    { key: "bluesky", url: settings.bluesky },
    { key: "email", url: settings.email },
    { key: "phone", url: settings.phone },
  ];

  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <ContactCard contacts={contacts} />
        <div className="min-h-2" />
        <Link href="/" className="hover:underline">
          Portfolio
        </Link>
        {" · "}
        <Link href="/about" className="hover:underline">
          About
        </Link>
        .
      </h2>
      <div className="right-0 top-0 absolute p-5"></div>
    </>
  );
};

export default Header;
