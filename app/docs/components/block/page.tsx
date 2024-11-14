import Block01Example from "@/components/ui/block-01-example";

import Block02Example from "@/components/ui/block-02-example";
import Block03Example from "@/components/ui/block-03-example";
import { createComponentPage } from "@/components/page-builder";
import type { PageConfig } from "@/types/component-page";

const BLOCKS_CONFIG: PageConfig = {
    title: "Blocks",
    description:
        "A collection of block components to use and customize. Built with Tailwind CSS and Shadcn.",
    folder: "kokonutui/block",
    viewType: "block",
    components: [
        {
            id: 1,
            title: "Landing Page",
            component: <Block01Example />,
            fileName: "block-01.json",
            fileExample: "block-01-example.tsx",
        },
        {
            id: 2,
            title: "Pricing Page",
            component: <Block02Example />,
            fileName: "block-02.json",
            fileExample: "block-02-example.tsx",
        },
        {
            id: 3,
            title: "Login Page",
            component: <Block03Example />,
            fileName: "block-03.json",
            fileExample: "block-03-example.tsx",
        },
    ],
};

const { default: BlocksPage, metadata } = createComponentPage(BLOCKS_CONFIG);

export { metadata };
export default BlocksPage;
