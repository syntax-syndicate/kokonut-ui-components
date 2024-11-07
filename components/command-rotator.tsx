"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CommandRotatorProps {
    baseCommand: string;
}

export function CommandRotator({ baseCommand }: CommandRotatorProps) {
    const [commandIndex, setCommandIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const commandPrefixes = ["bunx", "npx"];

    useEffect(() => {
        const timer = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCommandIndex((prev) => (prev + 1) % commandPrefixes.length);
                setIsTransitioning(false);
            }, 150);
        }, 1500);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="px-4 py-2 text-sm font-medium rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <span className="inline-block w-[32px]">
                <span
                    className={cn(
                        "inline-block transition-all duration-300 text-purple-500 dark:text-purple-400",
                        isTransitioning
                            ? "opacity-0 -translate-y-1"
                            : "opacity-100 translate-y-0"
                    )}
                >
                    {commandPrefixes[commandIndex]}
                </span>
            </span>
            <span className="text-zinc-500 dark:text-zinc-400">
                {" "}
                shadcn@latest add https://kokonut.dev/
            </span>
            <span className="text-orange-500 dark:text-orange-400">
                registry/my-component.json
            </span>
        </div>
    );
}
