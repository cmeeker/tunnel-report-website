import { NextResponse, type NextRequest } from "next/server";

const WWW_HOSTNAME = "www.tunnelreport.com";
const APEX_HOSTNAME = "tunnelreport.com";

export function middleware(request: NextRequest) {
  const hostHeader = request.headers.get("host")?.split(":")[0]?.toLowerCase();
  const hostname = (hostHeader ?? request.nextUrl.hostname).toLowerCase();
  if (hostname !== WWW_HOSTNAME) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.protocol = "https:";
  url.hostname = APEX_HOSTNAME;
  url.port = "";

  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: "/:path*",
};
