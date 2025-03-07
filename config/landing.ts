import { FeatureLdg, InfoLdg, StudyMaterial } from "types";

export const infos: InfoLdg[] = [
  {
    title: "What we Offer",
    description:
      "Our platform is designed to help students of Manipal University Jaipur to prepare for their exams, connect with their peers and confess their secrets.",
    image: "/_static/blog/blog-post-1.jpg",
    list: [
      {
        title: "Past Year Papers",
        description: "Access to past year papers of Manipal University Jaipur.",
        icon: "laptop",
      },
      {
        title: "Unimates",
        description: "Connect with people from your college. from around the country.",
        icon: "settings",
      },
      {
        title: "MUJ Confessions",
        description:
          "Confess my child",
        icon: "user",
      },
    ],
  },
];

export const features: FeatureLdg[] = [
  {
    id: 1,
    title: "First Year Papers",
    description:
      "Papers for the first year students of Manipal University Jaipur for both physics and chemistry cycles.",
    link: "/pyq/first-year",
    icon: "college",
  },
  {
    id: 2,
    title: "Second Year Papers",
    description:
      "Papers for the second year students of Manipal University Jaipur for various courses.",
    link: "/pyq/second-year",
    icon: "college",
  },
  {
    id: 3,
    title: "Third Year Papers",
    description:
      "Papers for the third year students of Manipal University Jaipur for various courses.",
    link: "/pyq/third-year",
    icon: "college",
  },
];

export const studymaterial: StudyMaterial[] = [
  {
    id: 1,
    title: "Physics Cycle",
    description:
      "Get access to the best study material for the Physics Cycle to prepare for your exams. Sourced from the community.",
    link: "https://drive.google.com/drive/folders/1ps5av4ULgJvsRMZotn2zT0hP_tM2nEpc?usp=sharing",
    icon: "sun",
  },
  {
    id: 2,
    title: "Chemistry Cycle",
    description:
      "Get access to the best study material for the Chemistry Cycle to prepare for your exams. Sourced from the community.",
    link: "https://drive.google.com/drive/folders/1PKYD8BtLx9eVL6KPdy3LxnQN8e0IWgRT?usp=sharing",
    icon: "laptop",
  },
];



