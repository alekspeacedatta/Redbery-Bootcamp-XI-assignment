import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { MaxWidth } from "@/shared/ui";

type SocialItem = {
  icon: IconDefinition;
  link: string;
  label: string;
};

type NavigationItem = {
  text: string;
};

type NavigationSection = {
  topic: string;
  items: NavigationItem[];
};

type ContactItem = {
  icon: IconDefinition;
  text: string;
};

const socialIcons: SocialItem[] = [
  {
    icon: faFacebook,
    link: "https://facebook.com",
    label: "facebook",
  },
  { icon: faXTwitter, link: "https://x.com", label: "X" },
  {
    icon: faInstagram,
    link: "https://instagram.com",
    label: "instagram",
  },
  {
    icon: faLinkedin,
    link: "https://linkedin.com",
    label: "Linkedin",
  },
  { icon: faYoutube, link: "https://youtube.com", label: "Youtube" },
];

// Navigation Sections
const navigationSections: NavigationSection[] = [
  {
    topic: "Explore",
    items: [{ text: "Enrolled Courses" }, { text: "Browse Courses" }],
  },
  { topic: "Account", items: [{ text: "My Profile" }] },
];

//  Contact Items
const contactItems: ContactItem[] = [
  { text: "contact@company.com", icon: faEnvelope },
  { text: "(+995) 555 111 222", icon: faPhone },
  { text: "Aghmashenebeli St. 115", icon: faLocationDot },
];

export const Footer = () => {
  return (
    /* Outer footer container with Tailwind v4 border-t syntax and light background */
    <footer className="border-t border-t-[#D1D1D1] bg-[#F5F5F5]">
      <MaxWidth className="flex flex-col gap-18.5 pt-20 pb-5">
        {/* TOP SECTION: Holds Brand/Socials (Left) and Navigation/Contact (Right) */}
        <div className="flex justify-between">
          {/* BRAND COLUMN */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                {/* Brand Logo Icon */}
                <div className="flex h-11.25 w-11.25 items-center justify-center rounded-[14px] bg-[#4F46E5]">
                  <FontAwesomeIcon
                    icon={faRocket}
                    className="text-2xl text-white"
                  />
                </div>
                {/* Brand Name */}
                <h2 className="text-2xl leading-none font-medium text-[#130E67]">
                  Bootcamp
                </h2>
              </div>
              {/* Tagline text */}
              <p className="text-sm leading-3.75 font-medium text-[#130E67]">
                Your learning journey starts here!
                <br />
                Browse courses to get started.
              </p>
            </div>
            {/* Render Social Media Icons dynamically */}
            <div className="flex items-center gap-5.5">
              {socialIcons.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="hover:scale-110 transition-transform"
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-[#736BEA]"
                  />
                </a>
              ))}
            </div>
          </div>
          {/* LINK GROUPS: Navigation & Contact Information */}
          <div className="flex gap-30">
            {/* Map over navigation sections (Explore, Account) */}
            {navigationSections.map((section) => (
              <div key={section.topic} className="flex flex-col gap-4">
                <h4 className="text-xl leading-6 font-semibold text-[#130E67]">
                  {section.topic}
                </h4>
                <ul className="flex flex-col gap-2">
                  {section.items.map((item) => (
                    <li
                      key={item.text}
                      className="
                        cursor-pointer text-lg leading-none text-[#666666]
                       hover:text-[#4F46E5] transition-colors"
                    >
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Static Contact Section */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xl leading-6 font-semibold text-[#130E67]">
                Contact
              </h4>

              <ul className="flex flex-col gap-2">
                {contactItems.map((item) => (
                  <li
                    key={item.text}
                    className="flex cursor-pointer gap-1.5 text-lg leading-none text-[#666666] hover:text-[#4F46E5] transition-colors"
                  >
                    <FontAwesomeIcon icon={item.icon} />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright and Policies */}
        <div className="flex items-center justify-between border-t border-[#E5E5E5] pt-5">
          <p className="text-lg leading-none text-[#666666]">
            Copyright © 2026 Redberry International
          </p>

          <p className="text-lg leading-none text-[#666666]">
            All Rights Reserved |{" "}
            <span className="cursor-pointer text-[#4F46E5] hover:underline">
              Terms and Conditions
            </span>{" "}
            |{" "}
            <span className="cursor-pointer text-[#4F46E5] hover:underline">
              Privacy Policy
            </span>
          </p>
        </div>
      </MaxWidth>
    </footer>
  );
};
