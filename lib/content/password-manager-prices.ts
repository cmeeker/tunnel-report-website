import { readFileSync } from "node:fs";
import path from "node:path";

type PriceRow = {
  provider: string;
  plan: string;
  billingPeriod: string;
  priceAsShown: string;
  billedTotalAsShown: string;
  currency: string;
  rateType: string;
  status: string;
  sourceUrl: string;
  asOf: string;
  notes: string;
};

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    if (inQuotes) {
      if (character === '"') {
        if (text[index + 1] === '"') {
          cell += '"';
          index += 1;
        } else {
          inQuotes = false;
        }
      } else {
        cell += character;
      }
      continue;
    }

    if (character === '"') {
      inQuotes = true;
    } else if (character === ",") {
      row.push(cell);
      cell = "";
    } else if (character === "\n") {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else if (character !== "\r") {
      cell += character;
    }
  }

  if (cell.length > 0 || row.length > 0) {
    row.push(cell);
    rows.push(row);
  }

  return rows.filter((parsed) => parsed.some((value) => value.trim().length > 0));
}

function loadRows(): PriceRow[] {
  const csvPath = path.join(process.cwd(), "lib/content/prices-nordpass.csv");
  const table = parseCsv(readFileSync(csvPath, "utf8"));
  const [header, ...records] = table;
  if (!header) {
    throw new Error("prices-nordpass.csv is empty");
  }

  return records.map((record) => ({
    provider: record[0] ?? "",
    plan: record[1] ?? "",
    billingPeriod: record[2] ?? "",
    priceAsShown: record[3] ?? "",
    billedTotalAsShown: record[4] ?? "",
    currency: record[5] ?? "",
    rateType: record[6] ?? "",
    status: record[7] ?? "",
    sourceUrl: record[8] ?? "",
    asOf: record[9] ?? "",
    notes: record[10] ?? "",
  }));
}

const rows = loadRows();

function findVerified(label: string, predicate: (row: PriceRow) => boolean): PriceRow {
  const matches = rows.filter(predicate);
  if (matches.length !== 1) {
    throw new Error(`Expected one prices-nordpass.csv row for ${label}, found ${matches.length}`);
  }
  const match = matches[0];
  if (match.status !== "VERIFIED") {
    throw new Error(`${label} is ${match.status}; only VERIFIED prices can be published`);
  }
  return match;
}

function requireAmounts(row: PriceRow, amounts: string[], label: string) {
  const haystack = `${row.priceAsShown} ${row.billedTotalAsShown}`;
  for (const amount of amounts) {
    if (!haystack.includes(amount)) {
      throw new Error(`${label} is missing ${amount}. CSV has: ${haystack}`);
    }
  }
}

const nordpassRenewal = rows.find((row) => row.provider === "NordPass" && row.rateType === "renewal");
if (!nordpassRenewal || nordpassRenewal.status !== "UNVERIFIED" || nordpassRenewal.priceAsShown !== "UNVERIFIED") {
  throw new Error("NordPass renewal row changed. Leave the renewal price off the page until it is reviewed.");
}

