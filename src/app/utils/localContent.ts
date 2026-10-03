import snapshot from "../data/cms-snapshot.json";

export function getLocalContent(endpoint: string) {
  const path = endpoint.split("?")[0];
  const content = snapshot[path as keyof typeof snapshot];
  if (!content) throw new Error(`No local content for ${path}`);
  return content;
}