import { BlockItem } from "./BlockItem";
import { ComponentItem } from "./ComponentItem";
import type { ComponentItem as ComponentItemType } from "@/types/component-page";
import { Navigation } from "./Navigation";

interface ViewBlocksProps {
    blocks: ComponentItemType[];
    folder: string;
    viewType?: "block" | "grid";
    gridClassName?: string;
    componentClassName?: string;
}

export function ViewBlocks({
    blocks,
    folder,
    viewType = "block",
    gridClassName = "grid-cols-1 gap-4",
    componentClassName,
}: ViewBlocksProps) {
    if (viewType === "grid") {
        return (
            <div className="flex gap-4">
                <div
                    className={`grid ${gridClassName} w-11/12 lg:w-full mx-auto lg:mx-0 gap-8`}
                >
                    {blocks.map((block) => (
                        <div key={block.id} className="h-full">
                            <ComponentItem
                                item={block}
                                folder={folder}
                                componentClassName={componentClassName}
                            />
                        </div>
                    ))}
                </div>
                <Navigation
                    items={blocks}
                    type="component"
                    title="Components"
                />
            </div>
        );
    }

    return (
        <div className="relative">
            <div className="flex flex-col gap-12">
                {blocks.map((block) => (
                    <div
                        key={block.id}
                        id={`block-${block.id}`}
                        className="scroll-m-32"
                    >
                        <BlockItem item={block} folder={folder} />
                    </div>
                ))}
            </div>
            <Navigation items={blocks} type="block" title="Blocks" />
        </div>
    );
}
