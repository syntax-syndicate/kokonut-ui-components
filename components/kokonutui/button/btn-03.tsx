"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { Magnet } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface Btn03Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    particleCount?: number;
    attractRadius?: number;
}

interface Particle {
    id: number;
    x: number;
    y: number;
}

export default function Btn03({
    className,
    particleCount = 12,
    attractRadius = 50,
    ...props
}: Btn03Props) {
    const isMobile = useIsMobile();
    const [isAttracting, setIsAttracting] = useState(false);
    const [particles, setParticles] = useState<Particle[]>([]);
    const particlesControl = useAnimation();

    // Reduce particle count on mobile
    const actualParticleCount = isMobile
        ? Math.min(6, particleCount)
        : particleCount;

    // Generate random particles with memoization
    useEffect(() => {
        const newParticles = Array.from(
            { length: actualParticleCount },
            (_, i) => ({
                id: i,
                x: (Math.random() * 360 - 180) * (isMobile ? 0.7 : 1),
                y: (Math.random() * 360 - 180) * (isMobile ? 0.7 : 1),
            })
        );
        setParticles(newParticles);
    }, [actualParticleCount, isMobile]);

    // Optimized handler for both mouse and touch events
    const handleInteractionStart = useCallback(() => {
        if (isMobile) return;
        setIsAttracting(true);
        particlesControl.start({
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 10,
            },
        });
    }, [particlesControl, isMobile]);

    const handleInteractionEnd = useCallback(() => {
        if (isMobile) return;
        setIsAttracting(false);
        particlesControl.start((i) => ({
            x: particles[i]?.x || 0,
            y: particles[i]?.y || 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        }));
    }, [particlesControl, particles, isMobile]);

    return (
        <Button
            className={cn(
                "min-w-40 relative",
                !isMobile && "touch-none",
                "bg-violet-100 dark:bg-violet-900",
                "hover:bg-violet-200 dark:hover:bg-violet-800",
                "text-violet-600 dark:text-violet-300",
                "border border-violet-300 dark:border-violet-700",
                "transition-all duration-300",
                className
            )}
            onMouseEnter={handleInteractionStart}
            onMouseLeave={handleInteractionEnd}
            onTouchStart={isMobile ? undefined : handleInteractionStart}
            onTouchEnd={isMobile ? undefined : handleInteractionEnd}
            {...props}
        >
            {!isMobile &&
                particles.map((_, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        initial={{
                            x: particles[index].x,
                            y: particles[index].y,
                        }}
                        animate={particlesControl}
                        className={cn(
                            "absolute w-1.5 h-1.5 rounded-full",
                            "bg-violet-400 dark:bg-violet-300",
                            "transition-opacity duration-300",
                            isAttracting ? "opacity-100" : "opacity-40"
                        )}
                        style={{
                            willChange: "transform",
                            transform: "translateZ(0)",
                        }}
                    />
                ))}
            <span className="relative w-full flex items-center justify-center gap-2">
                <Magnet
                    className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        isAttracting && !isMobile && "scale-110"
                    )}
                />
                {isMobile
                    ? "Magnetic Button"
                    : isAttracting
                    ? "Attracting"
                    : "Hover me"}
            </span>
        </Button>
    );
}
