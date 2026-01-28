import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Awards from "./components/Awards";
import { getProjects } from "./utils/api/projects";
import { getAbout } from "./utils/api/about";
import { getExperiences } from "./utils/api/experience";
import { getAwards } from "./utils/api/award";
import { getSkills } from "./utils/api/skill";

export default async function Home() {
  const projects = await getProjects();
  const about = await getAbout();
  if (!about) {
    // You can also throw or render a fallback layout
    return null;
  }
  const experiences = await getExperiences();
  const awards = await getAwards();
  const skills = await getSkills();

  return (
    <main className="">
      <Header
        links={{
          github: about.gitHubUrl,
          linkedin: about.linkedInUrl,
          resume: about.resumeUrl,
        }}
      />
      <About data={about} />
      <Experience data={experiences} />
      <Skills data={skills} />
      <Projects projects={projects} />
      <Awards data={awards} />
      <Contact />
    </main>
  );
}
