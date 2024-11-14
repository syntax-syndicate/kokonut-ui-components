"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { CarouselItem } from "./carousel-item";
import type { CarouselItemType } from "./carousel-wrapper";

const autoScrollOptions = {
    speed: 0.8,
    stopOnInteraction: false,
    stopOnMouseEnter: false,
    startDelay: 0,
    playOnInit: true,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
};

export function InfiniteCarousel({ items }: { items: CarouselItemType[] }) {
    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            dragFree: false,
            align: "start",
            containScroll: false,
            skipSnaps: false,
            inViewThreshold: 1,
            direction: "ltr" as const,
            watchDrag: false,
            axis: "x" as const,
        },
        [AutoScroll(autoScrollOptions)]
    );

    return (
        <div className="relative overflow-hidden py-4">
            <div
                className="overflow-hidden pl-4 sm:pl-6"
                ref={emblaRef}
                style={{ touchAction: "none" }}
            >
                <div className="flex gap-4 sm:gap-6 will-change-transform">
                    {items.map((item, index) => (
                        <CarouselItem
                            key={`${item.id}`}
                            item={item}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
