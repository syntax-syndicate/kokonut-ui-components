"use client";

import type { ComponentItem } from "@/types/component-page";
import { useIntersection } from "@/hooks/use-intersection";
import { ItemNavigation } from "./ui/item-navigation";

interface NavigationProps {
    items: ComponentItem[];
    type: "block" | "component";
    title: string;
}

export function Navigation({ items, type, title }: NavigationProps) {
    const { visibleIds } = useIntersection(items, {
        prefix: type,
        threshold: 0.2,
    });

    return (
        <ItemNavigation
            items={items}
            visibleIds={visibleIds}
            title={title}
            idPrefix={type}
        />
    );
}
