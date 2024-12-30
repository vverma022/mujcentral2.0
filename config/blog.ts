export const BLOG_CATEGORIES: {
  title: string;
  slug: "news" | "education";
  description: string;
}[] = [
  {
    title: "News",
    slug: "news",
    description: "Updates and announcements from Next SaaS Starter.",
  },
  {
    title: "Education",
    slug: "education",
    description: "Educational content about SaaS management.",
  },
];

export const FirstYear_CATEGORIES: {
  title: string;
  slug: "physics" | "chemistry";
  description: string;
}[] = [
  {
    title: "Physics Cycle",
    slug: "physics",
    description: "Access to the latest physics cycle papers",
  },
  {
    title: "Chemistry Cycle",
    slug: "chemistry",
    description: "Access to the latest chemistry cycle papers",
  },
];

export const BLOG_AUTHORS = {
  mickasmt: {
    name: "mickasmt",
    image: "/_static/avatars/mickasmt.png",
    twitter: "miickasmt",
  },
  shadcn: {
    name: "shadcn",
    image: "/_static/avatars/shadcn.jpeg",
    twitter: "shadcn",
  },
};
