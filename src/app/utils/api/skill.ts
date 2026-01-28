import { mapSkills } from "../skillMapper";

export async function getSkills() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/skills?populate[types][populate]=icon&sort=order:asc`,
    { cache: "no-store" },
  );

  const json = await res.json();
  return mapSkills(json.data);
}
