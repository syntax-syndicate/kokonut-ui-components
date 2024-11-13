"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

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

export function InfiniteCarousel({ items }: InfiniteCarouselProps) {
    const isMobile = useIsMobile();
    const displayItems = isMobile ? items.slice(0, 3) : items;
    const [width, setWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const calculateWidth = () => {
            if (!containerRef.current) return;
            
            // Get the actual width of the container
            const itemWidth = containerRef.current.firstElementChild?.clientWidth || 0;
            const gap = isMobile ? 16 : 24;
            const totalWidth = (itemWidth + gap) * displayItems.length;
            
            setWidth(totalWidth);
        };

        calculateWidth();
        window.addEventListener('resize', calculateWidth);
        return () => window.removeEventListener('resize', calculateWidth);
    }, [displayItems, isMobile]);

    const getWidthClasses = (span?: 1 | 2 | 3) => {
        switch (span) {
            case 3:
                return "w-[600px] md:w-[700px] lg:w-[800px]";
            case 2:
                return "w-[400px] md:w-[500px] lg:w-[600px]";
            default:
                return "w-[300px] md:w-[350px] lg:w-[400px]";
        }
    };

    const getComponentClasses = (size?: "default" | "wide" | "tall") => {
        switch (size) {
            case "wide":
                return "w-full aspect-[2/1]";
            case "tall":
                return "w-full aspect-[4/3]";
            default:
                return "w-full aspect-[3/2]";
        }
    };

    return (
        <div className="relative overflow-hidden py-4">
            <div 
                ref={containerRef}
                className={cn(
                    "flex gap-4 sm:gap-6",
                    // Using CSS animation instead of Framer Motion
                    "animate-carousel",
                    // Custom style for the animation
                    "[--carousel-width:0px]" // Will be set via inline style
                )}
                style={{ 
                    '--carousel-width': `${width}px`
                } as React.CSSProperties}
            >
                {displayItems.map((item) => (
                    <div
                        key={item.id}
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
                ))}
            </div>
        </div>
    );
}
