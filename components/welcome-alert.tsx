"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function WelcomeAlert() {
    const [isVisible, setIsVisible] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const timerRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        if (!isHovered) {
            timerRef.current = setTimeout(() => {
                setIsVisible(false);
            }, 3000);
        }

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [isHovered]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="fixed bottom-4 right-4 w-80"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Link
                        href="https://invoicepdf.dev"
                        target="_blank"
                        className="block transition-transform hover:-translate-y-1"
                    >
                        <div className="group overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]">
                            <div className="p-4 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full  flex items-center justify-center">
                                    <Image
                                        src="https://invoicepdf.dev/icon.png"
                                        alt="Alert icon"
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                        Just Launched!
                                    </h3>
                                    <div className="flex items-center gap-1">
                                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                            Create beautiful invoices in seconds
                                        </p>
                                        <ArrowUpRight className="w-5 h-5 text-zinc-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="h-1 w-full bg-gradient-to-r from-gray-500 via-zinc-500 to-neutral-500" />
                        </div>
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
