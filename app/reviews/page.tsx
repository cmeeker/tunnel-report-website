import { HubIndex, buildHubMetadata } from "@/components/HubIndex";
import { reviewsHub } from "@/lib/content/hubs";
import { getReviewsHubCards } from "@/lib/seo/related-cards";

export const metadata = buildHubMetadata(reviewsHub);

export default function ReviewsHubPage() {
  return <HubIndex hub={reviewsHub} breadcrumbName="Reviews" cards={getReviewsHubCards()} />;
}
