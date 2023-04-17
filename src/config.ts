import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://sethdoty.dev/",
  author: "Seth Doty",
  desc: "A Blog about Fatherhood, Cybersecurity, Data Science, and whatever else crosses my mind",
  title: "Seth Doty's Blog",
  ogImage: "seth.jpeg",
  lightAndDarkMode: false,
  postPerPage: 5,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/sethmdoty",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sethdoty/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:seth@beardedbrilliance.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://social.dotyonline.net/@seth",
    linkTitle: `${SITE.title} on Mastodon`,
    active: true,
  },
];
