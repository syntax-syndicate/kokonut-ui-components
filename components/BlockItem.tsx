import { Package } from "lucide-react";
import React from "react";
import { PreviewButton } from "./PreviewButton";
import { CodeBlock } from "./code-block";
import { getBlockExample } from "@/lib/action";
import type { ComponentItem } from "@/types/component-page";

interface BlockItemProps {
    item: ComponentItem;
    folder: string;
}

const prePath = process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : `https://${process.env.NEXT_PUBLIC_SITE_URL}`;

export async function BlockItem({ item }: BlockItemProps) {
    const text = item.fileExample
        ? await getBlockExample(item.fileExample)
        : null;

    const previewComponent = React.cloneElement(item.component, {
        preview: "true",
    });

    return (
        <div
            className="group relative rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 
            backdrop-blur-sm shadow-xs transition-all duration-500
            hover:border-zinc-300 dark:hover:border-zinc-700 w-11/12 mx-auto"
        >
            <div className="flex flex-col">
                <div className="p-4 md:p-6 border-b border-zinc-200/80 dark:border-zinc-800/80">
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between gap-2">
                            <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                                Block {item.id}
                            </h3>
                            <PreviewButton fileName={item.fileName}>
                                {item.component}
                            </PreviewButton>
                        </div>

                        <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                            {item.title}
                        </h2>

                        {item.dependencies && (
                            <div className="flex flex-wrap items-center gap-1.5 max-w-full overflow-x-auto pb-1">
                                {item.dependencies.map((dep, index) => (
                                    <div
                                        key={`${item.id}-${index}`}
                                        className="inline-flex items-center px-2 py-0.5 rounded-md
                                        bg-purple-50 dark:bg-purple-900/30 
                                        border border-purple-200 dark:border-purple-800
                                        transition-colors duration-200
                                        hover:bg-purple-100 dark:hover:bg-purple-900/50
                                        text-[11px] leading-tight"
                                    >
                                        <Package className="w-3 h-3 mr-1 text-purple-600 dark:text-purple-400" />
                                        <span className="font-medium text-purple-600 dark:text-purple-400">
                                            {dep}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="relative w-full bg-gradient-to-b from-zinc-50/50 to-white dark:from-zinc-900/50 dark:to-black p-4 md:p-8">
                    <div className="relative w-full aspect-[16/9] max-w-4xl overflow-hidden rounded-lg border border-zinc-200/80 dark:border-zinc-800/80 mx-auto bg-white dark:bg-black shadow-sm">
                        <div className="absolute top-0 left-0 right-0 bottom-0">
                            <div
                                className="w-full h-full transform scale-50 origin-top-left"
                                style={{
                                    width: "200%",
                                    height: "200%",
                                }}
                            >
                                {previewComponent}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4 md:p-6 ">
                    <div className="">
                        <h2 className="text-xl font-medium text-zinc-800 dark:text-zinc-200 mb-4">
                            Installation
                        </h2>
                        <CodeBlock
                            code={[
                                `bunx shadcn@latest add ${prePath}/r/${item.fileName}`,
                            ]}
                            language="bash"
                        />
                    </div>
                </div>

                {text && (
                    <div className="p-4 md:p-6">
                        <div>
                            <h2 className="text-xl font-medium text-zinc-800 dark:text-zinc-200 mb-4">
                                Usage
                            </h2>
                            <CodeBlock code={text} language="tsx" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
