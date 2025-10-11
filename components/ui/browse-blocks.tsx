"use client";

import { motion } from "motion/react";
import { Link } from "next-view-transitions";
import { Button } from "./button";

export function BrowseBlocksButton() {
  return (
    <Link
      className="flex items-center gap-8"
      href="https://kokonutui.pro/templates"
      id="browse-blocks-button"
    >
      <motion.div
        animate={{ x: 0, opacity: 1, transition: { duration: 0.2 } }}
        className="relative"
        initial={{ x: 200, opacity: 0 }}
      >
        <Button
          className="group relative h-10 min-w-64 overflow-hidden rounded-lg border border-black/10 px-8 text-black text-md tracking-tighter transition-all duration-300 hover:bg-black/5 md:min-w-56 dark:border-white/10 dark:text-white dark:hover:bg-white/5"
          size="lg"
          variant="ghost"
        >
          <span className="group-hover:-translate-y-full relative inline-block transition-transform duration-300 ease-in-out">
            <span className="flex items-center gap-2 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
              <span className="font-medium">Go to Templates</span>
            </span>
            <span className="absolute top-full left-0 flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="font-medium">Go to Templates</span>
            </span>
          </span>
        </Button>
      </motion.div>
    </Link>
  );
}
