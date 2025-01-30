"use client";

import { BrowseComponentsButton } from "@/components/ui/browse-button";
import FeatureBlock from "./feature-block";
import { motion } from "motion/react";
import Card08 from "../kokonutui/card/card-08";
import Btn03 from "../kokonutui/button/btn-03";
import Input09 from "../kokonutui/input/input-09";
import Link from "next/link";
import { Btn14 } from "../kokonutui/button/btn-14";
import TailwindCSS from "@/components/icons/tailwindcss";

import { Pacifico } from "next/font/google";
import { BrowseBlocksButton } from "../ui/browse-blocks";
import ActionSearchBar from "../kokonutui/action-search-bar";
import {
    PlaneTakeoff,
    BarChart2,
    Video,
    AudioLines,
    Globe,
    Diamond,
} from "lucide-react";

const pacifico = Pacifico({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-pacifico",
});

interface Action {
    id: string;
    label: string;
    icon: React.ReactNode;
    description?: string;
    short?: string;
    end?: string;
}

const allActions: Action[] = [
    {
        id: "1",
        label: "Book tickets",
        icon: <PlaneTakeoff className="h-4 w-4 text-blue-500" />,
        description: "Operator",
        short: "⌘K",
        end: "Agent",
    },
    {
        id: "2",
        label: "Summarize",
        icon: <BarChart2 className="h-4 w-4 text-orange-500" />,
        description: "gpt-4o",
        short: "⌘cmd+p",
        end: "Command",
    },
    {
        id: "3",
        label: "Screen Studio",
        icon: <Video className="h-4 w-4 text-purple-500" />,
        description: "gpt-4o",
        short: "",
        end: "Application",
    },
    {
        id: "4",
        label: "Talk to Jarvis",
        icon: <AudioLines className="h-4 w-4 text-green-500" />,
        description: "DeepSeek",
        short: "",
        end: "Active",
    },
    {
        id: "5",
        label: "Translate",
        icon: <Globe className="h-4 w-4 text-blue-500" />,
        description: "Gemini",
        short: "",
        end: "Command",
    },
];

export function HeroSection() {
    return (
        <div className="container mx-auto min-h-screen flex flex-col lg:flex-row justify-center items-center gap-12 px-4 pt-16 sm:pt-24 lg:pt-0">
            {/* Left side - Title and CTA */}
            <div className="flex flex-col items-start text-left space-y-4 sm:space-y-8 w-full lg:w-1/2">
                <div className="max-w-2xl">
                    <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1] text-zinc-900 dark:text-zinc-100">
                        Build{" "}
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-orange-500 via-rose-500 to-purple-500 dark:from-orange-400 dark:via-rose-400 dark:to-purple-400">
                            stunning
                        </span>{" "}
                        websites <br />
                        with no time on design
                    </h1>
                    <p className="mt-4 mb-6 text-lg text-zinc-600 dark:text-zinc-400">
                        Open Source UI components built with Tailwind CSS for
                        React and Next.js.
                    </p>
                    <div className="h-[0.5px] w-full bg-linear-to-r from-zinc-400 to-zinc-200 dark:from-zinc-600 dark:to-zinc-800 mt-2 rounded-full" />
                </div>
                <div className="flex flex-col justify-start">
                    <span className="text-sm text-zinc-500 dark:text-zinc-300 pb-2 text-start flex items-center gap-2">
                        <TailwindCSS className="w-4 h-4" />
                        We have updated to Tailwind CSS 4.0!
                    </span>
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-2">
                        <BrowseComponentsButton />
                        <BrowseBlocksButton />
                    </div>
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
                        Components
                    </span>
                    <ActionSearchBar actions={allActions} defaultOpen={true} />
                    {/* <AIInput_04 /> */}
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
                            <Card08 href="/docs/components/card" />
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
                                <Link href="/docs/components/button">
                                    <Btn14
                                        label="Bring me"
                                        className="w-full py-5"
                                    />
                                </Link>
                                <Link href="/docs/components/button">
                                    <Btn03 />
                                </Link>
                            </div>
                            <Link href="/docs/components/input">
                                <Input09 />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
