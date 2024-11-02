"use client";

import { useState, useTransition } from "react";
import { CopyOverlay } from "./copy-overlay";
import { AnimatePresence } from "framer-motion";
import { CopyButton } from "./copy-button";

interface CopyWrapperProps {
    text: string;
}

export function CopyWrapper({ text }: CopyWrapperProps) {
    const [isLoading, startTransition] = useTransition();

    const handleCopy = async () => {
        try {
            startTransition(async () => {
                const res = await fetch(`/api/components?fileName=${text}`, {
                    cache: "force-cache",
                });
                const data = await res.json();
                if (data.text) {
                    await navigator.clipboard.writeText(data.text);
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                }
            });
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <>
            <CopyButton onClick={handleCopy} isCopied={isLoading} />
            <AnimatePresence>
                <CopyOverlay show={isLoading} />
            </AnimatePresence>
        </>
    );
}
