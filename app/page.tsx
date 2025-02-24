import Contact from "./components/Contact";
import About from "./components/About";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function page() {
  return (
    <div className=" flex flex-col items-center gap-32">
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
export default page;
