"use client";

import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavigationItem {
    id: string | number;
    title: string;
}

interface ItemNavigationProps<T extends NavigationItem> {
    items: T[];
    visibleIds?: Set<string | number>;
    title?: string;
    onItemClick?: (item: T) => void;
    className?: string;
    idPrefix?: string;
}

export function ItemNavigation<T extends NavigationItem>({
    items,
    visibleIds,
    title = "Navigation",
    onItemClick,
    className,
    idPrefix = "item",
}: ItemNavigationProps<T>) {
    const isMobile = useIsMobile();

    if (isMobile) return null;

    const handleItemClick = (e: React.MouseEvent, item: T) => {
        e.preventDefault();
        if (onItemClick) {
            onItemClick(item);
        } else {
            document.querySelector(`#${idPrefix}-${item.id}`)?.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <div
            className={cn(
                "sticky top-8 w-full lg:w-[200px] ml-auto",
                "lg:fixed lg:right-6 lg:top-1/2 lg:-translate-y-1/2",
                "z-40",
                className
            )}
        >
            <div>
                <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-3 px-2.5">
                    {title}
                </h4>
                <ScrollArea className="h-[500px] scroll-smooth">
                    <nav className="space-y-0.5">
                        {items.map((item) => (
                            <a
                                key={item.id}
                                href={`#${idPrefix}-${item.id}`}
                                onClick={(e) => handleItemClick(e, item)}
                                className={cn(
                                    "group flex items-center px-2.5 py-1.5 rounded-xl",
                                    "transition-all duration-200",
                                    "hover:bg-zinc-100 dark:hover:bg-zinc-800",
                                    "text-zinc-600 dark:text-zinc-400",
                                    visibleIds?.has(item.id) ? "opacity-100" : "opacity-50"
                                )}
                            >
                                <span className="text-xs font-medium mr-2 opacity-70">
                                    {typeof item.id === "number"
                                        ? item.id.toString().padStart(2, "0")
                                        : item.id}
                                </span>
                                <span className="text-sm font-medium truncate">
                                    {item.title}
                                </span>
                            </a>
                        ))}
                    </nav>
                </ScrollArea>
            </div>
        </div>
    );
}
 