import { SiteHeader } from "@/components/SiteHeader";
import { VpnHintBar } from "@/components/VpnHintBar";

/** VPN hint bar + nav stick together at the top of the viewport */
export function StickySiteChrome() {
  return (
    <div className="sticky top-0 z-50">
      <VpnHintBar />
      <SiteHeader />
    </div>
  );
}
