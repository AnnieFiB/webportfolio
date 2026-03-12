import { getLatestSettings } from "@/lib/getSettings";
import { ProfilePic } from "./profile-pic";
import { FollowDropdown } from "./follow-dropdown";
import type { ContactItem } from "./contact-card";

export function Sidebar() {
  const settings = getLatestSettings();
  const {
    userName,
    facebook,
    github,
    linkedin,
    bluesky,
    twitter,
    email,
    phone,
  } = settings;

  const contacts: ContactItem[] = [
    { key: "facebook", url: facebook },
    { key: "twitter", url: twitter },
    { key: "linkedin", url: linkedin },
    { key: "github", url: github },
    { key: "bluesky", url: bluesky },
    { key: "email", url: email },
    { key: "phone", url: phone },
  ];

  return (
    <aside className="academic-sidebar pt-8 pb-8 pr-8 shrink-0 lg:sticky lg:top-14 lg:self-start lg:-ml-4">
      <div>
        <div className="mb-4 flex justify-center lg:justify-start">
          <ProfilePic className="w-28 h-36 md:w-32 md:h-40" />
        </div>
        <h2 className="text-xl font-semibold text-[var(--color-mm-dark)] mb-4">
          {userName}
        </h2>
        <FollowDropdown contacts={contacts} />
      </div>
    </aside>
  );
}
