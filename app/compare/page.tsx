import { HubIndex, buildHubMetadata } from "@/components/HubIndex";
import { compareHub } from "@/lib/content/hubs";
import { getCompareHubCards } from "@/lib/seo/related-cards";

export const metadata = buildHubMetadata(compareHub);

export default function CompareHubPage() {
  return <HubIndex hub={compareHub} breadcrumbName="Compare" cards={getCompareHubCards()} />;
}
