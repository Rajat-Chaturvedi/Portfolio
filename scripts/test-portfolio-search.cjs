const assert = require("node:assert/strict");
const fs = require("node:fs");
const ts = require("typescript");

require.extensions[".ts"] = (module, filename) => {
  const { outputText } = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true },
  });
  module._compile(outputText, filename);
};

const { searchPortfolio } = require("../src/app/utils/portfolioSearch.ts");
assert.equal(searchPortfolio("Best Buy").results[0].href, "/projects/best-buy");
assert.ok(
  searchPortfolio("reactt").results.some((item) => /React/.test(item.title)),
);
assert.ok(
  searchPortfolio("CADD").results.some(
    (item) => item.title === "Certificate in Product Design",
  ),
);
assert.ok(
  searchPortfolio("fetchMore").results.some((item) =>
    item.href.includes("use-of-fetchmore"),
  ),
);
assert.ok(
  searchPortfolio("Cognizant").results.some(
    (item) => item.href === "/#experience-5",
  ),
);
assert.ok(
  searchPortfolio("0 CLS").results.some((item) =>
    /0 CLS/.test(item.title + item.text),
  ),
);
assert.equal(searchPortfolio("zzzzzxqv").suggested, true);
assert.ok(searchPortfolio("zzzzzxqv").results.length > 0);
assert.equal(searchPortfolio(" ").suggested, false);
assert.ok(searchPortfolio("a".repeat(10000)).results.length <= 8);
console.log(
  "PASS: portfolio search ranking, typos, resume points, suggestions and query limits",
);
