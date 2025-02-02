import type { Registry } from "./schema";

export const block: Registry = [
    {
        name: "ai-card-generation",
        type: "registry:block",
        dependencies: ["lucide-react"],
        registryDependencies: ["button", "input", "select", "textarea"],
        files: [
            {
                path: "components/kokonutui/blocks/ai-card-generation/ai-card-generation.tsx",
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
    {
        name: "dashboard",
        type: "registry:block",
        dependencies: ["lucide-react"],
        registryDependencies: [
            "button",
            "input",
            "select",
            "textarea",
            "dropdown-menu",
        ],
        files: [
            {
                path: "components/kokonutui/blocks/dashboard/dashboard.tsx",
                type: "registry:component",
            },
            {
                path: "components/kokonutui/blocks/dashboard/layout.tsx",
                type: "registry:component",
            },
            {
                path: "components/kokonutui/blocks/dashboard/top-nav.tsx",
                type: "registry:component",
            },
            {
                path: "components/kokonutui/blocks/dashboard/sidebar.tsx",
                type: "registry:component",
            },
            {
                path: "components/kokonutui/blocks/dashboard/content.tsx",
                type: "registry:component",
            },
            {
                path: "components/kokonutui/blocks/dashboard/profile-01.tsx",
                type: "registry:component",
            },
            {
                path: "components/kokonutui/blocks/dashboard/list-03.tsx",
                type: "registry:component",
            },
            {
                path: "components/kokonutui/blocks/dashboard/list-01.tsx",
                type: "registry:component",
            },
            {
                path: "components/kokonutui/blocks/dashboard/list-02.tsx",
                type: "registry:component",
            },
        ],
    },
];
