import Fuse from "fuse.js";
import snapshot from "../data/cms-snapshot.json";
import { credentials, credentialDestination } from "./credentials";
import { UI_CONTENT } from "../constants";
import { projectSlug } from "./projectSlug";

export interface SearchEntry {
  id: string;
  title: string;
  category: string;
  text: string;
  href: string;
}

const categories = UI_CONTENT.search.categories;
const entries: SearchEntry[] = UI_CONTENT.header.nav.map((item) => ({
  id: item.href,
  title: item.label,
  category: categories.section,
  text: item.label,
  href: `/${item.href}`,
}));
const add = (
  id: string,
  title: string,
  category: string,
  text: string,
  href: string,
) => entries.push({ id, title, category, text, href });
const about = snapshot["/api/about"].data;
add(
  "profile",
  about.name,
  categories.about,
  `${about.role} ${about.summary} ${about.paragraphs} ${about.experienceStats}`,
  "/#about",
);
for (const item of snapshot["/api/experiences"].data) {
  add(
    `experience-${item.id}`,
    `${item.title} - ${item.company}`,
    categories.experience,
    `${item.startDate} ${item.endDate} ${item.bullets.map((bullet) => bullet.point).join(" ")}`,
    `/#experience-${item.id}`,
  );
  item.bullets.forEach((bullet, index) =>
    add(
      `bullet-${item.id}-${index}`,
      bullet.point,
      categories.experience,
      `${item.company} ${item.title}`,
      `/#experience-${item.id}`,
    ),
  );
}
for (const item of snapshot["/api/projects"].data)
  add(
    `project-${item.id}`,
    item.name,
    categories.project,
    `${item.description} ${item.techStack.join(" ")}`,
    `/projects/${projectSlug(item.name)}`,
  );
for (const item of snapshot["/api/skills"].data)
  add(
    `skill-${item.id}`,
    item.name,
    categories.skills,
    item.types.map((type) => type.subType).join(" "),
    "/#skills",
  );
for (const item of credentials)
  add(
    `credential-${item.id}`,
    item.title,
    categories.credential,
    `${item.issuer} ${item.description}`,
    credentialDestination(item)?.href ?? `/#credential-${item.id}`,
  );
for (const item of snapshot["/api/writings"].data)
  add(
    `writing-${item.id}`,
    item.title,
    categories.article,
    item.content,
    item.url,
  );
for (const item of snapshot["/api/testimonials"].data)
  add(
    `testimonial-${item.id}`,
    item.author,
    categories.testimonial,
    `${item.role} ${item.company} ${item.content}`,
    `/#testimonial-${item.id}`,
  );
for (const item of snapshot["/api/case-studies"].data)
  add(
    `case-${item.id}`,
    item.title,
    categories.caseStudy,
    `${item.problem} ${item.solution} ${item.outcome} ${item.stack}`,
    `/#case-study-${item.id}`,
  );
for (const item of snapshot["/api/awards"].data) {
  const credential = credentials.find(credential => credential.sourceTitle === item.title);
  add(`award-${item.id}`, item.title, categories.award, item.title, credential ? `/#credential-${credential.id}` : `/#award-${item.id}`);
}
for (const item of snapshot["/api/nows"].data)
  add(
    `now-${item.id}`,
    item.title,
    categories.now,
    `${item.focus} ${item.learning} ${item.building} ${item.availability}`,
    "/#now",
  );

const options = {
  keys: [{ name: "title", weight: 3 }, { name: "text", weight: 2 }, "category"],
  ignoreLocation: true,
  includeScore: true,
  minMatchCharLength: 2,
};
const search = new Fuse(entries, { ...options, threshold: 0.32 });
const suggestions = new Fuse(entries, { ...options, threshold: 0.65 });

export function searchPortfolio(query: string) {
  const value = query.trim().slice(0, 200);
  if (value.length < 2)
    return {
      results: entries
        .filter((item) => item.category === categories.section)
        .slice(0, 6),
      suggested: false,
    };
  const results = search
    .search(value)
    .slice(0, 8)
    .map((result) => result.item);
  if (results.length) return { results, suggested: false };
  const related = suggestions
    .search(value)
    .slice(0, 5)
    .map((result) => result.item);
  return {
    results: related.length
      ? related
      : entries
          .filter((item) => item.category === categories.section)
          .slice(0, 5),
    suggested: true,
  };
}
