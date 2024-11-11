"use client";

import { useState, useEffect } from "react";
import type { BlockComponent } from "@/app/docs/components/block/page";

export function useBlockIntersection(blocks: BlockComponent[]) {
    const [activeBlock, setActiveBlock] = useState<number>(blocks[0]?.id);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        const blockId = Number(
                            entry.target.id.replace("block-", "")
                        );
                        setActiveBlock(blockId);
                    }
                }
            },
            { threshold: 0.5 }
        );

        for (const block of blocks) {
            const element = document.getElementById(`block-${block.id}`);
            if (element) observer.observe(element);
        }

        return () => observer.disconnect();
    }, [blocks]);

    return { activeBlock };
}
