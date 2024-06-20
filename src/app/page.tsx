import Header from "./components/Header";
import DynamicContent from "./components/Content";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="">
      <Header />
      <DynamicContent />
      <Experience />
      <Skills />
      <Projects />
      <Contact/>
    </main>
  );
}
