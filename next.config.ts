import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Move the dev-only indicator to the bottom-right so it doesn't sit on top of
  // the design switcher (which lives in the bottom-left corner). Dev-only — has
  // no effect on the production build.
  devIndicators: {
    position: "top-right",
  },
};

export default nextConfig;
