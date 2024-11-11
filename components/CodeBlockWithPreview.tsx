"use client";

import { CodeBlock } from "@/components/code-block";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface CodeBlockWithPreviewProps {
    code: string;
    language: string;
}

export default function CodeBlockWithPreview({
    code,
    language,
}: CodeBlockWithPreviewProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const previewLines = code.split("\n").slice(0, 4).join("\n") + "\n...";

    return (
        <div className="relative">
            <CodeBlock
                code={isExpanded ? code : previewLines}
                language={language}
            />
            <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="absolute bottom-2 right-2"
            >
                {isExpanded ? "Show Less" : "Show More"}
            </Button>
        </div>
    );
}
