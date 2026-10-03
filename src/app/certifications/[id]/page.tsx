import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { credentials } from "../../utils/credentials";
import { SITE_CONTENT, UI_CONTENT } from "../../constants";
import styles from "./certificate.module.css";

type Props = { params: { id: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const credential = credentials.find(item => item.id === params.id && item.image?.trim());
  return credential ? { title: `${credential.title} | ${SITE_CONTENT.name}`, description: credential.description } : {};
}

export default function CertificatePage({ params }: Props) {
  const credential = credentials.find(item => item.id === params.id);
  if (!credential?.image?.trim()) notFound();
  const content = UI_CONTENT.credentials;

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <Link className={styles.back} href="/certifications"><ArrowLeft size={18} />{content.all}</Link>
        <h1>{credential.title}</h1>
        {credential.issuer && <p className={styles.issuer}>{credential.issuer}</p>}
        <p className={styles.description}>{credential.description}</p>
        <img className={styles.certificate} src={credential.image} alt={`${content.imageAlt} ${credential.title}`} />
      </div>
    </main>
  );
}