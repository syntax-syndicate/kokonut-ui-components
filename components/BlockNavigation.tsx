"use client";

import { cn } from "@/lib/utils";
import type { BlockComponent } from "@/app/docs/components/block/page";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";
import { useBlockIntersection } from "@/hooks/use-block-intersection";

interface BlockNavigationProps {
    blocks: BlockComponent[];
}

export function BlockNavigation({ blocks }: BlockNavigationProps) {
    const isMobile = useIsMobile();
    const { activeBlock } = useBlockIntersection(blocks);

    if (isMobile) return null;

    return (
        <div className="hidden lg:block fixed right-6 top-1/2 -translate-y-1/2 w-[200px] z-40">
            <div>
                <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-3 px-2.5">
                    Blocks
                </h4>
                <ScrollArea className="h-[320px] scroll-smooth">
                    <nav className="space-y-0.5">
                        {blocks.map((block) => (
                            <a
                                key={block.id}
                                href={`#block-${block.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document
                                        .querySelector(`#block-${block.id}`)
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                }}
                                className={cn(
                                    "group flex items-center px-2.5 py-1.5 rounded-xl",
                                    "transition-all duration-200",
                                    activeBlock === block.id
                                        ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900"
                                        : "hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                                )}
                            >
                                <span className="text-xs font-medium mr-2 opacity-70">
                                    {block.id.toString().padStart(2, "0")}
                                </span>
                                <span className="text-sm font-medium truncate">
                                    {block.title}
                                </span>
                            </a>
                        ))}
                    </nav>
                </ScrollArea>
            </div>
        </div>
    );
}
