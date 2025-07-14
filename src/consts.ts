import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Skip to Content - An Accessibility Blog",
  EMAIL: "daniellelee.dev@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "An introduction and details of my journey into accessibility tech.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of my learnings on accessibility.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "Visit my Site",
    HREF: "https://www.daniellelee.co.uk/",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/Danielle73"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/danielle-lee-ab8b0887/",
  }
];
