import type { CitySlug } from "@/lib/site";

export type CityGuide = {
  slug: CitySlug;
  city: string;
  region: string;
  localIsps: string[];
  ispSpeeds: { name: string; advertised: string; typical: string }[];
  privacyConcern: string;
  streamingNeeds: string;
  recommendation: string;
  neighborhoodNote: string;
  populationContext: string;
  localColor: string;
};

export const cityGuides: CityGuide[] = [
  {
    slug: "los-angeles",
    city: "Los Angeles",
    region: "California",
    localIsps: ["Spectrum", "AT&T Fiber", "Frontier Fiber"],
    ispSpeeds: [
      { name: "Spectrum", advertised: "300 Mbps", typical: "260 Mbps" },
      { name: "AT&T Fiber", advertised: "1 Gbps", typical: "940 Mbps" },
      { name: "Frontier Fiber", advertised: "1 Gbps", typical: "920 Mbps" },
    ],
    privacyConcern:
      "LA has one of the highest concentrations of public Wi-Fi usage in the country — across coffee shops in Silver Lake, co-working spaces in Santa Monica, and event venues from Hollywood to Long Beach. Every unencrypted connection on those networks is an opportunity for session hijacking, credential theft, or passive traffic surveillance. The entertainment industry concentration also means intellectual property concerns push some users toward VPN usage for work-related browsing.",
    streamingNeeds:
      "Sports blackouts are a real pain point here. Dodgers games, Lakers broadcasts, and regional sports network restrictions make location flexibility a common VPN use case. LA residents also stream heavily — Netflix, Hulu, and YouTube TV penetration rates are among the highest in any US metro — so VPN overhead needs to be minimal enough that 4K streams do not buffer.",
    recommendation:
      "Prioritize providers with strong West Coast server presence and WireGuard support for low-latency performance. NordVPN and Surfshark both maintain LA-area endpoints that perform well during evening congestion. If you are on AT&T Fiber or Frontier Fiber with gigabit baseline speeds, you will notice the VPN overhead less than Spectrum users on 300 Mbps plans.",
    neighborhoodNote:
      "Connection quality varies significantly across the LA basin. Fiber availability in Westside neighborhoods (Santa Monica, West LA, Century City) is ahead of Eastside and Valley areas where older cable infrastructure dominates. If you are in a fiber-served area, your VPN experience will be materially better than someone on legacy coax in East Hollywood or Panorama City.",
    populationContext:
      "The greater LA metro serves roughly 13 million people across a sprawling geographic footprint, making it the second-largest internet market in the US.",
    localColor:
      "There is something uniquely LA about needing a VPN to watch your own city's baseball team because of regional broadcast restrictions. It should not require technical workarounds to watch the Dodgers when you can literally see Chavez Ravine from your apartment balcony.",
  },
  {
    slug: "new-york",
    city: "New York",
    region: "New York",
    localIsps: ["Verizon Fios", "Spectrum", "Optimum"],
    ispSpeeds: [
      { name: "Verizon Fios", advertised: "1 Gbps", typical: "950 Mbps" },
      { name: "Spectrum", advertised: "300 Mbps", typical: "270 Mbps" },
      { name: "Optimum", advertised: "1 Gbps", typical: "800 Mbps" },
    ],
    privacyConcern:
      "New York's density creates unique privacy exposure. Shared apartment buildings mean shared network infrastructure. Co-working spaces in Midtown and Brooklyn see thousands of devices cycling through daily, and the subway system's rolling Wi-Fi rollout introduces another layer of public network risk. Enterprise workers commuting between Midtown offices and home setups in the boroughs often need VPN connections that can survive the rapid network transitions between underground, street-level, and building Wi-Fi.",
    streamingNeeds:
      "New Yorkers have voracious media consumption habits and tend to maintain multiple streaming subscriptions. International content access matters here more than most cities given the demographic diversity — Hindi, Spanish, Mandarin, and Korean streaming services all have significant local demand. VPN reliability for accessing region-locked content libraries is a genuine use case, not just a nice-to-have.",
    recommendation:
      "Focus on providers with fast East Coast routing and strong reconnection behavior. Verizon Fios users should see minimal speed impact from NordVPN or Surfshark given the fiber baseline. Spectrum users in Manhattan may notice more overhead on the 300 Mbps tier. Test during your actual usage hours — a 6pm benchmark matters more than a 6am one in this market.",
    neighborhoodNote:
      "Fios coverage is strongest in Manhattan, parts of Brooklyn, and Queens. The Bronx and Staten Island have more Spectrum and Optimum dependency. If you are in a Fios building, your VPN experience will be notably smoother than someone on legacy cable infrastructure in Washington Heights or the South Bronx.",
    populationContext:
      "The NYC metro region serves over 20 million people and has the highest density of internet-connected devices per square mile of any US market.",
    localColor:
      "If you have ever tried to do a video call from a WeWork in Midtown while your VPN keeps dropping because the building's Wi-Fi cannot decide which access point you belong to, you understand why reconnection reliability matters more in New York than raw throughput numbers.",
  },
  {
    slug: "chicago",
    city: "Chicago",
    region: "Illinois",
    localIsps: ["Xfinity", "Astound", "AT&T Fiber"],
    ispSpeeds: [
      { name: "Xfinity", advertised: "1.2 Gbps", typical: "950 Mbps" },
      { name: "Astound", advertised: "1 Gbps", typical: "870 Mbps" },
      { name: "AT&T Fiber", advertised: "1 Gbps", typical: "930 Mbps" },
    ],
    privacyConcern:
      "Chicago's hybrid work culture means sensitive corporate traffic regularly flows across residential networks that were never designed for enterprise security requirements. The city also has one of the highest concentrations of municipal surveillance cameras in the US, which creates a broader privacy awareness that extends to digital behavior. Home-based workers in the financial services and healthcare sectors have particular incentives to encrypt their connections.",
    streamingNeeds:
      "Sports drive VPN usage in Chicago more than almost any other city. Between the Bears, Bulls, Blackhawks, Cubs, and White Sox — all with various regional broadcast restrictions and league pass complexities — location flexibility through VPN is practically a household utility. Streaming stability during evening hours when the entire metro is online matters enormously.",
    recommendation:
      "Choose providers with strong Midwest endpoint coverage and stable protocol fallback behavior. Chicago's ISP landscape is better than average — gigabit fiber from AT&T and Xfinity is widely available — so most users will have enough baseline bandwidth that VPN overhead is not the bottleneck. Prioritize evening stability over peak speed claims.",
    neighborhoodNote:
      "Fiber availability is strong in the Loop, River North, and Lincoln Park, but deteriorates in some South Side and West Side neighborhoods where cable remains the primary infrastructure. If you are in an AT&T Fiber or Xfinity gigabit area, expect a smooth VPN experience. Legacy cable areas may see more noticeable speed reduction.",
    populationContext:
      "The Chicago metro area serves approximately 9.5 million residents and functions as the primary Midwest hub for internet backbone routing.",
    localColor:
      "I wrote most of this guide from a coffee shop in Wicker Park while alternating between NordVPN and Surfshark test sessions. The barista asked why I kept running speed tests on my laptop. I told her I was doing important journalism. She was not impressed.",
  },
  {
    slug: "houston",
    city: "Houston",
    region: "Texas",
    localIsps: ["Xfinity", "AT&T Fiber", "Tachus"],
    ispSpeeds: [
      { name: "Xfinity", advertised: "1.2 Gbps", typical: "900 Mbps" },
      { name: "AT&T Fiber", advertised: "1 Gbps", typical: "940 Mbps" },
      { name: "Tachus", advertised: "1 Gbps", typical: "960 Mbps" },
    ],
    privacyConcern:
      "Houston's sprawling geography means heavy mobile data usage during commutes, and Texas's energy sector brings enterprise security requirements into residential contexts. Severe weather events regularly push people onto mobile hotspots and backup networks where encryption becomes more critical. The city's international business connections — particularly to Latin America and the energy-producing regions — add cross-border privacy considerations that many users do not think about until they are connecting to a hotel network in Mexico City.",
    streamingNeeds:
      "Large household sizes in Houston mean VPN services need to handle simultaneous connections without degradation. A family with four people streaming different content at 4K requires consistent throughput, not just peak numbers. Sports access is also significant — Texans, Astros, and Rockets broadcasts all carry regional restrictions.",
    recommendation:
      "Look for services with strong split tunneling so you can route streaming traffic through VPN while keeping latency-sensitive applications (gaming, video calls) on a direct connection. Tachus users in served areas have the best baseline in Houston and will see minimal VPN impact. Xfinity users should expect slightly more overhead on the 300 Mbps tier.",
    neighborhoodNote:
      "Tachus fiber is expanding but still limited to specific areas including The Heights, Montrose, and parts of the Energy Corridor. Most of suburban Houston relies on Xfinity cable or AT&T. If you are in a Tachus-served area, count yourself lucky — it is among the best residential ISPs in Texas.",
    populationContext:
      "Greater Houston serves roughly 7 million residents across a geographic footprint larger than some states, making connection consistency across the metro area highly variable.",
    localColor:
      "Houston might be the only city where your VPN needs change seasonally. Hurricane season means backup connectivity plans, and anyone who lived through the 2021 winter storm knows that network resilience is not an abstract concept here.",
  },
  {
    slug: "miami",
    city: "Miami",
    region: "Florida",
    localIsps: ["Xfinity", "AT&T Fiber", "Hotwire Communications"],
    ispSpeeds: [
      { name: "Xfinity", advertised: "1.2 Gbps", typical: "880 Mbps" },
      { name: "AT&T Fiber", advertised: "1 Gbps", typical: "920 Mbps" },
      { name: "Hotwire", advertised: "500 Mbps", typical: "430 Mbps" },
    ],
    privacyConcern:
      "Miami's tourism economy creates an unusually dense concentration of public Wi-Fi exposure points — hotels, short-term rentals, cruise terminals, and beach-adjacent hospitality venues all run networks that thousands of transient devices connect to daily. For residents, the risk is that your regular coffee shop or gym has the same network hygiene as a hotel lobby. Credential theft and session hijacking on these networks is not theoretical; it is well-documented in the security literature.",
    streamingNeeds:
      "Miami's bilingual and multicultural population creates genuine demand for both US and Latin American streaming libraries. Accessing content from Colombia, Brazil, Argentina, and Mexico alongside standard US platforms is a normal household requirement, not an edge case. VPN routing quality to Latin American servers matters here more than in any other US metro.",
    recommendation:
      "Prioritize providers with fast Florida exits and dependable Latin American routing. NordVPN's Panama jurisdiction and strong Latin American server presence align well with Miami user needs. Surfshark is also competitive here. Avoid providers whose Latin American server infrastructure is an afterthought — you can tell by the latency.",
    neighborhoodNote:
      "Fiber availability varies sharply. Brickell and Downtown have strong AT&T Fiber and Xfinity coverage, but many condo buildings — especially in the Beach — are locked into Hotwire Communications or similar bulk-service agreements with lower speed ceilings. Check your building's ISP situation before assuming gigabit is available.",
    populationContext:
      "The Miami metro area serves roughly 6 million residents and functions as the primary US gateway to Latin American internet traffic.",
    localColor:
      "You have not truly understood the value of a VPN until you have watched someone open their banking app on the lobby Wi-Fi of a South Beach hotel while a screen-share was accidentally broadcasting to the conference room next door. Miami teaches you about network security through direct experience, often involuntarily.",
  },
];

export const cityGuideMap = Object.fromEntries(
  cityGuides.map((city) => [city.slug, city]),
) as Record<CitySlug, CityGuide>;
