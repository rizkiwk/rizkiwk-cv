/** @type {import('next').NextConfig} */
const isCI = process.env.GITHUB_ACTIONS === "true";
const repo = "rizkiwk-cv";

const nextConfig = {
  env: { NEXT_PUBLIC_BASE_PATH: isCI ? `/${repo}` : "" },
  reactStrictMode: true,
  // Static export for GitHub Pages (https://rizkiwk.github.io/rizkiwk-cv)
  output: "export",
  trailingSlash: true,
  basePath: isCI ? `/${repo}` : "",
  assetPrefix: isCI ? `/${repo}/` : undefined,
  images: { unoptimized: true },
};

export default nextConfig;
