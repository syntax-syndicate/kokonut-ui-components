"use client";

import { CodeBlock } from "@/components/code-block";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogClose,
    DialogDescription,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import Btn09 from "./kokonutui/button/btn-09";
import { cn } from "@/lib/utils";

interface CodeBlockModalPreviewProps {
    code: string;
    language: string;
    title?: string;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function CodeBlockModalPreview({
    code,
    language,
    title = "Code Preview",
    isOpen,
    onOpenChange,
}: CodeBlockModalPreviewProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-3xl max-h-[80vh] flex flex-col">
                <DialogHeader className="flex flex-row items-center justify-between flex-shrink-0">
                    <div>
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription className="sr-only">
                            Code preview window showing the component source
                            code
                        </DialogDescription>
                    </div>
                    <DialogClose asChild>
                        <Btn09>
                            <X
                                className={cn(
                                    "w-4 h-4",
                                    "text-zinc-600 dark:text-zinc-400",
                                    "transition-all duration-300",
                                    "group-hover:scale-110",
                                    "group-hover:rotate-[-4deg]",
                                    "group-active:scale-95"
                                )}
                            />
                            <span className="text-sm text-zinc-600 dark:text-zinc-400">
                                Close
                            </span>
                        </Btn09>
                    </DialogClose>
                </DialogHeader>
                <div className="mt-4 flex-1 overflow-y-auto">
                    <CodeBlock code={code} language={language} />
                </div>
            </DialogContent>
        </Dialog>
    );
}
