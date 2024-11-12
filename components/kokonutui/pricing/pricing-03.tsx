import { Sparkles, Rocket, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingFeature {
    text: string;
    included: boolean;
}

interface Pricing_03Props {
    tier: "starter" | "pro" | "enterprise";
    price: string;
    title?: string;
    description?: string;
    interval?: "monthly" | "yearly";
    features?: PricingFeature[];
}

export default function Pricing_03({
    tier = "pro",
    price = "49",
    title = "Pro Plan",
    description = "Perfect for growing businesses",
    interval = "monthly",
    features = [
        { text: "All starter features", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Priority support", included: true },
    ],
}: Pricing_03Props) {
    const tiers = {
        starter: {
            icon: Star,
            gradient: "from-emerald-500 to-teal-500",
        },
        pro: {
            icon: Sparkles,
            gradient: "from-violet-600 to-indigo-600",
        },
        enterprise: {
            icon: Rocket,
            gradient: "from-fuchsia-600 to-pink-600",
        },
    };

    const IconComponent = tiers[tier].icon;
    const gradientClass = tiers[tier].gradient;

    return (
        <div className="w-full max-w-sm transition-transform duration-200 hover:-translate-y-2">
            <div className="relative group">
                <div
                    className={cn(
                        "absolute inset-0 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity -z-10",
                        `bg-gradient-to-r ${gradientClass}`
                    )}
                />

                <div className="relative rounded-2xl border border-zinc-200/50 dark:border-zinc-800 backdrop-blur-sm bg-white/50 dark:bg-zinc-900/50 overflow-hidden">
                    <div
                        className={cn(
                            "p-6 text-white",
                            `bg-gradient-to-r ${gradientClass}`
                        )}
                    >
                        <div className="flex items-center justify-between mb-3">
                            <IconComponent className="w-6 h-6" />
                            <div className="px-3 py-1 rounded-full bg-white/20 text-xs font-medium">
                                {tier.toUpperCase()}
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{title}</h3>
                        <p className="text-sm opacity-90">{description}</p>
                    </div>
                    <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
                        <div className="flex items-end gap-2">
                            <span className="text-4xl font-bold">${price}</span>
                            <span className="text-zinc-500 dark:text-zinc-400 mb-1">
                                /{interval}
                            </span>
                        </div>
                    </div>

                    <div className="p-6 space-y-4">
                        <ul className="space-y-3">
                            {features.map((feature, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-3"
                                >
                                    <Zap
                                        className={cn(
                                            "w-4 h-4",
                                            `text-gradient-to-r ${gradientClass}`
                                        )}
                                    />
                                    <span className="text-sm text-zinc-700 dark:text-zinc-300">
                                        {feature.text}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <Button
                            className={cn(
                                "w-full mt-6 text-white",
                                `bg-gradient-to-r ${gradientClass}`,
                                "hover:opacity-90 transition-opacity"
                            )}
                        >
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
