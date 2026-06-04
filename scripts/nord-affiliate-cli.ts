/**
 * CLI for Nord / TUNE HasOffers Affiliate API.
 *
 * Usage:
 *   npm run nord-affiliate -- ping
 *   npm run nord-affiliate -- offers
 *   npm run nord-affiliate -- urls <offer_id>
 *
 * Env (in .env.local or shell):
 *   NORD_AFFILIATE_NETWORK_ID=nordvpn
 *   NORD_AFFILIATE_API_KEY=...
 */

import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

import {
  assertTuneOk,
  callNordTuneAffiliateApi,
  getNordTuneAffiliateCredentialsFromEnv,
} from "../lib/affiliate/nordTuneAffiliateApi";

const HELP = `Commands:
  ping                      Call Affiliate_Affiliate::getAccountManager
  offers                    List offers (Affiliate_Offer::findAll)
  urls <offer_id>           List creative / landing URL rows (Affiliate_OfferUrl::findAll)
  track <offer_id> [url_id] Generate your tracking link (Affiliate_Offer::generateTrackingLink)
`;

/** TUNE findAll returns rows under response.data.data keyed by id, often wrapped as { Offer: {...} } */
function tuneFindAllRows(data: unknown): Record<string, unknown>[] {
  if (!data || typeof data !== "object") return [];
  const root = data as Record<string, unknown>;
  const inner = root.data;
  if (!inner || typeof inner !== "object") return [];
  return Object.values(inner).map((cell) => {
    if (!cell || typeof cell !== "object") return {};
    const c = cell as Record<string, unknown>;
    const model =
      (c.Offer as Record<string, unknown> | undefined) ||
      (c.OfferUrl as Record<string, unknown> | undefined) ||
      c;
    return model;
  });
}

function loadDotEnvLocal() {
  const p = resolve(process.cwd(), ".env.local");
  if (!existsSync(p)) return;
  const text = readFileSync(p, "utf8");
  for (const line of text.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (process.env[key] === undefined) process.env[key] = val;
  }
}

async function main() {
  loadDotEnvLocal();
  const [, , cmd, ...rest] = process.argv;

  if (!cmd) {
    console.log(HELP);
    process.exit(1);
  }

  if (cmd === "help" || cmd === "-h") {
    console.log(HELP);
    process.exit(0);
  }

  const creds = getNordTuneAffiliateCredentialsFromEnv();

  if (cmd === "ping") {
    const env = await callNordTuneAffiliateApi<Record<string, unknown>>(
      creds,
      "Affiliate_Affiliate",
      "getAccountManager",
    );
    const data = assertTuneOk(env, "getAccountManager");
    console.log(JSON.stringify(data, null, 2));
    return;
  }

  if (cmd === "offers") {
    const env = await callNordTuneAffiliateApi(
      creds,
      "Affiliate_Offer",
      "findAll",
      { limit: 100, page: 1 },
      { fields: ["id", "name", "status"] },
    );
    const data = assertTuneOk(env, "Affiliate_Offer.findAll");
    for (const row of tuneFindAllRows(data)) {
      console.log(`${row.id}\t${row.status}\t${row.name}`);
    }
    return;
  }

  if (cmd === "urls") {
    const offerId = rest[0];
    if (!offerId) {
      console.error("Usage: npm run nord-affiliate -- urls <offer_id>");
      process.exit(1);
    }
    const env = await callNordTuneAffiliateApi(
      creds,
      "Affiliate_OfferUrl",
      "findAll",
      {
        limit: 200,
        page: 1,
        [`filters[offer_id]`]: offerId,
      },
      { fields: ["id", "name", "offer_id", "status", "preview_url"] },
    );
    const data = assertTuneOk(env, "Affiliate_OfferUrl.findAll");
    console.log(JSON.stringify(tuneFindAllRows(data), null, 2));
    return;
  }

  if (cmd === "track") {
    const offerId = rest[0];
    const urlId = rest[1];
    if (!offerId) {
      console.error("Usage: npm run nord-affiliate -- track <offer_id> [url_id]");
      process.exit(1);
    }
    const paramsPayload: Record<string, number> = {};
    if (urlId) paramsPayload.url_id = Number(urlId);
    const env = await callNordTuneAffiliateApi(
      creds,
      "Affiliate_Offer",
      "generateTrackingLink",
      {
        offer_id: Number(offerId),
        ...(Object.keys(paramsPayload).length > 0
          ? { params: JSON.stringify(paramsPayload) }
          : {}),
      },
    );
    const data = assertTuneOk(env, "Affiliate_Offer.generateTrackingLink");
    console.log(JSON.stringify(data, null, 2));
    return;
  }

  console.error(`Unknown command: ${cmd}`);
  process.exit(1);
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
