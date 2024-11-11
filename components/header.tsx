import { ThemeToggle } from "@/lib/theme-toggle";
import { Github } from "lucide-react";
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
                    min-w-[300px]
                    rounded-b-[28px]
                    px-4 py-2.5
                    relative
                    transition-all duration-300 ease-in-out
                `}
                >
                    <div className="relative z-10 flex items-center justify-between w-full gap-2">
                        <div className="flex items-center gap-2">
                            <Link href="/" className="flex items-center gap-2">
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
                        <div className="flex items-center gap-3">
                            <ThemeToggle />|
                            <Link
                                href="https://x.com/dorian_baffier"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=""
                            >
                                <svg
                                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-12"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    fill="currentColor"
                                >
                                    <title>X</title>
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </Link>
                            <Link
                                href="https://github.com/kokonut-labs/kokonutui"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`
                                        relative z-10
                                        cursor-pointer
                                    flex items-center gap-2
                                    rounded-full
                                    bg-zinc-900 dark:bg-white
                                    hover:bg-zinc-800 dark:hover:bg-gray-100
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
    );
}
