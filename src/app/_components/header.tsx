import Link from "next/link";
import { ContactCard } from "./contact-card";

const Header = () => {
  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <ContactCard />
        <div className="min-h-2" />
        <Link href="/" className="hover:underline">
          Portfolio
        </Link>
        .
      </h2>
      <div className="right-0 top-0 absolute p-5"></div>
    </>
  );
};

export default Header;
