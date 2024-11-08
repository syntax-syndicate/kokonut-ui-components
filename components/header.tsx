"use client";

import { ThemeToggle } from "@/lib/theme-toggle";
import { Github, ArrowUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center justify-center w-full flex-col">
                <div
                    className={`
                    flex items-center justify-between
                    bg-gradient-to-b from-white/90 via-gray-50/90 to-white/90
                    dark:from-zinc-900/90 dark:via-zinc-800/90 dark:to-zinc-900/90
                    shadow-[0_2px_20px_-2px_rgba(0,0,0,0.1)]
                    backdrop-blur-md
                    border-x border-b 
                    border-[rgba(230,230,230,0.7)] dark:border-[rgba(70,70,70,0.7)]
                    min-w-[380px]
                    rounded-b-[28px]
                    px-4 py-2.5
                    relative
                    transition-all duration-300 ease-in-out
                `}
                >
                    <div className="relative z-10 flex items-center justify-around w-full gap-2">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                <Link
                                    href="/"
                                    className="flex items-center gap-2"
                                >
                                    <Image
                                        src="/logo.svg"
                                        alt="logo"
                                        width={32}
                                        height={32}
                                        className="hidden dark:block"
                                    />
                                    <Image
                                        src="/logo-black.svg"
                                        alt="logo"
                                        width={32}
                                        height={32}
                                        className="block dark:hidden"
                                    />
                                    <span className="hidden sm:block font-semibold">
                                        kokonutUI
                                    </span>
                                </Link>
                                <span className="text-xs font-medium px-1.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-200">
                                    Beta
                                </span>
                            </div>
                            <ThemeToggle />
                        </div>
                        <div className="h-4 w-px bg-gradient-to-b from-gray-200/80 via-gray-300/80 to-gray-200/80 dark:from-zinc-700 dark:via-zinc-600 dark:to-zinc-700" />
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    onClick={() =>
                                        window.scrollTo({
                                            top: 0,
                                            behavior: "smooth",
                                        })
                                    }
                                    className={`
                                        sm:hidden flex
                                        items-center justify-center
                                        rounded-full
                                        bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-800
                                        hover:from-zinc-900 hover:via-zinc-800 hover:to-zinc-900
                                        dark:from-gray-50 dark:via-white dark:to-gray-50
                                        dark:hover:from-white dark:hover:via-gray-50 dark:hover:to-white
                                        text-white dark:text-zinc-900
                                        w-7 h-7
                                        transition-all duration-300 ease-in-out
                                        shadow-[0_2px_8px_-2px_rgba(0,0,0,0.12)]
                                    `}
                                >
                                    <ArrowUp className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="flex items-center gap-3">
                                <Link
                                    href="https://github.com/kokonut-labs/kokonutui"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`
                                        relative z-10
                                        cursor-pointer
                                        flex items-center gap-2
                                        rounded-full
                                        bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-800
                                        hover:from-zinc-900 hover:via-zinc-800 hover:to-zinc-900
                                        dark:from-gray-50 dark:via-white dark:to-gray-50
                                        dark:hover:from-white dark:hover:via-gray-50 dark:hover:to-white
                                        text-white dark:text-zinc-900
                                        px-3 h-7
                                        transition-all duration-300 ease-in-out
                                        shadow-[0_2px_8px_-2px_rgba(0,0,0,0.12)]
                                        group
                                    `}
                                >
                                    <Github className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                                    <span className="text-sm font-medium">
                                        Star on Github
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
