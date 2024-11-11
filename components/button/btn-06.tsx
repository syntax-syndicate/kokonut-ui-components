"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

interface Btn06Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    textToCopy: string;
    successDuration?: number;
}

export default function Btn06({
    className,
    textToCopy,
    successDuration = 1000,
    ...props
}: Btn06Props) {
    const { isCopied, copyToClipboard } = useCopyToClipboard({
        timeout: successDuration,
    });

    function handleCopy() {
        if (isCopied) return;
        copyToClipboard(textToCopy);
    }

    return (
        <Button
            className={cn(
                "min-w-40 relative group",
                "bg-emerald-50 dark:bg-emerald-950",
                "hover:bg-emerald-100 dark:hover:bg-emerald-900",
                "text-emerald-600 dark:text-emerald-300",
                "border border-emerald-200 dark:border-emerald-800",
                isCopied && "bg-emerald-100 dark:bg-emerald-900",
                className
            )}
            onClick={handleCopy}
            {...props}
        >
            <div
                className={cn(
                    "w-full flex items-center justify-center gap-2",
                    "transition-transform duration-200",
                    isCopied && "scale-105"
                )}
            >
                {isCopied ? (
                    <>
                        <Check className="w-4 h-4 text-emerald-500" />
                        <span>Copied!</span>
                    </>
                ) : (
                    <>
                        <Copy
                            className={cn(
                                "w-4 h-4 transition-transform duration-200",
                                "group-hover:scale-110"
                            )}
                        />
                        <span>Copy code</span>
                    </>
                )}
            </div>
        </Button>
    );
}
