import { getAbsoluteUrls } from "@/lib/seo/routes";
import { submitIndexNow } from "@/lib/seo/indexnow";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const configuredSecret = process.env.INDEXNOW_SUBMIT_SECRET;
  if (configuredSecret) {
    const provided = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
    if (provided !== configuredSecret) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  const body = await request.json().catch(() => ({})) as { urls?: string[] };
  const urls = body.urls?.length ? body.urls : getAbsoluteUrls();

  try {
    const result = await submitIndexNow(urls);
    return Response.json(result);
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : "IndexNow submission failed" },
      { status: 502 },
    );
  }
}
