import { readFileSync, writeFileSync } from "node:fs";
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
  .map((item, index) => ({ ...item, id: index + 1 }));
const snapshot = {
  "/api/about": { data: { ...read("about.json"), id: 1 } },
  "/api/awards": { data: records("awards.json") },
  "/api/experiences": { data: records("experiences.json").map((item) => ({
    ...item, logo: media(companyAssets[item.company]),
    bullets: item.bullets.map((bullet, index) => ({ ...bullet, id: index + 1 })),
  })) },
  "/api/projects": { data: records("projects.json").map((item) => ({
    ...item, image: media(projectAssets[item.name]),
  })) },
  "/api/skills": { data: records("skills.json").map((item) => ({
    ...item, types: item.types.map((type, index) => ({
      ...type, id: index + 1, icon: skillMedia(type.subType),
    })),
  })) },
};
for (const endpoint of ["case-studies", "ctas", "impact-metrics", "nows", "processes", "testimonials", "writings"]) {
  snapshot[`/api/${endpoint}`] = { data: [] };
}
const destination = new URL("../src/app/data/cms-snapshot.json", import.meta.url);
const output = process.argv.includes("--media-only")
  ? JSON.parse(readFileSync(destination, "utf8"))
  : snapshot;
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
console.log(`Updated ${fileURLToPath(destination)} from local CMS exports.`);