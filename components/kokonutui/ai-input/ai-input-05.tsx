"use client";

import { CornerRightUp } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

interface TypewriterState {
    text: string;
    index: number;
    isComplete: boolean;
}

const INITIAL_TEXT = "What can i do for you?";
const SPEED = 30;
const RESET_DELAY = 1000;
const MIN_HEIGHT = 56;

export default function AIInput_05() {
    const [inputValue, setInputValue] = useState("");
    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: MIN_HEIGHT,
        maxHeight: 200,
    });
    const [typewriter, setTypewriter] = useState<TypewriterState>({
        text: "",
        index: 0,
        isComplete: false,
    });

    // Memoize handlers
    const handleSubmit = useCallback(() => {
        setInputValue("");
        adjustHeight(true);
    }, [adjustHeight]);

    // Optimize typewriter effect with RAF
    useEffect(() => {
        if (typewriter.index >= INITIAL_TEXT.length) {
            const resetTimer = setTimeout(() => {
                setTypewriter({ text: "", index: 0, isComplete: false });
            }, RESET_DELAY);
            setTypewriter((prev) => ({ ...prev, isComplete: true }));
            return () => clearTimeout(resetTimer);
        }

        const animate = () => {
            setTypewriter((prev) => ({
                text: INITIAL_TEXT.slice(0, prev.index + 1),
                index: prev.index + 1,
                isComplete: false,
            }));
        };

        const rafId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafId);
    }, [typewriter.index]);

    return (
        <div className="w-full py-4">
            <div className="text-2xl p-4 bg-background min-h-[100px] flex items-center justify-center">
                <p className="text-black dark:text-white font-semibold">
                    {typewriter.text}
                    {!typewriter.isComplete && (
                        <span className="animate-blink">|</span>
                    )}
                </p>
            </div>

            <div className="relative max-w-xl w-full mx-auto">
                <Textarea
                    id="ai-input-05"
                    placeholder="Ask me anything!"
                    className="max-w-xl bg-black/5 dark:bg-white/5 w-full rounded-3xl pl-4 pr-12 placeholder:text-black/70 dark:placeholder:text-white/70 border-none text-black dark:text-white resize-none text-wrap min-h-[40px] py-4"
                    ref={textareaRef}
                    value={inputValue}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleSubmit();
                        }
                    }}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                        adjustHeight();
                    }}
                />
                <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl bg-black/5 dark:bg-white/5 py-1 px-1"
                    type="button"
                    onClick={handleSubmit}
                >
                    <CornerRightUp
                        className={cn(
                            "w-4 h-4 transition-opacity dark:text-white",
                            {
                                "opacity-100": inputValue,
                                "opacity-30": !inputValue,
                            }
                        )}
                    />
                </button>
            </div>
        </div>
    );
}
