import {
    Activity,
    ArrowUpRight,
    Plus,
    Target,
    CheckCircle2,
} from "lucide-react";
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
    dailyGoals?: {
        title: string;
        isCompleted: boolean;
    }[];
}

export default function Card_05({
    category = "Activity",
    title = "Today's Progress",
    metrics = [
        { label: "Move", value: "420", trend: 85 }, // value in calories
        { label: "Exercise", value: "35", trend: 70 }, // value in minutes
        { label: "Stand", value: "10", trend: 83 }, // value in hours
    ],
    dailyGoals = [
        { title: "30min Morning Yoga", isCompleted: true },
        { title: "10k Steps", isCompleted: false },
        { title: "Drink 2L Water", isCompleted: true },
    ],
}: Card05Props) {
    return (
        <div
            className="relative h-full rounded-3xl p-6
            bg-white dark:bg-black/5 
            border border-zinc-200 dark:border-zinc-800
            hover:border-zinc-300 dark:hover:border-zinc-700
            transition-all duration-300"
        >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800/50">
                    <Activity className="w-5 h-5 text-[#FF2D55]" />
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                        {title}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        {category}
                    </p>
                </div>
            </div>

            {/* Metrics Rings */}
            <div className="grid grid-cols-3 gap-4">
                {metrics.map((metric, index) => {
                    const colors = ["#FF2D55", "#2CD758", "#007AFF"];
                    return (
                        <div
                            key={metric.label}
                            className="relative flex flex-col items-center"
                        >
                            <div className="relative w-24 h-24">
                                {/* Background Ring */}
                                <div className="absolute inset-0 rounded-full border-4 border-zinc-200 dark:border-zinc-800/50" />
                                {/* Progress Ring */}
                                <div
                                    className="absolute inset-0 rounded-full border-4"
                                    style={{
                                        borderColor: colors[index],
                                        clipPath: `polygon(0 0, 100% 0, 100% ${metric.trend}%, 0 ${metric.trend}%)`,
                                    }}
                                />
                                {/* Center Content */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-xl font-bold text-zinc-900 dark:text-white">
                                        {metric.value}
                                    </span>
                                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                                        {index === 0
                                            ? "cal"
                                            : index === 1
                                            ? "min"
                                            : "hrs"}
                                    </span>
                                </div>
                            </div>
                            <span className="mt-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                {metric.label}
                            </span>
                            <span className="text-xs text-zinc-500">
                                {metric.trend}%
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* New Goals & Notes Section */}
            <div className="mt-8 space-y-6">
                {/* Section Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />

                {/* Daily Goals */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h4 className="flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            <Target className="w-4 h-4" />
                            Today's Goals
                        </h4>
                        <button
                            type="button"
                            className="p-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                        >
                            <Plus className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                        </button>
                    </div>

                    <div className="space-y-2">
                        {dailyGoals.map((goal) => (
                            <div
                                key={goal.title}
                                className="flex items-center gap-3 p-3 rounded-xl
                                    bg-zinc-50 dark:bg-zinc-900/50 
                                    border border-zinc-200/50 dark:border-zinc-800/50
                                    hover:border-zinc-300/50 dark:hover:border-zinc-700/50 
                                    transition-all"
                            >
                                <CheckCircle2
                                    className={`w-5 h-5 ${
                                        goal.isCompleted
                                            ? "text-emerald-500"
                                            : "text-zinc-400 dark:text-zinc-600"
                                    }`}
                                />
                                <span
                                    className={`text-sm ${
                                        goal.isCompleted
                                            ? "text-zinc-500 dark:text-zinc-400 line-through"
                                            : "text-zinc-700 dark:text-zinc-300"
                                    }`}
                                >
                                    {goal.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                    <Link
                        href="#"
                        className="inline-flex items-center gap-2 text-sm font-medium
                                text-zinc-600 hover:text-zinc-900 
                                dark:text-zinc-400 dark:hover:text-white
                                transition-colors duration-200"
                    >
                        View Activity Details
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
