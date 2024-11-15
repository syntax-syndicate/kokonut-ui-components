"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Zap, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
    name: string;
    description: string;
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
    badge?: string;
    icon: React.ReactNode;
}

const defaultTiers: PricingTier[] = [
    {
        name: "Starter",
        price: {
            monthly: 15,
            yearly: 144,
        },
        description: "Perfect for individuals and small projects",
        badge: "Popular",
        icon: (
            <div className="relative">
                <div className="absolute inset-0 bg-emerald-500/20 dark:bg-emerald-500/10 blur-xl rounded-full animate-pulse" />
                <Zap className="w-6 h-6 relative z-10 text-emerald-600 dark:text-emerald-400 animate-[bounce_2s_ease-in-out_infinite]" />
            </div>
        ),
        features: [
            {
                name: "Basic Analytics",
                description: "Track essential metrics and user behavior",
                included: true,
            },
            {
                name: "5 Team Members",
                description: "Collaborate with a small team",
                included: true,
            },
            {
                name: "Basic Support",
                description: "Email support with 24h response time",
                included: true,
            },
            {
                name: "API Access",
                description: "Limited API access for basic integrations",
                included: false,
            },
        ],
    },
    {
        name: "Pro",
        price: {
            monthly: 49,
            yearly: 470,
        },
        description: "Ideal for growing teams and businesses",
        highlight: true,
        badge: "Best Value",
        icon: (
            <div className="relative">
                <div className="absolute inset-0 bg-violet-500/20 dark:bg-violet-500/10 blur-xl rounded-full animate-pulse" />
                <Sparkles className="w-6 h-6 relative z-10 text-violet-600 dark:text-violet-400 animate-[pulse_2s_ease-in-out_infinite]" />
            </div>
        ),
        features: [
            {
                name: "Advanced Analytics",
                description: "Deep insights and custom reports",
                included: true,
            },
            {
                name: "Unlimited Team Members",
                description: "Scale your team without limits",
                included: true,
            },
            {
                name: "Priority Support",
                description: "24/7 priority email and chat support",
                included: true,
            },
            {
                name: "Full API Access",
                description: "Complete API access with higher rate limits",
                included: true,
            },
        ],
    },
];

export default function Pricing_01({
    tiers = defaultTiers,
}: {
    tiers?: PricingTier[];
}) {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <div className="w-full max-w-4xl sm:mx-auto">
            <div className="flex justify-center mb-8">
                <div className="inline-flex items-center p-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-full">
                    {["Monthly", "Yearly"].map((period) => (
                        <button
                            key={period}
                            type="button"
                            onClick={() => setIsYearly(period === "Yearly")}
                            className={cn(
                                "px-6 py-2 text-sm font-medium rounded-full transition-all duration-200",
                                (period === "Yearly") === isYearly
                                    ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm"
                                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                            )}
                        >
                            {period}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {tiers.map((tier) => (
                    <div
                        key={tier.name}
                        className={cn(
                            "relative group",
                            "rounded-2xl border transition-all duration-300",
                            tier.highlight
                                ? "border-violet-500/20 dark:border-violet-400/20 shadow-xl"
                                : "border-zinc-200 dark:border-zinc-800 shadow-sm",
                            "hover:-translate-y-1 hover:shadow-lg",
                            tier.highlight
                                ? "hover:border-violet-500/30 dark:hover:border-violet-400/30"
                                : "hover:border-zinc-300 dark:hover:border-zinc-700"
                        )}
                    >
                        {tier.badge && (
                            <div className="absolute -top-3 left-4">
                                <Badge
                                    className={cn(
                                        "px-3 py-1",
                                        tier.highlight
                                            ? "bg-gradient-to-r from-violet-500 to-indigo-500"
                                            : "bg-gradient-to-r from-zinc-500 to-zinc-600",
                                        "text-white border-none shadow-lg"
                                    )}
                                >
                                    {tier.badge}
                                </Badge>
                            </div>
                        )}

                        <div className="p-4 sm:p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div
                                    className={cn(
                                        "p-3 rounded-xl",
                                        tier.highlight
                                            ? "bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400"
                                            : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                                    )}
                                >
                                    {tier.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                                    {tier.name}
                                </h3>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                                        $
                                        {isYearly
                                            ? tier.price.yearly
                                            : tier.price.monthly}
                                    </span>
                                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                                        /{isYearly ? "year" : "month"}
                                    </span>
                                </div>
                                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    {tier.description}
                                </p>
                            </div>

                            <div className="space-y-4">
                                {tier.features.map((feature) => (
                                    <div
                                        key={feature.name}
                                        className="flex gap-4"
                                    >
                                        <div
                                            className={cn(
                                                "mt-1 p-0.5 rounded-full transition-colors duration-200",
                                                feature.included
                                                    ? "text-emerald-600 dark:text-emerald-400"
                                                    : "text-zinc-400 dark:text-zinc-600"
                                            )}
                                        >
                                            <Check className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                                {feature.name}
                                            </div>
                                            <div className="text-sm text-zinc-500 dark:text-zinc-400">
                                                {feature.description}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 pt-0">
                            <Button
                                className={cn(
                                    "w-full group relative overflow-hidden transition-all duration-300",
                                    tier.highlight
                                        ? "bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 text-white shadow-lg shadow-violet-500/25"
                                        : "bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-900"
                                )}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Get started
                                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
