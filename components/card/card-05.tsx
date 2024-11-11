import { ArrowUpRight, TrendingUp } from "lucide-react";
import Link from "next/link";

interface Card05Props {
    category?: string;
    title?: string;
    description?: string;
    metrics?: {
        label: string;
        value: string;
        trend?: number;
    }[];
    accentColor?: string;
    href?: string;
}

export default function Card_05({
    category = "Analytics",
    title = "Performance Metrics",
    description = "Track your key performance indicators and analyze growth trends over time.",
    metrics = [
        { label: "Conversion", value: "12.5%", trend: 2.1 },
        { label: "Users", value: "48.6k", trend: 5.4 },
        { label: "Revenue", value: "$2.4M", trend: 3.2 },
    ],
    accentColor = "#8B5CF6",
    href = "#",
}: Card05Props) {
    return (
        <div
            className="group relative h-auto min-h-[400px] rounded-2xl p-4 sm:p-8
            bg-white dark:bg-zinc-900
            border border-zinc-200 dark:border-zinc-800
            hover:border-zinc-300 dark:hover:border-zinc-700
            transition-all duration-200
            overflow-hidden"
        >
            <div className="relative h-full flex flex-col">
                <div className="flex items-start justify-between">
                    <div className="space-y-4">
                        <span
                            className="inline-block text-sm font-medium px-3 py-1 rounded-full
                                bg-zinc-100 dark:bg-zinc-800"
                            style={{
                                backgroundColor: `${accentColor}15`,
                                color: accentColor,
                            }}
                        >
                            {category}
                        </span>
                        <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                            {title}
                        </h3>
                    </div>
                    <div
                        className="p-2 rounded-full 
                        bg-zinc-100 dark:bg-zinc-800 
                        text-zinc-600 dark:text-zinc-400"
                    >
                        <ArrowUpRight className="w-4 h-4" />
                    </div>
                </div>

                <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {description}
                </p>

                <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-700 to-transparent" />

                <div className="mt-auto space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
                        {metrics.map((metric) => (
                            <div key={metric.label} className="relative">
                                <div className="space-y-2">
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                        {metric.label}
                                    </p>
                                    <div className="flex items-baseline gap-2 justify-between sm:justify-start">
                                        <p className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                                            {metric.value}
                                        </p>
                                        {metric.trend && (
                                            <span
                                                className="flex items-center text-xs font-medium"
                                                style={{
                                                    color: accentColor,
                                                }}
                                            >
                                                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                                                {metric.trend}%
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {href && (
                        <div className="pt-4">
                            <Link
                                href={href}
                                className="inline-flex items-center gap-2 text-sm font-medium
                                transition-colors duration-200
                                text-zinc-600 hover:text-zinc-900
                                dark:text-zinc-400 dark:hover:text-zinc-100 hover:underline"
                            >
                                Learn more
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
