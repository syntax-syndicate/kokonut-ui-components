import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    outputFileTracingIncludes: {
        "/**": ["components/kokonutui/**/*"],
    },
    images: {
        remotePatterns: [
            {
                hostname: "*",
            },
        ],
    },
};

export default nextConfig;
