"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PricingFeature {
    text: string;
    included: boolean;
}

interface Pricing_04Props {
    price: string;
    title?: string;
    subtitle?: string;
    description?: string;
    interval?: "monthly" | "yearly";
    highlighted?: boolean;
    features?: PricingFeature[];
    ctaText?: string;
}

export function Pricing_04({
    price = "399",
    title = "Business Pro",
    subtitle = "Most Popular",
    description = "Perfect for growing businesses and teams",
    interval = "monthly",
    highlighted = false,
    ctaText = "Get started",
    features = [
        { text: "Unlimited team members", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Priority support", included: true },
        { text: "Custom integrations", included: true },
    ],
}: Pricing_04Props) {
    return (
        <Card
            className={cn(
                "relative flex flex-col h-full p-6",
                "bg-white dark:bg-zinc-900",
                "border border-zinc-200 dark:border-zinc-800",
                "transition-all duration-200",
                highlighted && [
                    "shadow-lg",
                    "border-zinc-900/10 dark:border-white/10",
                    "ring-1 ring-zinc-900/5 dark:ring-white/5",
                ]
            )}
        >
            <div className="space-y-4 mb-8">
                {highlighted && (
                    <div
                        className="inline-flex px-3 py-1 rounded-full 
                        text-xs font-medium
                        bg-zinc-900/5 dark:bg-white/5 
                        text-zinc-900 dark:text-white"
                    >
                        {subtitle}
                    </div>
                )}

                <div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                        {title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                        {description}
                    </p>
                </div>

                <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-zinc-900 dark:text-white">
                        ${price}
                    </span>
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                        /{interval}
                    </span>
                </div>
            </div>

            <div className="flex-1">
                <ul className="space-y-3 mb-8">
                    {features.map((feature, index) => (
                        <li
                            key={index}
                            className={cn(
                                "flex items-start gap-3 text-sm",
                                feature.included
                                    ? "text-zinc-700 dark:text-zinc-300"
                                    : "text-zinc-400 dark:text-zinc-500"
                            )}
                        >
                            <Check
                                className={cn(
                                    "h-4 w-4 mt-0.5 flex-shrink-0",
                                    feature.included
                                        ? "text-zinc-900 dark:text-white"
                                        : "text-zinc-300 dark:text-zinc-600"
                                )}
                            />
                            {feature.text}
                        </li>
                    ))}
                </ul>
            </div>

            <Button
                className={cn(
                    "w-full h-11 text-sm font-medium transition-all duration-200",
                    highlighted
                        ? [
                              "bg-zinc-900 dark:bg-white",
                              "text-white dark:text-zinc-900",
                              "hover:bg-zinc-800 dark:hover:bg-zinc-100",
                              "ring-1 ring-zinc-900/5 dark:ring-white/5",
                              "shadow-sm hover:shadow",
                          ]
                        : [
                              "bg-zinc-50 dark:bg-zinc-800",
                              "text-zinc-900 dark:text-white",
                              "hover:bg-zinc-100 dark:hover:bg-zinc-700",
                              "ring-1 ring-zinc-900/5 dark:ring-white/5",
                          ]
                )}
            >
                {ctaText}
            </Button>

            <p className="mt-4 text-xs text-center text-zinc-400 dark:text-zinc-500">
                Cancel anytime • No card required
            </p>
        </Card>
    );
}