const nordpassPremiumTwoYear = findVerified(
  "NordPass Premium 2-year",
  (row) => row.provider === "NordPass" && row.plan === "Premium" && row.billingPeriod.startsWith("2-year"),
);
const nordpassPremiumOneYear = findVerified(
  "NordPass Premium 1-year",
  (row) => row.provider === "NordPass" && row.plan === "Premium" && row.billingPeriod === "1-year plan",
);
const nordpassFamilyTwoYear = findVerified(
  "NordPass Family 2-year",
  (row) => row.provider === "NordPass" && row.plan.startsWith("Family") && row.billingPeriod.startsWith("2-year"),
);
const nordpassFamilyOneYear = findVerified(
  "NordPass Family 1-year",
  (row) => row.provider === "NordPass" && row.plan.startsWith("Family") && row.billingPeriod === "1-year plan",
);
const bitwardenPremium = findVerified(
  "Bitwarden Premium",
  (row) => row.provider === "Bitwarden" && row.plan.startsWith("Premium"),
);
const bitwardenFamilies = findVerified(
  "Bitwarden Families",
  (row) => row.provider === "Bitwarden" && row.plan.startsWith("Families"),
);
const onePasswordIndividualPromo = findVerified(
  "1Password Individual promo",
  (row) => row.provider === "1Password" && row.plan === "Individual" && row.rateType.includes("promotion"),
);
const onePasswordIndividualRegular = findVerified(
  "1Password Individual regular",
  (row) => row.provider === "1Password" && row.plan === "Individual" && row.rateType === "regular",
);
const onePasswordFamiliesPromo = findVerified(
  "1Password Families promo",
  (row) => row.provider === "1Password" && row.plan.startsWith("Families") && row.rateType.includes("promotion"),
);
const onePasswordFamiliesRegular = findVerified(
  "1Password Families regular",
  (row) => row.provider === "1Password" && row.plan.startsWith("Families") && row.rateType === "regular",
);
const protonPlus = findVerified(
  "Proton Pass Plus",
  (row) => row.provider === "Proton Pass" && row.plan === "Pass Plus",
);
const protonFamily = findVerified(
  "Proton Pass Family",
  (row) => row.provider === "Proton Pass" && row.plan.startsWith("Pass Family"),
);
const dashlanePremium = findVerified(
  "Dashlane Premium",
  (row) => row.provider === "Dashlane" && row.plan === "Premium",
);
const dashlaneFamily = findVerified(
  "Dashlane Friends & Family",
  (row) => row.provider === "Dashlane" && row.plan.startsWith("Friends"),
);
const keeperUnlimited = findVerified(
  "Keeper Unlimited",
  (row) => row.provider === "Keeper" && row.plan === "Keeper Unlimited",
);
const keeperFamily = findVerified(
  "Keeper Family",
  (row) => row.provider === "Keeper" && row.plan.startsWith("Keeper Family"),
);

requireAmounts(nordpassPremiumTwoYear, ["$1.39/month", "$37.53"], "NordPass Premium 2-year");
requireAmounts(nordpassPremiumOneYear, ["$1.99/month", "$23.88"], "NordPass Premium 1-year");
requireAmounts(nordpassFamilyTwoYear, ["$2.49/month", "$67.23"], "NordPass Family 2-year");
requireAmounts(nordpassFamilyOneYear, ["$3.69/month", "$44.28"], "NordPass Family 1-year");
requireAmounts(bitwardenPremium, ["$1.65/Month", "$19.80"], "Bitwarden Premium");
requireAmounts(bitwardenFamilies, ["$3.99/Month", "$47.88"], "Bitwarden Families");
requireAmounts(onePasswordIndividualPromo, ["$2.99 per month"], "1Password Individual promo");
requireAmounts(onePasswordIndividualRegular, ["$3.99 per month"], "1Password Individual regular");
requireAmounts(onePasswordFamiliesPromo, ["$4.49 per month"], "1Password Families promo");
requireAmounts(onePasswordFamiliesRegular, ["$5.99 per month"], "1Password Families regular");
requireAmounts(protonPlus, ["$2.99/month", "$35.88"], "Proton Pass Plus");
requireAmounts(protonFamily, ["$4.99/month", "$59.88"], "Proton Pass Family");
requireAmounts(dashlanePremium, ["$5.42"], "Dashlane Premium");
requireAmounts(dashlaneFamily, ["$8.13"], "Dashlane Friends & Family");
requireAmounts(keeperUnlimited, ["$3.58", "$42.99"], "Keeper Unlimited");
requireAmounts(keeperFamily, ["$7.67", "$91.99"], "Keeper Family");

if (Math.round(19.8 * 2 * 100) !== 3960) {
  throw new Error("Bitwarden two-year total no longer equals $39.60");
}

