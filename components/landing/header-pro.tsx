import { ArrowUpRight, PartyPopper } from "lucide-react";
import Link from "next/link";
import XIcon from "../icons/x-icon";

export function HeaderPro() {
    return (
        <div className="flex items-center justify-end gap-1 flex-1">
            <div className="flex items-center justify-start md:justify-end gap-1 flex-1">
                <Link
                    href="https://kokonutui.pro?utm_source=kokonutui.com&utm_medium=header"
                    target="_blank"
                    className="flex items-center justify-end gap-2 px-1 py-1.5 text-sm font-medium text-zinc-800 dark:text-zinc-200"
                >
                    <span className="hidden md:flex items-center gap-2">
                        <PartyPopper className="w-3.5 h-3.5" />
                        <span className="text-transparent bg-linear-to-r from-pink-500 via-indigo-500 to-purple-500 bg-clip-text font-semibold">
                            Explore new components
                        </span>
                    </span>

                    <span className="flex md:hidden items-center gap-2">
                        <PartyPopper className="w-3.5 h-3.5" />
                        <span className="text-transparent bg-linear-to-r from-pink-500 via-indigo-500 to-purple-500 bg-clip-text font-semibold">
                            Explore
                        </span>
                    </span>

                    <div className="group relative inline-flex items-center gap-2 px-3 py-1 text-sm rounded-lg bg-zinc-900 dark:bg-zinc-100 transition-colors">
                        <div className="absolute inset-0 rounded-lg bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-40 group-hover:opacity-80 blur-sm transition-opacity duration-500" />
                        <div className="relative">
                            <span className="text-white dark:text-zinc-900">
                                KokonutUI Pro
                            </span>
                        </div>
                        <ArrowUpRight className="relative w-3.5 h-3.5 text-white/90 dark:text-zinc-900/90" />
                    </div>
                </Link>
                <Link
                    href="https://github.com/kokonut-labs/kokonutui"
                    target="_blank"
                    className="hidden group relative md:inline-flex items-center gap-2 px-1.5 py-1.5 text-sm rounded-lg bg-zinc-900 dark:bg-zinc-100 transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
                >
                    <div className="relative flex items-center gap-2 w-full">
                        <svg
                            viewBox="0 0 24 24"
                            className="w-4 h-4 text-white dark:text-zinc-900"
                            fill="currentColor"
                        >
                            <title>Github</title>
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                    </div>
                </Link>
                <Link
                    href="https://x.com/dorian_baffier"
                    target="_blank"
                    className="hidden group relative md:inline-flex items-center gap-2 px-1.5 py-1.5 text-sm rounded-lg bg-zinc-900 dark:bg-zinc-100 transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
                >
                    <XIcon className="w-4 h-4 text-white dark:text-zinc-900" />
                </Link>
            </div>
        </div>
    );
}
