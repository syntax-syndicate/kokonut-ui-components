"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Command } from "lucide-react";
import { useState } from "react";

export default function Btn09() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Button
            className={cn(
                "relative h-9 w-9 p-0",
                "rounded-lg overflow-hidden",
                "bg-gradient-to-b from-zinc-50 to-zinc-100",
                "dark:from-zinc-800 dark:to-zinc-900",
                "border border-zinc-200 dark:border-zinc-800",
                "hover:border-zinc-300 dark:hover:border-zinc-700",
                "transition-all duration-300 ease-out",
                "group"
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Command
                className={cn(
                    "w-4 h-4",
                    "text-zinc-600 dark:text-zinc-400",
                    "transition-all duration-300",
                    "group-hover:scale-110",
                    "group-hover:rotate-[-4deg]",
                    "group-active:scale-95"
                )}
            />
            <span
                className={cn(
                    "absolute inset-0",
                    "bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-indigo-500/0",
                    "translate-x-[-100%]",
                    "group-hover:translate-x-[100%]",
                    "transition-transform duration-500",
                    "ease-out"
                )}
            />
        </Button>
    );
}
