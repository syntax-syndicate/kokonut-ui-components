"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Circle, TrendingUp } from "lucide-react";
import Link from "next/link";

interface Card01Props {
    category?: string;
    title?: string;
    description?: string;
    metrics?: {
        label: string;
        value: string;
        trend?: number;
    }[];
    accentColor?: string;
    href?: string;
}

export default function Card_01({
    category = "Analytics",
    title = "Performance Metrics",
    description = "Track your key performance indicators and analyze growth trends over time.",
    metrics = [
        { label: "Conversion", value: "12.5%", trend: 2.1 },
        { label: "Users", value: "48.6k", trend: 5.4 },
        { label: "Revenue", value: "$2.4M", trend: 3.2 },
    ],
    accentColor = "#8B5CF6",
    href = "#",
}: Card01Props) {
    return (
        <Link href={href}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group relative h-auto min-h-[400px] rounded-2xl p-4 sm:p-8
                    bg-white dark:bg-zinc-900
                    border border-zinc-200 dark:border-zinc-800
                    hover:border-zinc-300 dark:hover:border-zinc-700
                    hover:shadow-md transition-all duration-300
                    overflow-hidden"
            >
                <motion.div
                    className="absolute right-0 top-0 -mr-16 -mt-16"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.05, 0.1, 0.05],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                >
                    <Circle
                        size={200}
                        style={{ color: accentColor }}
                        className="opacity-10"
                    />
                </motion.div>

                <div className="relative h-full flex flex-col">
                    <div className="flex items-start justify-between">
                        <div className="space-y-4">
                            <motion.span
                                className="inline-block text-sm font-medium px-3 py-1 rounded-full
                                    bg-zinc-100 dark:bg-zinc-800"
                                whileHover={{ scale: 1.05 }}
                                style={{
                                    backgroundColor: `${accentColor}15`,
                                    color: accentColor,
                                }}
                            >
                                {category}
                            </motion.span>
                            <motion.h3
                                className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100"
                                initial={{ opacity: 0.8 }}
                                whileHover={{ opacity: 1 }}
                            >
                                {title}
                            </motion.h3>
                        </div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                            }}
                        >
                            <div
                                className="p-2 rounded-full 
                                bg-zinc-100 dark:bg-zinc-800 
                                text-zinc-600 dark:text-zinc-400
                                group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700
                                group-hover:text-zinc-900 dark:group-hover:text-zinc-100
                                transition-colors duration-200"
                            >
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </motion.div>
                    </div>

                    <motion.p
                        className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                    >
                        {description}
                    </motion.p>

                    <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-700 to-transparent" />

                    <div className="mt-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
                            {metrics.map((metric, index) => (
                                <motion.div
                                    key={metric.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <div className="space-y-2">
                                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                            {metric.label}
                                        </p>
                                        <div className="flex items-baseline gap-2 justify-between sm:justify-start">
                                            <p className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                                                {metric.value}
                                            </p>
                                            {metric.trend && (
                                                <span
                                                    className="flex items-center text-xs font-medium"
                                                    style={{
                                                        color: accentColor,
                                                    }}
                                                >
                                                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                                                    {metric.trend}%
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                            style={{ backgroundColor: accentColor }}
                            initial={{ scaleX: 0, opacity: 0 }}
                            whileHover={{ scaleX: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </div>

                <div
                    className="absolute inset-0 rounded-2xl duration-300
                    opacity-0 group-hover:opacity-100 pointer-events-none"
                >
                    <div
                        className="absolute inset-0 dark:opacity-0
                        bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))]
                        from-zinc-100/50 via-white/0 to-white/0"
                    />
                    <div
                        className="absolute inset-0 opacity-0 dark:opacity-100
                        bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))]
                        from-zinc-800/30 via-zinc-900/0 to-zinc-900/0"
                    />
                    <div
                        className="absolute inset-0 rounded-2xl
                        ring-1 ring-inset ring-black/[0.03] dark:ring-white/[0.03]
                        group-hover:ring-black/[0.07] dark:group-hover:ring-white/[0.07]
                        transition-all duration-300"
                    />
                </div>

                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100
                    pointer-events-none transition-opacity duration-300"
                >
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `
                                radial-gradient(
                                    circle at center, 
                                    ${accentColor}10 0%, 
                                    transparent 70%
                                )
                            `,
                        }}
                    />
                </div>
            </motion.div>
        </Link>
    );
}
