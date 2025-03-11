"use client";
import Link from "next/link";
import { links } from "../../lib/data";
import { TbCircleLetterC } from "react-icons/tb";
import ModeToggle from "./ModeToggle";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="flex justify-between items-center  md:px-2 py-2 mx-auto sticky top-0"
    >
      <TbCircleLetterC size={30} color="#1a8fe9" />
      <div className="flex items-center gap-2  ">
        <ul className="flex justify-center items-center ">
          {links.map((link) => (
            <li key={link.title}>
              <Link
                href={link.href}
                className="rounded-full hover:text-white hover:bg-[#1a8fe9] transition py-1 px-2 md:px-4 text-sm sm:text-xl  cursor-pointer font-bold "
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <ModeToggle />
      </div>
    </motion.nav>
  );
};
export default Navbar;
