import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Certifications from "../components/Certifications";
import { SITE_CONTENT, UI_CONTENT } from "../constants";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `${UI_CONTENT.credentials.title} | ${SITE_CONTENT.name}`,
};

export default function CertificationsPage() {
  return (
    <main>
      <div className={styles.breadcrumb}><Link href="/#certifications"><ArrowLeft size={18} />{UI_CONTENT.credentials.back}</Link></div>
      <Certifications standalone />
    </main>
  );
}