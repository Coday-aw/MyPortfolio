"use client";
import { skillsData } from "@/lib/data";
import Header from "./Header";
import { motion } from "framer-motion";

const fadeInAnimation = {
  initial: {
    y: 100,
  },
  animate: (index: number) => ({
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  return (
    <div id="Skills">
      <Header>Skills</Header>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 mt-5">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            key={index}
            className=" border p-2 rounded-full  text-center font-bold hover:scale-105 transition cursor-pointer hover:text-[#4999d6]"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
export default Skills;
