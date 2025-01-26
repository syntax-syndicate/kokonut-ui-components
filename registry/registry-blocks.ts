import type { Registry } from "./schema";

export const block: Registry = [
    {
        name: "ai-card-generation",
        type: "registry:block",
        dependencies: ["lucide-react"],
        registryDependencies: ["button", "input", "select", "textarea"],
        files: [
            {
                path: "components/kokonutui/blocks/ai-card-generation/page.tsx",
                type: "registry:component",
            },
            {
                path: "components/kokonutui/blocks/ai-card-generation/header-generation.tsx",
                type: "registry:component",
            },
            {
                path: "components/kokonutui/blocks/ai-card-generation/form-generation.tsx",
                type: "registry:component",
            },
            {
                path: "components/kokonutui/blocks/ai-card-generation/settings-generation.tsx",
                type: "registry:component",
            },
            {
                path: "components/kokonutui/blocks/ai-card-generation/preview-generation.tsx",
                type: "registry:component",
            },
            {
                path: "components/kokonutui/blocks/ai-card-generation/error-generation.tsx",
                type: "registry:component",
            },
        ],
    },
];
