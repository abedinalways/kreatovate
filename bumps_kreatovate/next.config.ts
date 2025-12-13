/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow external scripts
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://widgets.bumpsale.co;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
