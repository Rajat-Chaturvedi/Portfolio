import { getAbout } from "@/app/utils/api/about";
import { UI_CONTENT } from "@/app/constants";
import Header from ".";

export default async function HeaderServer() {
  const about = await getAbout().catch(() => null);

  return (
    <Header
      links={{
        github: about?.gitHubUrl || UI_CONTENT.header.fallbackLinks.github,
        linkedin: about?.linkedInUrl || UI_CONTENT.header.fallbackLinks.linkedin,
        resume: about?.resumeUrl || UI_CONTENT.header.fallbackLinks.resume,
      }}
      maintenance={!about}
    />
  );
}