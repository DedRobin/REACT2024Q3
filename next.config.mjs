/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  distDir: "./dist",
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

export default nextConfig;
