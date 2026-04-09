export type EditorialPersona = {
  id: string;
  name: string;
  role: string;
  shortBio: string;
  avatar: string;
  voiceDescription: string;
};

export const personas: Record<string, EditorialPersona> = {
  marcus: {
    id: "marcus",
    name: "Marcus Chen",
    role: "Senior Privacy Analyst",
    shortBio:
      "Former network security engineer turned privacy journalist. Marcus spent six years building enterprise VPN infrastructure before switching to editorial work. He approaches every review like a penetration test — looking for what vendors don't want you to find.",
    avatar: "MC",
    voiceDescription: "Technical, direct, slightly skeptical. Uses concrete numbers and protocol-level language.",
  },
  sarah: {
    id: "sarah",
    name: "Sarah Voss",
    role: "Consumer Technology Editor",
    shortBio:
      "Consumer tech reporter who covered the broadband beat at two national outlets before joining Tunnel Report. Sarah translates dense security concepts into buying decisions real people can act on, and she has zero patience for marketing jargon.",
    avatar: "SV",
    voiceDescription: "Conversational but precise. Focuses on real-world usability and value for money.",
  },
  daniel: {
    id: "daniel",
    name: "Daniel Okafor",
    role: "Policy & Compliance Correspondent",
    shortBio:
      "Policy researcher with a background in telecommunications regulation and digital rights advocacy. Daniel tracks how jurisdiction, data retention laws, and international surveillance agreements shape the VPN market.",
    avatar: "DO",
    voiceDescription: "Analytical, policy-focused, long-view perspective. Connects products to regulatory context.",
  },
};

export const getPersona = (id: string): EditorialPersona => {
  return personas[id] ?? personas.marcus;
};
