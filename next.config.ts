import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // NOTE: previously `output: "export"` (fully static site). Removed because the
  // live data backend uses a private Google Sheet via a service account, which
  // requires a server runtime (to hold the key and call the Sheets API). On
  // Vercel this now deploys as a normal Next.js app with serverless API routes.
  // Hide the dev-only indicator badge. It only renders during `next dev` (never
  // in the production/Vercel build) and was surfacing false-positive "issues"
  // from browser extensions that mutate the DOM before React hydrates. Genuine
  // runtime errors still show via Next's full error overlay.
  devIndicators: false,
};

export default nextConfig;
