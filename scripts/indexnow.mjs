import { readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Canonical host is the apex domain. www.tunnelreport.com 301s to
 * tunnelreport.com (middleware and vercel.json), and siteConfig.url plus
 * sitemap <loc> values use https://tunnelreport.com.
 */
const HOST = "tunnelreport.com";
const ORIGIN = `https://${HOST}`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const SITEMAP_URL = `${ORIGIN}/sitemap.xml`;
const KEY = "762d214b3bde92d04de73a8c7efba27c";
const MAX_URLS_PER_REQUEST = 10000;

const keyFile = join(dirname(fileURLToPath(import.meta.url)), "..", "public", `${KEY}.txt`);

export function loadKey() {
  const key = readFileSync(keyFile, "utf8");
  if (key !== KEY || !/^[0-9a-f]{32}$/.test(key)) {
    throw new Error(`IndexNow key file ${keyFile} must contain only the 32-character hex key`);
  }
  return key;
}

export function toCanonicalUrl(input) {
  const value = input.trim();
  let url;
  if (value.startsWith("/")) {
    url = new URL(value, ORIGIN);
  } else {
    try {
      url = new URL(value);
    } catch {
      throw new Error(`Expected an https://${HOST} URL or a path starting with /: ${input}`);
    }
  }
  url.hash = "";
  if (url.protocol !== "https:" || url.host !== HOST) {
    throw new Error(`Refusing URL outside https://${HOST}: ${input}`);
  }
  return url.href;
}

function decodeXml(value) {
  return value
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'")
    .replaceAll("&amp;", "&");
}

export async function urlsFromSitemap(fetchImpl = fetch, sitemapUrl = SITEMAP_URL, seen = new Set()) {
  if (seen.has(sitemapUrl)) return [];
  seen.add(sitemapUrl);

  const response = await fetchImpl(sitemapUrl, {
    headers: { Accept: "application/xml, text/xml" },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch sitemap ${sitemapUrl}: ${response.status}`);
  }

  const xml = await response.text();
  const locs = [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map((match) =>
    decodeXml(match[1].trim()),
  );

  if (/<sitemapindex[\s>]/.test(xml)) {
    const urls = [];
    for (const loc of locs) {
      const child = new URL(loc);
      if (child.protocol !== "https:" || child.host !== HOST) {
        throw new Error(`Sitemap URL outside https://${HOST}: ${loc}`);
      }
      urls.push(...(await urlsFromSitemap(fetchImpl, child.href, seen)));
    }
    return urls;
  }

  if (locs.length === 0) {
    throw new Error(`Sitemap ${sitemapUrl} contained no URLs`);
  }

  for (const loc of locs) {
    const url = new URL(loc);
    if (url.protocol !== "https:" || url.host !== HOST) {
      throw new Error(`Sitemap URL outside https://${HOST}: ${loc}`);
    }
  }

  return locs;
}

export function buildPayload(key, urlList) {
  return {
    host: HOST,
    key,
    keyLocation: `${ORIGIN}/${key}.txt`,
    urlList,
  };
}

function usage() {
  console.error("Usage: npm run indexnow -- <path-or-url> [path-or-url...]");
  console.error("       npm run indexnow -- --all");
  process.exit(1);
}

async function submit(payload, fetchImpl) {
  const response = await fetchImpl(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });
  const body = await response.text();
  if (!response.ok && response.status !== 202) {
    if (body) console.error(body);
    throw new Error(`IndexNow failed with ${response.status}`);
  }
  console.log(`IndexNow ${response.status}; submitted ${payload.urlList.length} URL(s) for ${HOST}.`);
  if (body) console.log(body);
}

export async function submitUrlList(urlList, fetchImpl = fetch) {
  const key = loadKey();
  const unique = [...new Set(urlList)];
  if (unique.length === 0) {
    throw new Error("No URLs to submit");
  }

  for (let index = 0; index < unique.length; index += MAX_URLS_PER_REQUEST) {
    const batch = unique.slice(index, index + MAX_URLS_PER_REQUEST);
    await submit(buildPayload(key, batch), fetchImpl);
  }
}

async function main() {
  const args = process.argv.slice(2).filter((arg) => arg !== "--");
  const all = args.includes("--all");
  const positional = args.filter((arg) => arg !== "--all");

  if (all && positional.length > 0) {
    throw new Error("Pass either --all or URL paths, not both");
  }
  if (!all && positional.length === 0) usage();

  const urlList = all ? await urlsFromSitemap() : positional.map(toCanonicalUrl);
  await submitUrlList(urlList);
}

function isDirectRun() {
  const entry = process.argv[1];
  if (!entry) return false;
  return resolve(entry) === fileURLToPath(import.meta.url);
}

if (isDirectRun()) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  });
}
