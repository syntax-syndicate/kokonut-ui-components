import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { CarouselItem } from "@/components/client-carousel";

interface CategoryGridProps {
    items: CarouselItem[];
}

// Mobile-optimized width classes
const WIDTH_CLASSES = {
    3: "w-[calc(100vw-2rem)] max-w-[500px]",
    2: "w-[calc(100vw-2rem)] max-w-[500px]",
    1: "w-[calc(100vw-2rem)] max-w-[400px]",
} as const;

const COMPONENT_SIZES = {
    wide: "w-full aspect-[16/9]", // More mobile-friendly aspect ratio
    tall: "w-full aspect-[3/4]",  // Slightly shorter for mobile
    default: "w-full aspect-[4/3]", // More compact for mobile
} as const;

export function CategoryGrid({ items }: CategoryGridProps) {
    // Helper functions for consistent sizing
    const getWidthClasses = (span: 1 | 2 | 3 = 1) => WIDTH_CLASSES[span];
    const getComponentClasses = (
        size: "default" | "wide" | "tall" = "default"
    ) => COMPONENT_SIZES[size];

    return (
        <div className="grid grid-cols-1 gap-4">
            {items.map((item) => (
                <div
                    key={item.id}
                    className={`relative p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 
                             bg-white dark:bg-zinc-900 mx-auto ${getWidthClasses(
                                 item.span
                             )}`}
                >
                    <div
                        className={`flex items-center justify-center 
                                  rounded-lg overflow-hidden mb-3 ${getComponentClasses(
                                      item.size
                                  )}`}
                    >
                        {item.component}
                    </div>
                    <Link
                        href={item.href}
                        className="flex items-center justify-between pt-3 
                                 border-t border-zinc-200 dark:border-zinc-800"
                    >
                        <div>
                            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                                {item.title}
                            </h3>
                            <p className="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400">
                                {item.count} components
                            </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zinc-400 dark:text-zinc-600" />
                    </Link>
                </div>
            ))}
        </div>
    );
}
