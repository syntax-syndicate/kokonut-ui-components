"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useState } from "react";

interface Category {
    id: number;
    title: string;
    href: string;
    description: string;
    count: number | string;
    isComingSoon?: boolean;
    isNew?: boolean;
}

interface ComponentNavProps {
    categories: Category[];
}

export default function ComponentNav({ categories }: ComponentNavProps) {
    const pathname = usePathname();
    const [isExpanded, setIsExpanded] = useState(false);
    const currentCategory = categories.find((cat) =>
        pathname.startsWith(cat.href)
    );

    return (
        <>
            {/* Desktop Navigation - Always visible sidebar */}
            <div className="hidden md:block fixed left-6 top-1/2 -translate-y-1/2 w-[200px] z-40">
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="bg-gradient-to-b from-white/90 via-gray-50/90 to-white/90
                        dark:from-zinc-900/90 dark:via-zinc-800/90 dark:to-zinc-900/90
                        shadow-[0_2px_20px_-2px_rgba(0,0,0,0.1)]
                        backdrop-blur-md
                        border border-[rgba(230,230,230,0.7)] dark:border-[rgba(70,70,70,0.7)]
                        rounded-[28px] p-3"
                >
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                            Components
                        </h2>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400">
                            {categories.length}
                        </span>
                    </div>

                    <nav className="space-y-0.5">
                        {categories.map((category) => {
                            const isActive = pathname.startsWith(category.href);
                            return (
                                <Link
                                    key={category.id}
                                    href={
                                        category.isComingSoon
                                            ? "#"
                                            : category.href
                                    }
                                    className={cn(
                                        "group flex items-center justify-between px-2.5 py-1.5 rounded-md",
                                        "transition-all duration-200",
                                        category.isComingSoon
                                            ? "opacity-70 cursor-not-allowed bg-transparent"
                                            : isActive
                                            ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900"
                                            : "hover:bg-black/5 dark:hover:bg-white/5"
                                    )}
                                >
                                    <span
                                        className={cn(
                                            "text-sm font-medium flex items-center gap-2",
                                            isActive
                                                ? "text-white dark:text-zinc-900"
                                                : "text-zinc-600 dark:text-zinc-400"
                                        )}
                                    >
                                        {isActive && (
                                            <span className="text-[10px] opacity-70">
                                                →
                                            </span>
                                        )}
                                        {category.title}
                                        {category.isNew && !isActive && (
                                            <span
                                                className={cn(
                                                    "inline-flex items-center px-2 py-0.5 text-[9px] tracking-wide font-medium uppercase transition-all duration-200",
                                                    "rounded-[28px]",
                                                    "bg-gradient-to-r from-emerald-400/5 via-emerald-500/5 to-teal-500/5 text-emerald-600 dark:text-emerald-400 ring-emerald-500/20 dark:ring-emerald-400/20",
                                                    "ring-1",
                                                    "shadow-[0_0_10px_-3px_rgba(16,185,129,0.15)] dark:shadow-[0_0_10px_-3px_rgba(16,185,129,0.2)]"
                                                )}
                                            >
                                                new
                                            </span>
                                        )}
                                    </span>
                                    <span
                                        className={cn(
                                            "text-xs",
                                            isActive
                                                ? "text-white/70 dark:text-zinc-900/70"
                                                : "text-zinc-400 dark:text-zinc-500"
                                        )}
                                    >
                                        {category.count}
                                    </span>
                                </Link>
                            );
                        })}
                    </nav>
                </motion.div>
            </div>

            {/* Mobile Navigation - Keep the existing expandable bottom bar */}
            <div className="md:hidden">
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm"
                            onClick={() => setIsExpanded(false)}
                            style={{
                                pointerEvents: isExpanded ? "auto" : "none",
                                touchAction: "pan-y",
                            }}
                        />
                    )}
                </AnimatePresence>

                {/* Navigation Container */}
                <motion.div
                    layout
                    animate={{
                        width: isExpanded ? "100%" : "192px",
                        height: isExpanded ? "80vh" : "48px",
                        bottom: isExpanded ? "0" : "24px",
                        left: isExpanded ? "0" : "50%",
                        x: isExpanded ? "0" : "-50%",
                        borderRadius: isExpanded ? "0" : "28px",
                    }}
                    initial={{
                        width: "192px",
                        height: "48px",
                        bottom: "24px",
                        left: "50%",
                        x: "-50%",
                        borderRadius: "28px",
                    }}
                    style={{
                        position: "fixed",
                        transformOrigin: "bottom center",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 40,
                        height: {
                            type: "spring",
                            stiffness: 300,
                            damping: 35,
                        },
                    }}
                    className={cn(
                        "bg-gradient-to-b from-white/90 via-gray-50/90 to-white/90",
                        "dark:from-zinc-900/90 dark:via-zinc-800/90 dark:to-zinc-900/90",
                        "shadow-[0_2px_20px_-2px_rgba(0,0,0,0.1)]",
                        "backdrop-blur-md",
                        "border border-[rgba(230,230,230,0.7)] dark:border-[rgba(70,70,70,0.7)]",
                        "overflow-hidden"
                    )}
                    onClick={() => !isExpanded && setIsExpanded(true)}
                >
                    {isExpanded ? (
                        // Expanded View
                        <motion.div
                            className="h-[100dvh] flex flex-col"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {/* Header */}
                            <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
                                <h2 className="text-base font-medium text-zinc-900 dark:text-zinc-100">
                                    Components
                                </h2>
                            </div>

                            {/* Navigation Items - Centered vertically */}
                            <div className="flex-1 flex items-center justify-center">
                                <nav className="w-full max-w-sm px-4">
                                    <div className="space-y-2">
                                        {categories.map((category) => {
                                            const isActive =
                                                pathname.startsWith(
                                                    category.href
                                                );

                                            return (
                                                <Link
                                                    key={category.id}
                                                    href={
                                                        category.isComingSoon
                                                            ? "#"
                                                            : category.href
                                                    }
                                                    onClick={(e) => {
                                                        if (
                                                            category.isComingSoon
                                                        ) {
                                                            e.preventDefault();
                                                            return;
                                                        }
                                                        setIsExpanded(false);
                                                    }}
                                                    className={cn(
                                                        "flex items-center justify-between px-4 py-3 rounded-lg",
                                                        "transition-all duration-200",
                                                        category.isComingSoon
                                                            ? "opacity-70 cursor-not-allowed "
                                                            : isActive
                                                            ? "bg-zinc-900 dark:bg-white"
                                                            : "hover:bg-black/5 dark:hover:bg-white/5"
                                                    )}
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <span
                                                            className={cn(
                                                                "text-sm font-medium",
                                                                isActive
                                                                    ? "text-white dark:text-zinc-900"
                                                                    : "text-zinc-600 dark:text-zinc-400"
                                                            )}
                                                        >
                                                            {category.title}
                                                        </span>
                                                        {category.isComingSoon && (
                                                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-gradient-to-r from-zinc-200/80 to-zinc-300/80 dark:from-zinc-700/80 dark:to-zinc-600/80 text-zinc-600 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-700/50 shadow-sm">
                                                                Coming Soon
                                                            </span>
                                                        )}
                                                        {category.isNew && (
                                                            <span
                                                                className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-semibold 
                                                                bg-gradient-to-r from-emerald-400/20 via-emerald-500/20 to-teal-500/20 
                                                                text-emerald-700 dark:text-emerald-300
                                                                border border-emerald-500/30 dark:border-emerald-400/30
                                                                shadow-[0_0_8px_-1px_rgba(16,185,129,0.2)]
                                                                dark:shadow-[0_0_8px_-1px_rgba(16,185,129,0.25)]"
                                                            >
                                                                new
                                                            </span>
                                                        )}
                                                    </div>
                                                    <span
                                                        className={cn(
                                                            "text-xs",
                                                            isActive
                                                                ? "text-white/70 dark:text-zinc-900/70"
                                                                : "text-zinc-400 dark:text-zinc-500"
                                                        )}
                                                    >
                                                        {category.count}
                                                    </span>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </nav>
                            </div>

                            {/* Close Button at Bottom */}
                            <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsExpanded(false);
                                    }}
                                    className="w-full flex items-center justify-center p-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
                                >
                                    <X className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        // Collapsed View
                        <div className="flex items-center justify-between p-3">
                            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate">
                                {currentCategory?.title || "Components"}
                            </span>
                            <span className="text-xs text-zinc-500 dark:text-zinc-400 ml-2">
                                {currentCategory?.count || categories.length}
                            </span>
                        </div>
                    )}
                </motion.div>
            </div>
        </>
    );
}
