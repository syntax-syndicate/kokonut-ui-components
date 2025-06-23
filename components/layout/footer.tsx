import React from "react";
import Link from "next/link";
import Image from "next/image";
import XIcon from "../icons/x-icon";

export function Footer() {
    return (
        <footer className="border-t border-zinc-200 dark:border-zinc-800">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex flex-col sm:flex-row items-start justify-between py-6 sm:h-16">
                    {/* Left side: Logo and Navigation */}
                    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo-black.svg"
                                alt="kokonut UI"
                                width={24}
                                height={24}
                                className="block dark:hidden"
                            />
                            <Image
                                src="/logo.svg"
                                alt="kokonut UI"
                                width={24}
                                height={24}
                                className="hidden dark:block"
                            />
                        </Link>
                        <nav className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                            <Link
                                href="/components"
                                className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                            >
                                /Components
                            </Link>
                            <Link
                                href="/docs"
                                className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                            >
                                /Docs
                            </Link>
                            <Link
                                href="https://kokonutui.pro/templates?utm_source=kokonutui.com&utm_medium=footer"
                                target="_blank"
                                className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                            >
                                /Templates
                            </Link>
                        </nav>
                    </div>

                    <Link
                        href="https://vercel.com/oss"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-600 dark:text-gray-400  transition-colors flex items-center gap-1.5 text-xs hover:text-gray-800 dark:hover:text-gray-300 group hover:font-medium hover:cursor-pointer"
                    >
                        <span className="hidden md:flex items-center gap-2">
                            <img
                                alt="Vercel OSS Program"
                                src="https://vercel.com/oss/program-badge.svg"
                            />
                        </span>
                    </Link>
                    {/* Right side: Credit */}
                    <Link
                        href="https://x.com/dorian_baffier"
                        target="_blank"
                        className="text-sm text-zinc-600 dark:text-zinc-400 mt-4 sm:mt-0 self-start hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-2"
                    >
                        <XIcon className="w-4 h-4" />
                        Made by{" "}
                        <span className="text-orange-500 dark:text-orange-400 font-bold underline">
                            Dorian
                        </span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
