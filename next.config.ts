import type { NextConfig } from "next";

import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    // outputFileTracingIncludes: {
    //     "/**": [
    //         "components/ai-input/**/*",
    //         "components/texts/**/*",
    //         "components/buttons/**/*",
    //     ],
    // },
    images: {
        remotePatterns: [
            {
                hostname: "*",
            },
        ],
    },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
