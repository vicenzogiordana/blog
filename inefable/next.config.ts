import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};
const withMDX = require('@next/mdx')();
module.exports = withMDX();
export default nextConfig;
