"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
    name: string;
    highlight?: boolean;
    included: boolean;
}

interface PricingTier {
    name: string;
    price: {
        monthly: number;
        yearly: number;
    };
    description: string;
    features: Feature[];
    highlight?: boolean;
    cta?: string;
    gradient: string;
}

const defaultTiers: PricingTier[] = [
    {
        name: "Business",
        price: {
            monthly: 29,
            yearly: 290,
        },
        description: "For small teams and growing businesses",
        gradient: "from-blue-500/10 via-cyan-500/10 to-teal-500/10",
        features: [
            { name: "Up to 20 team members", included: true },
            { name: "Advanced analytics", included: true },
            { name: "24/7 email support", included: true },
            { name: "API access", included: true, highlight: true },
            { name: "Custom integrations", included: false },
            { name: "Enterprise features", included: false },
        ],
        cta: "Start free trial",
    },
    {
        name: "Enterprise",
        price: {
            monthly: 99,
            yearly: 990,
        },
        description: "For large organizations and enterprises",
        gradient: "from-violet-500/10 via-purple-500/10 to-fuchsia-500/10",
        highlight: true,
        features: [
            { name: "Unlimited team members", included: true },
            { name: "Advanced analytics", included: true },
            { name: "24/7 priority support", included: true },
            { name: "Unlimited API access", included: true, highlight: true },
            { name: "Custom integrations", included: true },
            { name: "Enterprise features", included: true },
        ],
        cta: "Contact sales",
    },
];

export default function Pricing_02({
    tiers = defaultTiers,
}: {
    tiers?: PricingTier[];
}) {
    const [isYearly, setIsYearly] = useState(false);
    const [hoveredTier, setHoveredTier] = useState<string | null>(null);

    return (
        <div className="w-full max-w-5xl mx-auto px-4">
            <div className="flex justify-center mb-16">
                <div
                    className="inline-flex p-1.5 bg-white/10 dark:bg-zinc-800/50 rounded-full 
                    backdrop-blur-xl ring-1 ring-white/25 dark:ring-zinc-700/50"
                >
                    {["Monthly", "Yearly"].map((period) => (
                        <button
                            key={period}
                            type="button"
                            onClick={() => setIsYearly(period === "Yearly")}
                            className={cn(
                                "relative px-8 py-2.5 text-sm font-medium rounded-full transition-all duration-300",
                                (period === "Yearly") === isYearly
                                    ? "text-white"
                                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-100"
                            )}
                        >
                            {(period === "Yearly") === isYearly && (
                                <div
                                    className="absolute inset-0 rounded-full bg-gradient-to-r 
                                    from-violet-500/90 via-purple-500/90 to-fuchsia-500/90"
                                />
                            )}
                            <span className="relative z-10">{period}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {tiers.map((tier) => (
                    <div
                        key={tier.name}
                        className="relative group"
                        onMouseEnter={() => setHoveredTier(tier.name)}
                        onMouseLeave={() => setHoveredTier(null)}
                    >
                        <div className="relative p-[2px] rounded-2xl overflow-hidden backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-r from-zinc-400/10 via-zinc-200/10 to-zinc-400/10 dark:from-zinc-800/30 dark:via-zinc-700/30 dark:to-zinc-800/30" />
                            <div className="relative rounded-2xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm p-8">
                                <div className="relative">
                                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                                        {tier.name}
                                    </h3>
                                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                        {tier.description}
                                    </p>
                                    <div className="mt-8">
                                        <div className="flex items-baseline">
                                            <span className="text-5xl font-bold text-zinc-900 dark:text-zinc-100">
                                                $
                                                {isYearly
                                                    ? tier.price.yearly
                                                    : tier.price.monthly}
                                            </span>
                                            <span className="ml-2 text-zinc-500 dark:text-zinc-400">
                                                /{isYearly ? "year" : "month"}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-8 space-y-4">
                                        {tier.features.map((feature) => (
                                            <div
                                                key={feature.name}
                                                className="flex items-center gap-3"
                                            >
                                                <div
                                                    className={cn(
                                                        "flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center",
                                                        feature.included
                                                            ? "bg-zinc-900/5 dark:bg-zinc-100/5"
                                                            : "bg-zinc-100 dark:bg-zinc-800"
                                                    )}
                                                >
                                                    <Check
                                                        className={cn(
                                                            "h-4 w-4",
                                                            feature.included
                                                                ? "text-zinc-900 dark:text-zinc-100"
                                                                : "text-zinc-400"
                                                        )}
                                                    />
                                                </div>
                                                <span className="text-sm text-zinc-700 dark:text-zinc-300">
                                                    {feature.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-8">
                                        <Button
                                            className={cn(
                                                "w-full relative",
                                                "bg-zinc-900 dark:bg-zinc-100",
                                                "text-white dark:text-zinc-900",
                                                "hover:bg-zinc-800 dark:hover:bg-zinc-200",
                                                "transition-all duration-300"
                                            )}
                                        >
                                            <span className="relative z-10 flex items-center justify-center gap-2">
                                                {tier.cta}
                                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                            </span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
