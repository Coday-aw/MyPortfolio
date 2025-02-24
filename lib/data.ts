import ecommerceStoreImg from "../public/ecommercestore.png";
import StayBnbImage from "../public/StayBnb.png";
import movieTrackerImg from "../public/MovieTracker.png";
import todolistImg from "../public/todolist.png";

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
    title: "E-Commerce Store",
    description:
      " A full-stack e-commerce store for selling electronics. It has features like authentication, cart and more.",
    tags: ["React", "MongoDB", "Tailwind", "Express", "Redux", "Node"],
    imageUrl: ecommerceStoreImg,
    gitHubUrl: "https://github.com/Coday-aw/Ecommerce",
    demoUrl: "https://movie-tracker-lake.vercel.app/",
  },
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
    title: "Movie Tracker",
    description:
      "A movie tracker app that helps you keep track of all the trending,upcoming and top rated movies.",
    tags: ["React", "Next.js", "Tailwind", "Framer-motion"],
    imageUrl: movieTrackerImg,
    gitHubUrl: "https://github.com/Coday-aw/MovieTracker",
    demoUrl: "https://movie-tracker-lake.vercel.app/",
  },
  {
    title: "Todo List",
    description:
      "A simple todo list app that helps you keep track of all your tasks.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: todolistImg,
    gitHubUrl: "https://github.com/Coday-aw/To-do-List",
    demoUrl: "https://github.com/Coday-aw/To-do-List",
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
