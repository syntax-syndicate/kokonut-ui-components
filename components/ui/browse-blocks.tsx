"use client";

import { Link } from "next-view-transitions";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ArrowDownRight, ArrowRight, BlocksIcon } from "lucide-react";


/**
 * 
 *
 */
export function BrowseBlocksButton() {
    return (
        <Link
            id="browse-blocks-button"
            href="/docs/blocks/ai-card-generation"
            className="flex items-center gap-8"
        >
            <motion.div
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: 0.2 } }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                className="relative"
            >
                <Button
                    className={cn(
                        "relative inline-flex items-center justify-center gap-4 rounded-lg font-medium",
                        "relative h-12 px-6 min-w-72 md:min-w-56",
                        "bg-indigo-50/50 dark:bg-indigo-900/20",
                        "text-indigo-600 dark:text-indigo-300",
                        "border-2 border-indigo-500/20 dark:border-indigo-400/20",
                        "hover:bg-indigo-100/50 dark:hover:bg-indigo-900/30",
                        "backdrop-blur-xs",
                        "shadow-xs hover:shadow-md transition-shadow"
                    )}
                >
                    <span className="font-medium flex items-center gap-2">
                        <BlocksIcon className="w-5 h-5" />
                        Explore Blocks
                    </span>
                    <ArrowRight className="w-5 h-5" />
                </Button>
            </motion.div>
        </Link>
    );
}
