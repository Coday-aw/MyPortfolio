"use client";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
  gitHubUrl,
  demoUrl,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="flex flex-col gap-5 group border rounded-lg p-5 cursor-pointer hover:shadow-2xl transition"
    >
      <div className="flex gap-5">
        <Image
          src={imageUrl}
          alt={title}
          className=" w-[200px] h-[200px]  md:w-[300px] md:h-[200px] object-contain border-r rounded-lg p-2"
        />
        <div>
          <p className="font-bold text-xl group-hover:text-[#4999d6]">
            {title}
          </p>
          <p>{description}</p>

          <div className="flex gap-5 items-center mt-10">
            <a href={gitHubUrl} target="_blank">
              <FaGithub size={25} />
            </a>
            <a href={demoUrl} target="_blank">
              <FaExternalLinkAlt size={20} />
            </a>
          </div>
        </div>
      </div>
      <ul className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <li className=" px-2 font-bold border rounded-full" key={tag}>
            {tag}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
export default ProjectCard;
