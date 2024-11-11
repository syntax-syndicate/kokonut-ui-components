import type { Registry } from "./schema";

export const hooks: Registry = [
    {
        name: "use-auto-resize-textarea",
        type: "registry:hook",
        files: [
            {
                path: "hooks/use-auto-resize-textarea.ts",
                type: "registry:hook",
            },
        ],
    },
    {
        name: "use-click-outside",
        type: "registry:hook",
        files: [
            {
                path: "hooks/use-click-outside.ts",
                type: "registry:hook",
            },
        ],
    },
    {
        name: "use-file-input",
        type: "registry:hook",
        files: [
            {
                path: "hooks/use-file-input.ts",
                type: "registry:hook",
            },
        ],
    },
];
