"use client";

import { Button } from "@/components/ui/button";
import { Menu, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const LINKS = [
    { href: "", label: "Features" },
    { href: "", label: "About" },
    { href: "", label: "Pricing" },
    { href: "", label: "Blog" },
];

export default function Block01Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="absolute top-0 w-full p-6 flex justify-between items-center z-50">
            <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-zinc-900 dark:bg-white flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-white dark:text-black" />
                </div>
                <span className="font-bold text-xl text-zinc-900 dark:text-white">
                    Acme
                </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 items-center">
                {LINKS.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200 text-sm font-medium"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
            <div className="hidden md:flex items-center gap-4">
                <Button variant="ghost" size="sm">
                    Sign in
                </Button>
                <Button
                    size="sm"
                    className="bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200"
                >
                    Start Free
                </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
                type="button"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? (
                    <X className="h-6 w-6 text-zinc-900 dark:text-white" />
                ) : (
                    <Menu className="h-6 w-6 text-zinc-900 dark:text-white" />
                )}
            </button>
        </nav>
    );
}
