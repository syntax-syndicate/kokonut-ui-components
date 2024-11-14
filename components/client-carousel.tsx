"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { CarouselItem } from "./carousel-item";
import type { CarouselItemType } from "./carousel-wrapper";
import { useEffect, useRef } from "react";

const autoScrollOptions = {
    speed: 0.8,
    stopOnInteraction: false,
    stopOnMouseEnter: false,
    startDelay: 0,
    playOnInit: false,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
};

export function InfiniteCarousel({ items }: { items: CarouselItemType[] }) {
    const [emblaRef, emblaApi] = useEmblaCarousel(
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

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !emblaApi) return;

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        emblaApi.plugins().autoScroll.play();
                    } else {
                        emblaApi.plugins().autoScroll.stop();
                    }
                }
            },
            [0.2]
        );

        observer.observe(containerRef.current);

        return () => {
            observer.disconnect();
        };
    }, [emblaApi]);

    return (
        <div className="relative overflow-hidden py-4" ref={containerRef}>
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
