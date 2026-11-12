import { HubIndex, buildHubMetadata } from "@/components/HubIndex";
import { dealsHub } from "@/lib/content/hubs";
import { getDealsHubCards } from "@/lib/seo/related-cards";

export const metadata = buildHubMetadata(dealsHub);

export default function DealsHubPage() {
  return <HubIndex hub={dealsHub} breadcrumbName="Deals" cards={getDealsHubCards()} />;
}