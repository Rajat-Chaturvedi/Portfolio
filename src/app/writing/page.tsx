import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Writing from "../components/Writing";
import { getWritings } from "../utils/api/writings";
import { SITE_CONTENT, UI_CONTENT } from "../constants";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `${UI_CONTENT.headings.writing} | ${SITE_CONTENT.name}`,
};

export default async function WritingPage() {
  const articles = await getWritings();
  return (
    <main>
      <div className={styles.breadcrumb}><Link href="/#writing"><ArrowLeft size={18} />{UI_CONTENT.writing.back}</Link></div>
      <Writing data={articles} standalone />
    </main>
  );
}