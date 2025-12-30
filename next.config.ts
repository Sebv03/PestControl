import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Permitir scripts externos para formularios embebidos de GoHighLevel
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://*.gohighlevel.com https://*.gohighlevel.io https://*.gohighlevel.xyz https://api.leadconnectorhq.com https://maps.google.com https://www.google.com https://www.openstreetmap.org; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.gohighlevel.com https://*.gohighlevel.io https://*.gohighlevel.xyz https://link.msgsndr.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
