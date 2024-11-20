"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "next-view-transitions";
import { useState } from "react";

export function BrowseComponentsButton() {
    const [isHovered, setIsHovered] = useState(false);

    const lightVariants = {
        initial: { pathLength: 0.01, pathOffset: 0, opacity: 0 },
        hover: {
            pathLength: 0.3,
            pathOffset: 1,
            opacity: 1,
            transition: {
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
            },
        },
    };

    const arrowVariants = {
        hover: {
            x: [0, 5, 0, 5, 0],
            rotate: [0, 5, -5, 5, 0],
            transition: {
                duration: 0.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop" as const,
            },
        },
    };

    return (
        <Link href="/docs" className="block">
            <div
                className="relative inline-flex items-center gap-2 px-6 py-3 
                    bg-zinc-900 dark:bg-zinc-100 
                    text-white dark:text-zinc-900 
                    hover:bg-zinc-800 dark:hover:bg-zinc-200 
                    rounded-xl overflow-hidden
                    shadow-lg shadow-zinc-900/20 dark:shadow-zinc-100/20"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative z-10 flex items-center gap-2">
                    <span className="font-medium">Browse Components</span>
                    <motion.div
                        animate={isHovered ? "hover" : "initial"}
                        variants={arrowVariants}
                    >
                        <ArrowRight className="w-4 h-4" />
                    </motion.div>
                </div>

                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        width="100%"
                        height="100%"
                        rx="12"
                        ry="12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeOpacity={isHovered ? "0.3" : "0"}
                        className="transition-opacity duration-300 text-zinc-400 dark:text-zinc-500"
                    />
                    <motion.rect
                        width="100%"
                        height="100%"
                        rx="12"
                        ry="12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        initial="initial"
                        animate={isHovered ? "hover" : "initial"}
                        variants={lightVariants}
                        className="text-white dark:text-zinc-900 [filter:drop-shadow(0_0_4px_rgba(255,255,255,0.8))_drop-shadow(0_0_7px_rgba(255,255,255,0.6))] dark:[filter:drop-shadow(0_0_4px_rgba(0,0,0,0.8))_drop-shadow(0_0_7px_rgba(0,0,0,0.6))]"
                    />
                </svg>
            </div>
        </Link>
    );
}
