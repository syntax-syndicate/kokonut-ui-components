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
            <div className="w-full relative">
                <div className="flex gap-8">
                    <div className={`grid ${gridClassName} flex-1`}>
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
                    <div className="hidden lg:block w-[240px] flex-shrink-0">
                        <div className="sticky top-24">
                            <Navigation
                                items={blocks}
                                type="component"
                                title="Components"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full relative">
            <div className="flex gap-8">
                <div className="flex-1 w-full">
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
                </div>
                <div className="hidden lg:block w-[240px] flex-shrink-0">
                    <div className="sticky top-24">
                        <Navigation
                            items={blocks}
                            type="block"
                            title="Blocks"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
