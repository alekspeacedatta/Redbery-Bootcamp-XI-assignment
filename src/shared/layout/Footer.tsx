import MaxWidth from "@/shared/layout/MaxWidth";
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
    link: "https://www.facebook.com/aleqsandre.qobulashvili.3/",
    label: "facebook",
  },
  { icon: faXTwitter, link: "https://x.com/", label: "X" },
  {
    icon: faInstagram,
    link: "https://www.instagram.com/aleqsandreqobulashvili/",
    label: "instagram",
  },
  {
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/aleksandre-kobulashvili-56b6ba342/",
    label: "Linkedin",
  },
  { icon: faYoutube, link: "https://www.youtube.com/", label: "Youtube" },
];

const navigationSections: NavigationSection[] = [
  {
    topic: "Explore",
    items: [{ text: "Enrolled Courses" }, { text: "Browse Courses" }],
  },
  { topic: "Account", items: [{ text: "My Profile" }] },
];

const contactItems: ContactItem[] = [
  { text: "contact@company.com", icon: faEnvelope },
  { text: "(+995) 555 111 222", icon: faPhone },
  { text: "Aghmashenebeli St. 115", icon: faLocationDot },
];

const Footer = () => {
  return (
    <footer className=" border-t border-t-[#D1D1D1] bg-[#F5F5F5]">
      <MaxWidth className="flex flex-col gap-18.5 pt-20 pb-5">
        <div className="flex justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11.25 w-11.25 items-center justify-center rounded-[14px] bg-[#4F46E5]">
                  <FontAwesomeIcon
                    icon={faRocket}
                    className="text-2xl text-white"
                  />
                </div>
                <h2 className="text-2xl leading-none font-medium text-[#130E67]">
                  Bootcamp
                </h2>
              </div>
              <p className="text-sm leading-3.75 font-medium text-[#130E67]">
                Your learning journey starts here!
                <br />
                Browse courses to get started.
              </p>
            </div>

            <div className="flex items-center gap-5.5">
              {socialIcons.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.link}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-[#736BEA]"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="flex gap-30">
            {navigationSections.map((section) => (
              <div key={section.topic} className="flex flex-col gap-4">
                <h4 className="text-xl leading-6 font-semibold text-[#130E67]">
                  {section.topic}
                </h4>
                <ul className="flex flex-col gap-2">
                  {section.items.map((item) => (
                    <li
                      key={item.text}
                      className="flex gap-1.5 text-lg leading-none text-[#666666]"
                    >
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="flex flex-col gap-4">
              <h4 className="text-xl leading-6 font-semibold text-[#130E67]">
                Contact
              </h4>

              <ul className="flex flex-col gap-2">
                {contactItems.map((item) => (
                  <li
                    key={item.text}
                    className="flex gap-1.5 text-lg leading-none text-[#666666] cursor-pointer"
                  >
                    <FontAwesomeIcon icon={item.icon} />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-lg leading-none text-[#666666]">
            Copyright © 2026 Redberry International
          </p>

          <p className="text-lg leading-none text-[#666666]">
            All Rights Reserved |{" "}
            <span className="text-[#4F46E5]">Terms and Conditions</span> |{" "}
            <span className="text-[#4F46E5]">Privacy Policy</span>
          </p>
        </div>
      </MaxWidth>
    </footer>
  );
};

export default Footer;