function requireUrl(row: PriceRow, url: string, label: string) {
  if (row.sourceUrl !== url) {
    throw new Error(`${label} pricing URL changed from ${url} to ${row.sourceUrl}`);
  }
}

requireUrl(bitwardenPremium, "https://bitwarden.com/pricing/", "Bitwarden");
requireUrl(onePasswordIndividualPromo, "https://1password.com/pricing/password-manager", "1Password");
requireUrl(protonPlus, "https://proton.me/pass/pricing", "Proton Pass");
requireUrl(dashlanePremium, "https://www.dashlane.com/personal-pricing", "Dashlane");
requireUrl(keeperUnlimited, "https://www.keepersecurity.com/pricing/personal-and-family.html", "Keeper");
requireUrl(nordpassPremiumTwoYear, "https://nordpass.com/pricing/", "NordPass");

export const pricingUrls = {
  bitwarden: bitwardenPremium.sourceUrl,
  onePassword: onePasswordIndividualPromo.sourceUrl,
  protonPass: protonPlus.sourceUrl,
  dashlane: dashlanePremium.sourceUrl,
  keeper: keeperUnlimited.sourceUrl,
} as const;

export const sourceUrls = {
  nordpassPricing: nordpassPremiumTwoYear.sourceUrl,
  nordpassSecurity: "https://nordpass.com/security/",
  bitwardenPricing: bitwardenPremium.sourceUrl,
  bitwardenAudits: "https://bitwarden.com/help/is-bitwarden-audited/",
  bitwardenWhitePaper: "https://bitwarden.com/help/bitwarden-security-white-paper/",
  onePasswordPricing: onePasswordIndividualPromo.sourceUrl,
  onePasswordSecurity: "https://1password.com/security",
  protonPricing: protonPlus.sourceUrl,
  protonSecurity: "https://proton.me/pass/security",
  dashlanePricing: dashlanePremium.sourceUrl,
  dashlaneSecurity: "https://www.dashlane.com/security",
  keeperPricing: keeperUnlimited.sourceUrl,
  keeperSecurity: "https://www.keepersecurity.com/security.html",
} as const;

export const prices = {
  nordpassPremiumTwoYearMonthly: "$1.39/month",
  nordpassPremiumTwoYearTotal: "$37.53",
  nordpassPremiumOneYearMonthly: "$1.99/month",
  nordpassPremiumOneYearTotal: "$23.88",
  nordpassFamilyTwoYearMonthly: "$2.49/month",
  nordpassFamilyTwoYearTotal: "$67.23",
  nordpassFamilyOneYearMonthly: "$3.69/month",
  nordpassFamilyOneYearTotal: "$44.28",
  bitwardenPremiumMonthly: "$1.65/month",
  bitwardenPremiumMonthlyShown: "$1.65/Month",
  bitwardenPremiumAnnual: "$19.80",
  bitwardenPremiumTwoYearTotal: "$39.60",
  bitwardenFamilyMonthly: "$3.99/Month",
  bitwardenFamilyAnnual: "$47.88",
  onePasswordIndividualPromo: "$2.99",
  onePasswordIndividualRegular: "$3.99",
  onePasswordFamiliesPromo: "$4.49",
  onePasswordFamiliesRegular: "$5.99",
  protonPlusMonthly: "$2.99/month",
  protonPlusBilled: "$35.88",
  protonFamilyMonthly: "$4.99/month",
  protonFamilyBilled: "$59.88",
  dashlanePremiumMonthly: "$5.42",
  dashlaneFamilyMonthly: "$8.13",
  keeperUnlimitedMonthly: "$3.58",
  keeperUnlimitedAnnual: "$42.99",
  keeperFamilyMonthly: "$7.67/month",
  keeperFamilyAnnual: "$91.99",
} as const;

export const PASSWORD_MANAGER_UPDATED = "2026-10-17";
export const PASSWORD_MANAGER_UPDATED_LABEL = "October 17, 2026";
