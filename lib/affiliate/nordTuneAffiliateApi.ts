/**
 * Nord affiliate dashboard uses TUNE (HasOffers) Affiliate API v3.
 * @see https://developers.tune.com/affiliate-docs/getting-started-with-the-hasoffers-affiliate-api/
 *
 * Never call this from the browser — keep `api_key` server-side only.
 */

export type NordTuneAffiliateCredentials = {
  networkId: string;
  apiKey: string;
};

export type TuneAffiliateEnvelope<T> = {
  request: Record<string, unknown>;
  response: {
    status: number;
    httpStatus: number;
    data?: T;
    errors?: Array<{ err_msg?: string; publicMessage?: string }>;
    errorMessage?: string | null;
  };
};

function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v) {
    throw new Error(
      `Missing ${name}. Set it in .env.local (see example.env) or export it in your shell.`,
    );
  }
  return v;
}

export function getNordTuneAffiliateCredentialsFromEnv(): NordTuneAffiliateCredentials {
  return {
    networkId: requireEnv("NORD_AFFILIATE_NETWORK_ID"),
    apiKey: requireEnv("NORD_AFFILIATE_API_KEY"),
  };
}

type CallParams = Record<string, string | number | boolean | undefined>;

/**
 * Low-level GET to Apiv3/json. Arrays use PHP-style repeated keys: fields[]=a&fields[]=b
 */
export async function callNordTuneAffiliateApi<T = unknown>(
  creds: NordTuneAffiliateCredentials,
  target: string,
  method: string,
  params: CallParams = {},
  arrayParams: Record<string, string[]> = {},
): Promise<TuneAffiliateEnvelope<T>> {
  const url = new URL(`https://${creds.networkId}.api.hasoffers.com/Apiv3/json`);
  url.searchParams.set("Target", target);
  url.searchParams.set("Method", method);
  url.searchParams.set("api_key", creds.apiKey);

  for (const [k, v] of Object.entries(params)) {
    if (v === undefined) continue;
    url.searchParams.set(k, String(v));
  }

  for (const [key, values] of Object.entries(arrayParams)) {
    const q = `${key}[]`;
    for (const v of values) {
      url.searchParams.append(q, v);
    }
  }

  const res = await fetch(url, { method: "GET", cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Nord TUNE API HTTP ${res.status} for ${target}::${method}`);
  }
  return (await res.json()) as TuneAffiliateEnvelope<T>;
}

export function assertTuneOk<T>(envelope: TuneAffiliateEnvelope<T>, context: string): T {
  if (envelope.response.status !== 1) {
    const msg =
      envelope.response.errorMessage ||
      envelope.response.errors?.map((e) => e.err_msg || e.publicMessage).join("; ") ||
      "unknown error";
    throw new Error(`${context} failed: ${msg}`);
  }
  return envelope.response.data as T;
}
