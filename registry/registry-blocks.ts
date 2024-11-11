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
];
