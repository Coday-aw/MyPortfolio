import React from "react";
import Link from "next/link";
import { links } from "../../lib/data";
import { useActiveLink } from "./ActiveLinkContext";

const Links = () => {
  const { activeLink, setActiveLink } = useActiveLink();
  return (
    <ul className="flex justify-center items-center ">
      {links.map((link) => (
        <li key={link.title}>
          <Link
            href={link.href}
            className={`rounded-full hover:text-white hover:bg-[#1a8fe9] transition py-1 px-2 md:px-4 text-sm sm:text-xl  cursor-pointer font-bold ${
              activeLink === link.href
                ? "bg-[#1a8fe9] text-white"
                : "text-black dark:text-white"
            } `}
            onClick={() => setActiveLink(link.href)}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default Links;
