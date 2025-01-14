"use client";

import { useActionState, useEffect, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Copy, Check, CheckCheck, Terminal } from "lucide-react";
import { copyComponent } from "@/lib/action";
import { cn } from "@/lib/utils";

export default function PreviewContent({
    link,
    prePath,
}: {
    link: string;
    prePath: string;
}) {
    const [isPending, startTransition] = useTransition();
    const [state, formAction] = useActionState(copyComponent, {
        error: "",
        content: "",
        success: false,
    });
    const [showLoginDialog, setShowLoginDialog] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isTerminalCopied, setIsTerminalCopied] = useState(false);

    const handleCopyClick = async () => {
        const [folder, filename] = link.split("/");

        startTransition(async () => {
            const formData = new FormData();
            formData.append("folder", folder);
            formData.append("fileName", filename);

            formAction(formData);
        });
    };

    const handleTerminalClick = () => {
        const [_, filename] = link.split("/");
        const COPY = `bunx shadcn@latest add ${prePath}/r/${filename}.json`;
        navigator.clipboard.writeText(COPY);
        setIsTerminalCopied(true);
        setTimeout(() => {
            setIsTerminalCopied(false);
        }, 2000);
    };

    useEffect(() => {
        if (state.error) {
            setShowLoginDialog(true);
        }
        if (state.success && state.content) {
            setIsCopied(true);
            navigator.clipboard.writeText(state.content);

            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        }
    }, [state]);

    return (
        <>
            <div
                className={cn("relative mt-4", "rounded-xl p-3")}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative flex items-center justify-between">
                    <a
                        href={`${prePath}/preview/${link}`}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(
                            "flex items-center gap-2",
                            "text-sm font-medium",
                            "text-zinc-800 dark:text-zinc-200",
                            "hover:text-zinc-600 dark:hover:text-zinc-400",
                            "transition-all duration-200 no-underline group"
                        )}
                    >
                        Live Preview
                        <ArrowUpRight
                            className={cn(
                                "h-4 w-4",
                                "transition-transform duration-200 group-hover:rotate-12"
                            )}
                        />
                    </a>

                    <div className="flex items-center gap-2">
                        <Button
                            onClick={handleTerminalClick}
                            variant="ghost"
                            size="sm"
                            className={cn(
                                "h-8 px-4 text-sm font-medium",
                                "bg-white dark:bg-zinc-800",
                                "text-zinc-900 dark:text-zinc-400",
                                "border border-zinc-200 dark:border-zinc-700",
                                "hover:bg-zinc-50 dark:hover:bg-zinc-700",
                                "hover:text-zinc-900 dark:hover:text-zinc-200",
                                "transition-all duration-200",
                                "group flex items-center gap-2",
                                "rounded-lg",
                                "shadow-sm",
                                isTerminalCopied && "scale-95"
                            )}
                        >
                            {isTerminalCopied ? (
                                <CheckCheck className="h-3.5 w-3.5 text-green-500" />
                            ) : (
                                <Terminal
                                    className={cn(
                                        "h-3.5 w-3.5",
                                        "transition-all duration-200",
                                        "group-hover:rotate-12"
                                    )}
                                />
                            )}
                            <span className={cn(
                                "transition-all duration-200",
                                isTerminalCopied && "text-green-500"
                            )}>
                                {isTerminalCopied ? "Copied!" : "Registry"}
                            </span>
                        </Button>

                        <form action={handleCopyClick}>
                            <Button
                                type="submit"
                                variant="ghost"
                                size="sm"
                                disabled={isPending}
                                className={cn(
                                    "h-8 w-[100px] px-4 text-sm font-medium",
                                    "bg-white dark:bg-zinc-800",
                                    "text-zinc-900 dark:text-zinc-400",
                                    "border border-zinc-200 dark:border-zinc-700",
                                    "hover:bg-zinc-50 dark:hover:bg-zinc-700",
                                    "hover:text-zinc-900 dark:hover:text-zinc-200",
                                    "transition-all duration-200",
                                    "group flex items-center gap-2",
                                    "rounded-lg",
                                    "shadow-sm",
                                    isCopied && "scale-95"
                                )}
                            >
                                {isCopied ? (
                                    <CheckCheck className="h-3.5 w-3.5 text-green-500" />
                                ) : (
                                    <Copy
                                        className={cn(
                                            "h-3.5 w-3.5",
                                            "transition-all duration-200",
                                            "group-hover:rotate-12"
                                        )}
                                    />
                                )}
                                <span
                                    className={cn(
                                        "transition-all duration-200",
                                        isCopied && "text-green-500"
                                    )}
                                >
                                    {isCopied ? "Copied!" : "Copy"}
                                </span>
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
