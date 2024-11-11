"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Smile } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

interface ReactionType {
    emoji: string;
    label: string;
    count: number;
}

const initialReactions: ReactionType[] = [
    { emoji: "👍", label: "Like", count: 0 },
    { emoji: "❤️", label: "Love", count: 0 },
    { emoji: "😂", label: "Haha", count: 0 },
    { emoji: "🎉", label: "Celebrate", count: 0 },
    { emoji: "🤔", label: "Thinking", count: 0 },
    { emoji: "😢", label: "Sad", count: 0 },
];

export default function Input_09() {
    const [reactions, setReactions] =
        useState<ReactionType[]>(initialReactions);

    function handleReaction(selectedEmoji: string) {
        setReactions((prev) =>
            prev.map((reaction) =>
                reaction.emoji === selectedEmoji
                    ? { ...reaction, count: reaction.count === 1 ? 0 : 1 }
                    : reaction
            )
        );
    }

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-1.5">
                {reactions.map(
                    ({ emoji, count, label }) =>
                        count > 0 && (
                            <button
                                key={emoji}
                                type="button"
                                onClick={() => handleReaction(emoji)}
                                className={cn(
                                    "inline-flex items-center gap-1.5 px-2.5 py-1",
                                    "rounded-full text-sm",
                                    "bg-zinc-100 hover:bg-zinc-200",
                                    "dark:bg-zinc-800 dark:hover:bg-zinc-700",
                                    "transition-all transform active:scale-95"
                                )}
                            >
                                <span>{emoji}</span>
                                <span className="text-zinc-600 dark:text-zinc-400">
                                    {count}
                                </span>
                            </button>
                        )
                )}

                <Popover>
                    <PopoverTrigger asChild>
                        <button
                            type="button"
                            className={cn(
                                "inline-flex items-center gap-1.5 px-2.5 py-1",
                                "rounded-full text-sm",
                                "bg-zinc-100 hover:bg-zinc-200",
                                "dark:bg-zinc-800 dark:hover:bg-zinc-700",
                                "transition-all transform active:scale-95"
                            )}
                        >
                            <Smile className="w-4 h-4" />
                            <span>React</span>
                        </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[280px] p-2">
                        <div className="grid grid-cols-3 gap-1">
                            {reactions.map(({ emoji, label, count }) => (
                                <button
                                    key={emoji}
                                    type="button"
                                    onClick={() => handleReaction(emoji)}
                                    className={cn(
                                        "flex flex-col items-center gap-1 p-2",
                                        "rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800",
                                        "transition-colors",
                                        count > 0 &&
                                            "bg-zinc-100 dark:bg-zinc-800"
                                    )}
                                >
                                    <span className="text-2xl">{emoji}</span>
                                    <span className="text-xs text-zinc-600 dark:text-zinc-400">
                                        {label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
}
