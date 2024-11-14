import { PartyPopper } from "lucide-react";
import { HeroSection } from "@/components/hero";
import { TechnologyBadges } from "@/components/technology-badges";
import { BuildInterfacesCard } from "@/components/interfaceCards";
import { ComponentShowcaseCard } from "@/components/component-showcase-card";
import { CarouselWrapper } from "@/components/carousel-wrapper";
import { cn } from "@/lib/utils";
import { EndPage } from "@/components/end";

const CARD_BASE_CLASSES = cn(
    "p-8 rounded-3xl",
    "bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-900/50",
    "border border-zinc-200 dark:border-zinc-800"
);

export default function Home() {
    return (
        <main className="bg-white dark:bg-black/5 overflow-x-hidden">
            <p className="pt-16 text-sm text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-2 opacity-80">
                <PartyPopper className="w-4 h-4" />
                New components added weekly
            </p>

            <div className="pt-4">
                <div className="grid grid-rows-[auto_1fr_auto] min-h-screen px-4 pb-4 sm:pb-20 gap-4 sm:gap-12 sm:p-16">
                    <HeroSection />
                    <div className="space-y-8">
                        <CarouselWrapper />
                        <div className="relative mt-32 mb-24">
                            <div className="hidden sm:block absolute inset-0 -z-10">
                                <div className="hidden sm:absolute inset-0 bg-gradient-to-b from-zinc-100/0 via-zinc-100/50 to-zinc-100/0 dark:from-zinc-900/0 dark:via-zinc-900/50 dark:to-zinc-900/0" />
                                <div className="hidden sm:absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent dark:from-emerald-500/5 dark:via-emerald-500/2 dark:to-transparent blur-3xl" />
                            </div>
                            <div className="max-w-7xl mx-auto md:px-4">
                                <TechnologyBadges />
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[500px]">
                                    <BuildInterfacesCard
                                        className={CARD_BASE_CLASSES}
                                    />
                                    <ComponentShowcaseCard
                                        className={CARD_BASE_CLASSES}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <EndPage />
        </main>
    );
}
