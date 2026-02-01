
import { getAbout } from "@/app/utils/api/about";
import Header from ".";

export default async function HeaderServer() {
  const about = await getAbout();

  if (!about) return null;

  return (
    <Header
      links={{
        github: about.gitHubUrl,
        linkedin: about.linkedInUrl,
        resume: about.resumeUrl,
      }}
    />
  );
}
