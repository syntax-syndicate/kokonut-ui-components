"use client";

import { motion } from "motion/react";
import { Link } from "next-view-transitions";
import { Button } from "@/components/ui/button";

export function BrowseComponentsButton() {
  return (
    <Link
      className="relative flex items-center gap-8"
      href="/docs/components/liquid-glass-card"
    >
      <motion.div
        animate={{ x: 0, opacity: 1, transition: { duration: 0.2 } }}
        className="relative"
        initial={{ x: 200, opacity: 0 }}
      >
        <Button
          className="group relative h-10 overflow-hidden rounded-lg bg-black px-8 text-md text-white tracking-tighter transition-all duration-300 hover:bg-black/90 md:min-w-56 dark:bg-white dark:text-black dark:hover:bg-white/90"
          size="lg"
        >
          <span className="group-hover:-translate-y-full relative inline-block transition-transform duration-300 ease-in-out">
            <span className="flex items-center gap-2 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
              <span className="font-medium">Browse Components</span>
            </span>
            <span className="absolute top-full left-0 flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="font-medium">Browse Components</span>
            </span>
          </span>
        </Button>
      </motion.div>
    </Link>
  );
}
