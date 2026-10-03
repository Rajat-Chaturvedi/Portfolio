import records from "../data/credentials.json";

export interface Credential {
  id: string;
  category: string;
  title: string;
  issuer: string;
  description: string;
  sourceTitle?: string;
  url?: string;
  image?: string;
}

export const credentials: Credential[] = records;

export function credentialDestination(item: Credential) {
  if (item.url?.trim()) return { href: item.url, external: true };
  if (item.image?.trim()) return { href: `/certifications/${item.id}`, external: false };
  return null;
}