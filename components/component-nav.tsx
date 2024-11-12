"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useState } from "react";
import type { NavSection } from "@/config/navigation";

export default function ComponentNav({ sections }: { sections: NavSection[] }) {
    const pathname = usePathname();
    const [isExpanded, setIsExpanded] = useState(false);

    const totalItems = sections.reduce(
        (acc, section) => acc + section.items.length,
        0
    );

    const currentPage = sections
        .flatMap((section) => section.items)
        .find((item) => {
            if (item.href === "/docs") {
                return (
                    pathname === "/docs" || pathname === "/docs/introduction"
                );
            }
            if (item.href === "/docs/components/block/") {
                return pathname.startsWith("/docs/components/block");
            }
            if (item.href.includes("/docs/components/")) {
                return pathname === item.href;
            }
            return pathname === item.href;
        });

    return (
        <>
            {/* Desktop Navigation */}
            <div className="hidden md:block w-full z-40 space-y-4">
                <div
                    key="desktop-nav"
                    className="bg-gradient-to-b from-white/95 via-gray-50/95 to-white/95
                        dark:from-zinc-900/90 dark:via-zinc-800/90 dark:to-zinc-900/90
                        shadow-[0_2px_20px_-2px_rgba(0,0,0,0.15)]
                        backdrop-blur-md
                        border border-[rgba(200,200,200,0.8)] dark:border-[rgba(70,70,70,0.7)]
                        rounded-[28px] p-3"
                >
                    {sections.map((section, index) => (
                        <div
                            key={section.title}
                            className={cn(index > 0 && "mt-6")}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h2 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                    {section.title}
                                </h2>
                            </div>

                            <nav className="space-y-0.5">
                                {section.items.map((item) => {
                                    const isActive =
                                        item.href === "/docs"
                                            ? pathname === "/docs" ||
                                              pathname === "/docs/introduction"
                                            : item.href ===
                                              "/docs/components/block/"
                                            ? pathname.startsWith(
                                                  "/docs/components/block"
                                              )
                                            : pathname === item.href;
                                    return (
                                        <Link
                                            key={item.id}
                                            href={
                                                item.isComingSoon
                                                    ? "#"
                                                    : item.href
                                            }
                                            className={cn(
                                                "group flex items-center justify-between px-2.5 py-1.5 rounded-xl",
                                                "transition-all duration-200",
                                                item.isComingSoon
                                                    ? "opacity-70 cursor-not-allowed bg-transparent"
                                                    : isActive
                                                    ? item.isLab
                                                        ? "bg-purple-500/10 text-purple-700 dark:text-purple-300"
                                                        : "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900"
                                                    : "hover:bg-black/5 dark:hover:bg-white/5"
                                            )}
                                        >
                                            <span
                                                className={cn(
                                                    "text-sm font-medium flex items-center gap-2",
                                                    isActive
                                                        ? item.isLab
                                                            ? "text-purple-700 dark:text-purple-300"
                                                            : "text-white dark:text-zinc-900"
                                                        : "text-zinc-600 dark:text-zinc-400"
                                                )}
                                            >
                                                {isActive && (
                                                    <span className="text-[10px] opacity-70">
                                                        →
                                                    </span>
                                                )}
                                                {item.title}
                                                {item.isNew && !isActive && (
                                                    <span className=" rounded-lg inline-flex items-center px-2 py-0.5 text-[9px] tracking-wide font-medium uppercase  bg-gradient-to-r from-emerald-400/5 via-emerald-500/5 to-teal-500/5 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/20 dark:ring-emerald-400/20 shadow-[0_0_10px_-3px_rgba(16,185,129,0.15)] dark:shadow-[0_0_10px_-3px_rgba(16,185,129,0.2)]">
                                                        new
                                                    </span>
                                                )}
                                                {item.isLab && !isActive && (
                                                    <span className="rounded-lg inline-flex items-center px-2 py-0.5 text-[9px] tracking-wide font-medium uppercase bg-gradient-to-r from-purple-400/5 via-purple-500/5 to-purple-500/5 text-purple-600 dark:text-purple-400 ring-1 ring-purple-500/20 dark:ring-purple-400/20 shadow-[0_0_10px_-3px_rgba(147,51,234,0.15)] dark:shadow-[0_0_10px_-3px_rgba(147,51,234,0.2)]">
                                                        lab
                                                    </span>
                                                )}
                                            </span>
                                            {item.count && (
                                                <span
                                                    className={cn(
                                                        "text-xs",
                                                        isActive
                                                            ? "text-white/70 dark:text-zinc-900/70"
                                                            : "text-zinc-400 dark:text-zinc-500"
                                                    )}
                                                >
                                                    {item.count}
                                                </span>
                                            )}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex justify-center px-4 pb-6">
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40"
                            onClick={() => setIsExpanded(false)}
                            style={{
                                pointerEvents: isExpanded ? "auto" : "none",
                                touchAction: "pan-y",
                            }}
                        />
                    )}
                </AnimatePresence>

                <motion.div
                    layout
                    animate={{
                        width: isExpanded ? "100%" : "192px",
                        height: isExpanded ? "90vh" : "48px",
                        bottom: isExpanded ? "0" : "24px",
                        left: isExpanded ? "0" : "50%",
                        transform: isExpanded
                            ? "translateX(0)"
                            : "translateX(-50%)",
                        borderRadius: isExpanded ? "0" : "28px",
                    }}
                    initial={{
                        width: "192px",
                        height: "48px",
                        bottom: "24px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        borderRadius: "28px",
                    }}
                    style={{
                        position: "fixed",
                        willChange: "transform, width, height",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 45,
                        mass: 0.8,
                        height: {
                            type: "spring",
                            stiffness: 400,
                            damping: 40,
                        },
                    }}
                    className={cn(
                        "bg-gradient-to-b from-white/95 via-gray-50/95 to-white/95",
                        "dark:from-zinc-900/90 dark:via-zinc-800/90 dark:to-zinc-900/90",
                        "shadow-[0_2px_20px_-2px_rgba(0,0,0,0.15)]",
                        "backdrop-blur-md",
                        "border border-[rgba(200,200,200,0.8)] dark:border-[rgba(70,70,70,0.7)]",
                        "overflow-hidden z-50"
                    )}
                    onClick={() => !isExpanded && setIsExpanded(true)}
                >
                    {isExpanded ? (
                        <motion.div
                            className="h-[100dvh] flex flex-col"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                        >
                            {/* Header */}
                            <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
                                <h2 className="text-base font-medium text-zinc-900 dark:text-zinc-100">
                                    {currentPage?.title}
                                </h2>
                            </div>

                            {/* Navigation Items */}
                            <div className="flex-1 overflow-y-auto px-4 py-2">
                                {sections.map((section) => (
                                    <div key={section.title} className="mb-6">
                                        <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-2">
                                            {section.title}
                                        </h3>
                                        <div className="space-y-1">
                                            {section.items.map((item) => {
                                                const isActive =
                                                    item.href === "/docs"
                                                        ? pathname ===
                                                              "/docs" ||
                                                          pathname ===
                                                              "/docs/introduction"
                                                        : item.href ===
                                                          "/docs/components/block/"
                                                        ? pathname.startsWith(
                                                              "/docs/components/block"
                                                          )
                                                        : pathname ===
                                                          item.href;
                                                return (
                                                    <Link
                                                        key={item.id}
                                                        href={
                                                            item.isComingSoon
                                                                ? "#"
                                                                : item.href
                                                        }
                                                        onClick={() =>
                                                            setIsExpanded(false)
                                                        }
                                                        className={cn(
                                                            "flex items-center justify-between px-3 py-2 rounded-md",
                                                            item.isComingSoon
                                                                ? "opacity-70 cursor-not-allowed"
                                                                : isActive
                                                                ? item.isLab
                                                                    ? "bg-purple-500/10 text-purple-700 dark:text-purple-300"
                                                                    : "bg-zinc-900 dark:bg-white"
                                                                : "hover:bg-black/5 dark:hover:bg-white/5"
                                                        )}
                                                    >
                                                        <span
                                                            className={cn(
                                                                "text-sm font-medium",
                                                                isActive
                                                                    ? item.isLab
                                                                        ? "text-purple-700 dark:text-purple-300"
                                                                        : "text-white dark:text-zinc-900"
                                                                    : "text-zinc-600 dark:text-zinc-400"
                                                            )}
                                                        >
                                                            {item.title}
                                                            {item.isNew &&
                                                                !isActive && (
                                                                    <span className="ml-2 rounded-lg inline-flex items-center px-2 py-0.5 text-[9px] tracking-wide font-medium uppercase bg-gradient-to-r from-emerald-400/5 via-emerald-500/5 to-teal-500/5 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/20 dark:ring-emerald-400/20">
                                                                        new
                                                                    </span>
                                                                )}
                                                            {item.isLab &&
                                                                !isActive && (
                                                                    <span className="ml-2 rounded-xl inline-flex items-center px-2 py-0.5 text-[9px] tracking-wide font-medium uppercase  bg-gradient-to-r from-purple-400/5 via-purple-500/5 to-purple-500/5 text-purple-600 dark:text-purple-400 ring-1 ring-purple-500/20 dark:ring-purple-400/20">
                                                                        lab
                                                                    </span>
                                                                )}
                                                        </span>
                                                        {item.count && (
                                                            <span className="text-xs text-zinc-400">
                                                                {item.count}
                                                            </span>
                                                        )}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Close Button */}
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
                        <div className="flex items-center justify-center h-full">
                            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate text-center">
                                {currentPage?.title}
                            </span>
                            <span className="text-xs text-zinc-500 dark:text-zinc-400 ml-2">
                                {totalItems}
                            </span>
                        </div>
                    )}
                </motion.div>
            </div>
        </>
    );
}
