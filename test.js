const fs = require("fs");
const assert = require("assert");

const html = fs.readFileSync("index.html", "utf8");

assert.ok(html.includes("DevOps Training"));
assert.ok(html.includes('href="style.css"'));
assert.ok(html.includes('src="script.js"'));

for (const file of ["style.css", "script.js"]) {
  assert.ok(fs.existsSync(file), `${file} must exist`);
}

console.log("All website tests passed!");