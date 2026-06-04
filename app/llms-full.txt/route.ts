import { buildLlmsText } from "@/lib/seo/llms";

export function GET() {
  return new Response(buildLlmsText({ full: true }), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
