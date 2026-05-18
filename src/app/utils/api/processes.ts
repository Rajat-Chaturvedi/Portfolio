import { fetchStrapi } from "../strapi";
import { mapProcesses } from "../processesMapper";

export async function getProcesses() {
  const res = await fetchStrapi("/api/processes?populate=*");
  return mapProcesses(res.data);
}
