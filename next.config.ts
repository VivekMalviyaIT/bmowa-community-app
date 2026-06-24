import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Hide the dev-only indicator badge. It only renders during `next dev` (never
  // in the production/Vercel build) and was surfacing false-positive "issues"
  // from browser extensions that mutate the DOM before React hydrates. Genuine
  // runtime errors still show via Next's full error overlay.
  devIndicators: false,
};

export default nextConfig;
