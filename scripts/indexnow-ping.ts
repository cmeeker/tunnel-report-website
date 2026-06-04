import { submitIndexNow } from "../lib/seo/indexnow";
import { getAbsoluteUrls } from "../lib/seo/routes";

async function main() {
  const urls = getAbsoluteUrls();
  console.log(`Submitting ${urls.length} URLs to IndexNow...`);
  const result = await submitIndexNow(urls);
  console.log(`IndexNow response ${result.status}; submitted ${result.submitted} URLs.`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
