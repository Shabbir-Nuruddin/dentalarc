import type { NextConfig } from "next";

const isGithubPages = process.env.NODE_ENV === "production";
const repoName = process.env.GITHUB_REPOSITORY 
  ? process.env.GITHUB_REPOSITORY.split("/")[1] 
  : (process.env.NEXT_PUBLIC_REPO_NAME || "dentalsalt");

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  env: {
    NEXT_PUBLIC_REPO_NAME: repoName,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

