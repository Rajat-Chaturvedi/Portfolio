export function mapAbout(apiResponse: any) {
  const data = apiResponse?.data;

  if (!data) return null;

  return {
    title: data.name, // 👈 FIX
    role: data.role,
    summary: data.summary,
    paragraphs: data.paragraphs,
    resume: data.resumeUrl,
    typewriterTexts: data.typewriterTexts ?? [],
    experienceStats: data.experienceStats,
  };
}
