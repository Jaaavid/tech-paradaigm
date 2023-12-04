import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const ip = request.ip || "192.0.2.1"; // Placeholder IP for local testing

  // Call the IP geolocation API
  const geoApiUrl = `https://api.iplocation.net/?ip=${ip}`;
  const geoResponse = await fetch(geoApiUrl);
  const geoData: any = await geoResponse.json();

  // Add country and city information to the headers
  requestHeaders.set("x-country", geoData.country_name);
  requestHeaders.set("x-city", geoData.city);
  requestHeaders.set("x-forwarded-for", ip);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
