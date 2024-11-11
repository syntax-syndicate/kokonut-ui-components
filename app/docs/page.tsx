import { CodeBlock } from "@/components/code-block";
import { Undo } from "lucide-react";
import Link from "next/link";

export default function DocsPage() {
    return (
        <div className="flex flex-col px-4 md:px-16 mt-4 md:mt-12 gap-4 md:gap-10 max-w-4xl relative">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400">
                    Installation
                </h1>
                <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
                    How to use kokonutUI components in your project.
                </p>
            </div>

            <div className="flex items-center gap-2 p-2 rounded-lg bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-900">
                <Undo
                    size={20}
                    className="text-amber-600 dark:text-amber-400 flex-shrink-0 rotate-180"
                />
                <p className="text-base leading-7 text-amber-800 dark:text-amber-200">
                    This is not a library, it's a collection of components that
                    you can copy paste and customize to your preference.
                </p>
            </div>

            <div className="flex flex-col gap-6 md:gap-12 relative">
                <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 shadow-sm border border-zinc-200/50 dark:border-zinc-700/50">
                            <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-br from-zinc-600 to-zinc-800 dark:from-zinc-200 dark:to-zinc-400">
                                1
                            </span>
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-700 to-zinc-500 dark:from-zinc-200 dark:to-zinc-400">
                            Utility function
                        </h2>
                    </div>

                    <div className="space-y-2 md:space-y-3 ml-12">
                        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
                            Most of the components use{" "}
                            <span className="font-mono text-orange-500">
                                cn
                            </span>{" "}
                            utility function. Run the following command to
                            install it.
                        </p>
                        <div className="flex flex-col gap-2">
                            <CodeBlock
                                code="shadcn@latest add https://kokonut.dev/registry/utils.json"
                                initial={
                                    <div className="text-[13px] font-mono text-zinc-400">
                                        shadcn@latest add
                                        https://kokonut.dev/registry/utils.json
                                    </div>
                                }
                                showPackageManager
                                language="bash"
                            />
                            <CodeBlock
                                language="typescript"
                                code={[
                                    "## lib/utils.ts",
                                    "",
                                    'import { clsx, type ClassValue } from "clsx";',
                                    'import { twMerge } from "tailwind-merge";',
                                    "",
                                    "export function cn(...inputs: ClassValue[]) {",
                                    "    return twMerge(clsx(inputs));",
                                    "}",
                                ]}
                            />
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 shadow-sm border border-zinc-200/50 dark:border-zinc-700/50">
                            <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-br from-zinc-600 to-zinc-800 dark:from-zinc-200 dark:to-zinc-400">
                                2
                            </span>
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-700 to-zinc-500 dark:from-zinc-200 dark:to-zinc-400">
                            Copy, paste and customize
                        </h2>
                    </div>

                    <div className="space-y-2 md:space-y-3 ml-12">
                        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
                            That's it. now, you can copy, paste and customize
                            kokonutUI components to your project using shadcn
                            cli.
                        </p>
                        <CodeBlock
                            language="bash"
                            showPackageManager
                            code="shadcn@latest add https://kokonut.dev/registry/alert-01.json"
                        />
                        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
                            The component will be added to the components folder
                            and you can start customizing / using it.
                        </p>
                        <CodeBlock
                            language="jsx"
                            code={[
                                "import Alert_02 from '@/components/alert-02'",
                                "",
                                "export default function Page() {",
                                "    return (",
                                "        <Alert_02 />",
                                "    )",
                                "}",
                            ]}
                        />
                    </div>
                </div>
                <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 shadow-sm border border-zinc-200/50 dark:border-zinc-700/50">
                            <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-br from-zinc-600 to-zinc-800 dark:from-zinc-200 dark:to-zinc-400">
                                3
                            </span>
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-700 to-zinc-500 dark:from-zinc-200 dark:to-zinc-400">
                            Optional configuration
                        </h2>
                    </div>

                    <div className="space-y-6 md:space-y-8 ml-12">
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                                Shadcn
                            </h3>
                            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
                                In case the component you're adding depends on
                                other shadcn components, you'll be asked to
                                configure{" "}
                                <Link
                                    href="https://ui.shadcn.com/"
                                    className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-600 dark:hover:text-zinc-300 underline underline-offset-4 transition-colors"
                                    target="_blank"
                                >
                                    shadcn
                                </Link>
                            </p>

                            <CodeBlock
                                language="bash"
                                code={[
                                    "✔ Which style would you like to use? › New York",
                                    "✔ Which color would you like to use as the base color? › Zinc",
                                    "✔ Would you like to use CSS variables for theming? … no / yes",
                                ]}
                            />
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                                Hooks
                            </h3>
                            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
                                Some components require specific React hooks for
                                functionality. These hooks will be automatically
                                added to your project when installing the
                                component.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                                Additional packages (Framer Motion)
                            </h3>
                            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
                                Additional dependencies are listed in the
                                top-right corner of each component's
                                documentation. Make sure to install any required
                                packages before using the component.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
