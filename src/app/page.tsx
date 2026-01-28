import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Awards from "./components/Awards";
import { getProjects } from "./utils/api/projects";
import { getAbout } from "./utils/api/about";

export default async function Home() {
  const projects = await getProjects();
  const about = await getAbout();
  return (
    <main className="">
      <Header />
      <About data={about} />
      <Experience />
      <Skills />
      <Projects projects={projects} />
      <Awards />
      <Contact />
    </main>
  );
}
