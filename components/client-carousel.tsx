"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { CarouselItem } from "./carousel-item";

import type { CarouselItemType } from "./carousel-wrapper";

export function InfiniteCarousel({ items }: { items: CarouselItemType[] }) {
    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            dragFree: false,
            align: "start",
            startIndex: 0,
            containScroll: false,
            skipSnaps: false,
            inViewThreshold: 0.7,
            direction: "ltr",
            watchDrag: false, // Disable drag watching
            axis: "x",
            active: true, // Disable all internal event listeners
        },
        [
            AutoScroll({
                speed: 0.5,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
                startDelay: 0,
                playOnInit: true,
                // rootNode: (emblaRoot) => emblaRoot.parentElement,
            }),
        ]
    );

    return (
        <div
            className="relative overflow-hidden py-4 content-visibility-auto"
            style={{ touchAction: "none" }}
        >
            <div
                className="overflow-hidden pl-4 sm:pl-6"
                ref={emblaRef}
                style={{
                    pointerEvents: "none",
                    userSelect: "none",
                    touchAction: "none",
                }}
            >
                <div className="flex gap-4 sm:gap-6 gpu-accelerated">
                    {items.map((item, index) => (
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
