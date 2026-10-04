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
import { getImpactMetrics } from "./utils/api/impactMetrics";
import { getCTAs } from "./utils/api/ctas";
import { getNow } from "./utils/api/now";
import { getProcesses } from "./utils/api/processes";
import { getTestimonials } from "./utils/api/testimonials";
import { getWritings } from "./utils/api/writings";
import { getCaseStudies } from "./utils/api/caseStudies";
import Maintenance from "./components/Maintenance";
import Certifications from "./components/Certifications";

export const dynamic = "force-dynamic";

export default async function Home() {
  let content;
  try {
    content = await Promise.all([
      getProjects(),
      getAbout(),
      getExperiences(),
      getAwards(),
      getSkills(),
      getImpactMetrics(),
      getProcesses(),
      getCaseStudies(),
      getTestimonials(),
      getNow(),
      getWritings(),
      getCTAs(),
    ]);
  } catch (error) {
    console.error("Portfolio content unavailable:", error);
    return <Maintenance />;
  }

  const [
    projects,
    about,
    experiences,
    awards,
    skills,
    impactMetrics,
    processData,
    caseStudies,
    testimonials,
    nowData,
    writing,
    ctaData,
  ] = content;
  if (!about) return <Maintenance />;

  return (
    <main className="">
      <About data={about} />
      <ImpactMetrics data={impactMetrics} />
      <Experience data={experiences} />
      <Projects projects={projects} />
      <CaseStudies data={caseStudies} />
      <Skills data={skills} />
      <Testimonials data={testimonials} />
      <Writing data={writing} />
      <Certifications />
      <Awards data={awards} />
      <Process data={processData} />
      <NowSection data={nowData} />
      <CTA data={ctaData} />
      <Contact />
    </main>
  );
}
