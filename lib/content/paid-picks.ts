export type PaidPartnerKey = "surfshark" | "protonvpn" | "purevpn" | "hideme";

export type PaidPickSpec = {
  partner: PaidPartnerKey;
  /** Text after the linked partner name. Include a leading space unless the text starts with punctuation. */
  after: string;
};

export const PAID_PARTNER_LABEL: Record<PaidPartnerKey, string> = {
  surfshark: "Surfshark",
  protonvpn: "Proton VPN",
  purevpn: "PureVPN",
  hideme: "hide.me",
};

export const expressReviewPaidPick: PaidPickSpec = {
  partner: "surfshark",
  after: " scores 4.6 in our testing and covers unlimited devices on one plan.",
};

export const expressHomePaidPick: PaidPickSpec = {
  partner: "protonvpn",
  after: " has open-source apps and five straight annual no-logs audits.",
};

export const expressBestVpnsPaidPick: PaidPickSpec = {
  partner: "surfshark",
  after: " covers unlimited devices, and Deloitte assessed its no-logs policy in 2023 and 2025.",
};

export const alternativeExpressPaidPicks: Record<string, PaidPickSpec> = {
  hideme: {
    partner: "protonvpn",
    after: " Plus covers 10 devices and publishes yearly Securitum no-logs audits.",
  },
  mullvad: {
    partner: "protonvpn",
    after:
      " has Swiss jurisdiction, open-source apps, and takes cash or Bitcoin via account credits.",
  },
  purevpn: {
    partner: "hideme",
    after: " says its plans renew at the same price and term you signed up for.",
  },
};

export const streamingExpressPaidPick: PaidPickSpec = {
  partner: "surfshark",
  after:
    " allows unlimited simultaneous devices on one plan, handy for homes with several TVs.",
};

export const gamingExpressPaidPick: PaidPickSpec = {
  partner: "purevpn",
  after: " sells a port forwarding add-on that opens up to 15 ports for game hosting.",
};

export const workExpressPaidPick: PaidPickSpec = {
  partner: "purevpn",
  after: "'s dedicated IP add-on gives you a fixed address that office systems can allowlist.",
};

export const compareExpressPaidPicks: Record<string, PaidPickSpec> = {
  "expressvpn-vs-protonvpn": {
    partner: "protonvpn",
    after: " Plus covers 10 devices, needs no coupon code, and has a 30-day money-back guarantee.",
  },
  "expressvpn-vs-purevpn": {
    partner: "purevpn",
    after: " covers up to 10 devices and backs its plans with a 31-day money-back guarantee.",
  },
  "nordvpn-vs-expressvpn": {
    partner: "surfshark",
    after: " runs RAM-only servers and allows unlimited simultaneous devices on one subscription.",
  },
  "surfshark-vs-expressvpn": {
    partner: "surfshark",
    after: " covers unlimited devices and comes with a 30-day money-back guarantee.",
  },
};
