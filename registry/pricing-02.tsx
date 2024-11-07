"use client";

import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingFeature {
    text: string;
    included: boolean;
}

interface Pricing_02Props {
    price: string;
    title?: string;
    subtitle?: string;
    description?: string;
    interval?: "monthly" | "yearly";
    isPopular?: boolean;
    features?: PricingFeature[];
}

export function Pricing_02({
    price = "399",
    title = "Enterprise",
    subtitle = "For larger teams",
    description = "All the features you need to scale your business",
    interval = "monthly",
    isPopular = false,
    features = [
        { text: "Unlimited team members", included: true },
        { text: "Advanced analytics dashboard", included: true },
        { text: "24/7 priority support", included: true },
        { text: "Custom integrations", included: true },
        { text: "Enterprise SLA", included: true },
    ],
}: Pricing_02Props) {
    return (
        <div className="w-full max-w-sm mx-auto">
            <div
                className={cn(
                    "relative p-8 rounded-3xl transition-all duration-300",
                    "bg-gradient-to-b from-white to-zinc-50/50",
                    "dark:from-zinc-900 dark:to-zinc-950",
                    "shadow-lg shadow-zinc-200/20 dark:shadow-none",
                    "border border-zinc-200 dark:border-zinc-800",
                    isPopular && [
                        "border-2",
                        "border-zinc-900 dark:border-zinc-100",
                        "dark:bg-gradient-to-b dark:from-zinc-900 dark:to-zinc-950",
                        "shadow-xl shadow-zinc-200/20 dark:shadow-zinc-950/50",
                    ],
                    "hover:border-zinc-300 dark:hover:border-zinc-700",
                    isPopular &&
                        "hover:border-zinc-900 dark:hover:border-zinc-100"
                )}
            >
                {isPopular && (
                    <div className="absolute -top-4 left-6">
                        <div
                            className="px-4 py-1.5 text-xs font-semibold tracking-wide rounded-full 
                            bg-zinc-900 dark:bg-white 
                            text-white dark:text-zinc-900
                            shadow-lg shadow-zinc-200/20 dark:shadow-zinc-900/30"
                        >
                            Most Popular
                        </div>
                    </div>
                )}

                <div className="space-y-6 mb-8">
                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                            {title}
                        </h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            {subtitle}
                        </p>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        {description}
                    </p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
                            ${price}
                        </span>
                        <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                            /{interval}
                        </span>
                    </div>
                </div>

                <div className="space-y-4 mb-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={cn(
                                "flex items-center gap-3 text-sm",
                                feature.included
                                    ? "text-zinc-700 dark:text-zinc-300"
                                    : "text-zinc-400 dark:text-zinc-500"
                            )}
                        >
                            <Check
                                className={cn(
                                    "h-5 w-5",
                                    feature.included
                                        ? "text-zinc-900 dark:text-white"
                                        : "text-zinc-300 dark:text-zinc-600"
                                )}
                            />
                            <span>{feature.text}</span>
                        </div>
                    ))}
                </div>

                <Button
                    className={cn(
                        "w-full relative group",
                        "h-14 rounded-xl font-medium",
                        "transition-all duration-300",
                        "overflow-hidden",
                        "hover:scale-[1.02]",
                        isPopular
                            ? [
                                  "bg-gradient-to-r from-zinc-900 to-black",
                                  "dark:from-white dark:to-zinc-200",
                                  "text-white dark:text-zinc-900",
                                  "shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset,_0_-1px_0_0_rgba(0,0,0,0.2)_inset]",
                                  "dark:shadow-[0_1px_0_0_rgba(0,0,0,0.08)_inset,_0_-1px_0_0_rgba(255,255,255,0.2)_inset]",
                                  "hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.1)]",
                                  "dark:hover:shadow-[inset_0_0_0_2px_rgba(0,0,0,0.1)]",
                                  "active:scale-[0.98]",
                              ]
                            : [
                                  "bg-white dark:bg-zinc-800",
                                  "text-zinc-900 dark:text-white",
                                  "border-2 border-zinc-900 dark:border-white",
                                  "hover:bg-zinc-900 hover:text-white",
                                  "dark:hover:bg-white dark:hover:text-zinc-900",
                                  "shadow-[0_1px_0_0_rgba(0,0,0,0.08)_inset]",
                                  "dark:shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset]",
                                  "active:scale-[0.98]",
                              ],
                        "before:absolute before:inset-0",
                        "before:bg-gradient-to-r before:from-black/0 before:via-white/5 before:to-black/0",
                        "before:translate-x-[-200%]",
                        "hover:before:translate-x-[200%]",
                        "before:transition-transform before:duration-[1.5s]",
                        "before:pointer-events-none"
                    )}
                >
                    <span className="relative flex items-center justify-center gap-2">
                        Get Started
                        <ArrowRight
                            className={cn(
                                "w-4 h-4 transition-all duration-300",
                                "group-hover:translate-x-1",
                                isPopular
                                    ? "text-white/90 dark:text-zinc-900/90"
                                    : "text-zinc-900 dark:text-white group-hover:text-white dark:group-hover:text-zinc-900"
                            )}
                        />
                    </span>
                </Button>
                <p className="mt-6 text-xs text-center text-zinc-500 dark:text-zinc-400">
                    No credit card required • Cancel anytime
                </p>
            </div>
        </div>
    );
}
