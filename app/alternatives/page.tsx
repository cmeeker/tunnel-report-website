import { HubIndex, buildHubMetadata } from "@/components/HubIndex";
import { alternativesHub } from "@/lib/content/hubs";
import { getAlternativesHubCards } from "@/lib/seo/related-cards";

export const metadata = buildHubMetadata(alternativesHub);

export default function AlternativesHubPage() {
  return <HubIndex hub={alternativesHub} breadcrumbName="Alternatives" cards={getAlternativesHubCards()} />;
}
