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

const pricedRows = [
  nordpassPremiumTwoYear,
  nordpassPremiumOneYear,
  nordpassFamilyTwoYear,
  nordpassFamilyOneYear,
  bitwardenPremium,
  bitwardenFamilies,
  onePasswordIndividualPromo,
  onePasswordIndividualRegular,
  onePasswordFamiliesPromo,
  onePasswordFamiliesRegular,
  protonPlus,
  protonFamily,
  dashlanePremium,
  dashlaneFamily,
  keeperUnlimited,
  keeperFamily,
];
for (const row of pricedRows) {
  requireAmounts(row, ["See current pricing"], row.plan);
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

const SEE_CURRENT_PRICING = "See current pricing";

export const prices = {
  nordpassPremiumTwoYearMonthly: SEE_CURRENT_PRICING,
  nordpassPremiumTwoYearTotal: SEE_CURRENT_PRICING,
  nordpassPremiumOneYearMonthly: SEE_CURRENT_PRICING,
  nordpassPremiumOneYearTotal: SEE_CURRENT_PRICING,
  nordpassFamilyTwoYearMonthly: SEE_CURRENT_PRICING,
  nordpassFamilyTwoYearTotal: SEE_CURRENT_PRICING,
  nordpassFamilyOneYearMonthly: SEE_CURRENT_PRICING,
  nordpassFamilyOneYearTotal: SEE_CURRENT_PRICING,
  bitwardenPremiumMonthly: SEE_CURRENT_PRICING,
  bitwardenPremiumMonthlyShown: SEE_CURRENT_PRICING,
  bitwardenPremiumAnnual: SEE_CURRENT_PRICING,
  bitwardenPremiumTwoYearTotal: SEE_CURRENT_PRICING,
  bitwardenFamilyMonthly: SEE_CURRENT_PRICING,
  bitwardenFamilyAnnual: SEE_CURRENT_PRICING,
  onePasswordIndividualPromo: SEE_CURRENT_PRICING,
  onePasswordIndividualRegular: SEE_CURRENT_PRICING,
  onePasswordFamiliesPromo: SEE_CURRENT_PRICING,
  onePasswordFamiliesRegular: SEE_CURRENT_PRICING,
  protonPlusMonthly: SEE_CURRENT_PRICING,
  protonPlusBilled: SEE_CURRENT_PRICING,
  protonFamilyMonthly: SEE_CURRENT_PRICING,
  protonFamilyBilled: SEE_CURRENT_PRICING,
  dashlanePremiumMonthly: SEE_CURRENT_PRICING,
  dashlaneFamilyMonthly: SEE_CURRENT_PRICING,
  keeperUnlimitedMonthly: SEE_CURRENT_PRICING,
  keeperUnlimitedAnnual: SEE_CURRENT_PRICING,
  keeperFamilyMonthly: SEE_CURRENT_PRICING,
  keeperFamilyAnnual: SEE_CURRENT_PRICING,
} as const;

export const PASSWORD_MANAGER_UPDATED = "2026-10-17";
export const PASSWORD_MANAGER_UPDATED_LABEL = "October 17, 2026";
