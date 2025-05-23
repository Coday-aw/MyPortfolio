"use client";
import { AiOutlineDownload } from "react-icons/ai";
import { MdArrowRightAlt } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <motion.div
      id="Home"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center items-start mt-32  "
    >
      <p className="text-[#4999d6] poppins-bold">Hi, my name is</p>
      <p className="text-4xl md:text-6xl font-bold">Coday Awahmed</p>
      <p className=" max-w-[600px] text-xl md:text-2xl mt-3 mb-10">
        I´m a passionate and dedicated frontend developer with a keen eye for
        detail and a love for creating visually appealing and user-friendly web
        applications.
      </p>
      <div className="flex w-full flex-col md:flex-row gap-5 mt-3">
        <a
          href="mailto:Coday-aw@hotmail.com"
          className=" group hover:scale-105 transition flex justify-center items-center border px-4 py-2 gap-1 rounded-full text-xl  bg-[#4999d6] text-white "
        >
          contact me
          <span>
            <MdArrowRightAlt className="group-hover:translate-x-2" />
          </span>{" "}
        </a>
        <a
          href="/CodayAwahmed.pdf"
          download
          className=" group transition hover:scale-105 flex justify-center items-center border px-4 py-2 gap-1 rounded-full text-xl "
        >
          Download CV{" "}
          <span>
            <AiOutlineDownload className="group-hover:translate-y-1" />
          </span>{" "}
        </a>
        <button className="border transition rounded-full p-4 hover:scale-105 flex justify-center items-center">
          <a
            href="https://www.linkedin.com/in/coday-awahmed-58783628b/"
            target="_blank"
          >
            <FaLinkedin size={20} />
          </a>
        </button>
        <button className="border transition rounded-full p-4 hover:scale-105 flex justify-center items-center">
          <a href="https://github.com/Coday-aw" target="_blank">
            <FaGithub size={20} />
          </a>
        </button>
      </div>
    </motion.div>
  );
};
export default Intro;
