import { Block01Example } from "@/components/ui/block-01-example";
import Block02Example from "@/components/ui/block-02-example";
import Block03Example from "@/components/ui/block-03-example";
import { ViewBlocks } from "@/components/ViewBlocks";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blocks",
    description:
        "A collection of block components to use and customize. Built with Tailwind CSS and Shadcn.",
};

export type BlockComponent = {
    id: number;
    title: string;
    component: React.ReactElement;
    fileName: string;
    fileExample: string;
};

export default function BlocksPage() {
    const blocks: BlockComponent[] = [
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
    ];

    return (
        <div className="container mx-auto py-12 lg:pr-[250px]">
            <ViewBlocks blocks={blocks} />
        </div>
    );
}
