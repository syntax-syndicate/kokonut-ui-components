"use client";

import { cn } from "@/lib/utils";
import { Blocks } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";
import Nextjs from "../icons/nextjs";
import ReactIcon from "../icons/react";
const FEATURES = [
    {
        id: 1,
        title: (
            <div className="flex items-center gap-1.5">
                <svg viewBox="0 0 54 33" className="w-4 h-4">
                    <g clipPath="url(#prefix__clip0)">
                        <path
                            fill="#38bdf8"
                            fillRule="evenodd"
                            d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                            clipRule="evenodd"
                        />
                    </g>
                </svg>
                Tailwind CSS
            </div>
        ),
        color: "text-blue-600 dark:text-blue-400",
        description: "Built with the most popular utility-first CSS framework",
    },
    {
        id: 2,
        title: (
            <div className="flex items-center gap-1.5">
                <Blocks className="w-4 h-4" />
                Components
            </div>
        ),
        color: "text-zinc-800 dark:text-white",
        description: "100+ customizable components and templates",
    },
    {
        id: 3,
        title: (
            <div className="flex items-center gap-1.5">
                <Image
                    src="/motion.png"
                    alt="Animation"
                    width={16}
                    height={16}
                />
                Animation
            </div>
        ),
        color: "text-yellow-500 dark:text-yellow-400",
        description: "Animation made with Motion",
    },
    {
        id: 4,
        title: (
            <div className="flex items-center gap-1.5">
                <Nextjs className="w-4 h-4" />
                <ReactIcon className="w-4 h-4" />
                Next.js & React
            </div>
        ),
        color: "text-blue-500 dark:text-blue-400",
        description: "Built for Next.js and React",
    },
];

export default function Features() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <div className="w-full max-w-3xl flex flex-col items-center gap-8 z-100 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full sm:px-0">
                {FEATURES.map((feature) => (
                    <motion.div
                        key={feature.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.02 }}
                        onHoverStart={() => setHoveredId(feature.id)}
                        onHoverEnd={() => setHoveredId(null)}
                        transition={{
                            duration: 0.5,
                            delay: feature.id * 0.4,
                            ease: "easeOut",
                        }}
                    >
                        <div className="relative p-3 sm:p-4 rounded-lg sm:rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-white/5 transition-colors duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/80">
                            <motion.div
                                animate={{
                                    color:
                                        hoveredId === feature.id
                                            ? feature.color
                                            : "",
                                }}
                                className="absolute -inset-[0.5px] rounded-xl bg-linear-to-r from-transparent via-zinc-300/20 to-transparent dark:via-zinc-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500"
                            />
                            <h3
                                className={cn(
                                    "text-xs sm:text-sm font-medium mb-1 sm:mb-2 relative",
                                    feature.color
                                )}
                            >
                                {feature.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 relative text-left">
                                {feature.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
