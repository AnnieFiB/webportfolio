import React from "react";
import { getLatestSettings } from "@/lib/getSettings";
import {
  FacebookIcon,
  GitHubIcon,
  LinkedInIcon,
  BlueSkyIcon,
  TwitterIcon,
  EmailIcon,
} from "./icons";

export function ContactCard() {
  const { facebook, github, linkedin, bluesky, twitter, email, phone } =
    getLatestSettings();

  const contacts = [
    { key: "facebook", url: facebook, Icon: FacebookIcon },
    { key: "twitter", url: twitter, Icon: TwitterIcon },
    { key: "linkedin", url: linkedin, Icon: LinkedInIcon },
    { key: "github", url: github, Icon: GitHubIcon },
    { key: "bluesky", url: bluesky, Icon: BlueSkyIcon },
    {
      key: "email",
      url: email,
      Icon: EmailIcon,
    }, // Placeholder for email icon
    {
      key: "phone",
      url: phone,
      Icon: () => <span className="text-gray-500">📞</span>,
    }, // Placeholder for phone icon
  ];

  return (
    <div className="flex space-x-4">
      {contacts
        .filter((contact) => contact.url)
        .map(({ key, url, Icon }) => (
          <div key={key} className="w-6 h-6">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Icon className="w-full h-full" />
            </a>
          </div>
        ))}
    </div>
  );
}
