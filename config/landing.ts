import { FeatureLdg, InfoLdg, TestimonialType } from "types";

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
    title: "First Year Papers",
    description:
      "Papers for the first year students of Manipal University Jaipur for both physics and chemistry cycles.",
    link: "/",
    icon: "nextjs",
  },
  {
    title: "Second Year Papers",
    description:
      "Papers for the second year students of Manipal University Jaipur for various courses.",
    link: "/",
    icon: "google",
  },
  {
    title: "Third Year Papers",
    description:
      "Papers for the third year students of Manipal University Jaipur for various courses.",
    link: "/",
    icon: "gitHub",
  },
];

export const testimonials: TestimonialType[] = [
    {
      name: "Vansh Gupta",
      job: "First Year Student",
      image: "https://randomuser.me/api/portraits/men/31.jpg",
      review:
        "MUJCentral helped me prepare for my exams with the latest past year papers. The Unite platform on this website also helped me find friends from my city. It's an incredible resource for students!",
    },
    {
      name: "Ananya Sharma",
      job: "Second Year Student CSE",
      image: "https://randomuser.me/api/portraits/women/21.jpg",
      review:
        "Thanks to MUJCentral, I could easily access past year papers and manage my academic schedule better. The Unite platform is such a great way to connect with fellow students!",
    },
    {
      name: "Mohit Verma",
      job: "First Year Student",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      review:
        "MUJCentral has been a game-changer for me. I got all the resources I needed to ace my exams and even found a friend from my hometown through the Unite platform. Highly recommended!",
    },
    {
      name: "Shaswat Tiwari",
      job: "Second Year IT",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      review:
        "The detailed collection of resources on MUJCentral made preparing for my final year a breeze. The Unite platform also helped me connect with students across different streams.",
    },
    {
      name: "Ishita Desai",
      job: "Third Year CCE",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      review:
        "MUJCentral is an invaluable platform for students. From accessing study materials to connecting with friends, it has everything a student could ask for.",
    },
    {
      name: "Rohan Patel",
      job: "First Year Student",
      image: "https://randomuser.me/api/portraits/men/51.jpg",
      review:
        "I was worried about preparing for my exams, but MUJCentral provided me with all the past year papers I needed. Plus, the Unite platform helped me meet amazing people from my city.",
    },
    {
      name: "Priya Nair",
      job: "Second Year AI & ML",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      review:
        "MUJCentral is a must-have for every student. The academic resources are top-notch, and the Unite platform is perfect for making connections across campus and beyond.",
    },
];
