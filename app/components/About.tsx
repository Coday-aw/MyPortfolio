"use client";
import Header from "./Header";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      id="about"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="text-center max-w-[700px] mt-10"
    >
      <Header>About Me</Header>
      <p className="text-xl">
        I got into web development because I was curious about how websites work
        and loved the idea of turning creative ideas into real projects using
        code. Over time, I’ve learned how to build responsive designs, make
        sites accessible, and improve their performance. My aim is to create
        websites that look great, work well, and are easy for everyone to use.
        This portfolio shows some of my projects, from simple landing pages to
        more complex web apps. Each one reflects my growth as a developer and my
        commitment to improving my skills. I’m excited to share my work and
        connect with others in the tech world!
      </p>
    </motion.div>
  );
};
export default About;
