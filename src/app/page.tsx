import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Awards from "./components/Awards";

export default function Home() {
  return (
    <main className="">
      <Header />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Awards />
      <Contact/>
    </main>
  );
}
