import { BlockItem } from "./BlockItem";
import type { BlockComponent } from "@/app/docs/components/block/page";
import { BlockNavigation } from "./BlockNavigation";

export function ViewBlocks({ blocks }: { blocks: BlockComponent[] }) {
    return (
        <div className="relative ">
            <div className="flex flex-col gap-12">
                {blocks.map((block) => (
                    <div key={block.id} id={`block-${block.id}`}>
                        <BlockItem item={block} />
                    </div>
                ))}
            </div>
            <BlockNavigation blocks={blocks} />
        </div>
    );
}
