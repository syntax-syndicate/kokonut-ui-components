import { Block01Example } from "@/components/ui/block-01-example";
import { ViewBlocks } from "@/components/ViewBlocks";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blocks",
    description:
        "A collection of block components to use and customize. Built with Tailwind CSS and Shadcn.",
};

export default function BlocksPage() {
    const blocks = [
        {
            id: 1,
            title: "Landing Page",
            component: <Block01Example />,
            fileName: "block-01.json",
        },
    ];

    return (
        <div className="container mx-auto py-12">
            <ViewBlocks blocks={blocks} />
        </div>
    );
}
