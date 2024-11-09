"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Alert07() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-2xl mx-auto"
        >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/50 dark:to-zinc-950 border border-purple-100 dark:border-purple-900/50 shadow-[0_1px_3px_0_rgba(147,51,234,0.1),0_1px_2px_-1px_rgba(147,51,234,0.1)] dark:shadow-[0_1px_3px_0_rgba(147,51,234,0.05),0_1px_2px_-1px_rgba(147,51,234,0.05)] p-1">
                <div className="relative z-10 flex items-center gap-4 p-4 bg-white/50 dark:bg-zinc-950/50 rounded-xl">
                    <div className="flex-shrink-0">
                        <motion.div
                            initial={{ rotate: -15, scale: 0.5 }}
                            animate={{ rotate: 0, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                            }}
                            className="rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 p-2.5 shadow-inner"
                        >
                            <Sparkles className="h-5 w-5 text-white" />
                        </motion.div>
                    </div>

                    <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <h3 className="font-semibold text-purple-950 dark:text-purple-100">
                                    Black Friday Sale! 🎉
                                </h3>
                                <p className="mt-1 text-sm text-purple-900/70 dark:text-purple-300/70 line-clamp-1">
                                    Get 50% off on all premium features. Limited
                                    time offer!
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <Button className="bg-purple-600 text-white shadow-sm h-9 px-4 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 transition-all duration-200 dark:text-white">
                                    Claim Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 opacity-20 mix-blend-soft-light">
                        <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-purple-400 blur-2xl" />
                        <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-purple-400 blur-2xl" />
                    </div>
                </div>

                <motion.div
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: "100%", opacity: 0.3 }}
                    transition={{
                        duration: 1.5,
                        delay: 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 3,
                    }}
                    className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-transparent via-white to-transparent"
                />
            </div>
        </motion.div>
    );
}
