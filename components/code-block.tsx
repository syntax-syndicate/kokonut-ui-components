"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { highlight } from "@/lib/shared";
import { CheckCheck, Copy } from "lucide-react";

interface CodeBlockProps {
    code: string | string[];
    showPackageManager?: boolean;
    language?: string;
    initial?: JSX.Element;
}

const PACKAGE_MANAGERS = {
    npm: "npx",
    pnpm: "pnpm dlx",
    bun: "bunx",
} as const;

type PackageManager = keyof typeof PACKAGE_MANAGERS;

export function CodeBlock({
    code,
    showPackageManager = false,
    language = "typescript",
    initial,
}: CodeBlockProps) {
    const { theme } = useTheme();
    const [hasCopied, setHasCopied] = useState(false);
    const [activeManager, setActiveManager] = useState<PackageManager>("bun");
    const [nodes, setNodes] = useState(initial);

    const codeString = Array.isArray(code) ? code.join("\n") : code;

    const displayCode = showPackageManager
        ? `${PACKAGE_MANAGERS[activeManager]} ${codeString}`
        : codeString;

    useEffect(() => {
        if (theme) {
            void highlight(
                displayCode,
                language,
                theme as "light" | "dark"
            ).then(setNodes);
        }
    }, [displayCode, language, theme]);

    function handleCopy() {
        navigator.clipboard.writeText(displayCode);
        setHasCopied(true);
        setTimeout(() => setHasCopied(false), 1000);
    }

    return (
        <div className="space-y-1.5">
            {showPackageManager && (
                <Tabs
                    defaultValue="bun"
                    value={activeManager}
                    onValueChange={(value) =>
                        setActiveManager(value as PackageManager)
                    }
                    className="w-fit"
                >
                    <TabsList className="h-10 bg-zinc-100 dark:bg-zinc-800/50">
                        <TabsTrigger
                            value="bun"
                            className="text-sm data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800"
                        >
                            bun
                        </TabsTrigger>
                        <TabsTrigger
                            value="pnpm"
                            className="text-sm data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800"
                        >
                            pnpm
                        </TabsTrigger>
                        <TabsTrigger
                            value="npm"
                            className="text-sm data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800"
                        >
                            npm
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            )}

            <div
                onClick={handleCopy}
                className="relative flex items-start gap-2 bg-zinc-50 dark:bg-zinc-900 px-3 md:px-4 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 cursor-pointer group hover:bg-white dark:hover:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all overflow-x-auto"
            >
                <div className="flex flex-col gap-1 flex-1 pr-8 text-[11px] md:text-xs leading-relaxed font-mono text-zinc-900 dark:text-zinc-100 [&_pre]:!bg-transparent [&_pre]:!p-0 [&_code]:!p-0 whitespace-pre-wrap break-all md:break-normal">
                    {nodes ?? <div className="text-zinc-400">Loading...</div>}
                </div>

                <div className="absolute right-2 md:right-3 top-2.5">
                    <motion.div
                        animate={hasCopied ? { scale: [1, 0.8, 1] } : {}}
                        transition={{ duration: 0.2 }}
                    >
                        {hasCopied ? (
                            <CheckCheck className="h-4 w-4 text-green-500" />
                        ) : (
                            <Copy className="h-4 w-4 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors" />
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
