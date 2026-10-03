import assert from "node:assert/strict";
import { existsSync, readFileSync, writeFileSync } from "node:fs";

const frontend = new URL("../src/app/data/", import.meta.url);
const cms = new URL("../../portfolio-cms/", import.meta.url);
const read = (url) => JSON.parse(readFileSync(url, "utf8"));
const snapshot = read(new URL("cms-snapshot.json", frontend));
const credentials = read(new URL("credentials.json", frontend));
const files = {
  "data/portfolio-snapshot.json": snapshot,
  "credentials.json": credentials,
  "about.json": snapshot["/api/about"].data,
  "awards.json": snapshot["/api/awards"].data,
  "experiences.json": snapshot["/api/experiences"].data,
  "projects.json": snapshot["/api/projects"].data,
  "skills.json": snapshot["/api/skills"].data,
  "data reference/caseStudies.json": snapshot["/api/case-studies"].data.map(item => ({
    ...item, stack: typeof item.stack === "string" ? item.stack.split(", ").filter(Boolean) : item.stack,
  })),
  "data reference/testimonials.json": snapshot["/api/testimonials"].data.map(item => ({
    ...item, name: item.author, quote: item.content,
  })),
  "data reference/now.json": snapshot["/api/nows"].data[0] ?? {},
  "data reference/writing.json": snapshot["/api/writings"].data.map(item => ({
    ...item, summary: item.content,
  })),
  "data reference/cta.json": snapshot["/api/ctas"].data,
  "data reference/impactMetrics.json": snapshot["/api/impact-metrics"].data,
  "data reference/process.json": snapshot["/api/processes"].data,
};

for (const response of Object.values(snapshot)) {
  assert.ok(response && "data" in response, "Each snapshot endpoint must include data");
  if (Array.isArray(response.data)) {
    assert.equal(new Set(response.data.map(item => item.id)).size, response.data.length, "Record IDs must be unique within an endpoint");
  }
}
assert.equal(new Set(credentials.map(item => item.id)).size, credentials.length, "Credential IDs must be unique");

if (process.argv.includes("--check")) {
  for (const [name, expected] of Object.entries(files)) {
    const url = new URL(name, cms);
    assert.ok(existsSync(url), `Missing CMS mirror: ${name}`);
    assert.deepEqual(read(url), expected, `CMS content differs: ${name}`);
  }
  console.log(`PASS: ${Object.keys(files).length} CMS JSON files match frontend content.`);
} else {
  for (const [name, value] of Object.entries(files)) {
    writeFileSync(new URL(name, cms), `${JSON.stringify(value, null, 2)}\n`);
  }
  console.log(`Mirrored frontend content to ${Object.keys(files).length} CMS JSON files. Hosted database unchanged.`);
}