import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const source = new URL("../../portfolio-cms/", import.meta.url);
const read = (name) => JSON.parse(readFileSync(new URL(name, source), "utf8"));
const assets = read("cloudinary-assets.json");
const media = (name) => {
  const asset = assets.find((item) => item.public_id.startsWith(`${name}_`));
  return asset ? { url: asset.url } : null;
};
const projectAssets = {
  "Best Buy": "Screenshot_2026_05_18_at_9_24_19_PM",
  "Resume-to-JD Optimizer": "Screenshot_2026_09_10_at_4_37_13_PM",
  "The Kanaa": "thekanaa", "MECL (ME Stores)": "mecl",
  PisaStone: "pisastone", "CMS PisaStone": "cms-pisa",
  Wasalt: "wasalt", "Wasalt Auction": "auction",
  "Wasalt Auction Console": "auction-console", "UMS BackOffice": "ums",
  Vougish: "vougish", Yexpedite: "yexpedite", HRMS: "hrms",
};
const skillAssets = {
  JSX: "react", "React JS": "react", "Material UI": "material-ui",
  "Magento PWA": "magento-pwa", "SQL Server": "sql",
  "Amazon Pay Front": "amazonpay", "Checkout.com": "checkout",
  "Google Tag Manager": "gtm", "Google Analytics": "ga",
};
const skillMedia = (name) => media(skillAssets[name] ?? name.toLowerCase().replace(/[^a-z0-9]/g, ""));
const companyAssets = {
  "BBY Services India LLP (Best Buy India)": "bby_india_logo",
  "Deepdive (Techies Infotech)": "techies-logo", Infosys: "infosys-logo",
  "Quara Holdings": "quara-logo", Webkul: "webkul-logo", Cognizant: "cognizant-logo",
};
const records = (name) => read(name)
  .sort((first, second) => (first.order ?? 0) - (second.order ?? 0))
  .map((item, index) => ({ ...item, id: item.id ?? index + 1 }));
const generatedSnapshot = {
  "/api/writings": { data: read("data reference/writing.json").map((item) => ({
    ...item, content: item.summary ?? item.content,
  })) },
  "/api/case-studies": { data: read("data reference/caseStudies.json").map((item) => ({
    ...item, stack: Array.isArray(item.stack) ? item.stack.join(", ") : item.stack,
  })) },
  "/api/testimonials": { data: read("data reference/testimonials.json").map(({ name, quote, ...item }) => ({
    ...item, author: name ?? item.author, content: quote ?? item.content,
  })) },
  "/api/nows": { data: [{ ...read("data reference/now.json"), id: 1 }] },
  "/api/about": { data: { ...read("about.json"), id: 1 } },
  "/api/awards": { data: records("awards.json") },
  "/api/experiences": { data: records("experiences.json").map((item) => ({
    ...item, logo: item.logo ?? media(companyAssets[item.company]),
    bullets: item.bullets.map((bullet, index) => ({ ...bullet, id: bullet.id ?? index + 1 })),
  })) },
  "/api/projects": { data: records("projects.json").map((item) => ({
    ...item, image: item.image ?? media(projectAssets[item.name]),
  })) },
  "/api/skills": { data: records("skills.json").map((item) => ({
    ...item, types: item.types.map((type, index) => ({
      ...type, id: type.id ?? index + 1, icon: type.icon ?? skillMedia(type.subType),
    })),
  })) },
};
for (const endpoint of ["ctas", "impact-metrics", "processes"]) {
  generatedSnapshot[`/api/${endpoint}`] = { data: [] };
}
const canonical = new URL("data/portfolio-snapshot.json", source);
const snapshot = existsSync(canonical) ? read("data/portfolio-snapshot.json") : generatedSnapshot;
const destination = new URL("../src/app/data/cms-snapshot.json", import.meta.url);
const output = process.argv.includes("--media-only") || process.argv.includes("--sections-only") || process.argv.includes("--writing-only")
  ? JSON.parse(readFileSync(destination, "utf8"))
  : snapshot;
if (process.argv.includes("--writing-only")) {
  output["/api/writings"] = generatedSnapshot["/api/writings"];
}
if (process.argv.includes("--sections-only")) {
  for (const endpoint of ["/api/case-studies", "/api/testimonials", "/api/nows", "/api/writings"]) {
    output[endpoint] = generatedSnapshot[endpoint];
  }
}
if (process.argv.includes("--media-only")) {
  for (const project of output["/api/projects"].data) {
    project.image = media(projectAssets[project.name]) ?? project.image;
  }
  for (const skill of output["/api/skills"].data) {
    for (const type of skill.types) {
      type.icon = skillMedia(type.subType) ?? type.icon;
    }
  }
}
writeFileSync(destination, `${JSON.stringify(output, null, 2)}\n`);
const credentialSource = new URL("credentials.json", source);
if (existsSync(credentialSource)) {
  writeFileSync(new URL("../src/app/data/credentials.json", import.meta.url), `${JSON.stringify(read("credentials.json"), null, 2)}\n`);
}
console.log(`Updated ${fileURLToPath(destination)} from local CMS exports.`);