"use client";

import { TbCircleLetterC } from "react-icons/tb";
import ModeToggle from "./ModeToggle";
import { motion } from "framer-motion";
import { ActiveLinkProvider, useActiveLink } from "./ActiveLinkContext";
import Links from "./Links";
import ActiveSectionObserver from "./ActiveSectionObserver";

const Navbar = () => {
  return (
    <ActiveLinkProvider>
      <ActiveSectionObserver>
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-between items-center  md:px-2 py-2 mx-auto sticky top-0"
        >
          <TbCircleLetterC size={30} color="#1a8fe9" />
          <div className="flex items-center gap-2  ">
            <Links />
            <ModeToggle />
          </div>
        </motion.nav>
      </ActiveSectionObserver>
    </ActiveLinkProvider>
  );
};
export default Navbar;
