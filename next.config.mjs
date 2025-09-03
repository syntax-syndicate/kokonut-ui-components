import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const nextConfig = {
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    outputFileTracingIncludes: {
        "/**": ["components/kokonutui/**/*"],
    },
    swcMinify: true,
    async headers() {
        return [
            {
                source: "/r/:path*",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
            {
                source: "/_next/image",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=86400, immutable",
                    },
                ],
            },
        ];
    },
    async redirects() {
        return [
            {
                source: "/components",
                destination: "/docs/components/liquid-glass-card",
                permanent: true,
            },
            {
                source: "/components/:path*",
                destination: "/docs/components/:path*",
                permanent: true,
            },
            {
                source: "/r/:path([^.]*)",
                destination: "/r/:path.json",
                permanent: true,
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                hostname: "*",
            },
        ],
        minimumCacheTTL: 2678400,
    },
    reactStrictMode: true,
    serverExternalPackages: ["twoslash", "typescript"],
};

export default withMDX(nextConfig);
