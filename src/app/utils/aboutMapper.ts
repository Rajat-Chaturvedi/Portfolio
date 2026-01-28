// types/about.ts
export interface About {
  id: number;
  name: string;
  role: string;
  summary: string;
  paragraphs: string;
  resumeUrl: string;
  gitHubUrl: string;
  linkedInUrl: string;
  typewriterTexts: string[];
  experienceStats: string;
}

export function mapAbout(apiResponse: any): About | null {
  const data = apiResponse?.data;

  if (!data) return null;

  return {
    id: data.id,
    name: data.name, // ✅ NOT title
    role: data.role,
    summary: data.summary,
    paragraphs: data.paragraphs,
    resumeUrl: data.resumeUrl, // ✅ NOT resume
    gitHubUrl: data.gitHubUrl, // ✅ added
    linkedInUrl: data.linkedInUrl, // ✅ added
    typewriterTexts: data.typewriterTexts ?? [],
    experienceStats: data.experienceStats,
  };
}
