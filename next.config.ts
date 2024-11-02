import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    outputFileTracingIncludes: {
        "/**": ["components/custom/**/*"],
    },
};

export default nextConfig;
