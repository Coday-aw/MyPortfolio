import StayBnbImage from "../public/StayBnb.png";
import movieTrackerImg from "../public/MovieTracker.png";
import SnipSaverImg from "../public/SnipSaver.png";
import ElectroImg from "../public/electro.png";

export const links = [
  {
    title: "Home",
    href: "#Home",
  },
  {
    title: "About",
    href: "#About",
  },
  {
    title: "Projects",
    href: "#Projects",
  },
  {
    title: "Skills",
    href: "#Skills",
  },
  {
    title: "Conatct",
    href: "#Contact",
  },
] as const;

export const projectsData = [
  {
    title: "StayBnb",
    description:
      "A clone of the popular website Airbnb. It has features like authentication, booking and more.",
    tags: ["Typescript", "Tailwind", "Next.js", "Firebase", "Clerk"],
    imageUrl: StayBnbImage,
    gitHubUrl: "https://github.com/Coday-aw/StayBnb",
    demoUrl: "https://stay-bnb-eta.vercel.app/",
  },
  {
    title: "Electro",
    description:
      "A fullStack modern e-commerce website that allows users to buy electronic products.",
    tags: [
      "React",
      "JavaScript",
      "Tailwind",
      "MongoDB",
      "Express",
      "Node.js",
      "Redux",
    ],
    imageUrl: ElectroImg,
    gitHubUrl: "https://github.com/Coday-aw/Electro/tree/main",
    demoUrl: "",
  },
  {
    title: "Movie Tracker",
    description:
      "A movie tracker app that helps you keep track of all the trending,upcoming and top rated movies.",
    tags: ["React", "Next.js", "Tailwind", "Framer-motion"],
    imageUrl: movieTrackerImg,
    gitHubUrl: "https://github.com/Coday-aw/MovieTracker",
    demoUrl: "https://movie-tracker-lake.vercel.app/",
  },
  {
    title: "Snip Saver",
    description:
      "Effortlessly organize your code snippets and components in one place.",
    tags: ["Nextjs", "Tailwind", "TypeScript", "Supabase", "Clerk"],
    imageUrl: SnipSaverImg,
    gitHubUrl: "https://github.com/Coday-aw/SnipSaver",
    demoUrl: "https://snip-saver.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
  "Firebase",
  "Clerk",
  "Figma",
  "Supabase",
] as const;
