"use client";

import { useState } from "react";
import { PreviewModal } from "./PreviewModal";
import { Expand } from "lucide-react";
import { Button } from "./ui/button";

interface PreviewButtonProps {
    children: React.ReactNode;
    fileName: string;
}

export function PreviewButton({ children, fileName }: PreviewButtonProps) {
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    return (
        <>
            <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsPreviewOpen(true)}
                className="hidden sm:flex hover:bg-zinc-100 dark:hover:bg-zinc-900 gap-2"
            >
                <span>Click to Preview</span>
                <Expand className="h-4 w-4" />
            </Button>

            <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsPreviewOpen(true)}
                className="sm:hidden hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
                <Expand className="h-4 w-4" />
            </Button>

            <PreviewModal
                isOpen={isPreviewOpen}
                onClose={() => setIsPreviewOpen(false)}
                fileName={fileName}
            >
                {children}
            </PreviewModal>
        </>
    );
}
