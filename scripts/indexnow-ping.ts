import { INDEXNOW_KEY, INDEXNOW_KEY_LOCATION, submitIndexNow } from "../lib/seo/indexnow";
import { getAbsoluteUrls } from "../lib/seo/routes";

async function main() {
  if (!/^[0-9a-f]{8,128}$/.test(INDEXNOW_KEY)) {
    throw new Error(`IndexNow key must be 8-128 hex characters: ${INDEXNOW_KEY}`);
  }
  if (INDEXNOW_KEY_LOCATION !== `https://tunnelreport.com/${INDEXNOW_KEY}.txt`) {
    throw new Error(`IndexNow keyLocation must be the root key file: ${INDEXNOW_KEY_LOCATION}`);
  }

  const urls = getAbsoluteUrls();
  console.log(`Submitting ${urls.length} URLs to IndexNow with key ${INDEXNOW_KEY} at ${INDEXNOW_KEY_LOCATION}...`);
  const result = await submitIndexNow(urls);
  console.log(`IndexNow response ${result.status}; submitted ${result.submitted} URLs.`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
