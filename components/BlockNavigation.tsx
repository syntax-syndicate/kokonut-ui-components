"use client";

import type { ComponentItem } from "@/types/component-page";
import { useIntersection } from "@/hooks/use-intersection";
import { ItemNavigation } from "./ui/item-navigation";

interface BlockNavigationProps {
    blocks: ComponentItem[];
}

export function BlockNavigation({ blocks }: BlockNavigationProps) {
    const { visibleIds } = useIntersection(blocks, {
        prefix: "block",
    });

    return (
        <ItemNavigation
            items={blocks}
            visibleIds={visibleIds}
            title="Blocks"
            idPrefix="block"
        />
    );
}
