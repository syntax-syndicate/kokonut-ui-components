import { ThemeToggle } from "@/lib/theme-toggle";
import Link from "next/link";
import { Link as ViewTransitionsLink } from "next-view-transitions";
import Image from "next/image";
import { HeaderPro } from "./header-pro";

export function Header() {
    return (
        <div className="sticky top-0 left-0 right-0 z-50">
            <div className="w-full bg-white dark:bg-black">
                <div className="flex items-center justify-center w-full flex-col">
                    <HeaderPro />
                    <div
                        className="
                            flex items-center justify-between
                            w-full px-6 py-3.5
                            relative transition-all duration-300 ease-in-out
                        "
                    >
                        <div className="relative z-10 flex items-center justify-between w-full gap-2 max-w-[1400px] mx-auto">
                            <div className="flex items-center gap-6">
                                <Link
                                    href="/"
                                    className="flex items-center gap-2"
                                >
                                    <Image
                                        src="/logo.svg"
                                        alt="logo"
                                        width={28}
                                        height={28}
                                        className="hidden dark:block"
                                    />
                                    <Image
                                        src="/logo-black.svg"
                                        alt="logo"
                                        width={28}
                                        height={28}
                                        className="block dark:hidden"
                                    />
                                    <span className="hidden sm:block font-semibold">
                                        kokonut UI
                                    </span>
                                </Link>
                                <span className="text-zinc-300 dark:text-zinc-700">
                                    |
                                </span>
                                <div className="hidden sm:flex items-center gap-0.5">
                                    <ViewTransitionsLink
                                        href="/docs/components/action-search-bar"
                                        className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-all px-3 py-1.5 rounded-md border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                                    >
                                        Components
                                    </ViewTransitionsLink>
                                    <Link
                                        href="https://kokonutui.pro/templates?utm_source=kokonutui.com&utm_medium=header"
                                        target="_blank"
                                        className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-all flex items-center gap-2 px-3 py-1.5 rounded-md border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                                    >
                                        Templates
                                    </Link>
                                </div>
                            </div>

                            <div className="hidden sm:flex items-center gap-3">
                                <Link
                                    href="https://github.com/kokonut-labs/kokonutui"
                                    target="_blank"
                                    className="group relative inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                                >
                                    <div className="relative flex items-center gap-2 w-full">
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="w-4 h-4 text-black dark:text-white"
                                            fill="currentColor"
                                        >
                                            <title>Github</title>
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                        </svg>
                                        <span className="text-black dark:text-white hover:text-zinc-900 dark:hover:text-zinc-100 tracking-tight font-light">
                                            Github
                                        </span>
                                    </div>
                                </Link>
                                <Link
                                    href="https://x.com/dorian_baffier"
                                    target="_blank"
                                    className="group relative inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="w-4 h-4 text-zinc-600 dark:text-zinc-400"
                                        fill="currentColor"
                                    >
                                        <title>X</title>
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </Link>
                                <span className="text-zinc-300 dark:text-zinc-700">
                                    |
                                </span>
                                <ThemeToggle />
                            </div>

                            <div className="flex sm:hidden items-center gap-4">
                                <ViewTransitionsLink
                                    href="/docs/components/action-search-bar"
                                    className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-all px-3 py-1.5 rounded-md border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                                >
                                    Components
                                </ViewTransitionsLink>
                                <ViewTransitionsLink
                                    href="https://kokonutui.pro/templates?utm_source=kokonutui.com&utm_medium=header"
                                    target="_blank"
                                    className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-all px-3 py-1.5 rounded-md border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                                >
                                    Templates
                                </ViewTransitionsLink>
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
