import type { Registry } from "./schema";

export const block: Registry = [
    {
        name: "block-01",
        type: "registry:block",
        dependencies: ["lucide-react"],
        registryDependencies: ["button"],
        files: [
            {
                path: "components/block/block-01/block-01.tsx",
                type: "registry:component",
            },
            {
                path: "components/block/block-01/block-01-nav.tsx",
                type: "registry:component",
            },
            {
                path: "components/block/block-01/block-01-content.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "block-02",
        type: "registry:block",
        dependencies: ["lucide-react"],
        registryDependencies: [],
        files: [
            {
                path: "components/block/block-02/block-02.tsx",
                type: "registry:component",
            },
            {
                path: "components/block/block-02/block-02-content.tsx",
                type: "registry:component",
            },
            {
                path: "components/pricing/pricing-03.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "block-03",
        type: "registry:block",
        dependencies: ["lucide-react"],
        registryDependencies: ["button", "input"],
        files: [
            {
                path: "components/block/block-03/block-03.tsx",
                type: "registry:component",
            },
            {
                path: "components/block/block-03/block-03-login-content.tsx",
                type: "registry:component",
            },
            {
                path: "components/block/block-03/block-03-login.tsx",
                type: "registry:component",
            },
        ],
    },
];
