import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
    onClick: () => void;
    isCopied: boolean;
}

export function CopyButton({ onClick, isCopied }: CopyButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="relative flex items-center gap-1 px-2 py-0.5 rounded-lg text-xs
                bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700
                text-zinc-600 dark:text-zinc-400 transition-colors"
        >
            {isCopied ? (
                <>
                    <Check className="w-3 h-3" />
                    Copied!
                </>
            ) : (
                <>
                    <Copy className="w-3 h-3" />
                    Copy
                </>
            )}
        </button>
    );
}
