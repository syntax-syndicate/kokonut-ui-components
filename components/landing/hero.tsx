"use client";

import { BrowseComponentsButton } from "@/components/ui/browse-button";
import FeatureBlock from "./feature-block";
import { motion } from "framer-motion";
import AIInput_04 from "../kokonutui/ai-input/ai-input-04";
import Card08 from "../kokonutui/card/card-08";
import Btn03 from "../kokonutui/button/btn-03";
import Input09 from "../kokonutui/input/input-09";
import Link from "next/link";
import { Btn14 } from "../kokonutui/button/btn-14";

import { Pacifico } from "next/font/google";
import { BrowseBlocksButton } from "../ui/browse-blocks";

const pacifico = Pacifico({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-pacifico",
});

export function HeroSection() {
    return (
        <div className="container mx-auto min-h-screen flex flex-col lg:flex-row justify-center items-center gap-12 px-4 pt-16 sm:pt-24 lg:pt-0">
            {/* Left side - Title and CTA */}
            <div className="flex flex-col items-start text-left space-y-8 sm:space-y-12 w-full lg:w-1/2">
                <div className="max-w-2xl">
                    <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1] text-zinc-900 dark:text-zinc-100">
                        Build{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-rose-500 to-purple-500 dark:from-orange-400 dark:via-rose-400 dark:to-purple-400">
                            stunning
                        </span>{" "}
                        websites <br />
                        without spending time on design
                    </h1>
                    <div className="h-[0.5px] w-full bg-gradient-to-r from-zinc-400 to-zinc-200 dark:from-zinc-600 dark:to-zinc-800 mt-2 rounded-full" />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-start gap-2">
                    <BrowseComponentsButton />

                    <BrowseBlocksButton />
                </div>
                <FeatureBlock />
            </div>

            {/* Right side - Updated Components Layout */}
            <div className="w-full lg:w-1/2 min-h-[600px] flex flex-col justify-between p-4 gap-8">
                {/* Top AI Component */}
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full flex flex-col gap-2 items-center justify-start"
                >
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                        AI Components
                    </span>
                    <AIInput_04 />
                </motion.div>

                {/* Bottom components container - Updated for mobile */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-1">
                    {/* Left column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full"
                    >
                        <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
                            Card
                        </span>
                        <div className="flex flex-col gap-1 items-center justify-start">
                            <Card08 />
                        </div>
                    </motion.div>

                    {/* Right column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="w-full"
                    >
                        <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
                            Button, Inputs & More
                        </span>
                        <div className="flex flex-col gap-1 items-center justify-start">
                            <div className="flex flex-col gap-3">
                                <Link href="/docs">
                                    <Btn14
                                        label="Bring me"
                                        className="w-full py-5"
                                    />
                                </Link>
                                <Btn03 />
                            </div>
                            <Input09 />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
