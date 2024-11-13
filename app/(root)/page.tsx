import Link from "next/link";
import {
    ArrowRight,
    PartyPopper,
    Sparkles,
    Zap,
    Github,
    Command,
} from "lucide-react";
import AIInput_04 from "@/components/kokonutui/ai-input-04";
import { CommandRotator } from "@/components/command-rotator";
import Btn03 from "@/components/kokonutui/btn-03";
import Btn05 from "@/components/kokonutui/btn-05";
import Btn09 from "@/components/kokonutui/btn-09";

import Arrow25 from "@/components/kokonutui/arrow25";
import List05 from "@/components/kokonutui/list-05";
import Card_01 from "@/components/kokonutui/card-01";
import {
    type CarouselItem,
    InfiniteCarousel,
} from "@/components/infinite-carousel";
import { cn } from "@/lib/utils";
import Alert05 from "@/components/kokonutui/alert-05";
import AIInput_05 from "@/components/kokonutui/ai-input-05";
import { BrowseComponentsButton } from "@/components/ui/browse-button";
import Input_08 from "@/components/kokonutui/input-08";

const prePath = process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : `https://${process.env.NEXT_PUBLIC_SITE_URL}`;

export default function Home() {
    const categories: CarouselItem[] = [
        {
            id: 1,
            title: "Alert Components",
            href: "/docs/components/alert",
            component: <Alert05 />,
            count: 6,
            size: "wide",
            span: 1,
        },
        {
            id: 2,
            title: "Card Components",
            href: "/docs/components/card",
            component: <Card_01 />,
            count: 6,
            size: "default",
            span: 1,
        },
        {
            id: 3,
            title: "List Components",
            href: "/docs/components/list",
            component: <List05 />,
            count: 5,
            size: "tall",
            span: 2,
        },
        {
            id: 4,
            title: "Button Components",
            href: "/docs/components/button",
            component: <Btn03 attractRadius={30} />,
            count: 10,
            size: "default",
            span: 1,
        },
        {
            id: 5,
            title: "AI Components",
            href: "/docs/components/ai-input",
            component: <AIInput_04 />,
            count: 16,
            size: "tall",
            span: 2,
        },
    ];

    const baseCommand = `shadcn@latest add ${prePath}/registry/my-component.json`;

    return (
        <main className="bg-white dark:bg-black/5">
            <p className="pt-16 text-sm text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-2 opacity-80 ">
                <PartyPopper className="w-4 h-4" />
                New components added weekly
            </p>
            <div className="pt-4">
                <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-1 lg:p-4 pb-4 sm:pb-20 gap-4 sm:gap-12 sm:p-16">
                    <div className="space-y-6 text-center pt-4 my-12">
                        <div className="inline-block">
                            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400">
                                Copy, Paste, Customize.
                            </h1>
                            <div className="h-[0.5px] w-full bg-gradient-to-r from-zinc-400 to-zinc-200 dark:from-zinc-600 dark:to-zinc-800 mt-2 rounded-full" />
                        </div>

                        <div className="relative">
                            <p className="text-base sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
                                A collection of modern, interactive,
                                customizable UI components built with shadcn &
                                TailwindCSS. Quick and easy to use.
                                <Arrow25 className="inline-block ml-1 w-6 h-6 align-middle mt-1" />
                            </p>
                        </div>

                        <div className="flex items-center justify-center gap-2 mt-8">
                            <div className="relative group">
                                <div className="flex items-center gap-2">
                                    <CommandRotator baseCommand={baseCommand} />
                                </div>
                                <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <BrowseComponentsButton />
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="text-center">
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400">
                                Explore all 50+ components.
                            </h2>
                            <p className="mt-2 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                                Ready to use. Fully customizable. Built for
                                making apps faster.
                            </p>
                        </div>

                        <div className="max-w-[95vw] mx-auto">
                            <InfiniteCarousel items={categories} />
                        </div>

                        <div className="relative mt-32 mb-24">
                            <div className="absolute inset-0 -z-10">
                                <div className="absolute inset-0 bg-gradient-to-b from-zinc-100/0 via-zinc-100/50 to-zinc-100/0 dark:from-zinc-900/0 dark:via-zinc-900/50 dark:to-zinc-900/0" />
                                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent dark:from-emerald-500/5 dark:via-emerald-500/2 dark:to-transparent blur-3xl" />
                            </div>

                            <div className="max-w-7xl mx-auto px-4">
                                <div className="flex flex-col sm:flex-row justify-center mb-16 gap-4">
                                    <div
                                        className="inline-flex items-center px-4 py-2 rounded-full text-sm 
                                        bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800
                                        border border-zinc-200 dark:border-zinc-800 shadow-sm"
                                    >
                                        <Sparkles className="w-4 h-4 mr-2 text-emerald-500" />
                                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-200 dark:to-zinc-400">
                                            Crafted with Next.js 15 & Tailwind
                                            CSS
                                        </span>
                                    </div>

                                    <div
                                        className="inline-flex items-center px-4 py-2 rounded-full text-sm 
                                        bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30
                                        border border-orange-200 dark:border-orange-800/30 shadow-sm"
                                    >
                                        <Sparkles className="w-4 h-4 mr-2 text-orange-500" />
                                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-600 dark:from-orange-200 dark:to-orange-400">
                                            Optionally with shadcn/ui and Framer
                                            Motion
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-[500px]">
                                    <div
                                        className="lg:col-span-2 p-8 rounded-3xl 
                                        bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-900/50
                                        border border-zinc-200 dark:border-zinc-800 
                                        shadow-sm"
                                    >
                                        <div className="h-full flex flex-col justify-between">
                                            <div>
                                                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 via-zinc-600 to-zinc-800 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-100">
                                                        Build beautiful
                                                        interfaces
                                                    </span>
                                                </h2>
                                                <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                                    A collection of UI
                                                    components that you can copy
                                                    and paste into your apps.
                                                </p>
                                                <p className="mt-2 text-base text-zinc-500 dark:text-zinc-400">
                                                    Accessible. Open Source.
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                                                    components/AI-Input 05
                                                </p>
                                                <AIInput_05 />
                                            </div>
                                            <div className="flex flex-wrap gap-4 mt-8">
                                                <Link
                                                    href="/docs"
                                                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg 
                                                        bg-gradient-to-r from-zinc-900 to-zinc-800 dark:from-zinc-100 dark:to-zinc-200
                                                        text-white dark:text-zinc-900 
                                                        hover:shadow-lg hover:shadow-zinc-900/20 dark:hover:shadow-zinc-100/20
                                                        transition-all duration-200 ease-in-out"
                                                >
                                                    <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                                                    <span className="font-medium">
                                                        Explore Components
                                                    </span>
                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </Link>
                                                <Link
                                                    href="https://github.com/kokonut-labs/kokonutui"
                                                    target="_blank"
                                                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg
                                                        border border-zinc-200 dark:border-zinc-800
                                                        hover:bg-zinc-100 dark:hover:bg-zinc-800/50
                                                        hover:shadow-lg hover:shadow-zinc-900/10 dark:hover:shadow-zinc-100/10
                                                        transition-all duration-200"
                                                >
                                                    <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                                    <span className="font-medium">
                                                        View on GitHub
                                                    </span>
                                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="space-y-4 p-8 rounded-3xl 
                                        bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-900/50
                                        border border-zinc-200 dark:border-zinc-800"
                                    >
                                        <div className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                                            Buttons, Inputs & More
                                        </div>

                                        {/* Buttons Section */}
                                        <div className="space-y-6">
                                            <div className="space-y-4">
                                                {[
                                                    {
                                                        component: (
                                                            <Btn03
                                                                attractRadius={
                                                                    30
                                                                }
                                                            />
                                                        ),
                                                        label: "Magnetic Button",
                                                    },
                                                    {
                                                        component: <Btn05 />,
                                                        label: "Glowing Button",
                                                    },
                                                    {
                                                        component: (
                                                            <Btn09>
                                                                <Command
                                                                    className={cn(
                                                                        "w-4 h-4",
                                                                        "text-zinc-600 dark:text-zinc-400",
                                                                        "transition-all duration-300",
                                                                        "group-hover:scale-110",
                                                                        "group-hover:rotate-[-4deg]",
                                                                        "group-active:scale-95"
                                                                    )}
                                                                />
                                                                <span className="ml-2 text-sm text-zinc-600 dark:text-zinc-400">
                                                                    CMD + K
                                                                </span>
                                                            </Btn09>
                                                        ),
                                                    },
                                                ].map((btn, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex flex-col items-center"
                                                    >
                                                        <div className="h-16 flex items-center">
                                                            {btn.component}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Input Section */}
                                            <div className="flex flex-col items-center pt-8">
                                                <Input_08 label="" />
                                            </div>
                                        </div>

                                        <p className="text-sm text-center text-zinc-500 dark:text-zinc-400 mt-4">
                                            + more available
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-6 text-base text-zinc-500 dark:text-zinc-400">
                <Arrow25 className="w-12 h-12 rotate-180" />
                <span>Built with KokonutUI components</span>
            </div>
            <div className="text-center mt-24 mb-16">
                <div
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm 
                    bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20
                    border border-emerald-200/50 dark:border-emerald-800/50 shadow-sm"
                >
                    <Sparkles className="w-4 h-4 mr-2 text-emerald-500" />
                    <span>50+ Components and Growing</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400">
                    Open Source, Customizable & Accessible
                </h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400 w-10/12 mx-auto">
                    Cards, Buttons, Lists, AI Inputs, Alerts, and more.
                </p>
            </div>
        </main>
    );
}
