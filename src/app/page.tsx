import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import DynamicContent from "./components/Content";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="">
      <Header />
      <DynamicContent />
      <Experience />
      <Skills />
    </main>
  );
}
