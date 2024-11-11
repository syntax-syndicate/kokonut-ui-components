import { Suspense } from "react";
import { BlockItem } from "./BlockItem";

interface BlockComponent {
    id: number;
    title: string;
    component: React.ReactElement;
    fileName: string;
    dependencies?: string[];
}

interface ViewBlocksProps {
    blocks: BlockComponent[];
}

export function ViewBlocks({ blocks }: ViewBlocksProps) {
    return (
        <Suspense fallback={null}>
            <div className="flex flex-col gap-12">
                {blocks.map((block) => (
                    <BlockItem key={block.id} item={block} />
                ))}
            </div>
        </Suspense>
    );
}
