"use client";

import { useState } from "react";
import { CopyOverlay } from "./copy-overlay";
import { AnimatePresence } from "framer-motion";
import { CopyButton } from "./copy-button";
import { Terminal } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

interface CopyWrapperProps {
    fileName: string;
    text: string;
}

const prePath = process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : `https://${process.env.NEXT_PUBLIC_SITE_URL}`;

export function CopyWrapper({ fileName, text }: CopyWrapperProps) {
    const [showOverlay, setShowOverlay] = useState(false);
    const { copyToClipboard } = useCopyToClipboard({
        timeout: 1000,
        onCopy: () => {
            setShowOverlay(true);
            setTimeout(() => {
                setShowOverlay(false);
            }, 1000);
        },
    });

    const handleCopy = () => {
        copyToClipboard(text);
    };

    const handleCLI = () => {
        copyToClipboard(
            `bunx shadcn@latest add ${prePath}/registry/${fileName?.replace(
                ".tsx",
                ".json"
            )}`
        );
    };

    return (
        <>
            <div className="flex items-center gap-1">
                <button
                    type="button"
                    onClick={handleCLI}
                    className="inline-flex items-center ml-2 px-3 py-2 text-sm rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                >
                    <Terminal className="w-4 h-4" />
                </button>
                <CopyButton onClick={handleCopy} />
            </div>
            <AnimatePresence>
                <CopyOverlay show={showOverlay} />
            </AnimatePresence>
        </>
    );
}
