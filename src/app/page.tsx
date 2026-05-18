import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Awards from "./components/Awards";
import ImpactMetrics from "./components/ImpactMetrics";
import Process from "./components/Process";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import NowSection from "./components/NowSection";
import Writing from "./components/Writing";
import CTA from "./components/CTA";
import { getProjects } from "./utils/api/projects";
import { getAbout } from "./utils/api/about";
import { getExperiences } from "./utils/api/experience";
import { getAwards } from "./utils/api/award";
import { getSkills } from "./utils/api/skill";
import { getCTAs } from "./utils/api/ctas";
import { getImpactMetrics } from "./utils/api/impactMetrics";
import { getNow } from "./utils/api/now";
import { getProcesses } from "./utils/api/processes";
import { getTestimonials } from "./utils/api/testimonials";
import { getWritings } from "./utils/api/writings";
import { getCaseStudies } from "./utils/api/caseStudies";

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
  const impactMetrics = await getImpactMetrics();
  const processData = await getProcesses();
  const caseStudies = await getCaseStudies();
  const testimonials = await getTestimonials();
  const nowData = await getNow();
  const writing = await getWritings();
  const ctaData = await getCTAs();

  return (
    <main className="">
      <About data={about} />
      <ImpactMetrics data={impactMetrics} />
      <Process data={processData} />
      <Experience data={experiences} />
      <Skills data={skills} />
      <CaseStudies data={caseStudies} />
      <Projects projects={projects} />
      <Testimonials data={testimonials} />
      <NowSection data={nowData} />
      <Writing data={writing} />
      <Awards data={awards} />
      <CTA data={ctaData} />
      <Contact />
    </main>
  );
}
