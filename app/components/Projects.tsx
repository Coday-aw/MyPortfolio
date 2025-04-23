import { projectsData } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import Header from "./Header";

const Projects = () => {
  return (
    <div id="Projects">
      <Header>Projects</Header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {projectsData.map((project) => (
          <ProjectCard {...project} key={project.title} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
