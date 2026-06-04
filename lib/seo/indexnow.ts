import { getAbsoluteUrls } from "@/lib/seo/routes";
import { siteConfig } from "@/lib/site";

export const INDEXNOW_KEY = "tunnelreport-indexnow-2026";
export const INDEXNOW_KEY_LOCATION = `${siteConfig.url}/${INDEXNOW_KEY}.txt`;
export const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

export function buildIndexNowPayload(urlList = getAbsoluteUrls()) {
  return {
    host: new URL(siteConfig.url).host,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList,
  };
}

export async function submitIndexNow(urlList = getAbsoluteUrls()) {
  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(buildIndexNowPayload(urlList)),
  });

  if (!res.ok && res.status !== 202) {
    throw new Error(`IndexNow failed with ${res.status}: ${await res.text()}`);
  }

  return { status: res.status, submitted: urlList.length };
}
