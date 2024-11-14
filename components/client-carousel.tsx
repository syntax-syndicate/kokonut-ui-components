"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

export interface CarouselItem {
    id: number;
    title: string;
    href: string;
    component: React.ReactNode;
    count: number;
    span?: 1 | 2 | 3;
    size?: "default" | "wide" | "tall";
}

interface InfiniteCarouselProps {
    items: CarouselItem[];
}

// Extract width and component size configurations
const WIDTH_CLASSES = {
    3: "w-[600px] md:w-[700px] lg:w-[800px]",
    2: "w-[400px] md:w-[500px] lg:w-[600px]",
    1: "w-[300px] md:w-[350px] lg:w-[400px]",
} as const;

const COMPONENT_SIZES = {
    wide: "w-full aspect-[2/1]",
    tall: "w-full aspect-[4/3]",
    default: "w-full aspect-[3/2]",
} as const;

export function InfiniteCarousel({ items }: InfiniteCarouselProps) {
    const displayItems = [...items, ...items];

    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            dragFree: false,
            align: "start",
            startIndex: 0,
            containScroll: false,
            skipSnaps: true,
            inViewThreshold: 0.7,
        },
        [
            AutoScroll({
                speed: 1,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
                startDelay: 0,
            }),
        ]
    );

    // Simplified helper functions using the maps
    const getWidthClasses = (span: 1 | 2 | 3 = 1) => WIDTH_CLASSES[span];
    const getComponentClasses = (
        size: "default" | "wide" | "tall" = "default"
    ) => COMPONENT_SIZES[size];

    // Extract CarouselItem component for better readability
    const CarouselItem = ({
        item,
        index,
    }: {
        item: CarouselItem;
        index: number;
    }) => (
        <div
            key={`${item.id}-${item.title}-${index}`}
            className={`flex-shrink-0 ${getWidthClasses(item.span)}`}
        >
            <div className="group relative p-3 sm:p-4 h-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all duration-200 flex flex-col overflow-hidden">
                <div
                    className={`flex-1 flex items-center justify-center mb-3 rounded-lg overflow-hidden ${getComponentClasses(
                        item.size
                    )}`}
                >
                    <div className="pointer-events-auto w-full h-full flex items-center justify-center">
                        {item.component}
                    </div>
                </div>
                <Link
                    href={item.href}
                    className="flex items-center justify-between mt-auto pt-3 border-t border-zinc-200 dark:border-zinc-800 group/link -mx-4 px-4"
                >
                    <div>
                        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 group-hover/link:text-emerald-500 dark:group-hover/link:text-emerald-400 transition-colors">
                            {item.title}
                        </h3>
                        <p className="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400">
                            {item.count} components
                        </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-zinc-400 dark:text-zinc-600 transition-all duration-300 group-hover/link:text-emerald-700 dark:group-hover/link:text-emerald-400 group-hover/link:rotate-[-35deg]" />
                </Link>
            </div>
        </div>
    );

    return (
        <div className="relative overflow-hidden py-4">
            <div className={`overflow-hidden pl-4 sm:pl-6`} ref={emblaRef}>
                <div className="flex gap-4 sm:gap-6">
                    {displayItems.map((item, index) => (
                        <CarouselItem
                            key={`${item.id}-${index}`}
                            item={item}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
