"use client";

import { ArrowRight } from "lucide-react";
import type { CarouselItemType } from "@/components/landing/carousel-wrapper";

export const WIDTH_CLASSES = {
    3: "w-[600px] md:w-[700px] lg:w-[800px]",
    2: "w-[400px] md:w-[500px] lg:w-[600px]",
    1: "w-[300px] md:w-[350px] lg:w-[400px]",
} as const;

export const COMPONENT_SIZES = {
    wide: "w-full aspect-[2/1]",
    tall: "w-full aspect-[4/3]",
    default: "w-full aspect-[3/2]",
} as const;

export function getWidthClasses(span: 1 | 2 | 3 = 1) {
    return WIDTH_CLASSES[span];
}

export function getComponentClasses(
    size: "default" | "wide" | "tall" = "default"
) {
    return COMPONENT_SIZES[size];
}

interface CarouselItemProps {
    item: CarouselItemType;
    index: number;
}

const baseItemStyles = {
    userSelect: "none" as const,
    touchAction: "none" as const,
};

const itemBaseClasses = `relative p-3 sm:p-4 h-full rounded-xl 
    border border-zinc-200 dark:border-zinc-800 
    bg-white dark:bg-zinc-900/80 backdrop-blur-sm
    transition-colors duration-200 
    flex flex-col overflow-hidden
    pointer-events-none
    shadow-sm hover:shadow-md`;

const footerBaseClasses = `flex items-center justify-between mt-auto pt-3.5
    border-t border-zinc-100 dark:border-zinc-800/50 -mx-4 px-4
    bg-gradient-to-b from-transparent to-zinc-50/50 dark:to-zinc-900/50`;

export function CarouselItem({ item }: CarouselItemProps) {
    const containerClasses = `flex-shrink-0 ${getWidthClasses(
        item.span
    )} select-none touch-none pointer-events-none`;

    const componentClasses = `flex-1 flex items-center justify-center mb-3 
        rounded-lg overflow-hidden 
        ${getComponentClasses(item.size)}`;

    return (
        <div className={containerClasses} style={baseItemStyles}>
            <div className={itemBaseClasses}>
                <div className={componentClasses}>
                    <div className="w-full h-full flex items-center justify-center">
                        {item.component}
                    </div>
                </div>
                <div className={footerBaseClasses}>
                    <div className="flex flex-col gap-1.5">
                        <h3
                            className="text-base font-semibold tracking-tight 
                            text-zinc-900 dark:text-zinc-50"
                        >
                            {item.title}
                        </h3>
                        <span
                            className="inline-flex items-center px-2.5 py-0.5 text-xs 
                            font-medium rounded-full w-fit
                            bg-gradient-to-r from-zinc-100 to-zinc-200 
                            dark:from-zinc-800 dark:to-zinc-900
                            text-zinc-700 dark:text-zinc-300
                            border border-zinc-200/50 dark:border-zinc-700/50"
                        >
                            {item.count} components
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
