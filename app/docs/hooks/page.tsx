import { ViewHooks } from "@/components/hooks/ViewHooks";
import type { Metadata } from "next";
const hookExamples = [
    {
        id: 1,
        title: "useAutoResizeTextarea",
        description:
            "A hook that automatically resizes a textarea based on its content",
        fileName: "use-auto-resize-textarea.ts",
    },
    {
        id: 2,
        title: "useCopyToClipboard",
        description: "A hook that copies text to the clipboard",
        fileName: "use-copy-to-clipboard.ts",
    },
    {
        id: 3,
        title: "useMobile",
        description:
            "A hook that returns true if the user is on a mobile device",
        fileName: "use-mobile.ts",
    },
    {
        id: 4,
        title: "useClickOutside",
        description: "A hook that handles click outside events",
        fileName: "use-click-outside.ts",
    },
];

export const metadata: Metadata = {
    title: "Custom Hooks",
    description:
        "A collection of custom hooks to use and customize. Built with Tailwind CSS and Shadcn.",
};

export default function HooksPage() {
    return (
        <div className="flex flex-col mt-4 gap-4 md:gap-10 max-w-4xl relative">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400">
                    Custom Hooks
                </h1>
                <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
                    These hooks are automatically added to components that need
                    them, but can also be used independently if you want to.
                </p>
            </div>

            <ViewHooks hooks={hookExamples} />
        </div>
    );
}
