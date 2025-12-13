/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';

              script-src 'self'
                'unsafe-inline'
                'unsafe-eval'
                https://*.bumpsale.co
                https://*.leadconnectorhq.com;

              script-src-elem 'self'
                'unsafe-inline'
                https://*.bumpsale.co
                https://*.leadconnectorhq.com;

              connect-src 'self'
                https://*.bumpsale.co
                https://*.leadconnectorhq.com
                wss://*.leadconnectorhq.com;

              frame-src 'self'
                https://*.bumpsale.co
                https://*.leadconnectorhq.com;

              worker-src 'self'
                blob:
                https://*.leadconnectorhq.com;

              style-src 'self'
                'unsafe-inline'
                https://stcdn.leadconnectorhq.com;

              font-src 'self'
                https://fonts.gstatic.com
                https://stcdn.leadconnectorhq.com;

              img-src 'self'
                data:
                blob:
                https:;
            `
              .replace(/\s{2,}/g, " ")
              .trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
