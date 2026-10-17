import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HOST = "tunnelreport.com";
const ENDPOINT = "https://api.indexnow.org/indexnow";
const KEY = "762d214b3bde92d04de73a8c7efba27c";

const keyFile = join(dirname(fileURLToPath(import.meta.url)), "..", "public", `${KEY}.txt`);
const key = readFileSync(keyFile, "utf8").trim();
if (key !== KEY) {
  throw new Error(`IndexNow key file ${keyFile} does not contain the expected key`);
}

const urlList = process.argv.slice(2).filter((arg) => arg !== "--");
if (urlList.length === 0) {
  console.error("Usage: node scripts/indexnow.mjs <url> [url...]");
  process.exit(1);
}

for (const url of urlList) {
  const parsed = new URL(url);
  if (parsed.host !== HOST) {
    throw new Error(`Refusing URL outside ${HOST}: ${url}`);
  }
}

const response = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key,
    keyLocation: `https://${HOST}/${key}.txt`,
    urlList,
  }),
});

const body = await response.text();
if (!response.ok && response.status !== 202) {
  console.error(body);
  throw new Error(`IndexNow failed with ${response.status}`);
}

console.log(`IndexNow ${response.status}; submitted ${urlList.length} URL(s) for ${HOST}.`);
if (body) console.log(body);
